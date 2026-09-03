export interface YouTubeChapter {
  startSeconds: number
  label: string
}

interface YouTubeVideoMetadata {
  updatedAt: string
  durationSeconds: number
  chapters?: readonly YouTubeChapter[]
}

const videoMetadata: Record<string, YouTubeVideoMetadata> = {
  _ebQrXMMcb8: { updatedAt: '2026-01-18', durationSeconds: 169, chapters: [
    { startSeconds: 4, label: 'Portrait puzzle: youngest to oldest' },
    { startSeconds: 25, label: 'Collect insecticide and Moth Jelly' },
    { startSeconds: 72, label: 'Trade Moth Jelly for keys' },
    { startSeconds: 98, label: 'Fifth-brick wall shortcut' },
    { startSeconds: 140, label: 'Restart trick for the exit door' },
    { startSeconds: 160, label: 'Leave by elevator' },
  ] },
  _q_HErkpw3M: { updatedAt: '2026-01-18', durationSeconds: 124, chapters: [
    { startSeconds: 5, label: 'Find the thermometer' },
    { startSeconds: 15, label: 'Pass large moths without a flashlight' },
    { startSeconds: 25, label: 'Solve the steam-valve route' },
    { startSeconds: 105, label: 'Final Death Moth chase' },
    { startSeconds: 115, label: 'Choose the real exit door' },
  ] },
  '0hSXEPpTuH4': { updatedAt: '2026-06-15', durationSeconds: 95, chapters: [
    { startSeconds: 0, label: 'True-ending requirements' },
    { startSeconds: 13, label: 'Take the M.E.G. elevator to Level 3999' },
    { startSeconds: 25, label: 'Explore the secret Arcade area' },
    { startSeconds: 39, label: 'Power the four master cabinets' },
    { startSeconds: 51, label: 'Talk to the janitor' },
    { startSeconds: 73, label: 'The janitor unlocks the exit' },
    { startSeconds: 92, label: 'Trigger the Final Escape ending' },
  ] },
  '2Giiy2ixJNw': { updatedAt: '2026-01-19', durationSeconds: 321, chapters: [
    { startSeconds: 5, label: 'Normal television puzzle' },
    { startSeconds: 100, label: 'Avoid the Curtain Spirit' },
    { startSeconds: 150, label: 'Use the slide-tackle to push a television' },
    { startSeconds: 240, label: 'One-television elevator shortcut' },
    { startSeconds: 310, label: 'Exit Level 188' },
  ] },
  '3FChsY_BfUs': { updatedAt: '2026-01-18', durationSeconds: 89, chapters: [
    { startSeconds: 5, label: 'Multiplayer trigger warning' },
    { startSeconds: 40, label: 'Take the left-side jump' },
    { startSeconds: 60, label: 'Use the jump-crouch movement technique' },
    { startSeconds: 85, label: 'Reach the exit door' },
  ] },
  '5IO2o0TgH5k': { updatedAt: '2026-01-18', durationSeconds: 132, chapters: [
    { startSeconds: 0, label: 'Window trap warning' },
    { startSeconds: 25, label: 'Count the stools' },
    { startSeconds: 32, label: 'Count the tables' },
    { startSeconds: 35, label: 'Count the water dispensers' },
    { startSeconds: 70, label: 'Cross the camera maze and press the security button' },
    { startSeconds: 115, label: 'Reach the exit stairwell' },
  ] },
  '6Ypd5PZsXBs': { updatedAt: '2026-01-18', durationSeconds: 75, chapters: [
    { startSeconds: 0, label: 'Route toward Level 3' },
    { startSeconds: 28, label: 'Run-jump stamina technique' },
    { startSeconds: 37, label: 'Pick up the flashlight' },
    { startSeconds: 45, label: 'Time the steam hazards' },
    { startSeconds: 55, label: 'Survive the Smiler chase' },
    { startSeconds: 68, label: 'Take the left exit hole' },
  ] },
  '7eDAm964Cv4': { updatedAt: '2026-01-18', durationSeconds: 208, chapters: [
    { startSeconds: 5, label: 'Three possible Room 235 codes' },
    { startSeconds: 35, label: 'Solve the mailbox puzzle' },
    { startSeconds: 60, label: 'Avoid the Hound' },
    { startSeconds: 175, label: 'Read the ceiling code' },
    { startSeconds: 195, label: 'Unlock Room 235' },
  ] },
  AN6K0M1pz1Y: { updatedAt: '2026-06-15', durationSeconds: 154, chapters: [
    { startSeconds: 0, label: 'Find the shutter-gate entrance' },
    { startSeconds: 16, label: 'Swipe the M.E.G. card' },
    { startSeconds: 25, label: 'Enter the infinite stairs' },
    { startSeconds: 60, label: 'Low-FPS stair descent' },
    { startSeconds: 108, label: 'Spot floor 94' },
    { startSeconds: 111, label: 'Jump into the spiral void' },
    { startSeconds: 121, label: 'Wake up in the bedroom' },
    { startSeconds: 139, label: 'Look out over the rolling hills' },
    { startSeconds: 144, label: 'Trigger The Suburbs ending' },
  ] },
  ckxN2YKqFuQ: { updatedAt: '2026-01-18', durationSeconds: 232, chapters: [
    { startSeconds: 5, label: 'Stealth basics' },
    { startSeconds: 17, label: 'Hide under tables' },
    { startSeconds: 73, label: 'Balloon distraction technique' },
    { startSeconds: 115, label: 'Time the Partygoer patrols' },
    { startSeconds: 200, label: 'Cross the final checkered room' },
    { startSeconds: 225, label: 'Exit toward the Poolrooms' },
  ] },
  'd-Xwm5CY4tM': { updatedAt: '2026-06-14', durationSeconds: 197, chapters: [
    { startSeconds: 7, label: 'Find the bounty note' },
    { startSeconds: 25, label: 'Follow the Sweeper guide' },
    { startSeconds: 65, label: 'Copy the guide’s crouching route' },
    { startSeconds: 95, label: 'Avoid the Curtain Monster' },
  ] },
  D223jekpV4Q: { updatedAt: '2026-06-14', durationSeconds: 626, chapters: [
    { startSeconds: 1, label: 'Enter the Fun+ lobby' },
    { startSeconds: 25, label: 'Solve the balloon-key puzzle' },
    { startSeconds: 68, label: 'Pop the four balloons in the centre maze' },
    { startSeconds: 165, label: 'Read the glow-stick drawing' },
    { startSeconds: 180, label: 'Sneak past the blind Partygoer' },
    { startSeconds: 198, label: 'Place glow sticks on the symbols' },
    { startSeconds: 290, label: 'Submit keys at the claw machine' },
    { startSeconds: 358, label: 'Unlock the exit door' },
  ] },
  e9sJpWs4iYc: { updatedAt: '2026-01-18', durationSeconds: 403, chapters: [
    { startSeconds: 0, label: 'Solve the elevator colour password' },
    { startSeconds: 55, label: 'Find the garage keys' },
    { startSeconds: 80, label: 'Trap the Skin-Stealer' },
    { startSeconds: 192, label: 'Low-graphics visibility demonstration' },
    { startSeconds: 255, label: 'Solve the Hub computer puzzle' },
    { startSeconds: 350, label: 'Complete the tunnel chase' },
  ] },
  FDk9KG4pB4E: { updatedAt: '2026-01-18', durationSeconds: 219, chapters: [
    { startSeconds: 35, label: 'Swim-speed technique' },
    { startSeconds: 42, label: 'Improve underwater visibility' },
    { startSeconds: 115, label: 'Reach the lighthouse and flare gun' },
    { startSeconds: 170, label: 'Find the underwater cave exit' },
  ] },
  hDsXOxSmbLU: { updatedAt: '2026-01-18', durationSeconds: 279, chapters: [
    { startSeconds: 5, label: 'Open the M.E.G. door and collect insecticide' },
    { startSeconds: 35, label: 'Evade the Skin-Stealer' },
    { startSeconds: 160, label: 'Use the moths-go-left rule' },
    { startSeconds: 180, label: 'Cross the suspension bridge' },
    { startSeconds: 190, label: 'Optional parkour shortcut' },
  ] },
  HGS4_EGr1m4: { updatedAt: '2026-01-19', durationSeconds: 70, chapters: [
    { startSeconds: 5, label: 'Explore the Arcade' },
    { startSeconds: 25, label: 'Find the ticket marked 931' },
    { startSeconds: 40, label: 'Unlock the keypad door' },
    { startSeconds: 50, label: 'Take the M.E.G. elevator' },
  ] },
  I3iu31tuNu0: { updatedAt: '2026-06-14', durationSeconds: 34, chapters: [
    { startSeconds: 0, label: 'Level 363 entrance overview' },
    { startSeconds: 4, label: 'Original developer-cheat requirement' },
    { startSeconds: 7, label: 'Trigger the spider grab' },
    { startSeconds: 11, label: 'Trigger the death-respawn route' },
    { startSeconds: 14, label: 'Spawn inside Level 363' },
    { startSeconds: 21, label: 'Check the knocking door' },
    { startSeconds: 27, label: 'Return through the hotel hallway' },
  ] },
  'iC5-aFb7-ag': {
    updatedAt: '2026-01-18',
    durationSeconds: 191,
    chapters: [
      { startSeconds: 0, label: 'Version update and route overview' },
      { startSeconds: 33, label: 'Use the Right-Hand Rule from spawn' },
      { startSeconds: 45, label: 'Find all four ladder fragments' },
      { startSeconds: 79, label: 'Reach the exit door and avoid Bacteria' },
      { startSeconds: 98, label: 'Cross the Trap Room safely' },
      { startSeconds: 120, label: 'Rescue a fallen teammate with rope' },
      { startSeconds: 143, label: 'Solo recovery route and Bacteria behavior' },
      { startSeconds: 170, label: 'Set Gamma and collect the flashlight' },
    ],
  },
  JlcjsuhqqH8: { updatedAt: '2026-01-18', durationSeconds: 427, chapters: [
    { startSeconds: 0, label: 'Light-panel overview' },
    { startSeconds: 35, label: 'Find the first breakers' },
    { startSeconds: 145, label: 'Handle the Hound section' },
    { startSeconds: 280, label: 'Solve the wire puzzle' },
    { startSeconds: 415, label: 'Turn all lights green and exit' },
  ] },
  kEZQ5NJM8sQ: { updatedAt: '2026-01-19', durationSeconds: 635, chapters: [
    { startSeconds: 5, label: 'Locate the map and computers' },
    { startSeconds: 45, label: 'Optional wall shortcut' },
    { startSeconds: 75, label: 'Avoid the Wretch' },
    { startSeconds: 190, label: 'Solve the laboratory puzzle' },
    { startSeconds: 240, label: 'Cure the entity and collect the keycard' },
  ] },
  LpiHcFB49Sk: { updatedAt: '2026-01-18', durationSeconds: 89, chapters: [
    { startSeconds: 5, label: 'Spawn points and Hub warning' },
    { startSeconds: 50, label: 'Avoid the deep-water trap' },
    { startSeconds: 72, label: 'Use the sanity-regeneration area' },
    { startSeconds: 85, label: 'Find the red exit door' },
  ] },
  LVHeNjt0XQ0: { updatedAt: '2026-01-19', durationSeconds: 740, chapters: [
    { startSeconds: 10, label: 'Squat-jump technique near the raft' },
    { startSeconds: 240, label: 'Cross the micro bridge' },
    { startSeconds: 410, label: 'F11 window-mode shortcut' },
    { startSeconds: 675, label: 'Enter Fun+ through the tubes' },
  ] },
  LysnApdBzxY: { updatedAt: '2026-06-14', durationSeconds: 309, chapters: [
    { startSeconds: 0, label: 'Enter the Graffiti plaza' },
    { startSeconds: 8, label: 'Collect the speed drink and pull the switch' },
    { startSeconds: 37, label: 'Take the left side of the maze' },
    { startSeconds: 49, label: 'Locate the first body' },
    { startSeconds: 57, label: 'Carry a body without dropping it' },
    { startSeconds: 71, label: 'Jam the fan with the first body' },
    { startSeconds: 90, label: 'Collect more speed drinks' },
    { startSeconds: 105, label: 'Sneak past Bacteria' },
    { startSeconds: 122, label: 'Carry the remaining bodies' },
    { startSeconds: 165, label: 'Turn all four coloured holes on' },
    { startSeconds: 302, label: 'Jump into the exit tube' },
  ] },
  pkGEH8cdQZ4: { updatedAt: '2026-01-18', durationSeconds: 78, chapters: [
    { startSeconds: 0, label: 'Follow the FUN graffiti' },
    { startSeconds: 20, label: 'Run-jump stamina technique' },
    { startSeconds: 35, label: 'Dodge the steam vents' },
    { startSeconds: 48, label: 'Survive the Smiler chase' },
    { startSeconds: 70, label: 'Reach the red ladders' },
  ] },
  PRsArou9ipY: { updatedAt: '2026-06-14', durationSeconds: 242, chapters: [
    { startSeconds: 0, label: 'Enter Level 55.1' },
    { startSeconds: 7, label: 'Find the camera and use the solo photo target' },
    { startSeconds: 27, label: 'Drop the transport car before descending' },
    { startSeconds: 53, label: 'Photograph the car' },
    { startSeconds: 70, label: 'Climb down the shaft' },
    { startSeconds: 102, label: 'Evade the fast Bacteria' },
    { startSeconds: 141, label: 'Pass the Smiler' },
    { startSeconds: 165, label: 'Photograph statues and the Skin-Stealer' },
    { startSeconds: 181, label: 'Use the checkpoint restart if needed' },
    { startSeconds: 195, label: 'Ride the lift for the normal ending' },
    { startSeconds: 222, label: 'Take the hidden Wrong Door route' },
  ] },
  sYQfhIlponU: { updatedAt: '2026-06-14', durationSeconds: 285, chapters: [
    { startSeconds: 0, label: 'Enter the Crazy Growth facility' },
    { startSeconds: 5, label: 'Read the keep-moving warning' },
    { startSeconds: 13, label: 'Solo and multiplayer elevator ropes' },
    { startSeconds: 60, label: 'Find the knife' },
    { startSeconds: 81, label: 'Cut the rope and break the glass floor' },
    { startSeconds: 111, label: 'Find the four wall buttons' },
    { startSeconds: 161, label: 'Unlock the exit gate' },
    { startSeconds: 240, label: 'Ride the elevator to Level 11' },
  ] },
  tDD7YKWHY9Y: { updatedAt: '2026-06-14', durationSeconds: 64, chapters: [
    { startSeconds: 0, label: 'Wake up in the M.E.G. bunker' },
    { startSeconds: 18, label: 'Explore the bunker hallways' },
    { startSeconds: 25, label: 'Swipe the M.E.G. ID card' },
    { startSeconds: 35, label: 'Find the path to Level 931' },
    { startSeconds: 45, label: 'Locate the central elevator' },
    { startSeconds: 50, label: 'Choose between H, 3999 and B' },
    { startSeconds: 59, label: 'Unlock the next level' },
  ] },
  TvYjhNwfDSI: { updatedAt: '2026-01-19', durationSeconds: 317, chapters: [
    { startSeconds: 5, label: 'Read the blue map and door logic' },
    { startSeconds: 30, label: 'Disable the Smiling Eye trap' },
    { startSeconds: 85, label: 'Optional ledge-jump shortcut' },
    { startSeconds: 295, label: 'Turn all gates green and trap the entity' },
  ] },
  uGpIdqnQq8w: { updatedAt: '2026-06-15', durationSeconds: 739, chapters: [
    { startSeconds: 0, label: 'Access Level 974 with the M.E.G. card' },
    { startSeconds: 18, label: 'Follow the right wall through the LiDAR maze' },
    { startSeconds: 41, label: 'Enter Kitty’s House' },
    { startSeconds: 54, label: 'Start the doll quest' },
    { startSeconds: 71, label: 'First encounter with Kitty' },
    { startSeconds: 74, label: 'Keep Kitty in sight' },
    { startSeconds: 107, label: 'Follow doll sound cues and search rooms' },
    { startSeconds: 189, label: 'Place dolls on the lobby chairs' },
    { startSeconds: 324, label: 'Enter rooms backwards' },
    { startSeconds: 504, label: 'Place the final dolls' },
    { startSeconds: 681, label: 'Stand in the spotlight' },
    { startSeconds: 725, label: 'Trigger The Pink House ending' },
  ] },
  UNGLQ3pgFJM: { updatedAt: '2026-01-18', durationSeconds: 198, chapters: [
    { startSeconds: 45, label: 'Find the LiDAR scanner' },
    { startSeconds: 55, label: 'Map the darkness with LiDAR' },
    { startSeconds: 90, label: 'Encounter the Wretch' },
    { startSeconds: 120, label: 'Crouch through the stealth section' },
    { startSeconds: 185, label: 'Reach the M.E.G. exit door' },
  ] },
  VCNPh9_dLZI: { updatedAt: '2026-01-19', durationSeconds: 453, chapters: [
    { startSeconds: 5, label: 'Improve visibility in the Fields' },
    { startSeconds: 25, label: 'Keep moving through the wheat' },
    { startSeconds: 45, label: 'Follow the left-right-left route' },
    { startSeconds: 95, label: 'Optional fence-jump shortcut' },
    { startSeconds: 140, label: 'Arrive at the Level 3999 Arcade' },
  ] },
  W4WGueErhlI: { updatedAt: '2026-01-19', durationSeconds: 117, chapters: [
    { startSeconds: 5, label: 'Wait for the team before triggering the chase' },
    { startSeconds: 45, label: 'Optional chainsaw door shortcut' },
    { startSeconds: 95, label: 'Follow the left-right-left-right route' },
  ] },
  WdizI7rFMso: { updatedAt: '2026-01-18', durationSeconds: 376, chapters: [
    { startSeconds: 5, label: 'Curfew and nightfall rules' },
    { startSeconds: 35, label: 'Timed route to the castle' },
    { startSeconds: 100, label: 'Use fences and houses as cover' },
    { startSeconds: 225, label: 'Solve the castle shape-box puzzle' },
    { startSeconds: 290, label: 'Roller-coaster clown safe position' },
  ] },
  xqjOhlKuGiw: { updatedAt: '2026-01-18', durationSeconds: 99, chapters: [
    { startSeconds: 5, label: 'Collect the VHS tapes' },
    { startSeconds: 10, label: 'Use the fire alarm' },
    { startSeconds: 30, label: 'Hide under the table' },
    { startSeconds: 45, label: 'Survive the blackout' },
    { startSeconds: 95, label: 'Find the exit ladder' },
  ] },
} as const

export function getYouTubeMetadataEntries(): ReadonlyArray<readonly [string, YouTubeVideoMetadata]> {
  return Object.entries(videoMetadata)
}

export interface YouTubeVideo {
  id: string
  url: string
  updatedAt: string
  durationSeconds: number
  chapters?: readonly YouTubeChapter[]
}

export function getYouTubeVideo(html: string): YouTubeVideo | undefined {
  const id = html.match(/youtube\.com\/embed\/([A-Za-z0-9_-]+)/)?.[1]
  if (!id || !(id in videoMetadata)) return undefined
  const metadata = videoMetadata[id]
  return { id, url: `https://www.youtube.com/watch?v=${id}`, ...metadata }
}
