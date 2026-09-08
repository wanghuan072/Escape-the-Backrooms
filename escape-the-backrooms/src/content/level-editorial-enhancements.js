/**
 * Page-specific editorial additions for early guides whose original copy still
 * used broad walkthrough/tips headings. Keeping these additions keyed by level
 * prevents the same generic module from being repeated across the directory.
 */
const editorialEnhancements = {
  en: {
    6: {
      description:
        'Read the portrait route in order, trade Moth Jelly for the three keys, and keep a clear reset point before moving from the Terror Hotel into the Boiler Room.',
      seoTitle: 'Escape the Backrooms Level 5 Walkthrough: Terror Hotel Guide',
      headings: [],
    },
    10: {
      description:
        'Treat Level Fun as a stealth route: use cover and table recovery deliberately, keep Partygoer patrols away from the group, and take the Poolrooms exit only when the route is clear.',
      seoTitle: 'Escape the Backrooms Level Fun Walkthrough: The Party Rooms Guide',
      headings: [],
    },
    1: {
      description:
        'Level 0 becomes manageable once you route the four ladder fragments in one controlled loop, then use the key and pit crossing without losing the team’s landmarks.',
      seoTitle: 'Escape the Backrooms Level 0 Walkthrough: Ladder Locations & Map',
      headings: [
        ['Escape the Backrooms Level 0 Text Walkthrough', 'Find the Ladder, Key, and Level 1 Exit'],
        [
          'Tips and Tricks for Escape the Backrooms Level 0',
          'Level 0 Failure Points and Recovery Routes',
        ],
      ],
      extra: `
        <h2>How We Keep the Level 0 Route Under Control</h2>
        <p>The yellow rooms only feel random if we keep changing the rule halfway through the search. We clear one loop around the ladder area, check the floor beside every partition, and only widen the loop after all four fragments have been accounted for. That makes the repaired ladder the team’s fixed landmark instead of another room everyone is trying to describe over voice chat.</p>
        <ul>
          <li><strong>If Bacteria starts knocking:</strong> the sound is a warning, not a clue. Keep moving, take consecutive corners, and avoid committing to a long dead-straight corridor where it can keep sight of you.</li>
          <li><strong>If a ladder piece appears to be missing:</strong> check behind the short divider walls and retrace the last complete loop. Sending four players into four unknown branches usually makes the search harder to reconstruct.</li>
          <li><strong>If someone falls in the pit:</strong> do not make the rest of the team copy the failed crossing. A player already above can lower the rope; a solo player or a group with nobody across should follow the arrow-marked recovery path below.</li>
        </ul>
        <h3>Current-Version Route Check</h3>
        <p>Older clips show wall clips and balance skips that no longer behave consistently. We treat the narrow crossing as the real route: walk it one player at a time, keep the camera steady, and wait until the landing is clear before the next person commits. The few seconds saved by forcing old collision tricks are not worth restarting the ladder search.</p>
      `,
    },
    2: {
      description:
        'Read the garage’s changing car colours, coordinate four keys at the central locks, and keep a closable door ready when Skin-Stealers enter the search.',
      seoTitle: 'Escape the Backrooms Level 1 Walkthrough: The Habitable Zone Guide',
      headings: [
        ['Step-by-Step Text Guide', 'Clear the Garage, Basement, and Final Tunnel'],
        ['Tips & Tricks for The Habitable Zone', 'What Usually Ends a Level 1 Run'],
      ],
      extra: `
        <h2>Treat the Garage as an Information Puzzle</h2>
        <p>Before touching the elevator keypad, read the car colours in order and repeat them back once. The sequence changes between runs, so a remembered code from a video is not a solution. We use the same discipline for the four keys: call the room as soon as a key is found, then bring every key to the central lock before anyone starts turning one.</p>
        <ul>
          <li><strong>Skin-Stealer in the search route:</strong> keep a closable side room behind you. Once it commits, pull it through the doorway, leave, and shut the door instead of dragging it through every key location.</li>
          <li><strong>Lights fail in the garage:</strong> stop looting. The search route immediately becomes a sprint to a permanently lit side hall because Smilers control the dark lanes.</li>
          <li><strong>Four-key door in co-op:</strong> put one player at each active lock and count down. If the turns are too far apart, reset calmly rather than continuing to spin already-completed locks.</li>
        </ul>
        <h3>Do Not Build the Basement Route Around a Graphics Exploit</h3>
        <p>Low view-distance settings have exposed doors or reduced darkness in some builds, but that visual shortcut is not reliable enough to be the plan. Carry the flashlight, use the ramp and floor layout as landmarks, and stop at the last known doorway if the group splits. The optional Hub terminal can be handled after the route is stable; it is not required to reach the next level.</p>
      `,
    },
    3: {
      description:
        'Move through Pipe Dreams by saving stamina before the steam, then take the left-side gated opening when the Smiler chase begins.',
      seoTitle: 'Escape the Backrooms Level 2 Walkthrough: Pipe Dreams Guide',
      headings: [
        ['Step-by-Step Text Guide', 'Manage Stamina, Steam, and the Smiler Chase'],
        ['Tips & Tricks for Pipe Dreams', 'Pipe Dreams Chase Checks'],
      ],
      extra: `
        <h2>The Chase Is Won Before the Smiler Appears</h2>
        <p>On the first trip through Pipe Dreams, follow the route marked toward the Station and use the quiet stretch to settle your movement rhythm. Run-jumping helps preserve stamina, but clean steering matters more than maximum speed. Pick up the flashlight on the left before leaving the dark section and cross each steam burst only after it vents; taking damage here is what turns the scripted chase into a messy one.</p>
        <ul>
          <li><strong>Start cue:</strong> once the character reacts and the Smiler is audible, stop checking behind you. The chase supplies the stamina you need, so hold the sprint and keep the next opening centred.</li>
          <li><strong>Exit cue:</strong> the safe route is the open, gated break in the left wall near the end. Do not run past it expecting another door after the dead end.</li>
          <li><strong>Multiplayer trigger:</strong> regroup before the last player crosses the chase threshold. A fast lead runner cannot rescue someone who was still looting when the trigger fired.</li>
        </ul>
        <h3>If the Group Becomes Stretched Out</h3>
        <p>Call only the next hazard and the final exit side. Extra directions arrive too late in the narrow tunnel and encourage the last player to look away from the route. If somebody goes down, finish the chase first; turning around places the whole group in the Smiler’s line.</p>
      `,
    },
    4: {
      description:
        'Power the Electrical Station one three-breaker zone at a time, keep clear of live puddles, and save the flashlight response for a committed Hound.',
      seoTitle: 'Escape the Backrooms Level 3 Walkthrough: The Electrical Station Guide',
      headings: [
        ['Step-by-Step Text Guide', 'Power All Three Electrical Station Zones'],
        ['Tips & Tricks for Level 3', 'Hound, Breaker, and Puddle Failure Points'],
      ],
      extra: `
        <h2>Read the Nine-Light Panel as Three Separate Searches</h2>
        <p>The station becomes manageable when we stop treating it as one huge maze. The nine fuse boxes are divided across the East Substation, West Substation, and Generator areas. Finish a three-light group, confirm it at the panel, and use the newly opened gate as the next route boundary. The first section is the safe place to learn the possible switch positions; the later sections reuse that search habit while adding Hounds and electrical hazards.</p>
        <ul>
          <li><strong>Hound at a breaker:</strong> keep the flashlight ready and blind it as it commits, then use the short opening either to finish the interaction or retreat behind a closed door. Do not touch a stunned Hound.</li>
          <li><strong>Difficulty matters:</strong> repeated stuns are more forgiving on Easy. On Hard or Nightmare, assume you may only get one immediate stun and choose the escape door before exposing yourself.</li>
          <li><strong>Generator floor:</strong> glowing electrical puddles are not decoration. Trace the dry edge before approaching a wire puzzle and never backpedal into a puddle while watching a Hound.</li>
        </ul>
        <h3>A Cleaner Co-op Split</h3>
        <p>Split by adjacent rooms, not by entire zones. One player works the panel, one watches the nearest approach, and the others check the next two rooms before regrouping at the last gate. Every fuse call should include the room and the updated light count; “I got one” is not enough when the ninth light fails to turn green.</p>
      `,
    },
    5: {
      description:
        'Solve Level 4 by counting each office prop carefully, moving with the camera sweep, and resetting the security route instead of forcing a locked exit.',
      seoTitle: 'Escape the Backrooms Level 4 Walkthrough: The Abandoned Office Guide',
      headings: [
        ['Step-by-Step Text Guide', 'Solve the Office Puzzles and Camera Hall'],
        ['Tips & Tricks for Level 4', 'Level 4 Counting and Camera Mistakes'],
      ],
      extra: `
        <h2>Count the Room, Not the Example Code</h2>
        <p>The four vending-machine values are generated from the props in your room. We count one category at a time, write the result down, and only then touch the machines. Chairs and stools are the easiest items to miss because legs overlap and small furniture can sit behind plants or desks. If the door stays shut, rotate around the room and recount the category with the messiest silhouettes instead of changing every digit at random.</p>
        <ul>
          <li><strong>Use one counter per category:</strong> in co-op, give books, tables, seats, and water dispensers to different players, then have a fifth check any disputed number.</li>
          <li><strong>Camera hall:</strong> there are four monitored rooms. Move on the sweep, use the side-room cover, and stop the next player from entering if somebody has already turned a camera red.</li>
          <li><strong>Locked exit:</strong> a detection closes the route for the group. Return to the reset control and run the section again; crowding the final door does not override the alarm.</li>
        </ul>
        <h3>What the Crowbar Route Is Actually For</h3>
        <p>The crowbar in the security area opens the vent route back toward the earlier office. It is useful for a retry or for players deliberately checking the optional path, but it is not a substitute for clearing the camera sequence. We leave it until the main exit is understood so nobody disappears into the vent while the rest of the team waits at the locked door.</p>
      `,
    },
    8: {
      headings: [
        ['Step-by-Step Text Guide', 'Read the Boiler Room Before Choosing a Door'],
        ['Tips & Tricks for The Boiler Room', 'Death Moth Warnings and Exit Checks'],
      ],
      extra: `
        <h2>Use Temperature as an Early Warning, Not a Compass</h2>
        <p>The thermometer tells us what is close, not which corridor reaches the exit. A normal room reads about 72°F. Readings around 120–133°F point to a nearby Female Deathmoth, while 140°F is the Hive warning and a reason to turn around. We still check the walls, door colour, and exit sign before committing, because following heat alone leads straight into the rooms we want to avoid.</p>
        <ul>
          <li><strong>When the screen begins to blur:</strong> lower the flashlight, crouch, and back out before running. Female Deathmoths react to careless light and movement.</li>
          <li><strong>Blocked corridor:</strong> trigger the red Bug Spray valve, wait for the gas barrier to affect the moth, and move through during that window instead of trying to squeeze past its model.</li>
          <li><strong>Door check:</strong> the Boiler Room has several convincing doors, but the real exit is the one with the illuminated Exit sign. Purple or unsigned doors can lead toward a Hive.</li>
        </ul>
        <h3>Checkpoint Discipline in Co-op</h3>
        <p>The three checkpoints are more useful as regroup markers than as permission to scatter. We move from one checkpoint to the next with a single thermometer caller. If a player is grabbed, the others do not chase into the hot room; they hold the last safe junction and rebuild the route after the respawn.</p>
      `,
    },
    9: {
      headings: [
        ['Step-by-Step Text Guide', 'Follow the FUN Route Through Steam and Smiler'],
        ['Tips & Tricks for The Pipe Run', 'Pipe Run Movement and Group Timing'],
      ],
      extra: `
        <h2>This Return to the Pipes Has a Different Destination</h2>
        <p>After the Boiler Room sends us back into the concrete tunnels, the important clue is the FUN graffiti. This is not the earlier Station route: take the branch marked for FUN and use the opening section to build speed before the Smiler trigger. Run-jumping is useful while stamina still matters, but we stop forcing jumps in narrow geometry or through an active steam burst.</p>
        <ul>
          <li><strong>Before the chase:</strong> cross steam on its off-cycle and keep enough space between players that one collision does not stop the whole line.</li>
          <li><strong>After the chase begins:</strong> hold the sprint and prioritise steering. The escape is the room with the red ladders; climbing any of them completes the transition to Level Fun.</li>
          <li><strong>Last player rule:</strong> the rear player confirms every tight opening. The leader should not start the next turn until that call arrives.</li>
        </ul>
        <h3>Why Looking Back Is the Expensive Mistake</h3>
        <p>The route is short enough that the Smiler is rarely the real problem. Most failed runs come from clipping a pipe, landing inside a teammate, or turning the camera away from the next steam vent. Keep the sound behind you, the route in front of you, and make the ladder call as soon as the red room appears.</p>
      `,
    },
    11: {
      headings: [
        ['Step-by-Step Text Guide', 'Take the Safe Route Through the Poolrooms'],
        ['Tips & Tricks for The Poolrooms', 'Poolrooms Hazards and Version Differences'],
      ],
      replacements: [
        [
          '<li><strong>The Water Trap:</strong> Warning about the deadly "Hydrolytic Bacteria" in specific pools.</li>',
          '<li><strong>Version-Safe Route:</strong> Recognize the dark-tiled rooms without depending on damage behavior from an older build.</li>',
        ],
        [
          '<h3>3. The "Bacteria" Pools (Death Trap)</h3>',
          '<h3>3. Dark-Tiled Rooms and Version Changes</h3>',
        ],
        [
          '<li><strong>Hydrolytic Bacteria:</strong> Some dark or deep pools contain invisible bacteria that will kill you instantly if you step in.</li>',
          '<li><strong>Hydrolitis Plague:</strong> This is an environmental water hazard associated with the dark-tiled rooms, not the roaming Bacteria from Level 0. Current versions changed the old instant-death behavior.</li>',
        ],
        [
          '<li><strong>Relax:</strong> This is one of the few levels with no chasing entities (unless you count the water bacteria). Take your time to explore and recover.</li>',
          '<li><strong>No roaming chase:</strong> The normal route has no creature hunting the team. Use that breathing room to regroup and read the room shapes.</li>',
        ],
      ],
      sideBarObjectives: 'Restore Sanity, Avoid the Hot Water Route, Find the Red Hallway',
      extra: `
        <h2>The Reliable Right-Right Route to the Red Hallway</h2>
        <p>From the square entrance area, take the right-hand opening, then turn right again at the main intersection. Continue through the first wavy room, the sewer-like chamber, and the second wavy room. The destination is the exit room with two life savers and a short red hallway. Those large shapes are better callouts than “another blue room,” especially when a co-op group spawns apart.</p>
        <ul>
          <li><strong>Dark-tiled rooms:</strong> this is an environmental hazard area associated with the Hydrolitis Plague, not a roaming Bacteria encounter. Older versions handled the damage differently, so old death clips may not match the current release.</li>
          <li><strong>Hot Water Zone:</strong> the spiral stair drops toward boiling water and is not part of the exit route. Turn back rather than using the lower pool as a shortcut.</li>
          <li><strong>Sanity:</strong> entering the Poolrooms restores the group’s sanity. Do not spend the last food or Almond Water from Level Fun before checking the meter here.</li>
        </ul>
        <h3>When Teammates Spawn in Different Rooms</h3>
        <p>Agree on the square entrances, main intersection, or sewer chamber as the meeting landmark. Nobody should reverse the whole route because one player says “I’m at the pool.” Continue to the next named landmark, wait there, and then take the final wavy-room route together.</p>
      `,
    },
    13: {
      headings: [],
      description:
        'Clear The End by counting the required tapes, searching the library in complete zones, using fire alarms and tables against the Scratcher, and returning to the computer for the current Level 94 exit.',
      difficulty: 'Medium',
      sideBarObjectives:
        'Collect 24/32/48 Tapes, Distract the Scratcher, Use the Computer, Reach Level 94',
      fullHtml: `
        <p>The End looks like an abandoned library built around a fake finish line. The route is no longer about forcing an old AI glitch: count the tapes your group needs, clear the shelves in a repeatable order, and use the room’s alarms and tables when the Scratcher crosses that order.</p>
        <h2>Escape the Backrooms: The End Walkthrough Video</h2>
        <iframe src="https://www.youtube.com/embed/xqjOhlKuGiw" allowfullscreen></iframe>
        <h3>Video Highlights:</h3>
        <ul><li><strong>Tape Search:</strong> Clear the shelves without repeatedly crossing the centre.</li><li><strong>Fire Alarms:</strong> Pull one side to create a search window on the other.</li><li><strong>Table Recovery:</strong> Break a chase underneath one of the two usable tables.</li><li><strong>Current Exit:</strong> Return to the computer, then use the unlocked room, ladder, and vent.</li></ul>
        <h2>Check the Tape Total Before Leaving the Computer</h2>
        <p>The computer displays the target for the current lobby: <strong>24 tapes solo, 32 with two players, and 48 with three or four</strong>. We say the number out loud before splitting because the shelves do not tell you which teammate is still working from the solo count. The computer is also the final objective; collecting the last tape does not open the route until somebody returns and interacts with it.</p>
        <h2>Clear the Library in Complete Shelf Zones</h2>
        <p>Pick a side wall, clear every shelf in that zone, then move to the back and opposite side. A half-cleared aisle is hard to recognise after the lights change, so we avoid grabbing one visible tape and immediately crossing the centre for another. The coloured spawn reference on the related map is a search priority drawn from observed runs, not a promise that a tape will occupy every marked point.</p>
        <img src="/images/levels/level-13-01.webp" alt="VHS tape search on the shelves in Escape the Backrooms The End" />
        <h2>How the Scratcher Changes the Search Route</h2>
        <p>The Scratcher cannot rely on sight, but it reacts strongly to sound and patrols between the shelf lanes. Its shushing noise is the early warning. Stop sprinting before it reaches the aisle, let it pass, and resume from the last fully cleared shelf instead of improvising a new route.</p>
        <ul><li><strong>Fire alarm:</strong> choose the shelves you want next, pull the alarm on the opposite side, and use the distraction immediately. Wasting an alarm before choosing a destination only moves the danger without advancing the search.</li><li><strong>Table:</strong> if a chase has already started, get under one of the two tables and stay there until the Scratcher breaks off. A table is the recovery tool; an alarm is the planning tool.</li><li><strong>Co-op noise:</strong> one player calls aisle status while the others keep voice and movement clean. Several players sprinting across the centre can undo the same distraction.</li></ul>
        <img src="/images/levels/level-13-02.webp" alt="Scratcher patrol encounter in Escape the Backrooms The End" />
        <h2>Recover When the Library Lights Go Out</h2>
        <p>The blackout makes unfinished shelf work much harder to identify. Keep a flashlight available, finish the aisle already in front of you, and regroup at a table or the centre computer rather than sending everyone into a different dark lane. If the Scratcher is close, hiding safely is faster than losing the tape count to a restart.</p>
        <h2>Use the Current Exit to Level 94</h2>
        <p>After the required tapes are collected, return to the centre computer and turn it on. The unlocked door leads into the damaged rear room; climb its ladder and enter the vent to reach Level 94. The Orb shown in old routes was removed from this progression, so do not wait beside the computer for a portal animation.</p>
        <img src="/images/levels/level-13-03.webp" alt="The End library layout and route back to the central computer" />
      `,
    },
  },
  de: {
    6: {
      description:
        'Folgt den Porträts in der richtigen Reihenfolge, tauscht Moth Jelly gegen die drei Schlüssel und legt vor dem Boiler Room einen klaren Rückzugsort fest.',
      seoTitle: 'Escape the Backrooms: Level-5-Walkthrough – Terror Hotel',
      headings: [],
    },
    10: {
      description:
        'Behandelt Level Fun als Schleichroute: nutzt Deckung und Tische bewusst, haltet Partygoer von der Gruppe fern und nehmt den Poolrooms-Ausgang erst bei freier Route.',
      seoTitle: 'Escape the Backrooms: Level-Fun-Walkthrough – The Party Rooms',
      headings: [],
    },
    1: {
      description:
        'Level 0 bleibt überschaubar, wenn ihr die vier Leiterteile in einer festen Runde sucht und Schlüssel sowie Grube an klaren Treffpunkten erledigt.',
      seoTitle: 'Escape the Backrooms: Level 0 Walkthrough – Leiter-Fundorte & Karte',
      headings: [
        [
          'Escape the Backrooms Level 0 Text-Walkthrough',
          'Leiter, Schlüssel und Ausgang zu Level 1 finden',
        ],
        [
          'Tips und Tricks für Escape the Backrooms Level 0',
          'Fehlerquellen und Rückwege in Level 0',
        ],
      ],
      extra: `<h2>So behalten wir die Route in Level 0 unter Kontrolle</h2><p>Die gelben Räume wirken nur dann zufällig, wenn man mitten in der Suche ständig die Regel wechselt. Wir laufen zuerst eine vollständige Runde um den Leiterbereich, prüfen den Boden hinter jeder Trennwand und erweitern die Runde erst, wenn alle vier Teile gezählt sind. So bleibt die reparierte Leiter der feste Treffpunkt der Gruppe.</p><ul><li><strong>Wenn Bacteria klopft:</strong> Das Geräusch ist eine Warnung, kein Hinweis. Bleibt in Bewegung, nehmt mehrere Ecken hintereinander und vermeidet lange gerade Flure mit freier Sichtlinie.</li><li><strong>Wenn ein Leiterteil fehlt:</strong> Prüft die kurzen Trennwände und wiederholt die letzte vollständige Runde. Vier Spieler in vier unbekannten Gängen machen die Suche schwerer nachvollziehbar.</li><li><strong>Wenn jemand in die Grube fällt:</strong> Die übrigen Spieler wiederholen den Sprung nicht. Wer oben angekommen ist, lässt das Seil herab; sonst folgt ihr unten den Pfeilen zum Rückweg.</li></ul><h3>Routencheck für die aktuelle Version</h3><p>Ältere Videos zeigen Wand-Clips und Sprünge, die heute nicht mehr zuverlässig funktionieren. Wir nehmen den schmalen Übergang einzeln, halten die Kamera ruhig und warten, bis die Landefläche frei ist. Ein alter Kollisionsfehler spart weniger Zeit als eine erneute Suche nach allen Leiterteilen kostet.</p>`,
    },
    2: {
      description:
        'Lest die wechselnden Autofarben in der Garage, koordiniert die vier Schlösser und haltet bei Skin-Stealern immer einen abschließbaren Raum bereit.',
      seoTitle: 'Escape the Backrooms: Level 1 Walkthrough – Die bewohnbare Zone',
      headings: [
        ['Schritt-für-Schritt Text-Guide', 'Garage, Keller und finalen Tunnel abschließen'],
        ['Tips & Tricks für The Habitable Zone', 'Woran ein Lauf durch Level 1 meist scheitert'],
      ],
      extra: `<h2>Die Garage ist vor allem ein Informationsrätsel</h2><p>Lest die Autofarben in Reihenfolge ab und wiederholt sie einmal, bevor jemand das Tastenfeld benutzt. Die Folge wechselt von Lauf zu Lauf; ein Code aus einem Video ist keine Lösung. Dasselbe gilt für die vier Schlüssel: Nennt den Fundraum und bringt alle Schlüssel zum zentralen Schloss, bevor jemand zu drehen beginnt.</p><ul><li><strong>Skin-Stealer auf der Suchroute:</strong> Behält einen abschließbaren Nebenraum im Rücken. Lockt ihn durch die Tür, verlasst den Raum und schließt ab, statt ihn durch alle Fundorte zu ziehen.</li><li><strong>Das Licht fällt aus:</strong> Brecht die Suche ab und lauft sofort in einen dauerhaft beleuchteten Seitengang. Die dunklen Fahrspuren gehören dann den Smilern.</li><li><strong>Vier Schlösser im Koop:</strong> Stellt je einen Spieler an ein Schloss und zählt herunter. Bei zu großem Abstand setzt ihr ruhig zurück, statt fertige Schlösser weiterzudrehen.</li></ul><h3>Plant den Keller nicht um einen Grafikfehler herum</h3><p>Niedrige Sichtweite hat in einigen Builds Türen oder Wände sichtbar gemacht, ist aber keine verlässliche Route. Nehmt die Taschenlampe, nutzt Rampe und Etagen als Orientierung und wartet an der letzten bekannten Tür, falls sich die Gruppe trennt. Das optionale Hub-Terminal kann später gelöst werden; für den Ausgang ist es nicht nötig.</p>`,
    },
    3: {
      description:
        'Teilt euch die Ausdauer vor den Dampfröhren ein und nehmt in der Smiler-Jagd die vergitterte Öffnung auf der linken Seite.',
      seoTitle: 'Escape the Backrooms: Level 2 Walkthrough – Pipe Dreams',
      headings: [
        ['Schritt-für-Schritt Text-Guide', 'Ausdauer, Dampf und Smiler-Jagd meistern'],
        ['Tipps & Tricks für Pipe Dreams', 'Kontrollpunkte für die Pipe-Dreams-Jagd'],
      ],
      extra: `<h2>Die Jagd wird entschieden, bevor der Smiler erscheint</h2><p>Beim ersten Besuch folgt ihr den Markierungen zur Station und nutzt den ruhigen Abschnitt für einen sauberen Laufrhythmus. Run-Jumping schont Ausdauer, aber kontrollierte Lenkung ist wichtiger. Nehmt vor dem Ende des dunklen Bereichs die Taschenlampe links mit und wartet bei jedem Dampfstoß auf die Pause.</p><ul><li><strong>Startsignal:</strong> Sobald die Figur reagiert und der Smiler zu hören ist, schaut ihr nicht mehr zurück. Haltet Sprint und die nächste Öffnung in der Bildschirmmitte.</li><li><strong>Ausgangssignal:</strong> Gegen Ende liegt der sichere Weg in der offenen, vergitterten Lücke links. Wer daran vorbeiläuft, landet in der Sackgasse.</li><li><strong>Mehrspieler-Auslöser:</strong> Sammelt euch, bevor der letzte Spieler die Jagdschwelle überquert. Der Läufer vorne kann niemanden retten, der noch Gegenstände sucht.</li></ul><h3>Wenn die Gruppe auseinandergezogen wird</h3><p>Ruft nur das nächste Hindernis und die Seite des Ausgangs. Lange Anweisungen kommen im engen Tunnel zu spät. Fällt jemand, beendet der Rest zuerst die Jagd; ein Umdrehen bringt die ganze Gruppe in die Sichtlinie des Smilers.</p>`,
    },
    4: {
      description:
        'Versorgt die Electrical Station Abschnitt für Abschnitt, meidet Strompfützen und nutzt die Taschenlampe erst, wenn ein Hound wirklich angreift.',
      seoTitle: 'Escape the Backrooms: Level 3 Walkthrough – Electrical Station',
      headings: [
        [
          'Schritt-für-Schritt Text-Guide',
          'Alle drei Zonen der Electrical Station mit Strom versorgen',
        ],
        ['Tipps & Tricks für Level 3', 'Fehler bei Hounds, Sicherungen und Strompfützen'],
      ],
      extra: `<h2>Die Neun-Lichter-Tafel sind drei getrennte Suchläufe</h2><p>Die Station wird übersichtlich, wenn ihr sie nicht als ein einziges Labyrinth behandelt. Die neun Sicherungskästen verteilen sich auf East Substation, West Substation und Generator. Schließt jeweils drei Lichter ab, prüft die Tafel und nutzt das neue Tor als Grenze für den nächsten Abschnitt.</p><ul><li><strong>Hound am Schalter:</strong> Blendet ihn erst beim Angriff. Das kurze Fenster reicht zum Betätigen oder zum Rückzug hinter eine geschlossene Tür. Berührt keinen betäubten Hound.</li><li><strong>Schwierigkeitsgrad:</strong> Auf Easy sind mehrere Blendungen verzeihlicher. Auf Hard oder Nightmare plant ihr so, als gäbe es nur eine sofortige Chance, und wählt vorher die Fluchttür.</li><li><strong>Generatorboden:</strong> Leuchtende Strompfützen sind tödliche Hindernisse. Sucht zuerst den trockenen Rand und geht nicht rückwärts hinein, während ihr einen Hound beobachtet.</li></ul><h3>Saubere Aufgabenverteilung im Koop</h3><p>Teilt benachbarte Räume auf, nicht ganze Zonen. Einer bedient den Kasten, einer sichert den Zugang, die anderen prüfen zwei Räume und treffen sich am letzten Tor. Jede Meldung nennt Raum und aktuellen Lichtstand; „Ich habe einen“ hilft beim fehlenden neunten Licht nicht.</p>`,
    },
    5: {
      description:
        'Zählt die Bürogegenstände sorgfältig, bewegt euch im Rhythmus der Kameras und setzt die Sicherheitsroute zurück, statt einen verschlossenen Ausgang zu erzwingen.',
      seoTitle: 'Escape the Backrooms: Level 4 Walkthrough – Das verlassene Büro',
      headings: [
        ['Schritt-für-Schritt Text-Guide', 'Bürorätsel und Kameragang lösen'],
        ['Tipps & Tricks für Level 4', 'Zählfehler und Kameraalarme in Level 4'],
      ],
      extra: `<h2>Zählt den Raum, nicht den Beispielcode</h2><p>Die vier Werte der Automaten entstehen aus den Gegenständen in eurem Raum. Wir zählen jede Kategorie einzeln, notieren die Zahl und bedienen erst danach die Automaten. Stühle und Hocker werden leicht übersehen, weil Beine überlappen oder Möbel hinter Pflanzen stehen. Bleibt die Tür zu, zählt zuerst die unübersichtlichste Kategorie neu.</p><ul><li><strong>Eine Kategorie pro Spieler:</strong> Verteilt Bücher, Tische, Sitzmöbel und Wasserspender. Eine weitere Person kontrolliert nur strittige Zahlen.</li><li><strong>Kameragang:</strong> Vier Räume werden überwacht. Bewegt euch mit dem Schwenkbereich und schickt niemanden weiter, wenn eine Kamera bereits rot ist.</li><li><strong>Verriegelter Ausgang:</strong> Nach einer Sichtung kehrt ihr zur Rücksetztaste zurück. Die Gruppe an der letzten Tür zu sammeln, überschreibt den Alarm nicht.</li></ul><h3>Wozu der Brecheisenweg dient</h3><p>Das Brecheisen im Sicherheitsbereich öffnet einen Lüftungsweg zurück ins frühere Büro. Er hilft bei einem neuen Versuch oder beim optionalen Erkunden, ersetzt aber nicht die Kamerasequenz. Wir lassen ihn liegen, bis der normale Ausgang verstanden ist.</p>`,
    },
    8: {
      headings: [
        ['Schritt-für-Schritt Text-Guide', 'Den Boiler Room lesen, bevor ihr eine Tür wählt'],
        ['Tipps & Tricks für den Boiler Room', 'Warnzeichen der Death Moths und Ausgangskontrolle'],
      ],
      extra: `<h2>Die Temperatur warnt vor Gefahr, zeigt aber nicht den Ausgang</h2><p>Das Thermometer sagt, was in der Nähe ist, nicht welcher Flur richtig ist. Ein normaler Raum liegt bei etwa 72 °F. 120–133 °F weisen auf eine Female Deathmoth hin; 140 °F warnt vor einem Hive und bedeutet umkehren. Prüft zusätzlich Wände, Türfarbe und Ausgangsschild.</p><ul><li><strong>Das Bild wird unscharf:</strong> Senkt die Taschenlampe, geht in die Hocke und zieht euch zurück, bevor ihr lauft. Licht und unvorsichtige Bewegung können die Motten reizen.</li><li><strong>Blockierter Flur:</strong> Betätigt das rote Bug-Spray-Ventil, wartet auf die Gaswirkung und passiert erst in diesem Zeitfenster.</li><li><strong>Türprüfung:</strong> Nur die Tür mit beleuchtetem Exit-Schild ist der echte Ausgang. Violette oder unbeschriftete Türen können zum Hive führen.</li></ul><h3>Checkpoint-Regel im Koop</h3><p>Nutzt die drei Checkpoints als Treffpunkte, nicht als Einladung zum Aufteilen. Eine Person liest das Thermometer vor. Wird jemand gepackt, rennt die Gruppe nicht in den heißen Raum, sondern hält die letzte sichere Kreuzung.</p>`,
    },
    9: {
      headings: [
        ['Schritt-für-Schritt Text-Guide', 'Der FUN-Route durch Dampf und Smiler folgen'],
        ['Tipps & Tricks für The Pipe Run', 'Bewegung und Gruppentiming im Pipe Run'],
      ],
      extra: `<h2>Dieser zweite Rohrabschnitt hat ein anderes Ziel</h2><p>Nach dem Boiler Room führen euch die FUN-Markierungen, nicht mehr die frühere Station-Route. Nehmt den entsprechend markierten Abzweig und baut vor dem Smiler Tempo auf. Run-Jumping hilft, solange Ausdauer wichtig ist; in engen Rohren oder durch aktiven Dampf erzwingen wir keinen Sprung.</p><ul><li><strong>Vor der Jagd:</strong> Wartet den Dampfzyklus ab und haltet Abstand, damit eine Kollision nicht die ganze Reihe stoppt.</li><li><strong>Nach dem Auslöser:</strong> Haltet Sprint und konzentriert euch auf die Linie. Der Raum mit den roten Leitern ist der Ausgang; jede Leiter führt zu Level Fun.</li><li><strong>Letzter Spieler:</strong> Der Hinterste bestätigt jede enge Öffnung. Erst danach beginnt der nächste Richtungswechsel.</li></ul><h3>Warum Zurückschauen so teuer ist</h3><p>Der Abschnitt ist kurz; häufiger scheitert man an einem Rohr, einem Mitspieler oder einem übersehenen Dampfstoß als am Tempo des Smilers. Lasst das Geräusch hinter euch und meldet den Leiterraum sofort.</p>`,
    },
    11: {
      headings: [
        ['Schritt-für-Schritt Text-Guide', 'Die sichere Route durch die Poolrooms'],
        ['Tipps & Tricks für die Poolrooms', 'Gefahren und Versionsunterschiede der Poolrooms'],
      ],
      replacements: [
        [
          '<li><strong>Die Wasserfalle:</strong> Warnung vor den tödlichen "hydrolytischen Bakterien" in bestimmten Pools.</li>',
          '<li><strong>Versionssichere Route:</strong> Erkennt dunkel gekachelte Räume, ohne euch auf das Schadensverhalten einer alten Version zu verlassen.</li>',
        ],
        [
          '<h3>3. Die "Bakterien"-Pools (Todesfalle)</h3>',
          '<h3>3. Dunkel gekachelte Räume und Versionsänderungen</h3>',
        ],
        [
          '<li><strong>Hydrolytische Bakterien:</strong> Einige dunkle oder tiefe Pools enthalten unsichtbare Bakterien, die dich sofort töten, wenn du hineintrittst.</li>',
          '<li><strong>Hydrolitis Plague:</strong> Dies ist eine Umweltgefahr in den dunkel gekachelten Räumen, nicht die umherlaufende Bacteria aus Level 0. Aktuelle Versionen haben das frühere Soforttod-Verhalten geändert.</li>',
        ],
        [
          '<li><strong>Entspannen:</strong> Dies ist eines der wenigen Level ohne jagende Entitäten (außer den Wasserbakterien). Nimm dir Zeit zum Erkunden und Regenerieren.</li>',
          '<li><strong>Keine umherlaufende Jagd:</strong> Auf der normalen Route verfolgt euch keine Kreatur. Nutzt die Ruhe zum Sammeln und merkt euch die Raumformen.</li>',
        ],
      ],
      sideBarObjectives: 'Sanity wiederherstellen, Hot Water Zone meiden, roten Flur finden',
      extra: `<h2>Die verlässliche Rechts-rechts-Route zum roten Flur</h2><p>Von den quadratischen Eingängen nehmt ihr rechts und an der großen Kreuzung noch einmal rechts. Folgt dem ersten Wellenraum, dem kanalartigen Raum und dem zweiten Wellenraum. Der Ausgangsraum hat zwei Rettungsringe und einen kurzen roten Flur. Diese Formen sind im Koop bessere Ansagen als „noch ein blauer Raum“.</p><ul><li><strong>Dunkel gekachelte Räume:</strong> Hier geht es um die Umweltgefahr Hydrolitis Plague, nicht um eine umherlaufende Bacteria. Ältere Versionen behandelten den Schaden anders, daher passen alte Todesclips nicht immer zur aktuellen Fassung.</li><li><strong>Hot Water Zone:</strong> Die Wendeltreppe führt zu kochendem Wasser und gehört nicht zum Ausgang. Kehrt um, statt den unteren Pool als Abkürzung zu testen.</li><li><strong>Sanity:</strong> Beim Betreten werden die Werte der Gruppe wiederhergestellt. Verbraucht nicht die letzten Vorräte aus Level Fun, bevor ihr die Anzeige geprüft habt.</li></ul><h3>Wenn Spieler getrennt starten</h3><p>Legt quadratische Eingänge, Hauptkreuzung oder Kanalraum als Treffpunkt fest. Dreht nicht die ganze Route um, weil jemand nur „beim Pool“ sagt. Geht bis zum nächsten benannten Punkt und wartet dort.</p>`,
    },
    13: {
      headings: [],
      description:
        'Schließt The End ab, indem ihr die nötigen Kassetten zählt, die Bibliothek Bereich für Bereich absucht, Feueralarme und Tische gegen den Scratcher nutzt und für den aktuellen Ausgang zu Level 94 zum Computer zurückkehrt.',
      difficulty: 'Mittel',
      sideBarObjectives:
        '24/32/48 Kassetten sammeln, Scratcher ablenken, Computer nutzen, Level 94 erreichen',
      fullHtml: `<p>The End ist eine verlassene Bibliothek, die wie ein falsches Spielende aussieht. Statt einen alten KI-Fehler zu erzwingen, zählt ihr die nötigen Kassetten, arbeitet die Regale in einer festen Reihenfolge ab und nutzt Alarm und Tische, sobald der Scratcher diese Route kreuzt.</p><h2>Escape the Backrooms: The End Walkthrough Video</h2><iframe src="https://www.youtube.com/embed/xqjOhlKuGiw" allowfullscreen></iframe><h3>Video-Highlights:</h3><ul><li><strong>Kassettensuche:</strong> Leert ganze Regalbereiche, ohne ständig durch die Mitte zu laufen.</li><li><strong>Feueralarm:</strong> Lockt den Scratcher auf eine Seite und durchsucht die andere.</li><li><strong>Tisch als Rückweg:</strong> Beendet eine Verfolgung unter einem der beiden geeigneten Tische.</li><li><strong>Aktueller Ausgang:</strong> Kehrt zum Computer zurück und nehmt Raum, Leiter und Lüftung.</li></ul><h2>Prüft die Kassettenzahl am Computer</h2><p>Der Computer zeigt das Ziel für die Lobby: <strong>24 Kassetten solo, 32 mit zwei Spielern und 48 mit drei oder vier</strong>. Sprecht die Zahl vor dem Aufteilen aus. Der Computer ist außerdem der letzte Pflichtschritt; die Tür öffnet sich nach der letzten Kassette erst, wenn jemand zurückkehrt und mit ihm interagiert.</p><h2>Leert die Bibliothek in vollständigen Regalbereichen</h2><p>Beginnt an einer Seitenwand, arbeitet jedes Regal dort ab und wechselt erst danach zur Rückwand und Gegenseite. Ein halb geleerter Gang ist nach dem Lichtwechsel kaum wiederzuerkennen. Die farbigen Punkte auf der zugehörigen Karte sind beobachtete Suchprioritäten, keine garantierten Spawnpunkte.</p><img src="/images/levels/level-13-01.webp" alt="Suche nach VHS-Kassetten in den Regalen von The End" /><h2>So verändert der Scratcher die Suchroute</h2><p>Der Scratcher verlässt sich nicht auf Sicht, reagiert aber stark auf Geräusche und patrouilliert zwischen den Regalen. Sein Zischen ist die frühe Warnung. Hört auf zu sprinten, lasst ihn passieren und setzt die Suche am letzten vollständig geleerten Regal fort.</p><ul><li><strong>Feueralarm:</strong> Wählt zuerst den nächsten Regalbereich, zieht den Alarm auf der anderen Seite und nutzt das Zeitfenster sofort.</li><li><strong>Tisch:</strong> Hat die Jagd bereits begonnen, kriecht unter einen der beiden Tische und wartet, bis der Scratcher abbricht. Der Tisch rettet eine Jagd; der Alarm plant sie.</li><li><strong>Koop-Lärm:</strong> Einer meldet die fertigen Gänge. Mehrere Spieler, die durch die Mitte sprinten, zerstören dieselbe Ablenkung.</li></ul><img src="/images/levels/level-13-02.webp" alt="Scratcher-Patrouille in Escape the Backrooms The End" /><h2>Verhalten beim Lichtausfall</h2><p>Im Dunkeln sind halbfertige Regale schwer zu erkennen. Beendet den Gang vor euch und sammelt euch an einem Tisch oder am Computer, statt euch in verschiedene dunkle Reihen zu verteilen. Ist der Scratcher nahe, spart ein sicheres Versteck mehr Zeit als ein Neustart.</p><h2>Der aktuelle Ausgang zu Level 94</h2><p>Nach allen Kassetten schaltet ihr den Computer in der Mitte ein. Die geöffnete Tür führt in einen beschädigten Hinterraum; steigt die Leiter hoch und nehmt den Lüftungsschacht zu Level 94. Der Orb aus alten Guides wurde aus diesem Ablauf entfernt.</p><img src="/images/levels/level-13-03.webp" alt="Bibliothekslayout und Rückweg zum Computer in The End" />`,
      extra: '',
    },
  },
  fr: {
    6: {
      description:
        'Suivez les portraits dans le bon ordre, échangez la Moth Jelly contre les trois clés et gardez un vrai point de repli avant de passer à la chaufferie.',
      seoTitle: 'Escape the Backrooms : guide du niveau 5 — Terror Hotel',
      headings: [],
    },
    10: {
      description:
        'Abordez Level Fun comme une route d’infiltration : utilisez couvert et tables avec intention, écartez les Partygoers du groupe et ne prenez la sortie des Poolrooms que lorsque la voie est libre.',
      seoTitle: 'Escape the Backrooms : guide de Level Fun — Party Rooms',
      headings: [],
    },
    1: {
      description:
        'Le niveau 0 devient lisible lorsque vous cherchez les quatre morceaux d’échelle dans une boucle fixe, puis gérez clé et fosse avec des repères communs.',
      seoTitle: 'Escape the Backrooms : guide du niveau 0 — échelle et carte',
      headings: [
        [
          'Solution Textuelle Escape the Backrooms Niveau 0',
          'Trouver l’échelle, la clé et la sortie vers le niveau 1',
        ],
        [
          'Conseils et astuces pour Escape the Backrooms Niveau 0',
          'Erreurs fréquentes et itinéraires de secours du niveau 0',
        ],
      ],
      extra: `<h2>Comment nous gardons le contrôle sur le niveau 0</h2><p>Les salles jaunes paraissent aléatoires dès qu’on change de méthode en cours de route. Nous terminons d’abord une boucle autour de l’échelle, vérifions le sol derrière chaque cloison, puis élargissons la recherche seulement après avoir compté les quatre morceaux. L’échelle réparée devient ainsi le repère fixe de l’équipe.</p><ul><li><strong>Si Bacteria se met à frapper :</strong> ce bruit est un avertissement, pas un indice. Continuez d’avancer, enchaînez les angles et évitez les longs couloirs où il conserve la ligne de vue.</li><li><strong>S’il manque un morceau :</strong> revérifiez les petites cloisons et refaites la dernière boucle complète. Quatre joueurs partis dans quatre branches rendent la recherche impossible à reconstruire.</li><li><strong>Si quelqu’un tombe dans la fosse :</strong> les autres ne répètent pas la même traversée. Un joueur déjà en haut peut descendre la corde ; sinon, suivez les flèches en contrebas.</li></ul><h3>Vérification pour la version actuelle</h3><p>D’anciennes vidéos montrent des passages dans les murs et des sauts devenus irréguliers. Nous traversons le passage étroit un par un, caméra stable, en attendant que l’arrivée soit libre. Un vieux bug de collision ne fait pas gagner le temps perdu à rechercher l’échelle.</p>`,
    },
    2: {
      description:
        'Lisez les couleurs variables des voitures, coordonnez les quatre serrures centrales et gardez une porte refermable en tête face aux Skin-Stealers.',
      seoTitle: 'Escape the Backrooms : guide du niveau 1 — zone habitable',
      headings: [
        ['Guide Textuel Étape par Étape', 'Traverser le parking, le sous-sol et le tunnel final'],
        [
          'Conseils et astuces pour La Zone Habitable',
          'Ce qui fait généralement échouer un niveau 1',
        ],
      ],
      extra: `<h2>Le parking est surtout un problème d’information</h2><p>Relevez les couleurs des voitures dans l’ordre et répétez-les avant de toucher au clavier. La suite change à chaque partie : le code d’une vidéo ne résout pas votre salle. Pour les quatre clés, annoncez la pièce du butin et rapportez tout devant la porte centrale avant de tourner une serrure.</p><ul><li><strong>Skin-Stealer pendant la fouille :</strong> gardez une salle qui ferme derrière vous. Attirez-le à l’intérieur, ressortez et fermez la porte au lieu de le promener entre les clés.</li><li><strong>Extinction des lumières :</strong> arrêtez de fouiller et rejoignez immédiatement un couloir latéral éclairé ; les Smilers contrôlent les voies sombres.</li><li><strong>Porte à quatre clés :</strong> placez un joueur devant chaque serrure et faites un compte à rebours. Si le timing échoue, reprenez calmement.</li></ul><h3>Ne construisez pas l’itinéraire sur un bug graphique</h3><p>Une faible distance d’affichage a parfois révélé des portes, mais ce raccourci visuel n’est pas fiable. Gardez la lampe, utilisez la rampe et les étages comme repères, et attendez à la dernière porte connue si le groupe se sépare. Le terminal du Hub reste optionnel.</p>`,
    },
    3: {
      description:
        'Préservez votre endurance avant les jets de vapeur, puis prenez l’ouverture grillagée à gauche dès que la poursuite du Smiler commence.',
      seoTitle: 'Escape the Backrooms : guide du niveau 2 — Pipe Dreams',
      headings: [
        ['Guide Textuel Étape par Étape', 'Gérer l’endurance, la vapeur et la poursuite du Smiler'],
        [
          'Conseils et astuces pour Pipe Dreams',
          'Contrôles essentiels pendant la poursuite de Pipe Dreams',
        ],
      ],
      extra: `<h2>La poursuite se gagne avant l’apparition du Smiler</h2><p>Lors du premier passage, suivez les indications vers la Station et profitez de la zone calme pour stabiliser vos mouvements. Le run-jump économise l’endurance, mais une trajectoire propre compte davantage. Prenez la lampe à gauche avant de quitter l’obscurité et attendez la fin de chaque jet de vapeur.</p><ul><li><strong>Signal de départ :</strong> dès que le personnage réagit et que le Smiler s’entend, ne vous retournez plus. Sprintez en gardant la prochaine ouverture au centre.</li><li><strong>Signal de sortie :</strong> près de la fin, prenez la brèche grillagée ouverte à gauche. La dépasser mène au cul-de-sac.</li><li><strong>Déclenchement en multijoueur :</strong> regroupez-vous avant que le dernier joueur franchisse le seuil de la poursuite.</li></ul><h3>Si le groupe s’étire</h3><p>Annoncez seulement le prochain obstacle et le côté de la sortie. Les longues explications arrivent trop tard dans ce tunnel. Si quelqu’un tombe, terminez d’abord la poursuite ; faire demi-tour expose toute l’équipe.</p>`,
    },
    4: {
      description:
        'Alimentez l’Electrical Station zone par zone, évitez les flaques sous tension et gardez la lampe pour un Hound qui s’engage réellement.',
      seoTitle: 'Escape the Backrooms : guide du niveau 3 — Electrical Station',
      headings: [
        ['Guide Textuel Étape par Étape', 'Alimenter les trois zones de la centrale électrique'],
        [
          'Conseils et Astuces pour le Niveau 3',
          'Échecs liés aux Hounds, disjoncteurs et flaques électriques',
        ],
      ],
      extra: `<h2>Les neuf voyants correspondent à trois recherches distinctes</h2><p>La centrale devient lisible lorsqu’on cesse de la traiter comme un seul labyrinthe. Les neuf boîtes sont réparties entre East Substation, West Substation et Generator. Terminez un groupe de trois, vérifiez le panneau et utilisez la grille ouverte comme frontière suivante.</p><ul><li><strong>Hound devant un boîtier :</strong> aveuglez-le au moment de la charge, puis utilisez ces secondes pour finir ou vous replier derrière une porte. Ne touchez pas un Hound étourdi.</li><li><strong>La difficulté compte :</strong> Easy autorise davantage d’erreurs. En Hard ou Nightmare, prévoyez une seule neutralisation immédiate et choisissez d’abord la porte de repli.</li><li><strong>Sol du Generator :</strong> contournez les flaques lumineuses avant de lire les fils et ne reculez jamais dedans en surveillant un Hound.</li></ul><h3>Une répartition plus propre en coopération</h3><p>Partagez les salles voisines, pas des zones entières. Un joueur manipule, un autre garde l’accès et les autres contrôlent deux pièces avant le regroupement. Chaque annonce doit donner la salle et le nombre de voyants.</p>`,
    },
    5: {
      description:
        'Comptez chaque élément du bureau, avancez avec le balayage des caméras et réinitialisez la sécurité au lieu de forcer une sortie verrouillée.',
      seoTitle: 'Escape the Backrooms : guide du niveau 4 — bureau abandonné',
      headings: [
        [
          'Guide Textuel Étape par Étape',
          'Résoudre les énigmes du bureau et le couloir des caméras',
        ],
        ['Conseils et Astuces pour le Niveau 4', 'Erreurs de comptage et alarmes du niveau 4'],
      ],
      extra: `<h2>Comptez votre salle, pas le code d’exemple</h2><p>Les quatre valeurs des distributeurs viennent des objets présents dans votre partie. Nous comptons une catégorie à la fois, notons le résultat, puis utilisons les machines. Chaises et tabourets se cachent facilement derrière plantes et bureaux. Si la porte reste fermée, recomptez d’abord la catégorie la moins lisible.</p><ul><li><strong>Une catégorie par joueur :</strong> répartissez livres, tables, sièges et fontaines, puis faites contrôler seulement les nombres discutés.</li><li><strong>Couloir des caméras :</strong> quatre salles sont surveillées. Avancez avec le balayage et retenez le joueur suivant dès qu’une caméra devient rouge.</li><li><strong>Sortie verrouillée :</strong> revenez au bouton de réinitialisation. S’entasser devant la porte finale n’annule pas l’alarme.</li></ul><h3>À quoi sert vraiment le pied-de-biche</h3><p>Le pied-de-biche de la sécurité ouvre une ventilation qui revient vers le bureau précédent. Cette voie aide à recommencer ou à explorer, mais ne remplace pas la séquence des caméras. Nous la gardons pour après avoir compris la sortie principale.</p>`,
    },
    8: {
      headings: [
        ['Guide Textuel Étape par Étape', 'Lire la chaufferie avant de choisir une porte'],
        [
          'Conseils et astuces pour la Chaufferie',
          'Alertes des Death Moths et contrôle de la sortie',
        ],
      ],
      extra: `<h2>La température avertit du danger, elle ne montre pas la sortie</h2><p>Le thermomètre indique ce qui se trouve à proximité. Une salle normale affiche environ 72 °F. Entre 120 et 133 °F, une Female Deathmoth est proche ; à 140 °F, la ruche impose de faire demi-tour. Vérifiez aussi la couleur des portes et le panneau Exit.</p><ul><li><strong>L’image devient floue :</strong> baissez la lampe, accroupissez-vous et reculez avant de courir. La lumière et les mouvements imprudents attirent les femelles.</li><li><strong>Couloir bloqué :</strong> actionnez la vanne rouge de Bug Spray, attendez l’effet du gaz, puis traversez pendant cette fenêtre.</li><li><strong>Contrôle des portes :</strong> seule la porte avec le panneau Exit éclairé mène dehors. Une porte violette ou sans panneau peut conduire à la ruche.</li></ul><h3>Discipline aux points de contrôle</h3><p>Servez-vous des trois checkpoints comme lieux de regroupement. Un seul joueur annonce le thermomètre. Si quelqu’un est emporté, les autres tiennent le dernier carrefour sûr au lieu de courir dans la zone chaude.</p>`,
    },
    9: {
      headings: [
        ['Guide Textuel Étape par Étape', 'Suivre la route FUN entre vapeur et Smiler'],
        ['Conseils et astuces pour The Pipe Run', 'Mouvement et timing collectif dans le Pipe Run'],
      ],
      extra: `<h2>Ce retour dans les tuyaux a une autre destination</h2><p>Après la chaufferie, suivez le graffiti FUN plutôt que l’ancienne route de la Station. Prenez la branche indiquée et gagnez de la vitesse avant le déclenchement du Smiler. Le run-jump aide tant que l’endurance compte, mais nous ne forçons aucun saut dans un tuyau étroit ou sous un jet actif.</p><ul><li><strong>Avant la poursuite :</strong> passez la vapeur entre deux cycles et laissez assez d’espace pour qu’une collision n’arrête pas toute la file.</li><li><strong>Après le déclenchement :</strong> sprintez et soignez la trajectoire. La salle aux échelles rouges est la sortie ; elles mènent toutes à Level Fun.</li><li><strong>Dernier joueur :</strong> il confirme chaque passage étroit avant le prochain virage.</li></ul><h3>Pourquoi se retourner coûte la partie</h3><p>Le trajet est court. Les échecs viennent surtout d’un tuyau, d’un équipier ou d’un jet oublié. Gardez le bruit derrière vous et annoncez la salle des échelles dès qu’elle apparaît.</p>`,
    },
    11: {
      headings: [
        ['Guide Textuel Étape par Étape', 'Suivre la route sûre dans les Poolrooms'],
        [
          'Conseils et astuces pour les Poolrooms',
          'Dangers et différences de version des Poolrooms',
        ],
      ],
      replacements: [
        [
          '<li><strong>Le piège à eau :</strong> Avertissement concernant la redoutable "Bactérie hydrolytique" dans certains bassins.</li>',
          '<li><strong>Route adaptée à la version actuelle :</strong> repérez les salles sombres sans dépendre des dégâts d’une ancienne version.</li>',
        ],
        [
          '<h3>3. Les bassins à "Bactéries" (Piège mortel)</h3>',
          '<h3>3. Salles aux carreaux sombres et changements de version</h3>',
        ],
        [
          '<li><strong>Bactérie hydrolytique :</strong> Certains bassins sombres ou profonds contiennent des bactéries invisibles qui vous tueront instantanément si vous y mettez le pied.</li>',
          '<li><strong>Hydrolitis Plague :</strong> il s’agit d’un danger environnemental lié aux salles sombres, et non de la Bacteria mobile du niveau 0. Les versions actuelles ont modifié l’ancien comportement de mort instantanée.</li>',
        ],
        [
          "<li><strong>Détendez-vous :</strong> C'est l'un des rares niveaux sans entité de poursuite (hormis les bactéries aquatiques). Prenez votre temps pour explorer et récupérer.</li>",
          '<li><strong>Aucune poursuite mobile :</strong> aucune créature ne chasse l’équipe sur la route normale. Profitez de ce calme pour vous regrouper et lire la forme des salles.</li>',
        ],
      ],
      sideBarObjectives:
        'Restaurer la santé mentale, éviter la zone d’eau chaude, trouver le couloir rouge',
      extra: `<h2>La route droite-droite vers le couloir rouge</h2><p>Depuis les entrées carrées, prenez à droite, puis encore à droite au grand carrefour. Traversez la première salle ondulée, la salle qui ressemble à un égout et la seconde salle ondulée. La sortie contient deux bouées et un court couloir rouge. Ces formes sont de meilleurs repères que « une autre salle bleue ».</p><ul><li><strong>Salles aux carreaux sombres :</strong> il s’agit d’un danger environnemental lié à l’Hydrolitis Plague, pas d’une Bacteria en patrouille. Les anciennes versions géraient les dégâts autrement.</li><li><strong>Hot Water Zone :</strong> l’escalier en spirale descend vers l’eau bouillante et ne mène pas à la sortie. Faites demi-tour.</li><li><strong>Santé mentale :</strong> l’entrée dans les Poolrooms restaure le groupe. Ne consommez pas vos dernières réserves avant de vérifier la jauge.</li></ul><h3>Si les joueurs apparaissent séparément</h3><p>Choisissez les entrées carrées, le carrefour principal ou la salle d’égout comme point de rencontre. N’inversez pas tout le trajet pour « je suis près d’une piscine » : avancez jusqu’au prochain repère nommé et attendez.</p>`,
    },
    13: {
      headings: [],
      description:
        'Terminez The End en comptant les cassettes requises, en vidant la bibliothèque par zones, en utilisant alarmes et tables contre le Scratcher, puis en revenant à l’ordinateur pour la sortie actuelle vers le niveau 94.',
      difficulty: 'Moyen',
      sideBarObjectives:
        'Récupérer 24/32/48 cassettes, détourner le Scratcher, utiliser l’ordinateur, atteindre le niveau 94',
      fullHtml: `<p>The End ressemble à une bibliothèque abandonnée construite autour d’une fausse fin. Il ne s’agit plus de forcer un ancien bug d’IA : comptez les cassettes du groupe, terminez chaque rangée et utilisez alarmes et tables lorsque le Scratcher coupe votre parcours.</p><h2>Vidéo de soluce Escape the Backrooms : The End</h2><iframe src="https://www.youtube.com/embed/xqjOhlKuGiw" allowfullscreen></iframe><h3>Points forts de la vidéo :</h3><ul><li><strong>Recherche :</strong> videz des zones complètes sans retraverser sans cesse le centre.</li><li><strong>Alarmes :</strong> attirez le Scratcher d’un côté pour fouiller l’autre.</li><li><strong>Tables :</strong> interrompez une poursuite sous l’une des deux tables utilisables.</li><li><strong>Sortie actuelle :</strong> ordinateur, porte ouverte, échelle puis conduit.</li></ul><h2>Vérifiez le total sur l’ordinateur</h2><p>L’écran demande <strong>24 cassettes en solo, 32 à deux et 48 à trois ou quatre</strong>. Annoncez le nombre avant de vous séparer. L’ordinateur reste aussi la dernière étape : la porte ne s’ouvre pas à la dernière cassette tant que personne n’est revenu interagir avec lui.</p><h2>Videz des zones de rayonnages complètes</h2><p>Commencez par un mur latéral, terminez chaque étagère, puis passez au fond et au côté opposé. Une allée à moitié faite devient difficile à reconnaître après l’extinction. Les points colorés de la carte associée indiquent des priorités observées, pas des apparitions garanties.</p><img src="/images/levels/level-13-01.webp" alt="Recherche de cassettes VHS dans les rayonnages de The End" /><h2>Comment le Scratcher modifie la fouille</h2><p>Le Scratcher ne compte pas sur la vue, mais réagit fortement au bruit et patrouille entre les allées. Son chuintement prévient de son approche. Arrêtez de sprinter, laissez-le passer et reprenez au dernier rayon entièrement vidé.</p><ul><li><strong>Alarme :</strong> choisissez les rayons suivants, tirez l’alarme du côté opposé et exploitez aussitôt la diversion.</li><li><strong>Table :</strong> si la poursuite a commencé, cachez-vous sous l’une des deux tables jusqu’à ce qu’il abandonne. La table répare une erreur ; l’alarme prépare le trajet.</li><li><strong>Bruit en coopération :</strong> un joueur annonce les allées terminées. Plusieurs traversées au sprint annulent la même diversion.</li></ul><img src="/images/levels/level-13-02.webp" alt="Patrouille du Scratcher dans Escape the Backrooms The End" /><h2>Réagir à l’extinction des lumières</h2><p>Dans le noir, les rayons inachevés sont difficiles à reconnaître. Terminez l’allée devant vous et regroupez-vous à une table ou à l’ordinateur. Si le Scratcher approche, une cachette sûre coûte moins de temps qu’un redémarrage.</p><h2>Prendre la sortie actuelle vers le niveau 94</h2><p>Une fois le quota atteint, revenez à l’ordinateur central et allumez-le. La porte mène à une pièce arrière endommagée ; montez l’échelle et entrez dans le conduit vers le niveau 94. L’Orb des anciennes routes a été retiré de cette progression.</p><img src="/images/levels/level-13-03.webp" alt="Plan de la bibliothèque et retour vers l’ordinateur de The End" />`,
      extra: '',
    },
  },
  es: {
    6: {
      description:
        'Seguid los retratos en orden, cambiad Moth Jelly por las tres llaves y dejad un punto de regreso claro antes de pasar a la Sala de Calderas.',
      seoTitle: 'Escape the Backrooms: guía del nivel 5 — Terror Hotel',
      headings: [],
    },
    10: {
      description:
        'Tratad Level Fun como una ruta de sigilo: usad coberturas y mesas con intención, alejad a los Partygoers del grupo y tomad la salida a las Poolrooms solo cuando el camino esté libre.',
      seoTitle: 'Escape the Backrooms: guía de Level Fun — Party Rooms',
      headings: [],
    },
    1: {
      description:
        'El nivel 0 se vuelve manejable al buscar los cuatro fragmentos de escalera en un circuito fijo y resolver llave y foso con referencias compartidas.',
      seoTitle: 'Escape the Backrooms: guía del nivel 0 — escalera y mapa',
      headings: [
        [
          'Escape the Backrooms Tutorial de texto de nivel 0',
          'Encontrar la escalera, la llave y la salida al nivel 1',
        ],
        [
          'Consejos y trucos para Escape the Backrooms Nivel 0',
          'Errores habituales y rutas de recuperación del nivel 0',
        ],
      ],
      extra: `<h2>Cómo mantenemos bajo control la ruta del nivel 0</h2><p>Las salas amarillas solo parecen aleatorias cuando cambiamos de método a mitad de la búsqueda. Primero cerramos una vuelta alrededor de la escalera, miramos detrás de cada separador y ampliamos el recorrido después de contar los cuatro fragmentos. Así, la escalera reparada sigue siendo el punto fijo del equipo.</p><ul><li><strong>Si Bacteria empieza a golpear:</strong> el sonido es un aviso, no una pista. Seguid avanzando, enlazad varias esquinas y evitad pasillos largos donde mantenga la línea de visión.</li><li><strong>Si falta un fragmento:</strong> revisad los separadores bajos y repetid la última vuelta completa. Mandar a cuatro personas por cuatro ramales hace imposible reconstruir la búsqueda.</li><li><strong>Si alguien cae al pozo:</strong> los demás no repiten el cruce fallido. Quien ya esté arriba puede bajar la cuerda; si nadie ha cruzado, seguid las flechas de la ruta inferior.</li></ul><h3>Comprobación para la versión actual</h3><p>Los vídeos antiguos muestran saltos y clips de pared que ya no son constantes. Cruzamos de uno en uno, con la cámara estable, y esperamos a que quede libre la llegada. Un viejo fallo de colisión no compensa reiniciar la búsqueda de la escalera.</p>`,
    },
    2: {
      description:
        'Leed los colores cambiantes de los coches, coordinad las cuatro cerraduras centrales y dejad una puerta cerrable preparada ante los Skin-Stealers.',
      seoTitle: 'Escape the Backrooms: guía del nivel 1 — zona habitable',
      headings: [
        ['Guía de texto paso a paso', 'Superar el garaje, el sótano y el túnel final'],
        [
          'Consejos y trucos para la zona habitable',
          'Lo que suele acabar con una partida en el nivel 1',
        ],
      ],
      extra: `<h2>El garaje es, sobre todo, un problema de información</h2><p>Leed los colores de los coches en orden y repetidlos antes de tocar el teclado. La secuencia cambia entre partidas; el código de un vídeo no resuelve vuestra sala. Con las cuatro llaves hacemos lo mismo: anunciad la habitación y llevadlas a la puerta central antes de girar ninguna.</p><ul><li><strong>Skin-Stealer durante la búsqueda:</strong> mantened a la espalda una sala que se pueda cerrar. Atraedlo dentro, salid y cerrad en vez de llevarlo por todas las llaves.</li><li><strong>Se apagan las luces:</strong> dejad de registrar objetos y corred a un pasillo lateral iluminado; los Smilers dominan las calles oscuras.</li><li><strong>Puerta de cuatro llaves:</strong> colocad a una persona en cada cerradura y haced una cuenta atrás. Si falla el ritmo, reiniciad con calma.</li></ul><h3>No baséis el sótano en un fallo gráfico</h3><p>Una distancia de dibujado baja ha mostrado puertas en algunas versiones, pero no es una ruta fiable. Llevad la linterna, usad la rampa y las plantas como referencias y esperad en la última puerta conocida si el grupo se separa. El terminal del Hub es opcional.</p>`,
    },
    3: {
      description:
        'Guardad resistencia antes de los chorros de vapor y tomad la abertura con reja de la izquierda cuando empiece la persecución del Smiler.',
      seoTitle: 'Escape the Backrooms: guía del nivel 2 — Pipe Dreams',
      headings: [
        [
          'Guía de texto paso a paso',
          'Controlar la resistencia, el vapor y la persecución del Smiler',
        ],
        [
          'Consejos y trucos para soñar con quimeras',
          'Comprobaciones durante la persecución de Pipe Dreams',
        ],
      ],
      extra: `<h2>La persecución se gana antes de que aparezca el Smiler</h2><p>En la primera visita, seguid las señales hacia la Station y aprovechad el tramo tranquilo para estabilizar el movimiento. Correr y saltar conserva resistencia, pero dirigir bien importa más. Recoged la linterna de la izquierda antes de salir de la zona oscura y esperad a que termine cada ráfaga de vapor.</p><ul><li><strong>Señal de inicio:</strong> cuando reaccione el personaje y se oiga al Smiler, dejad de mirar atrás. Mantened el sprint y la próxima abertura centrada.</li><li><strong>Señal de salida:</strong> cerca del final, tomad la abertura enrejada de la izquierda. Pasarla de largo conduce al callejón sin salida.</li><li><strong>Activación multijugador:</strong> reuníos antes de que la última persona cruce el umbral de la persecución.</li></ul><h3>Si el grupo se estira</h3><p>Avisad solo del siguiente obstáculo y del lado de la salida. Las explicaciones largas llegan tarde en el túnel. Si alguien cae, terminad primero la persecución; volver expone a todo el grupo.</p>`,
    },
    4: {
      description:
        'Activad la Electrical Station por zonas, evitad los charcos eléctricos y reservad la linterna para cuando un Hound se comprometa a atacar.',
      seoTitle: 'Escape the Backrooms: guía del nivel 3 — Electrical Station',
      headings: [
        ['Guía de texto paso a paso', 'Dar corriente a las tres zonas de la Central Eléctrica'],
        [
          'Consejos y trucos para el nivel 3',
          'Fallos con Hounds, disyuntores y charcos eléctricos',
        ],
      ],
      extra: `<h2>El panel de nueve luces son tres búsquedas separadas</h2><p>La estación se entiende mejor si no se trata como un único laberinto. Las nueve cajas se reparten entre East Substation, West Substation y Generator. Completad tres luces, confirmad el panel y usad la nueva puerta como límite del siguiente tramo.</p><ul><li><strong>Hound junto a una caja:</strong> cegadlo cuando cargue y usad esos segundos para terminar o retiraros tras una puerta. No toquéis a un Hound aturdido.</li><li><strong>La dificultad importa:</strong> Easy permite más errores. En Hard o Nightmare, contad con una única oportunidad inmediata y elegid antes la puerta de huida.</li><li><strong>Suelo del Generator:</strong> bordeando los charcos eléctricos antes de leer los cables evitaréis retroceder hacia uno mientras vigiláis al Hound.</li></ul><h3>Un reparto más limpio en cooperativo</h3><p>Dividid habitaciones contiguas, no zonas completas. Una persona usa la caja, otra vigila el acceso y las demás revisan dos salas antes de reagruparse. Cada aviso debe incluir sala y número de luces.</p>`,
    },
    5: {
      description:
        'Contad cada objeto de la oficina, avanzad con el barrido de las cámaras y reiniciad seguridad en vez de forzar una salida bloqueada.',
      seoTitle: 'Escape the Backrooms: guía del nivel 4 — oficina abandonada',
      headings: [
        ['Guía de texto paso a paso', 'Resolver las pruebas de la oficina y el pasillo de cámaras'],
        ['Consejos y trucos para el nivel 4', 'Errores de recuento y alarmas del nivel 4'],
      ],
      extra: `<h2>Contad vuestra sala, no el código de ejemplo</h2><p>Los cuatro valores de las máquinas salen de los objetos de la partida. Contamos una categoría, anotamos el resultado y solo después tocamos los controles. Sillas y taburetes se esconden detrás de plantas y escritorios. Si la puerta no abre, repetid primero la categoría con más siluetas superpuestas.</p><ul><li><strong>Una categoría por persona:</strong> repartid libros, mesas, asientos y fuentes de agua; que otra persona compruebe solo las cifras dudosas.</li><li><strong>Pasillo de cámaras:</strong> hay cuatro salas vigiladas. Moveos con el barrido y detened al siguiente jugador si una cámara ya está roja.</li><li><strong>Salida bloqueada:</strong> volved al control de reinicio. Juntarse frente a la puerta final no anula la alarma.</li></ul><h3>Para qué sirve realmente la palanca</h3><p>La palanca de seguridad abre un conducto hacia la oficina anterior. Sirve para reintentar o explorar, pero no sustituye la secuencia de cámaras. La dejamos para cuando todo el grupo entiende la salida principal.</p>`,
    },
    8: {
      headings: [
        ['Guía de texto paso a paso', 'Leer la Sala de Calderas antes de elegir una puerta'],
        [
          'Consejos y trucos para la sala de calderas',
          'Avisos de las Death Moths y control de la salida',
        ],
      ],
      extra: `<h2>La temperatura avisa del peligro, no señala la salida</h2><p>El termómetro dice qué hay cerca. Una sala normal marca unos 72 °F. Entre 120 y 133 °F hay una Female Deathmoth próxima; 140 °F indica una colmena y toca dar la vuelta. Comprobad también el color de la puerta y el cartel Exit.</p><ul><li><strong>La imagen se vuelve borrosa:</strong> bajad la linterna, agachaos y retroceded antes de correr. La luz y el movimiento descuidado pueden atraer a las polillas.</li><li><strong>Pasillo bloqueado:</strong> activad la válvula roja de Bug Spray, esperad el efecto del gas y cruzad durante esa ventana.</li><li><strong>Control de puertas:</strong> solo la puerta con el cartel Exit iluminado es la salida. Las puertas moradas o sin señal pueden llevar a la colmena.</li></ul><h3>Disciplina en los puntos de control</h3><p>Usad los tres checkpoints para reuniros. Una persona canta la temperatura. Si una polilla atrapa a alguien, el resto mantiene el último cruce seguro en lugar de perseguirla hasta la sala caliente.</p>`,
    },
    9: {
      headings: [
        ['Guía de texto paso a paso', 'Seguir la ruta FUN entre vapor y Smiler'],
        ['Consejos y trucos para The Pipe Run', 'Movimiento y ritmo del grupo en Pipe Run'],
      ],
      extra: `<h2>Este regreso a las tuberías tiene otro destino</h2><p>Después de la Sala de Calderas, seguid el grafiti FUN y no la antigua ruta de la Station. Tomad el ramal marcado y ganad velocidad antes del Smiler. Correr y saltar ayuda mientras importa la resistencia, pero no forzamos saltos entre tuberías estrechas o bajo vapor activo.</p><ul><li><strong>Antes de la persecución:</strong> cruzad el vapor entre ciclos y dejad espacio para que un choque no detenga la fila.</li><li><strong>Después de activarla:</strong> mantened el sprint y cuidad la línea. La sala de las escaleras rojas es la salida; cualquiera conduce a Level Fun.</li><li><strong>Último jugador:</strong> confirma cada paso estrecho antes del siguiente giro.</li></ul><h3>Por qué mirar atrás sale caro</h3><p>La ruta es corta. Es más habitual chocar con una tubería, otro jugador o el vapor que perder por velocidad. Dejad el sonido atrás y avisad de las escaleras en cuanto aparezcan.</p>`,
    },
    11: {
      headings: [
        ['Guía de texto paso a paso', 'Seguir la ruta segura por las Poolrooms'],
        [
          'Consejos y trucos para las salas de billar',
          'Peligros y diferencias de versión en las Poolrooms',
        ],
      ],
      replacements: [
        [
          '<li><strong>La Trampa de Agua:</strong> Advertencia sobre las mortales "Bacterias Hidrolíticas" en piscinas específicas.</li>',
          '<li><strong>Ruta válida para la versión actual:</strong> reconoced las salas oscuras sin depender del daño de una versión antigua.</li>',
        ],
        [
          '<h3>3. Las piscinas de "bacterias" (trampa mortal)</h3>',
          '<h3>3. Salas de azulejos oscuros y cambios de versión</h3>',
        ],
        [
          '<li><strong>HBacterias hidrolíticas:</strong> Algunas piscinas oscuras o profundas contienen bacterias invisibles que te matarán instantáneamente si entras.</li>',
          '<li><strong>Hydrolitis Plague:</strong> es un peligro ambiental ligado a las salas oscuras, no la Bacteria móvil del nivel 0. Las versiones actuales cambiaron el antiguo comportamiento de muerte instantánea.</li>',
        ],
        [
          '<li><strong>Relax:</strong> Este es uno de los pocos niveles sin entidades perseguidoras (a menos que cuentes las bacterias del agua). Tómate tu tiempo para explorar y recuperarte.</li>',
          '<li><strong>Sin persecución móvil:</strong> ninguna criatura caza al equipo en la ruta normal. Aprovechad la calma para reagruparos y reconocer la forma de las salas.</li>',
        ],
      ],
      sideBarObjectives:
        'Recuperar la cordura, evitar la zona de agua caliente, encontrar el pasillo rojo',
      extra: `<h2>La ruta derecha-derecha hasta el pasillo rojo</h2><p>Desde las entradas cuadradas, tomad la derecha y volved a girar a la derecha en el cruce principal. Pasad la primera sala ondulada, la cámara parecida a una alcantarilla y la segunda sala ondulada. La salida tiene dos salvavidas y un pasillo rojo corto. Son mejores indicaciones que «otra sala azul».</p><ul><li><strong>Salas de azulejos oscuros:</strong> son un peligro ambiental asociado a Hydrolitis Plague, no un encuentro con Bacteria patrullando. Las versiones antiguas aplicaban el daño de otra forma.</li><li><strong>Hot Water Zone:</strong> la escalera de caracol baja hacia agua hirviendo y no forma parte de la salida. Dad la vuelta.</li><li><strong>Cordura:</strong> entrar en las Poolrooms restaura al grupo. No gastéis las últimas provisiones antes de mirar la barra.</li></ul><h3>Cuando el equipo aparece separado</h3><p>Elegid las entradas cuadradas, el cruce principal o la cámara de alcantarilla como punto de encuentro. No deshagáis toda la ruta porque alguien diga «estoy en una piscina»; avanzad al siguiente lugar con nombre y esperad.</p>`,
    },
    13: {
      headings: [],
      description:
        'Supera The End contando las cintas necesarias, registrando la biblioteca por zonas, usando alarmas y mesas contra el Scratcher y volviendo al ordenador para la salida actual al nivel 94.',
      difficulty: 'Media',
      sideBarObjectives:
        'Recoger 24/32/48 cintas, distraer al Scratcher, usar el ordenador, llegar al nivel 94',
      fullHtml: `<p>The End parece una biblioteca abandonada construida alrededor de un final falso. La ruta ya no consiste en forzar un fallo antiguo de la IA: contad las cintas, limpiad las estanterías con un orden y usad alarmas y mesas cuando el Scratcher corte ese recorrido.</p><h2>Escape the Backrooms: vídeo de The End</h2><iframe src="https://www.youtube.com/embed/xqjOhlKuGiw" allowfullscreen></iframe><h3>Momentos destacados:</h3><ul><li><strong>Búsqueda:</strong> completad zonas enteras sin cruzar continuamente el centro.</li><li><strong>Alarmas:</strong> llevad al Scratcher a un lado y registrad el contrario.</li><li><strong>Mesas:</strong> cortad una persecución bajo una de las dos mesas útiles.</li><li><strong>Salida actual:</strong> ordenador, puerta abierta, escalera y conducto.</li></ul><h2>Comprobad el total en el ordenador</h2><p>La pantalla pide <strong>24 cintas en solitario, 32 con dos jugadores y 48 con tres o cuatro</strong>. Decid la cifra antes de separaros. El ordenador también es el último objetivo: la puerta no se abre al recoger la última cinta hasta que alguien vuelve e interactúa con él.</p><h2>Completad zonas enteras de estanterías</h2><p>Empezad por una pared lateral, vaciad cada balda y pasad después al fondo y al lado opuesto. Un pasillo a medias cuesta reconocerlo cuando se apagan las luces. Los puntos de colores del mapa relacionado son prioridades observadas, no posiciones garantizadas.</p><img src="/images/levels/level-13-01.webp" alt="Búsqueda de cintas VHS en las estanterías de The End" /><h2>Cómo cambia la ruta el Scratcher</h2><p>El Scratcher no depende de la vista, pero reacciona con fuerza al ruido y patrulla entre los pasillos. Su siseo avisa de que se acerca. Dejad de correr, esperad a que pase y retomad desde la última estantería terminada.</p><ul><li><strong>Alarma:</strong> elegid primero la siguiente zona, activad la alarma del lado opuesto y aprovechad la distracción enseguida.</li><li><strong>Mesa:</strong> si la persecución ya empezó, escondeos bajo una de las dos mesas hasta que abandone. La mesa recupera un error; la alarma prepara el plan.</li><li><strong>Ruido cooperativo:</strong> una persona anuncia los pasillos terminados. Varios jugadores corriendo por el centro arruinan la misma distracción.</li></ul><img src="/images/levels/level-13-02.webp" alt="Patrulla del Scratcher en Escape the Backrooms The End" /><h2>Qué hacer cuando se apagan las luces</h2><p>En la oscuridad es difícil reconocer estanterías incompletas. Terminad el pasillo que tenéis delante y reuníos en una mesa o el ordenador. Si el Scratcher está cerca, esconderse cuesta menos que reiniciar el nivel.</p><h2>Usar la salida actual al nivel 94</h2><p>Con todas las cintas, volved al ordenador central y encendedlo. La puerta abre una sala trasera dañada; subid por la escalera y entrad en el conducto hacia el nivel 94. El Orb de las rutas antiguas fue retirado de esta progresión.</p><img src="/images/levels/level-13-03.webp" alt="Plano de la biblioteca y regreso al ordenador de The End" />`,
      extra: '',
    },
  },
}

