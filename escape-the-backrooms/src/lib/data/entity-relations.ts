import { getEntities } from '@/lib/data/entities'
import type { Locale } from '@/types/locale'

export type EntityModule = 'behaviorMechanics' | 'spawnPoints' | 'counterStrategy' | 'multiplayerDiff' | 'relatedEntities' | 'faq'

export interface EntityLevelAppearance {
  levelSlug: string
  role: string
  avoidance: string
  verifiedFor: string
}

export interface EntityRecord {
  aliases: string[]
  threatScore: 1 | 2 | 3 | 4 | 5
  type: Array<'chaser' | 'ambient' | 'interactive'>
  appearance: string
  behaviorSummary: string
  behaviorMechanics?: string
  spawnPoints?: Array<{ levelSlug: string; timing: string; location: string; routeEffect: string }>
  counterStrategy?: string
  multiplayerDiff?: string
  appearances: EntityLevelAppearance[]
  relatedEntities?: string[]
  modules: readonly EntityModule[]
  uniqueModuleTitle: string
  uniqueModuleSummary: string
}

const records: Record<string, EntityRecord> = {
  wanderer: {
    aliases: ['Player character', 'Human'],
    threatScore: 1,
    type: ['ambient'],
    appearance: 'The playable human model wears the current yellow hazmat suit. Other human explorers can appear in specific routes with different suit models.',
    behaviorSummary: 'Wanderer is the player role, not a hostile encounter. Its practical mechanics are route memory, item ownership, stamina, sanity, and co-op communication.',
    multiplayerDiff: 'Co-op spreads route knowledge and key items across several players. Name the item holder and the regrouping landmark before the party splits.',
    appearances: [
      { levelSlug: 'level-0-the-lobby-Walkthrough', role: 'Every player begins as a Wanderer and learns the first shared landmarks in the Lobby.', avoidance: 'There is nothing to evade. Agree on the ladder or exit landmark before players search separate branches.', verifiedFor: 'Current route guide' },
      { levelSlug: 'level-1-the-habitable-zone-Walkthrough', role: 'Split floor searches make the player character part of the information problem: one person may hold the key or route call everyone needs.', avoidance: 'Choose a regrouping door and use the same identity check after every split.', verifiedFor: 'Current route guide' },
    ],
    relatedEntities: ['skin-stealer', 'bacteria'],
    modules: ['multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'The player is part of the route',
    uniqueModuleSummary: 'A team can survive every chase and still lose time because the key holder, cleared branch, or next landmark was never called. This file focuses on preventing that avoidable route drift.',
  },
  bacteria: {
    aliases: ['Howler', 'Lifeform'],
    threatScore: 3,
    type: ['chaser'],
    appearance: 'A black, wire-like humanoid with a heavy head and an uneven gait. Its howl is usually useful information before the model is clearly visible.',
    behaviorSummary: 'The Level 0 Bacteria appears after roughly three minutes and can use knocking sounds to draw players off route. Roaming variants chase on sight and require a level-specific hiding place.',
    behaviorMechanics: 'Corners and broken sightlines matter in Level 0. In Level 0.11, Overgrowth, and Level 55.1, distance alone is unreliable: use the vent, room, open ground hole, locker, or raised lift provided by that route.',
    spawnPoints: [
      { levelSlug: 'level-0-the-lobby-Walkthrough', timing: 'About three minutes into the level', location: 'Level 0 yellow rooms', routeEffect: 'Knocking may pull the player away from the ladder search; repeated corners are safer than one long corridor.' },
      { levelSlug: 'escape-the-backrooms-level-0-11-guide', timing: 'During the shutter and lever route', location: 'Water Damage corridors', routeEffect: 'The entity is faster here, so identify a vent or closable room before starting a timed interaction.' },
      { levelSlug: 'escape-the-backrooms-level-55-1-guide', timing: 'During the lower photography checklist', location: 'Level 0.3 layer', routeEffect: 'The photography objective forces a deliberate exposure; lockers and the lift are the intended reset options.' },
    ],
    counterStrategy: 'Do not try to fight Bacteria with the chainsaw. Break sight in Level 0; use a real shelter in later roaming encounters. Wait for the chase to end, then return to the last confirmed objective.',
    multiplayerDiff: 'Call the direction and the fallback, not a long description. Leave enough space for each player to enter the vent, room, locker, or lift instead of blocking the only safe point.',
    appearances: [
      { levelSlug: 'level-0-the-lobby-Walkthrough', role: 'After the opening timer, Bacteria turns the yellow maze into a sightline chase and its knocking can lure the group away from the ladder route.', avoidance: 'Do not investigate the knock. Use consecutive corners, keep moving until the howl fades, and avoid a dead-straight panic sprint.', verifiedFor: 'Current game behavior and route guide' },
      { levelSlug: 'escape-the-backrooms-level-0-11-guide', role: 'A faster roaming Bacteria crosses the chainsaw search and the timed four-lever shutter route.', avoidance: 'Locate a vent or room before touching the objective. Abandon a failed timer, hide completely, and regroup before restarting the lever call.', verifiedFor: 'Current game behavior and video route' },
      { levelSlug: 'escape-the-backrooms-level-55-1-guide', role: 'A slower Bacteria appears in the Level 0.3 layer as one of the required camera targets.', avoidance: 'Take the picture with the nearest locker or lift already chosen, then use that shelter rather than remaining in the corridor for a cleaner shot.', verifiedFor: 'Current game behavior and objective route' },
      { levelSlug: 'escape-the-backrooms-level-2-graffiti-guide', role: 'The current Graffiti route places Bacteria pressure across long NPC carries between the outside paths and tube holes.', avoidance: 'Pick up the speed drink before the carry, preserve a clean line back to the plaza, and do not force a slow return through a blocked lane.', verifiedFor: 'Current site video route' },
    ],
    relatedEntities: ['smiler', 'skin-stealer', 'wretch'],
    modules: ['behaviorMechanics', 'spawnPoints', 'counterStrategy', 'multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'A hiding-place check disguised as a chase',
    uniqueModuleSummary: 'The correct answer changes with the level. Corners solve the Lobby pursuit; later variants are designed around vents, rooms, holes, lockers, or the lift.',
  },
  'skin-stealer': {
    aliases: ['Skinstealer'],
    threatScore: 5,
    type: ['chaser'],
    appearance: 'Its true form is a tall gray humanoid with a long mouth, blood around the torso, and bright white eyes. A disguised Skin-Stealer can resemble a hazmat-suited player.',
    behaviorSummary: 'It may begin disguised and reveal its true form when the chase closes in. Most variants are a little slower than the player, but the Level 8 specimen is faster. Skin-Stealers cannot open doors.',
    behaviorMechanics: 'A voice, flashlight, or familiar outline is not enough proof of a teammate. Use a short identity check after splits and keep a door, bed, closet, or locker between the group and an unverified figure.',
    counterStrategy: 'Close a door to break the chase. In the Hotel, beds and closets are safe hiding points; in Level 55.1, use a locker. In Level 8, retreat through known tunnels toward the transport door instead of racing into unexplored cave branches.',
    multiplayerDiff: 'Agree on a quick ID-card check before separating. If a figure is already sprinting toward the group, skip the debate and close the nearest door.',
    appearances: [
      { levelSlug: 'level-1-the-habitable-zone-Walkthrough', role: 'Skin-Stealers appear on the upper floors, where split searches make a human-shaped silhouette easy to trust too quickly.', avoidance: 'Use the agreed ID check, keep distance, and close a hiding door if the figure ignores the call or rushes the group.', verifiedFor: 'Current game behavior and route guide' },
      { levelSlug: 'level-5-terror-hotel-Walkthrough', role: 'A Skin-Stealer patrols while the group searches rooms for papers; after enough time it can continue tracking a hiding player until it sees them.', avoidance: 'Mark the nearest bed, closet, and closable door before searching. Do not lead the chase through every room needed for the paper route.', verifiedFor: 'Current game behavior and route guide' },
      { levelSlug: 'level-8-cave-system-walkthrough', role: 'The cave variant is faster than the player and carries a flashlight that can reveal its approach around dark turns.', avoidance: 'Treat an unknown light as a warning. Backtrack toward the start or transporter valve and close the route behind you when possible.', verifiedFor: 'Current game behavior and route guide' },
      { levelSlug: 'escape-the-backrooms-level-55-1-guide', role: 'A slow Skin-Stealer is one of the lower photography targets.', avoidance: 'Create enough space for the required photograph, then step into a nearby locker instead of trying to compose another shot.', verifiedFor: 'Current game behavior and objective route' },
    ],
    relatedEntities: ['wanderer', 'bacteria', 'smiler'],
    modules: ['behaviorMechanics', 'counterStrategy', 'multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'Verify the teammate before closing distance',
    uniqueModuleSummary: 'The disguise matters because it steals time. A pre-agreed check and a nearby door make the decision before the false teammate can reach the group.',
  },
  smiler: {
    aliases: ['The Smiler'],
    threatScore: 3,
    type: ['chaser'],
    appearance: 'The current model is a floating smiling face with sharp teeth inside a cloud of dark fog. The older spider-like body was replaced for version 1.0.',
    behaviorSummary: 'Level 1 blackouts spawn Smilers in the dark, while Level 2, Level !, and the Pipe Run use chase sequences. Roaming Smilers can be held back by aiming a flashlight or camera light at the face from a safe distance.',
    behaviorMechanics: 'First decide which version you are facing. A scripted chase demands uninterrupted forward movement; a roaming Smiler is managed with steady light on its face; a blackout demands reaching a lit corridor before it closes the gap.',
    spawnPoints: [
      { levelSlug: 'level-1-the-habitable-zone-Walkthrough', timing: 'When the garage lights shut off', location: 'Level 1 parking area', routeEffect: 'The safe route immediately changes from searching to reaching one of the lit side halls.' },
      { levelSlug: 'level-2-pipe-dreams-Walkthrough', timing: 'After the dark steam section', location: 'Final Pipe Dreams corridor', routeEffect: 'The encounter becomes a forced sprint with infinite stamina; steering and the final left opening decide the run.' },
      { levelSlug: 'escape-the-backrooms-level-55-1-guide', timing: 'During the entity photo checklist', location: 'Level 55.1 corridor', routeEffect: 'Light holds the roaming face back long enough to frame the required photograph.' },
    ],
    counterStrategy: 'During a chase, keep moving and watch the route ahead. During roaming encounters, aim the flashlight or camera light at the face and preserve distance. During the Level 1 blackout, move directly into a lit side hall.',
    multiplayerDiff: 'Use one lead caller during chases so players do not collide in narrow pipes. In roaming encounters, one player holds the light while another completes the photo or opens the retreat.',
    appearances: [
      { levelSlug: 'level-1-the-habitable-zone-Walkthrough', role: 'When the garage lights fail, Smilers spawn in the dark and move faster than the player.', avoidance: 'Stop searching and get into a lit side hall immediately; do not remain in the parking lanes waiting to see the full model.', verifiedFor: 'Current game behavior' },
      { levelSlug: 'level-2-pipe-dreams-Walkthrough', role: 'A scripted Smiler chase begins after the dark steam route. The game provides infinite stamina for the sprint.', avoidance: 'Hold sprint, do not look back, keep the next hazard centered, and take the left gated opening at the final split.', verifiedFor: 'Current route guide and video' },
      { levelSlug: 'level-6-the-pipe-run-Walkthrough', role: 'A second short chase combines the Smiler with steam bursts and narrow geometry.', avoidance: 'Follow the marked line, time the steam gaps, and avoid jumping or overtaking unless the lane is clear.', verifiedFor: 'Current route guide' },
      { levelSlug: 'level-run-for-your-life-walkthrough', role: 'The Level ! chase includes a Giant Smiler behind the Partygoer pack.', avoidance: 'Treat the entire hospital route as one committed sprint. Keep the obstacle lane in view and do not turn around to inspect the pack.', verifiedFor: 'Current game behavior and route guide' },
      { levelSlug: 'level-0-2-ancient-path-walkthrough', role: 'A roaming Smiler can appear on the Level 0.2 route inside Level 0.1.', avoidance: 'Use the flashlight on its face from range and keep a retreat line open instead of walking into the fog to confirm it.', verifiedFor: 'Current game behavior' },
      { levelSlug: 'escape-the-backrooms-level-55-1-guide', role: 'A roaming Smiler is one of the required photography targets.', avoidance: 'Keep the camera light on its face, take the photograph from range, confirm the objective, and leave the lane.', verifiedFor: 'Current game behavior and objective route' },
    ],
    relatedEntities: ['bacteria', 'skin-stealer', 'partygoer'],
    modules: ['behaviorMechanics', 'spawnPoints', 'counterStrategy', 'multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'The same face does not mean the same encounter',
    uniqueModuleSummary: 'A blackout, a forced chase, and a roaming Smiler use different rules. Recognising the encounter type is more useful than memorising one universal counter.',
  },
  hound: {
    aliases: ['The Hound'],
    threatScore: 3,
    type: ['chaser'],
    appearance: 'A thin humanoid canine running on all fours, with black hair along its sides and dark eyes with pale pupils.',
    behaviorSummary: 'Hounds are faster than the player. A flashlight beam to the eyes blinds them for a few seconds, and a closed door ends the chase because they cannot open doors.',
    behaviorMechanics: 'Do not try to crouch past a Hound. Aim the flashlight at its eyes when it commits, use the stun to reach the objective or a door, then close the door. On Hard and Nightmare, do not rely on a second stun until the chase has fully reset.',
    spawnPoints: [
      { levelSlug: 'level-3-the-electrical-station-Walkthrough', timing: 'During the breaker route', location: 'Dark Electrical Station corridors', routeEffect: 'A stun creates a short interaction window at a breaker, but the patrol may remain after the panel is complete.' },
      { levelSlug: 'level-5-5-the-beverly-room-Walkthrough', timing: 'Around Room 21 and the corridor loop', location: 'Beverly Room hotel hall', routeEffect: 'The ceiling-code route should be planned before exposing the team to the hall.' },
    ],
    counterStrategy: 'Put the beam on the eyes, move during the blind window, and finish behind a closed door. On Easy and Normal, repeated stuns need spacing; on Hard and Nightmare, assume the first stun is the only one until the chase resets.',
    multiplayerDiff: 'One player holds the beam while another works the breaker or door. The rest stay out of the retreat lane; several people crowding the doorway can waste the entire stun window.',
    appearances: [
      { levelSlug: 'level-3-the-electrical-station-Walkthrough', role: 'Hounds patrol the dark breaker corridors and can interrupt an interaction at the panel.', avoidance: 'Keep the light ready, blind the eyes only when the Hound commits, then complete the breaker or retreat behind a door.', verifiedFor: 'Current game behavior and route guide' },
      { levelSlug: 'level-5-5-the-beverly-room-Walkthrough', role: 'A Hound patrols near Room 21 during the mailbox and ceiling-code route.', avoidance: 'Do not crouch around it. Blind it, move directly to the target room, and close the door rather than testing every room in the exposed hall.', verifiedFor: 'Current game behavior and route guide' },
    ],
    relatedEntities: ['wretch', 'skin-stealer', 'female-deathmoth'],
    modules: ['behaviorMechanics', 'spawnPoints', 'counterStrategy', 'multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'The flashlight buys one clear decision',
    uniqueModuleSummary: 'The stun is not a kill. Decide before using it whether those seconds are for a breaker, a doorway, or a retreat.',
  },
  'male-deathmoth': {
    aliases: ['Male Moth'],
    threatScore: 1,
    type: ['interactive'],
    appearance: 'A small gray moth, usually found hovering in groups. It is harmless and does not share the giant female model or behavior.',
    behaviorSummary: 'Male Deathmoths stay near their spawn area and do not attack. Bug Spray kills them and each usable drop becomes Moth Jelly.',
    behaviorMechanics: 'This is a resource encounter, not a stealth section. Use short controlled sprays, confirm the jelly drop, and return to the progression route instead of emptying the can into a room.',
    spawnPoints: [
      { levelSlug: 'level-5-terror-hotel-Walkthrough', timing: 'During the Hotel key route', location: 'Hotel moth rooms', routeEffect: 'Moth Jelly goes into the food elevator and is exchanged for three keys needed to continue.' },
      { levelSlug: 'level-9-suburbs-and-lab-walkthrough', timing: 'During the Suburbs route', location: 'Level 9 moth groups', routeEffect: 'The moths remain harmless; jelly is an optional sanity and speed resource rather than an enemy to evade.' },
    ],
    counterStrategy: 'Spray only long enough to kill the target group, pick up the Moth Jelly, and keep the can for the next group. Male Deathmoths cannot hurt the player.',
    multiplayerDiff: 'Let one player spray and collect so the group does not waste several canisters on the same cluster. Call the jelly holder before returning to the food elevator.',
    appearances: [
      { levelSlug: 'level-5-terror-hotel-Walkthrough', role: 'Male Deathmoths provide the Moth Jelly used at the Hotel food elevator to receive three progression keys.', avoidance: 'They are harmless. Use Bug Spray deliberately, collect every jelly drop, and take it back to the elevator.', verifiedFor: 'Current game behavior and route guide' },
      { levelSlug: 'level-9-suburbs-and-lab-walkthrough', role: 'Small harmless Deathmoths can appear in Level 9 as an optional source of Moth Jelly.', avoidance: 'Spray only if the resource is useful; do not treat them like the giant female variant or interrupt the route to hide from them.', verifiedFor: 'Current game behavior' },
    ],
    relatedEntities: ['female-deathmoth', 'hound', 'wretch'],
    modules: ['behaviorMechanics', 'spawnPoints', 'counterStrategy', 'multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'The harmless moth is a progression resource',
    uniqueModuleSummary: 'Male Deathmoths matter because of what they drop. Separating them from the hostile female variant prevents players from wasting time hiding from a harmless group.',
  },
  'female-deathmoth': {
    aliases: ['Female Moth'],
    threatScore: 5,
    type: ['chaser'],
    appearance: 'A giant black, white, and gray moth with a skull-like marking across its wings. It is much larger than the harmless male variant.',
    behaviorSummary: 'Female Deathmoths rest on walls and can aggro when approached or illuminated. The Boiler Room uses heat and Bug Spray Valve barriers; the Cave System asks for slow crouched movement past wall-mounted moths.',
    behaviorMechanics: 'In the Boiler Room, 125°F / 51.5°C warns that a female is nearby; 140°F / 60°C means the Hive is very close and the route should be abandoned. The red valve releases Bug Spray gas, not steam, and creates a temporary barrier.',
    spawnPoints: [
      { levelSlug: 'level-5-the-boiler-room-Walkthrough', timing: 'Throughout the Boiler Room route', location: 'Hot corridors and the Hive approach', routeEffect: 'Thermometer readings decide whether to advance; the Bug Spray Valve provides a safe gap at blocked lanes.' },
      { levelSlug: 'level-8-cave-system-walkthrough', timing: 'Across the dark cave tunnels', location: 'Wall and ceiling resting points', routeEffect: 'Direct light and movement pressure turn a quiet passage into a chase.' },
    ],
    counterStrategy: 'Crouch, keep a wide gap, and do not shine the flashlight directly at the moth. In the Boiler Room, retreat at 140°F / 60°C and use a Bug Spray Valve when the route provides one.',
    multiplayerDiff: 'Cross narrow sections one player at a time. One player watches the thermometer or valve while the others wait behind the last cool corner; several lights and footsteps make the approach harder to read.',
    appearances: [
      { levelSlug: 'level-5-the-boiler-room-Walkthrough', role: 'Female Deathmoths and the Hive turn heat readings into the main navigation warning. The red valves release Bug Spray gas that blocks or moves the threat long enough to pass.', avoidance: 'Treat 120–133°F / 49–56°C as a nearby-moth warning and leave immediately at 140°F / 60°C. Crouch, lower the light, and cross only after the gas barrier is active.', verifiedFor: 'Current game behavior and route guide' },
      { levelSlug: 'level-8-cave-system-walkthrough', role: 'Female Deathmoths rest along narrow cave walls and ceilings, where the flashlight can aggro them.', avoidance: 'Crouch before entering their space, keep the beam off the body, and send one player through each bottleneck so the retreat stays clear.', verifiedFor: 'Current game behavior and route guide' },
    ],
    relatedEntities: ['male-deathmoth', 'skin-stealer', 'hound'],
    modules: ['behaviorMechanics', 'spawnPoints', 'counterStrategy', 'multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'Heat tells you when not to enter',
    uniqueModuleSummary: 'The thermometer is not flavor text: 125°F signals nearby danger, 140°F signals the Hive, and the red Bug Spray Valve is the route-control tool.',
  },
  partygoer: {
    aliases: ['Partygoer'],
    threatScore: 5,
    type: ['interactive', 'chaser'],
    appearance: 'A yellow humanoid with blood around its mouth, hands, and legs, usually holding a balloon. It may stand at a fixed point or roam depending on the level.',
    behaviorSummary: 'Level Fun uses close-range detection, tables, and balloon distractions. Level ! is a forced chase. Fun+ adds roaming Partygoers, while Level 52 turns crouch timing into an escort rule.',
    behaviorMechanics: 'Read the room before choosing the tactic. Hide under a table after breaking sight in patrol areas; throw or pop a balloon only when it pulls the threat away from a planned lane; never try to wait out the scripted Level ! chase.',
    spawnPoints: [
      { levelSlug: 'level-fun-the-party-rooms-Walkthrough', timing: 'Across the Party Rooms', location: 'Static and patrol positions near tables', routeEffect: 'A nearby table is the reset; a balloon can pull a blocking Partygoer away from the intended path.' },
      { levelSlug: 'level-run-for-your-life-walkthrough', timing: 'At the chase trigger', location: 'Level ! hospital corridor', routeEffect: 'Six Partygoers join the Giant Smiler chase, so the only plan is forward movement.' },
      { levelSlug: 'escape-the-backrooms-level-fun-plus-guide', timing: 'Across the party, arcade, and Funhouse sections', location: 'Roaming patrol rooms', routeEffect: 'Tables remain the dependable reset while the Party Host phase releases additional pursuit pressure.' },
    ],
    counterStrategy: 'In patrol rooms, crouch, keep table access, and use balloons only as deliberate distractions. In Level !, sprint the known obstacle line. In Level 52, copy the Partypooper’s crouch timing instead of passing it.',
    multiplayerDiff: 'Cross a patrol sightline one at a time and call the nearest table. During a chase, follow one lane rather than overtaking through furniture. In Level 52, the entire group should mirror the escort’s crouch cue.',
    appearances: [
      { levelSlug: 'level-fun-the-party-rooms-Walkthrough', role: 'Partygoers guard the Party Rooms; getting too close or entering their view starts a chase, while tables and balloons provide the designed reset and distraction.', avoidance: 'Crouch, keep a table within reach, break sight before hiding, and use a balloon only to clear the next lane.', verifiedFor: 'Current game behavior and route guide' },
      { levelSlug: 'level-run-for-your-life-walkthrough', role: 'A pack of Partygoers runs in front of a Giant Smiler through the hospital chase.', avoidance: 'Sprint the marked route, clear obstacles cleanly, and do not turn around or attempt to hide in the chase lane.', verifiedFor: 'Current game behavior and route guide' },
      { levelSlug: 'escape-the-backrooms-level-fun-plus-guide', role: 'Three Partygoers roam the Party and Arcade sections; the Funhouse adds pressure when the Party Host spots the group or the timer advances.', avoidance: 'Use tables as the reset, avoid close-range checks in the dark arcade, and leave an objective immediately when the patrol enters the room.', verifiedFor: 'Current game behavior and site video route' },
      { levelSlug: 'escape-the-backrooms-level-52-guide', role: 'A static Partygoer encounter is tied to the Partypooper escort. Failing to crouch can trigger the attack and kill the companion first.', avoidance: 'Stay behind the Partypooper, crouch when it crouches, and do not rush past the escort into the trigger area.', verifiedFor: 'Current game behavior and route guide' },
    ],
    relatedEntities: ['smiler', 'scratcher', 'mr-kitty'],
    modules: ['behaviorMechanics', 'spawnPoints', 'counterStrategy', 'multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'One visual theme, several rule sets',
    uniqueModuleSummary: 'The table, balloon, escort cue, and forced chase each belong to a different encounter. Carrying the previous room’s tactic into the next room is the common mistake.',
  },
  scratcher: {
    aliases: ['The Scratcher'],
    threatScore: 3,
    type: ['chaser'],
    appearance: 'A thin gray humanoid moving on all fours, with oversized hands and legs, no visible facial features, and glowing red eyes. The Level 421 variants are visibly injured and bandaged.',
    behaviorSummary: 'Scratchers are blind but hear extremely well. Noise starts a chase that is faster than the player, so survival depends on a nearby hiding point or a deliberate fire-alarm distraction.',
    behaviorMechanics: 'In The End, fire alarms pull the Scratcher away from a tape aisle and the two tables are the safe hiding points. In Level 421, hide under a stretcher, in the ball pit beside a basketball hoop, or inside a room with the door closed.',
    spawnPoints: [
      { levelSlug: 'level-the-end-library-updated-guide', timing: 'During the tape collection route', location: 'The End library', routeEffect: 'One Scratcher patrols the aisles until the tapes are entered at the computer; alarms create temporary collection windows.' },
      { levelSlug: 'escape-the-backrooms-level-421-plastic-mariana-guide', timing: 'Across the hospital and Discovery Center route', location: 'Level 421 corridors', routeEffect: 'Two injured variants turn stretchers, closable rooms, and the ball pit beside a hoop into actual survival tools.' },
    ],
    counterStrategy: 'Stay quiet, identify the hiding point before interacting, and use a fire alarm only after choosing the tape aisle. If a chase begins, do not race it down the hall; reach the table, stretcher, hoop-side ball pit, or closed room.',
    multiplayerDiff: 'One player controls the noisy objective or alarm while the others hold the chosen hide. Extra footsteps and simultaneous interactions can start a chase before the route is ready.',
    appearances: [
      { levelSlug: 'level-the-end-library-updated-guide', role: 'One Scratcher patrols while tapes are collected. Fire alarms distract it, and it stops being the active threat after the computer sequence is completed.', avoidance: 'Choose the next tape aisle first, pull an alarm, collect during the distraction, and return to one of the two hiding tables.', verifiedFor: 'Current game behavior and route guide' },
      { levelSlug: 'escape-the-backrooms-level-421-plastic-mariana-guide', role: 'Two injured Scratchers patrol the Level 421 route and react to noise around the hospital and Bruce’s Discovery Center.', avoidance: 'Keep a stretcher, closable room, or the ball pit beside a basketball hoop in mind. Enter the hide fully and wait for the chase to reset.', verifiedFor: 'Current game behavior and video route' },
    ],
    relatedEntities: ['wretch', 'partygoer', 'skin-stealer'],
    modules: ['behaviorMechanics', 'spawnPoints', 'counterStrategy', 'multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'The hide must exist before the noise',
    uniqueModuleSummary: 'A Scratcher is faster than the player once alerted. The useful decision happens earlier: which table, stretcher, ball pit, or closable room ends the chase?',
  },
  wretch: {
    aliases: ['Wretched'],
    threatScore: 3,
    type: ['chaser'],
    appearance: 'A former Wanderer whose sanity loss has left it as a red, skinless humanoid with exposed tissue.',
    behaviorSummary: 'The Level 6 Wretch cannot see in the darkness and is tracked as a red LiDAR dot. Level 9 Wretches can see, carry crowbars, and open doors; the Abandoned Outpost specimen also carries the Admin Card.',
    behaviorMechanics: 'Do not apply the Level 6 “blind and quiet” rule everywhere. In Level 6, crouch and listen for breathing. In Level 9, close and lock a room door because the Wretch can open an unlocked one. At the Outpost, use a locker or vent.',
    spawnPoints: [
      { levelSlug: 'level-6-lights-out-walkthrough', timing: 'After the LiDAR scanner is found', location: 'Lights Out maze', routeEffect: 'The red LiDAR dot, breathing, and short scans tell the player when to crouch and move along the side of the corridor.' },
      { levelSlug: 'level-9-suburbs-and-lab-walkthrough', timing: 'Inside six houses and the Abandoned Outpost', location: 'Level 9 interiors', routeEffect: 'House Wretches can see and open doors; the Outpost Wretch guards the Admin Card and requires a locker or vent reset.' },
    ],
    counterStrategy: 'In Level 6, watch the red LiDAR dot, crouch when it nears the screen center, and pass along the wall. In Level 9, listen for footsteps, retreat into a room, then close and lock the door. At the Outpost, use the locker or vent.',
    multiplayerDiff: 'In Level 6, one player scans and leads while the rest leave a full retreat gap. In Level 9 houses, one player checks the room while teammates keep the doorway clear and ready to lock.',
    appearances: [
      { levelSlug: 'level-6-lights-out-walkthrough', role: 'A Wretch inhabits the dark maze. It cannot see there, appears as a red dot on LiDAR, and can be tracked by breathing when close.', avoidance: 'Use short scans, crouch as the dot moves toward the screen center, and pass along the side without sprinting or crowding it.', verifiedFor: 'Current game behavior and route guide' },
      { levelSlug: 'level-9-suburbs-and-lab-walkthrough', role: 'Wretches occupy six houses and the Abandoned Outpost. The house variants can see and open doors; the Outpost Wretch carries the Admin Card and a crowbar.', avoidance: 'Listen for footsteps in houses, close and lock the door after retreating, and use the Outpost locker or vent before collecting the card.', verifiedFor: 'Current game behavior and route guide' },
    ],
    relatedEntities: ['hound', 'scratcher', 'female-deathmoth'],
    modules: ['behaviorMechanics', 'spawnPoints', 'counterStrategy', 'multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'The same Wretch follows different senses',
    uniqueModuleSummary: 'Level 6 rewards silence because the Wretch cannot see there. Level 9 punishes anyone who assumes that rule still applies: those Wretches see and open unlocked doors.',
  },
  'mr-kitty': {
    aliases: ['Kitty'],
    threatScore: 5,
    type: ['interactive', 'chaser'],
    appearance: 'A tall, lanky black humanoid with pointed limbs, white eyes, wrinkled skin, and no visible mouth.',
    behaviorSummary: 'Mr. Kitty stops moving while the targeted player watches it. When not watched, it approaches, periodically teleports, can appear behind the player, and can open doors.',
    behaviorMechanics: 'The doll hunt is an attention problem. Reacquire Mr. Kitty before each doorway, back into rooms where possible, and keep searches short enough that the targeted player can restore the sightline before it moves too close.',
    spawnPoints: [
      { levelSlug: 'escape-the-backrooms-level-974-kittys-house-guide', timing: 'A few seconds after entering Kitty’s House', location: 'Level 974 rooms and lobby', routeEffect: 'Every doll sound pulls the camera away from the entity, while teleports and door opening invalidate old safe positions.' },
    ],
    counterStrategy: 'Keep Mr. Kitty in view and move backward through thresholds. If it is missing, stop the doll search and check the last doorway and the space behind the player before continuing.',
    multiplayerDiff: 'The current route targets one player, and another teammate cannot satisfy that player’s eye-contact check. The targeted player watches Mr. Kitty while the others search, carry dolls, and keep the sightline clear.',
    appearances: [
      { levelSlug: 'escape-the-backrooms-level-974-kittys-house-guide', role: 'Mr. Kitty controls the full five-doll search by freezing under observation and moving or teleporting whenever the targeted player looks away.', avoidance: 'The targeted player keeps direct sight, backs through doors, and reacquires after every placement. Teammates search without crossing the watcher’s camera line.', verifiedFor: 'Current game behavior and site video route' },
    ],
    relatedEntities: ['partygoer', 'smiler', 'scratcher'],
    modules: ['behaviorMechanics', 'spawnPoints', 'counterStrategy', 'multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'Attention is the defensive resource',
    uniqueModuleSummary: 'Mr. Kitty cannot be solved with a locked door. The repeatable route is watch, move backward, search briefly, place a doll, and reacquire before the next room.',
  },
}

type AppearanceCopy = Pick<EntityLevelAppearance, 'role' | 'avoidance'>

const localizedAppearanceCopy: Record<Exclude<Locale, 'en'>, Record<string, Record<string, AppearanceCopy>>> = {
  de: {
    smiler: {
      'level-1-the-habitable-zone-Walkthrough': { role: 'Wenn die Beleuchtung in der Garage ausfällt, erscheinen Smiler in der Dunkelheit und sind schneller als der Spieler.', avoidance: 'Brecht die Suche sofort ab und lauft in einen beleuchteten Seitengang.' },
      'level-2-pipe-dreams-Walkthrough': { role: 'Nach dem dunklen Dampfabschnitt beginnt eine feste Verfolgung mit unbegrenzter Ausdauer.', avoidance: 'Sprintet ohne zurückzuschauen und nehmt an der letzten Gabelung die linke, vergitterte Öffnung.' },
      'level-6-the-pipe-run-Walkthrough': { role: 'Eine kurze zweite Verfolgung kombiniert den Smiler mit Dampf und engen Rohren.', avoidance: 'Bleibt auf der markierten Linie, wartet die Dampfstöße ab und überholt nicht in Engstellen.' },
      'level-run-for-your-life-walkthrough': { role: 'Im Krankenhaus läuft ein Giant Smiler hinter dem Partygoer-Rudel.', avoidance: 'Behandelt den gesamten Abschnitt als ununterbrochenen Sprint und schaut nicht zurück.' },
      'level-0-2-ancient-path-walkthrough': { role: 'Auf der Level-0.2-Route kann ein frei umherstreifender Smiler erscheinen.', avoidance: 'Haltet sein Gesicht mit der Taschenlampe auf Abstand und geht nicht in den Nebel hinein.' },
      'escape-the-backrooms-level-55-1-guide': { role: 'Ein frei umherstreifender Smiler ist eines der Pflichtmotive.', avoidance: 'Haltet das Kameralicht auf sein Gesicht, fotografiert aus Distanz und verlasst danach den Gang.' },
    },
    hound: {
      'level-3-the-electrical-station-Walkthrough': { role: 'Hounds patrouillieren die dunklen Bereiche mit den Sicherungskästen.', avoidance: 'Blendet die Augen erst beim Angriff und nutzt das kurze Fenster für den Schalter oder eine geschlossene Tür.' },
      'level-5-5-the-beverly-room-Walkthrough': { role: 'Ein Hound patrouilliert nahe Zimmer 21 während der Code-Route.', avoidance: 'Versucht nicht, an ihm vorbeizuschleichen. Blendet ihn, geht direkt zum Zielzimmer und schließt die Tür.' },
    },
    'male-deathmoth': {
      'level-5-terror-hotel-Walkthrough': { role: 'Männliche Deathmoths liefern das Moth Jelly für die drei Schlüssel aus dem Speiseaufzug.', avoidance: 'Sie sind harmlos. Sprüht gezielt, sammelt jedes Jelly ein und kehrt zum Aufzug zurück.' },
      'level-9-suburbs-and-lab-walkthrough': { role: 'Kleine harmlose Deathmoths können in Level 9 optional Moth Jelly liefern.', avoidance: 'Sprüht nur, wenn ihr die Ressource braucht; verstecken müsst ihr euch vor ihnen nicht.' },
    },
    'female-deathmoth': {
      'level-5-the-boiler-room-Walkthrough': { role: 'Weibliche Deathmoths und ihr Nest machen die Temperatur zur wichtigsten Warnung; rote Ventile setzen Insektenspray-Gas frei.', avoidance: '120–133 °F bedeuten Gefahr in der Nähe, bei 140 °F kehrt ihr um. Geht geduckt und passiert erst nach Aktivierung der Gasbarriere.' },
      'level-8-cave-system-walkthrough': { role: 'Weibliche Deathmoths ruhen an Wänden und Decken der engen Höhlen.', avoidance: 'Geht geduckt, leuchtet sie nicht direkt an und passiert Engstellen einzeln.' },
    },
    partygoer: {
      'level-fun-the-party-rooms-Walkthrough': { role: 'Partygoer bewachen die Räume; Tische beenden die Verfolgung und Ballons dienen als Ablenkung.', avoidance: 'Geht geduckt, brecht die Sichtlinie und nutzt einen Ballon nur für einen vorher gewählten Weg.' },
      'level-run-for-your-life-walkthrough': { role: 'Sechs Partygoer laufen vor einem Giant Smiler durch die Krankenhaus-Verfolgung.', avoidance: 'Sprintet die markierte Route, nehmt Hindernisse sauber und versucht nicht, euch zu verstecken.' },
      'escape-the-backrooms-level-fun-plus-guide': { role: 'Drei Partygoer patrouillieren Party- und Arcade-Bereiche; im Funhouse sorgt der Party Host für zusätzlichen Druck.', avoidance: 'Nutzt Tische, vermeidet Nähe in der dunklen Arcade und brecht eine Interaktion ab, sobald die Patrouille den Raum betritt.' },
      'escape-the-backrooms-level-52-guide': { role: 'Die Begegnung ist an die Begleitung des Partypoopers gebunden.', avoidance: 'Bleibt hinter ihm, geht in die Hocke, wenn er es tut, und lauft nicht am Begleiter vorbei.' },
    },
    scratcher: {
      'level-the-end-library-updated-guide': { role: 'Ein Scratcher patrouilliert während der Kassettensuche; die Feueralarme lenken ihn ab.', avoidance: 'Wählt zuerst den nächsten Gang, zieht den Alarm und kehrt zu einem der zwei Verstecktische zurück.' },
      'escape-the-backrooms-level-421-plastic-mariana-guide': { role: 'Zwei verletzte Scratcher reagieren in den Krankenhaus- und Discovery-Center-Gängen auf Geräusche.', avoidance: 'Nutzt eine Trage, den Bällebereich neben einem Basketballkorb oder einen Raum mit geschlossener Tür.' },
    },
    wretch: {
      'level-6-lights-out-walkthrough': { role: 'Der Wretch im dunklen Labyrinth kann dort nicht sehen und erscheint als roter Punkt auf dem LiDAR.', avoidance: 'Scannt kurz, geht geduckt, wenn der Punkt zur Bildschirmmitte wandert, und bleibt an der Wand.' },
      'level-9-suburbs-and-lab-walkthrough': { role: 'Wretches besetzen sechs Häuser und den Außenposten; hier können sie sehen und Türen öffnen.', avoidance: 'Zieht euch in ein Zimmer zurück, schließt und verriegelt die Tür; am Außenposten nutzt ihr Spind oder Lüftung.' },
    },
    'mr-kitty': {
      'escape-the-backrooms-level-974-kittys-house-guide': { role: 'Mr. Kitty kontrolliert die gesamte Puppensuche: Beim Ansehen bleibt er stehen, beim Wegsehen bewegt oder teleportiert er sich.', avoidance: 'Der anvisierte Spieler hält Blickkontakt und geht rückwärts durch Türen; die anderen suchen, ohne die Sichtlinie zu kreuzen.' },
    },
  },
  fr: {
    smiler: {
      'level-1-the-habitable-zone-Walkthrough': { role: 'Quand les lumières du garage s’éteignent, des Smilers apparaissent dans l’obscurité et dépassent le joueur.', avoidance: 'Abandonnez la fouille et rejoignez immédiatement un couloir latéral éclairé.' },
      'level-2-pipe-dreams-Walkthrough': { role: 'Une poursuite imposée commence après la zone sombre et donne une endurance illimitée.', avoidance: 'Sprintez sans vous retourner et prenez l’ouverture grillagée de gauche à la dernière bifurcation.' },
      'level-6-the-pipe-run-Walkthrough': { role: 'Une seconde poursuite courte mêle le Smiler aux jets de vapeur et aux tuyaux étroits.', avoidance: 'Suivez la trajectoire indiquée, passez entre les jets et ne doublez pas dans les passages serrés.' },
      'level-run-for-your-life-walkthrough': { role: 'Un Giant Smiler suit le groupe de Partygoers dans le couloir de l’hôpital.', avoidance: 'Traitez toute la section comme un sprint continu et ne vous retournez pas.' },
      'level-0-2-ancient-path-walkthrough': { role: 'Un Smiler errant peut apparaître sur l’itinéraire du niveau 0.2.', avoidance: 'Maintenez sa face à distance avec la lampe et n’entrez pas dans la brume pour mieux le voir.' },
      'escape-the-backrooms-level-55-1-guide': { role: 'Un Smiler errant fait partie des photos obligatoires.', avoidance: 'Gardez la lumière de l’appareil sur son visage, prenez la photo de loin puis quittez le couloir.' },
    },
    hound: {
      'level-3-the-electrical-station-Walkthrough': { role: 'Les Hounds patrouillent les couloirs sombres des disjoncteurs.', avoidance: 'Aveuglez les yeux au moment de la charge, puis utilisez ces secondes pour le panneau ou une porte fermée.' },
      'level-5-5-the-beverly-room-Walkthrough': { role: 'Un Hound patrouille près de la chambre 21 pendant le trajet du code.', avoidance: 'N’essayez pas de passer accroupi. Aveuglez-le, gagnez la bonne chambre et fermez la porte.' },
    },
    'male-deathmoth': {
      'level-5-terror-hotel-Walkthrough': { role: 'Les Deathmoths mâles fournissent la Moth Jelly échangée contre trois clés au monte-plats.', avoidance: 'Elles sont inoffensives. Pulvérisez avec précision, ramassez chaque gelée et retournez au monte-plats.' },
      'level-9-suburbs-and-lab-walkthrough': { role: 'De petites Deathmoths inoffensives peuvent fournir de la Moth Jelly au niveau 9.', avoidance: 'Pulvérisez seulement si la ressource vous sert ; inutile de vous cacher.' },
    },
    'female-deathmoth': {
      'level-5-the-boiler-room-Walkthrough': { role: 'Les femelles et leur ruche font de la température l’alerte principale ; les vannes rouges libèrent du gaz insecticide.', avoidance: '120–133 °F signalent une femelle proche ; à 140 °F, faites demi-tour. Passez accroupi après avoir activé la barrière de gaz.' },
      'level-8-cave-system-walkthrough': { role: 'Les femelles reposent sur les murs et plafonds des grottes étroites.', avoidance: 'Accroupissez-vous, ne les éclairez pas directement et franchissez les passages un par un.' },
    },
    partygoer: {
      'level-fun-the-party-rooms-Walkthrough': { role: 'Les Partygoers gardent les salles ; les tables servent de cachette et les ballons de diversion.', avoidance: 'Avancez accroupi, cassez la ligne de vue et n’utilisez un ballon que pour dégager un trajet choisi.' },
      'level-run-for-your-life-walkthrough': { role: 'Six Partygoers courent devant un Giant Smiler dans la poursuite de l’hôpital.', avoidance: 'Sprintez sur le trajet indiqué, franchissez proprement les obstacles et ne cherchez pas de cachette.' },
      'escape-the-backrooms-level-fun-plus-guide': { role: 'Trois Partygoers patrouillent les zones Party et Arcade ; le Party Host ajoute de la pression dans la Funhouse.', avoidance: 'Utilisez les tables, évitez la proximité dans l’arcade sombre et quittez l’objectif dès que la patrouille entre.' },
      'escape-the-backrooms-level-52-guide': { role: 'La rencontre dépend de l’escorte du Partypooper.', avoidance: 'Restez derrière lui, accroupissez-vous quand il le fait et ne le dépassez pas.' },
    },
    scratcher: {
      'level-the-end-library-updated-guide': { role: 'Un Scratcher patrouille pendant la collecte des cassettes ; les alarmes incendie le détournent.', avoidance: 'Choisissez l’allée, déclenchez l’alarme puis revenez à l’une des deux tables-cachettes.' },
      'escape-the-backrooms-level-421-plastic-mariana-guide': { role: 'Deux Scratchers blessés réagissent au bruit dans l’hôpital et le Discovery Center.', avoidance: 'Cachez-vous sous une civière, dans la piscine à balles près d’un panier ou dans une pièce dont la porte est fermée.' },
    },
    wretch: {
      'level-6-lights-out-walkthrough': { role: 'Le Wretch du labyrinthe noir ne voit pas et apparaît comme un point rouge sur le LiDAR.', avoidance: 'Scannez brièvement, accroupissez-vous lorsque le point approche du centre et longez le mur.' },
      'level-9-suburbs-and-lab-walkthrough': { role: 'Des Wretches occupent six maisons et l’avant-poste ; ici, ils voient et ouvrent les portes.', avoidance: 'Reculez dans une pièce, fermez et verrouillez la porte ; à l’avant-poste, utilisez le casier ou la bouche d’aération.' },
    },
    'mr-kitty': {
      'escape-the-backrooms-level-974-kittys-house-guide': { role: 'Mr. Kitty contrôle toute la recherche : il se fige sous le regard, puis avance ou se téléporte quand le joueur ciblé détourne les yeux.', avoidance: 'Le joueur ciblé garde le contact visuel et franchit les portes à reculons ; les autres cherchent sans couper son champ de vision.' },
    },
  },
  es: {
    smiler: {
      'level-1-the-habitable-zone-Walkthrough': { role: 'Cuando se apagan las luces del garaje, aparecen Smilers en la oscuridad y corren más que el jugador.', avoidance: 'Dejad de buscar y entrad de inmediato en un pasillo lateral iluminado.' },
      'level-2-pipe-dreams-Walkthrough': { role: 'Tras la zona oscura empieza una persecución fija con resistencia infinita.', avoidance: 'Corred sin mirar atrás y tomad la abertura enrejada de la izquierda en la última bifurcación.' },
      'level-6-the-pipe-run-Walkthrough': { role: 'Una segunda persecución corta combina al Smiler con vapor y tuberías estrechas.', avoidance: 'Seguid la línea marcada, cruzad entre ráfagas y no adelantéis en los pasos estrechos.' },
      'level-run-for-your-life-walkthrough': { role: 'Un Giant Smiler sigue al grupo de Partygoers por el hospital.', avoidance: 'Tratad todo el tramo como un sprint continuo y no miréis atrás.' },
      'level-0-2-ancient-path-walkthrough': { role: 'Puede aparecer un Smiler errante en la ruta del Nivel 0.2.', avoidance: 'Mantenedlo lejos iluminando la cara y no entréis en la niebla para verlo mejor.' },
      'escape-the-backrooms-level-55-1-guide': { role: 'Un Smiler errante forma parte de las fotografías obligatorias.', avoidance: 'Mantened la luz de la cámara sobre la cara, sacad la foto desde lejos y salid del pasillo.' },
    },
    hound: {
      'level-3-the-electrical-station-Walkthrough': { role: 'Los Hounds patrullan los pasillos oscuros de los disyuntores.', avoidance: 'Cegad los ojos cuando cargue y usad esos segundos para el panel o una puerta cerrada.' },
      'level-5-5-the-beverly-room-Walkthrough': { role: 'Un Hound patrulla cerca de la habitación 21 durante la ruta del código.', avoidance: 'No intentéis pasar agachados. Cegadlo, id directos a la habitación correcta y cerrad la puerta.' },
    },
    'male-deathmoth': {
      'level-5-terror-hotel-Walkthrough': { role: 'Las Deathmoths macho proporcionan la Moth Jelly que se cambia por tres llaves en el montaplatos.', avoidance: 'Son inofensivas. Pulverizad con precisión, recoged cada gelatina y volved al montaplatos.' },
      'level-9-suburbs-and-lab-walkthrough': { role: 'En el Nivel 9 pueden aparecer pequeñas Deathmoths inofensivas como fuente opcional de Moth Jelly.', avoidance: 'Usad el spray solo si necesitáis el recurso; no hace falta esconderse.' },
    },
    'female-deathmoth': {
      'level-5-the-boiler-room-Walkthrough': { role: 'Las hembras y su colmena convierten la temperatura en la alerta principal; las válvulas rojas liberan gas insecticida.', avoidance: '120–133 °F avisan de una hembra cercana; a 140 °F, dad la vuelta. Cruzad agachados tras activar la barrera de gas.' },
      'level-8-cave-system-walkthrough': { role: 'Las hembras descansan en las paredes y techos de las cuevas estrechas.', avoidance: 'Agachaos, no las iluminéis directamente y cruzad los pasos de uno en uno.' },
    },
    partygoer: {
      'level-fun-the-party-rooms-Walkthrough': { role: 'Los Partygoers protegen las salas; las mesas sirven de escondite y los globos de distracción.', avoidance: 'Avanzad agachados, romped la línea de visión y usad un globo solo para despejar una ruta prevista.' },
      'level-run-for-your-life-walkthrough': { role: 'Seis Partygoers corren delante de un Giant Smiler en la persecución del hospital.', avoidance: 'Seguid la ruta al sprint, superad bien los obstáculos y no intentéis esconderos.' },
      'escape-the-backrooms-level-fun-plus-guide': { role: 'Tres Partygoers patrullan las zonas Party y Arcade; el Party Host añade presión en la Funhouse.', avoidance: 'Usad las mesas, evitad acercaros en la sala oscura y abandonad el objetivo si entra la patrulla.' },
      'escape-the-backrooms-level-52-guide': { role: 'El encuentro está ligado a la escolta del Partypooper.', avoidance: 'Seguid detrás, agachaos cuando él lo haga y no lo adelantéis.' },
    },
    scratcher: {
      'level-the-end-library-updated-guide': { role: 'Un Scratcher patrulla durante la recogida de cintas; las alarmas de incendios lo distraen.', avoidance: 'Elegid primero el pasillo, activad la alarma y regresad a una de las dos mesas donde se puede ocultar.' },
      'escape-the-backrooms-level-421-plastic-mariana-guide': { role: 'Dos Scratchers heridos responden al ruido en el hospital y el Discovery Center.', avoidance: 'Escondeos bajo una camilla, en la piscina de bolas junto a una canasta o en una sala con la puerta cerrada.' },
    },
    wretch: {
      'level-6-lights-out-walkthrough': { role: 'El Wretch del laberinto oscuro no puede ver y aparece como un punto rojo en el LiDAR.', avoidance: 'Haced barridos cortos, agachaos cuando el punto se acerque al centro y avanzad junto a la pared.' },
      'level-9-suburbs-and-lab-walkthrough': { role: 'Hay Wretches en seis casas y el puesto abandonado; aquí ven y abren puertas.', avoidance: 'Retroceded a una habitación, cerrad y bloquead la puerta; en el puesto, usad el armario o el conducto.' },
    },
    'mr-kitty': {
      'escape-the-backrooms-level-974-kittys-house-guide': { role: 'Mr. Kitty controla toda la búsqueda: se queda quieto si lo miran y se acerca o teletransporta cuando el jugador marcado aparta la vista.', avoidance: 'El jugador marcado mantiene el contacto visual y cruza de espaldas; los demás buscan sin bloquear su línea de visión.' },
    },
  },
}

export function getEntityRecord(addressBar: string): EntityRecord | undefined { return records[addressBar] }

export function getEntityAppearances(locale: Locale, addressBar: string): EntityLevelAppearance[] {
  const appearances = records[addressBar]?.appearances ?? []
  if (locale === 'en') return appearances
  return appearances.map((appearance) => ({
    ...appearance,
    ...(localizedAppearanceCopy[locale][addressBar]?.[appearance.levelSlug] ?? {}),
  }))
}

export function getEntitiesForLevel(locale: Locale, levelSlug: string) {
  return getEntities(locale).flatMap((entity) => {
    const record = records[entity.addressBar]
    const appearance = getEntityAppearances(locale, entity.addressBar).find((entry) => entry.levelSlug === levelSlug)
    return appearance ? [{ entity, appearance, record }] : []
  })
}

export function getRelatedEntityRecords(locale: Locale, addressBar: string) {
  const current = records[addressBar]
  if (!current) return []
  const related = new Set(current.relatedEntities ?? [])
  return getEntities(locale).filter((entity) => related.has(entity.addressBar) && records[entity.addressBar]).map((entity) => ({ entity, record: records[entity.addressBar] }))
}
