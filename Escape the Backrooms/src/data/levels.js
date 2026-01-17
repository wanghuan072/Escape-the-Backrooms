// Levels data - flat array structure (wiki-style)
export default [
  {
    id: 1,
    title: 'Escape the Backrooms: Level 0 Guide',
    addressBar: 'level-0',
    description: 'The first level — a seemingly endless 1970s office-like maze.',
    imageUrl: '/images/levels/level-01.webp',
    imageAlt: 'Level 0',
    category: 'Main Levels',
    tags: ['Beginner', 'Maze', 'Key Item'],
    isHome: true,
    seo: {
      title: 'Level 0 Walkthrough: Ladder Locations & Map - Escape the Backrooms',
      description: 'Find all ladder pieces in Level 0 (The Lobby) to escape. Detailed guide on ladder spawn points, how to avoid Bacteria, and locating the vent exit.',
      keywords: 'Level 0, Escape the Backrooms, The Lobby, Ladder pieces, Bacteria, Map, Vent exit, Walkthrough',
    },
    quote: '"What is this place? I need to find a way to get out of here..."',
    quoteBy: 'The Player (start of the level)',
    survivalDifficulty: 'Class 1 - Minimal Danger',
    sanityDanger: 'Class 0 - No Sanity Risk',
    // Right sidebar: basic info only
    hubModeInfo: {
      name: 'Level 0',
      description: 'A non-linear space with repeating yellowed wallpaper, damp carpet, and inconsistent fluorescent lighting. Rooms feel uniform at a glance, but layouts vary—no two rooms are truly identical.',
    },
    info: {
      numberAfterLevel: '0',
      subName: 'N/A',
      orderInPath: '1',
    },
    // Left content: all detailed information
    detailsHtml: `
      <p>Level 0 is the first level in Escape the Backrooms. It resembles an office building from the 1970s—yellow wallpaper, damp carpet, and humming fluorescent lights.</p>

      <h2>Document in The M.E.G. Base</h2>
      <p><strong>File Name:</strong> Level 0</p>
      <p><strong>Description:</strong> A non-linear space resembling the back rooms of a retail outlet. Rooms share superficial features such as yellowed wallpaper and damp carpets, with inconsistent fluorescent lighting.</p>

      <h2>Production</h2>
      <ul>
        <li><strong>Added in:</strong> Release</li>
        <li><strong>Made in Devlog:</strong> 1</li>
        <li><strong>Based on Backrooms Level:</strong> Level 0 - The Lobby</li>
        <li><strong>Release Level Selector Description:</strong> A seemingly infinite non-linear space, resembling the back rooms of a retail outlet.</li>
      </ul>

      <h2>Sublevels</h2>
      <ul>
        <li>Level 0.1 (not accessed from this level)</li>
        <li>Level 0.2 (not accessed from this level)</li>
        <li>Level 0.3 (not accessed from this level)</li>
        <li>Level 0.11</li>
        <li>The Manilla Room</li>
        <li>Overgrowth (not accessed from this level)</li>
        <li>Level 0.〽️ (joke level)</li>
      </ul>

      <h2>Items</h2>
      <ul>
        <li><strong>Flashlight</strong> — First appearance</li>
        <li><strong>Rope</strong> — First appearance</li>
      </ul>

      <h2>Entities</h2>
      <ul>
        <li><strong>Bacteria</strong> — First appearance</li>
      </ul>

      <h2>Objects</h2>
      <ul>
        <li>Ladder</li>
        <li>Key</li>
        <li>Door</li>
        <li>Light Switch</li>
      </ul>

      <h2>Entrances & Exits</h2>
      <h3>Entrances</h3>
      <ul>
        <li>Start a new game to get here.</li>
        <li>Climb the ladder at the end of Level 8 to reach the Smaller Area.</li>
      </ul>
      <h3>Exits</h3>
      <ul>
        <li>Cross the Pitfalls and enter the Vent to reach Level 1.</li>
        <li>In the second layer, follow arrows to the liminal house, go upstairs, and enter the Vent to reach Level 1.</li>
        <li>Use the Chainsaw from the Locker to break boards in The Manilla Room to reach Level 0.11.</li>
        <li>When entering from Level 8, enter the Hub Door to reach The Hub.</li>
      </ul>

      <h2>Appearance</h2>

      <h3>Main Level</h3>
      <p>The main area feels like a maze of office rooms and hallways. Lighting is inconsistent, the carpet is damp, and the atmosphere is unnerving. The level has two layers, and falling can drop you into the second layer.</p>

      <h3>The Smaller Area</h3>
      <p>If you enter from Level 8, you arrive in a smaller area containing <strong>The Manilla Room</strong>, boards blocking the way to Level 0.11, and a miniature Level 0.2. A Hub Door can also be found here. To return to the main area from The Manilla Room, you’ll need a Crowbar to break a Vent.</p>

      <h2>Objective</h2>
      <p>Steps required when starting a new game.</p>

      <h3>Part 1: Fixing the Ladder</h3>
      <p>After the opening cutscene, explore until you find a broken ladder. Collect 4 ladder pieces to repair it, climb up to obtain a key, and then locate a wooden door to unlock.</p>

      <h3>Part 2: The Pitfalls</h3>
      <p>Beyond the door is a room of pits with the exit on the far side. Balance across using Q/E. If you fall, you’ll reach the second layer. An alternate route can be found by following arrows, leading to a "liminal house" area; go upstairs and enter the Vent to reach Level 1.</p>

      <h2>From Level 8</h2>
      <p>Steps following exit from Level 8.</p>

      <h3>Part 1: Figuring out the Locker Code</h3>
      <p>In the miniature Level 0.2, use the light switch. When the lights go out briefly, shapes appear over numbers on the wall, indicating the locker code (shapes). Each switch press reveals the next symbol.</p>

      <h3>Part 2: Entering Level 0.11</h3>
      <p>Open the locker to obtain a Chainsaw (code: Square, Circle, Arrow). Use it to break the boards in The Manilla Room to access Level 0.11.</p>

      <h2>The Hub Door</h2>
      <p>The Hub Door is located in the smaller area, so you must arrive from Level 8. From The Manilla Room, head toward the miniature Level 0.2 area, then angle slightly right until you can’t proceed further; the door should be nearby.</p>

      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="/images/levels/level-01-01.webp" alt="Level 0 image 1" /></div>
        <div class="gallery-item"><img src="/images/levels/level-01-02.webp" alt="Level 0 image 2" /></div>
        <div class="gallery-item"><img src="/images/levels/level-01-03.webp" alt="Level 0 image 3" /></div>
        <div class="gallery-item"><img src="/images/levels/level-01-04.webp" alt="Level 0 image 4" /></div>
        <div class="gallery-item"><img src="/images/levels/level-01-05.webp" alt="Level 0 image 5" /></div>
        <div class="gallery-item"><img src="/images/levels/level-01-06.webp" alt="Level 0 image 6" /></div>
      </div>
    `,
  },
  {
    id: 2,
    title: 'Level 1 - The Habitable Zone',
    addressBar: 'level-1-the-habitable-zone',
    description: 'A massive parking garage with concrete floors, exposed rebar, and a low-hanging fog.',
    imageUrl: '/images/levels/level-02.webp',
    imageAlt: 'Level 1 The Habitable Zone',
    category: 'Main Levels',
    tags: ['Parking Garage', 'Multi-Floor', 'Puzzle'],
    isHome: true,
    seo: {
      title: 'Level 1 The Habitable Zone Walkthrough: Color Codes, Keys & Map - Escape the Backrooms',
      description: 'Complete guide for Level 1 The Habitable Zone. Find colored car codes for the elevator, collect 4 keys on Floor 2, avoid Skin-Stealers and Smilers, and unlock the gate to progress.',
      keywords: 'Level 1, The Habitable Zone, Escape the Backrooms, parking garage, color code, elevator, Skin-Stealer, Smiler, keys, Floor 2, Floor 3, Floor 4, Walkthrough',
    },
    quote: '"DON\'T TRUST THEM!"',
    quoteBy: 'The Note in Floor 1',
    survivalDifficulty: 'Class 2 - Safe',
    sanityDanger: 'Class 1 - Minimal Sanity Risk',
    // Right sidebar: basic info only
    hubModeInfo: {
      name: 'Habitable Zone',
      description: 'A massive warehouse featuring concrete floors and walls, exposed rebar, and a low-hanging fog with no discernable source. Dim fluorescent lights are placed on the walls.',
    },
    info: {
      numberAfterLevel: '1',
      subName: 'The Habitable Zone',
      orderInPath: '2',
    },
    // Left content: all detailed information
    detailsHtml: `
      <p>Level 1, also known as The Habitable Zone, is a massive parking garage made of concrete. This level introduces Sanity mechanics, which will begin to drain here. The level consists of multiple floors, each with different objectives and challenges.</p>

      <h2>Document in The M.E.G. Base</h2>
      <p><strong>File Name:</strong> Garage</p>
      <p><strong>Description:</strong> Level 1 is a large, sprawling warehouse that features concrete floors and walls, exposed rebar, and a low-hanging fog with no discernable source.</p>

      <h2>Production</h2>
      <ul>
        <li><strong>Added in:</strong> Release</li>
        <li><strong>Made in Devlog:</strong> 1</li>
        <li><strong>Release Level Selector Description:</strong> A massive warehouse with concrete floors and walls, exposed rebar, dim fluorescent lights placed on the walls and a low-hanging fog with no discernible source.</li>
      </ul>

      <h2>Appearance</h2>
      <p>Level 1 is a massive parking garage constructed entirely of concrete. The environment features office rooms scattered throughout, and this level contains a significant amount of Almond Water, which is crucial for maintaining your Sanity. The concrete walls and floors create an industrial, sterile atmosphere, while the low-hanging fog adds to the unsettling ambiance. This is the first level where players will experience Sanity drain, making Almond Water collection essential.</p>

      <h2>Objective</h2>

      <h3>Part 1: Unlock the Elevator</h3>
      <p>Upon spawning, you'll find an Elevator with a Color-Coded Lock that leads to Floor 2. To access it, you need to find a code by exploring the level. Look for a red door that opens into a room containing 4 different colored cars. The colors of these cars form the code you need to enter in the elevator. For example, if you see 1 blue car, 2 red cars, and 1 green car, you would press: 1 blue button, 2 red buttons, and 1 green button.</p>
      <p>While exploring, check the office rooms around the level for useful items such as <strong>Almond Water</strong> and <strong>Flashlights</strong>. Use Almond Water to restore your Sanity, as it will begin to drain on this floor.</p>

      <h3>Part 2: Get the Keys</h3>
      <p>Floor 2 is similar to Floor 1 but much larger. Your objective here is to find 4 Keys scattered throughout the rooms. Keys can be found on desks, inside closets, and in open drawers. Like Floor 1, you can also find Almond Water and Flashlights here.</p>
      <p><strong>Warning:</strong> There is a <strong>Skin-Stealer</strong> roaming this floor (2 if playing in Multiplayer with 3 or more players), so stay alert and move carefully.</p>
      <p>After collecting all 4 Keys, locate a room with a vault door. This door leads to Floor 3 but requires all 4 Keys to open. Insert each Key into the 4 different Keyholes around the room and turn them all simultaneously. Be quick—the keys will unturn over time. If all keys are turned at the same time, the vault door will open, allowing progression to Floor 3.</p>

      <h3>Part 3: Find the Elevator</h3>
      <p>Floor 3 is a dimly-lit area consisting of 3 individual floors. Each floor has the same basic structure but with slight layout variations. You'll start in a brick room with an opening to stairs. Descend the stairs to find a more normal-looking room with shelves containing Flashlights and Almond Water.</p>
      <p>Open the door to access the main part of the level. To progress, search for an Elevator that will take you to Floor 4. There is one possible Elevator spawn location per floor, and which floor contains the Elevator is randomized. If you encounter a locked door, that indicates a potential Elevator spawn location that didn't activate on your current floor.</p>
      <p><strong>Caution:</strong> A <strong>Skin-Stealer</strong> roams this floor. Additionally, items are only available at the start of each floor, so use them wisely.</p>

      <h3>Part 4: Unlock the Gate</h3>
      <p>Floor 4 is a small room with rougher concrete walls and a closed gate blocking your escape. To open the gate, you need security override access to flip the switch. To obtain this access, you must visit The Hub.</p>
      <p>The Hub Door is located on the left side of the room and should be easy to find. Once inside The Hub, use the Computers in The M.E.G. Base to gain access to the switch, then return to Level 1.</p>
      <p>Once the gate opens, you'll enter an area resembling a parking garage. There are several small hallways you must navigate to survive when the lights turn off and <strong>Smilers</strong> appear. These hallways contain two blue Double Doors that can lead to:</p>
      <ul>
        <li>A small empty room</li>
        <li>A small room with Office Drawers (containing Flashlights and Almond Water)</li>
        <li>The entrance to Level 2 (randomized each time)</li>
      </ul>
      <p>After the lights switch back on, it's safe to proceed to the next hallway. It's recommended to only explore one hallway at a time, as the lights only stay on for 5-10 seconds (rarely up to 20 seconds).</p>
      <p>There's also a ramp leading to a second floor in Floor 4, but it's highly recommended to avoid unless you've discovered the Wrong Door Ending, as it allows access to Level 9223372036854775807 using an ID Card on a M.E.G. sealed door.</p>

      <h2>Items</h2>
      <ul>
        <li><strong>Almond Water</strong> — First appearance. Essential for restoring Sanity, which begins to drain on this level.</li>
        <li><strong>Flashlight</strong> — Found in office rooms and drawers throughout the level.</li>
      </ul>

      <h2>Entities</h2>
      <h3>Used Entities</h3>
      <ul>
        <li><strong>Floor 2:</strong> Skin-Stealer (1 in Singleplayer, 2 in Multiplayer with 4+ players) — First appearance</li>
        <li><strong>Floor 3:</strong> Skin-Stealer (1)</li>
        <li><strong>Floor 4:</strong> Smiler — First appearance</li>
      </ul>
      <h3>Removed Entities</h3>
      <ul>
        <li>Ghost Smiler (1) — First appearance (removed from current version)</li>
      </ul>

      <h2>Objects</h2>
      <p>Level 1 contains numerous objects that can be found throughout:</p>
      <ul>
        <li>Door</li>
        <li>Color-Coded Lock</li>
        <li>Wardrobe</li>
        <li>Elevator</li>
        <li>Keyhole</li>
        <li>Level Door</li>
        <li>Box</li>
        <li>Double Door</li>
        <li>Office Drawer</li>
      </ul>

      <h2>Entrances & Exits</h2>
      <h3>Entrances</h3>
      <ul>
        <li>Cross the Pitfalls in Level 0 and go through the Vent on the other side to reach Level 1.</li>
        <li>Going up the stairs in the liminal house below the Pitfalls in Level 0 will lead to Level 1.</li>
        <li>Returning through the doors in Level 9223372036854775807.</li>
      </ul>
      <h3>Exits</h3>
      <ul>
        <li>In the parking garage in Floor 4, find the hallway that resembles Level 2 to get to Level 2.</li>
        <li>In Floor 4, go through the door with the fire exit sign to get to The Hub.</li>
        <li>On the upper area of Floor 4, if you've discovered the Wrong Door Ending, use an ID Card on a M.E.G. secured door and enter it to get to Level 9223372036854775807.</li>
      </ul>

      <h2>The Hub Door</h2>
      <p>In Floor 4, the Hub Door will be out in the open and is the first Level Door in The Hub that can be unlocked. The Door is required to unlock to progress through the level.</p>

      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="/images/levels/level-02-01.webp" alt="Level 1 image 1" /></div>
        <div class="gallery-item"><img src="/images/levels/level-02-02.webp" alt="Level 1 image 1" /></div>
        <div class="gallery-item"><img src="/images/levels/level-02-03.webp" alt="Level 1 image 1" /></div>
        <div class="gallery-item"><img src="/images/levels/level-02-04.webp" alt="Level 1 image 1" /></div>
        <div class="gallery-item"><img src="/images/levels/level-02-05.webp" alt="Level 1 image 1" /></div>
        <div class="gallery-item"><img src="/images/levels/level-02-06.webp" alt="Level 1 image 1" /></div>
      </div>
    `,
  },
  {
    id: 3,
    title: 'The Hub',
    addressBar: 'hub',
    description: 'A large underground tunnel connecting to most levels in the game, featuring an abandoned M.E.G. Base.',
    imageUrl: '/images/levels/level-03.webp',
    imageAlt: 'The Hub',
    category: 'Main Levels',
    tags: ['Hub', 'Safe Zone', 'Multi-Level Access'],
    isHome: true,
    seo: {
      title: 'The Hub Walkthrough: M.E.G. Base & Level Doors Guide - Escape the Backrooms',
      description: 'Complete guide to The Hub - a safe underground tunnel connecting to multiple levels. Unlock the gate using M.E.G. Base computers (password: itheardyou), access 10 level doors, and navigate between levels.',
      keywords: 'The Hub, M.E.G. Base, Escape the Backrooms, hub, safe zone, level doors, Gate.exe, itheardyou, password, Walkthrough',
    },
    quote: '"itheardyou"',
    quoteBy: 'The Note in The M.E.G. Base',
    survivalDifficulty: 'Class Habitable - Completely Safe',
    sanityDanger: 'Class 0 - No Sanity Risk',
    // Right sidebar: basic info only
    hubModeInfo: {
      name: 'The Hub',
      description: 'A large underground tunnel system that serves as a central connection point to most levels in the game. Features 10 Level Doors and an abandoned M.E.G. Base.',
    },
    info: {
      numberAfterLevel: 'N/A',
      subName: 'The Hub',
      orderInPath: 'N/A',
    },
    // Left content: all detailed information
    detailsHtml: `
      <p>The Hub is a large underground tunnel system that serves as a central connection point to most levels in the game. It features 10 Level Doors that provide access to various levels, along with an abandoned M.E.G. Base. This level is completely safe, with no entities and no sanity risk.</p>

      <h2>Production</h2>
      <ul>
        <li><strong>Added in:</strong> Part 2</li>
        <li><strong>Made in Devlog:</strong> 4</li>
      </ul>

      <h2>Appearance</h2>
      <p>The Hub is a large underground tunnel that has Doors to most of the Levels in the game. There are 10 of these Doors along with an abandoned M.E.G. Base located on the left side of The Hub. The tunnel environment provides a safe haven for players to regroup and plan their next moves.</p>

      <h2>Objective</h2>

      <h3>Part 1: Opening the Gate</h3>
      <p>Once you arrive from <a href="/levels/level-1-the-habitable-zone">Level 1</a>, you must go to The M.E.G. Base and enter it. Unlock the entrance to the Base and enter it. Unlock a Computer by putting in the password "itheardyou" and open the file "Gate.exe" to unlock the gate.</p>

      <h3>Part 2: Returning to Level 1</h3>
      <p>Once the gate has been unlocked, you can return to <a href="/levels/level-1-the-habitable-zone">Level 1</a> and you will be able to open the gate.</p>

      <h2>Bases & Outposts</h2>
      <p>A Base can be found on the left side of The Hub. This base is:</p>
      <ul>
        <li><strong>The M.E.G. Base</strong> — An abandoned base containing computers and important files. The password to access the computers is "itheardyou".</li>
      </ul>

      <h2>Unlocking Doors</h2>
      <p>Before you can use a Door, you need to unlock it in its respective level. The Doors have entrances to:</p>
      <ul>
        <li><a href="/levels/level-0">Level 0</a></li>
        <li><a href="/levels/level-1-the-habitable-zone">Level 1</a></li>
        <li><a href="/levels/level-4-abandoned-office">Level 4</a></li>
        <li><a href="/levels/level-37-the-poolrooms">Level 37</a></li>
        <li><a href="/levels/level-94">Level 94</a></li>
        <li><a href="/levels/level-7">Level 7</a></li>
        <li><a href="/levels/level-9">Level 9</a></li>
        <li><a href="/levels/level-3999">Level 3999</a></li>
        <li><a href="/levels/level-188">Level 188</a></li>
        <li><a href="/levels/level-52">Level 52</a></li>
      </ul>

      <h2>Door Guide</h2>

      <h3><a href="/levels/level-0">Level 0</a></h3>
      <p>To find Level 0's Door, you must enter the Level from <a href="/levels/level-8">Level 8</a> to get to the smaller area because that's where it is. Start in The Manilla Room, and go forward/away from it, then head a bit right before until you can't go more forward. Look around the place, and you should be able to find the Door.</p>

      <h3><a href="/levels/level-1-the-habitable-zone">Level 1</a></h3>
      <p>To find Level 1's Door, you must be in floor 4. The Door will be out in the open, and clearly noticeable. You also need to unlock this Door to progress.</p>

      <h3><a href="/levels/level-4-abandoned-office">Level 4</a></h3>
      <p>To find Level 4's Door, after getting down the staircase at the start of the Level, go to the room at the top, and you will enter a room with nothing in it. Go through the next Door, and you will find a large Pillar Room. Go to the left of the room, and on the left side, the Second Door is The Hub Door.</p>

      <h3><a href="/levels/level-37-the-poolrooms">Level 37</a></h3>
      <p>To find Level 37's Door, enter the square entrances, and enter the room at the top. You will find this large room with a staircase. Go up the staircase, and at the top is the Door.</p>

      <h3><a href="/levels/level-94">Level 94</a></h3>
      <p>To find Level 94's Door, head to the very first house in the Level, and go upstairs. Open the door, and in the room is the Door.</p>

      <h3><a href="/levels/level-7">Level 7</a></h3>
      <p>To find Level 7's Door, you must go the upstairs area and go through the door at the top of the room. Go through the door, then go up the stairs and at the top is the Door.</p>

      <h3><a href="/levels/level-9">Level 9</a></h3>
      <p>To find Level 9's Door, you must find a specific house within the Level and enter it. Roam around the house until you find a door downstairs that leads to a stone staircase and at the bottom of it is the Door. Keep in mind that there is a <a href="/wiki/entities/wretch">Wretch</a> guarding the upstairs area of the house.</p>

      <h3><a href="/levels/level-3999">Level 3999</a></h3>
      <p>To find Level 3999's Door, go through the sliding doors at the start of the Level and there will be a staff only door on the left. Behind it is The Hub.</p>

      <h3><a href="/levels/level-188">Level 188</a></h3>
      <p>To find Level 188's Door, go forward until you find a room with a bunch of doors with labels of different Levels. Go through the door labelled "H" and go through the Hallway. At the end of it is the Door.</p>

      <h3><a href="/levels/level-52">Level 52</a></h3>
      <p>To find Level 52's Door, in the starting room, go to the right side of the room. On the right side of the room is the Door.</p>

      <h2>Items</h2>
      <p>There are no items that can be found in this level.</p>

      <h2>Entities</h2>
      <p>There are no entities in this level. The Hub is completely safe and devoid of any hostile entities.</p>

      <h2>Objects</h2>
      <p>Only two objects can be found in The Hub. These objects include:</p>
      <ul>
        <li>Road</li>
        <li>Level Doors</li>
      </ul>

      <h2>Entrances & Exits</h2>
      <h3>Entrances</h3>
      <ul>
        <li>Find a Level Door in a Level that has one to get here.</li>
      </ul>
      <h3>Exits</h3>
      <ul>
        <li>Enter one of the 10 Level Doors to get to its respective Level, that is if you have unlocked it.</li>
        <li>Go through the only door on the left side of The Hub to get to The M.E.G. Base.</li>
      </ul>

      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="/images/levels/level-03-01.webp" alt="The Hub image 1" /></div>
        <div class="gallery-item"><img src="/images/levels/level-03-02.webp" alt="The Hub image 2" /></div>
        <div class="gallery-item"><img src="/images/levels/level-03-03.webp" alt="The Hub image 3" /></div>
        <div class="gallery-item"><img src="/images/levels/level-03-04.webp" alt="The Hub image 4" /></div>
        <div class="gallery-item"><img src="/images/levels/level-03-05.webp" alt="The Hub image 5" /></div>
        <div class="gallery-item"><img src="/images/levels/level-03-06.webp" alt="The Hub image 6" /></div>
      </div>
    `,
  },
  {
    id: 4,
    title: 'Level 2 - Pipe Dreams',
    addressBar: 'level-2-pipe-dreams',
    description: 'A long, dark maintenance tunnel with pipes lining the walls and steam hazards.',
    imageUrl: '/images/levels/level-04.webp',
    imageAlt: 'Level 2 Pipe Dreams',
    category: 'Main Levels',
    tags: ['Maintenance Tunnel', 'Steam Hazard', 'Linear'],
    isHome: false,
    seo: {
      title: 'Level 2 Pipe Dreams Walkthrough: Station & Steam Hazards - Escape the Backrooms',
      description: 'Complete guide for Level 2 Pipe Dreams. Navigate through dark maintenance tunnels, avoid steam pipes and Smilers, find the Station entrance, and reach Level 3 or Level Fun.',
      keywords: 'Level 2, Pipe Dreams, Escape the Backrooms, maintenance tunnel, Smiler, steam hazard, Station, Level Fun, flashlight, Walkthrough',
    },
    quote: '"STATION"',
    quoteBy: 'The message to go left to get to Level 3',
    survivalDifficulty: 'Class 1 - Minimal Danger',
    sanityDanger: 'Class 1 - Minimal Sanity Risk',
    // Right sidebar: basic info only
    hubModeInfo: {
      name: 'Pipe Dreams',
      description: 'Level 2 consists mainly of dark, grey, concrete maintenance tunnels, stretching on for miles with walls lined with pipes.',
    },
    info: {
      numberAfterLevel: '2',
      subName: 'Pipe Dreams',
      orderInPath: '3',
    },
    // Left content: all detailed information
    detailsHtml: `
      <p>Level 2, also known as Pipe Dreams, is a long, dark maintenance tunnel with pipes extending along the walls. The level stretches on for miles, creating a linear path that players must navigate carefully. The environment is dark, grimy, and thin, with steam pipes posing a constant threat.</p>

      <h2>Document in The M.E.G. Base</h2>
      <p><strong>File Name:</strong> Pipe Dreams</p>
      <p><strong>Description:</strong> Level 2 consists mainly of dark, grey, concrete maintenance tunnels, stretching on for miles with walls lined with pipes.</p>

      <h2>Production</h2>
      <ul>
        <li><strong>Added in:</strong> Release</li>
        <li><strong>Made in Devlog:</strong> 1</li>
        <li><strong>Release Level Selector Description:</strong> A long, dim concrete maintenance hallway with steam pipes lining the walls and ceiling.</li>
      </ul>

      <h2>Appearance</h2>
      <p>Level 2 is a long, dark, grimy, thin maintenance tunnel that has pipes extending along the walls. The level stretches on for miles, creating an oppressive and claustrophobic atmosphere. The concrete walls are lined with pipes that can burst at any moment, releasing deadly steam. Going left the first time leads to <a href="/levels/level-3-electrical-station">Level 3</a>, and going left the second time leads to <a href="/levels/level-fun">Level Fun</a>.</p>

      <h2>Objective</h2>

      <h3>Part 1: The Station</h3>
      <p>Once you first spawn in, you will spot a wall that points left. Going left leads to the Station, and going right leads to Fun. If you are entering this level for the first time, you will have to go left first. If you try to go right first, a <a href="/wiki/entities/smiler">Smiler</a> will stop you from doing so and will be blocking the path until you complete the left path.</p>
      <p>After traveling for a bit, there will be a dark area with a Flashlight on a small shelf on the wall. Pick up this flashlight so you can see in the dark. Halfway down the hallway, two pipes will burst. Walking through the Steam will kill you in a similar way to the hydrolitis plague in <a href="/levels/level-37">Level 37</a>.</p>
      <p>Once you are almost in the light, a <a href="/wiki/entities/smiler">Smiler</a> will start chasing you down, forcing you to run. When the Smiler enters areas with light, the lights will break, so if you hear lights breaking, it may already be too late. Eventually, you will find a turnoff for the entrance to the Station. Keep an eye out for it, because it is very easy to miss if you aren't paying attention. It will act as a safe zone from the Smiler, so once you enter the entrance, you no longer have to worry about the Smiler. If you pass the entrance, you will eventually find yourself in a dead end with nothing you can do.</p>

      <h3>Part 2: FUN =)</h3>
      <p>After escaping the boiler room in <a href="/levels/level-5">Level 5</a>, you will find yourself at a different entrance to level 2 on the opposite side. The wall in front points left with the message "Fun!" Once you arrive at the darkness again, get the Flashlight and enter the darkness. The only thing that makes the right path different from the left one is that only one pipe will burst.</p>
      <p>The <a href="/wiki/entities/smiler">Smiler</a> will chase you again once almost out of the darkness. Instead of finding an entrance to the station, you will find an entrance to <a href="/levels/level-fun">Level Fun</a>. There will also be flashing colorful lights, so you know this is the exit as well as an instrumental edition of You Day! playing. Touch a ladder and you will end up in <a href="/levels/level-fun">Level Fun</a>. Just like last time, if you pass the exit this time, you will once again find a dead end.</p>

      <h2>Items</h2>
      <p>There is only one item you can find in this level. This item is:</p>
      <ul>
        <li><strong>Flashlight</strong> — Found on a small shelf on the wall in the dark area. Essential for navigating through the darkness.</li>
      </ul>

      <h2>Entities</h2>
      <h3>Used Entities</h3>
      <ul>
        <li><a href="/wiki/entities/smiler">Smiler</a> (1) — Blocks the right path if you haven't completed the left path first. Chases players through the tunnel, breaking lights as it moves.</li>
      </ul>
      <h3>Unused Entities</h3>
      <ul>
        <li>Lighthead (1) — First appearance (removed from current version)</li>
      </ul>

      <h2>Objects</h2>
      <p>There are no objects in this level.</p>

      <h2>Hazards</h2>
      <p>There is one decently risky to avoid hazard in this level. This hazard is:</p>
      <ul>
        <li><strong>Gas/Steam</strong> — Pipes can burst, releasing deadly steam. Walking through the steam will kill you instantly, similar to the hydrolitis plague in <a href="/levels/level-37">Level 37</a>. Two pipes burst on the left path, while only one bursts on the right path.</li>
      </ul>

      <h2>Entrances & Exits</h2>
      <h3>Entrances</h3>
      <ul>
        <li>Find the correct door in the garage in Floor 4 in <a href="/levels/level-1">Level 1</a> to get here.</li>
        <li>Find the exit door in the Boiler Room in <a href="/levels/level-5">Level 5</a> to get here.</li>
      </ul>
      <h3>Exits</h3>
      <ul>
        <li>Return through the hallway which lead you to this level, being <a href="/levels/level-1">Level 1</a> or <a href="/levels/level-5">Level 5</a> to return to those levels.</li>
        <li>Go left after exiting <a href="/levels/level-1">Level 1</a> to find an entrance to <a href="/levels/level-3">Level 3</a>.</li>
        <li>Go right after exiting <a href="/levels/level-5">Level 5</a> to find an entrance to <a href="/levels/level-fun">Level Fun</a>.</li>
      </ul>

      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="/images/levels/level-04-01.webp" alt="Level 2 image 1" /></div>
        <div class="gallery-item"><img src="/images/levels/level-04-02.webp" alt="Level 2 image 2" /></div>
        <div class="gallery-item"><img src="/images/levels/level-04-03.webp" alt="Level 2 image 3" /></div>
        <div class="gallery-item"><img src="/images/levels/level-04-04.webp" alt="Level 2 image 4" /></div>
        <div class="gallery-item"><img src="/images/levels/level-04-05.webp" alt="Level 2 image 5" /></div>
        <div class="gallery-item"><img src="/images/levels/level-04-06.webp" alt="Level 2 image 6" /></div>
      </div>
    `,
  },
  {
    id: 5,
    title: 'Level 3 - Electrical Station',
    addressBar: 'level-3-electrical-station',
    description: 'A large abandoned electrical station with three dangerous zones, home to the Hounds.',
    imageUrl: '/images/levels/level-05.webp',
    imageAlt: 'Level 3 Electrical Station',
    category: 'Main Levels',
    tags: ['Electrical Station', 'Puzzle', 'High Danger'],
    isHome: true,
    seo: {
      title: 'Level 3 Electrical Station Walkthrough: Fuse Box Puzzles & Hounds - Escape the Backrooms',
      description: 'Complete guide for Level 3 Electrical Station. Navigate through East Substation, West Substation, and Generator zones. Solve fuse box puzzles (Triway and Colored Wires), avoid Hounds and electric puddles.',
      keywords: 'Level 3, Electrical Station, Escape the Backrooms, Hound, fuse box, puzzle, Triway, Colored Wires, electric puddle, East Substation, West Substation, Generator, Walkthrough',
    },
    quote: '"BLiND iT AND RUN!!"',
    quoteBy: 'The Note in Level 3',
    survivalDifficulty: 'Class 4 - Severe Danger',
    sanityDanger: 'Class 2 - Moderate Sanity Risk',
    // Right sidebar: basic info only
    hubModeInfo: {
      name: 'Electrical Station',
      description: 'A large abandoned electrical station with dusty brown brick walls covered in copper pipes and mechanical components. The floors are made of dusty grey-tiled floor, whilst the ceiling has flaking paint in most areas.',
    },
    info: {
      numberAfterLevel: '3',
      subName: 'Electrical Station',
      orderInPath: 'N/A',
    },
    // Left content: all detailed information
    detailsHtml: `
      <p>Level 3, also known as The Electrical Station, is a large and abandoned electrical station with red brick walls and a dusty stone floor. The level has three different zones which are all locked off by gates. The farther you go into the level, the more dangerous it gets. This level is the main habitat of the <a href="/wiki/entities/hound">Hounds</a>.</p>

      <h2>Document in The M.E.G. Base</h2>
      <p><strong>File Name:</strong> Electrical Station</p>
      <p><strong>Description:</strong> The walls are comprised of dusty, brown bricks, usually covered in segments of copper pipes and mechanical components. The floors are made of an even dustier grey-tiled floor, whilst the ceiling is flaking paint in most areas.</p>

      <h2>Appearance</h2>
      <p>Level 3 is a large and abandoned electrical station with red brick walls and a dusty stone floor. The level has three different zones which are all locked off by gates. The farther you go into the level, the more dangerous it gets. This level is the main habitat of the <a href="/wiki/entities/hound">Hounds</a>. Each zone becomes progressively darker and more hazardous, with zone 3 being the most dangerous.</p>

      <h2>Objective</h2>

      <h3>Part 1: East Substation</h3>
      <p>Once you first spawn in, you will find yourself in a very long hallway, and at the end are locked bars. These bars lead to <a href="/levels/level-4">Level 4</a>, so you will need to unlock them in order to escape. There is a box next to the locked bars containing a list of Fuse Boxes that must be turned on. The entrance door to the rest of the level will be locked at first but will open when you get near the box.</p>
      <p>You will then find yourself in the first zone, the east substation. In this zone, you must go around and look for Fuse Boxes. Enable all 3 of the Fuse Boxes in this zone, and more locked bars at the entrance of zone 1 will open allowing you to move to the second zone.</p>
      <p><strong>The Normal Fuse Box:</strong> All you have to do is flip all of the switches, and it will be enabled.</p>

      <h3>Part 2: West Substation</h3>
      <p>The closed bars at the start of zone 1 lead to this big room with red and white bricks, and 2 more closed-off bars, however the one at the start will be open. These bars lead to zone 2, the west substation. Zone 2 is much darker and dangerous than the first zone, and once again you must find 3 Fuse Boxes and turn them on.</p>
      <p>After travelling for a bit, you will come across a hallway. But before you get the chance to open the door in this hall, a <a href="/wiki/entities/hound">Hound</a> will come up and start chasing you, so make sure you have a Flashlight out to blind it. There are only 2 <a href="/wiki/entities/hound">Hounds</a> in this zone, so it's not that hard.</p>

      <h3>Part 3: Generator</h3>
      <p>Zone 3 known as Generator is the most dangerous zone of them all. After turning on all 3 of the Fuse Boxes in zone 2, the other bars in the big room will be open. The third zone is very dark, so make sure you have a Flashlight out to see. The first room in zone 3 will already have a <a href="/wiki/entities/hound">Hound</a>.</p>
      <p><a href="/wiki/entities/hound">Hounds</a> aren't the only danger in this zone, because a new hazard is introduced which are simply puddles with electricity in them. All you have to do to avoid them is to just not step in them. Simple as that.</p>
      <p>What makes the zone even harder is that the Fuse Boxes are now puzzles. There are only 2 kinds of puzzles though, which include:</p>
      
      <h4>Triway</h4>
      <p>This puzzle involves a bunch of electricity connectors which have 3 fuses on each one and all of the connectors form a hexagon shape. Every one of the fuse colors are different, but there's only 3 colors they can be which include green, blue, and red. You can turn the connectors and if 2 of the same fuse colors are aiming at each other, electricity will form. The goal is to get them all to match up.</p>

      <h4>Colored Wires</h4>
      <p>This puzzle is much simpler and easier than Triway. On the left side, there will be a bunch of wires, and they are each labelled with different colors. The colors include green, blue, red, and yellow. On the right side lies what the wires must be connected to. Connect the correct colors with each one and that's it.</p>

      <h3>Part 4: All of the Fuse Boxes Finally on</h3>
      <p>After turning on all of the Fuse Boxes in zone 3, the bars from the start of the level will be open, and you will be able to get to <a href="/levels/level-4">Level 4</a>.</p>

      <h2>Items</h2>
      <p>Items in this level are hidden on shelves and are difficult to spot, and they can also be found on tables. These items include:</p>
      <ul>
        <li><strong>Almond Water</strong> — Found on shelves and tables throughout the level.</li>
        <li><strong>Energy Bar</strong> — First appearance. Found on shelves and tables.</li>
        <li><strong>Flashlight</strong> — Essential for navigating the dark zones and blinding <a href="/wiki/entities/hound">Hounds</a>.</li>
      </ul>

      <h2>Entities</h2>
      <p>Only one type of entity lives in this level, and they are everywhere. This entity is:</p>
      <ul>
        <li><a href="/wiki/entities/hound">Hound</a> (9) — First appearance. These entities are found throughout all three zones, with the highest concentration in zone 3. Use a Flashlight to blind them and escape.</li>
      </ul>

      <h2>Objects</h2>
      <p>Level 3 has two objects. These objects include:</p>
      <ul>
        <li><strong>Fuse Box</strong> — Found throughout all three zones. Must be activated to progress. Zone 1 and 2 have simple switch-based fuse boxes, while zone 3 has puzzle-based fuse boxes.</li>
        <li><strong>Door</strong> — Used to access different areas and zones.</li>
      </ul>

      <h2>Hazards</h2>
      <p>One hazard can be found in the level in zone 3. This hazard is:</p>
      <ul>
        <li><strong>Electric Puddle</strong> — Found only in zone 3 (Generator). These electrified puddles will kill you instantly if stepped in. Simply avoid stepping in them to stay safe.</li>
      </ul>

      <h2>Entrances & Exits</h2>
      <h3>Entrances</h3>
      <ul>
        <li>Go left in <a href="/levels/level-2">Level 2</a> until you find the entrance to this level.</li>
      </ul>
      <h3>Exits</h3>
      <ul>
        <li>Turn on all 9 Fuse Boxes and go through the door that lies beyond the bars at the start of the level to get to <a href="/levels/level-4">Level 4</a>.</li>
      </ul>

      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="/images/levels/level-05-01.webp" alt="Level 3 image 1" /></div>
        <div class="gallery-item"><img src="/images/levels/level-05-02.webp" alt="Level 3 image 2" /></div>
        <div class="gallery-item"><img src="/images/levels/level-05-03.webp" alt="Level 3 image 3" /></div>
        <div class="gallery-item"><img src="/images/levels/level-05-04.webp" alt="Level 3 image 4" /></div>
        <div class="gallery-item"><img src="/images/levels/level-05-05.webp" alt="Level 3 image 5" /></div>
        <div class="gallery-item"><img src="/images/levels/level-05-06.webp" alt="Level 3 image 6" /></div>
      </div>
    `,
  },
  {
    id: 6,
    title: 'Level 4 - Abandoned Office',
    addressBar: 'level-4-abandoned-office',
    description: 'An abandoned office building with CCTV systems and vending machine puzzles.',
    imageUrl: '/images/levels/level-06.webp',
    imageAlt: 'Level 4 Abandoned Office',
    category: 'Main Levels',
    tags: ['Office', 'Puzzle', 'Safe Zone'],
    isHome: true,
    seo: {
      title: 'Level 4 Abandoned Office Walkthrough: Vending Machine & CCTV Puzzles - Escape the Backrooms',
      description: 'Complete guide for Level 4 Abandoned Office. Solve vending machine counting puzzles, sneak past security cameras without being spotted, and avoid Windows entities to reach Level 5.',
      keywords: 'Level 4, Abandoned Office, Escape the Backrooms, CCTV, security camera, vending machine, Windows entity, counting puzzle, crowbar, Walkthrough',
    },
    quote: '"Paranoiac CCTV systems"',
    quoteBy: 'The Camera Box in the Security Office',
    survivalDifficulty: 'Class 0 - Mostly Safe',
    sanityDanger: 'Class 0 - No Sanity Risk',
    // Right sidebar: basic info only
    hubModeInfo: {
      name: 'Abandoned Office',
      description: 'An abandoned office building that is almost completely devoid of furniture. Some rooms have windows, though most have been completely blacked out. Any windows that have not been blacked out are considered traps.',
    },
    info: {
      numberAfterLevel: '4',
      subName: 'Abandoned Office',
      orderInPath: '5',
    },
    // Left content: all detailed information
    detailsHtml: `
      <p>Level 4, also known as The Abandoned Office, is an abandoned office building with little trace of people. Sanity doesn't drop in this level, making it a good place to stay at. There's also lightning that will strike outside frequently in the level.</p>

      <h2>Document in The M.E.G. Base</h2>
      <p><strong>File Name:</strong> Abandoned Office</p>
      <p><strong>Description:</strong> Level 4 resembles an empty office building, though it is almost completely devoid of furniture. Some rooms on this level has windows, though most of them have been completely blacked out. Any windows that have not been blacked out are considered traps and should be avoided at all costs.</p>

      <h2>Appearance</h2>
      <p>Level 4 is an abandoned office building with little trace of people. Sanity doesn't drop in this level, making it a good place to stay at. There's also lightning that will strike outside frequently in the level. The building is mostly empty, with some rooms having windows that are blacked out. Any windows that haven't been blacked out should be avoided as they are traps.</p>

      <h2>Objective</h2>

      <h3>Part 1: The Vending Machines</h3>
      <p>Once you first spawn in, look around for a room with 4 different vending machines. The hallway leading to it has 2 <a href="/wiki/entities/windows">Windows</a> entities on the ends, so don't go up to them. There will be a door in this room that will let you proceed on, but it's locked.</p>
      <p>In order to unlock it, you have to use the vending machines in the room. Every vending machine is associated with an object. The objects include chairs, tables, water coolers, and stacks of books. Count how many of that object is in the room, and on the vending machines, instead of buttons for a certain object, there are buttons that display numbers. Select the number of objects on each one and if all the values are right, the door should open.</p>

      <h3>Part 2: Sneak past the Cameras</h3>
      <p>After the vending machine puzzle, you will find yourself in a room full of cubicles. Here, you must find the room (which is located at the very end of the room) that leads to this hallway with a wall that has a button on it. The button says "Reset Cameras". Press this Button, and then you must sneak past 4 different Cameras scattered throughout a bunch of rooms.</p>
      <p>Sneaking past the Cameras is impossible without being spotted, so you must take shortcuts in order to get past them. If you get spotted by one, the Camera will flash red and an alarm will start playing. You'll eventually arrive at this brick hallway with a security office connected to it that has Crowbars on the desk and monitors that monitor the cameras. These monitors will say "SPOTTED!" If you were noticed by a Camera.</p>
      <p>If one of them says "SPOTTED!", the door that will take you to <a href="/levels/level-5">Level 5</a> will be locked, and you will have to take a Crowbar and break open the Vent in the hallway to get back to the beginning to try again. Don't get seen by any Cameras, and the door should open. It will take you to <a href="/levels/level-5">Level 5</a>.</p>

      <h2>Items</h2>
      <p>This level has a fair share of items you can find, making it pretty safe. Items in this level are usually found in rooms. These items include:</p>
      <ul>
        <li><strong>Almond Water</strong> — Found in rooms throughout the level.</li>
        <li><strong>Juice</strong> — First appearance. Found in rooms.</li>
        <li><strong>Energy Bar</strong> — Found in rooms.</li>
        <li><strong>Flashlight</strong> — Found in rooms.</li>
        <li><strong>Crowbar</strong> — First appearance. Found on the desk in the security office. Used to break open vents if you get spotted by cameras.</li>
      </ul>

      <h2>Entities</h2>
      <p>Surprisingly, one entity can be found in Level 4. This entity is:</p>
      <ul>
        <li><a href="/wiki/entities/windows">Windows</a> — First appearance. Found at the ends of hallways. These are traps and should be avoided at all costs. Do not approach them.</li>
      </ul>

      <h2>Objects</h2>
      <p>Four objects can be found in this level. These objects include:</p>
      <ul>
        <li><strong>Door</strong> — Used to access different areas and progress through the level.</li>
        <li><strong>Vending Machine</strong> — Found in the puzzle room. Used to solve the counting puzzle.</li>
        <li><strong>Reset Cameras Button</strong> — Located in the hallway before the camera area. Press this to reset cameras before attempting to sneak past them.</li>
        <li><strong>Security Camera</strong> — Found throughout the camera area. Must be avoided or you'll trigger an alarm and lock the exit door.</li>
      </ul>

      <h2>Entrances & Exits</h2>
      <h3>Entrances</h3>
      <ul>
        <li>Go through the door beyond the bars at the start of <a href="/levels/level-3">Level 3</a> to get here.</li>
      </ul>
      <h3>Exits</h3>
      <ul>
        <li>Don't get caught by a Camera in the final area of the level to get access to the door in the hallway at the end. This will send you to <a href="/levels/level-5">Level 5</a>.</li>
        <li>Find The Hub Door in the pillar room to get to <a href="/hub">The Hub</a>.</li>
      </ul>

      <h2>The Hub Door</h2>
      <p>To find The Hub Door on this level, at the start of the level, instead of going right, go forward, and you should arrive at this room with pillars. Then, open the second door on the left side of the room and <a href="/hub">The Hub</a> will be on the other side.</p>

      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="/images/levels/level-06-01.webp" alt="Level 4 image 1" /></div>
        <div class="gallery-item"><img src="/images/levels/level-06-02.webp" alt="Level 4 image 2" /></div>
        <div class="gallery-item"><img src="/images/levels/level-06-03.webp" alt="Level 4 image 3" /></div>
        <div class="gallery-item"><img src="/images/levels/level-06-04.webp" alt="Level 4 image 4" /></div>
        <div class="gallery-item"><img src="/images/levels/level-06-05.webp" alt="Level 4 image 5" /></div>
        <div class="gallery-item"><img src="/images/levels/level-06-06.webp" alt="Level 4 image 6" /></div>
      </div>
    `,
  },
  {
    id: 7,
    title: 'Level 5 - Terror Hotel',
    addressBar: 'level-5-terror-hotel',
    description: 'A vintage 1930s hotel complex split into three floors, infested with Deathmoths.',
    imageUrl: '/images/levels/level-07.webp',
    imageAlt: 'Level 5 Terror Hotel',
    category: 'Main Levels',
    tags: ['Hotel', 'Multi-Floor', 'High Danger'],
    isHome: false,
    seo: {
      title: 'Level 5 Terror Hotel Walkthrough: Paintings, Mailboxes & Deathmoths - Escape the Backrooms',
      description: 'Complete guide for Level 5 Terror Hotel. Navigate through Main Hall (paintings puzzle), Hotel (mailbox letters), and Boiler Room. Use bug spray on Deathmoths, collect moth jelly, and avoid Skin-Stealers and Hounds.',
      keywords: 'Level 5, Terror Hotel, Escape the Backrooms, Deathmoth, Skin-Stealer, Hound, bug spray, moth jelly, paintings puzzle, mailbox, Room 235, thermometer, Walkthrough',
    },
    quote: '"It smells like bug spray. I wonder why I would need this much of it though..."',
    quoteBy: 'The Player after using a Bug Spray Valve',
    survivalDifficulty: 'Class 2 - Moderate Danger',
    sanityDanger: 'Class 3 - Extreme Sanity Risk',
    // Right sidebar: basic info only
    hubModeInfo: {
      name: 'Terror Hotel',
      description: 'A hotel complex constructed in the 1930s, with furniture dating back to 1920. The level consists of many rooms and halls.',
    },
    info: {
      numberAfterLevel: '5',
      subName: 'Terror Hotel',
      orderInPath: 'N/A',
    },
    // Left content: all detailed information
    detailsHtml: `
      <p>Level 5, also known as The Terror Hotel, is an old hotel that has furniture and architecture dating back to the 1930s. This level is split up into three floors: The Main Hall, The Hotel, and The Boiler Room. Each floor presents unique challenges and dangers.</p>

      <h2>Document in The M.E.G. Base</h2>
      <p><strong>File Name:</strong> Terror Hotel</p>
      <p><strong>Description:</strong> Level 5 is a hotel complex, with many rooms and halls. This level itself seems to have been constructed in the 1930s, with furniture dating back to 1920.</p>

      <h2>Appearance</h2>
      <p>Level 5 is an old hotel that has furniture and architecture dating back to the 1930s. This level is split up into three floors: The Main Hall, The Hotel, and The Boiler Room.</p>

      <h3>The Floors</h3>

      <h4>The Main Hall</h4>
      <p>The Main Hall is the main floor of Level 5 and the spawning location of the player when they first enter Level 5. These halls branch off into smaller rooms. The Main Hall has several pieces of furniture with a 30s era design. There are chandeliers on the ceiling, some lamps, couches, pillars, chairs, and plants on the side.</p>
      <p>The Main Hall has differentiating rooms with one being a café, another room being The Beverly Room, and another room that looks like a completely different hotel. There are many branching areas, and also two bathrooms, a staircase going to an upper area, and a Lobby. The Lobby has a few seating areas and a check in. Only Male <a href="/wiki/entities/deathmoth">Deathmoths</a> spawn in The Main Hall.</p>

      <h4>The Hotel</h4>
      <p>The Hotel Floor is simply a hotel. It has carpeted flooring and a bunch of numbered rooms. It also has 3 smaller rooms that contain Items. The spawn room has a bar and some Mailboxes. Almond Water, Energy Bars, and Juice can be found everywhere in The Hotel. The lights may be off in some places, making those areas dark. The majority of the hotel rooms have a Bed, a dresser, a mirror, a Closet, a nightstand, and a connecting bathroom with a bathtub and toilet.</p>

      <h4>The Boiler Room</h4>
      <p>The Boiler Room is very different compared to The Main Hall and The Hotel. It has pipes running along the walls similar to <a href="/levels/level-2">Level 2</a> and has stone walls and floors. The floor is also the main home of Female <a href="/wiki/entities/deathmoth">Deathmoths</a>. There are occasionally pipes with Valves that spew large amounts of Bug Spray to scare off the Deathmoths. Occasionally, hotter areas and boilers can be found scattered throughout the Boiler Room.</p>

      <h2>Objective</h2>

      <h3>Part 1: The Main Hall</h3>
      <h4>The Paintings</h4>
      <p>Once you first spawn in, you will find yourself in the Lobby of The Main Hall. There are four paintings on the walls and a check-in desk with 4 cans of Bug Spray. Make sure to grab some, you'll need it for later. Each one of the paintings is a person of a different age: A young girl, a young adult man, a middle-aged man, and an old man. Under each painting is a button. Press the buttons in order from the youngest person in the painting to the oldest person. Once you do that, the door to the rest of The Main Hall will open.</p>

      <h4>The Male Deathmoths Search</h4>
      <p>Directly in front of the now open door is a glass door that has an Elevator, but it has three locks on it, and the locks require Keys. There are hallways to the left and right in this area as well. Down the left hallway is a Dumbwaiter with a Note that says "iF YOU FEED THEM THEY WiLL REWARD YOU" and the option to put an Item inside to send down.</p>
      <p>Using the Bug Spray, you need to search the whole floor for three clusters of Male <a href="/wiki/entities/deathmoth">Deathmoths</a> to get Moth Jelly. Use the Bug Spray on a cluster of Male <a href="/wiki/entities/deathmoth">Deathmoths</a> and they will die and turn into Moth Jelly. Putting the Moth Jelly in the Dumbwaiter and sending it down will reward a Key when it comes back up, so you will need three things of the Moth Jelly. When you kill the last remaining Male <a href="/wiki/entities/deathmoth">Deathmoth</a>, one more will spawn somewhere else, so don't worry if you accidentally eat a Moth Jelly. Using all three Keys on the locks on the glass door will open a hallway and at the end is an Elevator. Enter the Elevator and it will take you to the next floor: The Hotel.</p>

      <h3>Part 2: The Hotel</h3>
      <h4>Find the Letters</h4>
      <p>This is where the terror begins. The Elevator will lead you to the Hotel, and once you make it to the floor, you will notice a Mailbox that has compartments for each main room. There is also a room labelled as Room 235, but there's a Lock on it with a 5-digit code. This room leads to the Boiler Room.</p>
      <p>The Mailbox rooms are all listed in order, and 7 of the boxes will be open (the open boxes are different every time) and you will need to travel to those rooms and collect papers that are on a drawer in the room. Once you collect a paper, you can place it in the mailbox, and it will automatically be placed in its position.</p>
      <p>Be careful, though, because the Hotel has a <a href="/wiki/entities/skin-stealer">Skin-Stealer</a> and a <a href="/wiki/entities/hound">Hound</a> roaming around. There's also more Male <a href="/wiki/entities/deathmoth">Deathmoths</a> around the place, so if you still have some Bug Spray, you can get some Moth Jelly if you find any.</p>
      <p>Once you put all of the papers into the open Mailboxes, a code will appear on the ceiling. The papers spell out "LOOK UP", hinting at the ceiling code. Put the code into the Number Lock on the Room 235 door and it will open, allowing you to proceed onto The Boiler Room.</p>
      <p>There are only 3 possible codes for the Number Lock, and these codes are:</p>
      <ul>
        <li>17564</li>
        <li>05938</li>
        <li>89472</li>
      </ul>

      <h3>Part 3: The Boiler Room</h3>
      <p>After entering the door to Room 235 and going up the stairs, you will end up in The Boiler Room. The room at the start is a small area with a table at the front that has 4 Thermometers and a Note. In order to leave The Boiler Room, you must navigate through the place and find the exit to <a href="/levels/level-2">Level 2</a>.</p>
      <p>The Boiler Room is far from being safe, because the entire place is infested with Female <a href="/wiki/entities/deathmoth">Deathmoths</a> and their nests. Using the Thermometer, you can find where the warm areas are. The warm areas are where the Female <a href="/wiki/entities/deathmoth">Deathmoths</a> spawn the most. Moth Jelly puddles also appear on the ground nearby Female <a href="/wiki/entities/deathmoth">Deathmoths</a>. If the Thermometer says anything other than 72 degrees, that means there's danger nearby.</p>
      <p>The Boiler Room also has 3 checkpoints around the Level in case you die. There are 4 total doors in The Boiler Room, and only one is the exit, so don't fall for the fake doors. Purple doors have Deathmoth Hives behind them. The real exit has an exit sign over it. Ignore any door without it.</p>

      <h2>Items</h2>
      <p>There is a lot of items you can find on this level. These items include:</p>
      <ul>
        <li><strong>Almond Water</strong> — Found everywhere in The Hotel floor.</li>
        <li><strong>Juice</strong> — Found everywhere in The Hotel floor.</li>
        <li><strong>Energy Bar</strong> — Found everywhere in The Hotel floor.</li>
        <li><strong>Flashlight</strong> — Found throughout the level.</li>
        <li><strong>Bug Spray</strong> — First appearance. Found on the check-in desk in The Main Hall. Essential for killing Male Deathmoths to get Moth Jelly.</li>
        <li><strong>Thermometer</strong> — First appearance. Found on a table at the start of The Boiler Room. Used to detect warm areas where Female Deathmoths spawn.</li>
        <li><strong>Moth Jelly</strong> — First appearance. Obtained by using Bug Spray on Male Deathmoths. Used in the Dumbwaiter to get Keys.</li>
      </ul>

      <h2>Entities</h2>
      <p>Level 5 has a few entities lurking around the place. These entities are:</p>
      <h3>The Main Hall</h3>
      <ul>
        <li><a href="/wiki/entities/deathmoth">Male Deathmoth</a> (7 possible spawns) — First appearance. Found throughout The Main Hall. Use Bug Spray to kill them and collect Moth Jelly.</li>
      </ul>
      <h3>The Hotel</h3>
      <ul>
        <li><a href="/wiki/entities/skin-stealer">Skin-Stealer</a> (1) — Roams around The Hotel floor. Be careful when collecting papers.</li>
        <li><a href="/wiki/entities/hound">Hound</a> (1) — Roams around The Hotel floor. Use Flashlight to blind it if encountered.</li>
        <li><a href="/wiki/entities/deathmoth">Male Deathmoth</a> (3) — Found throughout The Hotel floor.</li>
      </ul>
      <h3>The Boiler Room</h3>
      <ul>
        <li><a href="/wiki/entities/deathmoth">Male Deathmoth</a> (5) — Found in The Boiler Room.</li>
        <li><a href="/wiki/entities/deathmoth">Female Deathmoth</a> (9) — First appearance. The main threat in The Boiler Room. Found in warm areas detected by the Thermometer. Much more dangerous than Male Deathmoths.</li>
      </ul>

      <h2>Objects</h2>
      <p>Seven objects can be found in this level. These objects include:</p>
      <ul>
        <li><strong>Dumbwaiter</strong> — Found in the left hallway of The Main Hall. Used to send Moth Jelly down and receive Keys in return.</li>
        <li><strong>Key</strong> — Obtained from the Dumbwaiter after sending Moth Jelly. Used to unlock the three locks on the glass door leading to the Elevator.</li>
        <li><strong>Mailbox</strong> — Found in The Hotel floor. Has compartments for each main room. 7 boxes will be open, requiring papers to be collected and placed inside.</li>
        <li><strong>Number Lock</strong> — Found on Room 235 door in The Hotel. Requires a 5-digit code (17564, 05938, or 89472) to unlock.</li>
        <li><strong>Bed</strong> — Found in hotel rooms.</li>
        <li><strong>Closet</strong> — Found in hotel rooms.</li>
        <li><strong>Bug Spray Valve</strong> — Found in The Boiler Room. Spews Bug Spray to scare off Deathmoths.</li>
      </ul>

      <h2>Entrances & Exits</h2>
      <h3>Entrances</h3>
      <ul>
        <li>Get past the Cameras in <a href="/levels/level-4">Level 4</a> to get here.</li>
      </ul>
      <h3>Exits</h3>
      <ul>
        <li>Find the exit door in The Boiler Room to get back to <a href="/levels/level-2">Level 2</a>.</li>
      </ul>

      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="/images/levels/level-07-01.webp" alt="Level 5 image 1" /></div>
        <div class="gallery-item"><img src="/images/levels/level-07-02.webp" alt="Level 5 image 2" /></div>
        <div class="gallery-item"><img src="/images/levels/level-07-03.webp" alt="Level 5 image 3" /></div>
        <div class="gallery-item"><img src="/images/levels/level-07-04.webp" alt="Level 5 image 4" /></div>
        <div class="gallery-item"><img src="/images/levels/level-07-05.webp" alt="Level 5 image 5" /></div>
        <div class="gallery-item"><img src="/images/levels/level-07-06.webp" alt="Level 5 image 6" /></div>
      </div>
    `,
  },
  {
    id: 8,
    title: 'Level Fun',
    addressBar: 'level-fun',
    description: 'A children\'s birthday party with orange walls and fuzzy blue carpets, home to the Partygoers.',
    imageUrl: '/images/levels/level-08.webp',
    imageAlt: 'Level Fun',
    category: 'Main Levels',
    tags: ['Party', 'Stealth', 'High Danger'],
    isHome: true,
    seo: {
      title: 'Level Fun Walkthrough: Stealth & Partygoers Guide - Escape the Backrooms',
      description: 'Complete guide for Level Fun. Navigate through the birthday party using stealth, hide under tables, pop balloons to distract Partygoers, and escape through the slides to Level 37.',
      keywords: 'Level Fun, Escape the Backrooms, Partygoer, birthday party, stealth, tables, balloons, slides, Level 37, Walkthrough',
    },
    quote: '"I should sneak if I\'m near them."',
    quoteBy: 'The Player after sneaking by the first 2 Partygoers',
    survivalDifficulty: 'Class 3 - High Entity Count',
    sanityDanger: 'Class 1 - Minimal Sanity Risk',
    // Right sidebar: basic info only
    hubModeInfo: {
      name: 'Level Fun',
      description: 'A children\'s birthday party with orange walls and fuzzy blue carpets. The level has Tables to hide under. This level is the home of the Partygoers.',
    },
    info: {
      numberAfterLevel: 'Fun',
      subName: 'N/A',
      orderInPath: 'N/A',
    },
    // Left content: all detailed information
    detailsHtml: `
      <p>Level Fun is a children's birthday party with orange walls and fuzzy blue carpets. The level also has Tables to hide under. This level is the home of the <a href="/wiki/entities/partygoer">Partygoers</a>.</p>

      <h2>Document in The M.E.G. Base</h2>
      <p><strong>File Name:</strong> Level Fun</p>
      <p><strong>Description:</strong> M.E.G. Notice: The information on this level has been removed as it has been vandalized by the Partygoers. They have breached the credential system and any information here should not be trusted.</p>

      <h2>Appearance</h2>
      <p>Level Fun is a children's birthday party with orange walls and fuzzy blue carpets. The level also has Tables to hide under. This level is the home of the <a href="/wiki/entities/partygoer">Partygoers</a>. The environment appears cheerful and colorful, but the presence of numerous <a href="/wiki/entities/partygoer">Partygoers</a> makes it extremely dangerous. The level features a party room at the end that looks completely different from the rest of the level, appearing much more colorful with Tables containing items.</p>

      <h2>Objective</h2>

      <h3>Part 1: The First Half</h3>
      <p>Once you first spawn in, you're going to want to travel until you find a Table blocking the path. Crouch underneath this Table to get through it, and on the other side there is another Table. Pop the Balloons on this Table to attract the nearby <a href="/wiki/entities/partygoer">Partygoer</a>'s attention and then hide underneath it. This should turn the <a href="/wiki/entities/partygoer">Partygoer</a> around that was previously looking straight at the pathway.</p>
      <p>Crouch your way past these nearby <a href="/wiki/entities/partygoer">Partygoers</a> until arriving at the hallway at the end. In the next room, you're going to want to head down the straightforward hallway and crouch behind a turned around <a href="/wiki/entities/partygoer">Partygoer</a> and stay next to the wall of the open area. Just don't go right, because that area is a trap, and don't go left before heading down the straightforward hallway.</p>

      <h3>Part 2: The Second Half</h3>
      <p>Upon getting to the next hallway, you'll come across a larger area with a lot of <a href="/wiki/entities/partygoer">Partygoers</a> around. Once you get into the room, head straight up from the hallway and at the end of the hallway, go right. You'll need to alert the <a href="/wiki/entities/partygoer">Partygoers</a> and go down the nearby hallway, which has a Table in it. Hide underneath the Table and head back out into the hallway.</p>
      <p>This time, run down the hallway where the <a href="/wiki/entities/partygoer">Partygoers</a> see you and go through the left hallway once reaching the end. Keep running down the hallway until you see a room on the right with 2 Tables. Hide underneath one. In the next area, you're going to want to crouch next to the right wall to avoid a <a href="/wiki/entities/partygoer">Partygoer</a> and get to the next hallway.</p>

      <h3>Part 3: The Party</h3>
      <p>This hallway connects to a room that looks completely different from the rest of the level. It appears much more colorful and has some Tables with items. There are no <a href="/wiki/entities/partygoer">Partygoers</a> here either. To escape the level, find the hallway with white tiles that's located in this room, and it will lead to a poolroom.</p>
      <p>The poolroom has 4 tube-shaped Slides that lead to the next level. Go down one (doesn't matter which one) and you'll arrive at <a href="/levels/level-37">Level 37</a>.</p>

      <h2>Items</h2>
      <p>Items you can find in this level are mostly normal. These items include:</p>
      <ul>
        <li><strong>Almond Water</strong> — Found throughout the level.</li>
        <li><strong>Juice</strong> — Found throughout the level.</li>
        <li><strong>Energy Bar</strong> — Found throughout the level.</li>
        <li><strong>Liquid Pain</strong> — First appearance. Found in the party room at the end.</li>
        <li><strong>Flashlight</strong> — Found throughout the level.</li>
      </ul>

      <h2>Entities</h2>
      <p>There is only 1 entity that can be found in Level Fun. This entity is:</p>
      <ul>
        <li><a href="/wiki/entities/partygoer">Partygoer</a> (27) — First appearance. These entities are found throughout the entire level. They are extremely dangerous and will attack on sight. Use stealth and hide under Tables to avoid them. Popping Balloons can be used to distract them.</li>
      </ul>

      <h2>Objects</h2>
      <h3>Used Objects</h3>
      <p>Four objects can be found in this level. These objects include:</p>
      <ul>
        <li><strong>Table</strong> — Found throughout the level. Essential for hiding from Partygoers. Crouch underneath them to avoid detection.</li>
        <li><strong>Balloon</strong> — Found on Tables. Can be popped to attract Partygoer attention and distract them.</li>
        <li><strong>Door</strong> — Used to access different areas.</li>
        <li><strong>Slides</strong> — Found in the poolroom at the end. 4 tube-shaped slides that lead to Level 37. Go down any one of them to escape.</li>
      </ul>
      <h3>Removed Objects</h3>
      <ul>
        <li>LED Light — Removed from current version</li>
      </ul>

      <h2>Entrances & Exits</h2>
      <h3>Entrances</h3>
      <ul>
        <li>Go right in <a href="/levels/level-2">Level 2</a> after escaping <a href="/levels/level-5">Level 5</a> and find the entrance containing a ladder to get here.</li>
      </ul>
      <h3>Exits</h3>
      <ul>
        <li>Find the poolroom and go down one of the 4 Slides to get to <a href="/levels/level-37">Level 37</a>.</li>
      </ul>

      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="/images/levels/level-08-01.webp" alt="Level Fun image 1" /></div>
        <div class="gallery-item"><img src="/images/levels/level-08-02.webp" alt="Level Fun image 2" /></div>
        <div class="gallery-item"><img src="/images/levels/level-08-03.webp" alt="Level Fun image 3" /></div>
        <div class="gallery-item"><img src="/images/levels/level-08-04.webp" alt="Level Fun image 4" /></div>
        <div class="gallery-item"><img src="/images/levels/level-08-05.webp" alt="Level Fun image 5" /></div>
        <div class="gallery-item"><img src="/images/levels/level-08-06.webp" alt="Level Fun image 6" /></div>
      </div>
    `,
  },
  {
    id: 9,
    title: 'Level 37 - The Poolrooms',
    addressBar: 'level-37-the-poolrooms',
    description: 'A large complex of pools slightly submerged in lukewarm water. A safe haven for restoring sanity.',
    imageUrl: '/images/levels/level-09.webp',
    imageAlt: 'Level 37 The Poolrooms',
    category: 'Main Levels',
    tags: ['Safe', 'Restoration', 'Pools'],
    isHome: false,
    seo: {
      title: 'Level 37 The Poolrooms Walkthrough: Sanity Restoration & Hazards - Escape the Backrooms',
      description: 'Complete guide for Level 37 The Poolrooms. Navigate the poolrooms to restore sanity, avoid Dark-Tiled Rooms with Hydrolitis Plague and Hot Water Zone, and find the exit to Level !.',
      keywords: 'Level 37, The Poolrooms, Escape the Backrooms, Hydrolitis Plague, sanity restoration, Dark-Tiled Rooms, Hot Water Zone, Level !, Walkthrough',
    },
    quote: '"There\'s actually natural light and windows in the Level so you can get some fresh air to restore your Sanity."',
    quoteBy: 'Fancy in his 2nd Devlog',
    survivalDifficulty: 'Class 1 - Mostly Safe',
    sanityDanger: 'Class 0 - Restoration of Sanity',
    // Right sidebar: basic info only
    hubModeInfo: {
      name: 'The Poolrooms',
      description: 'A large complex of pools slightly submerged in lukewarm water. Areas that have windows appear to be completely white on the outside. This level provides natural light and fresh air to restore sanity.',
    },
    info: {
      numberAfterLevel: '37',
      subName: 'The Poolrooms',
      orderInPath: 'N/A',
    },
    // Left content: all detailed information
    detailsHtml: `
      <p>Level 37, also known as The Poolrooms, is a level in Escape the Backrooms. It appears to be a complex of pools.</p>

      <h2>Appearance</h2>
      <p>Level 37 is a large complex of pools slightly submerged in lukewarm water. Areas that have windows appear to be completely white on the outside. The level features natural light and windows, providing fresh air that helps restore sanity. This makes it one of the safer levels in the Backrooms, though there are still some dangers to be aware of.</p>

      <h2>Objective</h2>
      <p>When you first spawn in, you will find yourself in a room with no way to get back to <a href="/levels/level-fun">Level Fun</a>. Leave this room, and you will find yourself at the square entrances. Go right here, and then you'll be at the intersection.</p>
      <p>At this intersection, go right again, and after going through a wavy room, you will be in the sewer dungeon. At this sewer dungeon, go forward, and then you'll be in the second wavy room. This room connects to the exit room, which is a room that has 2 life savers and a very short Red Hallway. Enter this Red Hallway to get to <a href="/levels/level-exclamation">Level !</a>.</p>

      <h2>Dying</h2>
      <p>There are two ways to die in this level. You would think you can't because of how safe this level is, but it is actually possible.</p>

      <h3>Dark-Tiled Rooms</h3>
      <p>Dark-Tiled Rooms are rooms that are very small, and have dark blue tiles, so you will need a Flashlight to see in one of these rooms. There are 3 of them in the level. The water in them is infected with the <a href="/wiki/entities/hydrolitis-plague">Hydrolitis Plague</a>. If you enter the water in these rooms, you will die.</p>

      <h3>The Hot Water Zone</h3>
      <p>When going left in the intersection, you will find a spiral staircase that goes down to boiling hot water. If you enter this water, you will die. Avoid this area at all costs.</p>

      <h2>Items</h2>
      <p>There are no items that can be found in this level.</p>

      <h2>Entities</h2>
      <p>Only one entity lives in this level, and it's located in all 3 of the Dark-Tiled Rooms. This entity is:</p>
      <ul>
        <li><a href="/wiki/entities/hydrolitis-plague">Hydrolitis Plague</a> (3) — Found in all 3 Dark-Tiled Rooms. The water in these rooms is infected with this plague, and entering the water will kill you. Use a Flashlight to see in these dark rooms and avoid them entirely.</li>
      </ul>

      <h2>Objects</h2>
      <p>There are no objects in this level.</p>

      <h2>Hazards</h2>
      <p>One hazard exists in this level. This hazard is:</p>
      <ul>
        <li><strong>Dark-Tiled Room</strong> — There are 3 Dark-Tiled Rooms in the level. These rooms are very small with dark blue tiles, requiring a Flashlight to see. The water in these rooms is infected with the Hydrolitis Plague, and entering it will kill you. Avoid these rooms entirely.</li>
      </ul>

      <h2>Entrances & Exits</h2>
      <h3>Entrances</h3>
      <ul>
        <li>Slide down one of the four slides in <a href="/levels/level-fun">Level Fun</a> at the end of the level to get here.</li>
      </ul>
      <h3>Exits</h3>
      <ul>
        <li>Find the room with the short Red Hallway. Enter this Hallway to get to <a href="/levels/level-exclamation">Level !</a>.</li>
        <li>Find the really big room and go up the staircase to get to <a href="/levels/the-hub">The Hub</a>.</li>
      </ul>

      <h3>The Hub Door</h3>
      <p>To find The Hub Door, in the square entrances, go to the top area. You should find yourself in a room that is really big. In this room, there is a really big staircase. At the top of it, you will find The Hub Door.</p>

      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="/images/levels/level-09-01.webp" alt="Level 09 image 1" /></div>
        <div class="gallery-item"><img src="/images/levels/level-09-02.webp" alt="Level 09 image 2" /></div>
        <div class="gallery-item"><img src="/images/levels/level-09-03.webp" alt="Level 09 image 3" /></div>
        <div class="gallery-item"><img src="/images/levels/level-09-04.webp" alt="Level 09 image 4" /></div>
        <div class="gallery-item"><img src="/images/levels/level-09-05.webp" alt="Level 09 image 5" /></div>
        <div class="gallery-item"><img src="/images/levels/level-09-06.webp" alt="Level 09 image 6" /></div>
      </div>
    `,
  },
]


