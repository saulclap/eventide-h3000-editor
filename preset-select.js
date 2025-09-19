// --- Algorithm Parameters JSON ---
let algorithmParameters = typeof ALGORITHM_PARAMETERS !== 'undefined' ? ALGORITHM_PARAMETERS : {};

function showAlgorithmParamsPanel(algorithm) {
    const panel = document.getElementById('algorithm-params-panel');
    const form = document.getElementById('algorithm-params-form');
    const title = document.getElementById('algorithm-params-title');
    form.innerHTML = '';
    title.textContent = `Algorithm Parameters (${algorithm})`;
    const params = algorithmParameters[algorithm];
    if (!params || params.length === 0) {
        panel.style.display = 'none';
        return;
    }
    let rowDiv = null;
    params.forEach((param, idx) => {
        if (idx % 4 === 0) {
            rowDiv = document.createElement('div');
            rowDiv.style.display = 'flex';
            rowDiv.style.gap = '16px';
            rowDiv.style.marginBottom = '12px';
            form.appendChild(rowDiv);
        }
        const paramDiv = document.createElement('div');
        paramDiv.style.flex = '1';
        paramDiv.style.display = 'flex';
        paramDiv.style.flexDirection = 'column';
        const label = document.createElement('label');
        label.textContent = `${param.name} (${param.unit})`;
        label.style.marginBottom = '4px';
        const input = document.createElement('input');
        input.type = 'number';
        input.min = param.minVal;
        input.max = param.maxVal;
        input.value = param.minVal;
        input.step = 1;
        input.style.marginBottom = '0';
        input.onchange = function () {
            // Send NRPN for this parameter
            sendNRPN(output, 0, param.nRPN, Number(input.value));
        };
        paramDiv.appendChild(label);
        paramDiv.appendChild(input);
        rowDiv.appendChild(paramDiv);
    });
    panel.style.display = 'block';
}
/**
 * Sends a Non-Registered Parameter Number (NRPN) message.
 * @param {object} output - MIDIOutput object
 * @param {number} channel - MIDI channel (0-15)
 * @param {number} parameter - 14-bit NRPN parameter number (0-16383)
 * @param {number} value - 14-bit value (0-16383)
 */
function sendNRPN(output, channel, parameter, value) {
    const nrpnMSB = (parameter >> 7) & 0x7F;
    const nrpnLSB = parameter & 0x7F;
    const valueMSB = (value >> 7) & 0x7F;
    const valueLSB = value & 0x7F;

    // NRPN parameter number
    output.send([0xB0 | channel, 0x63, nrpnMSB]); // NRPN MSB
    output.send([0xB0 | channel, 0x62, nrpnLSB]); // NRPN LSB
    // Value
    output.send([0xB0 | channel, 0x06, valueMSB]); // Data Entry MSB
    output.send([0xB0 | channel, 0x26, valueLSB]); // Data Entry LSB
}

function sendSysExBankSelect(output, channel, bank) {
    /* SysEx Bank Select for Eventide H3000

    The standard Bank Select message looks like this:

    hex: FO 7F nn 02 01 Oc 00 00 00 00 0b 00 F7
    dec: 240 127 Onn 002 001 0cc 000 000 000 000 00b 000 247

    where:
       hex: FO 7F nn 02 01 Oc 00 00 00 00 0b 00 F7
       dec: 240 127 Onn 002 001 0cc 000 000 000 000 00b 000 247
       nn is the device number (see MIDI Expert section)
       c is the channel number (0 through 15 for 1 to 16)
       b is the bank number (0 through 10)
    */
    output.send([0xF0, 0x7F, 0x00, 0x02, 0x01, (channel & 0x0F), 0x00, 0x00, 0x00, 0x00, (bank & 0x0F), 0x00, 0xF7]);
}

// This script loads presets from preset-list.txt, enables search by name, filter by algorithm, and sends MIDI changes.
// Use the PRESETS array from presets-data.js
let presets = typeof PRESETS !== 'undefined' ? PRESETS : [];
let midiAccess = null;
let output = null;

function parsePresetNumber(numStr) {
    // Preset number: first digit(s) = bank, last two digits = program
    const num = parseInt(numStr, 10);
    const numStrPad = numStr.padStart(3, '0');
    const bank = parseInt(numStrPad.slice(0, numStrPad.length - 2), 10);
    const program = parseInt(numStrPad.slice(-2), 10);
    return { bank, program };
}

function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    } catch {
        return [];
    }
}

function setFavorites(favs) {
    localStorage.setItem('favorites', JSON.stringify(favs));
}

