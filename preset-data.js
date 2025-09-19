const presets_csv = `# Preset Number	Preset Name	Algorithm	Description
100	Diatonic Shift	DIATONIC SHIFT	Left only
101	Layered Shift	LAYERED SHIFT	Left only
102	Dual Shift	DUAL SHIFT	L & R independent
103	Stereo Shift	STEREO SHIFT	L & R stereo
104	Reverse Shift	REVERSE SHIFT	Left only
105	Swept Combs	SWEPT COMBS	L only or L&R stereo
106	Swept Reverb	SWEPT REVERB	SWEPT REVERB	L & R stereo
107	Reverb Factory	REVERB FACTORY	Left only
108	Ultra-Tap	ULTRA-TAP	L only or L&R sum
109	Long Digiplex	LONG DIGIPLEX	Left only
110	Dual Digiplex	DUAL DIGIPLEX	L only or L&R indep.
111	Patch Factory	PATCH FACTORY	Left only
112	Stutter	STUTTER	L & R summed
113	Timesqueeze	TIMESQUEEZE	L & R stereo
114	Dense Room	DENSE ROOM	Left only
115	Vocoder	VOCODER	L carrier / R prog sig
116	Multi-Shift	MULTI-SHIFT	L & R independent
117	Band Delay	BAND DELAY	L & R summed
118	String Modeler	STRING MODELER	Left only
119	Phaser	PHASER	Left only
120	Studio Sampler|One	STUDIO SAMPLER	L only or L&R stereo
121	Studio Sampler|Two	STUDIO SAMPLER	L only or L&R stereo
122	Modfactory|One	MOD FACTORY|ONE	L & R independent
123	Modfactory|Two	MOD FACTORY|TWO	L & R independent
150	12BYRD-STRING	MULTI-SHIFT	Nice,12-stringy program. Uses lower octave doubling. Watch clipping.
151	12 STRING & 5th	MULTI-SHIFT	Similar to 12BYRD STRING with added 5th above.
152	3+ OF ME	DUAL DIGIPLEX	Doubling delays.
153	60sSITAR FLANGE	SWEPT REVERB	Psychedelic, twangy flange and reverb.
154	8 SEC REVERB	SWEPT REVERB	Long, SWEPT REVERB. Indoor stadium-like.
155	ANALOG DELAYS 2	PATCH FACTORY	Warm, filtered delays. Newer version of program 535 in SE. Delay 1 is longer and swept.
156	BACK TAPPING	ULTRA-TAP	Reversed-sounding delays with feedback.
157	BassChor DDL	MULTI-SHIFT	Nice doubling for the bass. Stereo image.
158	BIG 5TH HARMONY	MULTI-SHIFT	A 4th above and a 5th below.
159	THE BIG CHEEZ 2	MULTI-SHIFT	An octave Harmonizerr thing with 'roomy,' ambient delays added.
160	BLACK JACK	LAYERED SHIFT	Manually triggered sweep. Up then down.
161	CHORUS SLAP	SWEPT COMBS	Nice, swept thickener, sounds lush on everything.
162	COOL PRES	MOD FACTORY	Complex but warm delays. Dynamically affected by input.
163	CRYSTAL ECHO 2	REVERSE SHIFT	An H3000 original, slightly modified. A shimmering, hypnotic ambience. Derivative of H3000-SE preset 642.
164	DELAY & HARM	MULTI-SHIFT	A fifth is added and then sent through a delay.
165	DETUNE + DELAY	MULTI-SHIFT	Gentle detuning with a long delay.
166	DIFFUSED SLAP	ULTRA-TAP	Diffused delay with mix control.
167	DOLPHIN TALK	REVERSE SHIFT	How many times have you wanted that mating call sound of these aquatic mammals? Well, here it is.
168	DREAM FANTASY3	LAYERED SHIFT	Whole-tone extravaganza. 'Beam up' with a swelled harmonic on your guitar.
169	DUAL GTR DELAYS	DUAL DIGIPLEX	Two long delays, for really beeg guitar sound.
170	FATASSCAN-B	LAYERED SHIFT	Another thickenizer. Has soft knobs for easy control.
171	FLESH 4 FANTASY	SWEPT COMBS	Flangy, sweepy, doubly thing.
172	FLOAT!	ULTRA-TAP	Long, thick, swingin' delays.
173	FLOAT FLANGE	SWEPT REVERB	Strong, satisfying flange using negative feedback.
174	FRIZZLE FRY	ULTRA-TAP	Strong initial echoes, followed by diffuse, fed back echoes.
175	G MAJ MOD WHEEL	DIATONIC SHIFT	Turning the Mod Wheel on will turn mix up to 40% and bring in a third and fifth above your note. For live shows, those of you with MIDI pedals can control harmonies.
176	GTR OFF STAGE L	MOD FACTORY	If you use a stereo stage setup, send Left output to left cabinet and Right to right. A person standing in the middle will hear the guitar off to the left of the stage, when the balance is set properly. Experiment with settings and position of cabinets.
177	GTR OFF STAGE R	MOD FACTORY	Compliment of GTR OFF STAGE L.
178	GUITAR ROOM	REVERB FACTORY	Nice and tight kind of room. Nice guitar space.
179	HEAVEN I KNOW 9	REVERSE SHIFT	Squirrely, backwards shift effect.
180	HEAVENLY PAD DM	REVERSE SHIFT	Just like it says. High, reversed echoes.
181	HUNTER DELAY	REVERB FACTORY	Unusual, quickly repeating delays, becoming diffused as they decay.
182	JERRY RACE CAR	MULTI-SHIFT	A small, roomy-type ambience with detuning.
183	JIMI JAMES	REVERSE SHIFT	Basic reverse delays - like playing backwards in one-second snippets .
184	LUSH LIFE	SWEPT COMBS	Six wildly swept, tight delays with feedback. What a life.
185	MAJ3RD-MIN3RD+	MULTI-SHIFT	Lots of fun to solo with. A major chord is formed. One key fits all.
186	MIGHTY DUCK	MOD FACTORY 	A delay that swells up when signal is removed. It 'ducks ' out of the way of a solo.
187	MOD WHEEL CLIMB	LAYERED SHIFT	Will pitch shift up an octave with a Mod Wheel (through MIDI).
188	MOD WHEEL DIVE	LAYERED SHIFT	Compliment of Mod Wheel Climb. This one will dive an octave with a Mod Wheel controller through MIDI.
189	MULTI SLAP	SWEPT COMBS	Six swept delays that sound a little like a gated room.
190	SHOULDER PHONE	MOD FACTORY	Put the phone to your shoulder, this is what it sounds like.
191	RAYGUN	LAYERED SHIFT	Sounds like a PHASER. Set on STUN.
192	ResoVibroEee	SWEPT COMBS	Sharp, resonant reverb around low E.
193	ROOM OF DOOM	REVERB FACTORY	Warm, medium reverb. Groovy name.
194	RHYTHM & REVERB	MULTI-SHIFT	Nice ambience, built of short delays.
195	SEAS OF CHEESE	LONG DIGIPLEX	Long, long delay .
196	SLUDGWIK	SWEPT COMBS	Another nice, Eventide, fat chorus.
197	SON OF KAMIKAZE	MOD FACTORY	Delays that dive after a phrase stops and input drops below threshold. Scary.
198	STEREO W FLANGER	SWEPT COMBS	Variation on the flange theme.
199	SWEPT FLANGE 2	SWEPT REVERB	Flange theme with a variation.
200	ALIENS	REVERSE SHIFT	Transforms voice into a rough, alien-like sound.
201	AMBIENCE	ULTRA-TAP	Use this to add ambience without muddying the mix.
202	A MINOR CHORDS	DIATONIC SHIFT	Play or sing a solo line in A minor. The H3000 will generate two perfect 'in-key' harmonies.
203	ANTI-AMBIENCE	REVERSE SHIFT	This is a reverb-like sound created from REVERSE SHIFT. Sounds great on guitar. Mr. Cooder's favorite.
204	AVANT-GARDE	REVERSE SHIFT	A REVERSE SHIFT effect that generates descending, chromatic lines.
205	BASS SHIFT	LAYERED SHIFT	A doubling effect intended for bass guitar. One channel is shifted up an octave. The other is slightly detuned.
206	BIG SNARE	REVERB FACTORY	Thickens up weak, drum sounds. Try increasing gate time to get a more 'gated' effect.
207	BIG SWEEP	SWEPT REVERB	To really hear the sweep, turn up the master feedback, make some noise, and then change the master delay.
208	BIZARRMONIZER	LAYERED SHIFT	Generates a bizarre, upward sweeping pitch shift.
209	BRIGHT ROOM	REVERB FACTORY	A short, bright reverb.
210	CANNONS	REVERSE SHIFT	A unique, sweeping sound that's great on drums. Try playing a tom solo through this.
211	CANYON	REVERB FACTORY	Our biggest reverb sound, like an echoing canyon.
212	CIRCLES	ULTRA-TAP	A stereo-delay effect that seems to circle around your head. The effect is most noticeable on short sounds, like handclaps.
213	DARK ROOM	REVERB FACTORY	A very mellow, room sound.
214	DEATH FLANGE	SWEPT REVERB	A deep, intense flange that's great for thickening up a synthesized bass line.
215	DISCRETE-VERB	SWEPT COMBS	A sparse, reverb effect.
216	DRUM PROCESSOR	SWEPT REVERB	This very different effect tends to make things that aren't drums sound like drums. Try adjusting the first four parameters for a variety of effects.
217	DUAL H910s	DUAL SHIFT	This program is designed to function like two Eventide H910 Harmonizer effects processors. The glitching you hear is intentional. This is a true dual program, where both left and right channels are processed separately.
218	DUEL EFFECT	DUAL SHIFT	The left input is processed with a detuned slap delay, while the right channel is processed with a downward pitch sweep.
219	EXPLODING 'VERB	REVERB FACTORY	This sounds like a reverb, until the input level goes above the gate threshold. Once triggered, the reverb sound grows explosively.
220	FAT SLAP	ULTRA-TAP	A slap delay with an ambient sound.
221	FLANGE & REVERB	SWEPT COMBS	This is a reverb with a subtle, flanging effect.
222	FLANGER	SWEPT COMBS	This is a basic stereo flanger. For the best effect, mix the H3000 output with the dry signal.
223	GATED REVERB	REVERB FACTORY	That very familiar drum effect. To change the length of the 'gate' sound, set the gate length parameter.
224	GENERIC HALL	ULTRA-TAP	A 'cheap,' reverb effect.
225	GLITCH SHIFT	DUAL SHIFT	A 'cheap' pitch shifter. If glitches are what you want, here they are.
226	H949	LAYERED SHIFT	This gives you what the H949 gave you. One output is a straight delay, while the other is pitch shifted. Both outputs are fed back to the input.
227	HUMP-VERB	ULTRA-TAP	A very unique reverb with a sound not unlike the name.
228	JUST 3RD & 5TH	DIATONIC SHIFT	A 'diatonic' pitch shifter that will generate just intoned 3rds and 5ths above the input. Make sure to set the key properly.
229	JUST 4TH & 6TH	DIATONIC SHIFT	This generates just intoned 4ths and 6ths above the input.
230	LOCKER ROOM	REVERB FACTORY	A small, resonant reverb.
231	MICROPITCHSHIFT	LAYERED SHIFT	This is the perfect effect to fatten up or widen a sound without adding any color.
232	MICROPITCH-SLAP	LAYERED SHIFT	The left channel is micro-shifted and the right is a slap delay with micro-shift. Great for guitar.
233	MIDI 3 ON 2	DUAL DIGIPLEX	This preset will sync up its delay times to a MIDI drum machine or sequencer. The delays are in the familiar 3 on 2 pattern.
234	MIDI PEDALSWEEP	SWEPT REVERB	The MIDI foot pedal controller will manually sweep the delays in this program to generate a flange-like sound. The Modulation Wheel controls modulation of the delays.
235	MIDIPLEX	LONG DIGIPLEX	Connect a MIDI drum machine or sequencer to this program and the delay will automatically be in time.
236	MODWHEEL REVERB	SWEPT REVERB	When connected to a MIDI keyboard, the Mod Wheel controls the decay time and the Pitch Wheel controls the delay (room size). Use this to easily generate dramatic reverb sweeps.
237	MULTI-FLANGE	SWEPT COMBS	With six delays being swept at once, this program creates a very thick, flange sound.
238	MUSIC SHIFT	STEREO SHIFT	This stereo, pitch shift program is optimized for shifting input program material.
239	PITCH QUANTIZE	DIATONIC SHIFT	This program quantizes the input to the nearest chromatic interval.
240	RANDOM GATE	ULTRA-TAP	Great for drums. A 'gated reverb' sound created with the ULTRA-TAP program.
241	REVERSE GATE	ULTRA-TAP	Another standard, drum reverb.
242	RICH CHORUS	SWEPT COMBS	This program uses six delay lines to create a useful chorus effect. Try increasing 'm delay' to get a subtler but more realistic effect.
243	RICH PLATE	SWEPT REVERB	A slight sweep in this reverb gives it a rich sound and a smooth tail.
244	ROCK 'N' ROLL	LAYERED SHIFT	This one's a bit different. Capture an audio loop by pressing the 'sustain' parameter. Play a note on a MIDI keyboard to hear the loop. Moving the Mod Wheel will alter the loop points (a bit like rocking tape reels). Playing different notes will change the pitch of the loop.
245	SCARY MOVIE	REVERSE SHIFT	This program uses REVERSE SHIFT to create an evil-sounding voice. Use with guitar to create that tape splice, psychedelic sound.
246	SHIMMERISH	SWEPT REVERB	A recirculating delay effect that fades into a smooth reverb.
247	SLAP/MICROPITCH	DUAL SHIFT	The left channel is processed with a slap delay. The right channel is processed with a micro-shift.
248	SMALL ROOM	REVERB FACTORY	A small-room reverb.
249	SPACE FLANGE	SWEPT REVERB	This program is a cross between a digital delay, a reverb and a flanger.
250	SWEEP RIGHT	ULTRA-TAP	This ULTRA-TAP program sweeps the taps across the stereo field.
251	THICK LOOP	SWEPT REVERB	A repeating delay that fades into a reverb sound.
252	THIRD & FIFTH	DIATONIC SHIFT	Generates an 'in-key' third and fifth above the input.
253	THIRD & OCTAVE	DIATONIC SHIFT	This generates a diatonic third above and an octave below the input.
254	TONAL ROOM	SWEPT REVERB	With pitched inputs, this reverb will actually generate many other tones. On drums, this is one of the biggest sounds you can get.
255	TWELVE STRING	LAYERED SHIFT	Using a micro-pitch shift and an octave shift this generates a great twelve-string sound. Wonderful for guitar.
256	VOICE SHIFT	STEREO SHIFT	This STEREO SHIFT program is optimized for pitch shifting program material whose main content is spoken voice.
257	WARM HALL	REVERB FACTORY	Our basic, reverb sound.
259	SymphonicChorus	SWEPT COMBS	Rich, multi-voice chorus.
260	SYNTHISH ON YOU	DUAL SHIFT	Sci-fi, ring-modulating thickener with added pitches above and below.
261	THRAX-VERB	REVERB FACTORY	Nice, full, medium reverb.
262	TWIRLING ROOM	SWEPT REVERB	Twirling-room reverb.
263	UnderwaterDelay	PATCH FACTORY	Gurgling and bubbling, these delays are something new.
264	UNREAL 12 STRNG	PATCH FACTORY	Adds processed, 12-stringy thickness to guitars.
265	USEFUL VERB	REVERB FACTORY	Bright and generic, medium-large verb. Quite roomy.
266	MODULATOR-VERB	MULTI-SHIFT	Unique ring-modulaty, yet reverb-like effect.
267	OCTAVE ECHOES	MULTI-SHIFT	Nice, subtle doubling with octave thrown into a delay.
268	PanPitchDlyVerb	MULTI-SHIFT	Shifted ambience, with a fourth above and a fifth below.
269	PanOctavDlyVerb	MULTI-SHIFT	Gently sweeping ambience with octave harmonic.
270	SkilScale	DIATONIC SHIFT	An example of a user-scale mapping one input note to a wild set of nonlinear, output notes.
271	3 OCTAVES UP	MULTI-SHIFT	Two Harmonizer effects processors, both set to 3 octaves up. Great on top four guitar strings.
272	LO & BEHOLD	REVERSE SHIFT	Octaves up and down, reversed ,then re-reversed.
273	ABOUT YOU VIBD	MOD FACTORY 	Smooth vibrato with panning.
274	CHORWASHdual	MOD FACTORY 	Long delays with thickener that cut their feedback with next input signal, cleaning up the wash of delays.
275	MY BLOODY VAL	REVERSE SHIFT	Evil, reversed and down shifted delays. Perfect for that scary, solo sound.
276	DRY CHORUS	MULTI-SHIFT	Subtle, chorus sound, tweaked for guitar.
277	MILD CHORSDELAY	MULTI-SHIFT	Self descriptive.
278	FLUTTEROUS ROOM	STEREO SHIFT	Warbly, bathroom-like ambience. Thickens with micro-shifting quite a bit.
279	WATERY CHORUS	LAYERED SHIFT	Name says it all.
280	DRUNK ROOM	REVERSE SHIFT	Unusual small-room ambience, built from reversed and slightly shifted delays.
281	HARMONY ROOM 2	LAYERED SHIFT	Cool, fifthy ambience.
282	MARKS MED DARK	REVERB FACTORY	This is a medium-small, dark room.
283	LG GUITAR ROOM	REVERB FACTORY	A large room, suitable for guitar.
284	LONG LEAD PING	MOD FACTORY	Ducking, ping-pong delay that goes from side to side.
286	PANDELAY250/125	LAYERED SHIFT	Tight left and right delays with mix control for easy, live performance adjustment.
287	GIANT 3D DELAYS	ULTRA-TAP	Wide complex delays. Use delay to shorten.
288	3D DELAY LEFT	MOD FACTORY	Delay with off-the-speaker left image.
289	GHOST 3D DELAY	ULTRA-TAP	Spinning delays, randomly moving in space.
290	INSIDE OUT 3D	ULTRA-TAP	Delays moving ever outward from center.
291	3D DUCKY DELAYS	MOD FACTORY	Cave-like delays way off the left speaker.
292	3D DUAL DUCK DLY	MOD FACTORY	Another Eventide first - 3D Ducking taps.
293	3D HAAS PAN	MOD FACTORY	A manual-close delay manipulation w/ pan.
294	FAR LEFT	MOD FACTORY	Dry processing to pan input off left speaker.
295	FAR RIGHT	MOD FACTORY	Ditto.
296	PRISTINE CLEAN$	STRING MODELER	Unusual chorus effect with wide 3D image.
297	SHIFT FAR LEFT	PATCH FACTORY	3D micro-shifter on far left.
298	SHIFT FAR RIGHT	PATCH FACTORY	3D micro-shifter on far right.
300	AIRPORT PAGE	PATCH FACTORY	This program simulates a large paging system: (size) sets room size, (echo lvl) sets the amount of echo mixed into effect, (pitch) controls overall pitch effect, (mix) wet/dry effect mix.
301	ALVIN	LAYERED SHIFT	An easy way to get that familiar chipmunk sound: (munkness) controls chipmunk pitch.
302	AUTO-MAX	STUTTER	Automatically generates st-st-STUTTERs and sweeps: (rate) controls how often STUTTERs or sweeps occur.
303	AUTOPANNER	SWEPT COMBS	Produces automatic stereo: (left<->right) is panning, (delay) controls delay of panned signal, (feedback) increase for repeated panning echoes, (pan rate) sets speed of panning.
304	AVANT-GARDE	REVERSE SHIFT	Produces a unique, reverse pitch shifted effect: (pitch) controls amount of pitch shift, (length) controls reverse splice length, (mix) wet/dry effect mix.
305	BACKWARDS	REVERSE SHIFT	Turns the input around in one-second chunks: (length) controls length of reversed segments, (feedback) feeds back reversed output, (pitch) sets pitch of reversed signal, (mix) wet/dry effect mix.
306	BRIGHT ROOM	REVERB FACTORY	A short, bright reverb: (size) controls room size, (distance) controls reverb predelay, (mix) wet/dry effect mix.
307	CANNONS	REVERSE SHIFT	Great on drums.
308	CANYON	REVERB FACTORY	Our biggest reverb sound, like an echoing canyon: (size) controls decay time of reverb; (predelay) sets predelay, in milliseconds; (mix) wet/dry effect mix.
309	CAVE ECHO	DUAL DIGIPLEX	A cave-like, long echo: (size) controls length of echo, (liveness) controls feedback on echo, (mix) wet/dry effect mix.
310	CB	PATCH FACTORY	Simulates CB radio sound, with two different voices and mike keying noise: (mike) triggers mike noise and changes pitch of speaker.
311	CHORUS	SWEPT COMBS	This program produces a swishy, chorus effect: (depth) sets depth of delay sweep, (rate) sets rate of delay sweep, (feedback) increase to get a more resonant sound, (mix) wet/dry effect mix.
312	CIRCLES	ULTRA-TAP	Try clapping into it. Many delays are panned to get a circular sweep.
313	CUZZIN IT	REVERSE SHIFT	Talk into this one. It might not be intelligible but it will be funny: (depth) increase to make voice lower in pitch, (speed) makes output 'splice' faster.
314	CYLONS	SWEPT COMBS	Creates a monotone, resonant voice sound: (resonate) makes resonance more intense, (tone) changes the pitch of the resonance.
315	DRAGWAY AD	PATCH FACTORY	Use this to create those clich_'d racecourse ads: (pitch) controls pitch of voice, (delay) controls amount of delay in echo, (echo) controls amount of echo in output mix, (feedback) controls amount of feedback.
316	FADE TO DREAM	LAYERED SHIFT	This effect produces a fade to a dream-like sound: (fade) triggers the fade, pressing again will fade back to dry; (faderate) increase to make the fade faster; (mix) wet/dry effect mix.
317	FLANGER	SWEPT COMBS	Increase delay to produce flanging effect: (depth) depth of delay sweep, (rate) rate of delay sweep, (feedback) increase for resonant effect, (mix) wet/dry effect mix.
318	FLYING SAUCERS	PATCH FACTORY	Adds downward, sweeping pitch to input signal: (length) controls decay time of effect, (mix) wet/dry effect mix.
319	GREGORIAN CHANT	PATCH FACTORY	This program filters and pitch shifts input voices to produce a chorus of droning monks.
320	GREMLINS	LAYERED SHIFT	This program randomly varies pitches and delays to produce interesting, unintelligible voices: (speed) controls how fast delay and pitch are changed, (amount) decrease to get less delay and pitch change.
321	HELLVERB	PATCH FACTORY	An eerie, reverb-like sound. Play with the controls!: (tone) makes reverb darker or brighter, (delay) sets amount of delay in feedback loop, (feedback) controls reverb decay, (pitch) controls pitch sweep.
322	JAVA THE HUN	LAYERED SHIFT	This sounds like the insidious voice of a famous movie character: (deepness) will lower the pitch of the voice.
323	LOCKER ROOM	REVERB FACTORY	This reverb program sounds like a concrete room: (size) controls the reverb decay time, (predelay) use this to add distance to the reverb, (mix) wet/dry effect mix.
324	LOWPASS FILTERS	PATCH FACTORY	Two lowpass filters connected in series process the audio. Use cutoff 1 and 2 to control the rolloff frequencies. Use Q factor 1 and 2 to control the resonance of the filters.
325	MAGIC	LAYERED SHIFT	Whistle into the mic.
326	MANY PITCHES	SWEPT COMBS	Use this effect to produce a cacophony of different pitched voices: (freq) lowering this slows the pitch modulation, (amount) this will increase the pitch variation, (mix) wet/dry effect mix.
327	MARTIANS	LAYERED SHIFT	The planet is surrounded! Surrender, earthlings!: (pitch) makes the voice higher in pitch.
328	MEGAPHONE	PATCH FACTORY	This produces the effect of speaking through a megaphone: (echo) increasing this mixes in an echo, (distance) controls the delay time of the echo, (macho) turning this up lowers the voice pitch, (mix) wet/dry effect mix.
329	MORE ALIENS	REVERSE SHIFT	This produces a rough, monotone, alien voice: (pitch) sets the pitch of the voice, (splice) controls the 'splice' rate, (mix) wet/dry effect mix.
330	NEW HOUSE	SWEPT COMBS	Use this to get that metallic sound of an empty, reflective room: (size) use this to make the room bigger or smaller; (liveness) to make the room deader, lower this.
331	OKSY ELEVEN	TIMESQUEEZE	Get that deep, smooth, announcer voice with this: (deepness) adjusts the voice pitch.
332	PLANET ZORGON	REVERSE SHIFT	Use this to get an unintelligibly deep, space voice: (pitch) controls the voice pitch, (speed) controls 'splice' rate.
333	PSYCHO-PANNER	SWEPT COMBS	This program swirls the input in pitch, pan and delay: Wild! (range) controls the range of delay and pitch sweep, (feedback) lower this to reduce the decay time, (pan rate) controls the panning and sweep speed, (mix) wet/dry effect mix.
334	RANDOM SHIFT	LAYERED SHIFT	This program changes the pitch randomly, great for spreading sounds in stereo: (depth) controls the amount of random pitch shift, (rate) controls speed of pitch modulation, (mix) wet/dry effect mix.
335	SHAKY	LAYERED SHIFT	If you were standing on a paint shaker, your voice might sound like this: (amount) use this to increase the pitch modulation, (rate) controls the rate of pitch modulation. On Golden Pond, to boot!
336	SHIMMERISH	SWEPT REVERB	This reverb starts out discrete and ends with a smooth tail: (length) controls the delay lengths, (decay) controls reverb decay time, (warble) use this to add a sweep to the reverb, (mix) wet/dry effect mix.
337	SIMPLE DELAY	LONG DIGIPLEX	Here is a basic delay, with control over delay, feedback, mix and a repeat control.
338	SISSY	LAYERED SHIFT	This program turns a he-man into a 90-pound wimp: (% sissy) controls the voice pitch.
339	SMALL ROOM	REVERB FACTORY	This is a small-room reverb: (size) controls reverb decay time, (mix) wet/dry effect mix.
340	SPACE FLANGE	SWEPT REVERB	Use this to get a thick-loop delay with a flange: (delay) controls loop delay time, (depth) controls depth of delay sweep, (rate) controls delay sweep rate, (feedback) use this to control loop feedback.
341	STADIUM	PATCH FACTORY	This program simulates the low-fidelity PA system of a sports arena: (pitch) changes the pitch of the announcer's voice, (size) increase or decrease arena size, (echo 1) controls level of first echo, (echo 2) controls level of second echo.
342	STEAM BATH	PATCH FACTORY	This recreates the sound of a steam bath, including the steam: (size) adjusts the steam bath size, (echo) controls the level of the echo, (steam) controls the level of the steam hiss, (mix) wet/dry effect mix.
343	ST PETERS CATH	REVERB FACTORY	This is a large, reverb sound, like a cathedral: (size) controls reverb decay time, (pew) controls apparent distance from front of room.
344	STUTTER	STUTTER	Use this for that popular STUTTER sound: (stut) will trigger the STUTTER, (speed) controls the speed of the STUTTER, (count) controls how many STUTTERs occur, (pitch) controls the pitch of the voice.
345	STUTTER DOWN	STUTTER	This works just like the 'STUTTER' program, but the pitch will sweep down with the STUTTER effect.
346	STUTTER DUAL	STUTTER	This program allows two different STUTTER speeds to be set up and triggered: (STUTTER1) triggers a STUTTER using 'speed 1'; (speed 1) controls the speed of STUTTER 1, ditto for STUTTER 2.
347	STUTTERRANDOM	STUTTER	This program generates various random STUTTERs: (stut) triggers a random STUTTER; (up) triggers a STUTTER with pitch sweep up; (down) triggers a STUTTER with pitch sweep down; (updown) STUTTER and sweep up left, down right.
348	STUTTER UP	STUTTER	This program works like the 'STUTTER' program, except the pitch will sweep up with the STUTTER.
349	STUTTER UP/DOWN	STUTTER	This also works like the 'STUTTER Dual' program, but with one side sweeping up and the other down.
350	SWEEP RIGHT	ULTRA-TAP	Using multiple delays, this sweeps to the right: (delay) controls length of sweep, (feedback) use this to echo the sweep, (mix) wet/dry effect.
351	SWEET FLANGE	LAYERED SHIFT	Use this program for a smooth, subtle flange sound: (amount) controls depth of delay sweep, (freq) controls sweep rate, (feedback) use this to add resonance, (mix) wet/dry effect mix.
352	TELEPHONE	PATCH FACTORY	This imitates the sound quality of a telephone: (distance) simulates long distance by adding echoes, (noise) adds noise to voice for realism, (pitch) changes pitch of voice.
353	THREE OF ME	DUAL SHIFT	This program randomizes the input delay to simulate three voices: (detune) controls the amount of pitch shift, (sweep) adjusts the amount of delay modulation, (feedback) controls the amount of feedback, (mix) wet/dry effect mix.
354	THREE ON TWO	DUAL DIGIPLEX	The delays in this program are set such that the familiar three against two rhythm is produced: (feedback) controls the amount of feedback, (mix) wet/dry effect mix.
355	TIME WARP	DUAL SHIFT	Speeds up and slows down whatever goes in. Try counting to ten while listening to the output: (speed) controls rate of time warp, (amount) controls amount of delay variation, (pitch) controls pitch of output, (feedback) use this to generate warped echoes.
356	TONAL ROOM	SWEPT REVERB	This program is a unique, pitched reverb. This is great for percussive sounds. 
357	TRAFFIC REPORT	PATCH FACTORY	This sounds like a person sitting in a traffic helicopter. Also generates the CB voice sound: (speed) controls the chopper rotor speed, (nearness) controls the voice/chopper noise.
358	TV IN NEXT ROOM	PATCH FACTORY	Using filtering and delays, this program simulates that TV or radio in the next room: (tinniness) increase this to make the sound tinnier, (muffle) increase this to make the sound muffled, (delay 1) controls the length of the first echo.
359	UNDERWATER	PATCH FACTORY	This is a pretty good simulation of dunking your head under water and speaking: (depth) controls the intensity of the effect, (speed) increase this to get more.
360	WAH WAH	PATCH FACTORY	This sounds like an automatic wah-wah pedal: (amount) controls the depth of the sweep, (speed) controls the wah-wah rate.
361	WARM HALL	REVERB FACTORY	This is a nice, medium-length reverb program: (size) controls the reverb decay time, (predelay) simulates distance from the source, (mix) wet/dry effect mix.
362	WARPED 45	STEREO SHIFT	This can ruin even the best records: (warpness) controls the amount of pitch variation.
363	WARPED LP	STEREO SHIFT	This is the same as Warped 45, but slower.
366	1/2SEC GATORVRB	REVERB FACTORY	1/2-second delayed, 1/2-second gated verb.
367	ACIDREIGN	REVERSE SHIFT	Detuned reversed slices.
368	ACCURATE ROOM	DENSE ROOM	Nuff said.
369	AMBIENT BOOTH	DENSE ROOM	Small, bathroom-sized booth reverb.
370	ATLANTIS	REVERSE SHIFT	Backwards, swelling delays.
371	BASS SPACE	DENSE ROOM	Bathroom with lots of rugs and towels.
372	BriteBrassPlate	REVERB FACTORY	Twangy plate, good on dark brass.
373	DAVES SPIN	MOD FACTORY	An improved spinning-speaker-cabinet simulator.
374	CABO BOING	SWEPT COMBS	Gurgling-sounding chorus.
375	CHORUS SLOW	SWEPT COMBS	Subtle, chorus effect.
376	CLOSENCOUNTERS	STRING MODELER	Mystic bell resonance. Try on anything.
377	CLOSE MIKED	REVERB FACTORY	Small, tiled bathroom.
378	COMB SPACE 1	REVERB FACTORY	Resonant, small space.
379	COMPRESSED AIR	DENSE ROOM	Compressed, close-miked sound.
380	CRYSTALESQUE	MULTI-SHIFT	Micropitch thickener with some tight, bathroomy delays.
381	DOUBLE SPACE	DENSE ROOM	Small, slap-room delay.
382	DENSE HALL 2	DENSE ROOM	Large, dense hall.
383	DELAY W/ ROOM	DENSE ROOM	Half-second delayed room.
384	VERBY CHORUS	SWEPT REVERB	Great reverb and chorus combo.
385	DRAGON BREATH	SWEPT REVERB	Tight, ambient delays. Try on guitar.
386	DrewzNooRoom	DENSE ROOM	Small, cozy reverb.
387	DRUM AMBIENCE	DENSE ROOM	Small, tight room.
388	FLASHBACK	STUTTER	Psychotic ,sweeping delay.
389	SORE THROAT	SWEPT COMBS	Gargling-sounding ambience.
390	GATED FENCE	REVERB FACTORY	Nice, gated verb for drums.
391	GATED ROOM 2	REVERB FACTORY	Twangy, gated room.
392	GENERIC HALL	ULTRA-TAP	High School Gym sound.
393	GREAT DRUMSPACE	REVERB FACTORY	Another small, rehearsel room.
394	5SEC HANG VERB	REVERB FACTORY	Gated verb with 5-second hang time.
395	HUGE DENSE HALL	DENSE ROOM	Dense, arena-like verb.
396	HUGE SYNTHSPACE	DENSE ROOM	Self-descriptive.
397	ACID REIGN	REVERSE SHIFT	Reversed delays. Very psychedelic.
398	KALEIDOSCOPEYES	SWEPT REVERB	Flangy, swirling delays.
399	FAN WHIPPER	MULTI-SHIFT	Sounds like sound through slow fan.
400	A 440	PATCH FACTORY	This program generates a 440 Hertz sine wave output: (level) controls the sine wave output level, (freq) use this to adjust the output frequency.
401	ALERT	PATCH FACTORY	This program produces a harsh alarm sound: (rate) controls the alarm sweep rate, (tone) controls the tone of the sound.
402	BOINGY BUZZ	PATCH FACTORY	A dramatic bass swell is produced when this program is triggered: (pluck) triggers the effect, (detune) use this to detune the left output pitch, (tone) makes the sound smoother or harsher, (tune) adjusts the overall tuning of the sound.
403	DOORBELL	PATCH FACTORY	This program generates a familiar doorbell sound when triggered: (ring) will ring the doorbell, (tone) adjusts the tone of the doorbell, (tune) controls the pitch of the doorbell.
404	JET	PATCH FACTORY	Look out! A 747 is passing through your control room!: (fly by) triggers the jet sound, (speed) controls the speed of the jet approach, (rumble) controls the amount of bass rumble, (whine) controls the amount of jet whine.
405	JETTISON	PATCH FACTORY	Similar to "Jet," this sound is reminiscent of rocket stages being jettisoned, or perhaps a spaceship blasting off: (jettison) will trigger the effect, (speed) controls the speed of the jettison sound, (whine) controls the amount of high-pitched whine.
406	LASER ECHO	PATCH FACTORY	Use this to destroy those enemy invaders. This one sounds like a sci-fi movie or a video game noise: (fire) triggers the laser blast, (sweep) adjusts the pitch sweep of the sound, (feedback) controls the decay of the sound, (tune) controls the basic pitch.
407	PLUCK	PATCH FACTORY	This effect is a convincing simulation of a string being plucked, in stereo: (pluck) press this to pluck the string, (detune) controls the pitch of the left output, (tone) increase for harsher string sound, (tune) controls the pitch of the string.
408	SIREN	PATCH FACTORY	If a siren is what you need, here's where to look: (rate) controls the rate of the siren sweep, (range) controls the range of the pitch sweep.
409	SONAR	PATCH FACTORY	This simulates the sound of a submarine's sonar echo: (ping) triggers the sonar sound.
410	STEREO COPTER	PATCH FACTORY	Use this if you need an easy helicopter sound: (speed) controls the helicopter rotor speed.
411	TANK ATTACK	PATCH FACTORY	This program sounds like an arcade tank game: (fire) will fire the tank when pressed, (rumble) controls the bass rumble of the explosion.
412	THUNDER	PATCH FACTORY	Try our thunderbolt: (bolt) triggers the thunder effect.
413	UFO	PATCH FACTORY	This is our version of a spaceship taking off and landing: (take off) will make the spaceship take off. Press again to make it land.
414	WAVE	PATCH FACTORY	This sounds like a single, ocean wave: (waveit) triggers the wave sound.
415	WIND STORM	PATCH FACTORY	Put your parka on before loading. Here is our howling Arctic wind: (gales) controls the intensity of the storm, (mix) allows a voice to be mixed over the wind.
416	BOB C'S PHASER	PHASER	PHASER tweaked by Mr. Clearmountain himself.
417	DEEPENED CLAPS	ULTRA-TAP	Swelling, fat delay, good on percussives.
418	SPACE FLANGE BC	SWEPT REVERB	Customized preset with flangy, panning delays.
419	STEREO W FLANGE	SWEPT COMBS	Widens your stereo image with flangy things.
420	SWEPT PANNER	SWEPT COMBS	Has LFO tied to width. 
421	TITE STEREO DLY	STEREO SHIFT	Real, tite-locked delays.
422	TITE STEREO CUE	MULTI-SHIFT	Tight, unlocked delays.
423	VOC DOUBLER BC	MULTI-SHIFT	A voice thickener with a moving pitch.
425	2 MULTI EFFECTs	MULTI-SHIFT	Two independent shifters with panning, semi-equivalent to two H949s.
426	AMBIENT SLAP	ULTRA-TAP	Quick slap with an element of reverb.
427	BALLAD SNARE	DENSE ROOM	A good verb for slow tunes. Has a long predelay.
428	BOOGALOO	PATCH FACTORY	A jungle-sounding patch, try on toms.
429	CASTANET PSYCHO	BAND DELAY	Rhythmic, resonant delays.
430	CLACK	PATCH FACTORY	Adds a clacky noise.
431	CRACK O'SNARE	PATCH FACTORY	One of several presets good for snare processing.
432	DARK CELLAR	REVERB FACTORY	Good for growing mushrooms.
433	DAVE'S PLATE	SWEPT REVERB	Plate-type reverb w/ a little chorusing.
434	DITH VERB	REVERB FACTORY	Unusual, warm and thick verb.
435	DRUM WHEEZE	PATCH FACTORY	Funny wheeze for something a little different.
436	DRUNKIT	SWEPT REVERB	Too much tequila the night before.
437	DUAL FLAT FIXER	MULTI-SHIFT	Correct the 'out-of-tuneness' of two vocalists at the same time. The knob will control Ch 1's pitch, and a pitch bend wheel will control Ch 2's. A sequencer will store your pitch changes if you record them to it.
438	DUAL TOM SHIFT	DUAL SHIFT	'NUFF SAID!
439	DUCK VERB	REVERB FACTORY	Reverb will 'duck' slightly while a signal is present.
440	EMPTY WATER TANKS	REVERB FACTORY	Sounds like the inside of one of those water towers.
441	FALLING FLANGE	PATCH FACTORY	Use 'P DELAY' to change repeat interval.
442	FAT FLAM	LAYERED SHIFT	Tight delays to widen drum strokes.
443	FineYoung Snare	PATCH FACTORY	Pretty, poppy processing.
444	FIXT PITCH TOMS	DIATONIC SHIFT	Interesting tom thickener.
445	FUNKshunTAPS	ULTRA-TAP	Discrete, reverb-like delays sweeping right to left.
446	GATED KIK	REVERB FACTORY	This is a gated, bass drum reverb.
447	GATED SNARE	REVERB FACTORY	Guess what this is?
448	GRIF RANDOM	DUAL SHIFT	A great thickener reminiscent of H949 random.
449	H949 REV 3	PATCH FACTORY	Basic configuration and sound of H949.
450	HAT ROOM	SWEPT REVERB	Check your hi-hat in here.
451	HI HAT BREATH	SWEPT REVERB	Makes hat a little more ambient.
452	HI HAT DELAY	PATCH FACTORY	EQ'd delays for hat.
453	ITCHY COO TOM	SWEPT REVERB	Try it on toms. By the way, do you remember the song?
454	JOE'S GATE	REVERB FACTORY	A nice, gated reverb. Thanks Joe!
455	JUNGLE 7	BAND DELAY	Adds jungle rhythms in 7/8.
456	KERR VERB	REVERB FACTORY	Medium-dark, gated verb.
457	KIT FLANGER	SWEPT REVERB	Neato, overall kit flanger.
458	LEXY ROOM	REVERB FACTORY	Bright-sounding room with white tail.
459	LITE ROOM	REVERB FACTORY	Sounds great, less filling.
460	LONG ROOM	DENSE ROOM	Long Verb.
461	LO PROCESSOR	SWEPT REVERB	Adds low percussive ambience to anything.
462	MIDI GATE VERB	REVERB FACTORY	Use keyboard controller to change parameters. Sustain pedal is tied to gate and Mod Wheel is tied to decay.
463	MIDI SWEPT VERB	SWEPT REVERB	Size is tied to pitch wheel and the sweep is tied to modulation wheel.
464	OCTAVE DOWNERs	DIATONIC SHIFT	Both channels take the drums down an octave.
465	One And Ah 16th	ULTRA-TAP	Gives you great 16th note subdivisions ('one-and-ah' as Lawrence Welk used to say).
466	One Car Garage	REVERB FACTORY	Small, tight reverb like a one-car garage.
467	One Ee And Ah	ULTRA-TAP	One ee and ah sixteenth note subdivisions.
468	One Ee Ah 16ths	ULTRA-TAP	One Ee Ah (16ths).
469	PERC WAH WAH	PATCH FACTORY	And now, wah-wah for drums!
470	PHONERING DELAY	ULTRA-TAP	Delays timed to sound like an old, phone-ring effect.
471	ROOM 90x40x15	ULTRA-TAP	Simulates discrete style reverb of small room with mentioned
472	ROCK ROOM	DENSE ROOM	Power verb.
473	SEXTUPLETS A	ULTRA-TAP	Variation of above.
474	SEXTUPLETS	ULTRA-TAP	This is, well, sextuplet delays.
475	SEWER VERB	PATCH FACTORY	Foul , liquid-sounding reverb.
476	SHORT ROOM	REVERB FACTORY	A small reverb (four-car garage?).
477	SIMMONIZE	PATCH FACTORY	See (#476).
478	SMALL TILED RM	REVERB FACTORY	The sound of Ivana's bathroom.
479	SON OF BIGSNARE	DENSE ROOM	Remember Big Snare (#576)?
480	STEREO TOM DLAY	MULTI-SHIFT	Delays that will follow the panning of the inputs.
481	SWEEP 8	BAND DELAY	Pitched and timed delays.
482	THICK RICK	SWEPT REVERB	Thickening, sweeping ambience.
483	TILED HAT ROOM	REVERB FACTORY	This is a very large bathroom.
484	TImBrAl bRooM	PATCH FACTORY	Wah-wahing ambience.
485	TIMID VERB	SWEPT REVERB	Subtle reverb/flanger.
486	TINY WAREHOUSE	DENSE ROOM	This is the reverb of a small Hoboken, N.J. sock outlet factory.
487	TOMBALLS	REVERB FACTORY	Good on toms.
488	TOM SWEEP	BAND DELAY	Pitched delays for toms.
489	TRASHY DRUMS	SWEPT REVERB	Want a really gritty drum sound? Load this one.
490	TWINKIE SHIFT	MULTI-SHIFT	Adds adorable, higher octaves.
491	Two Warm Delays	PATCH FACTORY	These are so useful to add ambience without "swishing" around.
492	WARP 2	SWEPT REVERB	Kind of a seasick preset. Warps pitch of input.
493	WORD UP	LAYERED SHIFT	Noise effect for snare or percussion.
496	MOON TURN TIDES	MOD FACTORY	Long delay that falls in pitch and time signal is removed.
497	SMOOTH DELAYS	MOD FACTORY	Slow, attacking delays with a lil' ducking.
498	GIGUNDO CHORUS	MOD FACTORY	Use on vocal chorus to enlarge and thicken.
499	KAMIKAZE DELAYS	MOD FACTORY	New, distorted delays that dive with signal.
500	ADSR FILTER	PHASER	When the sound into the H3500  goes over a threshold, a sweeping, 'wah'-like, filter effect is triggered.
501	ADSR PHASER	PHASER	Like above, the input audio level will trigger a sweeping, PHASER effect.
502	ANALOG THICK	PATCH FACTORY	A warm, chorused, echo sound. Two adjustable, lowpass filters provide the warmness.
503	BASS CHORUS	MULTI-SHIFT	Specifically tailored for bass, this is a simple, micro-pitched chorus.
504	BUENOS NOTCHES	PHASER	Pleasant, sweeping notches will result when this effect is mixed with the dry audio.
505	DEATH FLANGE	SWEPT REVERB	A deep, intense flange that's great for thickening up a synthesized bass line.
506	DIGDLY & MICRO	MULTI-SHIFT	Dual digital delays with micro-shift on the outputs. A nice sounding setup useful for thickening up a synthesized bass line.
507	DGDLY+WAH+MICRO	PATCH FACTORY	This is an unusual combination of a digital delay, a cycling 'wah- wah' filter, and a micro-pitch shift.
508	DUAL H910 MICRO	MULTI-SHIFT	This program is designed to function like two Eventide H910 Harmonizer effects processors. The glitching you hear is intentional. This is a true dual program, where both left and right channels are processed separately.
509	ENVELOPE FILTER	PHASER	This program consists of a resonant filter that sweeps as the input level changes. Try experimenting with the envelope-rate parameter.
510	ENVELOPE PHASER	PHASER	Here, a PHASER sweep follows the input signal level.
511	FLANGE & REVERB'	SWEPT COMBS	This is a reverb with a subtle, flanging effect.
512	FLANGER	SWEPT COMBS	This is a basic, stereo flanger. For the best effect, mix the H3500 output with the dry signal.
513	INSTANT PHASER	PHASER	A straightforward, sweeping PHASER, in memory of our famous product.
514	JUST STEREO	MULTI-SHIFT	A very subtle, micro-pitch shift. Just enough to add a presence to an otherwise flat, mono sound.
515	MAGIC AIR	MULTI-SHIFT	This has two upward micro-shifts and two delays in a tight, ambient formation. Use to liven and slightly raise flat vocals or to generally thicken sources.
516	MANY REFLECTIONS	MULTI-SHIFT	Numbers of micro-pitched echoes slowly decaying upwards. Good, chorused, echo effect.
517	MICRO + DRYSLAP	MULTI-SHIFT	A general-purpose thickener with some delay with feedback.
518	MICRO + REVERB	MULTI-SHIFT	Includes a micro-shift and a quasi-reverb set of delays with feedback.
519	MICROPITCHSHIFT	MULTI-SHIFT	This is the perfect effect to fatten up or widen a sound without adding any color.
520	MICRO-REVERB	MULTI-SHIFT	Similar to above but much less discrete, with tighter delays.
521	MICROPITCH-SLAP	MULTI-SHIFT	The left channel is micro-shifted and the right is a slap delay with micro-shift. Great for guitar.
522	MULTI-DLYEFFECT	SWEPT COMBS	All kinds of subtle things going on here. Delays, echoes, flanging, chorusing.
523	MULTI-FLANGE	SWEPT COMBS	With six delays being swept at once, this program creates a very thick, flange sound.
524	QUADRUPLER	MULTI-SHIFT	Provides a dense, panned stereo field with two sweeping shifters and two delays. Denser than Voice Doubler (572) but similar in effect.
525	RANDOM FLANGE	MULTI-SHIFT	Another doubling effect with random, moving, micro-pitch shifts.
526	RESONANT SWEEP	PHASER	A medium-speed, resonant PHASER.
527	RICH CHORUS	SWEPT COMBS	This program uses six delay lines to create a useful chorus effect. Try increasing (m delay) to get a subtler but more realistic effect.
528	REAL CHORUS	MULTI-SHIFT	A convincing doubling effect. Pretty smooth.
529	SPACE FLANGE	SWEPT REVERB	This program is like a digital delay, a reverb and a flanger all rolled into one.
530	TREMOLO DELAY	MULTI-SHIFT	A long delay whose pitch warbles, creating a thick atmospheric effect. Use on guitar sound effects.
531	TWO THICKENERS	MULTI-SHIFT	Two independent effects, each made up of a delay with pitch shift, and a discrete delay.
532	ULTRA-THICK	MULTI-SHIFT	General thickener with a nice, stereo image.
533	VOICE DOUBLER	LAYERED SHIFT	Sweeps two pitch shifters in opposite directions giving a convincing doubling effect.
534	WATERY FLANGE	SWEPT COMBS	Just as the name suggests.
535	ANALOG DELAYS	PATCH FACTORY	Warm echoes provided by lowpass filters.
536	BUILD-A-SHIMMER	ULTRA-TAP	Eerie echoes that fade in and fade out.
537	CIRCLES	ULTRA-TAP	A stereo delay effect that seems to circle around your head. The effect is most noticeable on short sounds, like handclaps.
538	DIGITAL DELAY	LONG DIGIPLEX	A basic digital delay line, with feedback control.
539	DUAL DELAYS	DUAL DIGIPLEX	Two simple delays. One left, one right.
540	ECHOPLEXINGPONG	DUAL DIGIPLEX	An echo that bounces from one side to another.
541	ECHO RAMP	LONG DIGIPLEX	A manually triggerable program with a delay that sweeps down and up when the trigger key is pressed.
542	FAT SLAP	ULTRA-TAP	A slap delay with an ambient sound.
543	5TH AVE ECHO	ULTRA-TAP	Delays and diffusion are selected to sound a lot like those on a big city street.
544	LONG DELAY	LONG DIGIPLEX	Simple, long delay.
545	MULTI-TAP	ULTRA-TAP	If you own an Eventide SP2016, you'll be familiar with this sound. This preset emulates the SP2016 Multi-Tap program, with a slightly shorter overall.
546	PING PONG BALL	ULTRA-TAP	Another echo that bounces side to side. But, the echo shortens with time.
547	SETTLEDOWN ECHO	BAND DELAY	Echoes that go from bright to warm.
548	SOFT SHORT ECHO	DENSE ROOM	A very smooth, diffuse echo.
549	SPACE ECHO	PATCH FACTORY	Simulates a very popular tape delay from the 70's. Even adds tone controls and tape warble for that thick, analog sound.
550	SUBTLE SWEEP	DUAL SHIFT	Two subtle, sweeping delays. This is ideal for turning mono sources into stereo. Pan original source to one side and its sweeping delay to another.
551	SWEEP RIGHT	ULTRA-TAP	Exponential increasing delays that are panned from left to right. Mono in, stereo out.
552	THICK LOOP	SWEPT REVERB	A repeating delay that fades into a reverb sound.
553	THREE ON TWO	DUAL DIGIPLEX	The delays in this program are set such that the familiar three against two rhythm is produced: (feedback) controls the amount of feedback, (mix) wet/dry effect mix.
554	WIDENING TAPS	ULTRA-TAP	The echoes get longer as time goes on, spreading from the center to the sides of the stereo field.
555	AMBIENCE	ULTRA-TAP	Use this to add ambience without muddying the mix.
556	AMBIENT BOOTH	DENSE ROOM	A short but natural reverberation.
557	BATHROOM	REVERB FACTORY	Lots of highs left in by those ceramic tiles.
558	CHORUS ROOM	SWEPT REVERB	Short reverb with chorus. Nice for instruments but perhaps not with drums.
559	CRASS ROOM	DENSE ROOM	A harsh, hollow reverb reminiscent of those good old school days.
560	DE-BURR	ULTRA-TAP	Takes the edge off of sharp attacks.
561	DREW'S CHAMBER	DENSE ROOM	Medium-short, natural reverb.
562	DRUM AMBIENCE	DENSE ROOM	A soft ambience that just barely livens up otherwise dry sounds.
563	EMPTY CLOSET	SWEPT REVERB	This reverb is very short. You almost can't detect it. Use it for situations where you really don't want to hear a reverb.
564	EMPTY ROOM	SWEPT REVERB	Medium reverb with slight chorus. Sounds nice on regular instruments.
565	MEDIUM SPACE	SWEPT REVERB	Another medium reverb with slight chorus. This has a more natural sound and the chorus is very slight.
566	NEW HOUSE	SWEPT COMBS	Use this to get that metallic sound of an empty, reflective room.
567	PRCSVHORN PLATE	DENSE ROOM	A plate reverb that enhances natural or synthesized horn sounds.
568	REAL ROOM	SWEPT REVERB	Short reverb with a natural airiness.
569	SMALL ROOM	REVERB FACTORY	A small-room reverb.
570	SMLSTEREOSPACE	SWEPT REVERB	Very short ambience with a slight chorus added in order to give it a big, full sound for its short duration.
571	SMALLVOCAL ROOM	DENSE ROOM	Medium-length reverb tailored for vocals.
572	TIGHT ROOM	DENSE ROOM	A short, bright reverb.
573	TIGHT & BRIGHT	DENSE ROOM	Like above but longer and brighter.
574	VOCAL BOOTH	DENSE ROOM	Short, natural reverb with a slight delay.
575	ALIVE CHAMBER	SWEPT REVERB	Large, chorus reverb. A real, full sound.
576	BIG SNARE	REVERB FACTORY	This is a sizzling reverb, somewhat gated with lots of punch for drums.
577	BIG SWEEP	SWEPT REVERB	To really hear the sweep, turn up the master feedback, make some noise and then change the master delay.
578	BOB'S ROOM	DENSE ROOM	A warm, long reverb, useful on lots of sources.
579	BREATHING CANYON	SWEPT REVERB	A very long reverb. Very roomy.
580	BRIGHT ROOM	REVERB FACTORY	A short, bright reverb.
581	CANYON	REVERB FACTORY	Our biggest reverb sound, like an echoing canyon.
582	CONCERT HALL	DENSE ROOM	A big hall with a lot of predelay.
583	DARK ROOM	DENSE ROOM	Yes, another dark reverb. Sounds like the inside of a big, petroleum tank.
584	DISCRETE-VERB	SWEPT COMBS	A sparse, reverb effect.
585	NORTHWEST HALL	DENSE ROOM	Very similar to Concert Hall except that the reverb is somewhat more discrete.
586	RICH PLATE	SWEPT REVERB	A slight sweep in this reverb gives it a rich sound and a smooth tail.
587	SLAPVERB	DENSE ROOM	A short delay and then a bright, long reverb.
588	SMOOTH PLATE	DENSE ROOM	Airy and smooth.
589	WARM HALL	REVERB FACTORY	Our basic reverb sound.
590	BACKWARD REVERB	MULTI-SHIFT	A quasi-reverb made up of little, backward bits of the input. One of a kind.
591	ECHO-VERB	DENSE ROOM	A discrete, echo-like reverb.
592	EXPLODING 'VERB	REVERB FACTORY	This sounds like a reverb, until the input level goes above the gate threshold. Once triggered, the reverb sound grows explosively.
593	GATED REVERB	REVERB FACTORY	That very familiar drum effect. To change the length of the 'gate' sound, set the gate length parameter.
594	GATED ROOM	REVERB FACTORY	A warm-sounding, gated room best used on one source such as snare drum or toms.
595	GATE ROOM	REVERB FACTORY	Like above but with a more natural decay.
596	HUMP-VERB	ULTRA-TAP	A very unique reverb with a sound not unlike the name.
597	METALVERB	ULTRA-TAP	A metallic set of closely packed delays approaching reverb density.
598	RANDOM GATE	ULTRA-TAP	A 'gated reverb' sound created with the ULTRA-TAP program. Great for drums.
599	RESONANT WORLD	STRING MODELER	This one is different. A long-lasting 'reverb' with bizarre resonances and echoes.
600	REVERSE GATE	ULTRA-TAP	Another standard drum reverb.
601	REVERB RAMP	SWEPT REVERB	A triggerable, sweeping reverb. It sweeps up the first time it is triggered and toggles from then on.
602	SHIMMERISH	SWEPT REVERB	A recirculating delay effect that fades into a smooth reverb.
603	TONAL ROOM	SWEPT REVERB	With pitched inputs, this reverb will actually generate many other tones. On drums, this is one of the biggest sounds you can get.
604	UP/DOWN REVERB	MULTI-SHIFT	User selectable, rising or falling reverb-like effect.
605	A MINOR CHORDS	DIATONIC SHIFT	Play or sing a solo line in A minor. The H3500 will generate two perfect 'in-key' harmonies.
606	ARPEGGIOS	MULTI-SHIFT	Adds a fifth and an octave rhythmically, along with a short delay.
607	BASS SHIFT	MULTI-SHIFT	A doubling effect intended for bass guitar. One channel is shifted up an octave. The other is slightly detuned.
608	DEEPEN	PATCH FACTORY	Adds lower octave harmonics with a pitch shifter sweep.
609	DIATONIC DANCE	DIATONIC SHIFT	You play a note and after half a second, you get a harmony. Use one note at a time, in an effect loop.
610	DUAL SHIFT EASY	DUAL SHIFT	An easy-to-use program featuring two pitch shifters with function knobs set up, with pitch calibrated in semitones (1/2 steps).
611	GLITCH SHIFT	DUAL SHIFT	A 'cheap' sounding pitch shifter. If glitches are what you want, here they are.
612	GREGORIAN SHIFT	PATCH FACTORY	This program filters and pitch shifts input voices to produce a chorus of droning monks.
613	H949	LAYERED SHIFT	This gives you what the H949 gave you. One output is a straight delay while other is pitch shifted. Both outputs are fed back to the input.
614	HAMMER-ON 3RD	DUAL DIGIPLEX	You, too, can play like the flashiest guitarist, without the years of hard work and shredded fingers. Will take one note and arpeggiate it to sound like a familiar two-handed guitar technique.
615	HAMMER-ON 5TH	DUAL DIGIPLEX	Similar to above but different intervals.
616	HARMO-CHORUS	MULTI-SHIFT	A pitch shifter and chorus combined.
617	IN SIX	MULTI-SHIFT	6/8 time is implied in this preset which adds a fourth down, a minor third up, and a minor sixth up.
618	JUST 3RD & 5TH	DIATONIC SHIFT	A 'diatonic' pitch shifter that will generate just-intoned 3rds and 5ths above the input. Make sure to set the key properly.
619	JUST 4TH & 6TH	DIATONIC SHIFT	Generates just-intoned 4ths and 6ths above the input.
620	MUSIC SHIFT	STEREO SHIFT	This stereo, pitch shift program is optimized for shifting input program material.
621	OCTAVE ECHOES	MULTI-SHIFT	Complex delays which are fed back and combined with a radically down-shifted signal.
622	PITCHED ECHO	MULTI-SHIFT	Shows off one aspect of the MULTI-SHIFT algorithm's feedback setup. Long echoes come back shifted but the shorter delays don't.
623	PITCH QUANTIZE	DIATONIC SHIFT	This program quantizes the input to the nearest chromatic interval.
624	SUSPENSE	MULTI-SHIFT	Echoes are shifted to create suspenseful harmonies.
625	THIRD & FIFTH	DIATONIC SHIFT	Generates an 'in-key' third and fifth above the input.
626	THIRD & OCTAVE	DIATONIC SHIFT	This generates a diatonic third above and an octave below the input.
627	TWELVE STRING	MULTI-SHIFT	Provides an octave down and a micro-pitch shift, simulating a twelve-string guitar.
628	VIBRATO	MULTI-SHIFT	Instant vibrato at the press of a button.
629	VOICE SHIFT	STEREO SHIFT	This STEREO SHIFT program is optimized for pitch shifting program material whose main content is spoken voice.
630	ALIENS	REVERSE SHIFT	Transforms voice into a rough, alien-like sound.
631	ANTI-AMBIENCE	REVERSE SHIFT	This is a reverb-like sound created from REVERSE SHIFT. Sounds great on guitar.
632	AUTOPANNER	SWEPT COMBS	Produces automatic stereo (left<->right) panning.
633	AVANTE-GARDE	REVERSE SHIFT	A REVERSE SHIFT effect that generates descending, chromatic lines.
634	BACKWARDS	REVERSE SHIFT	Turns the input around in one-second chunks.
635	BAND PAN	BAND DELAY	Rhythmically, panned and delayed, with its own bandpass filter.
636	BAND SLAP	BAND DELAY	A stereo, slap effect using two bands that are fed back. One band is tuned higher.
637	BANDSWEEPRAND	BAND DELAY	A random-pitched set of bands that are delayed and pass from left to right in the stereo field.
638	BAND SWEEP	BAND DELAY	Upward-sweeping bands passing from left to right.
639	BIZARREMONIZER	LAYERED SHIFT	Generates a bizarre, upward-sweeping pitch shift.
640	CANNONS	REVERSE SHIFT	A unique, sweeping sound that's great on drums. Try playing a tom solo through this.
641	CRITICAL BAND	PATCH FACTORY	A close approximation to Fletcher/Munson bandpass curves. Use to brighten signals or key compressors and gates to frequencies to which our ears are most sensitive.
642	CRYSTAL ECHOES	MULTI-SHIFT	Words fail. A stairway of echoes reaching for heaven.
643	DRUM PROCESSOR	SWEPT REVERB	This very different effect tends to make things that aren't drums sound like drums. Try adjusting the first four parameters for a variety of effects.
644	FILTER PAN	PATCH FACTORY	A filter, sweep effect that seems to pan as it sweeps.
645	FUTURE SHIFT	MULTI-SHIFT	A shimmering, orchestral effect. Try on swelling, monophonic synths or single-line voices.
646	LIQUID REVERB	BAND DELAY	A reverb-like program with BAND DELAYs whose filters sweep downward with increasing delay length.
647	LOWPASS FILTERS	PATCH FACTORY	Two lowpass filters connected in series process the audio. Use cutoff 1 and 2 to control the rolloff frequencies. Use Q factor 1 and 2 to control the resonance of the filters.
648	MAJOR WIND HARP	STRING MODELER	The first in a series of resonant, reverb-like programs. This program acts like sympathetically resonating strings tuned to a major scale.
649	MODULATORS	MULTI-SHIFT	Remember that ring-modulated astronaut sound? Here it is, constructed from a pitch shifter that reverses little segments of the input.
650	MODULATOR-VERB	MULTI-SHIFT	Similar to above with more reverb-like decay.
651	OCTAVE FILTERS	BAND DELAY	Gurgling, upward-sweeping filter bands.
652	PSYCHO-PANNER	SWEPT COMBS	This program swirls the input in pitch, pan and delay: (range) controls the range of delay and pitch sweep, (feedback) lower this to reduce the decay time, (pan rate) controls the panning and sweep speed, (mix) wet/dry effect mix.
653	RESONANT MAJ7	STRING MODELER	Sets up sympathetic resonances that form a Major seventh chord.
654	RESONANT PENT	STRING MODELER	Same as above, except resonances form pentatonic scale.
655	REVERSERB	MULTI-SHIFT	A reverb-like effect made up of little, backward bits of the input signal. Try shortening the 'size' parameter to smooth it out a little.
656	RUNTHRUMYMIND	BAND DELAY	An echo that bounces and changes timbre back and forth.
657	SCARY MOVIE	REVERSE SHIFT	This program uses REVERSE SHIFT to create an evil-sounding voice. Use with guitar to create that tape splice, psychedelic sound.
658	S/H PAN-A-DELAY	BAND DELAY	Very similar to RunThruMyMind but with different timbres.
659	SLAP+WAH+MICRO	PATCH FACTORY	A slap delay, a sweeping wah-wah, and a microshift all from one program.
660	SPACE CRICKETS	BAND DELAY	Circulating, up-sweeping BAND DELAYs.
661	STUTTER	STUTTER	Use this for that popular STUTTER sound.
662	STUTTER RANDOM	STUTTER	Random STUTTERs at your control.
663	SWEEP DOWN	BAND DELAY	Rhythmically panned and delayed, with its own bandpass filter.
664	SWEEP & REVERB	STRING MODELER	Sounds reverb-like until manually triggered, which causes a radical, mystical, up-and-down sweep.
665	SWEEP UP/DOWN	BAND DELAY	BAND DELAYs on left sweep up, BAND DELAYs on right sweep down.
666	SWEEP UP LINEAR	BAND DELAY	Rising BAND DELAYs sweeping from right to left.
667	SWEEP UP	BAND DELAY	Similar to above w/bands tuned one octave apart.
668	TALKING GUITAR	VOCODER	Vocoder tailored for the guitar.
669	TRIGGERED SCALE	STRING MODELER	Another sympathetic resonator program, except this one has a twist. Press the 'trigger' key to get a unique, harp-like strumming sound.
670	TUBE CLONE	BAND DELAY	This is strictly meant for guitars. Play, with distortion, directly through the H3500 and this program will add a nice, crunchy EQ.
671	TWO-BAND FILTER	PATCH FACTORY	Two general-purpose bandpass filters with tunable center frequency and filter Q.
672	WAH WAH + MICRO	PATCH FACTORY	Combines a sweeping filter (wah-wah) with a micro-shift.
673	WAH WAH	PATCH FACTORY	A basic, cyclical wah-wah sound using filters and a function generator.
674	WAH-VERB	BAND DELAY	This sounds like a reverb with a wah-wah.
675	A 440	PATCH FACTORY	Need a reference tuning tone? Here it is. You can mix in the sound you are tuning or fine adjust the pitch for slightly different tunings.
676	GUITAR-ESQUE	STRING MODELER	Connect MIDI up and you have a mellow, guitar sound. The input signal will also affect the sound out.
677	HVYMETAL CELLO	STRING MODELER	The string is briefly bowed and left to ring. The harder you hit the key, the longer the bowing. Feeding input sound will affect the timbre of the note.
678	KEYBOARD	STRING MODELER	An adjustable keyboard sound where you can tailor the sound to your tastes. Also, try your pitch wheel and hit the same note a number of times.
679	KOTO	STRING MODELER	By itself, a very delicate sound. Feed in some input, and the sound takes on all kinds of characters.
680	LS BACH HARPSCD	STRING MODELER	Bright and crisp harpsichord.
681	LS BOWED STRING	STRING MODELER	An airy, resonant noise.
682	LS CLAVICHORD	STRING MODELER	This is a more classical clavichord sound than we're used to. Use pressure to bend the notes.
683	LS FAR STRINGS	STRING MODELER	Your not-so-standard string section.
684	LS HARP RESONS	STRING MODELER	A hollow, harp sound.
685	LS HARPSICHORD	STRING MODELER	Like the Bach but fuller.
686	LS HIT STRING	STRING MODELER	Crisp and full-struck strings.
687	LS NOSTALGIA	STRING MODELER	This has that honky-tonk sound.
688	LS PSEUDO PIANO	STRING MODELER	An almost piano.
689	LS ZITHER	STRING MODELER	Plucked strings that are full and chorused. Hitting harder will change the timbre.
690	ALICE-VERB	DENSE ROOM	This is a reverb. With each note you hit, you could have a different decay time. Also, the harder you hit, the less bright the reverb.
691	DUAL GLIDEDELAY	DUAL DIGIPLEX	The delay lines are controlled by MIDI.
692	FILTER SWEEPS	BAND DELAY	A recirculating sweep up is swept by the function generator.
693	GLIDE DELAY	LONG DIGIPLEX	This is a mono version of Dual Glide Delay.
694	MIDI 3 ON 2	DUAL DIGIPLEX	This preset will sync up its delay times to a MIDI drum machine or sequencer. The delays are in the familiar 3 on 2 pattern.
695	MIDI PEDALSWEEP	SWEPT REVERB	The MIDI foot-pedal controller will manually sweep the delays in this program to generate a flange-like sound. The Modulation Wheel controls modulation of the delays.
696	MIDIPLEX	LONG DIGIPLEX	Connect a MIDI drum machine or sequencer to this program and the delay will automatically be in time.
697	MIDI BANDSWEEP	BAND DELAY	This program does process audio, but generates an interesting sweep when a MIDI note message is received.
698	MODWHEEL REVERB	SWEPT REVERB	When connected to a MIDI keyboard, the Mod Wheel controls the decay time and the Pitch Wheel controls the delay (room size). Use this to easily generate dramatic reverb sweeps.
699	ROCK 'N' ROLL	LAYERED SHIFT	This one's a bit different. Capture an audio loop by pressing the 'sustain' parameter. Play a note on a MIDI keyboard to hear the loop. Moving the Mod Wheel will alter the loop points (a bit like rocking tape reels).
700	AIR	STEREO SHIFT	A long, subtle echo.
701	A LYDIAN 6THS	DIATONIC SHIFT	Play solo lines using A Lydian modal scales. If you don't know what a modal scale is, play in the key of E major.
702	A mi WATER WELL	DIATONIC SHIFT	Creates delayed harmonies in A minor.
703	A MIXO AIR	DIATONIC SHIFT	A seventh and third that's way back in the mix. Play in A Mixolydian.
704	ANGEL HAIR	STEREO SHIFT	Ascending-octave echoes.
705	ARP	DUAL SHIFT	Arpeggio with major sixth and fourth.
706	ARPEGGIATOR	DUAL SHIFT	Ascending-arpeggiated echoes.
707	BELL ECHOES	LAYERED SHIFT	Slap echoes, first up a fifth, then unshifted.
708	BIG & LONG	DUAL DIGIPLEX	Doubling on the left, a long delay on the right. Be sure to use both inputs.
709	BIG ROOM CHORUS	SWEPT COMBS	A BIG, chorused-room sound.
710	BIG GROUND	REVERSE SHIFT	A killer, atonal effect.
711	BIG LIGHT ECHO 	REVERSE SHIFT	A psychedelic, REVERSE SHIFT effect. You may see the light.
712	BOUNCE VERB	ULTRA-TAP	A boingy reverb that's perfect for adding a real crunch to overdriven guitar.
713	CHORUS 'N' ECHO	DUAL SHIFT	Chorus on both channels, echo on the right.
714	CHORUS 'N' FLANGE	DUAL SHIFT	Chorus on the left, flange on the right. To get more 'flange,' turn up the right feedback.
715	CLUSTER ECHO	DIATONIC SHIFT	A slap that comes back as a tone cluster.
716	DEATHLESS ROOM	ULTRA-TAP	Even crunchier than Bounce-Verb.
717	DELAY TO WASH	REVERB FACTORY	This repeating delay eventually fades into a reverb.
718	ECHO BOUND	ULTRA-TAP	Left/Right echoes keep coming at you then stop.
719	ENDLESS CAVE	ULTRA-TAP	A dense, cave-like reverb.
720	EZCHORUS	LAYERED SHIFT	Instant, stereo guitar.
721	FALLING FLANGER	LAYERED SHIFT	Flanger left, delay right.
722	GREEN WRINGER	STEREO SHIFT	Turns your guitar into vegemite.
723	HEAVEN	REVERSE SHIFT	Play anything into this. It will sound good.
724	HELL	REVERSE SHIFT	An unearthly sound.
725	HEXA CHORUS	SWEPT COMBS	Super-thick chorus.
726	HEXA FLANGE	SWEPT COMBS	Super-thick flange.
727	INSOMNIA	DUAL SHIFT	Descending, chromatic intervals. This one will keep you up.
728	KICK BACK CHORUS	DUAL DIGIPLEX	A long delay that comes back in stereo.
729	LOVE GUNPLAY IN C	DIATONIC SHIFT	If you like sevenths, you'll like this one.
730	MINOR 7TH ECHOES	DIATONIC SHIFT	Backwards minor 3rd and 7th echoes. Sounds great if you play up high and dirty.
731	MONDO CHORUS	DUAL SHIFT	A wide chorus that still keeps its punch.
732	OCTAVE DISPLACE	LAYERED SHIFT	Delayed octaves, up and down.
733	OCTAVE FRENZY	LAYERED SHIFT	Octaves with feedback.
734	OUTDOOR ARENA	REVERSE SHIFT	Big stadium, backwards echoes.
735	PARADITTLE	ULTRA-TAP	Diffused machine-gun echoes.
736	REVERB-a-BOUND 	ULTRA-TAP	Thick reverb with a long attack time.
737	SLOPPY 5THS	STEREO SHIFT	Detuned fifths. Great for solos.
738	SMALL Chorus ROOM	SWEPT COMBS	A small room with an intense chorus.
739	SMALL DARK ROOM	REVERB FACTORY	A realistic, small-room reverb.
740	SPACE CATS	SWEPT COMBS	This defies explanation.
741	STUPIT GUN	STEREO SHIFT	A dissonant pitch, sweep down.
742	SYNTHISH	DUAL SHIFT	Distorted guitar in, synth out.
743	TARUS BULBA Em	DIATONIC SHIFT	A fifth up, fourth down, in E minor.
744	THE BLUBBA HOZE	LAYERED SHIFT	First a fourth down, then a fifth up.
745	TIGHT CHORUS	STEREO SHIFT	A micro-shift that preserves stereo imaging.
746	TRIPPLE SLAP	SWEPT COMBS	Three closely spaced echoes.
747	TRIPPLE TREAT	DUAL DIGIPLEX	Two long echoes, plus the original, make three.
750	ADR TAPE HISS	PATCH FACTORY	Provides hiss to use for matching edits between analog and digital sources.
751	BOING HIT	PATCH FACTORY	Sounds like a boing hit you know the show.
752	CIRCLES	ULTRA-TAP	Delays that sound like they sweep in circles.
753	DAY IN THE LIFE	SWEPT REVERB	Long, nightmarish reverb.
754	DRAGWAY AD	PATCH FACTORY	One-stop preset for those annoying ads.
755	FADE TO DREAM	LAYERED SHIFT	Gives illusion of drifting off into dream.
756	GIL'S ROOM	REVERB FACTORY	Smooth, roomy reverb. Sounds good to Gil.
757	GREGORIAN CHANT	PATCH FACTORY	Adds fifths to input ala Gregorian Monks.
758	HOUSE VERB	SWEPT COMBS	Sounds like the echo in a new house without furniture.
759	JET FLY BY	PATCH FACTORY	Convincing stereo, jet plane.
760	LASER HIT	PATCH FACTORY	Captain, I can't make the shields last much longer!
761	MassiveStringTap	ULTRA-TAP	Delays set mondo-wide and big for strings.
762	MEGAPHONE	PATCH FACTORY	Come out with your hands up.
763	MovingVocalSprd	MULTI-SHIFT	Left output moves up nine cents, right moves down nine cents, with sine wave modulation.
764	PLUCK HIT	PATCH FACTORY	Hi-tech, plucking sound.
765	PULSING ROOM	DENSE ROOM	Long, warm verb.
766	RANDOM SHIFT	LAYERED SHIFT	Random-shifting thickener.
767	REVERSE DOGS	REVERSE SHIFT	Low octaves, howling backwards.
768	RIPPED WOOFER	PATCH FACTORY	Damn! Should have kicked in the subsonic filter for that jet sample!
769	SHIMMERISH	SWEPT REVERB	Ethereal sounding, verb-like effect.
770	STEREO COPTER	PATCH FACTORY	Stereo-sounding helicopter.
771	ST PETERS CATH	REVERB FACTORY	BEEEG reverb senor!
772	TELEPHONE	PATCH FACTORY	One-stop, telephone-voice sound.
773	THUNDER BOLT	PATCH FACTORY	Sounds like thunder.
774	TV/RADIO/JUKE	PATCH FACTORY	Sounds like box in the next room.
775	VOICE DISGUISER	SWEPT COMBS	Useful for covering identity of interviewee's voice for controversial/confidential radio or television appearances.
776	WalaWala	DUAL SHIFT	Conversation simulator three from one.
777	WARPED LP	STEREO SHIFT	Guess what this sounds like?
778	WINDSTORM	PATCH FACTORY	Bundle up before you load this preset.
779	DIRECT BOX	PATCH FACTORY	Very clean, direct box. See manual for changing gain. Avoids analog to digital converters unless 'effect' is turned up. At unity gain, S/N is well over 100dB on Channel 1.
780	MEAN OCTAVES	PATCH FACTORY	Distortion with octave pitch shift.
781	PIGNOSY	PATCH FACTORY	A popular, little guy.
782	R & B PLUCK	PATCH FACTORY	Has that clean sound with flange and delay.
783	SCREAMER DELAY	PATCH FACTORY	Gritty distortion with delay.
784	SCREAMER uPITCH	PATCH FACTORY	Gritty distortion with added delay and harmony.
785	SILVERTONE II	PATCH FACTORY	That old beginner's sound.
786	ULTRALUX	PATCH FACTORY	Bright, rhythm sound.
793	CLONEVERB	REVERB FACTORY	Bright, medium room.
794	LIKE ENOSE IN E	REVERB FACTORY	Resonating gated and echo in key of E.
795	LONG & SMOOTH	REVERB FACTORY	Long, smooth, bright hall.
796	MEAT LOCKER	REVERB FACTORY	Sounds like a meat-locker-sized space.
797	MIDI 3 ON 2	DUAL DIGIPLEX	Delays scaled by MIDI clock period.
798	MIDIPLEX	LONG DIGIPLEX	Single delay scaled by MIDI clock.
799	MULTI FLANGERS	SWEPT COMBS	Resonant set of flangers. Watch clipping.
800	allpass detune	MOD FACTORY	Uses two detuners in series to give a unique, reverb-like chorus.
801	anti-duck feedback	MOD FACTORY	Dual delays that feedback only while audio is present.
802	awesome flange	MOD FACTORY	Two flangers in series give some super notches with pitch detuning on the output.
803	awesome knob	MOD FACTORY	The awesome flanger with manual control: (the knob) use this to manually sweep the flanger.
804	band compress	MOD FACTORY	A fixed 21 dual-band compressor.
805	band flip	MOD FACTORY	This patch splits the input signal into two bands, a high band and a low band. The output continuously crossfades between these two bands.
806	bandsplit delay	MOD FACTORY	Splits input signal into two bands and passes each band through a separate delay line. The low band goes to the left output channel and the high band to the right.
807	boing	MOD FACTORY	A strange, triggered, pitch mutilation.
808	bpm panner	MOD FACTORY	An autopanner with the pan rate controlled by the BPM setting.
809	bpm trips and qtr	MOD FACTORY	Beat-per-minute triplets on one side, quarter note on the other.
810	bpm trip pan	MOD FACTORY	Beat-per-minute triplets feeding an autopanner.
811	bpm x-fed duck	MOD FACTORY	Two ducked delays adjusted in beats-per-minute. The output of delay 1 feeds back into the input of delay 2 and vice-versa.
812	chorus/duck trm	MOD FACTORY	Detune chorus to the left and right and a ducked, tremolo delay in the center.
813	chorus/duck dly	MOD FACTORY	A detuned chorus and ducked delays.
814	chorus/pan dly	MOD FACTORY	Pitch detuning on the left and right with a dry, autopanned repeating delay.
815	chorus room	MOD FACTORY	A reverb-like chorus.
816	compress 21	MOD FACTORY	A fixed 2:1 compressor. Use env1 parameters to control the compressor.
817	detuned space	MOD FACTORY	Detuners arranged to give a small-room sound.
818	detune darkly	MOD FACTORY	Detuning with control over high-frequency rolloff.
819	dual long delay	MOD FACTORY	Two independent delay loops. Use delay controls to change delay and feedback.
820	dual duck delay	MOD FACTORY	Two independent delay loops with gain ducking. Use delay controls to change delay and feedback. Use envelope controls to adjust gain ducking.
821	dual panners	MOD FACTORY	Two independent autopanners.
822	dual tremolo	MOD FACTORY	Two tremolos, with delays.
823	ducked 'verb	MOD FACTORY	A chorused, reverb-like effect that ducks with the input.
824	dynamic feedback	MOD FACTORY	Dual delay loops with lowpass filters in the feedback loop. The filter frequencies are modulated by the input envelope to give a downward sweep to the feedback.
825	dynamic flange	MOD FACTORY	The input level controls the amount of feedback in this two-voice flanger. Higher input levels give a more resonant flange.
826	dynamic tremolo	MOD FACTORY	Tremolo, with the rate controlled by the input level. The output is detuned to give a stereo, chorus effect.
827	envelope detune	MOD FACTORY	A stereo detuner with dynamic control of the detune amount. Greater input levels increase or decrease the amount detuning.
828	envelope filter	MOD FACTORY	That classic, funky sound. This uses both filter 1 and 2. Use env1 attack and env1 decay times to control the envelope response.
829	envelope flange	MOD FACTORY	A two-voice flanger with the envelope sweeping the delay.
830	env filter/slap	MOD FACTORY	Envelope filter into a slap delay.
831	env filter/verb	MOD FACTORY	Envelope filter into a cheap reverb.
832	envelope pan	MOD FACTORY	Pan position varies with input signal level. Higher levels are panned left and lower levels are panned right. Use env 1 controls to set attack and decay times.
833	ethereal	MOD FACTORY	A very watery, haunting reverb.
834	ethereal logic	MOD FACTORY	The ethereal reverb modulated with a square wave.
835	etherpan	MOD FACTORY	The ethereal reverb followed by an autopanner.
836	ethertrem	MOD FACTORY	The ethereal reverb feeding a tremolo.
837	exponential	MOD FACTORY	Four chorused, delay taps with exponential spacing. Use BPM to set the amount of delay.
838	filter sweep	MOD FACTORY	A funky, triggered, filter sweep. The input signal triggers the sweep. To set the trigger level, adjust LFO 1 threshold.
839	flange pan	MOD FACTORY	Dual autopanners with delay modulation.
840	flutter	MOD FACTORY	A more intense, dynamic tremolo.
841	funky squares	MOD FACTORY	A pair of highly resonant, square-wave, modulated filters.
842	fuzz/chorus	MOD FACTORY	A fuzz box feeding a detuned chorus. The detune is right and left, with dry distortion in the center.
843	fuzz/clean chrs	MOD FACTORY	Fuzz in the center with a clean-pitch detune left and right.
844	fuzz/eq/comp	MOD FACTORY	A 21 compressor precedes the distortion. Also has two bands of eq and independent left/right channel delays. Adjust filter 1 and 2 to control eq.
845	fuzz/eq/rotary	MOD FACTORY	Fuzz into a rotating speaker simulation.
846	fuzz/eq/tremolo	MOD FACTORY	Fuzz into a tremolo.
847	fuzz-head	MOD FACTORY	Super, high-gain fuzz with resonant overtones.
848	gated ghost	MOD FACTORY	The ethereal reverb followed by a noise gate. Use the envelope follower parameters to adjust the gate.
849	gated multitap	MOD FACTORY	A chorused, multi-tap delay followed by a noise gate.
850	haas panner	MOD FACTORY	An autopanner that varies the delay to the left and right channels to enhance the realism of the panning effect.
851	Haas pan/manual	MOD FACTORY	A manual panner that varies the delay to the left and right channels to enhance the realism of the panning effect.
852	hi->efx lo->noefx	MOD FACTORY	A frequency-dependent gate that lets the high notes into a chorus delay effect. Use cutoff1 and cutoff2 to adjust the crossover point.
853	high->lft low->rt	MOD FACTORY	A frequency-dependent gate that steers the high notes to the left channel and the low notes to the right channel. Use cutoff1 and cutoff2 to adjust the crossover point.
854	knob zippers	MOD FACTORY	Use the knob to control delay time, giving a zipper effect.
855	manual flange	MOD FACTORY	Use the knob to flange. This is a subtle version, try "awesome knob" (#803) or "rich flange/man" (#872) for more intense flanging.
856	midi efx rack	MOD FACTORY	This is set up to use with a MIDI controller like the MIDI mitigator. Each parameter of this patch is assigned to a different MIDI controller. This patch gives you a pair of ducked, BPM delays in parallel with a pitch-detuning chorus.
858	overdub loop	MOD FACTORY	A long loop with delay modulation that overdubs without overload. Use delay 1 to control the length of the loop.
859	overdub/detune	MOD FACTORY	An overdubbing loop like above, except with detuning on the left and right outputs. The dry loop output is panned center. Also, this patch has BPM control over the loop length.
860	overdub/tremolo	MOD FACTORY	An overdubbing loop with chorus and tremolo. BPM controls the loop length. The chorus is panned left and right. The tremolo is panned center.
861	overdub dual	MOD FACTORY	Dual overdubbing delay loops with knob modulation of the delay times.
862	panning bands	MOD FACTORY	Dual autopanners fed by fixed bandpass filters. Use filter 1 and 2 parameters to adjust the characteristics of the bands.
863	panning delays	MOD FACTORY	Dual delays, each with its own autopanner.
864	panning detune	MOD FACTORY	An autopanner with the left and right channels detuned.
865	pan into delays	MOD FACTORY	An autopanner that feeds a cross-fed pair of delays.
866	panner	MOD FACTORY	Autopan using a frequency-modulated oscillator.
867	pan squarely	MOD FACTORY	Autopan with a square-wave oscillator.
868	ping-pong	MOD FACTORY	A ping-pong delay with controllable high cut.
869	ping-pong duck	MOD FACTORY	Like above, with ducking on the delays. Use envelope controls to adjust ducking parameters.
870	quivering echo	MOD FACTORY	A uniquely modulated delay. Use BPM to adjust delays and modulation.
871	rich flange	MOD FACTORY	A flanger built with two delays and cross-coupled feedback.
872	rich flange/man	MOD FACTORY	The same flanger as above, but this one has manual control.
873	rich rhythm	MOD FACTORY	A very diffuse, chorused pair of repeating delays. Use BPM to set the tempo.
874	sine flange	MOD FACTORY	A very smooth flange that uses a sine wave to sweep the delays.
875	slap center	MOD FACTORY	Detuned chorus on left and right with a dry slap in the middle.
876	slide into tune	MOD FACTORY	The input envelope bends the pitch upward. Use envelope controls to vary the dynamics of the pitch bend.
877	speaker spinner	MOD FACTORY	A rotating speaker simulation. Even takes time to come up to speed.
878	square chorus	MOD FACTORY	Pitch, detuning modulated by a square wave.
879	stereo detune	MOD FACTORY	Splits stereo signal into L+R and L-R. In addition to controlling the balance of L+R and L-R, L+R can be detuned.
880	stereo enhance	MOD FACTORY	This patch plays around with the L-R component of a stereo mix. Delay and EQ of the L-R signal are controllable with softknobs.
881	stereo widen	MOD FACTORY	Adds delay to L+R to give wider center image.
882	strange loop	MOD FACTORY	Output switches between two different delay loops, giving an interesting, rhythmic effect.
883	swell	MOD FACTORY	A gain swell triggered by the audio input. Use thresh1 to adjust the trigger threshold.
884	swell reverb	MOD FACTORY	The ethereal reverb modulated by a triggered, amplitude swell.
885	swell taps	MOD FACTORY	A multi-tap delay gated with a triggered LFO. Use LFO thresh to adjust trigger threshold.
886	throaty	MOD FACTORY	An envelope flanger based on the awesome flanger.
887	tremolo	MOD FACTORY	A stereo tremolo with independent left/right delay control. Use delay 1 and delay 2 parameters to set delays.
888	triggered air	MOD FACTORY	A rich, chorused reverb whose output is gated by a triggered LFO. The left input triggers the swell. Use thresh1 to set the trigger threshold.
889	triggered flange	MOD FACTORY	Audio input triggers flange sweep. Thresh1 adjusts the trigger threshold.
890	triggered pan	MOD FACTORY	Audio input alternately triggers a pan to the left, then to the right. Thresh1 controls the trigger threshold.
891	trig pan r->l->r	MOD FACTORY	Audio trigger pans right to left to right. Thresh1 controls the trigger threshold.
892	true flange	MOD FACTORY	Thru-zero flanging. This uses two delays to get flanging that actually passes through zero delay.
893	undulator	MOD FACTORY	Tremolo on top of a multi-tap delay.
894	vibrato	MOD FACTORY	Vibrato with controllable delay.
895	whaaat-a-panner	MOD FACTORY	Two bands that pan and change cutoff frequency.
896	whoopie	MOD FACTORY	Very strange envelope-modulated noises.
897	wide tremolo	MOD FACTORY	Tremolo with different delay on left and right gives a nice, stereo effect.
898	wilting phrase	MOD FACTORY	After a phrase is played, the pitch drops.
899	x-coupled ducks	MOD FACTORY	Two ducked delays with cross-coupled feedback.
975	MULTI DOUBLER	SWEPT COMBS	Flangy thickener. Try on background vox.
976	MUTRUM	PATCH FACTORY	Garbly, alien sound.
977	HIGH SWELLS	REVERSE SHIFT	High shimmer for synth pads.
978	NewBrightChambr	DENSE ROOM	Medium-large, bright chamber.
979	SmallEmptyClub	DENSE ROOM	Tiny, empty club you worked at last week.
980	PAPER PLATE	REVERB FACTORY	Small, thin-plate reverb.
981	OTHERS MONO DLY	LAYERED SHIFT	Basic delay with feedback.
982	007 PHASE GUN	PHASER	Sci-fi, fun gun.
983	PHASER GTR	PHASER	General-purpose PHASER. Try on Guitar.
984	ROEYs PHASOLOGY	PHASER	Deep and slow, is the way to go.
985	USEFUL VERB 2	REVERB FACTORY	Generic reverb, medium well.
986	POOBLICE ON 9	LAYERED SHIFT	Deglitched, hi-end sound, L+12, R-11.
987	R & B DIRTSKI*	PATCH FACTORY	Nice thickener for guitars. Distorted ambience.
988	REAL CHORUS 2	MULTI-SHIFT	Randomized doubler. Smaller than preset #528.
989	ResonateInEnozE	SWEPT COMBS	Verby at first, then more tuned delay-like.
990	ROBO DRUM	PATCH FACTORY	Adds cylon ambience to percussives.
991	AIR SHAMIR	DENSE ROOM	Tight, lil' thang.
992	ONVELOPE FILTER	PHASER	Long, cool sweep. Cool on bassy things.
993	UK STYLE VERB	REVERB FACTORY	It's Brit-ish, mate.
994	SHO IZ TITE VRB	REVERB FACTORY	Tight , gated reverb. Bright.
995	SMALL & LIVE VERB	REVERB FACTORY	Funny, gated, little verb. Ha Ha.
996	SNARE SLAP	PATCH FACTORY	Poppy, delayed effect.
997	STRING MODLER#9	STRING MODELER	Droning sounds in the background.
998	TALKIN BUM	PATCH FACTORY	Sounds like bums sayin 'walla, walla.'
999	THUNDER TOMS	PATCH FACTORY	One-of-a-kind, falling ambience for toms.`;


// This file contains the complete presets array for use in the web page.
const factoryPresets = presets_csv
	.split('\n')
	.slice(1) // skip header
	.filter(line => line.trim() && !line.startsWith('#'))
	.map(line => {
		const parts = line.split('\t').map(col => col.trim());
		return {
			number: parts[0],
			name: parts[1],
			algorithm: parts[2],
			description: parts[3]
		};
	});

// Array of user presets objects starting at 000 to 099
const userPresets = Array.from({ length: 100 }, (_, i) => ({
	number: String(i).padStart(3, '0'),
	name: `User Preset`,
	algorithm: '',
	description: 'User-defined preset.'
}));

const PRESETS = [...factoryPresets];


// Mapping between Algorithm names in the CSV and internal algorithm codes.
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
