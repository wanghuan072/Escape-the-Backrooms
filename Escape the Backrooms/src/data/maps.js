// Maps data - flat array structure
export default [
  {
    id: 1,
    title: 'Map:Level 0 Map',
    pageTitle: 'Escape the Backrooms Map: Level 0 Map',
    addressBar: 'level-0-map',
    description: 'Complete navigation map for Level 0 with all spawn points, key locations, and exit routes.',
    imageUrl: '/images/maps/map-01.webp',
    imageAlt: 'Level 0 Map',
    mapImageUrl: '/images/maps/map-01-map.webp',
    category: 'Early Game',
    tags: ['Navigation', 'Spawn Points', 'Keys'],
    isHome: true,
    seo: {
      title: 'Level 0 Map Walkthrough: Spawn Points, Ladder & Exit Routes - Escape the Backrooms',
      description: 'Complete map guide for Level 0. Find all spawn points, locate the ladder to get the key, unlock the door, navigate pitfalls, and find exits to Level 1, Level 0.11, and The Hub.',
      keywords: 'Level 0, map, spawn points, ladder, key, door, pitfalls, vent, exit, Level 1, Level 0.11, The Hub, Bacteria, Walkthrough',
    },
    mapPoints: [
      {
        id: 1,
        title: '1: Vent',
        content: 'A vent that leads to the exits that lead to Level 0.11 and The Hub (not included on the map).',
      },
      {
        id: 2,
        title: '2: Spawn 3',
        content: 'Location of where a player could spawn.',
      },
      {
        id: 3,
        title: '3: Spawn 4',
        content: 'Location of where a player could spawn.'
      },
      {
        id: 4,
        title: '4: Alternate Exit',
        content: 'Exit to Level 1 and includes a liminal space.',
      },
      {
        id: 5,
        title: '5: Spawn 1',
        content: 'Location of where a player could spawn.',
      },
      {
        id: 6,
        title: '6: Spawn 2',
        content: 'Location of where a player could spawn.',
      },
      {
        id: 7,
        title: '7: Door',
        content: 'Locked door that needs a key.',
      },
      {
        id: 8,
        title: '8: Pitfalls',
        content: 'Location near the exit of Level 0. If you fall, you will enter a more dangerous, open area of Level 0.',
      },
      {
        id: 9,
        title: '9: Normal Exit',
        content: 'Exit to Level 1.',
      },
      {
        id: 10,
        title: '10: Ladder',
        content: 'Use this ladder to grab the key used to unlock the door.',
      },
    ],
    detailsHtml: `
      <h2>Map Overview</h2>
      <p>This map shows the complete layout of Level 0, including all spawn points, key locations, and exit routes. Level 0 is the first level in Escape the Backrooms, resembling an endless 1970s office-like maze with yellow wallpaper and damp carpet.</p>

      <h2>Important Locations</h2>
      <ul>
        <li><strong>Ladder (Point 10):</strong> Use this ladder to grab the key used to unlock the door. You need to collect all broken ladder pieces and repair it first.</li>
        <li><strong>Door (Point 7):</strong> Locked door that needs a key. The key can be obtained by using the ladder.</li>
        <li><strong>Pitfalls (Point 8):</strong> Location near the exit of Level 0. If you fall, you will enter a more dangerous, open area of Level 0.</li>
        <li><strong>Vent (Point 1):</strong> A vent that leads to the exits that lead to Level 0.11 and The Hub (not included on the map).</li>
      </ul>

      <h2>Exit Routes</h2>
      <p>Level 0 has two main exits:</p>
      <ul>
        <li><strong>Normal Exit (Point 9):</strong> Exit to Level 1. This is the standard progression route.</li>
        <li><strong>Alternate Exit (Point 4):</strong> Exit to Level 1 and includes a liminal space. An alternative route for progression.</li>
      </ul>

      <h2>Spawn Points</h2>
      <p>Players can spawn at multiple locations on this map:</p>
      <ul>
        <li><strong>Spawn 1 (Point 5):</strong> Location of where a player could spawn.</li>
        <li><strong>Spawn 2 (Point 6):</strong> Location of where a player could spawn.</li>
        <li><strong>Spawn 3 (Point 2):</strong> Location of where a player could spawn.</li>
        <li><strong>Spawn 4 (Point 3):</strong> Location of where a player could spawn.</li>
      </ul>

      <h2>Level Information</h2>
      <p><strong>Survival Difficulty:</strong> Class 1 - Minimal Danger</p>
      <p><strong>Sanity Danger:</strong> Class 0 - No Sanity Risk</p>
      <p><strong>Entities:</strong> Bacteria (first appearance)</p>
      <p><strong>Items:</strong> Flashlight, Rope</p>
      <p><strong>Objective:</strong> Collect broken ladder pieces, repair the ladder, use it to get the key, unlock the door, and escape to Level 1.</p>
    `,
  },
  {
    id: 2,
    title: 'Map:Level 1 Floor 1 Map',
    pageTitle: 'Escape the Backrooms Map: Level 1 Floor 1 Map',
    addressBar: 'level-1-floor-1-map',
    description: 'Detailed map of Level 1 Floor 1 showing key locations and escape routes.',
    imageUrl: '/images/maps/map-02.webp',
    imageAlt: 'Level 1 Floor 1 Map',
    mapImageUrl: '/images/maps/map-02-map.webp',
    category: 'Early Game',
    tags: ['Keys', 'Wardrobes', 'Section II'],
    isHome: true,
    seo: {
      title: 'Level 1 Floor 1 Map Walkthrough: Car Room & Color Code Elevator - Escape the Backrooms',
      description: 'Complete map guide for Level 1 Floor 1 (The Habitable Zone). Find the Car Room with colored cars, enter the color code in the elevator, and navigate to other floors.',
      keywords: 'Level 1, Floor 1, The Habitable Zone, map, Car Room, color code, elevator, colored cars, entrance, Walkthrough',
    },
    mapPoints: [
      {
        id: 1,
        title: '1: Car Room',
        content: 'The Room with the cars.',
      },
      {
        id: 2,
        title: '2: Elevator',
        content: 'Elevator where you need to put in the Color Code.',
      },
      {
        id: 3,
        title: '3: Entrance',
        content: 'The Entrance of The Floor.',
      },
    ],
    detailsHtml: `
      <h2>Map Overview</h2>
      <p>This map shows Level 1 Floor 1, the first floor of Level 1 (Habitable Zone). This floor contains important locations including the Car Room, Elevator, and the main entrance.</p>

      <h2>Key Locations</h2>
      <ul>
        <li><strong>Car Room (Point 1):</strong> The Room with the cars. This is a notable landmark on this floor.</li>
        <li><strong>Elevator (Point 2):</strong> Elevator where you need to put in the Color Code. This elevator is essential for navigating between floors in Level 1.</li>
        <li><strong>Entrance (Point 3):</strong> The Entrance of The Floor. This is where players typically enter Floor 1.</li>
      </ul>

      <h2>Navigation</h2>
      <p>To progress through Level 1, you need to:</p>
      <ol>
        <li>Enter Floor 1 through the Entrance</li>
        <li>Navigate to the Elevator</li>
        <li>Enter the Color Code to access other floors</li>
        <li>Collect keys from wardrobes on different floors</li>
        <li>Use the keys to unlock the exit</li>
      </ol>

      <h2>Level Information</h2>
      <p><strong>Category:</strong> Early Game</p>
      <p><strong>Entities:</strong> Hound</p>
      <p><strong>Mechanic:</strong> Exploration, Key Collection, Color Code Puzzle</p>
    `,
  },
  {
    id: 3,
    title: 'Map:Level 1 Floor 3 Map',
    pageTitle: 'Escape the Backrooms Map: Level 1 Floor 3 Map',
    addressBar: 'level-1-floor-3-map',
    description: 'Detailed map of Level 1 Floor 3 showing key locations and escape routes.',
    imageUrl: '/images/maps/map-03.webp',
    imageAlt: 'Level 1 Floor 3 Map',
    mapImageUrl: '/images/maps/map-03-map.webp',
    category: 'Early Game',
    tags: ['Keys', 'Keyholes'],
    isHome: true,
    seo: {
      title: 'Level 1 Floor 3 Map Walkthrough: Elevator Exits & Navigation - Escape the Backrooms',
      description: 'Complete map guide for Level 1 Floor 3 (The Habitable Zone). Navigate elevator exits for different floors, use downward ramp, and find the darkness entrance spawn point.',
      keywords: 'Level 1, Floor 3, The Habitable Zone, map, elevator exits, first floor exit, second floor exit, third floor exit, downward ramp, darkness entrance, spawn, Walkthrough',
    },
    mapPoints: [
      {
        id: 1,
        title: '1: First Floor Exit',
        content: 'Where the elevator spawns on the first floor.',
      },
      {
        id: 2,
        title: '2: Downward Ramp',
        content: 'Ramp that leads to the floor below.',
      },
      {
        id: 3,
        title: '3: Third Floor Exit',
        content: 'Where the elevator spawns on the third floor.',
      },
      {
        id: 4,
        title: '4: Darkness Entrance',
        content: 'The room where you spawn (image shows what people would see exiting said room).',
      },
      {
        id: 5,
        title: '5: Second Floor Exit',
        content: 'Where the elevator spawns on the second floor.',
      },
    ],
    detailsHtml: `
      <h2>Map Overview</h2>
      <p>This map shows Level 1 Floor 3, the third floor of Level 1. This floor contains elevator exits for different floors and navigation routes.</p>

      <h2>Elevator Exits</h2>
      <p>The elevator can spawn at different locations on this floor, connecting to other floors:</p>
      <ul>
        <li><strong>First Floor Exit (Point 1):</strong> Where the elevator spawns on the first floor. This connects Floor 3 to Floor 1.</li>
        <li><strong>Second Floor Exit (Point 5):</strong> Where the elevator spawns on the second floor. This connects Floor 3 to Floor 2.</li>
        <li><strong>Third Floor Exit (Point 3):</strong> Where the elevator spawns on the third floor. This is the main exit point on Floor 3.</li>
      </ul>

      <h2>Navigation</h2>
      <ul>
        <li><strong>Downward Ramp (Point 2):</strong> Ramp that leads to the floor below. Use this to navigate between floors without the elevator.</li>
        <li><strong>Darkness Entrance (Point 4):</strong> The room where you spawn (image shows what people would see exiting said room). This is typically the starting point on Floor 3.</li>
      </ul>

      <h2>Level Information</h2>
      <p><strong>Category:</strong> Early Game</p>
      <p><strong>Mechanic:</strong> Multi-floor Navigation, Elevator System</p>
      <p><strong>Note:</strong> This floor is part of the larger Level 1 structure. You may need to collect keys from other floors before progressing.</p>
    `,
  },
  {
    id: 4,
    title: 'Map:Level 2 Map',
    pageTitle: 'Escape the Backrooms Map: Level 2 Map',
    addressBar: 'level-2-map',
    description: 'Complete navigation map for Level 2 showing all routes and key locations.',
    imageUrl: '/images/maps/map-04.webp',
    imageAlt: 'Level 2 Map',
    mapImageUrl: '/images/maps/map-04-map.webp',
    category: 'Early Game',
    tags: ['Navigation', 'Pipe Dreams'],
    isHome: false,
    seo: {
      title: 'Level 2 Pipe Dreams Map Walkthrough: Level 3 & Level Fun Entrances - Escape the Backrooms',
      description: 'Complete map guide for Level 2 Pipe Dreams. Navigate the maintenance tunnel, find the Level 3 Entrance (Electrical Station) and Level Fun Entrance, and avoid steam hazards.',
      keywords: 'Level 2, Pipe Dreams, map, Level 3 entrance, Electrical Station, Level Fun entrance, maintenance tunnel, steam hazard, navigation, Walkthrough',
    },
    mapPoints: [
      {
        id: 1,
        title: '1: Level 3 Entrance',
        content: 'This is the Entrance that leads to Level 3, also known as the Electrical Station.',
      },
      {
        id: 2,
        title: '2: Level Fun Entrance',
        content: 'This is the Entrance that leads to Level Fun.',
      },
    ],
    detailsHtml: `
      <h2>Map Overview</h2>
      <p>This map shows the complete layout of Level 2 (Pipe Dreams), featuring steam pipes and narrow corridors. This level serves as a transition area with connections to other levels.</p>

      <h2>Level Entrances</h2>
      <p>Level 2 has connections to other levels:</p>
      <ul>
        <li><strong>Level 3 Entrance (Point 1):</strong> This is the Entrance that leads to Level 3, also known as the Electrical Station. This is the standard progression route.</li>
        <li><strong>Level Fun Entrance (Point 2):</strong> This is the Entrance that leads to Level Fun. This is an alternative route, but Level Fun is extremely dangerous.</li>
      </ul>

      <h2>Navigation</h2>
      <p>Level 2 features steam pipes and narrow corridors. Navigate carefully through the maze-like structure to find the exits. The level is relatively safe but can be disorienting due to its repetitive layout.</p>

      <h2>Progression</h2>
      <p>To progress normally, head to the Level 3 Entrance. Avoid the Level Fun Entrance unless you're prepared for extreme difficulty.</p>

      <h2>Level Information</h2>
      <p><strong>Category:</strong> Early Game</p>
      <p><strong>Mechanic:</strong> Navigation, Transition</p>
      <p><strong>Entities:</strong> None (relatively safe)</p>
    `,
  },
  {
    id: 5,
    title: 'Map:Level 37 Map',
    pageTitle: 'Escape the Backrooms Map: Level 37 Map',
    addressBar: 'level-37-map',
    description: 'Complete navigation map for Level 37 The Poolrooms showing Dark-Tiled Rooms, spawn points, and exit routes.',
    imageUrl: '/images/maps/map-05.webp',
    imageAlt: 'Level 37 Map',
    mapImageUrl: '/images/maps/map-05-map.webp',
    category: 'Mid Game',
    tags: ['The Poolrooms', 'Dark-Tiled Rooms', 'Hydrolitis Plague'],
    isHome: false,
    seo: {
      title: 'Level 37 The Poolrooms Map Walkthrough: Dark-Tiled Rooms & Spawn Points - Escape the Backrooms',
      description: 'Complete map guide for Level 37 The Poolrooms. Navigate spawn points, avoid Dark-Tiled Rooms with Hydrolitis Plague, find Level ! entrance and The Hub Door, and avoid Hot Water Zone.',
      keywords: 'Level 37, The Poolrooms, map, Dark-Tiled Rooms, Hydrolitis Plague, spawn points, Level !, The Hub Door, Hot Water Zone, sanity restoration, Walkthrough',
    },
    mapPoints: [
      {
        id: 1,
        title: '1: Dark-Tiled Room',
        content: "This is a Dark-Tiled Room. It's a room with Dark Blue Tiles and the Waters in it are infected with the Hydrolitis Plague. Before Part 4 Released, this Dark-Tiled Room didn't have any Water.",
      },
      {
        id: 2,
        title: '2: Dark-Tiled Room',
        content: "This is a Dark-Tiled Room. It's a room with Dark Blue Tiles and the Waters in it are infected with the Hydrolitis Plague.",
      },
      {
        id: 3,
        title: '3: Spawn 2',
        content: 'Location of where a player could spawn.',
      },
      {
        id: 4,
        title: '4: Spawn 3',
        content: 'Location of where a player could spawn.',
      },
      {
        id: 5,
        title: '5: Level ! Entrance',
        content: 'This is the Entrance that leads to Level !, also known as Run for your Life!',
      },
      {
        id: 6,
        title: '6: The Hot Water Zone',
        content: 'This is an area in Level 37 that appears to be a Spiral Staircase. The Staircase leads down to Boiling Hot Water and if you touch it, you will die.',
      },
      {
        id: 7,
        title: '7: The Hub Door',
        content: "This is The Hub Door that leads to The Hub. In the Game's Release, a Dark-Tiled Room was here. This was changed in Part 2.",
      },
      {
        id: 8,
        title: '8: Spawn 4',
        content: 'Location of where a player could spawn.',
      },
      {
        id: 9,
        title: '9: Spawn 1',
        content: 'Location of where a player could spawn.',
      },
      {
        id: 10,
        title: '10: Dark-Tiled Room',
        content: "This is a Dark-Tiled Room. It's a room with Dark Blue Tiles and the Waters in it are infected with the Hydrolitis Plague.",
      },
    ],
    detailsHtml: `
      <h2>Map Overview</h2>
      <p>This map shows the complete layout of Level 37 (The Poolrooms), a large complex of pools slightly submerged in lukewarm water. This level provides natural light and fresh air to restore sanity, but contains dangerous Dark-Tiled Rooms and hazards.</p>

      <h2>Dark-Tiled Rooms</h2>
      <p>Level 37 contains several Dark-Tiled Rooms, which are rooms with Dark Blue Tiles. The waters in these rooms are infected with the Hydrolitis Plague. Before Part 4 Released, some Dark-Tiled Rooms didn't have any Water. These rooms are marked on the map and should be avoided entirely:</p>
      <ul>
        <li><strong>Dark-Tiled Room (Point 1):</strong> This is a Dark-Tiled Room. It's a room with Dark Blue Tiles and the Waters in it are infected with the Hydrolitis Plague. Before Part 4 Released, this Dark-Tiled Room didn't have any Water.</li>
        <li><strong>Dark-Tiled Room (Point 2):</strong> This is a Dark-Tiled Room. It's a room with Dark Blue Tiles and the Waters in it are infected with the Hydrolitis Plague.</li>
        <li><strong>Dark-Tiled Room (Point 10):</strong> This is a Dark-Tiled Room. It's a room with Dark Blue Tiles and the Waters in it are infected with the Hydrolitis Plague.</li>
      </ul>

      <h2>Spawn Points</h2>
      <p>Players can spawn at multiple locations:</p>
      <ul>
        <li><strong>Spawn 1 (Point 9):</strong> Location of where a player could spawn.</li>
        <li><strong>Spawn 2 (Point 3):</strong> Location of where a player could spawn.</li>
        <li><strong>Spawn 3 (Point 4):</strong> Location of where a player could spawn.</li>
        <li><strong>Spawn 4 (Point 8):</strong> Location of where a player could spawn.</li>
      </ul>

      <h2>Important Locations</h2>
      <ul>
        <li><strong>Level ! Entrance (Point 5):</strong> This is the Entrance that leads to Level !, also known as Run for your Life! This is an extremely dangerous chase level.</li>
        <li><strong>The Hub Door (Point 7):</strong> This is The Hub Door that leads to The Hub. In the Game's Release, a Dark-Tiled Room was here. This was changed in Part 2.</li>
        <li><strong>The Hot Water Zone (Point 6):</strong> This is an area in Level 37 that appears to be a Spiral Staircase. The Staircase leads down to Boiling Hot Water and if you touch it, you will die.</li>
      </ul>

      <h2>Navigation</h2>
      <p>Level 37 is a relatively safe level that restores sanity, but you must avoid the Dark-Tiled Rooms and Hot Water Zone. Navigate carefully to find the exits to Level ! or The Hub.</p>

      <h2>Level Information</h2>
      <p><strong>Category:</strong> Mid Game</p>
      <p><strong>Survival Difficulty:</strong> Class 1 - Mostly Safe</p>
      <p><strong>Sanity Danger:</strong> Class 0 - Restoration of Sanity</p>
      <p><strong>Mechanic:</strong> Navigation, Hazard Avoidance</p>
      <p><strong>Warning:</strong> Avoid the Dark-Tiled Rooms as the water is infected with Hydrolitis Plague. Also avoid the Hot Water Zone as it will kill you instantly.</p>
    `,
  },
  {
    id: 6,
    title: 'Map:Level 3 Map',
    pageTitle: 'Escape the Backrooms Map: Level 3 Map',
    addressBar: 'level-3-map',
    description: 'Complete navigation map for Level 3 Electrical Station showing breaker locations, zones, and elevator.',
    imageUrl: '/images/maps/map-06.webp',
    imageAlt: 'Level 3 Map',
    mapImageUrl: '/images/maps/map-06-map.webp',
    category: 'Early Game',
    tags: ['Electrical Station', 'Breakers', 'Hounds', 'Zones'],
    isHome: false,
    seo: {
      title: 'Level 3 Electrical Station Map Walkthrough: Breakers, Zones & Hounds - Escape the Backrooms',
      description: 'Complete map guide for Level 3 Electrical Station. Navigate through East Substation, West Substation, and Generator zones. Find and activate all breakers, avoid Hounds, and solve fuse box puzzles to unlock the exit.',
      keywords: 'Level 3, Electrical Station, map, breakers, East Substation, West Substation, Generator, Hound, fuse box, Triway, Colored Wires, electric puddle, Walkthrough',
    },
    mapPoints: [
      {
        id: 1,
        title: '1: Breaker',
        content: 'Breaker.',
      },
      {
        id: 2,
        title: '2: Breaker',
        content: 'Breaker.',
      },
      {
        id: 3,
        title: '3: Breaker',
        content: 'Breaker.',
      },
      {
        id: 4,
        title: '4: Breaker',
        content: 'Breaker.',
      },
      {
        id: 5,
        title: '5: Hound',
        content: 'Hound.',
      },
      {
        id: 6,
        title: '6: Hound',
        content: 'Hound.',
      },
      {
        id: 7,
        title: '7: Breaker',
        content: 'Breaker.',
      },
      {
        id: 8,
        title: '8: Breaker',
        content: 'Breaker.',
      },
      {
        id: 9,
        title: '9: Breaker',
        content: 'Breaker.',
      },
      {
        id: 10,
        title: '10 Breaker',
        content: 'Breaker.',
      },
      {
        id: 11,
        title: '11: Breaker',
        content: 'Breaker.',
      },
      {
        id: 12,
        title: '12: Hound',
        content: 'Hound.',
      },
      {
        id: 13,
        title: '13: Breaker',
        content: 'Breaker.',
      },
      {
        id: 14,
        title: '14: Hound',
        content: 'Hound.',
      },
      {
        id: 15,
        title: '15: Breaker',
        content: 'Breaker.',
      },
      {
        id: 16,
        title: '16: Breaker',
        content: 'Breaker.',
      },
      {
        id: 17,
        title: '17: Breaker',
        content: 'Breaker.',
      },
      {
        id: 18,
        title: '18: Hound',
        content: 'Hound.',
      },
      {
        id: 19,
        title: '19: Breaker',
        content: 'Breaker.',
      },
      {
        id: 20,
        title: '20: Breaker',
        content: 'Breaker.',
      },
      {
        id: 21,
        title: '21: Breaker',
        content: 'Breaker.',
      },
      {
        id: 22,
        title: '22: Breaker',
        content: 'Breaker.',
      },
      {
        id: 23,
        title: '23: Hound',
        content: 'Hound.',
      },
      {
        id: 24,
        title: '24: Breaker',
        content: 'Breaker.',
      },
      {
        id: 25,
        title: '25: Breaker',
        content: 'Breaker.',
      },
      {
        id: 26,
        title: '26: Breaker',
        content: 'Breaker.',
      },
      {
        id: 27,
        title: '27: Breaker',
        content: 'Breaker.',
      },
      {
        id: 28,
        title: '28: Hound',
        content: 'Hound.',
      },
      {
        id: 29,
        title: '29: Hound',
        content: 'Hound.',
      },
      {
        id: 30,
        title: '30: Breaker',
        content: 'Breaker.',
      },
      {
        id: 31,
        title: '31: Breaker',
        content: 'Breaker.',
      },
      {
        id: 32,
        title: '32: Breaker',
        content: 'Breaker.',
      },
      {
        id: 33,
        title: '33: Breaker',
        content: 'Breaker.',
      },
      {
        id: 34,
        title: '34: Hound',
        content: 'Hound.',
      },
      {
        id: 35,
        title: '35: Exit to Level 2',
        content: 'Exit to Level 2.',
      },
      {
        id: 36,
        title: '36: Breaker',
        content: 'Breaker.',
      },
      {
        id: 37,
        title: '37: Breaker',
        content: 'Breaker.',
      },
      {
        id: 38,
        title: '38: Exit to Level 4',
        content: 'Exit to Level 4.',
      },
      {
        id: 39,
        title: '39: Player Spawn',
        content: 'Player Spawn.',
      },
      {
        id: 40,
        title: '40: Breaker',
        content: 'Breaker.',
      },
    ],
    detailsHtml: `
      <h2>Map Overview</h2>
      <p>This map shows the complete layout of Level 3 (Electrical Station), a large abandoned electrical station with three dangerous zones. Players must find and activate breakers (fuse boxes) in each zone to unlock the exit to Level 4.</p>

      <h2>Zones</h2>
      <p>Level 3 is divided into three zones, each becoming progressively more dangerous:</p>
      <ul>
        <li><strong>East Substation (Zone 1):</strong> The first zone. Contains 3 simple fuse boxes that need to be activated. Relatively safe but dark.</li>
        <li><strong>West Substation (Zone 2):</strong> The second zone. Much darker and more dangerous than Zone 1. Contains 3 fuse boxes and 2 Hounds. Use flashlight to blind Hounds.</li>
        <li><strong>Generator (Zone 3):</strong> The most dangerous zone. Very dark, contains puzzle-based fuse boxes (Triway and Colored Wires), Hounds, and electric puddles. Contains 3 fuse boxes.</li>
      </ul>

      <h2>Breakers (Fuse Boxes)</h2>
      <p>Level 3 contains 9 fuse boxes total that need to be activated:</p>
      <ul>
        <li><strong>Zone 1:</strong> 3 simple switch-based fuse boxes</li>
        <li><strong>Zone 2:</strong> 3 simple switch-based fuse boxes</li>
        <li><strong>Zone 3:</strong> 3 puzzle-based fuse boxes (Triway and Colored Wires puzzles)</li>
      </ul>
      <p>All breakers must be activated to unlock the exit to Level 4.</p>

      <h2>Hound Entities</h2>
      <p>Hounds patrol the level, especially in Zone 2 and Zone 3. Use your flashlight to blind them and escape. Be cautious when navigating near these areas.</p>

      <h2>Hazards</h2>
      <ul>
        <li><strong>Electric Puddles:</strong> Found only in Zone 3 (Generator). These electrified puddles will kill you instantly if stepped in. Simply avoid stepping in them.</li>
        <li><strong>Darkness:</strong> The level is very dark, especially in Zone 2 and Zone 3. Use your flashlight to navigate.</li>
      </ul>

      <h2>Objective</h2>
      <p>Find and activate all 9 fuse boxes across the three zones. Zone 1 and Zone 2 have simple switch-based fuse boxes, while Zone 3 has puzzle-based fuse boxes that require solving Triway or Colored Wires puzzles.</p>

      <h2>Level Information</h2>
      <p><strong>Category:</strong> Early Game</p>
      <p><strong>Survival Difficulty:</strong> Class 4 - Severe Danger</p>
      <p><strong>Sanity Danger:</strong> Class 2 - Moderate Sanity Risk</p>
      <p><strong>Mechanic:</strong> Puzzle, Exploration, Breaker Activation, Entity Avoidance</p>
      <p><strong>Entities:</strong> Hound (9 total)</p>
      <p><strong>Items:</strong> Almond Water, Energy Bar, Flashlight</p>
      <p><strong>Warning:</strong> The level is dark and dangerous. Use your flashlight to navigate and blind Hounds. Avoid electric puddles in Zone 3.</p>
    `,
  },
  {
    id: 7,
    title: 'Map: Level 4 Map',
    pageTitle: 'Escape the Backrooms Map: Level 4 Map',
    addressBar: 'level-4-map',
    description: 'Complete navigation map for Level 4 Abandoned Office showing vending machine puzzle, CCTV cameras, and safe zones.',
    imageUrl: '/images/maps/map-07.webp',
    imageAlt: 'Level 4 Map',
    mapImageUrl: '/images/maps/map-07-map.webp',
    category: 'Early Game',
    tags: ['Abandoned Office', 'Vending Machines', 'CCTV', 'Windows'],
    isHome: false,
    seo: {
      title: 'Level 4 Abandoned Office Map Walkthrough: Vending Machine & CCTV Puzzles - Escape the Backrooms',
      description: 'Complete map guide for Level 4 Abandoned Office. Solve vending machine counting puzzles, navigate past CCTV cameras without being spotted, avoid Windows entities, and reach Level 5.',
      keywords: 'Level 4, Abandoned Office, map, vending machine, CCTV, security camera, Windows entity, counting puzzle, crowbar, Walkthrough',
    },
    mapPoints: [
      {
        id: 1,
        title: '1: The Hub Door',
        content: 'This is The Hub Door that leads to The Hub.',
      },
      {
        id: 2,
        title: '2: Level 3 Entrance',
        content: 'This is the Entrance that leads to Level 3, also known as the Electrical Station.',
      },
      {
        id: 3,
        title: '3: First Puzzle Room',
        content: 'This is the first Puzzle Room in the Level which involves Vending Machines.',
      },
      {
        id: 4,
        title: '4: Reset Cameras',
        content: 'If a camera sees you, use this button to reset them and attempt it again.',
      },
      {
        id: 5,
        title: '5: Camera 1',
        content: 'This is a Camera. If you get caught by it, the Level 5 Entrance will be locked.',
      },
      {
        id: 6,
        title: '6: Camera 2',
        content: 'This is a Camera. If you get caught by it, the Level 5 Entrance will be locked.',
      },
      {
        id: 7,
        title: '7: Vent',
        content: 'This is a Vent. If you get caught by a Camera, you can use the Vent to get back to the Start.',
      },
      {
        id: 8,
        title: '8: Camera 3',
        content: 'This is a Camera. If you get caught by it, the Level 5 Entrance will be locked.',
      },
      {
        id: 9,
        title: '9: Camera 4',
        content: 'This is a Camera. If you get caught by it, the Level 5 Entrance will be locked.',
      },
      {
        id: 10,
        title: '10: Level 5 Entrance',
        content: 'This is the Entrance that leads to Level 5, also known as the Terror Hotel.',
      },
    ],
    detailsHtml: `
      <h2>Map Overview</h2>
      <p>This map shows the complete layout of Level 4 (Abandoned Office), an abandoned office building with little trace of people. This level features vending machine puzzles and a CCTV camera system. Sanity doesn't drop in this level, making it a good place to stay at.</p>

      <h2>Important Locations</h2>
      <ul>
        <li><strong>First Puzzle Room (Point 3):</strong> This is the first Puzzle Room in the Level which involves Vending Machines. Solve this puzzle to progress.</li>
        <li><strong>Reset Cameras (Point 4):</strong> If a camera sees you, use this button to reset them and attempt it again. This allows you to retry if you get caught.</li>
        <li><strong>Level 5 Entrance (Point 10):</strong> This is the Entrance that leads to Level 5, also known as the Terror Hotel. This is the main exit, but it will be locked if you get caught by any camera.</li>
        <li><strong>The Hub Door (Point 1):</strong> This is The Hub Door that leads to The Hub. Located in the pillar room.</li>
      </ul>

      <h2>Vending Machine Puzzle</h2>
      <p>In the First Puzzle Room, you'll find 4 different vending machines. Each vending machine is associated with an object (chairs, tables, water coolers, stacks of books). Count how many of that object is in the room, and select the corresponding number on each vending machine. If all values are correct, the door will open.</p>

      <h2>Camera System</h2>
      <p>Level 4 features a camera surveillance system with 4 cameras:</p>
      <ul>
        <li><strong>Camera 1 (Point 5):</strong> This is a Camera. If you get caught by it, the Level 5 Entrance will be locked.</li>
        <li><strong>Camera 2 (Point 6):</strong> This is a Camera. If you get caught by it, the Level 5 Entrance will be locked.</li>
        <li><strong>Camera 3 (Point 8):</strong> This is a Camera. If you get caught by it, the Level 5 Entrance will be locked.</li>
        <li><strong>Camera 4 (Point 9):</strong> This is a Camera. If you get caught by it, the Level 5 Entrance will be locked.</li>
      </ul>
      <p>You must sneak past all 4 cameras without being spotted. If spotted, use shortcuts or the Reset Cameras button to try again.</p>

      <h2>Vent System</h2>
      <p><strong>Vent (Point 7):</strong> This is a Vent. If you get caught by a Camera, you can use a Crowbar to break open the Vent to get back to the Start. This provides a way to restart your attempt.</p>

      <h2>Windows Entities</h2>
      <p>Windows entities can be found at the ends of hallways. These are traps and should be avoided at all costs. Do not approach them.</p>

      <h2>Strategy</h2>
      <ol>
        <li>Enter the First Puzzle Room and solve the vending machine counting puzzle</li>
        <li>Navigate through the cubicle area to find the Reset Cameras button</li>
        <li>Press Reset Cameras button and navigate carefully to avoid all 4 cameras</li>
        <li>If caught, use the Crowbar to break open the Vent and restart</li>
        <li>Once all cameras are avoided, proceed to the Level 5 Entrance</li>
      </ol>

      <h2>Level Information</h2>
      <p><strong>Category:</strong> Early Game</p>
      <p><strong>Survival Difficulty:</strong> Class 0 - Mostly Safe</p>
      <p><strong>Sanity Danger:</strong> Class 0 - No Sanity Risk</p>
      <p><strong>Mechanic:</strong> Puzzle Solving, Stealth, Camera Avoidance</p>
      <p><strong>Entities:</strong> Windows (traps, avoid at all costs)</p>
      <p><strong>Items:</strong> Almond Water, Juice, Energy Bar, Flashlight, Crowbar</p>
      <p><strong>Warning:</strong> Getting caught by any camera will lock the Level 5 Entrance, forcing you to reset and try again.</p>
    `,
  },
  {
    id: 8,
    title: 'Map: Level 9 Map',
    pageTitle: 'Escape the Backrooms Map: Level 9 Map',
    addressBar: 'level-9-map',
    description: 'Complete navigation map for Level 9 The Suburbs showing safe houses, unsafe houses, computers, and Wretch locations.',
    imageUrl: '/images/maps/map-08.webp',
    imageAlt: 'Level 9 Map',
    mapImageUrl: '/images/maps/map-08-map.webp',
    category: 'The Depths',
    tags: ['The Suburbs', 'Safe Houses', 'Unsafe Houses', 'Wretch'],
    isHome: false,
    seo: {
      title: 'Level 9 The Suburbs Map Walkthrough: Safe Houses, Computers & Wretches - Escape the Backrooms',
      description: 'Complete map guide for Level 9 The Suburbs. Navigate between Safe Houses and Unsafe Houses, find and activate computers, avoid Wretches, get Administrator Card from Abandoned Outpost, and unlock Level 10 entrance.',
      keywords: 'Level 9, The Suburbs, map, Safe Houses, Unsafe Houses, computers, Wretch, Administrator Card, Abandoned Outpost, Level 10, The Hub, Walkthrough',
    },
    mapPoints: [
      {
        id: 1,
        title: '1: Safe House',
        content: 'A house that could have a computer, and has no wretch.',
      },
      {
        id: 2,
        title: '2: Entrance to Level 10',
        content: 'The only entrance to Level 10. Opened after getting an Administrator Card from a wretch in the Abandoned Outpost.',
      },
      {
        id: 3,
        title: '3: Unsafe House',
        content: 'A house that could have a computer, but has a wretch.',
      },
      {
        id: 4,
        title: '4: Unsafe House',
        content: 'A house that could have a computer, but has a wretch.',
      },
      {
        id: 5,
        title: '5: Entrance to the Abandoned Outpost',
        content: 'The only entrance to the Abandoned Outpost. Unlocked after turning on all of the computers.',
      },
      {
        id: 6,
        title: '6: Safe House',
        content: 'A house that could have a computer, and has no wretch.',
      },
      {
        id: 7,
        title: '7: Unsafe House',
        content: 'A house that could have a computer, but has a wretch.',
      },
      {
        id: 8,
        title: '8: Gate Spawn',
        content: 'Where everyone spawns after the gate is discovered. Includes the terminal that shows which houses have computers.',
      },
      {
        id: 9,
        title: '9: Unsafe House',
        content: 'A house that could have a computer, but has a wretch.',
      },
      {
        id: 10,
        title: '10: Unsafe House',
        content: 'A house that could have a computer, but has a wretch.',
      },
      {
        id: 11,
        title: '11: Safe House',
        content: 'A house that could have a computer, and has no wretch.',
      },
      {
        id: 12,
        title: '12: Main Spawn',
        content: 'Where everyone spawns until the gate is discovered.',
      },
      {
        id: 13,
        title: '13: Unsafe House',
        content: 'A house that could have a computer, but has a wretch. Also has an entrance to The Hub.',
      },
      {
        id: 14,
        title: '14: Entrance to The Hub',
        content: 'The only entrance in the level to The Hub.',
      },
    ],
    detailsHtml: `
      <h2>Map Overview</h2>
      <p>This map shows the complete layout of Level 9 (The Suburbs), featuring a house-based puzzle system. Players must navigate between Safe Houses and Unsafe Houses to find computers and avoid Wretches.</p>

      <h2>Spawn Points</h2>
      <ul>
        <li><strong>Main Spawn (Point 12):</strong> Where everyone spawns until the gate is discovered. This is the initial spawn point.</li>
        <li><strong>Gate Spawn (Point 8):</strong> Where everyone spawns after the gate is discovered. Includes the terminal that shows which houses have computers.</li>
      </ul>

      <h2>Safe Houses</h2>
      <p>Safe Houses are houses that could have a computer, and have no wretch. These are safe to enter:</p>
      <ul>
        <li><strong>Safe House (Point 1):</strong> A house that could have a computer, and has no wretch.</li>
        <li><strong>Safe House (Point 6):</strong> A house that could have a computer, and has no wretch.</li>
        <li><strong>Safe House (Point 11):</strong> A house that could have a computer, and has no wretch.</li>
      </ul>

      <h2>Unsafe Houses</h2>
      <p>Unsafe Houses are houses that could have a computer, but have a wretch. Enter with caution:</p>
      <ul>
        <li><strong>Unsafe House (Point 3, 4, 7, 9, 10):</strong> Houses that could have a computer, but have a wretch.</li>
        <li><strong>Unsafe House (Point 13):</strong> A house that could have a computer, but has a wretch. Also has an entrance to The Hub.</li>
      </ul>

      <h2>Important Entrances</h2>
      <ul>
        <li><strong>Entrance to Level 10 (Point 2):</strong> The only entrance to Level 10. Opened after getting an Administrator Card from a wretch in the Abandoned Outpost.</li>
        <li><strong>Entrance to the Abandoned Outpost (Point 5):</strong> The only entrance to the Abandoned Outpost. Unlocked after turning on all of the computers.</li>
        <li><strong>Entrance to The Hub (Point 14):</strong> The only entrance in the level to The Hub. Located in an Unsafe House (Point 13).</li>
      </ul>

      <h2>Objective</h2>
      <ol>
        <li>Spawn at Main Spawn (Point 12)</li>
        <li>Explore houses to find computers</li>
        <li>Prioritize Safe Houses to avoid Wretches</li>
        <li>Enter Unsafe Houses carefully if needed for computers</li>
        <li>Turn on all computers to unlock the Abandoned Outpost entrance</li>
        <li>Enter the Abandoned Outpost to get the Administrator Card</li>
        <li>Use the Administrator Card to unlock the Level 10 entrance</li>
      </ol>

      <h2>Strategy</h2>
      <ul>
        <li>Check the terminal at Gate Spawn to see which houses have computers</li>
        <li>Prioritize Safe Houses first</li>
        <li>Be extremely cautious when entering Unsafe Houses due to Wretches</li>
        <li>Use stealth and careful navigation to avoid Wretches</li>
        <li>The Hub entrance is in an Unsafe House, so plan your approach carefully</li>
      </ul>

      <h2>Level Information</h2>
      <p><strong>Category:</strong> The Depths</p>
      <p><strong>Mechanic:</strong> Puzzle, Computer Activation, Entity Avoidance</p>
      <p><strong>Entities:</strong> Wretch</p>
      <p><strong>Difficulty:</strong> Medium to Hard (requires careful planning and stealth)</p>
      <p><strong>Note:</strong> The level features a unique house-based exploration system where players must balance finding computers with avoiding dangerous Wretches.</p>
    `,
  },
]