function renderPresets(filterName = '', filterAlg = '') {
    const list = document.getElementById('preset-list');
    list.innerHTML = '';
    const showFavs = document.getElementById('show-favorites')?.checked;
    const favorites = getFavorites();
    let filtered = presets.filter(p => {
        const nameMatch = p.name.toLowerCase().includes(filterName.toLowerCase());
        const numberMatch = p.number.toString().startsWith(filterName);
        const nameOrNumberMatch = nameMatch || numberMatch;
        const algMatch = !filterAlg || p.algorithm === filterAlg;
        return nameOrNumberMatch && algMatch;
    });
    if (showFavs) {
        filtered = filtered.filter(p => favorites.includes(p.number));
    }
    for (const p of filtered) {
        const opt = document.createElement('option');
        opt.value = p.number;
        opt.text = `${p.number} - ${p.name} (${p.algorithm || 'UNKNOWN'})` + (favorites.includes(p.number) ? ' *' : '');
        opt.title = p.description || '';
        list.appendChild(opt);
    }
}

function updateAlgorithms() {
    const algSet = new Set(presets.map(p => p.algorithm));
    const algSelect = document.getElementById('algorithm');
    algSelect.innerHTML = '<option value="">All Algorithms</option>';
    for (const alg of Array.from(algSet).sort()) {
        const opt = document.createElement('option');
        opt.value = alg;
        opt.text = alg;
        algSelect.appendChild(opt);
    }
}

function loadPresets() {
    updateAlgorithms();
    renderPresets();
}

function sendPresetChange(presetNum) {
    const { bank, program } = parsePresetNumber(presetNum);
    if (!output) return;
    const bankMode = document.getElementById('bank-mode')?.value || 'nrpn';
    // Find the selected preset and its algorithm
    const preset = presets.find(p => p.number == presetNum);
    if (bankMode === 'nrpn') {
        sendNRPN(output, 0, 0x2005, bank);
        document.getElementById('status').textContent = `Sent Bank ${bank} (NRPN 0x2005), Program ${program}`;
    } else {
        sendSysExBankSelect(output, 0, bank);
        document.getElementById('status').textContent = `Sent Bank ${bank} (SysEx), Program ${program}`;
    }
    // Send Program Change
    output.send([0xC0, program]);
    // Show algorithm parameters panel for this preset's algorithm
    if (preset && preset.algorithm) {
        showAlgorithmParamsPanel(algorithmNumbers[preset.algorithm] + "");
    } else {
        document.getElementById('algorithm-params-panel').style.display = 'none';
    }
}

window.onload = function () {
    loadPresets();
    navigator.requestMIDIAccess({ sysex: true }).then(access => {
        midiAccess = access;
        const select = document.getElementById('midi-output');
        select.innerHTML = '';
        for (let entry of midiAccess.outputs.values()) {
            const option = document.createElement('option');
            option.value = entry.id;
            option.text = entry.name;
            select.appendChild(option);
        }
        select.onchange = function () {
            output = midiAccess.outputs.get(select.value);
        };
        if (select.options.length) {
            output = midiAccess.outputs.get(select.value);
        }
    });
    document.getElementById('search').oninput = function (e) {
        renderPresets(e.target.value, document.getElementById('algorithm').value);
    };
    document.getElementById('algorithm').onchange = function (e) {
        renderPresets(document.getElementById('search').value, e.target.value);
    };
    document.getElementById('show-favorites').onchange = function () {
        renderPresets(document.getElementById('search').value, document.getElementById('algorithm').value);
    };
    document.getElementById('send').onclick = function () {
        const presetNum = document.getElementById('preset-list').value;
        if (!presetNum) return;
        sendPresetChange(presetNum);
    };
    document.getElementById('preset-list').onchange = function () {
        const presetNum = document.getElementById('preset-list').value;
        if (!presetNum) return;
        const favorites = getFavorites();
        const favButton = document.getElementById('toggle-favorite');
        favButton.textContent = favorites.includes(presetNum) ? 'Remove Favorite' : 'Add Favorite';
    };
    document.getElementById('toggle-favorite').onclick = function () {
        const presetNum = document.getElementById('preset-list').value;
        if (!presetNum) return;
        let favorites = getFavorites();
        if (favorites.includes(presetNum)) {
            favorites = favorites.filter(f => f !== presetNum);
        } else {
            favorites.push(presetNum);
        }
        setFavorites(favorites);

        // Update button text after toggling
        const favButton = document.getElementById('toggle-favorite');
        favButton.textContent = favorites.includes(presetNum) ? 'Remove Favorite' : 'Add Favorite';

        renderPresets(document.getElementById('search').value, document.getElementById('algorithm').value);

    };
};
