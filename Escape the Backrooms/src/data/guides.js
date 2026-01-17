// Guides data - flat array structure
export default [
  {
    id: 1,
    title: 'Multiplayer Guide: How to Play Co-op',
    addressBar: 'multiplayer-guide',
    description: 'Complete guide on how to play Escape the Backrooms with friends and rescue teammates in multiplayer mode.',
    imageUrl: '/images/guides/multiplayer.webp',
    imageAlt: 'Multiplayer Guide',
    category: 'Gameplay Guides',
    tags: ['Multiplayer', 'Co-op', 'Beginners'],
    isHome: true,
    seo: {
      title: 'Multiplayer Guide: How to Play Co-op in Escape the Backrooms - Escape the Backrooms',
      description: 'Learn how to play Escape the Backrooms in multiplayer mode with up to 4 players. Complete guide on creating lobbies, inviting friends, rescuing teammates, and using communication.',
      keywords: 'Escape the Backrooms multiplayer, co-op guide, how to play with friends, multiplayer setup, voice chat, team rescue',
    },
    detailsHtml: `
      <h2>How to Play Co-op</h2>
      
      <h3>Starting a Session</h3>
      <p>Launch Escape the Backrooms and select "Multiplayer" from the main menu. Create a lobby or join an existing one using the room code. You can host a session for up to 4 players to join and explore the Backrooms together.</p>

      <h3>Inviting Friends</h3>
      <p>Share your room code with friends or invite them through Steam. Up to 4 players can join a session. Make sure everyone has a stable internet connection for the best multiplayer experience.</p>

      <h3>Rescuing Teammates</h3>
      <p>If a teammate is down, approach them and hold the interaction key to revive. Work together to ensure everyone escapes. Communication and coordination are essential for survival in multiplayer mode.</p>

      <h3>Communication</h3>
      <p>Use in-game proximity chat or external voice chat (Discord, Steam Voice Chat, etc.). Communication is key for survival and puzzle solving. Coordinate your movements and share information about entities, items, and exits you discover.</p>

      <h3>Tips for Multiplayer Success</h3>
      <ul>
        <li>Stick together in dangerous areas to help each other if someone gets attacked</li>
        <li>Share resources like flashlights and items you find</li>
        <li>Split up strategically to cover more ground, but stay within communication range</li>
        <li>Assign roles - one person can lead navigation, another can watch for entities</li>
        <li>Use the in-game voice chat for proximity-based communication, adding to the immersion</li>
      </ul>
    `
  },
  {
    id: 2,
    title: 'Microphone & Voice Chat Setup Guide',
    addressBar: 'microphone-voice-chat-setup',
    description: 'Fix microphone issues and configure voice chat settings in Escape the Backrooms for optimal multiplayer communication.',
    imageUrl: '/images/guides/microphone.webp',
    imageAlt: 'Microphone Setup Guide',
    category: 'Technical Guides',
    tags: ['Technical', 'Voice Chat', 'Settings'],
    isHome: false,
    seo: {
      title: 'Microphone & Voice Chat Setup Guide: Fix Mic Issues - Escape the Backrooms',
      description: 'Troubleshoot microphone and voice chat issues in Escape the Backrooms. Learn how to configure audio settings, fix mic not working problems, and optimize voice chat for multiplayer.',
      keywords: 'Escape the Backrooms microphone fix, voice chat not working, mic setup, audio settings, push to talk, voice chat configuration',
    },
    detailsHtml: `
      <h2>Microphone & Voice Chat Setup</h2>
      
      <h3>Initial Setup</h3>
      <p>Before starting a multiplayer session, ensure your microphone is properly connected and recognized by your system. Check your system's audio settings to verify the microphone is working correctly.</p>

      <h3>In-Game Audio Settings</h3>
      <ul>
        <li>Navigate to Settings → Audio</li>
        <li>Select your microphone from the input device dropdown</li>
        <li>Adjust the microphone volume slider to an appropriate level</li>
        <li>Enable "Push to Talk" if you prefer, or use "Always On" for continuous communication</li>
        <li>Test your microphone using the built-in test feature</li>
      </ul>

      <h3>Common Issues & Solutions</h3>
      
      <h4>Microphone Not Working</h4>
      <ul>
        <li>Check if your microphone is set as the default recording device in Windows/Mac system settings</li>
        <li>Ensure the microphone is not muted in system audio settings</li>
        <li>Restart the game after changing audio settings</li>
        <li>Check if other applications are using the microphone exclusively</li>
      </ul>

      <h4>Voice Chat Not Audible</h4>
      <ul>
        <li>Verify your headset/speakers are properly connected</li>
        <li>Check the game's voice chat volume slider in audio settings</li>
        <li>Ensure other players' voice chat is not muted in the in-game player list</li>
        <li>Test your audio output with other applications to rule out hardware issues</li>
      </ul>

      <h3>Steam Settings</h3>
      <p>If you're using Steam Voice Chat:</p>
      <ul>
        <li>Open Steam → Settings → Voice</li>
        <li>Configure your microphone input device</li>
        <li>Adjust voice volume and sensitivity settings</li>
        <li>Enable/disable push-to-talk as preferred</li>
      </ul>

      <h3>Best Practices</h3>
      <ul>
        <li>Use a quality headset with a noise-canceling microphone for better clarity</li>
        <li>Keep your microphone away from speakers to prevent echo and feedback</li>
        <li>Use push-to-talk in noisy environments to avoid background noise</li>
        <li>Adjust microphone sensitivity to prevent picking up keyboard clicks and background noise</li>
      </ul>
    `
  },
  {
    id: 3,
    title: 'VR Setup & Configuration Guide',
    addressBar: 'vr-setup-guide',
    description: 'Complete guide on setting up and configuring VR mode in Escape the Backrooms for an immersive virtual reality experience.',
    imageUrl: '/images/guides/vr-setup.webp',
    imageAlt: 'VR Setup Guide',
    category: 'Technical Guides',
    tags: ['VR', 'Technical', 'Setup'],
    isHome: false,
    seo: {
      title: 'VR Setup & Configuration Guide for Escape the Backrooms - Escape the Backrooms',
      description: 'Learn how to set up and configure VR mode in Escape the Backrooms. Complete guide on VR headset compatibility, settings optimization, motion controls, and troubleshooting.',
      keywords: 'Escape the Backrooms VR, VR setup, virtual reality, VR headset compatibility, VR controls, motion sickness, VR settings',
    },
    detailsHtml: `
      <h2>VR Setup & Configuration</h2>
      
      <h3>Compatible VR Headsets</h3>
      <p>Escape the Backrooms supports various VR headsets including:</p>
      <ul>
        <li>Oculus Rift / Rift S</li>
        <li>Oculus Quest / Quest 2 (via Link or Air Link)</li>
        <li>HTC Vive / Vive Pro</li>
        <li>Valve Index</li>
        <li>Windows Mixed Reality headsets</li>
      </ul>

      <h3>Initial VR Setup</h3>
      <ol>
        <li>Install and configure your VR headset according to manufacturer instructions</li>
        <li>Ensure SteamVR or Oculus software is installed and running</li>
        <li>Calibrate your VR space (room setup / guardian system)</li>
        <li>Launch Escape the Backrooms and navigate to Settings → VR</li>
        <li>Select your VR headset from the device dropdown</li>
      </ol>

      <h3>VR Settings Optimization</h3>
      
      <h4>Graphics Settings</h4>
      <ul>
        <li>Adjust render resolution to match your GPU capabilities</li>
        <li>Enable/disable motion smoothing based on your preference</li>
        <li>Configure super-sampling for better visual clarity (if your GPU can handle it)</li>
        <li>Set texture quality based on your VRAM availability</li>
      </ul>

      <h4>Comfort Settings</h4>
      <ul>
        <li>Enable snap turning to reduce motion sickness</li>
        <li>Adjust turn speed to your comfort level</li>
        <li>Enable vignette effect when moving (helps with motion sickness)</li>
        <li>Configure smooth locomotion vs teleportation movement</li>
      </ul>

      <h3>Motion Controls</h3>
      <p>Escape the Backrooms supports full motion controller support:</p>
      <ul>
        <li>Use your motion controllers to interact with objects, doors, and items</li>
        <li>Point and grab mechanics for picking up and examining items</li>
        <li>Natural hand gestures for opening doors and using flashlights</li>
        <li>Physical crouching and leaning for immersive exploration</li>
      </ul>

      <h3>Troubleshooting</h3>
      
      <h4>Performance Issues</h4>
      <ul>
        <li>Lower render resolution if experiencing frame drops</li>
        <li>Close other applications that might be using GPU resources</li>
        <li>Ensure your GPU meets the minimum VR requirements</li>
        <li>Update GPU drivers to the latest version</li>
      </ul>

      <h4>Motion Sickness</h4>
      <ul>
        <li>Take frequent breaks (recommended: 15-20 minutes)</li>
        <li>Use snap turning instead of smooth turning</li>
        <li>Enable comfort vignette when moving</li>
        <li>Start with shorter play sessions and gradually increase duration</li>
        <li>Ensure your VR space has adequate ventilation</li>
      </ul>

      <h3>VR-Specific Tips</h3>
      <ul>
        <li>Use physical turning (your body) when possible instead of stick turning for better immersion</li>
        <li>Clear your play space of obstacles before starting</li>
        <li>Keep a water bottle nearby as VR sessions can be physically demanding</li>
        <li>Adjust your headset straps for comfort during longer sessions</li>
        <li>Use the chaperone/boundary system to avoid walking into walls</li>
      </ul>
    `
  },
  {
    id: 4,
    title: 'Achievements Guide: Complete Steam Achievement List',
    addressBar: 'achievements-guide',
    description: 'Complete guide to all Steam achievements in Escape the Backrooms. Learn how to unlock every achievement and reach 100% completion.',
    imageUrl: '/images/guides/achievements.webp',
    imageAlt: 'Achievements Guide',
    category: 'Gameplay Guides',
    tags: ['Achievements', 'Steam', 'Completion'],
    isHome: true,
    seo: {
      title: 'Achievements Guide: Complete Steam Achievement List - Escape the Backrooms',
      description: 'Complete guide to all Steam achievements in Escape the Backrooms. Detailed walkthrough on how to unlock every achievement, including hidden achievements and secret unlocks.',
      keywords: 'Escape the Backrooms achievements, Steam achievements, achievement guide, 100% completion, achievement unlock, hidden achievements',
    },
    detailsHtml: `
      <h2>Complete Achievement List</h2>
      <p>This guide covers all achievements available in Escape the Backrooms on Steam. Some achievements are story-related and unlock naturally, while others require specific actions or exploration.</p>

      <h3>Story Progression Achievements</h3>
      
      <h4>Level Completion Achievements</h4>
      <ul>
        <li><strong>First Steps:</strong> Complete Level 0</li>
        <li><strong>Moving Forward:</strong> Complete Level 1</li>
        <li><strong>Deeper In:</strong> Complete Level 5</li>
        <li><strong>The Depths:</strong> Complete Level 10</li>
        <li><strong>Lost:</strong> Complete Level 20</li>
        <li><strong>Hopeless:</strong> Complete Level 50</li>
        <li><strong>Beyond Hope:</strong> Complete Level 100</li>
      </ul>

      <h3>Exploration Achievements</h3>
      
      <h4>Discovery Achievements</h4>
      <ul>
        <li><strong>Explorer:</strong> Discover all major areas in Level 0</li>
        <li><strong>Cartographer:</strong> Collect all map pieces in any level</li>
        <li><strong>Collector:</strong> Find 50 collectible items throughout all levels</li>
        <li><strong>Completionist:</strong> Find 100% of collectibles in a single level</li>
      </ul>

      <h3>Entity & Survival Achievements</h3>
      
      <h4>Survival Achievements</h4>
      <ul>
        <li><strong>Survivor:</strong> Survive an encounter with Bacteria</li>
        <li><strong>Stealth Master:</strong> Complete a level without being detected by any entity</li>
        <li><strong>Speed Runner:</strong> Complete Level 1 in under 10 minutes</li>
        <li><strong>Pacifist:</strong> Complete 5 levels without harming any entities</li>
      </ul>

      <h3>Item & Puzzle Achievements</h3>
      
      <h4>Item Achievements</h4>
      <ul>
        <li><strong>Illuminated:</strong> Use a flashlight for the first time</li>
        <li><strong>Prepared:</strong> Collect 10 different items</li>
        <li><strong>Master Key:</strong> Find and use all key types in the game</li>
        <li><strong>Code Breaker:</strong> Successfully input 5 different elevator codes</li>
      </ul>

      <h3>Multiplayer Achievements</h3>
      
      <h4>Co-op Achievements</h4>
      <ul>
        <li><strong>Team Player:</strong> Complete a level in multiplayer mode</li>
        <li><strong>Savior:</strong> Revive a teammate 5 times</li>
        <li><strong>Coordinated:</strong> Complete a level with 4 players</li>
        <li><strong>Lifeline:</strong> Help a teammate escape who was down</li>
      </ul>

      <h3>Secret & Hidden Achievements</h3>
      
      <h4>Hidden Achievements</h4>
      <ul>
        <li><strong>The End:</strong> Reach the final ending</li>
        <li><strong>Secret Path:</strong> Discover a hidden level</li>
        <li><strong>Easter Egg Hunter:</strong> Find all hidden easter eggs</li>
        <li><strong>True Ending:</strong> Unlock the true ending path</li>
      </ul>

      <h3>Achievement Tracking Tips</h3>
      <ul>
        <li>Check your achievement progress in Steam overlay (Shift+Tab)</li>
        <li>Some achievements require multiple playthroughs or specific routes</li>
        <li>Keep track of collectibles using a checklist or guide</li>
        <li>Some achievements are time-sensitive, so plan your route accordingly</li>
        <li>Use the level selector after completing the game to return to specific levels</li>
      </ul>

      <h3>Completion Percentage</h3>
      <p>To reach 100% achievement completion, you'll need to:</p>
      <ol>
        <li>Complete all story levels</li>
        <li>Find all collectibles</li>
        <li>Discover all secret areas and endings</li>
        <li>Master both single-player and multiplayer modes</li>
        <li>Complete challenge achievements (speed runs, stealth runs, etc.)</li>
      </ol>
    `
  },
  {
    id: 5,
    title: 'Beginner Tips & Survival Guide',
    addressBar: 'beginner-tips-survival-guide',
    description: 'Essential tips and strategies for new players to survive and navigate Escape the Backrooms. Learn the basics of gameplay, resource management, and entity avoidance.',
    imageUrl: '/images/guides/beginner-tips.webp',
    imageAlt: 'Beginner Tips Guide',
    category: 'Gameplay Guides',
    tags: ['Beginners', 'Tips', 'Survival'],
    isHome: true,
    seo: {
      title: 'Beginner Tips & Survival Guide for Escape the Backrooms - Escape the Backrooms',
      description: 'Essential beginner tips and survival strategies for Escape the Backrooms. Learn how to conserve resources, avoid entities, solve puzzles, and escape successfully as a new player.',
      keywords: 'Escape the Backrooms beginner guide, survival tips, how to play, new player guide, entity avoidance, resource management, puzzle solving',
    },
    detailsHtml: `
      <h2>Beginner Tips & Survival Guide</h2>
      
      <h3>Getting Started</h3>
      <p>Welcome to Escape the Backrooms! This guide will help you understand the basics and survive your journey through the liminal spaces.</p>

      <h3>Essential Survival Tips</h3>
      
      <h4>Resource Management</h4>
      <ul>
        <li><strong>Flashlight Battery:</strong> Conserve your flashlight battery. Turn it off when not needed, but always have it ready in dark areas</li>
        <li><strong>Items:</strong> Pick up everything you find - keys, tools, and items may be needed later</li>
        <li><strong>Inventory Space:</strong> Manage your inventory wisely. Some items are essential for progression</li>
        <li><strong>Health:</strong> Be careful around entities and environmental hazards. Your health doesn't regenerate automatically</li>
      </ul>

      <h4>Navigation Tips</h4>
      <ul>
        <li><strong>Landmarks:</strong> Look for unique features or objects to remember areas you've visited</li>
        <li><strong>Maps:</strong> Collect map pieces when possible - they're extremely valuable</li>
        <li><strong>Exits:</strong> Always look for vents, doors, or ladders that might lead to the next level</li>
        <li><strong>Backtracking:</strong> Don't be afraid to backtrack if you think you missed something important</li>
      </ul>

      <h3>Entity Avoidance</h3>
      
      <h4>Recognizing Entities</h4>
      <ul>
        <li><strong>Bacteria:</strong> Fungus-like entities that move slowly. Keep your distance and avoid dark areas where they spawn</li>
        <li><strong>Smilers:</strong> Entities that appear as faces in the darkness. Don't look directly at them - use peripheral vision</li>
        <li><strong>Hounds:</strong> Fast-moving entities. Listen for their sounds and hide if necessary</li>
        <li><strong>Partygoers:</strong> Friendly-looking entities that are actually dangerous. Don't trust their appearance</li>
      </ul>

      <h4>Survival Strategies</h4>
      <ul>
        <li><strong>Stay Quiet:</strong> Running and loud noises can attract entities</li>
        <li><strong>Use Light Strategically:</strong> Light repels some entities but attracts others</li>
        <li><strong>Hide When Needed:</strong> Find closets, vents, or dark corners to hide from entities</li>
        <li><strong>Don't Panic:</strong> Stay calm and think about your escape route</li>
      </ul>

      <h3>Puzzle Solving</h3>
      
      <h4>Common Puzzle Types</h4>
      <ul>
        <li><strong>Elevator Codes:</strong> Look for numbers written on walls or in documents</li>
        <li><strong>Key Locations:</strong> Keys are usually hidden in drawers, on desks, or behind objects</li>
        <li><strong>Door Puzzles:</strong> Some doors require specific items or sequences to open</li>
        <li><strong>Environmental Puzzles:</strong> Use items in your inventory to interact with the environment</li>
      </ul>

      <h4>Solving Tips</h4>
      <ul>
        <li>Examine everything - documents, signs, and environmental clues often contain solutions</li>
        <li>Try combining items if you're stuck</li>
        <li>Look for patterns or sequences in the environment</li>
        <li>Don't rush - take your time to observe and think</li>
      </ul>

      <h3>Level-Specific Advice</h3>
      
      <h4>Early Levels (0-5)</h4>
      <ul>
        <li><strong>Level 0:</strong> Focus on finding ladder pieces and the vent exit. Watch out for Bacteria</li>
        <li><strong>Level 1:</strong> Find the elevator code to progress. Collect keys for locked doors</li>
        <li><strong>Level 2:</strong> Navigate the pipe system carefully. Avoid falling</li>
        <li><strong>Level 3:</strong> Watch out for electrical hazards and use light switches strategically</li>
      </ul>

      <h3>Advanced Tips</h3>
      <ul>
        <li><strong>Save Often:</strong> The game auto-saves at checkpoints, but be aware of your progress</li>
        <li><strong>Learn Patterns:</strong> Entities and levels follow patterns - learn them to navigate more efficiently</li>
        <li><strong>Multiplayer:</strong> Consider playing with friends - teamwork makes survival easier</li>
        <li><strong>Practice:</strong> Don't get discouraged by deaths - each attempt teaches you something new</li>
      </ul>

      <h3>Common Mistakes to Avoid</h3>
      <ul>
        <li>Wasting flashlight battery unnecessarily</li>
        <li>Rushing through levels without exploring</li>
        <li>Ignoring audio cues from entities</li>
        <li>Not reading documents that contain important clues</li>
        <li>Carrying unnecessary items that waste inventory space</li>
        <li>Panicking when encountering entities instead of staying calm</li>
      </ul>
    `
  },
  {
    id: 6,
    title: 'Game Comparison: Escape the Backrooms vs Other Games',
    addressBar: 'game-comparison',
    description: 'Compare Escape the Backrooms with other Backrooms-themed games. Understand the differences and which game this wiki covers.',
    imageUrl: '/images/guides/game-comparison.webp',
    imageAlt: 'Game Comparison Guide',
    category: 'Information',
    tags: ['Information', 'Comparison', 'FAQ'],
    isHome: false,
    seo: {
      title: 'Game Comparison: Escape the Backrooms vs Other Backrooms Games - Escape the Backrooms',
      description: 'Compare Escape the Backrooms with other Backrooms-themed games like Backrooms: Escape Together. Learn the differences, which game this wiki covers, and find the right resources.',
      keywords: 'Escape the Backrooms vs Backrooms Escape Together, game comparison, difference between games, which game does this wiki cover',
    },
    detailsHtml: `
      <h2>Game Comparison</h2>
      <p>This wiki is dedicated exclusively to <strong>Escape the Backrooms</strong> by Fancy Games. Here's how it compares to other Backrooms-themed games.</p>

      <h3>Escape the Backrooms</h3>
      <p><strong>Developer:</strong> Fancy Games</p>
      <p><strong>Publisher:</strong> Secret Mode</p>
      
      <h4>Key Features</h4>
      <ul>
        <li>Linear progression system through numbered levels</li>
        <li>28+ levels with unique mechanics and challenges</li>
        <li>Task list system featured in Level 3999</li>
        <li>Single-player and co-op multiplayer (1-4 players)</li>
        <li>Steam version (v1.0 Full Release)</li>
        <li>VR support available</li>
        <li>Proximity-based voice chat in multiplayer</li>
        <li>Rich environmental storytelling</li>
        <li>Multiple endings and secret levels</li>
      </ul>

      <h4>Gameplay Style</h4>
      <ul>
        <li>Exploration and puzzle-solving focused</li>
        <li>Entity encounters with survival mechanics</li>
        <li>Resource management (flashlight battery, items)</li>
        <li>Map collection and navigation challenges</li>
        <li>Code input for elevators and doors</li>
      </ul>

      <h3>Backrooms: Escape Together</h3>
      <p><strong>Note:</strong> This is a <strong>different game</strong> by a different developer and publisher.</p>
      
      <h4>Key Differences</h4>
      <ul>
        <li>Different developer and publisher</li>
        <li>Different game mechanics and systems</li>
        <li>Different level structure and progression</li>
        <li>Separate entity system and behaviors</li>
        <li>Different progression style and gameplay loop</li>
        <li>Not covered by this wiki</li>
        <li>Separate game entirely with its own community</li>
      </ul>

      <h3>Which Game Does This Wiki Cover?</h3>
      <p><strong>This wiki exclusively covers Escape the Backrooms by Fancy Games.</strong></p>
      <p>If you're looking for guides, walkthroughs, or information about:</p>
      <ul>
        <li>Escape the Backrooms (Fancy Games) → <strong>You're in the right place!</strong></li>
        <li>Backrooms: Escape Together → This wiki does not cover that game. Please search for the appropriate wiki for that specific game.</li>
        <li>Other Backrooms-themed games → This wiki focuses only on Escape the Backrooms by Fancy Games.</li>
      </ul>

      <h3>How to Identify the Game</h3>
      <p>If you're unsure which game you're playing, check:</p>
      <ul>
        <li><strong>Developer/Publisher:</strong> Escape the Backrooms is by Fancy Games / Secret Mode</li>
        <li><strong>Steam Store Page:</strong> Look for "Escape the Backrooms" by Fancy Games</li>
        <li><strong>Game Title Screen:</strong> Should display "Escape the Backrooms" and developer information</li>
        <li><strong>Level Structure:</strong> Escape the Backrooms features numbered levels (Level 0, Level 1, etc.) with a linear progression system</li>
      </ul>

      <h3>Additional Notes</h3>
      <p>While there are multiple Backrooms-themed games available, each has its own unique mechanics, story, and community. This wiki is specifically designed to help players of <strong>Escape the Backrooms by Fancy Games</strong>.</p>
      <p>For guides and information about other Backrooms games, please seek out the appropriate resources for those specific games.</p>
    `
  }
]
