// Maps data - flat array structure
export default [
    {
      id: 1,
      title: 'Level 0 Map',
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
      title: 'Level 1 Floor 1 Map',
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
      title: 'Level 1 Floor 3 Map',
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
      title: 'Level 2 Map',
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
      title: 'Level 37 Map',
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
      title: 'Level 3 Map',
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
      title: 'Level 4 Map',
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
      title: 'Level 9 Map',
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
    {
      id: 9, title: 'Escape the Backrooms Level 5 Map: Terror Hotel', addressBar: 'level-5-terror-hotel-map',
      description: 'This Escape the Backrooms Level 5 map guide covers the Main Hall, Hotel and Boiler Room sections, including the painting puzzle and Room 235.',
      imageUrl: '/images/maps/Level_Main_Hall_Map.webp', imageAlt: 'Level 5 Terror Hotel Main Hall map.', imageWidth: 941, imageHeight: 706, mapImageUrl: '/images/maps/Level_Main_Hall_Map.webp',
      introHtml: `<p>This Escape the Backrooms Level 5 map guide covers the Main Hall, Hotel and Boiler Room sections, including the painting puzzle and Room 235.</p>`,
      mapSections: [
        { title: 'The Main Hall', imageUrl: '/images/maps/Level_Main_Hall_Map.webp', imageAlt: 'Level 5 Main Hall map with four numbered guide points.', width: 941, height: 706, callouts: [{ id: 1, x: 53, y: 59 }, { id: 2, x: 28, y: 46 }, { id: 3, x: 53, y: 36 }, { id: 4, x: 77, y: 54 }], mapPoints: [{ id: 1, title: '1: Painting Puzzle', content: 'Press the four paintings from the youngest person to the oldest person to open the Main Hall route.' }, { id: 2, title: '2: Dumbwaiter', content: 'Place one Moth Jelly in the dumbwaiter at a time. Three exchanges return the three keys for the locked gate.' }, { id: 3, title: '3: Elevator to the Hotel', content: 'This is the elevator reached after the three locks on the glass-door route are opened.' }, { id: 4, title: '4: Three-Lock Gate', content: 'Use all three keys here to open the route to the elevator.' }], detailsHtml: `<p><strong>Recommended order:</strong> complete point 1, make three Moth Jelly exchanges at point 2, unlock point 4, then take the elevator at point 3. Bug Spray is available at the lobby desk and is used on Male Deathmoth swarms.</p>` },
        { title: 'The Hotel', imageUrl: '/images/maps/Level_5_Hotel_Map.webp', imageAlt: 'Level 5 Hotel map with four numbered guide points.', width: 941, height: 706, callouts: [{ id: 1, x: 50, y: 51 }, { id: 2, x: 46, y: 41 }, { id: 3, x: 68, y: 67 }, { id: 4, x: 53, y: 62 }], mapPoints: [{ id: 1, title: '1: Mailbox Area', content: 'Use the open mailbox compartments to identify the rooms that must be searched for papers.' }, { id: 2, title: '2: Room 235', content: 'Enter the five-digit ceiling code here after returning the required papers to the mailbox.' }, { id: 3, title: '3: Hotel Room Loop', content: 'Use the numbered rooms and door markers to orient the paper-search loop; the open rooms vary by run.' }, { id: 4, title: '4: Route to the Boiler Room', content: 'Room 235 opens this progression route after the code is entered.' }], detailsHtml: `<p>Collect a paper from each room named by an open mailbox compartment and return it to the mailbox. The completed message reveals the ceiling code. The map helps with room orientation, but it does not promise a fixed paper location because the open compartments change.</p>` },
        { title: 'The Boiler Room', imageUrl: '/images/maps/Level_5_Boiler_Room_Map.webp', imageAlt: 'Level 5 Boiler Room map with four numbered guide points.', width: 941, height: 706, callouts: [{ id: 1, x: 53, y: 39 }, { id: 2, x: 70, y: 37 }, { id: 3, x: 50, y: 42 }, { id: 4, x: 49, y: 91 }], mapPoints: [{ id: 1, title: '1: First Checkpoint Route', content: 'The map marks the first checkpoint-spawn area in the upper middle section.' }, { id: 2, title: '2: Second Checkpoint Route', content: 'The second checkpoint marker is in the upper-right route.' }, { id: 3, title: '3: Bug Spray Pipe Area', content: 'Use the marked Bug Spray pipes to deter Female Deathmoths if they are blocking progress.' }, { id: 4, title: '4: Exit Route', content: 'The final marker is placed by the lower exit route. Confirm the door has an exit sign; the guide warns that other doors can be false exits.' }], detailsHtml: `<p>Follow the checkpoints as recovery landmarks rather than assuming a safe route. Watch the thermometer: the guide states that a reading other than 72 degrees signals nearby danger. Purple doors lead to hives, so identify the exit sign before committing to a door.</p>` },
      ],
      category: 'Main Story', tags: ['Level 5', 'Main Hall', 'Hotel', 'Boiler Room'], isHome: false,
      seo: { title: 'Escape the Backrooms Level 5 Map: Terror Hotel Guide', description: 'This Escape the Backrooms Level 5 map guide covers the Main Hall, Hotel and Boiler Room sections, including the painting puzzle and Room 235.', keywords: 'Escape the Backrooms Level 5 map, Terror Hotel guide, Main Hall, Hotel, Boiler Room, Room 235' },
      mapPoints: [{ id: 1, title: 'Main Hall', content: 'Solve the painting puzzle, collect Moth Jelly, and use the dumbwaiter for keys.' }, { id: 2, title: 'Hotel', content: 'Use the mailbox papers and Room 235 code to reach the Boiler Room.' }, { id: 3, title: 'Boiler Room', content: 'Use the thermometer and Bug Spray pipes to locate the marked exit.' }],
      detailsHtml: `<h2>How to Use This Level 5 Map</h2><p>Level 5 is easier to understand when it is treated as three linked objectives rather than one long maze. The Main Hall is a compact setup area: solve the painting order, convert Moth Jelly into keys, and use the key gate. The Hotel is a variable room-search puzzle: the open mailbox compartments tell you which rooms matter on that run. The Boiler Room is a navigation and survival section where the thermometer, checkpoints, pipes, and exit sign matter more than speed.</p><p>Keep the map open while deciding where the group will regroup. In the Main Hall, regroup before the dumbwaiter so nobody spends Moth Jelly by accident. In the Hotel, one player can read the mailbox while others move to the named rooms. In the Boiler Room, call out the nearest checkpoint and Bug Spray pipe before entering a long corridor. These habits turn the maps into a team communication tool instead of a picture that is only checked after someone is lost.</p><h2>Main Hall Walkthrough and Numbered Points</h2><p>Start with point 1, the painting puzzle. The instruction is about the people shown in the paintings, not about the locations of the buttons: activate them from the youngest person to the oldest. Once the route opens, collect Bug Spray from the lobby desk and look for clusters of Male Deathmoths. Bug Spray changes a cluster into Moth Jelly. Do not assume one jelly is enough, because the elevator route requires three keys.</p><p>At point 2, place one Moth Jelly in the dumbwaiter and send it down. When it returns, take the key and repeat the same exchange until the party has three keys. The safe habit is to count keys out loud before leaving this side of the hall. Moth Jelly can also be consumed, so using it as a consumable before the key objective is complete can force another search for a swarm.</p><p>Point 4 is the three-lock gate. Use the three keys there, then continue through the newly opened route to point 3, the elevator to the Hotel. The numbers are deliberately not a speedrun route: they are a checklist. If the gate will not open, first verify that all three keys were collected rather than repeatedly trying the elevator door.</p><h2>Hotel Walkthrough: Mailbox, Rooms, and Room 235</h2><p>The Hotel begins at point 1, the mailbox area. Some mailbox compartments are open, and their room numbers determine the rooms that need papers on that playthrough. Read the open compartments before splitting up. A player who starts checking every visible room can waste time and create more noise around the Hound or Skin-Stealer.</p><p>Point 3 is the room-search loop. The map gives room numbers and door types so players can call a route clearly, but it does not claim that the same paper is always in the same room. Collect a paper from each required room and return it to the mailbox. The completed message points to the code above; look upward rather than searching the floor for a new keypad clue.</p><p>Point 2 is Room 235. Enter the five-digit ceiling code only after the mailbox objective is complete. This opens point 4, the route to the Boiler Room. The key beginner mistake here is to treat Room 235 as an optional side room. It is the progression door, while the rest of the Hotel map is primarily about finding the required paper rooms safely.</p><h2>Boiler Room Survival and Exit</h2><p>The Boiler Room does not reward blindly following the shortest visible corridor. Point 1 and point 2 are checkpoint routes, so they are useful recovery landmarks after a failed attempt. If a teammate dies, use the map to agree on the next checkpoint instead of scattering back through the whole area. This keeps the group from repeatedly entering the same dangerous dead end.</p><p>Point 3 highlights a Bug Spray pipe area. Female Deathmoths are the major hazard in this section, and the pipes are a practical response when one blocks progress. The thermometer is equally important: according to the guide, a reading other than 72 degrees means danger is nearby. Do not treat a quiet hallway as safe if the temperature reading says otherwise.</p><p>Point 4 is the lower exit route. The correct door has an exit sign. The map also shows hives and other doors, which is why “a door at the end of a corridor” is not enough evidence that you have finished the level. Purple doors lead to hives, so pause long enough to identify the sign before opening a door during a chase.</p><h2>Common Deaths and New Player Mistakes</h2><ul><li><strong>Using Moth Jelly too early:</strong> keep three for the dumbwaiter before treating it as a stamina item.</li><li><strong>Ignoring the mailbox order:</strong> check the open compartments first; room availability and papers are not a fixed single route.</li><li><strong>Entering Room 235 without the ceiling code:</strong> it is a progression door, not a random room to brute-force.</li><li><strong>Rushing every Boiler Room door:</strong> confirm the exit sign and avoid purple hive doors.</li><li><strong>Forgetting recovery landmarks:</strong> call out checkpoints and Bug Spray pipes before moving into unfamiliar corridors.</li></ul><h2>Level 5 FAQ</h2><h3>Where is the elevator in Level 5?</h3><p>The first elevator is shown at Main Hall point 3. Reach it by solving the paintings, exchanging three Moth Jelly for keys at the dumbwaiter, and using the keys on the three-lock gate at point 4.</p><h3>How do you get the dumbwaiter keys?</h3><p>Use Bug Spray on Male Deathmoth clusters to obtain Moth Jelly. Place one Moth Jelly in the dumbwaiter at a time; three exchanges give the three keys needed for the gate.</p><h3>What opens Room 235?</h3><p>Return the papers from the rooms listed by open mailbox compartments. The completed message reveals a code on the ceiling, which is entered at Room 235.</p><h3>How do you recognize the Boiler Room exit?</h3><p>Follow the lower exit route, but verify the door has an exit sign. The guide specifically warns that not every door is an exit and that purple doors lead to hives.</p><h2>Source and Map Scope</h2><p>The maps on this page are used as visual references for the Main Hall, Hotel, and Boiler Room. The numbered overlays are guide points for the documented objectives; they do not claim that variable paper rooms, moving entities, or every item spawn stays in one fixed position.</p>`,
    },
    {
      id: 10, title: 'Escape the Backrooms: The End Map', addressBar: 'the-end-map',
      description: 'This Escape the Backrooms The End map guide shows the layout, tape spawns, computer, fire alarms, and the route to Level 94.',
      imageUrl: '/images/maps/The_End_Map.webp', imageAlt: 'The End layout map with shelves, fire alarms, tables, computer, player spawn, and Scratcher marker.', imageWidth: 848, imageHeight: 706, mapImageUrl: '/images/maps/The_End_Map.webp',
      introHtml: `<p>This Escape the Backrooms The End map guide shows the layout, tape spawns, computer, fire alarms, and the route to Level 94.</p>`,
      mapSections: [
        { title: 'The End Layout', imageUrl: '/images/maps/The_End_Map.webp', imageAlt: 'The End layout map with four numbered guide points.', width: 848, height: 706, callouts: [{ id: 1, x: 50, y: 85 }, { id: 2, x: 53, y: 63 }, { id: 3, x: 5, y: 79 }, { id: 4, x: 95, y: 45 }], mapPoints: [{ id: 1, title: '1: Player Start', content: 'Begin here and sweep nearby shelves quietly for tapes.' }, { id: 2, title: '2: Central Computer', content: 'Return here after the required tape count is collected to unlock the damaged-room door.' }, { id: 3, title: '3: Left Fire Alarm', content: 'Triggering an alarm can draw the Scratcher away; it has a cooldown, so use it deliberately.' }, { id: 4, title: '4: Right Fire Alarm', content: 'The second alarm is on the opposite side, enabling a team to redirect the Scratcher before searching the other side.' }], detailsHtml: `<p>The numbered route identifies the start, computer, and both confirmed fire-alarm positions. The map also shows tables, which can be used for hiding. The blue Orb icon belongs to an older map version; current progression is computer, unlocked door, ladder, then vent to Level 94.</p>` },
        { title: 'Average Tape Spawn Reference', imageUrl: '/images/maps/Averagetapespawn.webp', imageAlt: 'Average tape-spawn reference map with four numbered guide points.', width: 805, height: 601, callouts: [{ id: 1, x: 57, y: 81 }, { id: 2, x: 52, y: 55 }, { id: 3, x: 15, y: 74 }, { id: 4, x: 95, y: 28 }], mapPoints: [{ id: 1, title: '1: Starting Area', content: 'Use this point to decide which shelf block the team searches first.' }, { id: 2, title: '2: Computer Return', content: 'This is the central objective return point after the tape requirement is met.' }, { id: 3, title: '3: Left Alarm Side', content: 'Use this side as one half of a split search after the Scratcher is distracted.' }, { id: 4, title: '4: Right Alarm Side', content: 'Search this opposite side while the distraction gives the team space.' }], detailsHtml: `<p>The colored dots show six-game observations, not fixed tape spawns. Use the numbers to split the room into a practical search order, then use the colored observations only as a secondary priority when checking shelves.</p>` },
      ],
      category: 'Main Story', tags: ['The End', 'Tapes', 'Computer', 'Fire Alarm'], isHome: false,
      seo: { title: 'Escape the Backrooms: The End Map & Tape Spawn Guide', description: 'This Escape the Backrooms The End map guide shows the layout, tape spawns, computer, fire alarms, and the route to Level 94.', keywords: 'Escape the Backrooms The End map, tape spawn guide, computer, fire alarms, Level 94' },
      mapPoints: [{ id: 1, title: 'Computer', content: 'Return here after collecting the required tapes.' }, { id: 2, title: 'Fire Alarms', content: 'Two alarms on opposite sides can distract the Scratcher.' }, { id: 3, title: 'Tables', content: 'The two tables can be used as hiding places when chased.' }, { id: 4, title: 'Tape Reference', content: 'The second image records average observations from six games, not guaranteed spawns.' }],
      detailsHtml: `<h2>How to Read The End Map</h2><p>The End is a single library room, but its objective creates two different jobs: searching shelves for tapes and surviving the Scratcher while the search is happening. The layout map gives fixed landmarks—the player start, central computer, two fire alarms, tables, and shelf blocks. The average tape-spawn map is not a promise of a tape at every dot; it is a six-game observation that helps decide which shelf groups deserve attention first.</p><p>Use the two maps together. The layout tells you where you are and where safety tools sit. The tape reference helps choose an efficient sweep order. Do not treat colored observation dots as a route that must be followed in sequence. If the Scratcher is close, the safest available shelf group is more important than a theoretical high-priority spawn location.</p><h2>Numbered Layout Walkthrough</h2><p>Point 1 is the player start. Before the team spreads out, agree on a simple split: one player checks one side of the room, another checks the opposite shelves, and someone keeps the central landmarks in mind. Movement, tape pickup, and other noise can attract the Scratcher, so a quiet, deliberate sweep is safer than several players repeatedly crossing the entire room.</p><p>Point 2 is the central computer. It is not just a visual landmark; it is the objective return point. The required tape total depends on player count. The Fandom guide states 24 tapes for one player, 32 for two players, and 48 for three or four players. After the requirement is met, return to the computer to unlock the door to the damaged room. Do not assume that collecting the last tape alone ends the level.</p><p>Point 3 and point 4 are the left and right fire alarms. They are on opposite sides of the room, which makes them useful for coordinated searches. Triggering one can draw the Scratcher toward that side, creating time to check shelves on the other side. The alarms cannot be used continuously: they have a cooldown, so use an alarm when the team has a clear next search area rather than activating it without a plan.</p><h2>Tables, Shelves, and the Scratcher</h2><p>The layout map also shows two tables. If the Scratcher starts chasing a player, the documented defensive option is to run to a table and hide underneath it until the entity gives up. This is different from using a fire alarm. An alarm is proactive—it redirects the entity before a search. A table is reactive—it gives a player an immediate hiding option after being noticed. Knowing which tool you need prevents the common mistake of running across the room toward an alarm after the chase has already started.</p><p>The Scratcher is a sound-sensitive threat, so the map supports quieter path planning. Avoid having the whole group bunch up at a single shelf block unless a player needs help. When an alarm has moved the Scratcher, take that opportunity to clear a complete nearby shelf cluster instead of grabbing one tape and running back through the center. A clean sweep reduces repeated crossings and makes it easier to remember which side still needs searching.</p><h2>Tape Spawn Reference and Search Order</h2><p>The second image records average tape observations across six games. Its colored dots are useful as a priority signal, not a guarantee. Start from point 1, choose a shelf block, and clear it from one end to the other. Then move to point 3 or point 4 depending on which side is safer and whether an alarm can create a distraction. Return to point 2 only once the required total is reached.</p><p>For solo play, a practical order is to clear shelves near the starting side, move through the central shelves when the Scratcher is elsewhere, then finish the opposite side. For multiplayer, assign sides rather than assigning individual colored dots. Tell teammates when an area is clear and when an alarm has been used. This is more reliable than calling out every possible tape position, because actual spawns vary between games.</p><p>After 90 seconds, the lights turn off. Plan around that timer: find or preserve a flashlight before the room becomes harder to read, and avoid saving every distant shelf for after the blackout. The maps remain useful in the dark because the computer, tables, and alarm sides give the team stable orientation landmarks even when the room is visually confusing.</p><h2>Route to Level 94</h2><p>Once the tapes are complete, go back to point 2 and interact with the computer. The current objective route is: computer, unlocked door, damaged room, ladder, then vent to Level 94. The supplied layout map includes an Orb marker from an older map version, so do not let that old icon override the current door-and-ladder progression. The map page explicitly keeps the distinction so readers can use the historical image without following obsolete exit instructions.</p><p>The endgame mistake is relaxing as soon as the tape counter is finished. The computer still needs to be used, and the group still needs to reach the ladder route. Make the return call clearly: stop searching shelves, meet at the computer, then move together through the unlocked door. A team that continues collecting unnecessary tapes after the objective is met is only creating more time and noise for the Scratcher.</p><h2>Common Deaths and New Player Mistakes</h2><ul><li><strong>Treating colored dots as guaranteed spawns:</strong> they are six-game observations, not fixed tape locations.</li><li><strong>Skipping the computer:</strong> collecting tapes does not unlock the exit until the computer is used.</li><li><strong>Using both alarms without a search plan:</strong> wait until the team can use the distraction on the opposite shelf side.</li><li><strong>Running to an alarm while already chased:</strong> a table is the documented emergency hiding tool.</li><li><strong>Ignoring the lights-out timer:</strong> plan flashlight use before the 90-second blackout.</li><li><strong>Following the old Orb marker:</strong> use the current door, ladder, and vent route to Level 94.</li></ul><h2>The End Map FAQ</h2><h3>How many tapes are needed in The End?</h3><p>The current guide lists 24 tapes for one player, 32 for two players, and 48 for three or four players. Check the computer and coordinate with the team before making the final return.</p><h3>What do the fire alarms do in The End?</h3><p>They distract the Scratcher by drawing it toward the alarm. Because there is a cooldown, use one when the team is ready to search the opposite side of the room.</p><h3>Where is the exit in The End?</h3><p>After collecting the required tapes, interact with the central computer. The unlocked door leads to a damaged room with a ladder; the vent at the top leads to Level 94.</p><h3>Can you hide from the Scratcher?</h3><p>Yes. The guide identifies two tables where players can hide underneath after the Scratcher begins chasing them.</p><h3>Why does the map show an Orb?</h3><p>The supplied image includes an older Orb marker. The written objective on this page follows the current computer-to-door-to-ladder exit route instead.</p><h2>Source and Map Scope</h2><p>These maps are visual references for room layout and observed tape-search priority. The numbered overlays identify documented landmarks, while the text distinguishes fixed mechanics from variable tape spawns so the guide remains useful without claiming a guaranteed route.</p>`,
    },
  ]
