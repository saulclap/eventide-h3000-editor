
const PRESETS = [
  {
    "number": "100",
    "name": "Diatonic Shift",
    "algorithm": "DIATONIC SHIFT",
    "description": "Left only"
  },
  {
    "number": "101",
    "name": "Layered Shift",
    "algorithm": "LAYERED SHIFT",
    "description": "Left only"
  },
  {
    "number": "102",
    "name": "Dual Shift",
    "algorithm": "DUAL SHIFT",
    "description": "L & R independent"
  },
  {
    "number": "103",
    "name": "Stereo Shift",
    "algorithm": "STEREO SHIFT",
    "description": "L & R stereo"
  },
  {
    "number": "104",
    "name": "Reverse Shift",
    "algorithm": "REVERSE SHIFT",
    "description": "Left only"
  },
  {
    "number": "105",
    "name": "Swept Combs",
    "algorithm": "SWEPT COMBS",
    "description": "L only or L&R stereo"
  },
  {
    "number": "106",
    "name": "Swept Reverb",
    "algorithm": "SWEPT REVERB",
    "description": "SWEPT REVERB L & R stereo"
  },
  {
    "number": "107",
    "name": "Reverb Factory",
    "algorithm": "REVERB FACTORY",
    "description": "Left only"
  },
  {
    "number": "108",
    "name": "Ultra-Tap",
    "algorithm": "ULTRA-TAP",
    "description": "L only or L&R sum"
  },
  {
    "number": "109",
    "name": "Long Digiplex",
    "algorithm": "LONG DIGIPLEX",
    "description": "Left only"
  },
  {
    "number": "110",
    "name": "Dual Digiplex",
    "algorithm": "DUAL DIGIPLEX",
    "description": "L only or L&R indep."
  },
  {
    "number": "111",
    "name": "Patch Factory",
    "algorithm": "PATCH FACTORY",
    "description": "Left only"
  },
  {
    "number": "112",
    "name": "Stutter",
    "algorithm": "STUTTER",
    "description": "L & R summed"
  },
  {
    "number": "113",
    "name": "Timesqueeze",
    "algorithm": "TIMESQUEEZE",
    "description": "L & R stereo"
  },
  {
    "number": "114",
    "name": "Dense Room",
    "algorithm": "DENSE ROOM",
    "description": "Left only"
  },
  {
    "number": "115",
    "name": "Vocoder",
    "algorithm": "VOCODER",
    "description": "L carrier / R prog sig"
  },
  {
    "number": "116",
    "name": "Multi-Shift",
    "algorithm": "MULTI-SHIFT",
    "description": "L & R independent"
  },
  {
    "number": "117",
    "name": "Band Delay",
    "algorithm": "BAND DELAY",
    "description": "L & R summed"
  },
  {
    "number": "118",
    "name": "String Modeler",
    "algorithm": "STRING MODELER",
    "description": "Left only"
  },
  {
    "number": "119",
    "name": "Phaser",
    "algorithm": "PHASER",
    "description": "Left only"
  },
  {
    "number": "120",
    "name": "Studio Sampler|One",
    "algorithm": "STUDIO SAMPLER",
    "description": "L only or L&R stereo"
  },
  {
    "number": "121",
    "name": "Studio Sampler|Two",
    "algorithm": "STUDIO SAMPLER",
    "description": "L only or L&R stereo"
  },
  {
    "number": "122",
    "name": "Modfactory|One",
    "algorithm": "MOD FACTORY|ONE",
    "description": "L & R independent"
  },
  {
    "number": "123",
    "name": "Modfactory|Two",
    "algorithm": "MOD FACTORY|TWO",
    "description": "L & R independent"
  },
  {
    "number": "150",
    "name": "12BYRD-STRING",
    "algorithm": "MULTI-SHIFT",
    "description": "Nice,12-stringy program. Uses lower octave doubling. Watch clipping."
  },
  {
    "number": "151",
    "name": "12 STRING & 5th",
    "algorithm": "MULTI-SHIFT",
    "description": "Similar to 12BYRD STRING with added 5th above."
  },
  {
    "number": "152",
    "name": "3+ OF ME",
    "algorithm": "DUAL DIGIPLEX",
    "description": "Doubling delays."
  },
  {
    "number": "153",
    "name": "60sSITAR FLANGE",
    "algorithm": "SWEPT REVERB",
    "description": "Psychedelic, twangy flange and reverb."
  },
  {
    "number": "154",
    "name": "8 SEC REVERB",
    "algorithm": "SWEPT REVERB",
    "description": "Long, SWEPT REVERB. Indoor stadium-like."
  },
  {
    "number": "155",
    "name": "ANALOG DELAYS 2",
    "algorithm": "PATCH FACTORY",
    "description": "Warm, filtered delays. Newer version of program 535 in SE. Delay 1 is longer and swept."
  },
  {
    "number": "156",
    "name": "BACK TAPPING",
    "algorithm": "ULTRA-TAP",
    "description": "Reversed-sounding delays with feedback."
  },
  {
    "number": "157",
    "name": "BassChor DDL",
    "algorithm": "MULTI-SHIFT",
    "description": "Nice doubling for the bass. Stereo image."
  },
  {
    "number": "158",
    "name": "BIG 5TH HARMONY",
    "algorithm": "MULTI-SHIFT",
    "description": "A 4th above and a 5th below."
  },
  {
    "number": "159",
    "name": "THE BIG CHEEZ 2",
    "algorithm": "MULTI-SHIFT",
    "description": "An octave Harmonizerr thing with 'roomy,' ambient delays added."
  },
  {
    "number": "160",
    "name": "BLACK JACK",
    "algorithm": "LAYERED SHIFT",
    "description": "Manually triggered sweep. Up then down."
  },
  {
    "number": "161",
    "name": "CHORUS SLAP",
    "algorithm": "SWEPT COMBS",
    "description": "Nice, swept thickener, sounds lush on everything."
  },
  {
    "number": "162",
    "name": "COOL PRES",
    "algorithm": "MOD FACTORY",
    "description": "Complex but warm delays. Dynamically affected by input."
  },
  {
    "number": "163",
    "name": "CRYSTAL ECHO 2",
    "algorithm": "REVERSE SHIFT",
    "description": "An H3000 original, slightly modified. A shimmering, hypnotic ambience. Derivative of H3000-SE preset 642."
  },
  {
    "number": "164",
    "name": "DELAY & HARM",
    "algorithm": "MULTI-SHIFT",
    "description": "A fifth is added and then sent through a delay."
  },
  {
    "number": "165",
    "name": "DETUNE + DELAY",
    "algorithm": "MULTI-SHIFT",
    "description": "Gentle detuning with a long delay."
  },
  {
    "number": "166",
    "name": "DIFFUSED SLAP",
    "algorithm": "ULTRA-TAP",
    "description": "Diffused delay with mix control."
  },
  {
    "number": "167",
    "name": "DOLPHIN TALK",
    "algorithm": "REVERSE SHIFT",
    "description": "How many times have you wanted that mating call sound of these aquatic mammals? Well, here it is."
  },
  {
    "number": "168",
    "name": "DREAM FANTASY3",
    "algorithm": "LAYERED SHIFT",
    "description": "Whole-tone extravaganza. 'Beam up' with a swelled harmonic on your guitar."
  },
  {
    "number": "169",
    "name": "DUAL GTR DELAYS",
    "algorithm": "DUAL DIGIPLEX",
    "description": "Two long delays, for really beeg guitar sound."
  },
  {
    "number": "170",
    "name": "FATASSCAN-B",
    "algorithm": "LAYERED SHIFT",
    "description": "Another thickenizer. Has soft knobs for easy control."
  },
  {
    "number": "171",
    "name": "FLESH 4 FANTASY",
    "algorithm": "SWEPT COMBS",
    "description": "Flangy, sweepy, doubly thing."
  },
  {
    "number": "172",
    "name": "FLOAT!",
    "algorithm": "ULTRA-TAP",
    "description": "Long, thick, swingin' delays."
  },
  {
    "number": "173",
    "name": "FLOAT FLANGE",
    "algorithm": "SWEPT REVERB",
    "description": "Strong, satisfying flange using negative feedback."
  },
  {
    "number": "174",
    "name": "FRIZZLE FRY",
    "algorithm": "ULTRA-TAP",
    "description": "Strong initial echoes, followed by diffuse, fed back echoes."
  },
  {
    "number": "175",
    "name": "G MAJ MOD WHEEL",
    "algorithm": "DIATONIC SHIFT",
    "description": "Turning the Mod Wheel on will turn mix up to 40% and bring in a third and fifth above your note. For live shows, those of you with MIDI pedals can control harmonies."
  },
  {
    "number": "176",
    "name": "GTR OFF STAGE L",
    "algorithm": "MOD FACTORY",
    "description": "If you use a stereo stage setup, send Left output to left cabinet and Right to right. A person standing in the middle will hear the guitar off to the left of the stage, when the balance is set properly. Experiment with settings and position of cabinets."
  },
  {
    "number": "177",
    "name": "GTR OFF STAGE R",
    "algorithm": "MOD FACTORY",
    "description": "Compliment of GTR OFF STAGE L."
  },
  {
    "number": "178",
    "name": "GUITAR ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "Nice and tight kind of room. Nice guitar space."
  },
  {
    "number": "179",
    "name": "HEAVEN I KNOW 9",
    "algorithm": "REVERSE SHIFT",
    "description": "Squirrely, backwards shift effect."
  },
  {
    "number": "180",
    "name": "HEAVENLY PAD DM",
    "algorithm": "REVERSE SHIFT",
    "description": "Just like it says. High, reversed echoes."
  },
  {
    "number": "181",
    "name": "HUNTER DELAY",
    "algorithm": "REVERB FACTORY",
    "description": "Unusual, quickly repeating delays, becoming diffused as they decay."
  },
  {
    "number": "182",
    "name": "JERRY RACE CAR",
    "algorithm": "MULTI-SHIFT",
    "description": "A small, roomy-type ambience with detuning."
  },
  {
    "number": "183",
    "name": "JIMI JAMES",
    "algorithm": "REVERSE SHIFT",
    "description": "Basic reverse delays - like playing backwards in one-second snippets ."
  },
  {
    "number": "184",
    "name": "LUSH LIFE",
    "algorithm": "SWEPT COMBS",
    "description": "Six wildly swept, tight delays with feedback. What a life."
  },
  {
    "number": "185",
    "name": "MAJ3RD-MIN3RD+",
    "algorithm": "MULTI-SHIFT",
    "description": "Lots of fun to solo with. A major chord is formed. One key fits all."
  },
  {
    "number": "186",
    "name": "MIGHTY DUCK",
    "algorithm": "MOD FACTORY",
    "description": "A delay that swells up when signal is removed. It 'ducks ' out of the way of a solo."
  },
  {
    "number": "187",
    "name": "MOD WHEEL CLIMB",
    "algorithm": "LAYERED SHIFT",
    "description": "Will pitch shift up an octave with a Mod Wheel (through MIDI)."
  },
  {
    "number": "188",
    "name": "MOD WHEEL DIVE",
    "algorithm": "LAYERED SHIFT",
    "description": "Compliment of Mod Wheel Climb. This one will dive an octave with a Mod Wheel controller through MIDI."
  },
  {
    "number": "189",
    "name": "MULTI SLAP",
    "algorithm": "SWEPT COMBS",
    "description": "Six swept delays that sound a little like a gated room."
  },
  {
    "number": "190",
    "name": "SHOULDER PHONE",
    "algorithm": "MOD FACTORY",
    "description": "Put the phone to your shoulder, this is what it sounds like."
  },
  {
    "number": "191",
    "name": "RAYGUN",
    "algorithm": "LAYERED SHIFT",
    "description": "Sounds like a PHASER. Set on STUN."
  },
  {
    "number": "192",
    "name": "ResoVibroEee",
    "algorithm": "SWEPT COMBS",
    "description": "Sharp, resonant reverb around low E."
  },
  {
    "number": "193",
    "name": "ROOM OF DOOM",
    "algorithm": "REVERB FACTORY",
    "description": "Warm, medium reverb. Groovy name."
  },
  {
    "number": "194",
    "name": "RHYTHM & REVERB",
    "algorithm": "MULTI-SHIFT",
    "description": "Nice ambience, built of short delays."
  },
  {
    "number": "195",
    "name": "SEAS OF CHEESE",
    "algorithm": "LONG DIGIPLEX",
    "description": "Long, long delay ."
  },
  {
    "number": "196",
    "name": "SLUDGWIK",
    "algorithm": "SWEPT COMBS",
    "description": "Another nice, Eventide, fat chorus."
  },
  {
    "number": "197",
    "name": "SON OF KAMIKAZE",
    "algorithm": "MOD FACTORY",
    "description": "Delays that dive after a phrase stops and input drops below threshold. Scary."
  },
  {
    "number": "198",
    "name": "STEREO W FLANGER",
    "algorithm": "SWEPT COMBS",
    "description": "Variation on the flange theme."
  },
  {
    "number": "199",
    "name": "SWEPT FLANGE 2",
    "algorithm": "SWEPT REVERB",
    "description": "Flange theme with a variation."
  },
  {
    "number": "200",
    "name": "ALIENS",
    "algorithm": "REVERSE SHIFT",
    "description": "Transforms voice into a rough, alien-like sound."
  },
  {
    "number": "201",
    "name": "AMBIENCE",
    "algorithm": "ULTRA-TAP",
    "description": "Use this to add ambience without muddying the mix."
  },
  {
    "number": "202",
    "name": "A MINOR CHORDS",
    "algorithm": "DIATONIC SHIFT",
    "description": "Play or sing a solo line in A minor. The H3000 will generate two perfect 'in-key' harmonies."
  },
  {
    "number": "203",
    "name": "ANTI-AMBIENCE",
    "algorithm": "REVERSE SHIFT",
    "description": "This is a reverb-like sound created from REVERSE SHIFT. Sounds great on guitar. Mr. Cooder's favorite."
  },
  {
    "number": "204",
    "name": "AVANT-GARDE",
    "algorithm": "REVERSE SHIFT",
    "description": "A REVERSE SHIFT effect that generates descending, chromatic lines."
  },
  {
    "number": "205",
    "name": "BASS SHIFT",
    "algorithm": "LAYERED SHIFT",
    "description": "A doubling effect intended for bass guitar. One channel is shifted up an octave. The other is slightly detuned."
  },
  {
    "number": "206",
    "name": "BIG SNARE",
    "algorithm": "REVERB FACTORY",
    "description": "Thickens up weak, drum sounds. Try increasing gate time to get a more 'gated' effect."
  },
  {
    "number": "207",
    "name": "BIG SWEEP",
    "algorithm": "SWEPT REVERB",
    "description": "To really hear the sweep, turn up the master feedback, make some noise, and then change the master delay."
  },
  {
    "number": "208",
    "name": "BIZARRMONIZER",
    "algorithm": "LAYERED SHIFT",
    "description": "Generates a bizarre, upward sweeping pitch shift."
  },
  {
    "number": "209",
    "name": "BRIGHT ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "A short, bright reverb."
  },
  {
    "number": "210",
    "name": "CANNONS",
    "algorithm": "REVERSE SHIFT",
    "description": "A unique, sweeping sound that's great on drums. Try playing a tom solo through this."
  },
  {
    "number": "211",
    "name": "CANYON",
    "algorithm": "REVERB FACTORY",
    "description": "Our biggest reverb sound, like an echoing canyon."
  },
  {
    "number": "212",
    "name": "CIRCLES",
    "algorithm": "ULTRA-TAP",
    "description": "A stereo-delay effect that seems to circle around your head. The effect is most noticeable on short sounds, like handclaps."
  },
  {
    "number": "213",
    "name": "DARK ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "A very mellow, room sound."
  },
  {
    "number": "214",
    "name": "DEATH FLANGE",
    "algorithm": "SWEPT REVERB",
    "description": "A deep, intense flange that's great for thickening up a synthesized bass line."
  },
  {
    "number": "215",
    "name": "DISCRETE-VERB",
    "algorithm": "SWEPT COMBS",
    "description": "A sparse, reverb effect."
  },
  {
    "number": "216",
    "name": "DRUM PROCESSOR",
    "algorithm": "SWEPT REVERB",
    "description": "This very different effect tends to make things that aren't drums sound like drums. Try adjusting the first four parameters for a variety of effects."
  },
  {
    "number": "217",
    "name": "DUAL H910s",
    "algorithm": "DUAL SHIFT",
    "description": "This program is designed to function like two Eventide H910 Harmonizer effects processors. The glitching you hear is intentional. This is a true dual program, where both left and right channels are processed separately."
  },
  {
    "number": "218",
    "name": "DUEL EFFECT",
    "algorithm": "DUAL SHIFT",
    "description": "The left input is processed with a detuned slap delay, while the right channel is processed with a downward pitch sweep."
  },
  {
    "number": "219",
    "name": "EXPLODING 'VERB",
    "algorithm": "REVERB FACTORY",
    "description": "This sounds like a reverb, until the input level goes above the gate threshold. Once triggered, the reverb sound grows explosively."
  },
  {
    "number": "220",
    "name": "FAT SLAP",
    "algorithm": "ULTRA-TAP",
    "description": "A slap delay with an ambient sound."
  },
  {
    "number": "221",
    "name": "FLANGE & REVERB",
    "algorithm": "SWEPT COMBS",
    "description": "This is a reverb with a subtle, flanging effect."
  },
  {
    "number": "222",
    "name": "FLANGER",
    "algorithm": "SWEPT COMBS",
    "description": "This is a basic stereo flanger. For the best effect, mix the H3000 output with the dry signal."
  },
  {
    "number": "223",
    "name": "GATED REVERB",
    "algorithm": "REVERB FACTORY",
    "description": "That very familiar drum effect. To change the length of the 'gate' sound, set the gate length parameter."
  },
  {
    "number": "224",
    "name": "GENERIC HALL",
    "algorithm": "ULTRA-TAP",
    "description": "A 'cheap,' reverb effect."
  },
  {
    "number": "225",
    "name": "GLITCH SHIFT",
    "algorithm": "DUAL SHIFT",
    "description": "A 'cheap' pitch shifter. If glitches are what you want, here they are."
  },
  {
    "number": "226",
    "name": "H949",
    "algorithm": "LAYERED SHIFT",
    "description": "This gives you what the H949 gave you. One output is a straight delay, while the other is pitch shifted. Both outputs are fed back to the input."
  },
  {
    "number": "227",
    "name": "HUMP-VERB",
    "algorithm": "ULTRA-TAP",
    "description": "A very unique reverb with a sound not unlike the name."
  },
  {
    "number": "228",
    "name": "JUST 3RD & 5TH",
    "algorithm": "DIATONIC SHIFT",
    "description": "A 'diatonic' pitch shifter that will generate just intoned 3rds and 5ths above the input. Make sure to set the key properly."
  },
  {
    "number": "229",
    "name": "JUST 4TH & 6TH",
    "algorithm": "DIATONIC SHIFT",
    "description": "This generates just intoned 4ths and 6ths above the input."
  },
  {
    "number": "230",
    "name": "LOCKER ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "A small, resonant reverb."
  },
  {
    "number": "231",
    "name": "MICROPITCHSHIFT",
    "algorithm": "LAYERED SHIFT",
    "description": "This is the perfect effect to fatten up or widen a sound without adding any color."
  },
  {
    "number": "232",
    "name": "MICROPITCH-SLAP",
    "algorithm": "LAYERED SHIFT",
    "description": "The left channel is micro-shifted and the right is a slap delay with micro-shift. Great for guitar."
  },
  {
    "number": "233",
    "name": "MIDI 3 ON 2",
    "algorithm": "DUAL DIGIPLEX",
    "description": "This preset will sync up its delay times to a MIDI drum machine or sequencer. The delays are in the familiar 3 on 2 pattern."
  },
  {
    "number": "234",
    "name": "MIDI PEDALSWEEP",
    "algorithm": "SWEPT REVERB",
    "description": "The MIDI foot pedal controller will manually sweep the delays in this program to generate a flange-like sound. The Modulation Wheel controls modulation of the delays."
  },
  {
    "number": "235",
    "name": "MIDIPLEX",
    "algorithm": "LONG DIGIPLEX",
    "description": "Connect a MIDI drum machine or sequencer to this program and the delay will automatically be in time."
  },
  {
    "number": "236",
    "name": "MODWHEEL REVERB",
    "algorithm": "SWEPT REVERB",
    "description": "When connected to a MIDI keyboard, the Mod Wheel controls the decay time and the Pitch Wheel controls the delay (room size). Use this to easily generate dramatic reverb sweeps."
  },
  {
    "number": "237",
    "name": "MULTI-FLANGE",
    "algorithm": "SWEPT COMBS",
    "description": "With six delays being swept at once, this program creates a very thick, flange sound."
  },
  {
    "number": "238",
    "name": "MUSIC SHIFT",
    "algorithm": "STEREO SHIFT",
    "description": "This stereo, pitch shift program is optimized for shifting input program material."
  },
  {
    "number": "239",
    "name": "PITCH QUANTIZE",
    "algorithm": "DIATONIC SHIFT",
    "description": "This program quantizes the input to the nearest chromatic interval."
  },
  {
    "number": "240",
    "name": "RANDOM GATE",
    "algorithm": "ULTRA-TAP",
    "description": "Great for drums. A 'gated reverb' sound created with the ULTRA-TAP program."
  },
  {
    "number": "241",
    "name": "REVERSE GATE",
    "algorithm": "ULTRA-TAP",
    "description": "Another standard, drum reverb."
  },
  {
    "number": "242",
    "name": "RICH CHORUS",
    "algorithm": "SWEPT COMBS",
    "description": "This program uses six delay lines to create a useful chorus effect. Try increasing 'm delay' to get a subtler but more realistic effect."
  },
  {
    "number": "243",
    "name": "RICH PLATE",
    "algorithm": "SWEPT REVERB",
    "description": "A slight sweep in this reverb gives it a rich sound and a smooth tail."
  },
  {
    "number": "244",
    "name": "ROCK 'N' ROLL",
    "algorithm": "LAYERED SHIFT",
    "description": "This one's a bit different. Capture an audio loop by pressing the 'sustain' parameter. Play a note on a MIDI keyboard to hear the loop. Moving the Mod Wheel will alter the loop points (a bit like rocking tape reels). Playing different notes will change the pitch of the loop."
  },
  {
    "number": "245",
    "name": "SCARY MOVIE",
    "algorithm": "REVERSE SHIFT",
    "description": "This program uses REVERSE SHIFT to create an evil-sounding voice. Use with guitar to create that tape splice, psychedelic sound."
  },
  {
    "number": "246",
    "name": "SHIMMERISH",
    "algorithm": "SWEPT REVERB",
    "description": "A recirculating delay effect that fades into a smooth reverb."
  },
  {
    "number": "247",
    "name": "SLAP/MICROPITCH",
    "algorithm": "DUAL SHIFT",
    "description": "The left channel is processed with a slap delay. The right channel is processed with a micro-shift."
  },
  {
    "number": "248",
    "name": "SMALL ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "A small-room reverb."
  },
  {
    "number": "249",
    "name": "SPACE FLANGE",
    "algorithm": "SWEPT REVERB",
    "description": "This program is a cross between a digital delay, a reverb and a flanger."
  },
  {
    "number": "250",
    "name": "SWEEP RIGHT",
    "algorithm": "ULTRA-TAP",
    "description": "This ULTRA-TAP program sweeps the taps across the stereo field."
  },
  {
    "number": "251",
    "name": "THICK LOOP",
    "algorithm": "SWEPT REVERB",
    "description": "A repeating delay that fades into a reverb sound."
  },
  {
    "number": "252",
    "name": "THIRD & FIFTH",
    "algorithm": "DIATONIC SHIFT",
    "description": "Generates an 'in-key' third and fifth above the input."
  },
  {
    "number": "253",
    "name": "THIRD & OCTAVE",
    "algorithm": "DIATONIC SHIFT",
    "description": "This generates a diatonic third above and an octave below the input."
  },
  {
    "number": "254",
    "name": "TONAL ROOM",
    "algorithm": "SWEPT REVERB",
    "description": "With pitched inputs, this reverb will actually generate many other tones. On drums, this is one of the biggest sounds you can get."
  },
  {
    "number": "255",
    "name": "TWELVE STRING",
    "algorithm": "LAYERED SHIFT",
    "description": "Using a micro-pitch shift and an octave shift this generates a great twelve-string sound. Wonderful for guitar."
  },
  {
    "number": "256",
    "name": "VOICE SHIFT",
    "algorithm": "STEREO SHIFT",
    "description": "This STEREO SHIFT program is optimized for pitch shifting program material whose main content is spoken voice."
  },
  {
    "number": "257",
    "name": "WARM HALL",
    "algorithm": "REVERB FACTORY",
    "description": "Our basic, reverb sound."
  },
  {
    "number": "259",
    "name": "SymphonicChorus",
    "algorithm": "SWEPT COMBS",
    "description": "Rich, multi-voice chorus."
  },
  {
    "number": "260",
    "name": "SYNTHISH ON YOU",
    "algorithm": "DUAL SHIFT",
    "description": "Sci-fi, ring-modulating thickener with added pitches above and below."
  },
  {
    "number": "261",
    "name": "THRAX-VERB",
    "algorithm": "REVERB FACTORY",
    "description": "Nice, full, medium reverb."
  },
  {
    "number": "262",
    "name": "TWIRLING ROOM",
    "algorithm": "SWEPT REVERB",
    "description": "Twirling-room reverb."
  },
  {
    "number": "263",
    "name": "UnderwaterDelay",
    "algorithm": "PATCH FACTORY",
    "description": "Gurgling and bubbling, these delays are something new."
  },
  {
    "number": "264",
    "name": "UNREAL 12 STRNG",
    "algorithm": "PATCH FACTORY",
    "description": "Adds processed, 12-stringy thickness to guitars."
  },
  {
    "number": "265",
    "name": "USEFUL VERB",
    "algorithm": "REVERB FACTORY",
    "description": "Bright and generic, medium-large verb. Quite roomy."
  },
  {
    "number": "266",
    "name": "MODULATOR-VERB",
    "algorithm": "MULTI-SHIFT",
    "description": "Unique ring-modulaty, yet reverb-like effect."
  },
  {
    "number": "267",
    "name": "OCTAVE ECHOES",
    "algorithm": "MULTI-SHIFT",
    "description": "Nice, subtle doubling with octave thrown into a delay."
  },
  {
    "number": "268",
    "name": "PanPitchDlyVerb",
    "algorithm": "MULTI-SHIFT",
    "description": "Shifted ambience, with a fourth above and a fifth below."
  },
  {
    "number": "269",
    "name": "PanOctavDlyVerb",
    "algorithm": "MULTI-SHIFT",
    "description": "Gently sweeping ambience with octave harmonic."
  },
  {
    "number": "270",
    "name": "SkilScale",
    "algorithm": "DIATONIC SHIFT",
    "description": "An example of a user-scale mapping one input note to a wild set of nonlinear, output notes."
  },
  {
    "number": "271",
    "name": "3 OCTAVES UP",
    "algorithm": "MULTI-SHIFT",
    "description": "Two Harmonizer effects processors, both set to 3 octaves up. Great on top four guitar strings."
  },
  {
    "number": "272",
    "name": "LO & BEHOLD",
    "algorithm": "REVERSE SHIFT",
    "description": "Octaves up and down, reversed ,then re-reversed."
  },
  {
    "number": "273",
    "name": "ABOUT YOU VIBD",
    "algorithm": "MOD FACTORY",
    "description": "Smooth vibrato with panning."
  },
  {
    "number": "274",
    "name": "CHORWASHdual",
    "algorithm": "MOD FACTORY",
    "description": "Long delays with thickener that cut their feedback with next input signal, cleaning up the wash of delays."
  },
  {
    "number": "275",
    "name": "MY BLOODY VAL",
    "algorithm": "REVERSE SHIFT",
    "description": "Evil, reversed and down shifted delays. Perfect for that scary, solo sound."
  },
  {
    "number": "276",
    "name": "DRY CHORUS",
    "algorithm": "MULTI-SHIFT",
    "description": "Subtle, chorus sound, tweaked for guitar."
  },
  {
    "number": "277",
    "name": "MILD CHORSDELAY",
    "algorithm": "MULTI-SHIFT",
    "description": "Self descriptive."
  },
  {
    "number": "278",
    "name": "FLUTTEROUS ROOM",
    "algorithm": "STEREO SHIFT",
    "description": "Warbly, bathroom-like ambience. Thickens with micro-shifting quite a bit."
  },
  {
    "number": "279",
    "name": "WATERY CHORUS",
    "algorithm": "LAYERED SHIFT",
    "description": "Name says it all."
  },
  {
    "number": "280",
    "name": "DRUNK ROOM",
    "algorithm": "REVERSE SHIFT",
    "description": "Unusual small-room ambience, built from reversed and slightly shifted delays."
  },
  {
    "number": "281",
    "name": "HARMONY ROOM 2",
    "algorithm": "LAYERED SHIFT",
    "description": "Cool, fifthy ambience."
  },
  {
    "number": "282",
    "name": "MARKS MED DARK",
    "algorithm": "REVERB FACTORY",
    "description": "This is a medium-small, dark room."
  },
  {
    "number": "283",
    "name": "LG GUITAR ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "A large room, suitable for guitar."
  },
  {
    "number": "284",
    "name": "LONG LEAD PING",
    "algorithm": "MOD FACTORY",
    "description": "Ducking, ping-pong delay that goes from side to side."
  },
  {
    "number": "286",
    "name": "PANDELAY250/125",
    "algorithm": "LAYERED SHIFT",
    "description": "Tight left and right delays with mix control for easy, live performance adjustment."
  },
  {
    "number": "287",
    "name": "GIANT 3D DELAYS",
    "algorithm": "ULTRA-TAP",
    "description": "Wide complex delays. Use delay to shorten."
  },
  {
    "number": "288",
    "name": "3D DELAY LEFT",
    "algorithm": "MOD FACTORY",
    "description": "Delay with off-the-speaker left image."
  },
  {
    "number": "289",
    "name": "GHOST 3D DELAY",
    "algorithm": "ULTRA-TAP",
    "description": "Spinning delays, randomly moving in space."
  },
  {
    "number": "290",
    "name": "INSIDE OUT 3D",
    "algorithm": "ULTRA-TAP",
    "description": "Delays moving ever outward from center."
  },
  {
    "number": "291",
    "name": "3D DUCKY DELAYS",
    "algorithm": "MOD FACTORY",
    "description": "Cave-like delays way off the left speaker."
  },
  {
    "number": "292",
    "name": "3D DUAL DUCK DLY",
    "algorithm": "MOD FACTORY",
    "description": "Another Eventide first - 3D Ducking taps."
  },
  {
    "number": "293",
    "name": "3D HAAS PAN",
    "algorithm": "MOD FACTORY",
    "description": "A manual-close delay manipulation w/ pan."
  },
  {
    "number": "294",
    "name": "FAR LEFT",
    "algorithm": "MOD FACTORY",
    "description": "Dry processing to pan input off left speaker."
  },
  {
    "number": "295",
    "name": "FAR RIGHT",
    "algorithm": "MOD FACTORY",
    "description": "Ditto."
  },
  {
    "number": "296",
    "name": "PRISTINE CLEAN$",
    "algorithm": "STRING MODELER",
    "description": "Unusual chorus effect with wide 3D image."
  },
  {
    "number": "297",
    "name": "SHIFT FAR LEFT",
    "algorithm": "PATCH FACTORY",
    "description": "3D micro-shifter on far left."
  },
  {
    "number": "298",
    "name": "SHIFT FAR RIGHT",
    "algorithm": "PATCH FACTORY",
    "description": "3D micro-shifter on far right."
  },
  {
    "number": "300",
    "name": "AIRPORT PAGE",
    "algorithm": "PATCH FACTORY",
    "description": "This program simulates a large paging system: (size) sets room size, (echo lvl) sets the amount of echo mixed into effect, (pitch) controls overall pitch effect, (mix) wet/dry effect mix."
  },
  {
    "number": "301",
    "name": "ALVIN",
    "algorithm": "LAYERED SHIFT",
    "description": "An easy way to get that familiar chipmunk sound: (munkness) controls chipmunk pitch."
  },
  {
    "number": "302",
    "name": "AUTO-MAX",
    "algorithm": "STUTTER",
    "description": "Automatically generates st-st-STUTTERs and sweeps: (rate) controls how often STUTTERs or sweeps occur."
  },
  {
    "number": "303",
    "name": "AUTOPANNER",
    "algorithm": "SWEPT COMBS",
    "description": "Produces automatic stereo: (left<->right) is panning, (delay) controls delay of panned signal, (feedback) increase for repeated panning echoes, (pan rate) sets speed of panning."
  },
  {
    "number": "304",
    "name": "AVANT-GARDE",
    "algorithm": "REVERSE SHIFT",
    "description": "Produces a unique, reverse pitch shifted effect: (pitch) controls amount of pitch shift, (length) controls reverse splice length, (mix) wet/dry effect mix."
  },
  {
    "number": "305",
    "name": "BACKWARDS",
    "algorithm": "REVERSE SHIFT",
    "description": "Turns the input around in one-second chunks: (length) controls length of reversed segments, (feedback) feeds back reversed output, (pitch) sets pitch of reversed signal, (mix) wet/dry effect mix."
  },
  {
    "number": "306",
    "name": "BRIGHT ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "A short, bright reverb: (size) controls room size, (distance) controls reverb predelay, (mix) wet/dry effect mix."
  },
  {
    "number": "307",
    "name": "CANNONS",
    "algorithm": "REVERSE SHIFT",
    "description": "Great on drums."
  },
  {
    "number": "308",
    "name": "CANYON",
    "algorithm": "REVERB FACTORY",
    "description": "Our biggest reverb sound, like an echoing canyon: (size) controls decay time of reverb; (predelay) sets predelay, in milliseconds; (mix) wet/dry effect mix."
  },
  {
    "number": "309",
    "name": "CAVE ECHO",
    "algorithm": "DUAL DIGIPLEX",
    "description": "A cave-like, long echo: (size) controls length of echo, (liveness) controls feedback on echo, (mix) wet/dry effect mix."
  },
  {
    "number": "310",
    "name": "CB",
    "algorithm": "PATCH FACTORY",
    "description": "Simulates CB radio sound, with two different voices and mike keying noise: (mike) triggers mike noise and changes pitch of speaker."
  },
  {
    "number": "311",
    "name": "CHORUS",
    "algorithm": "SWEPT COMBS",
    "description": "This program produces a swishy, chorus effect: (depth) sets depth of delay sweep, (rate) sets rate of delay sweep, (feedback) increase to get a more resonant sound, (mix) wet/dry effect mix."
  },
  {
    "number": "312",
    "name": "CIRCLES",
    "algorithm": "ULTRA-TAP",
    "description": "Try clapping into it. Many delays are panned to get a circular sweep."
  },
  {
    "number": "313",
    "name": "CUZZIN IT",
    "algorithm": "REVERSE SHIFT",
    "description": "Talk into this one. It might not be intelligible but it will be funny: (depth) increase to make voice lower in pitch, (speed) makes output 'splice' faster."
  },
  {
    "number": "314",
    "name": "CYLONS",
    "algorithm": "SWEPT COMBS",
    "description": "Creates a monotone, resonant voice sound: (resonate) makes resonance more intense, (tone) changes the pitch of the resonance."
  },
  {
    "number": "315",
    "name": "DRAGWAY AD",
    "algorithm": "PATCH FACTORY",
    "description": "Use this to create those clich_'d racecourse ads: (pitch) controls pitch of voice, (delay) controls amount of delay in echo, (echo) controls amount of echo in output mix, (feedback) controls amount of feedback."
  },
  {
    "number": "316",
    "name": "FADE TO DREAM",
    "algorithm": "LAYERED SHIFT",
    "description": "This effect produces a fade to a dream-like sound: (fade) triggers the fade, pressing again will fade back to dry; (faderate) increase to make the fade faster; (mix) wet/dry effect mix."
  },
  {
    "number": "317",
    "name": "FLANGER",
    "algorithm": "SWEPT COMBS",
    "description": "Increase delay to produce flanging effect: (depth) depth of delay sweep, (rate) rate of delay sweep, (feedback) increase for resonant effect, (mix) wet/dry effect mix."
  },
  {
    "number": "318",
    "name": "FLYING SAUCERS",
    "algorithm": "PATCH FACTORY",
    "description": "Adds downward, sweeping pitch to input signal: (length) controls decay time of effect, (mix) wet/dry effect mix."
  },
  {
    "number": "319",
    "name": "GREGORIAN CHANT",
    "algorithm": "PATCH FACTORY",
    "description": "This program filters and pitch shifts input voices to produce a chorus of droning monks."
  },
  {
    "number": "320",
    "name": "GREMLINS",
    "algorithm": "LAYERED SHIFT",
    "description": "This program randomly varies pitches and delays to produce interesting, unintelligible voices: (speed) controls how fast delay and pitch are changed, (amount) decrease to get less delay and pitch change."
  },
  {
    "number": "321",
    "name": "HELLVERB",
    "algorithm": "PATCH FACTORY",
    "description": "An eerie, reverb-like sound. Play with the controls!: (tone) makes reverb darker or brighter, (delay) sets amount of delay in feedback loop, (feedback) controls reverb decay, (pitch) controls pitch sweep."
  },
  {
    "number": "322",
    "name": "JAVA THE HUN",
    "algorithm": "LAYERED SHIFT",
    "description": "This sounds like the insidious voice of a famous movie character: (deepness) will lower the pitch of the voice."
  },
  {
    "number": "323",
    "name": "LOCKER ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "This reverb program sounds like a concrete room: (size) controls the reverb decay time, (predelay) use this to add distance to the reverb, (mix) wet/dry effect mix."
  },
  {
    "number": "324",
    "name": "LOWPASS FILTERS",
    "algorithm": "PATCH FACTORY",
    "description": "Two lowpass filters connected in series process the audio. Use cutoff 1 and 2 to control the rolloff frequencies. Use Q factor 1 and 2 to control the resonance of the filters."
  },
  {
    "number": "325",
    "name": "MAGIC",
    "algorithm": "LAYERED SHIFT",
    "description": "Whistle into the mic."
  },
  {
    "number": "326",
    "name": "MANY PITCHES",
    "algorithm": "SWEPT COMBS",
    "description": "Use this effect to produce a cacophony of different pitched voices: (freq) lowering this slows the pitch modulation, (amount) this will increase the pitch variation, (mix) wet/dry effect mix."
  },
  {
    "number": "327",
    "name": "MARTIANS",
    "algorithm": "LAYERED SHIFT",
    "description": "The planet is surrounded! Surrender, earthlings!: (pitch) makes the voice higher in pitch."
  },
  {
    "number": "328",
    "name": "MEGAPHONE",
    "algorithm": "PATCH FACTORY",
    "description": "This produces the effect of speaking through a megaphone: (echo) increasing this mixes in an echo, (distance) controls the delay time of the echo, (macho) turning this up lowers the voice pitch, (mix) wet/dry effect mix."
  },
  {
    "number": "329",
    "name": "MORE ALIENS",
    "algorithm": "REVERSE SHIFT",
    "description": "This produces a rough, monotone, alien voice: (pitch) sets the pitch of the voice, (splice) controls the 'splice' rate, (mix) wet/dry effect mix."
  },
  {
    "number": "330",
    "name": "NEW HOUSE",
    "algorithm": "SWEPT COMBS",
    "description": "Use this to get that metallic sound of an empty, reflective room: (size) use this to make the room bigger or smaller; (liveness) to make the room deader, lower this."
  },
  {
    "number": "331",
    "name": "OKSY ELEVEN",
    "algorithm": "TIMESQUEEZE",
    "description": "Get that deep, smooth, announcer voice with this: (deepness) adjusts the voice pitch."
  },
  {
    "number": "332",
    "name": "PLANET ZORGON",
    "algorithm": "REVERSE SHIFT",
    "description": "Use this to get an unintelligibly deep, space voice: (pitch) controls the voice pitch, (speed) controls 'splice' rate."
  },
  {
    "number": "333",
    "name": "PSYCHO-PANNER",
    "algorithm": "SWEPT COMBS",
    "description": "This program swirls the input in pitch, pan and delay: Wild! (range) controls the range of delay and pitch sweep, (feedback) lower this to reduce the decay time, (pan rate) controls the panning and sweep speed, (mix) wet/dry effect mix."
  },
  {
    "number": "334",
    "name": "RANDOM SHIFT",
    "algorithm": "LAYERED SHIFT",
    "description": "This program changes the pitch randomly, great for spreading sounds in stereo: (depth) controls the amount of random pitch shift, (rate) controls speed of pitch modulation, (mix) wet/dry effect mix."
  },
  {
    "number": "335",
    "name": "SHAKY",
    "algorithm": "LAYERED SHIFT",
    "description": "If you were standing on a paint shaker, your voice might sound like this: (amount) use this to increase the pitch modulation, (rate) controls the rate of pitch modulation. On Golden Pond, to boot!"
  },
  {
    "number": "336",
    "name": "SHIMMERISH",
    "algorithm": "SWEPT REVERB",
    "description": "This reverb starts out discrete and ends with a smooth tail: (length) controls the delay lengths, (decay) controls reverb decay time, (warble) use this to add a sweep to the reverb, (mix) wet/dry effect mix."
  },
  {
    "number": "337",
    "name": "SIMPLE DELAY",
    "algorithm": "LONG DIGIPLEX",
    "description": "Here is a basic delay, with control over delay, feedback, mix and a repeat control."
  },
  {
    "number": "338",
    "name": "SISSY",
    "algorithm": "LAYERED SHIFT",
    "description": "This program turns a he-man into a 90-pound wimp: (% sissy) controls the voice pitch."
  },
  {
    "number": "339",
    "name": "SMALL ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "This is a small-room reverb: (size) controls reverb decay time, (mix) wet/dry effect mix."
  },
  {
    "number": "340",
    "name": "SPACE FLANGE",
    "algorithm": "SWEPT REVERB",
    "description": "Use this to get a thick-loop delay with a flange: (delay) controls loop delay time, (depth) controls depth of delay sweep, (rate) controls delay sweep rate, (feedback) use this to control loop feedback."
  },
  {
    "number": "341",
    "name": "STADIUM",
    "algorithm": "PATCH FACTORY",
    "description": "This program simulates the low-fidelity PA system of a sports arena: (pitch) changes the pitch of the announcer's voice, (size) increase or decrease arena size, (echo 1) controls level of first echo, (echo 2) controls level of second echo."
  },
  {
    "number": "342",
    "name": "STEAM BATH",
    "algorithm": "PATCH FACTORY",
    "description": "This recreates the sound of a steam bath, including the steam: (size) adjusts the steam bath size, (echo) controls the level of the echo, (steam) controls the level of the steam hiss, (mix) wet/dry effect mix."
  },
  {
    "number": "343",
    "name": "ST PETERS CATH",
    "algorithm": "REVERB FACTORY",
    "description": "This is a large, reverb sound, like a cathedral: (size) controls reverb decay time, (pew) controls apparent distance from front of room."
  },
  {
    "number": "344",
    "name": "STUTTER",
    "algorithm": "STUTTER",
    "description": "Use this for that popular STUTTER sound: (stut) will trigger the STUTTER, (speed) controls the speed of the STUTTER, (count) controls how many STUTTERs occur, (pitch) controls the pitch of the voice."
  },
  {
    "number": "345",
    "name": "STUTTER DOWN",
    "algorithm": "STUTTER",
    "description": "This works just like the 'STUTTER' program, but the pitch will sweep down with the STUTTER effect."
  },
  {
    "number": "346",
    "name": "STUTTER DUAL",
    "algorithm": "STUTTER",
    "description": "This program allows two different STUTTER speeds to be set up and triggered: (STUTTER1) triggers a STUTTER using 'speed 1'; (speed 1) controls the speed of STUTTER 1, ditto for STUTTER 2."
  },
  {
    "number": "347",
    "name": "STUTTERRANDOM",
    "algorithm": "STUTTER",
    "description": "This program generates various random STUTTERs: (stut) triggers a random STUTTER; (up) triggers a STUTTER with pitch sweep up; (down) triggers a STUTTER with pitch sweep down; (updown) STUTTER and sweep up left, down right."
  },
  {
    "number": "348",
    "name": "STUTTER UP",
    "algorithm": "STUTTER",
    "description": "This program works like the 'STUTTER' program, except the pitch will sweep up with the STUTTER."
  },
  {
    "number": "349",
    "name": "STUTTER UP/DOWN",
    "algorithm": "STUTTER",
    "description": "This also works like the 'STUTTER Dual' program, but with one side sweeping up and the other down."
  },
  {
    "number": "350",
    "name": "SWEEP RIGHT",
    "algorithm": "ULTRA-TAP",
    "description": "Using multiple delays, this sweeps to the right: (delay) controls length of sweep, (feedback) use this to echo the sweep, (mix) wet/dry effect."
  },
  {
    "number": "351",
    "name": "SWEET FLANGE",
    "algorithm": "LAYERED SHIFT",
    "description": "Use this program for a smooth, subtle flange sound: (amount) controls depth of delay sweep, (freq) controls sweep rate, (feedback) use this to add resonance, (mix) wet/dry effect mix."
  },
  {
    "number": "352",
    "name": "TELEPHONE",
    "algorithm": "PATCH FACTORY",
    "description": "This imitates the sound quality of a telephone: (distance) simulates long distance by adding echoes, (noise) adds noise to voice for realism, (pitch) changes pitch of voice."
  },
  {
    "number": "353",
    "name": "THREE OF ME",
    "algorithm": "DUAL SHIFT",
    "description": "This program randomizes the input delay to simulate three voices: (detune) controls the amount of pitch shift, (sweep) adjusts the amount of delay modulation, (feedback) controls the amount of feedback, (mix) wet/dry effect mix."
  },
  {
    "number": "354",
    "name": "THREE ON TWO",
    "algorithm": "DUAL DIGIPLEX",
    "description": "The delays in this program are set such that the familiar three against two rhythm is produced: (feedback) controls the amount of feedback, (mix) wet/dry effect mix."
  },
  {
    "number": "355",
    "name": "TIME WARP",
    "algorithm": "DUAL SHIFT",
    "description": "Speeds up and slows down whatever goes in. Try counting to ten while listening to the output: (speed) controls rate of time warp, (amount) controls amount of delay variation, (pitch) controls pitch of output, (feedback) use this to generate warped echoes."
  },
  {
    "number": "356",
    "name": "TONAL ROOM",
    "algorithm": "SWEPT REVERB",
    "description": "This program is a unique, pitched reverb. This is great for percussive sounds."
  },
  {
    "number": "357",
    "name": "TRAFFIC REPORT",
    "algorithm": "PATCH FACTORY",
    "description": "This sounds like a person sitting in a traffic helicopter. Also generates the CB voice sound: (speed) controls the chopper rotor speed, (nearness) controls the voice/chopper noise."
  },
  {
    "number": "358",
    "name": "TV IN NEXT ROOM",
    "algorithm": "PATCH FACTORY",
    "description": "Using filtering and delays, this program simulates that TV or radio in the next room: (tinniness) increase this to make the sound tinnier, (muffle) increase this to make the sound muffled, (delay 1) controls the length of the first echo."
  },
  {
    "number": "359",
    "name": "UNDERWATER",
    "algorithm": "PATCH FACTORY",
    "description": "This is a pretty good simulation of dunking your head under water and speaking: (depth) controls the intensity of the effect, (speed) increase this to get more."
  },
  {
    "number": "360",
    "name": "WAH WAH",
    "algorithm": "PATCH FACTORY",
    "description": "This sounds like an automatic wah-wah pedal: (amount) controls the depth of the sweep, (speed) controls the wah-wah rate."
  },
  {
    "number": "361",
    "name": "WARM HALL",
    "algorithm": "REVERB FACTORY",
    "description": "This is a nice, medium-length reverb program: (size) controls the reverb decay time, (predelay) simulates distance from the source, (mix) wet/dry effect mix."
  },
  {
    "number": "362",
    "name": "WARPED 45",
    "algorithm": "STEREO SHIFT",
    "description": "This can ruin even the best records: (warpness) controls the amount of pitch variation."
  },
  {
    "number": "363",
    "name": "WARPED LP",
    "algorithm": "STEREO SHIFT",
    "description": "This is the same as Warped 45, but slower."
  },
  {
    "number": "366",
    "name": "1/2SEC GATORVRB",
    "algorithm": "REVERB FACTORY",
    "description": "1/2-second delayed, 1/2-second gated verb."
  },
  {
    "number": "367",
    "name": "ACIDREIGN",
    "algorithm": "REVERSE SHIFT",
    "description": "Detuned reversed slices."
  },
  {
    "number": "368",
    "name": "ACCURATE ROOM",
    "algorithm": "DENSE ROOM",
    "description": "Nuff said."
  },
  {
    "number": "369",
    "name": "AMBIENT BOOTH",
    "algorithm": "DENSE ROOM",
    "description": "Small, bathroom-sized booth reverb."
  },
  {
    "number": "370",
    "name": "ATLANTIS",
    "algorithm": "REVERSE SHIFT",
    "description": "Backwards, swelling delays."
  },
  {
    "number": "371",
    "name": "BASS SPACE",
    "algorithm": "DENSE ROOM",
    "description": "Bathroom with lots of rugs and towels."
  },
  {
    "number": "372",
    "name": "BriteBrassPlate",
    "algorithm": "REVERB FACTORY",
    "description": "Twangy plate, good on dark brass."
  },
  {
    "number": "373",
    "name": "DAVES SPIN",
    "algorithm": "MOD FACTORY",
    "description": "An improved spinning-speaker-cabinet simulator."
  },
  {
    "number": "374",
    "name": "CABO BOING",
    "algorithm": "SWEPT COMBS",
    "description": "Gurgling-sounding chorus."
  },
  {
    "number": "375",
    "name": "CHORUS SLOW",
    "algorithm": "SWEPT COMBS",
    "description": "Subtle, chorus effect."
  },
  {
    "number": "376",
    "name": "CLOSENCOUNTERS",
    "algorithm": "STRING MODELER",
    "description": "Mystic bell resonance. Try on anything."
  },
  {
    "number": "377",
    "name": "CLOSE MIKED",
    "algorithm": "REVERB FACTORY",
    "description": "Small, tiled bathroom."
  },
  {
    "number": "378",
    "name": "COMB SPACE 1",
    "algorithm": "REVERB FACTORY",
    "description": "Resonant, small space."
  },
  {
    "number": "379",
    "name": "COMPRESSED AIR",
    "algorithm": "DENSE ROOM",
    "description": "Compressed, close-miked sound."
  },
  {
    "number": "380",
    "name": "CRYSTALESQUE",
    "algorithm": "MULTI-SHIFT",
    "description": "Micropitch thickener with some tight, bathroomy delays."
  },
  {
    "number": "381",
    "name": "DOUBLE SPACE",
    "algorithm": "DENSE ROOM",
    "description": "Small, slap-room delay."
  },
  {
    "number": "382",
    "name": "DENSE HALL 2",
    "algorithm": "DENSE ROOM",
    "description": "Large, dense hall."
  },
  {
    "number": "383",
    "name": "DELAY W/ ROOM",
    "algorithm": "DENSE ROOM",
    "description": "Half-second delayed room."
  },
  {
    "number": "384",
    "name": "VERBY CHORUS",
    "algorithm": "SWEPT REVERB",
    "description": "Great reverb and chorus combo."
  },
  {
    "number": "385",
    "name": "DRAGON BREATH",
    "algorithm": "SWEPT REVERB",
    "description": "Tight, ambient delays. Try on guitar."
  },
  {
    "number": "386",
    "name": "DrewzNooRoom",
    "algorithm": "DENSE ROOM",
    "description": "Small, cozy reverb."
  },
  {
    "number": "387",
    "name": "DRUM AMBIENCE",
    "algorithm": "DENSE ROOM",
    "description": "Small, tight room."
  },
  {
    "number": "388",
    "name": "FLASHBACK",
    "algorithm": "STUTTER",
    "description": "Psychotic ,sweeping delay."
  },
  {
    "number": "389",
    "name": "SORE THROAT",
    "algorithm": "SWEPT COMBS",
    "description": "Gargling-sounding ambience."
  },
  {
    "number": "390",
    "name": "GATED FENCE",
    "algorithm": "REVERB FACTORY",
    "description": "Nice, gated verb for drums."
  },
  {
    "number": "391",
    "name": "GATED ROOM 2",
    "algorithm": "REVERB FACTORY",
    "description": "Twangy, gated room."
  },
  {
    "number": "392",
    "name": "GENERIC HALL",
    "algorithm": "ULTRA-TAP",
    "description": "High School Gym sound."
  },
  {
    "number": "393",
    "name": "GREAT DRUMSPACE",
    "algorithm": "REVERB FACTORY",
    "description": "Another small, rehearsel room."
  },
  {
    "number": "394",
    "name": "5SEC HANG VERB",
    "algorithm": "REVERB FACTORY",
    "description": "Gated verb with 5-second hang time."
  },
  {
    "number": "395",
    "name": "HUGE DENSE HALL",
    "algorithm": "DENSE ROOM",
    "description": "Dense, arena-like verb."
  },
  {
    "number": "396",
    "name": "HUGE SYNTHSPACE",
    "algorithm": "DENSE ROOM",
    "description": "Self-descriptive."
  },
  {
    "number": "397",
    "name": "ACID REIGN",
    "algorithm": "REVERSE SHIFT",
    "description": "Reversed delays. Very psychedelic."
  },
  {
    "number": "398",
    "name": "KALEIDOSCOPEYES",
    "algorithm": "SWEPT REVERB",
    "description": "Flangy, swirling delays."
  },
  {
    "number": "399",
    "name": "FAN WHIPPER",
    "algorithm": "MULTI-SHIFT",
    "description": "Sounds like sound through slow fan."
  },
  {
    "number": "400",
    "name": "A 440",
    "algorithm": "PATCH FACTORY",
    "description": "This program generates a 440 Hertz sine wave output: (level) controls the sine wave output level, (freq) use this to adjust the output frequency."
  },
  {
    "number": "401",
    "name": "ALERT",
    "algorithm": "PATCH FACTORY",
    "description": "This program produces a harsh alarm sound: (rate) controls the alarm sweep rate, (tone) controls the tone of the sound."
  },
  {
    "number": "402",
    "name": "BOINGY BUZZ",
    "algorithm": "PATCH FACTORY",
    "description": "A dramatic bass swell is produced when this program is triggered: (pluck) triggers the effect, (detune) use this to detune the left output pitch, (tone) makes the sound smoother or harsher, (tune) adjusts the overall tuning of the sound."
  },
  {
    "number": "403",
    "name": "DOORBELL",
    "algorithm": "PATCH FACTORY",
    "description": "This program generates a familiar doorbell sound when triggered: (ring) will ring the doorbell, (tone) adjusts the tone of the doorbell, (tune) controls the pitch of the doorbell."
  },
  {
    "number": "404",
    "name": "JET",
    "algorithm": "PATCH FACTORY",
    "description": "Look out! A 747 is passing through your control room!: (fly by) triggers the jet sound, (speed) controls the speed of the jet approach, (rumble) controls the amount of bass rumble, (whine) controls the amount of jet whine."
  },
  {
    "number": "405",
    "name": "JETTISON",
    "algorithm": "PATCH FACTORY",
    "description": "Similar to \"Jet,\" this sound is reminiscent of rocket stages being jettisoned, or perhaps a spaceship blasting off: (jettison) will trigger the effect, (speed) controls the speed of the jettison sound, (whine) controls the amount of high-pitched whine."
  },
  {
    "number": "406",
    "name": "LASER ECHO",
    "algorithm": "PATCH FACTORY",
    "description": "Use this to destroy those enemy invaders. This one sounds like a sci-fi movie or a video game noise: (fire) triggers the laser blast, (sweep) adjusts the pitch sweep of the sound, (feedback) controls the decay of the sound, (tune) controls the basic pitch."
  },
  {
    "number": "407",
    "name": "PLUCK",
    "algorithm": "PATCH FACTORY",
    "description": "This effect is a convincing simulation of a string being plucked, in stereo: (pluck) press this to pluck the string, (detune) controls the pitch of the left output, (tone) increase for harsher string sound, (tune) controls the pitch of the string."
  },
  {
    "number": "408",
    "name": "SIREN",
    "algorithm": "PATCH FACTORY",
    "description": "If a siren is what you need, here's where to look: (rate) controls the rate of the siren sweep, (range) controls the range of the pitch sweep."
  },
  {
    "number": "409",
    "name": "SONAR",
    "algorithm": "PATCH FACTORY",
    "description": "This simulates the sound of a submarine's sonar echo: (ping) triggers the sonar sound."
  },
  {
    "number": "410",
    "name": "STEREO COPTER",
    "algorithm": "PATCH FACTORY",
    "description": "Use this if you need an easy helicopter sound: (speed) controls the helicopter rotor speed."
  },
  {
    "number": "411",
    "name": "TANK ATTACK",
    "algorithm": "PATCH FACTORY",
    "description": "This program sounds like an arcade tank game: (fire) will fire the tank when pressed, (rumble) controls the bass rumble of the explosion."
  },
  {
    "number": "412",
    "name": "THUNDER",
    "algorithm": "PATCH FACTORY",
    "description": "Try our thunderbolt: (bolt) triggers the thunder effect."
  },
  {
    "number": "413",
    "name": "UFO",
    "algorithm": "PATCH FACTORY",
    "description": "This is our version of a spaceship taking off and landing: (take off) will make the spaceship take off. Press again to make it land."
  },
  {
    "number": "414",
    "name": "WAVE",
    "algorithm": "PATCH FACTORY",
    "description": "This sounds like a single, ocean wave: (waveit) triggers the wave sound."
  },
  {
    "number": "415",
    "name": "WIND STORM",
    "algorithm": "PATCH FACTORY",
    "description": "Put your parka on before loading. Here is our howling Arctic wind: (gales) controls the intensity of the storm, (mix) allows a voice to be mixed over the wind."
  },
  {
    "number": "416",
    "name": "BOB C'S PHASER",
    "algorithm": "PHASER",
    "description": "PHASER tweaked by Mr. Clearmountain himself."
  },
  {
    "number": "417",
    "name": "DEEPENED CLAPS",
    "algorithm": "ULTRA-TAP",
    "description": "Swelling, fat delay, good on percussives."
  },
  {
    "number": "418",
    "name": "SPACE FLANGE BC",
    "algorithm": "SWEPT REVERB",
    "description": "Customized preset with flangy, panning delays."
  },
  {
    "number": "419",
    "name": "STEREO W FLANGE",
    "algorithm": "SWEPT COMBS",
    "description": "Widens your stereo image with flangy things."
  },
  {
    "number": "420",
    "name": "SWEPT PANNER",
    "algorithm": "SWEPT COMBS",
    "description": "Has LFO tied to width."
  },
  {
    "number": "421",
    "name": "TITE STEREO DLY",
    "algorithm": "STEREO SHIFT",
    "description": "Real, tite-locked delays."
  },
  {
    "number": "422",
    "name": "TITE STEREO CUE",
    "algorithm": "MULTI-SHIFT",
    "description": "Tight, unlocked delays."
  },
  {
    "number": "423",
    "name": "VOC DOUBLER BC",
    "algorithm": "MULTI-SHIFT",
    "description": "A voice thickener with a moving pitch."
  },
  {
    "number": "425",
    "name": "2 MULTI EFFECTs",
    "algorithm": "MULTI-SHIFT",
    "description": "Two independent shifters with panning, semi-equivalent to two H949s."
  },
  {
    "number": "426",
    "name": "AMBIENT SLAP",
    "algorithm": "ULTRA-TAP",
    "description": "Quick slap with an element of reverb."
  },
  {
    "number": "427",
    "name": "BALLAD SNARE",
    "algorithm": "DENSE ROOM",
    "description": "A good verb for slow tunes. Has a long predelay."
  },
  {
    "number": "428",
    "name": "BOOGALOO",
    "algorithm": "PATCH FACTORY",
    "description": "A jungle-sounding patch, try on toms."
  },
  {
    "number": "429",
    "name": "CASTANET PSYCHO",
    "algorithm": "BAND DELAY",
    "description": "Rhythmic, resonant delays."
  },
  {
    "number": "430",
    "name": "CLACK",
    "algorithm": "PATCH FACTORY",
    "description": "Adds a clacky noise."
  },
  {
    "number": "431",
    "name": "CRACK O'SNARE",
    "algorithm": "PATCH FACTORY",
    "description": "One of several presets good for snare processing."
  },
  {
    "number": "432",
    "name": "DARK CELLAR",
    "algorithm": "REVERB FACTORY",
    "description": "Good for growing mushrooms."
  },
  {
    "number": "433",
    "name": "DAVE'S PLATE",
    "algorithm": "SWEPT REVERB",
    "description": "Plate-type reverb w/ a little chorusing."
  },
  {
    "number": "434",
    "name": "DITH VERB",
    "algorithm": "REVERB FACTORY",
    "description": "Unusual, warm and thick verb."
  },
  {
    "number": "435",
    "name": "DRUM WHEEZE",
    "algorithm": "PATCH FACTORY",
    "description": "Funny wheeze for something a little different."
  },
  {
    "number": "436",
    "name": "DRUNKIT",
    "algorithm": "SWEPT REVERB",
    "description": "Too much tequila the night before."
  },
  {
    "number": "437",
    "name": "DUAL FLAT FIXER",
    "algorithm": "MULTI-SHIFT",
    "description": "Correct the 'out-of-tuneness' of two vocalists at the same time. The knob will control Ch 1's pitch, and a pitch bend wheel will control Ch 2's. A sequencer will store your pitch changes if you record them to it."
  },
  {
    "number": "438",
    "name": "DUAL TOM SHIFT",
    "algorithm": "DUAL SHIFT",
    "description": "'NUFF SAID!"
  },
  {
    "number": "439",
    "name": "DUCK VERB",
    "algorithm": "REVERB FACTORY",
    "description": "Reverb will 'duck' slightly while a signal is present."
  },
  {
    "number": "440",
    "name": "EMPTY WATER TANKS",
    "algorithm": "REVERB FACTORY",
    "description": "Sounds like the inside of one of those water towers."
  },
  {
    "number": "441",
    "name": "FALLING FLANGE",
    "algorithm": "PATCH FACTORY",
    "description": "Use 'P DELAY' to change repeat interval."
  },
  {
    "number": "442",
    "name": "FAT FLAM",
    "algorithm": "LAYERED SHIFT",
    "description": "Tight delays to widen drum strokes."
  },
  {
    "number": "443",
    "name": "FineYoung Snare",
    "algorithm": "PATCH FACTORY",
    "description": "Pretty, poppy processing."
  },
  {
    "number": "444",
    "name": "FIXT PITCH TOMS",
    "algorithm": "DIATONIC SHIFT",
    "description": "Interesting tom thickener."
  },
  {
    "number": "445",
    "name": "FUNKshunTAPS",
    "algorithm": "ULTRA-TAP",
    "description": "Discrete, reverb-like delays sweeping right to left."
  },
  {
    "number": "446",
    "name": "GATED KIK",
    "algorithm": "REVERB FACTORY",
    "description": "This is a gated, bass drum reverb."
  },
  {
    "number": "447",
    "name": "GATED SNARE",
    "algorithm": "REVERB FACTORY",
    "description": "Guess what this is?"
  },
  {
    "number": "448",
    "name": "GRIF RANDOM",
    "algorithm": "DUAL SHIFT",
    "description": "A great thickener reminiscent of H949 random."
  },
  {
    "number": "449",
    "name": "H949 REV 3",
    "algorithm": "PATCH FACTORY",
    "description": "Basic configuration and sound of H949."
  },
  {
    "number": "450",
    "name": "HAT ROOM",
    "algorithm": "SWEPT REVERB",
    "description": "Check your hi-hat in here."
  },
  {
    "number": "451",
    "name": "HI HAT BREATH",
    "algorithm": "SWEPT REVERB",
    "description": "Makes hat a little more ambient."
  },
  {
    "number": "452",
    "name": "HI HAT DELAY",
    "algorithm": "PATCH FACTORY",
    "description": "EQ'd delays for hat."
  },
  {
    "number": "453",
    "name": "ITCHY COO TOM",
    "algorithm": "SWEPT REVERB",
    "description": "Try it on toms. By the way, do you remember the song?"
  },
  {
    "number": "454",
    "name": "JOE'S GATE",
    "algorithm": "REVERB FACTORY",
    "description": "A nice, gated reverb. Thanks Joe!"
  },
  {
    "number": "455",
    "name": "JUNGLE 7",
    "algorithm": "BAND DELAY",
    "description": "Adds jungle rhythms in 7/8."
  },
  {
    "number": "456",
    "name": "KERR VERB",
    "algorithm": "REVERB FACTORY",
    "description": "Medium-dark, gated verb."
  },
  {
    "number": "457",
    "name": "KIT FLANGER",
    "algorithm": "SWEPT REVERB",
    "description": "Neato, overall kit flanger."
  },
  {
    "number": "458",
    "name": "LEXY ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "Bright-sounding room with white tail."
  },
  {
    "number": "459",
    "name": "LITE ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "Sounds great, less filling."
  },
  {
    "number": "460",
    "name": "LONG ROOM",
    "algorithm": "DENSE ROOM",
    "description": "Long Verb."
  },
  {
    "number": "461",
    "name": "LO PROCESSOR",
    "algorithm": "SWEPT REVERB",
    "description": "Adds low percussive ambience to anything."
  },
  {
    "number": "462",
    "name": "MIDI GATE VERB",
    "algorithm": "REVERB FACTORY",
    "description": "Use keyboard controller to change parameters. Sustain pedal is tied to gate and Mod Wheel is tied to decay."
  },
  {
    "number": "463",
    "name": "MIDI SWEPT VERB",
    "algorithm": "SWEPT REVERB",
    "description": "Size is tied to pitch wheel and the sweep is tied to modulation wheel."
  },
  {
    "number": "464",
    "name": "OCTAVE DOWNERs",
    "algorithm": "DIATONIC SHIFT",
    "description": "Both channels take the drums down an octave."
  },
  {
    "number": "465",
    "name": "One And Ah 16th",
    "algorithm": "ULTRA-TAP",
    "description": "Gives you great 16th note subdivisions ('one-and-ah' as Lawrence Welk used to say)."
  },
  {
    "number": "466",
    "name": "One Car Garage",
    "algorithm": "REVERB FACTORY",
    "description": "Small, tight reverb like a one-car garage."
  },
  {
    "number": "467",
    "name": "One Ee And Ah",
    "algorithm": "ULTRA-TAP",
    "description": "One ee and ah sixteenth note subdivisions."
  },
  {
    "number": "468",
    "name": "One Ee Ah 16ths",
    "algorithm": "ULTRA-TAP",
    "description": "One Ee Ah (16ths)."
  },
  {
    "number": "469",
    "name": "PERC WAH WAH",
    "algorithm": "PATCH FACTORY",
    "description": "And now, wah-wah for drums!"
  },
  {
    "number": "470",
    "name": "PHONERING DELAY",
    "algorithm": "ULTRA-TAP",
    "description": "Delays timed to sound like an old, phone-ring effect."
  },
  {
    "number": "471",
    "name": "ROOM 90x40x15",
    "algorithm": "ULTRA-TAP",
    "description": "Simulates discrete style reverb of small room with mentioned"
  },
  {
    "number": "472",
    "name": "ROCK ROOM",
    "algorithm": "DENSE ROOM",
    "description": "Power verb."
  },
  {
    "number": "473",
    "name": "SEXTUPLETS A",
    "algorithm": "ULTRA-TAP",
    "description": "Variation of above."
  },
  {
    "number": "474",
    "name": "SEXTUPLETS",
    "algorithm": "ULTRA-TAP",
    "description": "This is, well, sextuplet delays."
  },
  {
    "number": "475",
    "name": "SEWER VERB",
    "algorithm": "PATCH FACTORY",
    "description": "Foul , liquid-sounding reverb."
  },
  {
    "number": "476",
    "name": "SHORT ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "A small reverb (four-car garage?)."
  },
  {
    "number": "477",
    "name": "SIMMONIZE",
    "algorithm": "PATCH FACTORY",
    "description": "See (#476)."
  },
  {
    "number": "478",
    "name": "SMALL TILED RM",
    "algorithm": "REVERB FACTORY",
    "description": "The sound of Ivana's bathroom."
  },
  {
    "number": "479",
    "name": "SON OF BIGSNARE",
    "algorithm": "DENSE ROOM",
    "description": "Remember Big Snare (#576)?"
  },
  {
    "number": "480",
    "name": "STEREO TOM DLAY",
    "algorithm": "MULTI-SHIFT",
    "description": "Delays that will follow the panning of the inputs."
  },
  {
    "number": "481",
    "name": "SWEEP 8",
    "algorithm": "BAND DELAY",
    "description": "Pitched and timed delays."
  },
  {
    "number": "482",
    "name": "THICK RICK",
    "algorithm": "SWEPT REVERB",
    "description": "Thickening, sweeping ambience."
  },
  {
    "number": "483",
    "name": "TILED HAT ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "This is a very large bathroom."
  },
  {
    "number": "484",
    "name": "TImBrAl bRooM",
    "algorithm": "PATCH FACTORY",
    "description": "Wah-wahing ambience."
  },
  {
    "number": "485",
    "name": "TIMID VERB",
    "algorithm": "SWEPT REVERB",
    "description": "Subtle reverb/flanger."
  },
  {
    "number": "486",
    "name": "TINY WAREHOUSE",
    "algorithm": "DENSE ROOM",
    "description": "This is the reverb of a small Hoboken, N.J. sock outlet factory."
  },
  {
    "number": "487",
    "name": "TOMBALLS",
    "algorithm": "REVERB FACTORY",
    "description": "Good on toms."
  },
  {
    "number": "488",
    "name": "TOM SWEEP",
    "algorithm": "BAND DELAY",
    "description": "Pitched delays for toms."
  },
  {
    "number": "489",
    "name": "TRASHY DRUMS",
    "algorithm": "SWEPT REVERB",
    "description": "Want a really gritty drum sound? Load this one."
  },
  {
    "number": "490",
    "name": "TWINKIE SHIFT",
    "algorithm": "MULTI-SHIFT",
    "description": "Adds adorable, higher octaves."
  },
  {
    "number": "491",
    "name": "Two Warm Delays",
    "algorithm": "PATCH FACTORY",
    "description": "These are so useful to add ambience without \"swishing\" around."
  },
  {
    "number": "492",
    "name": "WARP 2",
    "algorithm": "SWEPT REVERB",
    "description": "Kind of a seasick preset. Warps pitch of input."
  },
  {
    "number": "493",
    "name": "WORD UP",
    "algorithm": "LAYERED SHIFT",
    "description": "Noise effect for snare or percussion."
  },
  {
    "number": "496",
    "name": "MOON TURN TIDES",
    "algorithm": "MOD FACTORY",
    "description": "Long delay that falls in pitch and time signal is removed."
  },
  {
    "number": "497",
    "name": "SMOOTH DELAYS",
    "algorithm": "MOD FACTORY",
    "description": "Slow, attacking delays with a lil' ducking."
  },
  {
    "number": "498",
    "name": "GIGUNDO CHORUS",
    "algorithm": "MOD FACTORY",
    "description": "Use on vocal chorus to enlarge and thicken."
  },
  {
    "number": "499",
    "name": "KAMIKAZE DELAYS",
    "algorithm": "MOD FACTORY",
    "description": "New, distorted delays that dive with signal."
  },
  {
    "number": "500",
    "name": "ADSR FILTER",
    "algorithm": "PHASER",
    "description": "When the sound into the H3500  goes over a threshold, a sweeping, 'wah'-like, filter effect is triggered."
  },
  {
    "number": "501",
    "name": "ADSR PHASER",
    "algorithm": "PHASER",
    "description": "Like above, the input audio level will trigger a sweeping, PHASER effect."
  },
  {
    "number": "502",
    "name": "ANALOG THICK",
    "algorithm": "PATCH FACTORY",
    "description": "A warm, chorused, echo sound. Two adjustable, lowpass filters provide the warmness."
  },
  {
    "number": "503",
    "name": "BASS CHORUS",
    "algorithm": "MULTI-SHIFT",
    "description": "Specifically tailored for bass, this is a simple, micro-pitched chorus."
  },
  {
    "number": "504",
    "name": "BUENOS NOTCHES",
    "algorithm": "PHASER",
    "description": "Pleasant, sweeping notches will result when this effect is mixed with the dry audio."
  },
  {
    "number": "505",
    "name": "DEATH FLANGE",
    "algorithm": "SWEPT REVERB",
    "description": "A deep, intense flange that's great for thickening up a synthesized bass line."
  },
  {
    "number": "506",
    "name": "DIGDLY & MICRO",
    "algorithm": "MULTI-SHIFT",
    "description": "Dual digital delays with micro-shift on the outputs. A nice sounding setup useful for thickening up a synthesized bass line."
  },
  {
    "number": "507",
    "name": "DGDLY+WAH+MICRO",
    "algorithm": "PATCH FACTORY",
    "description": "This is an unusual combination of a digital delay, a cycling 'wah- wah' filter, and a micro-pitch shift."
  },
  {
    "number": "508",
    "name": "DUAL H910 MICRO",
    "algorithm": "MULTI-SHIFT",
    "description": "This program is designed to function like two Eventide H910 Harmonizer effects processors. The glitching you hear is intentional. This is a true dual program, where both left and right channels are processed separately."
  },
  {
    "number": "509",
    "name": "ENVELOPE FILTER",
    "algorithm": "PHASER",
    "description": "This program consists of a resonant filter that sweeps as the input level changes. Try experimenting with the envelope-rate parameter."
  },
  {
    "number": "510",
    "name": "ENVELOPE PHASER",
    "algorithm": "PHASER",
    "description": "Here, a PHASER sweep follows the input signal level."
  },
  {
    "number": "511",
    "name": "FLANGE & REVERB'",
    "algorithm": "SWEPT COMBS",
    "description": "This is a reverb with a subtle, flanging effect."
  },
  {
    "number": "512",
    "name": "FLANGER",
    "algorithm": "SWEPT COMBS",
    "description": "This is a basic, stereo flanger. For the best effect, mix the H3500 output with the dry signal."
  },
  {
    "number": "513",
    "name": "INSTANT PHASER",
    "algorithm": "PHASER",
    "description": "A straightforward, sweeping PHASER, in memory of our famous product."
  },
  {
    "number": "514",
    "name": "JUST STEREO",
    "algorithm": "MULTI-SHIFT",
    "description": "A very subtle, micro-pitch shift. Just enough to add a presence to an otherwise flat, mono sound."
  },
  {
    "number": "515",
    "name": "MAGIC AIR",
    "algorithm": "MULTI-SHIFT",
    "description": "This has two upward micro-shifts and two delays in a tight, ambient formation. Use to liven and slightly raise flat vocals or to generally thicken sources."
  },
  {
    "number": "516",
    "name": "MANY REFLECTIONS",
    "algorithm": "MULTI-SHIFT",
    "description": "Numbers of micro-pitched echoes slowly decaying upwards. Good, chorused, echo effect."
  },
  {
    "number": "517",
    "name": "MICRO + DRYSLAP",
    "algorithm": "MULTI-SHIFT",
    "description": "A general-purpose thickener with some delay with feedback."
  },
  {
    "number": "518",
    "name": "MICRO + REVERB",
    "algorithm": "MULTI-SHIFT",
    "description": "Includes a micro-shift and a quasi-reverb set of delays with feedback."
  },
  {
    "number": "519",
    "name": "MICROPITCHSHIFT",
    "algorithm": "MULTI-SHIFT",
    "description": "This is the perfect effect to fatten up or widen a sound without adding any color."
  },
  {
    "number": "520",
    "name": "MICRO-REVERB",
    "algorithm": "MULTI-SHIFT",
    "description": "Similar to above but much less discrete, with tighter delays."
  },
  {
    "number": "521",
    "name": "MICROPITCH-SLAP",
    "algorithm": "MULTI-SHIFT",
    "description": "The left channel is micro-shifted and the right is a slap delay with micro-shift. Great for guitar."
  },
  {
    "number": "522",
    "name": "MULTI-DLYEFFECT",
    "algorithm": "SWEPT COMBS",
    "description": "All kinds of subtle things going on here. Delays, echoes, flanging, chorusing."
  },
  {
    "number": "523",
    "name": "MULTI-FLANGE",
    "algorithm": "SWEPT COMBS",
    "description": "With six delays being swept at once, this program creates a very thick, flange sound."
  },
  {
    "number": "524",
    "name": "QUADRUPLER",
    "algorithm": "MULTI-SHIFT",
    "description": "Provides a dense, panned stereo field with two sweeping shifters and two delays. Denser than Voice Doubler (572) but similar in effect."
  },
  {
    "number": "525",
    "name": "RANDOM FLANGE",
    "algorithm": "MULTI-SHIFT",
    "description": "Another doubling effect with random, moving, micro-pitch shifts."
  },
  {
    "number": "526",
    "name": "RESONANT SWEEP",
    "algorithm": "PHASER",
    "description": "A medium-speed, resonant PHASER."
  },
  {
    "number": "527",
    "name": "RICH CHORUS",
    "algorithm": "SWEPT COMBS",
    "description": "This program uses six delay lines to create a useful chorus effect. Try increasing (m delay) to get a subtler but more realistic effect."
  },
  {
    "number": "528",
    "name": "REAL CHORUS",
    "algorithm": "MULTI-SHIFT",
    "description": "A convincing doubling effect. Pretty smooth."
  },
  {
    "number": "529",
    "name": "SPACE FLANGE",
    "algorithm": "SWEPT REVERB",
    "description": "This program is like a digital delay, a reverb and a flanger all rolled into one."
  },
  {
    "number": "530",
    "name": "TREMOLO DELAY",
    "algorithm": "MULTI-SHIFT",
    "description": "A long delay whose pitch warbles, creating a thick atmospheric effect. Use on guitar sound effects."
  },
  {
    "number": "531",
    "name": "TWO THICKENERS",
    "algorithm": "MULTI-SHIFT",
    "description": "Two independent effects, each made up of a delay with pitch shift, and a discrete delay."
  },
  {
    "number": "532",
    "name": "ULTRA-THICK",
    "algorithm": "MULTI-SHIFT",
    "description": "General thickener with a nice, stereo image."
  },
  {
    "number": "533",
    "name": "VOICE DOUBLER",
    "algorithm": "LAYERED SHIFT",
    "description": "Sweeps two pitch shifters in opposite directions giving a convincing doubling effect."
  },
  {
    "number": "534",
    "name": "WATERY FLANGE",
    "algorithm": "SWEPT COMBS",
    "description": "Just as the name suggests."
  },
  {
    "number": "535",
    "name": "ANALOG DELAYS",
    "algorithm": "PATCH FACTORY",
    "description": "Warm echoes provided by lowpass filters."
  },
  {
    "number": "536",
    "name": "BUILD-A-SHIMMER",
    "algorithm": "ULTRA-TAP",
    "description": "Eerie echoes that fade in and fade out."
  },
  {
    "number": "537",
    "name": "CIRCLES",
    "algorithm": "ULTRA-TAP",
    "description": "A stereo delay effect that seems to circle around your head. The effect is most noticeable on short sounds, like handclaps."
  },
  {
    "number": "538",
    "name": "DIGITAL DELAY",
    "algorithm": "LONG DIGIPLEX",
    "description": "A basic digital delay line, with feedback control."
  },
  {
    "number": "539",
    "name": "DUAL DELAYS",
    "algorithm": "DUAL DIGIPLEX",
    "description": "Two simple delays. One left, one right."
  },
  {
    "number": "540",
    "name": "ECHOPLEXINGPONG",
    "algorithm": "DUAL DIGIPLEX",
    "description": "An echo that bounces from one side to another."
  },
  {
    "number": "541",
    "name": "ECHO RAMP",
    "algorithm": "LONG DIGIPLEX",
    "description": "A manually triggerable program with a delay that sweeps down and up when the trigger key is pressed."
  },
  {
    "number": "542",
    "name": "FAT SLAP",
    "algorithm": "ULTRA-TAP",
    "description": "A slap delay with an ambient sound."
  },
  {
    "number": "543",
    "name": "5TH AVE ECHO",
    "algorithm": "ULTRA-TAP",
    "description": "Delays and diffusion are selected to sound a lot like those on a big city street."
  },
  {
    "number": "544",
    "name": "LONG DELAY",
    "algorithm": "LONG DIGIPLEX",
    "description": "Simple, long delay."
  },
  {
    "number": "545",
    "name": "MULTI-TAP",
    "algorithm": "ULTRA-TAP",
    "description": "If you own an Eventide SP2016, you'll be familiar with this sound. This preset emulates the SP2016 Multi-Tap program, with a slightly shorter overall."
  },
  {
    "number": "546",
    "name": "PING PONG BALL",
    "algorithm": "ULTRA-TAP",
    "description": "Another echo that bounces side to side. But, the echo shortens with time."
  },
  {
    "number": "547",
    "name": "SETTLEDOWN ECHO",
    "algorithm": "BAND DELAY",
    "description": "Echoes that go from bright to warm."
  },
  {
    "number": "548",
    "name": "SOFT SHORT ECHO",
    "algorithm": "DENSE ROOM",
    "description": "A very smooth, diffuse echo."
  },
  {
    "number": "549",
    "name": "SPACE ECHO",
    "algorithm": "PATCH FACTORY",
    "description": "Simulates a very popular tape delay from the 70's. Even adds tone controls and tape warble for that thick, analog sound."
  },
  {
    "number": "550",
    "name": "SUBTLE SWEEP",
    "algorithm": "DUAL SHIFT",
    "description": "Two subtle, sweeping delays. This is ideal for turning mono sources into stereo. Pan original source to one side and its sweeping delay to another."
  },
  {
    "number": "551",
    "name": "SWEEP RIGHT",
    "algorithm": "ULTRA-TAP",
    "description": "Exponential increasing delays that are panned from left to right. Mono in, stereo out."
  },
  {
    "number": "552",
    "name": "THICK LOOP",
    "algorithm": "SWEPT REVERB",
    "description": "A repeating delay that fades into a reverb sound."
  },
  {
    "number": "553",
    "name": "THREE ON TWO",
    "algorithm": "DUAL DIGIPLEX",
    "description": "The delays in this program are set such that the familiar three against two rhythm is produced: (feedback) controls the amount of feedback, (mix) wet/dry effect mix."
  },
  {
    "number": "554",
    "name": "WIDENING TAPS",
    "algorithm": "ULTRA-TAP",
    "description": "The echoes get longer as time goes on, spreading from the center to the sides of the stereo field."
  },
  {
    "number": "555",
    "name": "AMBIENCE",
    "algorithm": "ULTRA-TAP",
    "description": "Use this to add ambience without muddying the mix."
  },
  {
    "number": "556",
    "name": "AMBIENT BOOTH",
    "algorithm": "DENSE ROOM",
    "description": "A short but natural reverberation."
  },
  {
    "number": "557",
    "name": "BATHROOM",
    "algorithm": "REVERB FACTORY",
    "description": "Lots of highs left in by those ceramic tiles."
  },
  {
    "number": "558",
    "name": "CHORUS ROOM",
    "algorithm": "SWEPT REVERB",
    "description": "Short reverb with chorus. Nice for instruments but perhaps not with drums."
  },
  {
    "number": "559",
    "name": "CRASS ROOM",
    "algorithm": "DENSE ROOM",
    "description": "A harsh, hollow reverb reminiscent of those good old school days."
  },
  {
    "number": "560",
    "name": "DE-BURR",
    "algorithm": "ULTRA-TAP",
    "description": "Takes the edge off of sharp attacks."
  },
  {
    "number": "561",
    "name": "DREW'S CHAMBER",
    "algorithm": "DENSE ROOM",
    "description": "Medium-short, natural reverb."
  },
  {
    "number": "562",
    "name": "DRUM AMBIENCE",
    "algorithm": "DENSE ROOM",
    "description": "A soft ambience that just barely livens up otherwise dry sounds."
  },
  {
    "number": "563",
    "name": "EMPTY CLOSET",
    "algorithm": "SWEPT REVERB",
    "description": "This reverb is very short. You almost can't detect it. Use it for situations where you really don't want to hear a reverb."
  },
  {
    "number": "564",
    "name": "EMPTY ROOM",
    "algorithm": "SWEPT REVERB",
    "description": "Medium reverb with slight chorus. Sounds nice on regular instruments."
  },
  {
    "number": "565",
    "name": "MEDIUM SPACE",
    "algorithm": "SWEPT REVERB",
    "description": "Another medium reverb with slight chorus. This has a more natural sound and the chorus is very slight."
  },
  {
    "number": "566",
    "name": "NEW HOUSE",
    "algorithm": "SWEPT COMBS",
    "description": "Use this to get that metallic sound of an empty, reflective room."
  },
  {
    "number": "567",
    "name": "PRCSVHORN PLATE",
    "algorithm": "DENSE ROOM",
    "description": "A plate reverb that enhances natural or synthesized horn sounds."
  },
  {
    "number": "568",
    "name": "REAL ROOM",
    "algorithm": "SWEPT REVERB",
    "description": "Short reverb with a natural airiness."
  },
  {
    "number": "569",
    "name": "SMALL ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "A small-room reverb."
  },
  {
    "number": "570",
    "name": "SMLSTEREOSPACE",
    "algorithm": "SWEPT REVERB",
    "description": "Very short ambience with a slight chorus added in order to give it a big, full sound for its short duration."
  },
  {
    "number": "571",
    "name": "SMALLVOCAL ROOM",
    "algorithm": "DENSE ROOM",
    "description": "Medium-length reverb tailored for vocals."
  },
  {
    "number": "572",
    "name": "TIGHT ROOM",
    "algorithm": "DENSE ROOM",
    "description": "A short, bright reverb."
  },
  {
    "number": "573",
    "name": "TIGHT & BRIGHT",
    "algorithm": "DENSE ROOM",
    "description": "Like above but longer and brighter."
  },
  {
    "number": "574",
    "name": "VOCAL BOOTH",
    "algorithm": "DENSE ROOM",
    "description": "Short, natural reverb with a slight delay."
  },
  {
    "number": "575",
    "name": "ALIVE CHAMBER",
    "algorithm": "SWEPT REVERB",
    "description": "Large, chorus reverb. A real, full sound."
  },
  {
    "number": "576",
    "name": "BIG SNARE",
    "algorithm": "REVERB FACTORY",
    "description": "This is a sizzling reverb, somewhat gated with lots of punch for drums."
  },
  {
    "number": "577",
    "name": "BIG SWEEP",
    "algorithm": "SWEPT REVERB",
    "description": "To really hear the sweep, turn up the master feedback, make some noise and then change the master delay."
  },
  {
    "number": "578",
    "name": "BOB'S ROOM",
    "algorithm": "DENSE ROOM",
    "description": "A warm, long reverb, useful on lots of sources."
  },
  {
    "number": "579",
    "name": "BREATHING CANYON",
    "algorithm": "SWEPT REVERB",
    "description": "A very long reverb. Very roomy."
  },
  {
    "number": "580",
    "name": "BRIGHT ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "A short, bright reverb."
  },
  {
    "number": "581",
    "name": "CANYON",
    "algorithm": "REVERB FACTORY",
    "description": "Our biggest reverb sound, like an echoing canyon."
  },
  {
    "number": "582",
    "name": "CONCERT HALL",
    "algorithm": "DENSE ROOM",
    "description": "A big hall with a lot of predelay."
  },
  {
    "number": "583",
    "name": "DARK ROOM",
    "algorithm": "DENSE ROOM",
    "description": "Yes, another dark reverb. Sounds like the inside of a big, petroleum tank."
  },
  {
    "number": "584",
    "name": "DISCRETE-VERB",
    "algorithm": "SWEPT COMBS",
    "description": "A sparse, reverb effect."
  },
  {
    "number": "585",
    "name": "NORTHWEST HALL",
    "algorithm": "DENSE ROOM",
    "description": "Very similar to Concert Hall except that the reverb is somewhat more discrete."
  },
  {
    "number": "586",
    "name": "RICH PLATE",
    "algorithm": "SWEPT REVERB",
    "description": "A slight sweep in this reverb gives it a rich sound and a smooth tail."
  },
  {
    "number": "587",
    "name": "SLAPVERB",
    "algorithm": "DENSE ROOM",
    "description": "A short delay and then a bright, long reverb."
  },
  {
    "number": "588",
    "name": "SMOOTH PLATE",
    "algorithm": "DENSE ROOM",
    "description": "Airy and smooth."
  },
  {
    "number": "589",
    "name": "WARM HALL",
    "algorithm": "REVERB FACTORY",
    "description": "Our basic reverb sound."
  },
  {
    "number": "590",
    "name": "BACKWARD REVERB",
    "algorithm": "MULTI-SHIFT",
    "description": "A quasi-reverb made up of little, backward bits of the input. One of a kind."
  },
  {
    "number": "591",
    "name": "ECHO-VERB",
    "algorithm": "DENSE ROOM",
    "description": "A discrete, echo-like reverb."
  },
  {
    "number": "592",
    "name": "EXPLODING 'VERB",
    "algorithm": "REVERB FACTORY",
    "description": "This sounds like a reverb, until the input level goes above the gate threshold. Once triggered, the reverb sound grows explosively."
  },
  {
    "number": "593",
    "name": "GATED REVERB",
    "algorithm": "REVERB FACTORY",
    "description": "That very familiar drum effect. To change the length of the 'gate' sound, set the gate length parameter."
  },
  {
    "number": "594",
    "name": "GATED ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "A warm-sounding, gated room best used on one source such as snare drum or toms."
  },
  {
    "number": "595",
    "name": "GATE ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "Like above but with a more natural decay."
  },
  {
    "number": "596",
    "name": "HUMP-VERB",
    "algorithm": "ULTRA-TAP",
    "description": "A very unique reverb with a sound not unlike the name."
  },
  {
    "number": "597",
    "name": "METALVERB",
    "algorithm": "ULTRA-TAP",
    "description": "A metallic set of closely packed delays approaching reverb density."
  },
  {
    "number": "598",
    "name": "RANDOM GATE",
    "algorithm": "ULTRA-TAP",
    "description": "A 'gated reverb' sound created with the ULTRA-TAP program. Great for drums."
  },
  {
    "number": "599",
    "name": "RESONANT WORLD",
    "algorithm": "STRING MODELER",
    "description": "This one is different. A long-lasting 'reverb' with bizarre resonances and echoes."
  },
  {
    "number": "600",
    "name": "REVERSE GATE",
    "algorithm": "ULTRA-TAP",
    "description": "Another standard drum reverb."
  },
  {
    "number": "601",
    "name": "REVERB RAMP",
    "algorithm": "SWEPT REVERB",
    "description": "A triggerable, sweeping reverb. It sweeps up the first time it is triggered and toggles from then on."
  },
  {
    "number": "602",
    "name": "SHIMMERISH",
    "algorithm": "SWEPT REVERB",
    "description": "A recirculating delay effect that fades into a smooth reverb."
  },
  {
    "number": "603",
    "name": "TONAL ROOM",
    "algorithm": "SWEPT REVERB",
    "description": "With pitched inputs, this reverb will actually generate many other tones. On drums, this is one of the biggest sounds you can get."
  },
  {
    "number": "604",
    "name": "UP/DOWN REVERB",
    "algorithm": "MULTI-SHIFT",
    "description": "User selectable, rising or falling reverb-like effect."
  },
  {
    "number": "605",
    "name": "A MINOR CHORDS",
    "algorithm": "DIATONIC SHIFT",
    "description": "Play or sing a solo line in A minor. The H3500 will generate two perfect 'in-key' harmonies."
  },
  {
    "number": "606",
    "name": "ARPEGGIOS",
    "algorithm": "MULTI-SHIFT",
    "description": "Adds a fifth and an octave rhythmically, along with a short delay."
  },
  {
    "number": "607",
    "name": "BASS SHIFT",
    "algorithm": "MULTI-SHIFT",
    "description": "A doubling effect intended for bass guitar. One channel is shifted up an octave. The other is slightly detuned."
  },
  {
    "number": "608",
    "name": "DEEPEN",
    "algorithm": "PATCH FACTORY",
    "description": "Adds lower octave harmonics with a pitch shifter sweep."
  },
  {
    "number": "609",
    "name": "DIATONIC DANCE",
    "algorithm": "DIATONIC SHIFT",
    "description": "You play a note and after half a second, you get a harmony. Use one note at a time, in an effect loop."
  },
  {
    "number": "610",
    "name": "DUAL SHIFT EASY",
    "algorithm": "DUAL SHIFT",
    "description": "An easy-to-use program featuring two pitch shifters with function knobs set up, with pitch calibrated in semitones (1/2 steps)."
  },
  {
    "number": "611",
    "name": "GLITCH SHIFT",
    "algorithm": "DUAL SHIFT",
    "description": "A 'cheap' sounding pitch shifter. If glitches are what you want, here they are."
  },
  {
    "number": "612",
    "name": "GREGORIAN SHIFT",
    "algorithm": "PATCH FACTORY",
    "description": "This program filters and pitch shifts input voices to produce a chorus of droning monks."
  },
  {
    "number": "613",
    "name": "H949",
    "algorithm": "LAYERED SHIFT",
    "description": "This gives you what the H949 gave you. One output is a straight delay while other is pitch shifted. Both outputs are fed back to the input."
  },
  {
    "number": "614",
    "name": "HAMMER-ON 3RD",
    "algorithm": "DUAL DIGIPLEX",
    "description": "You, too, can play like the flashiest guitarist, without the years of hard work and shredded fingers. Will take one note and arpeggiate it to sound like a familiar two-handed guitar technique."
  },
  {
    "number": "615",
    "name": "HAMMER-ON 5TH",
    "algorithm": "DUAL DIGIPLEX",
    "description": "Similar to above but different intervals."
  },
  {
    "number": "616",
    "name": "HARMO-CHORUS",
    "algorithm": "MULTI-SHIFT",
    "description": "A pitch shifter and chorus combined."
  },
  {
    "number": "617",
    "name": "IN SIX",
    "algorithm": "MULTI-SHIFT",
    "description": "6/8 time is implied in this preset which adds a fourth down, a minor third up, and a minor sixth up."
  },
  {
    "number": "618",
    "name": "JUST 3RD & 5TH",
    "algorithm": "DIATONIC SHIFT",
    "description": "A 'diatonic' pitch shifter that will generate just-intoned 3rds and 5ths above the input. Make sure to set the key properly."
  },
  {
    "number": "619",
    "name": "JUST 4TH & 6TH",
    "algorithm": "DIATONIC SHIFT",
    "description": "Generates just-intoned 4ths and 6ths above the input."
  },
  {
    "number": "620",
    "name": "MUSIC SHIFT",
    "algorithm": "STEREO SHIFT",
    "description": "This stereo, pitch shift program is optimized for shifting input program material."
  },
  {
    "number": "621",
    "name": "OCTAVE ECHOES",
    "algorithm": "MULTI-SHIFT",
    "description": "Complex delays which are fed back and combined with a radically down-shifted signal."
  },
  {
    "number": "622",
    "name": "PITCHED ECHO",
    "algorithm": "MULTI-SHIFT",
    "description": "Shows off one aspect of the MULTI-SHIFT algorithm's feedback setup. Long echoes come back shifted but the shorter delays don't."
  },
  {
    "number": "623",
    "name": "PITCH QUANTIZE",
    "algorithm": "DIATONIC SHIFT",
    "description": "This program quantizes the input to the nearest chromatic interval."
  },
  {
    "number": "624",
    "name": "SUSPENSE",
    "algorithm": "MULTI-SHIFT",
    "description": "Echoes are shifted to create suspenseful harmonies."
  },
  {
    "number": "625",
    "name": "THIRD & FIFTH",
    "algorithm": "DIATONIC SHIFT",
    "description": "Generates an 'in-key' third and fifth above the input."
  },
  {
    "number": "626",
    "name": "THIRD & OCTAVE",
    "algorithm": "DIATONIC SHIFT",
    "description": "This generates a diatonic third above and an octave below the input."
  },
  {
    "number": "627",
    "name": "TWELVE STRING",
    "algorithm": "MULTI-SHIFT",
    "description": "Provides an octave down and a micro-pitch shift, simulating a twelve-string guitar."
  },
  {
    "number": "628",
    "name": "VIBRATO",
    "algorithm": "MULTI-SHIFT",
    "description": "Instant vibrato at the press of a button."
  },
  {
    "number": "629",
    "name": "VOICE SHIFT",
    "algorithm": "STEREO SHIFT",
    "description": "This STEREO SHIFT program is optimized for pitch shifting program material whose main content is spoken voice."
  },
  {
    "number": "630",
    "name": "ALIENS",
    "algorithm": "REVERSE SHIFT",
    "description": "Transforms voice into a rough, alien-like sound."
  },
  {
    "number": "631",
    "name": "ANTI-AMBIENCE",
    "algorithm": "REVERSE SHIFT",
    "description": "This is a reverb-like sound created from REVERSE SHIFT. Sounds great on guitar."
  },
  {
    "number": "632",
    "name": "AUTOPANNER",
    "algorithm": "SWEPT COMBS",
    "description": "Produces automatic stereo (left<->right) panning."
  },
  {
    "number": "633",
    "name": "AVANTE-GARDE",
    "algorithm": "REVERSE SHIFT",
    "description": "A REVERSE SHIFT effect that generates descending, chromatic lines."
  },
  {
    "number": "634",
    "name": "BACKWARDS",
    "algorithm": "REVERSE SHIFT",
    "description": "Turns the input around in one-second chunks."
  },
  {
    "number": "635",
    "name": "BAND PAN",
    "algorithm": "BAND DELAY",
    "description": "Rhythmically, panned and delayed, with its own bandpass filter."
  },
  {
    "number": "636",
    "name": "BAND SLAP",
    "algorithm": "BAND DELAY",
    "description": "A stereo, slap effect using two bands that are fed back. One band is tuned higher."
  },
  {
    "number": "637",
    "name": "BANDSWEEPRAND",
    "algorithm": "BAND DELAY",
    "description": "A random-pitched set of bands that are delayed and pass from left to right in the stereo field."
  },
  {
    "number": "638",
    "name": "BAND SWEEP",
    "algorithm": "BAND DELAY",
    "description": "Upward-sweeping bands passing from left to right."
  },
  {
    "number": "639",
    "name": "BIZARREMONIZER",
    "algorithm": "LAYERED SHIFT",
    "description": "Generates a bizarre, upward-sweeping pitch shift."
  },
  {
    "number": "640",
    "name": "CANNONS",
    "algorithm": "REVERSE SHIFT",
    "description": "A unique, sweeping sound that's great on drums. Try playing a tom solo through this."
  },
  {
    "number": "641",
    "name": "CRITICAL BAND",
    "algorithm": "PATCH FACTORY",
    "description": "A close approximation to Fletcher/Munson bandpass curves. Use to brighten signals or key compressors and gates to frequencies to which our ears are most sensitive."
  },
  {
    "number": "642",
    "name": "CRYSTAL ECHOES",
    "algorithm": "MULTI-SHIFT",
    "description": "Words fail. A stairway of echoes reaching for heaven."
  },
  {
    "number": "643",
    "name": "DRUM PROCESSOR",
    "algorithm": "SWEPT REVERB",
    "description": "This very different effect tends to make things that aren't drums sound like drums. Try adjusting the first four parameters for a variety of effects."
  },
  {
    "number": "644",
    "name": "FILTER PAN",
    "algorithm": "PATCH FACTORY",
    "description": "A filter, sweep effect that seems to pan as it sweeps."
  },
  {
    "number": "645",
    "name": "FUTURE SHIFT",
    "algorithm": "MULTI-SHIFT",
    "description": "A shimmering, orchestral effect. Try on swelling, monophonic synths or single-line voices."
  },
  {
    "number": "646",
    "name": "LIQUID REVERB",
    "algorithm": "BAND DELAY",
    "description": "A reverb-like program with BAND DELAYs whose filters sweep downward with increasing delay length."
  },
  {
    "number": "647",
    "name": "LOWPASS FILTERS",
    "algorithm": "PATCH FACTORY",
    "description": "Two lowpass filters connected in series process the audio. Use cutoff 1 and 2 to control the rolloff frequencies. Use Q factor 1 and 2 to control the resonance of the filters."
  },
  {
    "number": "648",
    "name": "MAJOR WIND HARP",
    "algorithm": "STRING MODELER",
    "description": "The first in a series of resonant, reverb-like programs. This program acts like sympathetically resonating strings tuned to a major scale."
  },
  {
    "number": "649",
    "name": "MODULATORS",
    "algorithm": "MULTI-SHIFT",
    "description": "Remember that ring-modulated astronaut sound? Here it is, constructed from a pitch shifter that reverses little segments of the input."
  },
  {
    "number": "650",
    "name": "MODULATOR-VERB",
    "algorithm": "MULTI-SHIFT",
    "description": "Similar to above with more reverb-like decay."
  },
  {
    "number": "651",
    "name": "OCTAVE FILTERS",
    "algorithm": "BAND DELAY",
    "description": "Gurgling, upward-sweeping filter bands."
  },
  {
    "number": "652",
    "name": "PSYCHO-PANNER",
    "algorithm": "SWEPT COMBS",
    "description": "This program swirls the input in pitch, pan and delay: (range) controls the range of delay and pitch sweep, (feedback) lower this to reduce the decay time, (pan rate) controls the panning and sweep speed, (mix) wet/dry effect mix."
  },
  {
    "number": "653",
    "name": "RESONANT MAJ7",
    "algorithm": "STRING MODELER",
    "description": "Sets up sympathetic resonances that form a Major seventh chord."
  },
  {
    "number": "654",
    "name": "RESONANT PENT",
    "algorithm": "STRING MODELER",
    "description": "Same as above, except resonances form pentatonic scale."
  },
  {
    "number": "655",
    "name": "REVERSERB",
    "algorithm": "MULTI-SHIFT",
    "description": "A reverb-like effect made up of little, backward bits of the input signal. Try shortening the 'size' parameter to smooth it out a little."
  },
  {
    "number": "656",
    "name": "RUNTHRUMYMIND",
    "algorithm": "BAND DELAY",
    "description": "An echo that bounces and changes timbre back and forth."
  },
  {
    "number": "657",
    "name": "SCARY MOVIE",
    "algorithm": "REVERSE SHIFT",
    "description": "This program uses REVERSE SHIFT to create an evil-sounding voice. Use with guitar to create that tape splice, psychedelic sound."
  },
  {
    "number": "658",
    "name": "S/H PAN-A-DELAY",
    "algorithm": "BAND DELAY",
    "description": "Very similar to RunThruMyMind but with different timbres."
  },
  {
    "number": "659",
    "name": "SLAP+WAH+MICRO",
    "algorithm": "PATCH FACTORY",
    "description": "A slap delay, a sweeping wah-wah, and a microshift all from one program."
  },
  {
    "number": "660",
    "name": "SPACE CRICKETS",
    "algorithm": "BAND DELAY",
    "description": "Circulating, up-sweeping BAND DELAYs."
  },
  {
    "number": "661",
    "name": "STUTTER",
    "algorithm": "STUTTER",
    "description": "Use this for that popular STUTTER sound."
  },
  {
    "number": "662",
    "name": "STUTTER RANDOM",
    "algorithm": "STUTTER",
    "description": "Random STUTTERs at your control."
  },
  {
    "number": "663",
    "name": "SWEEP DOWN",
    "algorithm": "BAND DELAY",
    "description": "Rhythmically panned and delayed, with its own bandpass filter."
  },
  {
    "number": "664",
    "name": "SWEEP & REVERB",
    "algorithm": "STRING MODELER",
    "description": "Sounds reverb-like until manually triggered, which causes a radical, mystical, up-and-down sweep."
  },
  {
    "number": "665",
    "name": "SWEEP UP/DOWN",
    "algorithm": "BAND DELAY",
    "description": "BAND DELAYs on left sweep up, BAND DELAYs on right sweep down."
  },
  {
    "number": "666",
    "name": "SWEEP UP LINEAR",
    "algorithm": "BAND DELAY",
    "description": "Rising BAND DELAYs sweeping from right to left."
  },
  {
    "number": "667",
    "name": "SWEEP UP",
    "algorithm": "BAND DELAY",
    "description": "Similar to above w/bands tuned one octave apart."
  },
  {
    "number": "668",
    "name": "TALKING GUITAR",
    "algorithm": "VOCODER",
    "description": "Vocoder tailored for the guitar."
  },
  {
    "number": "669",
    "name": "TRIGGERED SCALE",
    "algorithm": "STRING MODELER",
    "description": "Another sympathetic resonator program, except this one has a twist. Press the 'trigger' key to get a unique, harp-like strumming sound."
  },
  {
    "number": "670",
    "name": "TUBE CLONE",
    "algorithm": "BAND DELAY",
    "description": "This is strictly meant for guitars. Play, with distortion, directly through the H3500 and this program will add a nice, crunchy EQ."
  },
  {
    "number": "671",
    "name": "TWO-BAND FILTER",
    "algorithm": "PATCH FACTORY",
    "description": "Two general-purpose bandpass filters with tunable center frequency and filter Q."
  },
  {
    "number": "672",
    "name": "WAH WAH + MICRO",
    "algorithm": "PATCH FACTORY",
    "description": "Combines a sweeping filter (wah-wah) with a micro-shift."
  },
  {
    "number": "673",
    "name": "WAH WAH",
    "algorithm": "PATCH FACTORY",
    "description": "A basic, cyclical wah-wah sound using filters and a function generator."
  },
  {
    "number": "674",
    "name": "WAH-VERB",
    "algorithm": "BAND DELAY",
    "description": "This sounds like a reverb with a wah-wah."
  },
  {
    "number": "675",
    "name": "A 440",
    "algorithm": "PATCH FACTORY",
    "description": "Need a reference tuning tone? Here it is. You can mix in the sound you are tuning or fine adjust the pitch for slightly different tunings."
  },
  {
    "number": "676",
    "name": "GUITAR-ESQUE",
    "algorithm": "STRING MODELER",
    "description": "Connect MIDI up and you have a mellow, guitar sound. The input signal will also affect the sound out."
  },
  {
    "number": "677",
    "name": "HVYMETAL CELLO",
    "algorithm": "STRING MODELER",
    "description": "The string is briefly bowed and left to ring. The harder you hit the key, the longer the bowing. Feeding input sound will affect the timbre of the note."
  },
  {
    "number": "678",
    "name": "KEYBOARD",
    "algorithm": "STRING MODELER",
    "description": "An adjustable keyboard sound where you can tailor the sound to your tastes. Also, try your pitch wheel and hit the same note a number of times."
  },
  {
    "number": "679",
    "name": "KOTO",
    "algorithm": "STRING MODELER",
    "description": "By itself, a very delicate sound. Feed in some input, and the sound takes on all kinds of characters."
  },
  {
    "number": "680",
    "name": "LS BACH HARPSCD",
    "algorithm": "STRING MODELER",
    "description": "Bright and crisp harpsichord."
  },
  {
    "number": "681",
    "name": "LS BOWED STRING",
    "algorithm": "STRING MODELER",
    "description": "An airy, resonant noise."
  },
  {
    "number": "682",
    "name": "LS CLAVICHORD",
    "algorithm": "STRING MODELER",
    "description": "This is a more classical clavichord sound than we're used to. Use pressure to bend the notes."
  },
  {
    "number": "683",
    "name": "LS FAR STRINGS",
    "algorithm": "STRING MODELER",
    "description": "Your not-so-standard string section."
  },
  {
    "number": "684",
    "name": "LS HARP RESONS",
    "algorithm": "STRING MODELER",
    "description": "A hollow, harp sound."
  },
  {
    "number": "685",
    "name": "LS HARPSICHORD",
    "algorithm": "STRING MODELER",
    "description": "Like the Bach but fuller."
  },
  {
    "number": "686",
    "name": "LS HIT STRING",
    "algorithm": "STRING MODELER",
    "description": "Crisp and full-struck strings."
  },
  {
    "number": "687",
    "name": "LS NOSTALGIA",
    "algorithm": "STRING MODELER",
    "description": "This has that honky-tonk sound."
  },
  {
    "number": "688",
    "name": "LS PSEUDO PIANO",
    "algorithm": "STRING MODELER",
    "description": "An almost piano."
  },
  {
    "number": "689",
    "name": "LS ZITHER",
    "algorithm": "STRING MODELER",
    "description": "Plucked strings that are full and chorused. Hitting harder will change the timbre."
  },
  {
    "number": "690",
    "name": "ALICE-VERB",
    "algorithm": "DENSE ROOM",
    "description": "This is a reverb. With each note you hit, you could have a different decay time. Also, the harder you hit, the less bright the reverb."
  },
  {
    "number": "691",
    "name": "DUAL GLIDEDELAY",
    "algorithm": "DUAL DIGIPLEX",
    "description": "The delay lines are controlled by MIDI."
  },
  {
    "number": "692",
    "name": "FILTER SWEEPS",
    "algorithm": "BAND DELAY",
    "description": "A recirculating sweep up is swept by the function generator."
  },
  {
    "number": "693",
    "name": "GLIDE DELAY",
    "algorithm": "LONG DIGIPLEX",
    "description": "This is a mono version of Dual Glide Delay."
  },
  {
    "number": "694",
    "name": "MIDI 3 ON 2",
    "algorithm": "DUAL DIGIPLEX",
    "description": "This preset will sync up its delay times to a MIDI drum machine or sequencer. The delays are in the familiar 3 on 2 pattern."
  },
  {
    "number": "695",
    "name": "MIDI PEDALSWEEP",
    "algorithm": "SWEPT REVERB",
    "description": "The MIDI foot-pedal controller will manually sweep the delays in this program to generate a flange-like sound. The Modulation Wheel controls modulation of the delays."
  },
  {
    "number": "696",
    "name": "MIDIPLEX",
    "algorithm": "LONG DIGIPLEX",
    "description": "Connect a MIDI drum machine or sequencer to this program and the delay will automatically be in time."
  },
  {
    "number": "697",
    "name": "MIDI BANDSWEEP",
    "algorithm": "BAND DELAY",
    "description": "This program does process audio, but generates an interesting sweep when a MIDI note message is received."
  },
  {
    "number": "698",
    "name": "MODWHEEL REVERB",
    "algorithm": "SWEPT REVERB",
    "description": "When connected to a MIDI keyboard, the Mod Wheel controls the decay time and the Pitch Wheel controls the delay (room size). Use this to easily generate dramatic reverb sweeps."
  },
  {
    "number": "699",
    "name": "ROCK 'N' ROLL",
    "algorithm": "LAYERED SHIFT",
    "description": "This one's a bit different. Capture an audio loop by pressing the 'sustain' parameter. Play a note on a MIDI keyboard to hear the loop. Moving the Mod Wheel will alter the loop points (a bit like rocking tape reels)."
  },
  {
    "number": "700",
    "name": "AIR",
    "algorithm": "STEREO SHIFT",
    "description": "A long, subtle echo."
  },
  {
    "number": "701",
    "name": "A LYDIAN 6THS",
    "algorithm": "DIATONIC SHIFT",
    "description": "Play solo lines using A Lydian modal scales. If you don't know what a modal scale is, play in the key of E major."
  },
  {
    "number": "702",
    "name": "A mi WATER WELL",
    "algorithm": "DIATONIC SHIFT",
    "description": "Creates delayed harmonies in A minor."
  },
  {
    "number": "703",
    "name": "A MIXO AIR",
    "algorithm": "DIATONIC SHIFT",
    "description": "A seventh and third that's way back in the mix. Play in A Mixolydian."
  },
  {
    "number": "704",
    "name": "ANGEL HAIR",
    "algorithm": "STEREO SHIFT",
    "description": "Ascending-octave echoes."
  },
  {
    "number": "705",
    "name": "ARP",
    "algorithm": "DUAL SHIFT",
    "description": "Arpeggio with major sixth and fourth."
  },
  {
    "number": "706",
    "name": "ARPEGGIATOR",
    "algorithm": "DUAL SHIFT",
    "description": "Ascending-arpeggiated echoes."
  },
  {
    "number": "707",
    "name": "BELL ECHOES",
    "algorithm": "LAYERED SHIFT",
    "description": "Slap echoes, first up a fifth, then unshifted."
  },
  {
    "number": "708",
    "name": "BIG & LONG",
    "algorithm": "DUAL DIGIPLEX",
    "description": "Doubling on the left, a long delay on the right. Be sure to use both inputs."
  },
  {
    "number": "709",
    "name": "BIG ROOM CHORUS",
    "algorithm": "SWEPT COMBS",
    "description": "A BIG, chorused-room sound."
  },
  {
    "number": "710",
    "name": "BIG GROUND",
    "algorithm": "REVERSE SHIFT",
    "description": "A killer, atonal effect."
  },
  {
    "number": "711",
    "name": "BIG LIGHT ECHO",
    "algorithm": "REVERSE SHIFT",
    "description": "A psychedelic, REVERSE SHIFT effect. You may see the light."
  },
  {
    "number": "712",
    "name": "BOUNCE VERB",
    "algorithm": "ULTRA-TAP",
    "description": "A boingy reverb that's perfect for adding a real crunch to overdriven guitar."
  },
  {
    "number": "713",
    "name": "CHORUS 'N' ECHO",
    "algorithm": "DUAL SHIFT",
    "description": "Chorus on both channels, echo on the right."
  },
  {
    "number": "714",
    "name": "CHORUS 'N' FLANGE",
    "algorithm": "DUAL SHIFT",
    "description": "Chorus on the left, flange on the right. To get more 'flange,' turn up the right feedback."
  },
  {
    "number": "715",
    "name": "CLUSTER ECHO",
    "algorithm": "DIATONIC SHIFT",
    "description": "A slap that comes back as a tone cluster."
  },
  {
    "number": "716",
    "name": "DEATHLESS ROOM",
    "algorithm": "ULTRA-TAP",
    "description": "Even crunchier than Bounce-Verb."
  },
  {
    "number": "717",
    "name": "DELAY TO WASH",
    "algorithm": "REVERB FACTORY",
    "description": "This repeating delay eventually fades into a reverb."
  },
  {
    "number": "718",
    "name": "ECHO BOUND",
    "algorithm": "ULTRA-TAP",
    "description": "Left/Right echoes keep coming at you then stop."
  },
  {
    "number": "719",
    "name": "ENDLESS CAVE",
    "algorithm": "ULTRA-TAP",
    "description": "A dense, cave-like reverb."
  },
  {
    "number": "720",
    "name": "EZCHORUS",
    "algorithm": "LAYERED SHIFT",
    "description": "Instant, stereo guitar."
  },
  {
    "number": "721",
    "name": "FALLING FLANGER",
    "algorithm": "LAYERED SHIFT",
    "description": "Flanger left, delay right."
  },
  {
    "number": "722",
    "name": "GREEN WRINGER",
    "algorithm": "STEREO SHIFT",
    "description": "Turns your guitar into vegemite."
  },
  {
    "number": "723",
    "name": "HEAVEN",
    "algorithm": "REVERSE SHIFT",
    "description": "Play anything into this. It will sound good."
  },
  {
    "number": "724",
    "name": "HELL",
    "algorithm": "REVERSE SHIFT",
    "description": "An unearthly sound."
  },
  {
    "number": "725",
    "name": "HEXA CHORUS",
    "algorithm": "SWEPT COMBS",
    "description": "Super-thick chorus."
  },
  {
    "number": "726",
    "name": "HEXA FLANGE",
    "algorithm": "SWEPT COMBS",
    "description": "Super-thick flange."
  },
  {
    "number": "727",
    "name": "INSOMNIA",
    "algorithm": "DUAL SHIFT",
    "description": "Descending, chromatic intervals. This one will keep you up."
  },
  {
    "number": "728",
    "name": "KICK BACK CHORUS",
    "algorithm": "DUAL DIGIPLEX",
    "description": "A long delay that comes back in stereo."
  },
  {
    "number": "729",
    "name": "LOVE GUNPLAY IN C",
    "algorithm": "DIATONIC SHIFT",
    "description": "If you like sevenths, you'll like this one."
  },
  {
    "number": "730",
    "name": "MINOR 7TH ECHOES",
    "algorithm": "DIATONIC SHIFT",
    "description": "Backwards minor 3rd and 7th echoes. Sounds great if you play up high and dirty."
  },
  {
    "number": "731",
    "name": "MONDO CHORUS",
    "algorithm": "DUAL SHIFT",
    "description": "A wide chorus that still keeps its punch."
  },
  {
    "number": "732",
    "name": "OCTAVE DISPLACE",
    "algorithm": "LAYERED SHIFT",
    "description": "Delayed octaves, up and down."
  },
  {
    "number": "733",
    "name": "OCTAVE FRENZY",
    "algorithm": "LAYERED SHIFT",
    "description": "Octaves with feedback."
  },
  {
    "number": "734",
    "name": "OUTDOOR ARENA",
    "algorithm": "REVERSE SHIFT",
    "description": "Big stadium, backwards echoes."
  },
  {
    "number": "735",
    "name": "PARADITTLE",
    "algorithm": "ULTRA-TAP",
    "description": "Diffused machine-gun echoes."
  },
  {
    "number": "736",
    "name": "REVERB-a-BOUND",
    "algorithm": "ULTRA-TAP",
    "description": "Thick reverb with a long attack time."
  },
  {
    "number": "737",
    "name": "SLOPPY 5THS",
    "algorithm": "STEREO SHIFT",
    "description": "Detuned fifths. Great for solos."
  },
  {
    "number": "738",
    "name": "SMALL Chorus ROOM",
    "algorithm": "SWEPT COMBS",
    "description": "A small room with an intense chorus."
  },
  {
    "number": "739",
    "name": "SMALL DARK ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "A realistic, small-room reverb."
  },
  {
    "number": "740",
    "name": "SPACE CATS",
    "algorithm": "SWEPT COMBS",
    "description": "This defies explanation."
  },
  {
    "number": "741",
    "name": "STUPIT GUN",
    "algorithm": "STEREO SHIFT",
    "description": "A dissonant pitch, sweep down."
  },
  {
    "number": "742",
    "name": "SYNTHISH",
    "algorithm": "DUAL SHIFT",
    "description": "Distorted guitar in, synth out."
  },
  {
    "number": "743",
    "name": "TARUS BULBA Em",
    "algorithm": "DIATONIC SHIFT",
    "description": "A fifth up, fourth down, in E minor."
  },
  {
    "number": "744",
    "name": "THE BLUBBA HOZE",
    "algorithm": "LAYERED SHIFT",
    "description": "First a fourth down, then a fifth up."
  },
  {
    "number": "745",
    "name": "TIGHT CHORUS",
    "algorithm": "STEREO SHIFT",
    "description": "A micro-shift that preserves stereo imaging."
  },
  {
    "number": "746",
    "name": "TRIPPLE SLAP",
    "algorithm": "SWEPT COMBS",
    "description": "Three closely spaced echoes."
  },
  {
    "number": "747",
    "name": "TRIPPLE TREAT",
    "algorithm": "DUAL DIGIPLEX",
    "description": "Two long echoes, plus the original, make three."
  },
  {
    "number": "750",
    "name": "ADR TAPE HISS",
    "algorithm": "PATCH FACTORY",
    "description": "Provides hiss to use for matching edits between analog and digital sources."
  },
  {
    "number": "751",
    "name": "BOING HIT",
    "algorithm": "PATCH FACTORY",
    "description": "Sounds like a boing hit you know the show."
  },
  {
    "number": "752",
    "name": "CIRCLES",
    "algorithm": "ULTRA-TAP",
    "description": "Delays that sound like they sweep in circles."
  },
  {
    "number": "753",
    "name": "DAY IN THE LIFE",
    "algorithm": "SWEPT REVERB",
    "description": "Long, nightmarish reverb."
  },
  {
    "number": "754",
    "name": "DRAGWAY AD",
    "algorithm": "PATCH FACTORY",
    "description": "One-stop preset for those annoying ads."
  },
  {
    "number": "755",
    "name": "FADE TO DREAM",
    "algorithm": "LAYERED SHIFT",
    "description": "Gives illusion of drifting off into dream."
  },
  {
    "number": "756",
    "name": "GIL'S ROOM",
    "algorithm": "REVERB FACTORY",
    "description": "Smooth, roomy reverb. Sounds good to Gil."
  },
  {
    "number": "757",
    "name": "GREGORIAN CHANT",
    "algorithm": "PATCH FACTORY",
    "description": "Adds fifths to input ala Gregorian Monks."
  },
  {
    "number": "758",
    "name": "HOUSE VERB",
    "algorithm": "SWEPT COMBS",
    "description": "Sounds like the echo in a new house without furniture."
  },
  {
    "number": "759",
    "name": "JET FLY BY",
    "algorithm": "PATCH FACTORY",
    "description": "Convincing stereo, jet plane."
  },
  {
    "number": "760",
    "name": "LASER HIT",
    "algorithm": "PATCH FACTORY",
    "description": "Captain, I can't make the shields last much longer!"
  },
  {
    "number": "761",
    "name": "MassiveStringTap",
    "algorithm": "ULTRA-TAP",
    "description": "Delays set mondo-wide and big for strings."
  },
  {
    "number": "762",
    "name": "MEGAPHONE",
    "algorithm": "PATCH FACTORY",
    "description": "Come out with your hands up."
  },
  {
    "number": "763",
    "name": "MovingVocalSprd",
    "algorithm": "MULTI-SHIFT",
    "description": "Left output moves up nine cents, right moves down nine cents, with sine wave modulation."
  },
  {
    "number": "764",
    "name": "PLUCK HIT",
    "algorithm": "PATCH FACTORY",
    "description": "Hi-tech, plucking sound."
  },
  {
    "number": "765",
    "name": "PULSING ROOM",
    "algorithm": "DENSE ROOM",
    "description": "Long, warm verb."
  },
  {
    "number": "766",
    "name": "RANDOM SHIFT",
    "algorithm": "LAYERED SHIFT",
    "description": "Random-shifting thickener."
  },
  {
    "number": "767",
    "name": "REVERSE DOGS",
    "algorithm": "REVERSE SHIFT",
    "description": "Low octaves, howling backwards."
  },
  {
    "number": "768",
    "name": "RIPPED WOOFER",
    "algorithm": "PATCH FACTORY",
    "description": "Damn! Should have kicked in the subsonic filter for that jet sample!"
  },
  {
    "number": "769",
    "name": "SHIMMERISH",
    "algorithm": "SWEPT REVERB",
    "description": "Ethereal sounding, verb-like effect."
  },
  {
    "number": "770",
    "name": "STEREO COPTER",
    "algorithm": "PATCH FACTORY",
    "description": "Stereo-sounding helicopter."
  },
  {
    "number": "771",
    "name": "ST PETERS CATH",
    "algorithm": "REVERB FACTORY",
    "description": "BEEEG reverb senor!"
  },
  {
    "number": "772",
    "name": "TELEPHONE",
    "algorithm": "PATCH FACTORY",
    "description": "One-stop, telephone-voice sound."
  },
  {
    "number": "773",
    "name": "THUNDER BOLT",
    "algorithm": "PATCH FACTORY",
    "description": "Sounds like thunder."
  },
  {
    "number": "774",
    "name": "TV/RADIO/JUKE",
    "algorithm": "PATCH FACTORY",
    "description": "Sounds like box in the next room."
  },
  {
    "number": "775",
    "name": "VOICE DISGUISER",
    "algorithm": "SWEPT COMBS",
    "description": "Useful for covering identity of interviewee's voice for controversial/confidential radio or television appearances."
  },
  {
    "number": "776",
    "name": "WalaWala",
    "algorithm": "DUAL SHIFT",
    "description": "Conversation simulator three from one."
  },
  {
    "number": "777",
    "name": "WARPED LP",
    "algorithm": "STEREO SHIFT",
    "description": "Guess what this sounds like?"
  },
  {
    "number": "778",
    "name": "WINDSTORM",
    "algorithm": "PATCH FACTORY",
    "description": "Bundle up before you load this preset."
  },
  {
    "number": "779",
    "name": "DIRECT BOX",
    "algorithm": "PATCH FACTORY",
    "description": "Very clean, direct box. See manual for changing gain. Avoids analog to digital converters unless 'effect' is turned up. At unity gain, S/N is well over 100dB on Channel 1."
  },
  {
    "number": "780",
    "name": "MEAN OCTAVES",
    "algorithm": "PATCH FACTORY",
    "description": "Distortion with octave pitch shift."
  },
  {
    "number": "781",
    "name": "PIGNOSY",
    "algorithm": "PATCH FACTORY",
    "description": "A popular, little guy."
  },
  {
    "number": "782",
    "name": "R & B PLUCK",
    "algorithm": "PATCH FACTORY",
    "description": "Has that clean sound with flange and delay."
  },
  {
    "number": "783",
    "name": "SCREAMER DELAY",
    "algorithm": "PATCH FACTORY",
    "description": "Gritty distortion with delay."
  },
  {
    "number": "784",
    "name": "SCREAMER uPITCH",
    "algorithm": "PATCH FACTORY",
    "description": "Gritty distortion with added delay and harmony."
  },
  {
    "number": "785",
    "name": "SILVERTONE II",
    "algorithm": "PATCH FACTORY",
    "description": "That old beginner's sound."
  },
  {
    "number": "786",
    "name": "ULTRALUX",
    "algorithm": "PATCH FACTORY",
    "description": "Bright, rhythm sound."
  },
  {
    "number": "793",
    "name": "CLONEVERB",
    "algorithm": "REVERB FACTORY",
    "description": "Bright, medium room."
  },
  {
    "number": "794",
    "name": "LIKE ENOSE IN E",
    "algorithm": "REVERB FACTORY",
    "description": "Resonating gated and echo in key of E."
  },
  {
    "number": "795",
    "name": "LONG & SMOOTH",
    "algorithm": "REVERB FACTORY",
    "description": "Long, smooth, bright hall."
  },
  {
    "number": "796",
    "name": "MEAT LOCKER",
    "algorithm": "REVERB FACTORY",
    "description": "Sounds like a meat-locker-sized space."
  },
  {
    "number": "797",
    "name": "MIDI 3 ON 2",
    "algorithm": "DUAL DIGIPLEX",
    "description": "Delays scaled by MIDI clock period."
  },
  {
    "number": "798",
    "name": "MIDIPLEX",
    "algorithm": "LONG DIGIPLEX",
    "description": "Single delay scaled by MIDI clock."
  },
  {
    "number": "799",
    "name": "MULTI FLANGERS",
    "algorithm": "SWEPT COMBS",
    "description": "Resonant set of flangers. Watch clipping."
  },
  {
    "number": "800",
    "name": "allpass detune",
    "algorithm": "MOD FACTORY",
    "description": "Uses two detuners in series to give a unique, reverb-like chorus."
  },
  {
    "number": "801",
    "name": "anti-duck feedback",
    "algorithm": "MOD FACTORY",
    "description": "Dual delays that feedback only while audio is present."
  },
  {
    "number": "802",
    "name": "awesome flange",
    "algorithm": "MOD FACTORY",
    "description": "Two flangers in series give some super notches with pitch detuning on the output."
  },
  {
    "number": "803",
    "name": "awesome knob",
    "algorithm": "MOD FACTORY",
    "description": "The awesome flanger with manual control: (the knob) use this to manually sweep the flanger."
  },
  {
    "number": "804",
    "name": "band compress",
    "algorithm": "MOD FACTORY",
    "description": "A fixed 21 dual-band compressor."
  },
  {
    "number": "805",
    "name": "band flip",
    "algorithm": "MOD FACTORY",
    "description": "This patch splits the input signal into two bands, a high band and a low band. The output continuously crossfades between these two bands."
  },
  {
    "number": "806",
    "name": "bandsplit delay",
    "algorithm": "MOD FACTORY",
    "description": "Splits input signal into two bands and passes each band through a separate delay line. The low band goes to the left output channel and the high band to the right."
  },
  {
    "number": "807",
    "name": "boing",
    "algorithm": "MOD FACTORY",
    "description": "A strange, triggered, pitch mutilation."
  },
  {
    "number": "808",
    "name": "bpm panner",
    "algorithm": "MOD FACTORY",
    "description": "An autopanner with the pan rate controlled by the BPM setting."
  },
  {
    "number": "809",
    "name": "bpm trips and qtr",
    "algorithm": "MOD FACTORY",
    "description": "Beat-per-minute triplets on one side, quarter note on the other."
  },
  {
    "number": "810",
    "name": "bpm trip pan",
    "algorithm": "MOD FACTORY",
    "description": "Beat-per-minute triplets feeding an autopanner."
  },
  {
    "number": "811",
    "name": "bpm x-fed duck",
    "algorithm": "MOD FACTORY",
    "description": "Two ducked delays adjusted in beats-per-minute. The output of delay 1 feeds back into the input of delay 2 and vice-versa."
  },
  {
    "number": "812",
    "name": "chorus/duck trm",
    "algorithm": "MOD FACTORY",
    "description": "Detune chorus to the left and right and a ducked, tremolo delay in the center."
  },
  {
    "number": "813",
    "name": "chorus/duck dly",
    "algorithm": "MOD FACTORY",
    "description": "A detuned chorus and ducked delays."
  },
  {
    "number": "814",
    "name": "chorus/pan dly",
    "algorithm": "MOD FACTORY",
    "description": "Pitch detuning on the left and right with a dry, autopanned repeating delay."
  },
  {
    "number": "815",
    "name": "chorus room",
    "algorithm": "MOD FACTORY",
    "description": "A reverb-like chorus."
  },
  {
    "number": "816",
    "name": "compress 21",
    "algorithm": "MOD FACTORY",
    "description": "A fixed 2:1 compressor. Use env1 parameters to control the compressor."
  },
  {
    "number": "817",
    "name": "detuned space",
    "algorithm": "MOD FACTORY",
    "description": "Detuners arranged to give a small-room sound."
  },
  {
    "number": "818",
    "name": "detune darkly",
    "algorithm": "MOD FACTORY",
    "description": "Detuning with control over high-frequency rolloff."
  },
  {
    "number": "819",
    "name": "dual long delay",
    "algorithm": "MOD FACTORY",
    "description": "Two independent delay loops. Use delay controls to change delay and feedback."
  },
  {
    "number": "820",
    "name": "dual duck delay",
    "algorithm": "MOD FACTORY",
    "description": "Two independent delay loops with gain ducking. Use delay controls to change delay and feedback. Use envelope controls to adjust gain ducking."
  },
  {
    "number": "821",
    "name": "dual panners",
    "algorithm": "MOD FACTORY",
    "description": "Two independent autopanners."
  },
  {
    "number": "822",
    "name": "dual tremolo",
    "algorithm": "MOD FACTORY",
    "description": "Two tremolos, with delays."
  },
  {
    "number": "823",
    "name": "ducked 'verb",
    "algorithm": "MOD FACTORY",
    "description": "A chorused, reverb-like effect that ducks with the input."
  },
  {
    "number": "824",
    "name": "dynamic feedback",
    "algorithm": "MOD FACTORY",
    "description": "Dual delay loops with lowpass filters in the feedback loop. The filter frequencies are modulated by the input envelope to give a downward sweep to the feedback."
  },
  {
    "number": "825",
    "name": "dynamic flange",
    "algorithm": "MOD FACTORY",
    "description": "The input level controls the amount of feedback in this two-voice flanger. Higher input levels give a more resonant flange."
  },
  {
    "number": "826",
    "name": "dynamic tremolo",
    "algorithm": "MOD FACTORY",
    "description": "Tremolo, with the rate controlled by the input level. The output is detuned to give a stereo, chorus effect."
  },
  {
    "number": "827",
    "name": "envelope detune",
    "algorithm": "MOD FACTORY",
    "description": "A stereo detuner with dynamic control of the detune amount. Greater input levels increase or decrease the amount detuning."
  },
  {
    "number": "828",
    "name": "envelope filter",
    "algorithm": "MOD FACTORY",
    "description": "That classic, funky sound. This uses both filter 1 and 2. Use env1 attack and env1 decay times to control the envelope response."
  },
  {
    "number": "829",
    "name": "envelope flange",
    "algorithm": "MOD FACTORY",
    "description": "A two-voice flanger with the envelope sweeping the delay."
  },
  {
    "number": "830",
    "name": "env filter/slap",
    "algorithm": "MOD FACTORY",
    "description": "Envelope filter into a slap delay."
  },
  {
    "number": "831",
    "name": "env filter/verb",
    "algorithm": "MOD FACTORY",
    "description": "Envelope filter into a cheap reverb."
  },
  {
    "number": "832",
    "name": "envelope pan",
    "algorithm": "MOD FACTORY",
    "description": "Pan position varies with input signal level. Higher levels are panned left and lower levels are panned right. Use env 1 controls to set attack and decay times."
  },
  {
    "number": "833",
    "name": "ethereal",
    "algorithm": "MOD FACTORY",
    "description": "A very watery, haunting reverb."
  },
  {
    "number": "834",
    "name": "ethereal logic",
    "algorithm": "MOD FACTORY",
    "description": "The ethereal reverb modulated with a square wave."
  },
  {
    "number": "835",
    "name": "etherpan",
    "algorithm": "MOD FACTORY",
    "description": "The ethereal reverb followed by an autopanner."
  },
  {
    "number": "836",
    "name": "ethertrem",
    "algorithm": "MOD FACTORY",
    "description": "The ethereal reverb feeding a tremolo."
  },
  {
    "number": "837",
    "name": "exponential",
    "algorithm": "MOD FACTORY",
    "description": "Four chorused, delay taps with exponential spacing. Use BPM to set the amount of delay."
  },
  {
    "number": "838",
    "name": "filter sweep",
    "algorithm": "MOD FACTORY",
    "description": "A funky, triggered, filter sweep. The input signal triggers the sweep. To set the trigger level, adjust LFO 1 threshold."
  },
  {
    "number": "839",
    "name": "flange pan",
    "algorithm": "MOD FACTORY",
    "description": "Dual autopanners with delay modulation."
  },
  {
    "number": "840",
    "name": "flutter",
    "algorithm": "MOD FACTORY",
    "description": "A more intense, dynamic tremolo."
  },
  {
    "number": "841",
    "name": "funky squares",
    "algorithm": "MOD FACTORY",
    "description": "A pair of highly resonant, square-wave, modulated filters."
  },
  {
    "number": "842",
    "name": "fuzz/chorus",
    "algorithm": "MOD FACTORY",
    "description": "A fuzz box feeding a detuned chorus. The detune is right and left, with dry distortion in the center."
  },
  {
    "number": "843",
    "name": "fuzz/clean chrs",
    "algorithm": "MOD FACTORY",
    "description": "Fuzz in the center with a clean-pitch detune left and right."
  },
  {
    "number": "844",
    "name": "fuzz/eq/comp",
    "algorithm": "MOD FACTORY",
    "description": "A 21 compressor precedes the distortion. Also has two bands of eq and independent left/right channel delays. Adjust filter 1 and 2 to control eq."
  },
  {
    "number": "845",
    "name": "fuzz/eq/rotary",
    "algorithm": "MOD FACTORY",
    "description": "Fuzz into a rotating speaker simulation."
  },
  {
    "number": "846",
    "name": "fuzz/eq/tremolo",
    "algorithm": "MOD FACTORY",
    "description": "Fuzz into a tremolo."
  },
  {
    "number": "847",
    "name": "fuzz-head",
    "algorithm": "MOD FACTORY",
    "description": "Super, high-gain fuzz with resonant overtones."
  },
  {
    "number": "848",
    "name": "gated ghost",
    "algorithm": "MOD FACTORY",
    "description": "The ethereal reverb followed by a noise gate. Use the envelope follower parameters to adjust the gate."
  },
  {
    "number": "849",
    "name": "gated multitap",
    "algorithm": "MOD FACTORY",
    "description": "A chorused, multi-tap delay followed by a noise gate."
  },
  {
    "number": "850",
    "name": "haas panner",
    "algorithm": "MOD FACTORY",
    "description": "An autopanner that varies the delay to the left and right channels to enhance the realism of the panning effect."
  },
  {
    "number": "851",
    "name": "Haas pan/manual",
    "algorithm": "MOD FACTORY",
    "description": "A manual panner that varies the delay to the left and right channels to enhance the realism of the panning effect."
  },
  {
    "number": "852",
    "name": "hi->efx lo->noefx",
    "algorithm": "MOD FACTORY",
    "description": "A frequency-dependent gate that lets the high notes into a chorus delay effect. Use cutoff1 and cutoff2 to adjust the crossover point."
  },
  {
    "number": "853",
    "name": "high->lft low->rt",
    "algorithm": "MOD FACTORY",
    "description": "A frequency-dependent gate that steers the high notes to the left channel and the low notes to the right channel. Use cutoff1 and cutoff2 to adjust the crossover point."
  },
  {
    "number": "854",
    "name": "knob zippers",
    "algorithm": "MOD FACTORY",
    "description": "Use the knob to control delay time, giving a zipper effect."
  },
  {
    "number": "855",
    "name": "manual flange",
    "algorithm": "MOD FACTORY",
    "description": "Use the knob to flange. This is a subtle version, try \"awesome knob\" (#803) or \"rich flange/man\" (#872) for more intense flanging."
  },
  {
    "number": "856",
    "name": "midi efx rack",
    "algorithm": "MOD FACTORY",
    "description": "This is set up to use with a MIDI controller like the MIDI mitigator. Each parameter of this patch is assigned to a different MIDI controller. This patch gives you a pair of ducked, BPM delays in parallel with a pitch-detuning chorus."
  },
  {
    "number": "858",
    "name": "overdub loop",
    "algorithm": "MOD FACTORY",
    "description": "A long loop with delay modulation that overdubs without overload. Use delay 1 to control the length of the loop."
  },
  {
    "number": "859",
    "name": "overdub/detune",
    "algorithm": "MOD FACTORY",
    "description": "An overdubbing loop like above, except with detuning on the left and right outputs. The dry loop output is panned center. Also, this patch has BPM control over the loop length."
  },
  {
    "number": "860",
    "name": "overdub/tremolo",
    "algorithm": "MOD FACTORY",
    "description": "An overdubbing loop with chorus and tremolo. BPM controls the loop length. The chorus is panned left and right. The tremolo is panned center."
  },
  {
    "number": "861",
    "name": "overdub dual",
    "algorithm": "MOD FACTORY",
    "description": "Dual overdubbing delay loops with knob modulation of the delay times."
  },
  {
    "number": "862",
    "name": "panning bands",
    "algorithm": "MOD FACTORY",
    "description": "Dual autopanners fed by fixed bandpass filters. Use filter 1 and 2 parameters to adjust the characteristics of the bands."
  },
  {
    "number": "863",
    "name": "panning delays",
    "algorithm": "MOD FACTORY",
    "description": "Dual delays, each with its own autopanner."
  },
  {
    "number": "864",
    "name": "panning detune",
    "algorithm": "MOD FACTORY",
    "description": "An autopanner with the left and right channels detuned."
  },
  {
    "number": "865",
    "name": "pan into delays",
    "algorithm": "MOD FACTORY",
    "description": "An autopanner that feeds a cross-fed pair of delays."
  },
  {
    "number": "866",
    "name": "panner",
    "algorithm": "MOD FACTORY",
    "description": "Autopan using a frequency-modulated oscillator."
  },
  {
    "number": "867",
    "name": "pan squarely",
    "algorithm": "MOD FACTORY",
    "description": "Autopan with a square-wave oscillator."
  },
  {
    "number": "868",
    "name": "ping-pong",
    "algorithm": "MOD FACTORY",
    "description": "A ping-pong delay with controllable high cut."
  },
  {
    "number": "869",
    "name": "ping-pong duck",
    "algorithm": "MOD FACTORY",
    "description": "Like above, with ducking on the delays. Use envelope controls to adjust ducking parameters."
  },
  {
    "number": "870",
    "name": "quivering echo",
    "algorithm": "MOD FACTORY",
    "description": "A uniquely modulated delay. Use BPM to adjust delays and modulation."
  },
  {
    "number": "871",
    "name": "rich flange",
    "algorithm": "MOD FACTORY",
    "description": "A flanger built with two delays and cross-coupled feedback."
  },
  {
    "number": "872",
    "name": "rich flange/man",
    "algorithm": "MOD FACTORY",
    "description": "The same flanger as above, but this one has manual control."
  },
  {
    "number": "873",
    "name": "rich rhythm",
    "algorithm": "MOD FACTORY",
    "description": "A very diffuse, chorused pair of repeating delays. Use BPM to set the tempo."
  },
  {
    "number": "874",
    "name": "sine flange",
    "algorithm": "MOD FACTORY",
    "description": "A very smooth flange that uses a sine wave to sweep the delays."
  },
  {
    "number": "875",
    "name": "slap center",
    "algorithm": "MOD FACTORY",
    "description": "Detuned chorus on left and right with a dry slap in the middle."
  },
  {
    "number": "876",
    "name": "slide into tune",
    "algorithm": "MOD FACTORY",
    "description": "The input envelope bends the pitch upward. Use envelope controls to vary the dynamics of the pitch bend."
  },
  {
    "number": "877",
    "name": "speaker spinner",
    "algorithm": "MOD FACTORY",
    "description": "A rotating speaker simulation. Even takes time to come up to speed."
  },
  {
    "number": "878",
    "name": "square chorus",
    "algorithm": "MOD FACTORY",
    "description": "Pitch, detuning modulated by a square wave."
  },
  {
    "number": "879",
    "name": "stereo detune",
    "algorithm": "MOD FACTORY",
    "description": "Splits stereo signal into L+R and L-R. In addition to controlling the balance of L+R and L-R, L+R can be detuned."
  },
  {
    "number": "880",
    "name": "stereo enhance",
    "algorithm": "MOD FACTORY",
    "description": "This patch plays around with the L-R component of a stereo mix. Delay and EQ of the L-R signal are controllable with softknobs."
  },
  {
    "number": "881",
    "name": "stereo widen",
    "algorithm": "MOD FACTORY",
    "description": "Adds delay to L+R to give wider center image."
  },
  {
    "number": "882",
    "name": "strange loop",
    "algorithm": "MOD FACTORY",
    "description": "Output switches between two different delay loops, giving an interesting, rhythmic effect."
  },
  {
    "number": "883",
    "name": "swell",
    "algorithm": "MOD FACTORY",
    "description": "A gain swell triggered by the audio input. Use thresh1 to adjust the trigger threshold."
  },
  {
    "number": "884",
    "name": "swell reverb",
    "algorithm": "MOD FACTORY",
    "description": "The ethereal reverb modulated by a triggered, amplitude swell."
  },
  {
    "number": "885",
    "name": "swell taps",
    "algorithm": "MOD FACTORY",
    "description": "A multi-tap delay gated with a triggered LFO. Use LFO thresh to adjust trigger threshold."
  },
  {
    "number": "886",
    "name": "throaty",
    "algorithm": "MOD FACTORY",
    "description": "An envelope flanger based on the awesome flanger."
  },
  {
    "number": "887",
    "name": "tremolo",
    "algorithm": "MOD FACTORY",
    "description": "A stereo tremolo with independent left/right delay control. Use delay 1 and delay 2 parameters to set delays."
  },
  {
    "number": "888",
    "name": "triggered air",
    "algorithm": "MOD FACTORY",
    "description": "A rich, chorused reverb whose output is gated by a triggered LFO. The left input triggers the swell. Use thresh1 to set the trigger threshold."
  },
  {
    "number": "889",
    "name": "triggered flange",
    "algorithm": "MOD FACTORY",
    "description": "Audio input triggers flange sweep. Thresh1 adjusts the trigger threshold."
  },
  {
    "number": "890",
    "name": "triggered pan",
    "algorithm": "MOD FACTORY",
    "description": "Audio input alternately triggers a pan to the left, then to the right. Thresh1 controls the trigger threshold."
  },
  {
    "number": "891",
    "name": "trig pan r->l->r",
    "algorithm": "MOD FACTORY",
    "description": "Audio trigger pans right to left to right. Thresh1 controls the trigger threshold."
  },
  {
    "number": "892",
    "name": "true flange",
    "algorithm": "MOD FACTORY",
    "description": "Thru-zero flanging. This uses two delays to get flanging that actually passes through zero delay."
  },
  {
    "number": "893",
    "name": "undulator",
    "algorithm": "MOD FACTORY",
    "description": "Tremolo on top of a multi-tap delay."
  },
  {
    "number": "894",
    "name": "vibrato",
    "algorithm": "MOD FACTORY",
    "description": "Vibrato with controllable delay."
  },
  {
    "number": "895",
    "name": "whaaat-a-panner",
    "algorithm": "MOD FACTORY",
    "description": "Two bands that pan and change cutoff frequency."
  },
  {
    "number": "896",
    "name": "whoopie",
    "algorithm": "MOD FACTORY",
    "description": "Very strange envelope-modulated noises."
  },
  {
    "number": "897",
    "name": "wide tremolo",
    "algorithm": "MOD FACTORY",
    "description": "Tremolo with different delay on left and right gives a nice, stereo effect."
  },
  {
    "number": "898",
    "name": "wilting phrase",
    "algorithm": "MOD FACTORY",
    "description": "After a phrase is played, the pitch drops."
  },
  {
    "number": "899",
    "name": "x-coupled ducks",
    "algorithm": "MOD FACTORY",
    "description": "Two ducked delays with cross-coupled feedback."
  },
  {
    "number": "975",
    "name": "MULTI DOUBLER",
    "algorithm": "SWEPT COMBS",
    "description": "Flangy thickener. Try on background vox."
  },
  {
    "number": "976",
    "name": "MUTRUM",
    "algorithm": "PATCH FACTORY",
    "description": "Garbly, alien sound."
  },
  {
    "number": "977",
    "name": "HIGH SWELLS",
    "algorithm": "REVERSE SHIFT",
    "description": "High shimmer for synth pads."
  },
  {
    "number": "978",
    "name": "NewBrightChambr",
    "algorithm": "DENSE ROOM",
    "description": "Medium-large, bright chamber."
  },
  {
    "number": "979",
    "name": "SmallEmptyClub",
    "algorithm": "DENSE ROOM",
    "description": "Tiny, empty club you worked at last week."
  },
  {
    "number": "980",
    "name": "PAPER PLATE",
    "algorithm": "REVERB FACTORY",
    "description": "Small, thin-plate reverb."
  },
  {
    "number": "981",
    "name": "OTHERS MONO DLY",
    "algorithm": "LAYERED SHIFT",
    "description": "Basic delay with feedback."
  },
  {
    "number": "982",
    "name": "007 PHASE GUN",
    "algorithm": "PHASER",
    "description": "Sci-fi, fun gun."
  },
  {
    "number": "983",
    "name": "PHASER GTR",
    "algorithm": "PHASER",
    "description": "General-purpose PHASER. Try on Guitar."
  },
  {
    "number": "984",
    "name": "ROEYs PHASOLOGY",
    "algorithm": "PHASER",
    "description": "Deep and slow, is the way to go."
  },
  {
    "number": "985",
    "name": "USEFUL VERB 2",
    "algorithm": "REVERB FACTORY",
    "description": "Generic reverb, medium well."
  },
  {
    "number": "986",
    "name": "POOBLICE ON 9",
    "algorithm": "LAYERED SHIFT",
    "description": "Deglitched, hi-end sound, L+12, R-11."
  },
  {
    "number": "987",
    "name": "R & B DIRTSKI*",
    "algorithm": "PATCH FACTORY",
    "description": "Nice thickener for guitars. Distorted ambience."
  },
  {
    "number": "988",
    "name": "REAL CHORUS 2",
    "algorithm": "MULTI-SHIFT",
    "description": "Randomized doubler. Smaller than preset #528."
  },
  {
    "number": "989",
    "name": "ResonateInEnozE",
    "algorithm": "SWEPT COMBS",
    "description": "Verby at first, then more tuned delay-like."
  },
  {
    "number": "990",
    "name": "ROBO DRUM",
    "algorithm": "PATCH FACTORY",
    "description": "Adds cylon ambience to percussives."
  },
  {
    "number": "991",
    "name": "AIR SHAMIR",
    "algorithm": "DENSE ROOM",
    "description": "Tight, lil' thang."
  },
  {
    "number": "992",
    "name": "ONVELOPE FILTER",
    "algorithm": "PHASER",
    "description": "Long, cool sweep. Cool on bassy things."
  },
  {
    "number": "993",
    "name": "UK STYLE VERB",
    "algorithm": "REVERB FACTORY",
    "description": "It's Brit-ish, mate."
  },
  {
    "number": "994",
    "name": "SHO IZ TITE VRB",
    "algorithm": "REVERB FACTORY",
    "description": "Tight , gated reverb. Bright."
  },
  {
    "number": "995",
    "name": "SMALL & LIVE VERB",
    "algorithm": "REVERB FACTORY",
    "description": "Funny, gated, little verb. Ha Ha."
  },
  {
    "number": "996",
    "name": "SNARE SLAP",
    "algorithm": "PATCH FACTORY",
    "description": "Poppy, delayed effect."
  },
  {
    "number": "997",
    "name": "STRING MODLER#9",
    "algorithm": "STRING MODELER",
    "description": "Droning sounds in the background."
  },
  {
    "number": "998",
    "name": "TALKIN BUM",
    "algorithm": "PATCH FACTORY",
    "description": "Sounds like bums sayin 'walla, walla.'"
  },
  {
    "number": "999",
    "name": "THUNDER TOMS",
    "algorithm": "PATCH FACTORY",
    "description": "One-of-a-kind, falling ambience for toms."
  }
];

// Mapping between Algorithm names and internal algorithm codes.
const algorithmNumbers = {
	"DIATONIC SHIFT": 100,
	"LAYERED SHIFT": 101,
	"DUAL SHIFT": 102,
	"STEREO SHIFT": 103,
	"REVERSE SHIFT": 104,
	"SWEPT COMBS": 105,
	"SWEPT REVERB": 106,
	"REVERB FACTORY": 107,
	"ULTRA-TAP": 108,
	"LONG DIGIPLEX": 109,
	"DUAL DIGIPLEX": 110,
	"PATCH FACTORY": 111,
	"STUTTER": 112,
	"TIMESQUEEZE": 113,
	"DENSE ROOM": 114,
	"VOCODER": 115,
	"MULTI-SHIFT": 116,
	"BAND DELAY": 117,
	"STRING MODELER": 118,
	"PHASER": 119,
	"STUDIO SAMPLER": 120,
	"MOD FACTORY|ONE": 122,
	"MOD FACTORY": 122, // Some entries use "MOD FACTORY|ONE", others just "MOD FACTORY"
	"MOD FACTORY|TWO": 123,
}; 