function replaceHeading(html, from, to) {
  const heading = `<h2>${from}</h2>`
  return html.includes(heading) ? html.replace(heading, `<h2>${to}</h2>`) : html
}

// Older drafts included build-specific collision, framerate, and AI shortcuts.
// They age badly and leave readers with a route that may no longer work, so keep
// the published guides focused on the intended, repeatable route instead.
const legacyShortcutPattern =
  /glitch|exploit|game-breaking|god-tier|x-ray vision|röntgenblick|rayons?\s*x|rayos\s*x|wall[-\s]?phas|wand[-\s]?phas|travers(?:er|ée).*mur|atravesar.*pared|restart[-\s]?glitch|neu(?:start|starten)|redémarr|reinici|f11|windowed water|wasser[-\s]?clip|clip de agua|fps[-\s]?(?:hack|clip)|fence[-\s]?skip|zaun[-\s]?skip|rock[-\s]?climb/iu

function removeLegacyShortcutCopy(html = '') {
  const blocks = html
    .replace(/<div\b[^>]*class=["'][^"']*exploit-box[^"']*["'][^>]*>[\s\S]*?<\/div>/giu, '')
    .replace(/<(h2|h3)\b[^>]*>[\s\S]*?<\/\1>/giu, (heading) =>
      legacyShortcutPattern.test(heading) ? '' : heading,
    )
    .replace(/<(p|li)\b[^>]*>[\s\S]*?<\/\1>/giu, (block) =>
      legacyShortcutPattern.test(block) ? '' : block,
    )

  return blocks.replace(/<ul>\s*<\/ul>/giu, '').replace(/\n{3,}/gu, '\n\n')
}

function cleanLegacyShortcutText(value = '') {
  return value
    .replace(legacyShortcutPattern, 'current-route guidance')
    .replace(/\(\s*current-route guidance\s*\)/giu, '')
    .replace(/\s{2,}/gu, ' ')
    .trim()
}

function brandFirstTitle(title = '') {
  const suffix = ' - Escape the Backrooms'
  return title.endsWith(suffix)
    ? `Escape the Backrooms ${title.slice(0, -suffix.length).trim()}`
    : title
}

export function enhanceLevelDetails(locale, entry) {
  const enhancement = editorialEnhancements[locale]?.[entry.id]
  const baseHtml = enhancement?.fullHtml ?? entry.detailsHtml
  const updatedHeadings = (enhancement?.headings ?? []).reduce(
    (html, [from, to]) => replaceHeading(html, from, to),
    baseHtml,
  )
  const updated = (enhancement?.replacements ?? []).reduce(
    (html, [from, to]) => (html.includes(from) ? html.replace(from, to) : html),
    updatedHeadings,
  )
  const withUpdatedIntro =
    enhancement?.description && !enhancement.fullHtml
      ? updated.replace(/^\s*<p\b[^>]*>[\s\S]*?<\/p>/i, `<p>${enhancement.description}</p>`)
      : updated
  const withExtra = enhancement?.extra ? `${withUpdatedIntro}\n${enhancement.extra}` : withUpdatedIntro
  return removeLegacyShortcutCopy(withExtra)
}

export function enhanceLevelEntry(locale, entry) {
  const enhancement = editorialEnhancements[locale]?.[entry.id]
  const title = brandFirstTitle(cleanLegacyShortcutText(enhancement?.seoTitle ?? entry.seo?.title))
  const description = cleanLegacyShortcutText(enhancement?.description ?? entry.description)
  const seoDescription = cleanLegacyShortcutText(enhancement?.description ?? entry.seo?.description)
  return {
    ...entry,
    detailsHtml: enhanceLevelDetails(locale, entry),
    ...(description ? { description } : {}),
    ...(entry.seo
      ? { seo: { ...entry.seo, title, description: seoDescription } }
      : {}),
    ...(enhancement?.sideBarObjectives && entry.sideBarInfo
      ? {
          sideBarInfo: {
            ...entry.sideBarInfo,
            ...(enhancement.difficulty ? { difficulty: enhancement.difficulty } : {}),
            objectives: enhancement.sideBarObjectives,
          },
        }
      : {}),
  }
}

export const editoriallyEnhancedLevelIds = Object.freeze(
  Object.keys(editorialEnhancements.en).map(Number),
)
