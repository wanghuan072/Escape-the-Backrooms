// Entities data - flat array structure (wiki-style)
export default [
  {
    id: 1,
    title: 'Wanderer',
    addressBar: 'wanderer',
    description: 'Human beings trapped in the Backrooms, always seen wearing a hazmat suit.',
    imageUrl: '/images/entities/entities-01.webp',
    imageAlt: 'Wanderer Entity',
    dangerLevel: 'Friendly',
    dangerClass: 'danger-friendly',
    isHome: true,
    seo: {
      title: 'Wanderer Entity Guide - Escape the Backrooms',
      description: 'Complete guide to Wanderers - human beings trapped in the Backrooms who wear hazmat suits. Players control a Wanderer in the game.',
      keywords: 'Wanderer, human, hazmat suit, Escape the Backrooms, entity, player character',
    },
    // Right sidebar: basic info only
    entityInfo: {
      name: 'Wanderer',
      otherNames: ['Human (species name)', 'Homo Sapien (scientific name)'],
      species: 'Human',
      firstAppearsIn: 'Level 0',
      portrayedBy: 'ins0mic',
    },
    // Left content: all detailed information
    detailsHtml: `
      <p>Wanderers are human beings who have become trapped in the Backrooms. In Escape the Backrooms, players take on the role of a Wanderer, navigating through the various levels while attempting to escape or survive the hostile environment.</p>

      <h2>Document in The M.E.G. Base</h2>
      <p><strong>Entity Name:</strong> Wanderer</p>
      <p><strong>Classification:</strong> Human (Homo Sapien)</p>
      <p><strong>Danger Level:</strong> Friendly</p>
      <p><strong>Description:</strong> Human beings trapped in the Backrooms, always seen wearing a hazmat suit. Players control a Wanderer character throughout the game.</p>

      <h2>Appearance</h2>
      <p>Wanderers are humans that are trapped in the Backrooms who are always seen wearing a hazmat suit. The design of the hazmat suit can be customized in the Character Select screen before starting a game. All Wanderers are approximately 1.8 meters tall (~5'10.87 feet).</p>
      <p>In the game, you play as a Wanderer whose specific identity is currently unknown. Other Wanderers have been mentioned and even seen in some parts of the game. These other Wanderers don't wear the same hazmat suits as players—instead, they wear a similar-looking design that appears to be a remodeled version of the player's suit.</p>

      <h2>Locations</h2>
      <p>Wanderers can be found in the following locations:</p>
      <ul>
        <li><strong><a href="/levels/level-0">Level 0</a></strong> — Appears in the opening cutscene</li>
        <li><strong>Every Level</strong> — Players themselves are Wanderers, so they are present throughout all levels</li>
        <li><strong>Overgrowth</strong> — Other Wanderers can be encountered here</li>
        <li><strong>Level 974</strong> — Wanderers can be found in this level</li>
        <li><strong>Abandoned Outpost</strong> — Wanderers may appear in this location</li>
      </ul>

      <h2>Behavior</h2>
      <p>As the player character, Wanderers are controlled by the player and their behavior is entirely dependent on player actions. Other Wanderers encountered in the game may have different behaviors or purposes, but the primary focus is on the player's own Wanderer character navigating the dangers of the Backrooms.</p>
      <p>Wanderers are capable of various actions including:</p>
      <ul>
        <li>Walking and running through levels</li>
        <li>Interacting with objects and items</li>
        <li>Using items such as flashlights, keys, and other tools</li>
        <li>Hiding from hostile entities</li>
        <li>Solving puzzles and navigating complex environments</li>
      </ul>

      <h2>Trivia</h2>
      <ul>
        <li>The hazmat suit worn by Wanderers serves as both protection and identification within the Backrooms.</li>
        <li>Players can customize their Wanderer's appearance through the Character Select screen.</li>
        <li>The identity of the player character Wanderer is intentionally left unknown, adding to the mystery of the Backrooms.</li>
        <li>Other Wanderers in the game may represent previous explorers or survivors who became trapped before the player.</li>
        <li>Wanderers are the only truly "friendly" entities players will encounter, as they are other humans trying to survive.</li>
      </ul>

      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="/images/entities/entities-01-01.webp" alt="Wanderer Image 1" /></div>
        <div class="gallery-item"><img src="/images/entities/entities-01-02.webp" alt="Wanderer Image 2" /></div>
        <div class="gallery-item"><img src="/images/entities/entities-01-03.webp" alt="Wanderer Image 3" /></div>
        <div class="gallery-item"><img src="/images/entities/entities-01-04.webp" alt="Wanderer Image 4" /></div>
        <div class="gallery-item"><img src="/images/entities/entities-01-05.webp" alt="Wanderer Image 4" /></div>
        <div class="gallery-item"><img src="/images/entities/entities-01-06.webp" alt="Wanderer Image 4" /></div>
      </div>
    `,
  },
  {
    id: 2,
    title: 'Bacteria',
    addressBar: 'bacteria',
    description: 'Black humanoid creatures with a wired skeletal structure that chase Wanderers on sight.',
    imageUrl: '/images/entities/entities-02.webp',
    imageAlt: 'Bacteria Entity',
    dangerLevel: 'Moderate',
    dangerClass: 'danger-moderate',
    isHome: true,
    seo: {
      title: 'Bacteria Entity Guide - Escape the Backrooms',
      description: 'Complete guide to Bacteria - black humanoid creatures that chase players while emitting loud howling sounds. Learn how to evade them in different levels.',
      keywords: 'Bacteria, Howler, entity, Level 0, Escape the Backrooms, chase, hostile entity',
    },
    // Right sidebar: basic info only
    entityInfo: {
      name: 'Bacteria',
      otherNames: ['Howler (fancy)', 'The Entity from Level 0 (fancy)', 'Loud Wireman (fancy)', 'Lifeform (Kane Pixels name)'],
      species: 'Bacteria',
      firstAppearsIn: 'Level 0',
    },
    // Left content: all detailed information
    detailsHtml: `
      <p>Bacteria is an Entity in Escape the Backrooms. They appear to be black humanoid creatures with a wired skeletal structure that chase Wanderers on sight while emitting loud howling sounds.</p>

      <h2>Document in The M.E.G. Base</h2>
      <p><strong>Entity Name:</strong> Bacteria</p>
      <p><strong>Classification:</strong> Bacteria (species)</p>
      <p><strong>Danger Level:</strong> Moderate</p>
      <p><strong>Description:</strong> Black humanoid creatures with a wired skeletal structure. Bacteria are hostile entities that will chase players on sight while emitting loud howling sounds.</p>

      <h2>Appearance</h2>
      <p>Bacteria appear to be a bunch of interconnected wires with a chunky head. They limp around Levels aimlessly and chase Wanderers on sight while emitting a loud, howling sound. Their wired skeletal structure gives them a distinctive and terrifying appearance, making them easily recognizable in the dark corridors of the Backrooms.</p>

      <h2>Locations</h2>
      <p>This Entity can be found in:</p>
      <ul>
        <li><strong><a href="/levels/level-0">Level 0</a></strong> — Spawns after 3 minutes on the level</li>
        <li><strong>Level 0.11</strong> — Roaming Bacteria can be found here</li>
        <li><strong>Overgrowth</strong> — Roaming Bacteria inhabit this level</li>
        <li><strong>Level 55.1</strong> — Found in the Level 0.3 layer (slower than Level 0 variant)</li>
      </ul>

      <h2>Behavior</h2>
      
      <h3><a href="/levels/level-0">Level 0</a></h3>
      <p>After you spend 3 minutes on this Level, the Bacteria will spawn. Whenever it's near the player, it will mimic knocking sounds to attempt to lure the player in. Once it spots you, it will continuously chase you down until it loses sight of you for some time. If you want to evade it, you must find a dead end, which will then cause the Howler to respawn somewhere else.</p>
      <p><strong>Important:</strong> The Bacteria in <a href="/levels/level-0">Level 0</a> uses deception tactics, mimicking knocking sounds to trick players into approaching it. Once you see it, it will relentlessly pursue you until you break line of sight.</p>

      <h3>Roaming</h3>
      <p>Roaming Bacteria are found in every other level that they are in other than <a href="/levels/level-0">Level 0</a>. If a roaming Bacteria spots you, it will immediately chase you down at a slightly faster speed than on the other Levels, being faster than a Wanderer so running away won't do you any good. If you want to survive, hide in a Vent or a room if in Level 0.11, hide underneath an open hole if in Overgrowth, and hide in a Locker if in Level 55.1 and it won't be able to get you, eventually giving up and returning to its aimless roaming. The one in Level 55.1 is slower than the one in <a href="/levels/level-0">Level 0</a>.</p>
      <p><strong>Survival Tip:</strong> Unlike <a href="/levels/level-0">Level 0</a>, roaming Bacteria don't use deception—they will chase immediately upon spotting you. Your only hope is to find suitable hiding places before they catch up.</p>

      <h2>Do's & Don'ts</h2>
      
      <h3><a href="/levels/level-0">Level 0</a></h3>
      <h4>Do's</h4>
      <ul>
        <li>Turn corners as much as you can to break line of sight.</li>
        <li>Try locating the nearest exit.</li>
        <li>Run away and don't look back until you can't hear it anymore.</li>
      </ul>
      
      <h4>Don'ts</h4>
      <ul>
        <li>Run away in a straight line.</li>
        <li>Follow knocking sounds.</li>
      </ul>

      <h3>Level 0.11</h3>
      <h4>Do's</h4>
      <ul>
        <li>Keep doors open to have a hiding spot ready in case you're spotted.</li>
        <li>Find and hide in Vents to avoid it.</li>
        <li>Peek around corners to avoid accidentally bumping into it.</li>
      </ul>
      
      <h4>Don'ts</h4>
      <ul>
        <li>Attempt to outrun the Bacteria, as it is faster than you in Level 0.11.</li>
        <li>Blindly run around a corner without peeking first.</li>
        <li>Stay near the vents opening, as it might reach you there.</li>
        <li>Try attacking it with the Chainsaw. This will result in death since the Chainsaw cannot be used as a weapon.</li>
      </ul>

      <h3>Level 55.1</h3>
      <h4>Do's</h4>
      <ul>
        <li>Hide in a Locker if you aren't ready to take its picture.</li>
        <li>Keep in mind of where the nearest Locker is and where the Elevator is at.</li>
        <li>Get on the elevator and raise it upward so it cannot reach you.</li>
      </ul>
      
      <h4>Don'ts</h4>
      <ul>
        <li>Go into a dark area without a Flashlight.</li>
        <li>Run around carelessly, as you might accidentally run into it.</li>
        <li>Wait for it to come, because that takes a lot of time.</li>
      </ul>

      <h2>Trivia</h2>
      <ul>
        <li>If you have the VHS effect on, the Bacteria will cause it to glitch and produce static.</li>
        <li>Bacteria originate from the level Overgrowth where they seem to come from large blobs of bacteria scattered around the level. This seems to be indicating that Bacteria are sentient bacteria.</li>
        <li>This is likely also why they are so populous in the Overgrowth level.</li>
        <li>In previous versions of the Game, the static gain was a lot heavier when looking at it.</li>
        <li>The name "The Bacteria" originates from Kane Pixel's Backrooms Series on YouTube.</li>
        <li>In Part 4, the Bacteria's AI was meddled with a little bit, which caused it to not spawn on <a href="/levels/level-0">Level 0</a>, even after three minutes passed.</li>
        <li>The Bacteria in Level 55.1 is specifically slower than the one in <a href="/levels/level-0">Level 0</a>, making it slightly easier to evade.</li>
      </ul>

      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="/images/entities/entities-02-01.webp" alt="Bacteria Image 1" /></div>
        <div class="gallery-item"><img src="/images/entities/entities-02-02.webp" alt="Bacteria Image 2" /></div>
        <div class="gallery-item"><img src="/images/entities/entities-02-03.webp" alt="Bacteria Image 3" /></div>
      </div>
    `,
  },
  {
    id: 3,
    title: 'Skin-Stealer',
    addressBar: 'skin-stealer',
    description: 'Gray humanoid entities that can steal a player\'s skin and disguise themselves as wanderers.',
    imageUrl: '/images/entities/entities-03.webp',
    imageAlt: 'Skin-Stealer Entity',
    dangerLevel: 'Deadly',
    dangerClass: 'danger-extreme',
    isHome: true,
    seo: {
      title: 'Skin-Stealer Entity Guide - Escape the Backrooms',
      description: 'Complete guide to Skin-Stealers - deadly gray humanoid entities that can disguise themselves as players. Learn how to detect and evade them.',
      keywords: 'Skin-Stealer, entity, Level 1, Escape the Backrooms, deadly, disguise, humanoid',
    },
    // Right sidebar: basic info only
    entityInfo: {
      name: 'Skin-Stealer',
      species: 'Humanoid',
      firstAppearsIn: 'Level 1',
      portrayedBy: 'ins0mic',
    },
    // Left content: all detailed information
    detailsHtml: `
      <p>Skin-Stealers are an Entity in Escape the Backrooms. It appears to be a gray Humanoid that can steal a player's skin after killing them and disguise itself as a wanderer, making them extremely dangerous.</p>

      <h2>Document in The M.E.G. Base</h2>
      <p><strong>Entity Name:</strong> Skin-Stealer</p>
      <p><strong>Classification:</strong> Humanoid</p>
      <p><strong>Danger Level:</strong> Deadly</p>
      <p><strong>Description:</strong> Gray humanoid entities with glowing white eyes. Skin-Stealers possess the unique ability to steal a player's skin after killing them and disguise themselves as wanderers, making them one of the most dangerous entities in the Backrooms.</p>

      <h2>Appearance</h2>
      <p>Skin-Stealers are humanoids with a mouth that goes down to their body. Its skin is gray, and it has 2 glowing white eyes. There are also various blood spots on it mainly around its mouth. Skin-Stealers possess the unique ability to steal a player's skin after killing them and disguise itself as a wanderer. When disguised, they appear nearly identical to players wearing hazmat suits, making them extremely difficult to detect.</p>
      <p><strong>True Form:</strong> When not disguised or when the disguise is removed, Skin-Stealers have a distinctive appearance with glowing white eyes that can be spotted from long distances and in the dark. If you see a small white dot high up that is moving, that is a Skin-Stealer.</p>

      <h2>Locations</h2>
      <p>This Entity can be found in:</p>
      <ul>
        <li><strong><a href="/levels/level-1">Level 1 - Habitable Zone</a></strong> — First appearance. Found on Floor 2 and Floor 3.</li>
        <li><strong><a href="/levels/level-5">Level 5 - Terror Hotel</a></strong> — Found in The Hotel floor, roams around while players collect papers.</li>
        <li><strong><a href="/levels/level-8">Level 8 - Cave System</a></strong> — Moves at significantly faster speed here, making them extremely dangerous.</li>
        <li><strong>Level 0.2</strong> — Found in Level 0.1</li>
        <li><strong>Level 55.1</strong> — Found in the Level 0.11 layer</li>
      </ul>

      <h2>Behavior</h2>
      <p>Skin-Stealers will either start with skin on or without it. The Skin appears to be a hazmat suit from a former wanderer. At first glance, it is nearly impossible to spot the difference between a Player and a Disguised Skin-Stealer. Once a Skin-Stealer spots a Player, it will start chasing them and if they are disguised, once they get close enough the Skin will disappear, revealing their True Form.</p>
      <p>Skin-Stealers are slightly slower than the Player on most Levels except for <a href="/levels/level-8">Level 8</a> where they move at a significantly faster speed and will catch up easily to the Player that they are chasing. Skin-Stealers cannot open doors, so make sure to use that to your Advantage. Skin-Stealers cannot harm you if you are hiding under a Bed or in a Closet in <a href="/levels/level-5">Level 5</a>, even if it saw you hide, although it's worth noting that the Skin-Stealer in Level 5 in particular has a 3 minute time after which it will constantly know your location, even if you are hiding and will not stop following you until it sees you, and in Level 8, they have Flashlights to help you spot them around corners or from a distance. You can also hide in Lockers in the Level 0.11 Layer in Level 55.1 and they won't be able to kill you.</p>

      <h3>Talking</h3>
      <p>Skin-Stealers can talk when close to make them seem normal. They can say 3 Things which include:</p>
      <ul>
        <li>"Uh, hello?"</li>
        <li>"Excuse me?"</li>
        <li>"Hey, hey!"</li>
      </ul>
      <p>It is to get players attention and to lure them into thinking they are another player. <strong>Do not be fooled.</strong></p>
      <p>You can detect a Skin-Stealer by the talking they do. They also stand out and have glowing eyes when not disguised, making it easy to see them from long distances and in the dark. If you see a small white dot high up that is moving, that is a Skin-Stealer. Additionally, hostile entities won't attack a Skin-Stealer. If you find out that a hostile entity sees a player and doesn't attack them, that player is a Skin-Stealer. Alternatively, they carry Flashlights which alert you to their location on <a href="/levels/level-8">Level 8</a>.</p>

      <h2>Tips & Advice</h2>
      <p>If you're playing Multiplayer, make sure to stick together. In case you do get separated, make sure everyone will always pull out their ID Card when they see another player. If someone don't do the same and starts running straight at you, it's a Skin-Stealer, so run away and go to the nearest Door. Teamwork and communication are the best ways to survive a Skin-Stealer.</p>

      <h2>Do's & Don'ts</h2>
      
      <h3>Do's</h3>
      <ul>
        <li>Run away from any Players that appear to be chasing you.</li>
        <li>Shut the doors behind you to lose the Skin-Stealer's aggression.</li>
        <li>Keep communication with your team in Multiplayer to avoid being tricked.</li>
        <li>Peek around corners to avoid running into one on accident.</li>
      </ul>

      <h3>Level 1</h3>
      <h4>Do's</h4>
      <ul>
        <li>Hide behind Hiding Doors on Floor 3 in <a href="/levels/level-1">Level 1</a>.</li>
      </ul>

      <h3>Level 5</h3>
      <h4>Do's</h4>
      <ul>
        <li>Hide in the Closets or under the Beds in the Hotel Rooms in The Hotel or close the Door.</li>
      </ul>

      <h3>Level 8</h3>
      <h4>Do's</h4>
      <ul>
        <li>Running back to the start or the Exit and turning the Valve to shut the transporter Door is ideal, though if you manage to lose line of sight for long enough, it will stop chasing you (Does not happen as often due to the Skin-Stealers being faster than the Player in Level 8).</li>
      </ul>

      <h3>Level 0.1</h3>
      <h4>Do's</h4>
      <ul>
        <li>Run into a Generator room and close the Door or run to the nearest Noclipping Floor and jump into it to escape the Skin-Stealer.</li>
      </ul>

      <h3>Level 55.1</h3>
      <h4>Do's</h4>
      <ul>
        <li>Hide inside a Locker or use the Elevator and go up out of reach to avoid it getting to you.</li>
      </ul>

      <h3>Don'ts</h3>
      <ul>
        <li>Attempt to ask someone running at you to see their ID Card, they won't stop.</li>
        <li>Leave Doors behind you open.</li>
        <li>Attempt to Fight the Skin-Stealer.</li>
        <li>Spam F on a Door when being chased down by a Skin-Stealer, stay calm and open the Door once before closing it once.</li>
        <li>Fall for their Talking.</li>
        <li>Press F on a door with another player at the same time while it's chasing you, stay calm and decides who opens the door and closes it.</li>
      </ul>

      <h2>Trivia</h2>
      <ul>
        <li>Skin-Stealers are one of the most dangerous entities in the game due to their ability to disguise themselves as players.</li>
        <li>The disguise ability makes them particularly dangerous in multiplayer games, where players might mistake them for teammates.</li>
        <li>In <a href="/levels/level-8">Level 8</a>, Skin-Stealers move significantly faster than in other levels, making them extremely difficult to escape.</li>
        <li>The glowing white eyes of Skin-Stealers are their most distinctive feature when not disguised, making them visible from long distances.</li>
        <li>Skin-Stealers cannot open doors, which is a key weakness players can exploit for survival.</li>
        <li>Hostile entities won't attack Skin-Stealers, which can be used as a detection method—if an entity ignores a "player," that player is likely a Skin-Stealer.</li>
      </ul>

      <h2>Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="/images/entities/entities-03-01.webp" alt="Skin-Stealer Image 1" /></div>
        <div class="gallery-item"><img src="/images/entities/entities-03-02.webp" alt="Skin-Stealer Image 2" /></div>
        <div class="gallery-item"><img src="/images/entities/entities-03-03.webp" alt="Skin-Stealer Image 3" /></div>
      </div>
    `,
  },
]
