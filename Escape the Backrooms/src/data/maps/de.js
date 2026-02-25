export default [
    {
        id: 1,
        title: 'Karte: Level 0 Karte',
        addressBar: 'level-0-map',
        description: 'Vollständige Navigationskarte für Level 0 mit allen Spawn-Punkten, wichtigen Orten und Ausgangsrouten.',
        imageUrl: '/images/maps/map-01.webp',
        imageAlt: 'Level 0 Karte',
        mapImageUrl: '/images/maps/map-01-map.webp',
        category: 'Early Game',
        tags: ['Navigation', 'Spawn-Punkte', 'Schlüssel'],
        isHome: true,
        seo: {
            title: 'Level 0 Karten-Walkthrough: Spawn-Punkte, Leiter & Ausgänge - Escape the Backrooms',
            description: 'Vollständiger Karten-Guide für Level 0. Finde alle Spawn-Punkte, die Leiter für den Schlüssel, öffne die Tür und navigiere zu den Ausgängen nach Level 1, Level 0.11 und dem Hub.',
            keywords: 'Level 0, Karte, Spawn-Punkte, Leiter, Schlüssel, Tür, Pitfalls, Lüftungsschacht, Ausgang, Level 1, Level 0.11, The Hub, Bacteria, Walkthrough',
        },
        mapPoints: [
            {
                id: 1,
                title: '1: Lüftungsschacht',
                content: 'Ein Schacht, der zu den Ausgängen nach Level 0.11 und The Hub führt (nicht auf der Karte enthalten).',
            },
            {
                id: 2,
                title: '2: Spawn 3',
                content: 'Ort, an dem ein Spieler spawnen kann.',
            },
            {
                id: 3,
                title: '3: Spawn 4',
                content: 'Ort, an dem ein Spieler spawnen kann.'
            },
            {
                id: 4,
                title: '4: Alternativer Ausgang',
                content: 'Ausgang zu Level 1, inklusive eines Liminal Spaces.',
            },
            {
                id: 5,
                title: '5: Spawn 1',
                content: 'Ort, an dem ein Spieler spawnen kann.',
            },
            {
                id: 6,
                title: '6: Spawn 2',
                content: 'Ort, an dem ein Spieler spawnen kann.',
            },
            {
                id: 7,
                title: '7: Tür',
                content: 'Verschlossene Tür, die einen Schlüssel benötigt.',
            },
            {
                id: 8,
                title: '8: Pitfalls (Abgründe)',
                content: 'Bereich nahe dem Ausgang von Level 0. Wenn du fällst, gelangst du in einen gefährlicheren, offenen Bereich von Level 0.',
            },
            {
                id: 9,
                title: '9: Normaler Ausgang',
                content: 'Ausgang zu Level 1.',
            },
            {
                id: 10,
                title: '10: Leiter',
                content: 'Nutze diese Leiter, um den Schlüssel für die Tür zu erreichen.',
            },
        ],
        detailsHtml: `
              <h2>Karten-Überblick</h2>
              <p>Diese Karte zeigt das komplette Layout von Level 0, inklusive aller Spawn-Punkte, Schlüssel-Fundorte und Fluchtrouten. Level 0 ist das erste Level in Escape the Backrooms und ähnelt einem endlosen Büro-Labyrinth aus den 1970ern mit gelben Tapeten und feuchtem Teppichboden.</p>
        
              <h2>Wichtige Orte</h2>
              <ul>
                <li><strong>Leiter (Punkt 10):</strong> Nutze diese Leiter, um den Schlüssel für die Tür zu holen. Du musst zuerst alle zerbrochenen Leiterteile sammeln und sie reparieren.</li>
                <li><strong>Tür (Punkt 7):</strong> Verschlossene Tür, die einen Schlüssel benötigt. Den Schlüssel erhältst du über die Leiter.</li>
                <li><strong>Pitfalls (Punkt 8):</strong> Ein Bereich kurz vor dem Ausgang. Ein Sturz führt dich in eine gefährlichere Zone von Level 0.</li>
                <li><strong>Lüftungsschacht (Punkt 1):</strong> Ein Schacht, der zu alternativen Ausgängen (Level 0.11 und The Hub) führt.</li>
              </ul>
        
              <h2>Ausgangsrouten</h2>
              <p>Level 0 hat zwei Hauptausgänge:</p>
              <ul>
                <li><strong>Normaler Ausgang (Punkt 9):</strong> Ausgang zu Level 1. Dies ist die Standardroute für den Spielfortschritt.</li>
                <li><strong>Alternativer Ausgang (Punkt 4):</strong> Ausgang zu Level 1 über einen liminalen Bereich. Ein alternativer Weg zum Fortschritt.</li>
              </ul>
        
              <h2>Spawn-Punkte</h2>
              <p>Spieler können an verschiedenen Positionen auf der Karte starten:</p>
              <ul>
                <li><strong>Spawn 1 bis 4 (Punkte 5, 6, 2, 3):</strong> Die möglichen Startpunkte für Spieler.</li>
              </ul>
        
              <h2>Level-Informationen</h2>
              <p><strong>Überlebensschwierigkeit:</strong> Klasse 1 - Minimale Gefahr</p>
              <p><strong>Sanitätsgefahr:</strong> Klasse 0 - Kein Risiko für den Verstand</p>
              <p><strong>Entitäten:</strong> Bacteria (erster Auftritt)</p>
              <p><strong>Gegenstände:</strong> Taschenlampe, Seil</p>
              <p><strong>Ziel:</strong> Leiterteile sammeln, Leiter reparieren, Schlüssel holen, Tür aufschließen und nach Level 1 entkommen.</p>
            `,
    },
    {
        id: 2,
        title: 'Karte: Level 1 Etage 1 Karte',
        addressBar: 'level-1-floor-1-map',
        description: 'Detaillierte Karte von Level 1 Etage 1 mit wichtigen Orten und Fluchtwegen.',
        imageUrl: '/images/maps/map-02.webp',
        imageAlt: 'Level 1 Etage 1 Karte',
        mapImageUrl: '/images/maps/map-02-map.webp',
        category: 'Early Game',
        tags: ['Schlüssel', 'Kleiderschränke', 'Sektion II'],
        isHome: true,
        seo: {
            title: 'Level 1 Etage 1 Karte Walkthrough: Auto-Raum & Farbcode-Aufzug - Escape the Backrooms',
            description: 'Vollständiger Guide für Level 1 Etage 1 (Habitable Zone). Finde den Auto-Raum, gib den Farbcode im Aufzug ein und navigiere durch die Etagen.',
            keywords: 'Level 1, Etage 1, Habitable Zone, Karte, Auto-Raum, Farbcode, Aufzug, farbige Autos, Eingang, Walkthrough',
        },
        mapPoints: [
            {
                id: 1,
                title: '1: Auto-Raum',
                content: 'Der Raum mit den farbigen Autos.',
            },
            {
                id: 2,
                title: '2: Aufzug',
                content: 'Aufzug, in dem der Farbcode eingegeben werden muss.',
            },
            {
                id: 3,
                title: '3: Eingang',
                content: 'Der Eingang zur Etage.',
            },
        ],
        detailsHtml: `
              <h2>Karten-Überblick</h2>
              <p>Diese Karte zeigt Level 1 Etage 1, das erste Stockwerk von Level 1 (Habitable Zone). Diese Etage enthält wichtige Orte wie den Auto-Raum und den zentralen Aufzug.</p>
        
              <h2>Wichtige Orte</h2>
              <ul>
                <li><strong>Auto-Raum (Punkt 1):</strong> Der Raum mit den Autos. Ein wichtiges Wahrzeichen für das Rätsel auf dieser Etage.</li>
                <li><strong>Aufzug (Punkt 2):</strong> Hier muss der Farbcode eingegeben werden. Dieser Aufzug ist essenziell, um zwischen den Etagen von Level 1 zu wechseln.</li>
                <li><strong>Eingang (Punkt 3):</strong> Hier betreten Spieler normalerweise die erste Etage.</li>
              </ul>
        
              <h2>Navigation</h2>
              <p>Um in Level 1 voranzukommen, musst du:</p>
              <ol>
                <li>Etage 1 durch den Eingang betreten.</li>
                <li>Zum Aufzug navigieren.</li>
                <li>Den Farbcode eingeben, um andere Etagen freizuschalten.</li>
                <li>Schlüssel in Kleiderschränken auf verschiedenen Etagen sammeln.</li>
                <li>Die Schlüssel nutzen, um den finalen Ausgang zu öffnen.</li>
              </ol>
        
              <h2>Level-Informationen</h2>
              <p><strong>Kategorie:</strong> Early Game</p>
              <p><strong>Entitäten:</strong> Hound (Hund)</p>
              <p><strong>Mechanik:</strong> Erkundung, Schlüsselsuche, Farbcode-Rätsel</p>
            `,
    },
    {
        id: 3,
        title: 'Karte: Level 1 Etage 3 Karte',
        addressBar: 'level-1-floor-3-map',
        description: 'Detaillierte Karte von Level 1 Etage 3 mit Fokus auf Aufzug-Ausgänge und Navigation.',
        imageUrl: '/images/maps/map-03.webp',
        imageAlt: 'Level 1 Etage 3 Karte',
        mapImageUrl: '/images/maps/map-03-map.webp',
        category: 'Early Game',
        tags: ['Schlüssel', 'Schlüssellöcher'],
        isHome: true,
        seo: {
            title: 'Level 1 Etage 3 Karte Walkthrough: Aufzug-Ausgänge & Navigation - Escape the Backrooms',
            description: 'Kompletter Guide für Level 1 Etage 3. Navigiere durch die Aufzug-Ausgänge der verschiedenen Etagen und finde den Startpunkt.',
            keywords: 'Level 1, Etage 3, Habitable Zone, Karte, Aufzug Ausgänge, Rampe, Dunkelheit Eingang, Spawn, Walkthrough',
        },
        mapPoints: [
            {
                id: 1,
                title: '1: Ausgang Erste Etage',
                content: 'Wo der Aufzug auf der ersten Etage erscheint.',
            },
            {
                id: 2,
                title: '2: Abwärtsrampe',
                content: 'Rampe, die zur darunterliegenden Etage führt.',
            },
            {
                id: 3,
                title: '3: Ausgang Dritte Etage',
                content: 'Wo der Aufzug auf der dritten Etage erscheint.',
            },
            {
                id: 4,
                title: '4: Dunkelheits-Eingang',
                content: 'Der Raum, in dem du spawnst (das Bild zeigt die Sicht beim Verlassen des Raumes).',
            },
            {
                id: 5,
                title: '5: Ausgang Zweite Etage',
                content: 'Wo der Aufzug auf der zweiten Etage erscheint.',
            },
        ],
        detailsHtml: `
              <h2>Karten-Überblick</h2>
              <p>Diese Karte zeigt Level 1 Etage 3. Diese Etage ist entscheidend für die Navigation zwischen den Stockwerken mittels des Aufzugsystems.</p>
        
              <h2>Aufzug-Ausgänge</h2>
              <p>Der Aufzug kann an verschiedenen Stellen auf dieser Etage halten und verbindet diese mit anderen Stockwerken:</p>
              <ul>
                <li><strong>Ausgang Erste Etage (Punkt 1):</strong> Verbindet Etage 3 mit Etage 1.</li>
                <li><strong>Ausgang Zweite Etage (Punkt 5):</strong> Verbindet Etage 3 mit Etage 2.</li>
                <li><strong>Ausgang Dritte Etage (Punkt 3):</strong> Der Hauptausgangspunkt auf diesem Stockwerk.</li>
              </ul>
        
              <h2>Navigation</h2>
              <ul>
                <li><strong>Abwärtsrampe (Punkt 2):</strong> Nutze diese Rampe, um ohne Aufzug in die untere Etage zu gelangen.</li>
                <li><strong>Dunkelheits-Eingang (Punkt 4):</strong> Dies ist normalerweise dein Startpunkt auf Etage 3.</li>
              </ul>
        
              <h2>Level-Informationen</h2>
              <p><strong>Kategorie:</strong> Early Game</p>
              <p><strong>Mechanik:</strong> Etagenübergreifende Navigation, Aufzugsystem</p>
              <p><strong>Hinweis:</strong> Diese Etage ist Teil der größeren Level-1-Struktur. Du musst eventuell Schlüssel auf anderen Etagen sammeln, bevor du weiterkommst.</p>
            `,
    },
        {
          id: 4,
          title: 'Karte: Level 2 Karte',
          addressBar: 'level-2-map',
          description: 'Vollständige Navigationskarte für Level 2 mit allen Routen und wichtigen Orten.',
          imageUrl: '/images/maps/map-04.webp',
          imageAlt: 'Level 2 Karte',
          mapImageUrl: '/images/maps/map-04-map.webp',
          category: 'Early Game',
          tags: ['Navigation', 'Pipe Dreams'],
          isHome: false,
          seo: {
            title: 'Level 2 Pipe Dreams Karten-Walkthrough: Level 3 & Level Fun Eingänge - Escape the Backrooms',
            description: 'Vollständiger Guide für Level 2 Pipe Dreams. Navigiere durch den Wartungstunnel, finde den Eingang zu Level 3 (Electrical Station) und Level Fun.',
            keywords: 'Level 2, Pipe Dreams, Karte, Level 3 Eingang, Electrical Station, Level Fun Eingang, Wartungstunnel, Dampfgefahr, Navigation, Walkthrough',
          },
          mapPoints: [
            {
              id: 1,
              title: '1: Level 3 Eingang',
              content: 'Dies ist der Eingang, der zu Level 3 führt, auch bekannt als die Electrical Station.',
            },
            {
              id: 2,
              title: '2: Level Fun Eingang',
              content: 'Dies ist der Eingang, der direkt zu Level Fun führt.',
            },
          ],
          detailsHtml: `
              <h2>Karten-Überblick</h2>
              <p>Diese Karte zeigt das komplette Layout von Level 2 (Pipe Dreams), das durch Dampfrohre und enge Korridore geprägt ist. Dieses Level dient als Übergangsbereich mit Verbindungen zu anderen Ebenen.</p>
        
              <h2>Level-Eingänge</h2>
              <p>Level 2 besitzt Verbindungen zu folgenden Leveln:</p>
              <ul>
                <li><strong>Level 3 Eingang (Punkt 1):</strong> Führt zu Level 3 (Electrical Station). Dies ist die Standardroute für den Spielfortschritt.</li>
                <li><strong>Level Fun Eingang (Punkt 2):</strong> Führt zu Level Fun. Dies ist eine alternative Route, aber Level Fun ist extrem gefährlich.</li>
              </ul>
        
              <h2>Navigation</h2>
              <p>Level 2 besteht aus labyrinthartigen Gängen mit heißen Dampfrohren. Navigiere vorsichtig, um die Ausgänge zu finden. Das Level ist relativ sicher, kann aber aufgrund des repetitiven Layouts desorientierend wirken.</p>
        
              <h2>Fortschritt</h2>
              <p>Für den normalen Spielverlauf solltest du den Eingang zu Level 3 ansteuern. Meide den Eingang zu Level Fun, es sei denn, du bist auf einen extremen Schwierigkeitsgrad vorbereitet.</p>
        
              <h2>Level-Informationen</h2>
              <p><strong>Kategorie:</strong> Early Game</p>
              <p><strong>Mechanik:</strong> Navigation, Übergang</p>
              <p><strong>Entitäten:</strong> Keine (relativ sicher)</p>
            `,
        },
        {
          id: 5,
          title: 'Karte: Level 37 Karte',
          addressBar: 'level-37-map',
          description: 'Vollständige Navigationskarte für Level 37 (The Poolrooms) mit dunkel gefliesten Räumen, Spawn-Punkten und Ausgangsrouten.',
          imageUrl: '/images/maps/map-05.webp',
          imageAlt: 'Level 37 Karte',
          mapImageUrl: '/images/maps/map-05-map.webp',
          category: 'Mid Game',
          tags: ['The Poolrooms', 'Dunkel geflieste Räume', 'Hydrolitis-Plage'],
          isHome: false,
          seo: {
            title: 'Level 37 The Poolrooms Karten-Walkthrough: Dunkle Räume & Spawn-Punkte - Escape the Backrooms',
            description: 'Vollständiger Guide für Level 37 The Poolrooms. Navigiere sicher, meide die Hydrolitis-Plage in dunklen Räumen und finde den Ausgang zu Level !.',
            keywords: 'Level 37, The Poolrooms, Karte, dunkle Räume, Hydrolitis Plage, Spawn-Punkte, Level !, The Hub Tür, Heißwasser-Zone, Sanity Regeneration, Walkthrough',
          },
          mapPoints: [
            {
              id: 1,
              title: '1: Dunkel gefliester Raum',
              content: "Dies ist ein Raum mit dunkelblauen Fliesen. Das Wasser hier ist mit der Hydrolitis-Plage infiziert. Vor dem Release von Part 4 war dieser Raum trocken.",
            },
            {
              id: 2,
              title: '2: Dunkel gefliester Raum',
              content: "Ein Raum mit dunkelblauen Fliesen; das Wasser ist mit der Hydrolitis-Plage infiziert.",
            },
            {
              id: 3,
              title: '3: Spawn 2',
              content: 'Ort, an dem ein Spieler spawnen kann.',
            },
            {
              id: 4,
              title: '4: Spawn 3',
              content: 'Ort, an dem ein Spieler spawnen kann.',
            },
            {
              id: 5,
              title: '5: Level ! Eingang',
              content: 'Dies ist der Eingang zu Level !, auch bekannt als "Run for your Life!".',
            },
            {
              id: 6,
              title: '6: Die Heißwasser-Zone',
              content: 'Ein Bereich mit einer Wendeltreppe, die in kochend heißes Wasser führt. Berührung führt zum sofortigen Tod.',
            },
            {
              id: 7,
              title: '7: Die Hub-Tür',
              content: "Diese Tür führt zum Hub. Zum Release des Spiels befand sich hier ein dunkler Raum, was in Part 2 geändert wurde.",
            },
            {
              id: 8,
              title: '8: Spawn 4',
              content: 'Ort, an dem ein Spieler spawnen kann.',
            },
            {
              id: 9,
              title: '9: Spawn 1',
              content: 'Ort, an dem ein Spieler spawnen kann.',
            },
            {
              id: 10,
              title: '10: Dunkel gefliester Raum',
              content: "Ein Raum mit dunkelblauen Fliesen und infiziertem Wasser (Hydrolitis-Plage).",
            },
          ],
          detailsHtml: `
              <h2>Karten-Überblick</h2>
              <p>Diese Karte zeigt das Layout von Level 37 (The Poolrooms), ein riesiger Komplex aus Pools, die leicht in lauwarmem Wasser untergetaucht sind. Dieses Level bietet natürliches Licht und frische Luft zur Regeneration der Sanity, enthält aber gefährliche Zonen.</p>
        
              <h2>Dunkel geflieste Räume</h2>
              <p>Level 37 enthält mehrere dunkel geflieste Räume (dunkelblaue Fliesen). Das Wasser in diesen Räumen ist mit der gefährlichen <strong>Hydrolitis-Plage</strong> infiziert. Diese Räume sollten unbedingt gemieden werden:</p>
              <ul>
                <li><strong>Dunkle Räume (Punkt 1, 2, 10):</strong> Diese Bereiche sind auf der Karte markiert. Betrete das Wasser dort unter keinen Umständen.</li>
              </ul>
        
              <h2>Spawn-Punkte</h2>
              <p>Spieler können an vier verschiedenen Positionen (Punkte 3, 4, 8, 9) starten.</p>
        
              <h2>Wichtige Orte</h2>
              <ul>
                <li><strong>Level ! Eingang (Punkt 5):</strong> Führt zum berüchtigten Level "Run for your Life!", einem extrem gefährlichen Verfolgungs-Level.</li>
                <li><strong>Die Hub-Tür (Punkt 7):</strong> Ermöglicht den Zugang zum zentralen Hub.</li>
                <li><strong>Heißwasser-Zone (Punkt 6):</strong> Eine Wendeltreppe, die in tödlich heißes Wasser führt. Vorsicht beim Abstieg!</li>
              </ul>
        
              <h2>Navigation</h2>
              <p>Level 37 ist weitestgehend sicher und dient zur Erholung des Verstandes. Achte jedoch auf die farblichen Unterschiede der Fliesen, um nicht versehentlich in infiziertes Wasser zu treten.</p>
        
              <h2>Level-Informationen</h2>
              <p><strong>Kategorie:</strong> Mid Game</p>
              <p><strong>Überlebensschwierigkeit:</strong> Klasse 1 - Größtenteils sicher</p>
              <p><strong>Sanitätsgefahr:</strong> Klasse 0 - Stellt Sanity wieder her</p>
              <p><strong>Warnung:</strong> Meide das dunkelblaue Wasser (Hydrolitis) und das kochende Wasser in der Wendeltreppe.</p>
            `,
        },

        {
            id: 6,
            title: 'Karte: Level 3 Karte',
            addressBar: 'level-3-map',
            description: 'Vollständige Navigationskarte für Level 3 (Electrical Station) mit Breaker-Standorten, Zonen und Aufzug.',
            imageUrl: '/images/maps/map-06.webp',
            imageAlt: 'Level 3 Karte',
            mapImageUrl: '/images/maps/map-06-map.webp',
            category: 'Early Game',
            tags: ['Electrical Station', 'Breaker', 'Hounds', 'Zonen'],
            isHome: false,
            seo: {
              title: 'Level 3 Electrical Station Karten-Walkthrough: Breaker, Zonen & Hounds - Escape the Backrooms',
              description: 'Vollständiger Guide für Level 3 Electrical Station. Navigiere durch East Substation, West Substation und Generator-Zonen. Aktiviere alle Breaker, meide Hounds und löse Sicherungskasten-Rätsel.',
              keywords: 'Level 3, Electrical Station, Karte, Breaker, East Substation, West Substation, Generator, Hound, Sicherungskasten, Triway, Farbige Kabel, elektrische Pfütze, Walkthrough',
            },
            mapPoints: [
              { id: 1, title: '1: Breaker', content: 'Breaker (Leistungsschalter).' },
              { id: 2, title: '2: Breaker', content: 'Breaker.' },
              { id: 3, title: '3: Breaker', content: 'Breaker.' },
              { id: 4, title: '4: Breaker', content: 'Breaker.' },
              { id: 5, title: '5: Hound', content: 'Hound (Hund).' },
              { id: 6, title: '6: Hound', content: 'Hound.' },
              { id: 7, title: '7: Breaker', content: 'Breaker.' },
              { id: 8, title: '8: Breaker', content: 'Breaker.' },
              { id: 9, title: '9: Breaker', content: 'Breaker.' },
              { id: 10, title: '10: Breaker', content: 'Breaker.' },
              { id: 11, title: '11: Breaker', content: 'Breaker.' },
              { id: 12, title: '12: Hound', content: 'Hound.' },
              { id: 13, title: '13: Breaker', content: 'Breaker.' },
              { id: 14, title: '14: Hound', content: 'Hound.' },
              { id: 15, title: '15: Breaker', content: 'Breaker.' },
              { id: 16, title: '16: Breaker', content: 'Breaker.' },
              { id: 17, title: '17: Breaker', content: 'Breaker.' },
              { id: 18, title: '18: Hound', content: 'Hound.' },
              { id: 19, title: '19: Breaker', content: 'Breaker.' },
              { id: 20, title: '20: Breaker', content: 'Breaker.' },
              { id: 21, title: '21: Breaker', content: 'Breaker.' },
              { id: 22, title: '22: Breaker', content: 'Breaker.' },
              { id: 23, title: '23: Hound', content: 'Hound.' },
              { id: 24, title: '24: Breaker', content: 'Breaker.' },
              { id: 25, title: '25: Breaker', content: 'Breaker.' },
              { id: 26, title: '26: Breaker', content: 'Breaker.' },
              { id: 27, title: '27: Breaker', content: 'Breaker.' },
              { id: 28, title: '28: Hound', content: 'Hound.' },
              { id: 29, title: '29: Hound', content: 'Hound.' },
              { id: 30, title: '30: Breaker', content: 'Breaker.' },
              { id: 31, title: '31: Breaker', content: 'Breaker.' },
              { id: 32, title: '32: Breaker', content: 'Breaker.' },
              { id: 33, title: '33: Breaker', content: 'Breaker.' },
              { id: 34, title: '34: Hound', content: 'Hound.' },
              { id: 35, title: '35: Ausgang zu Level 2', content: 'Ausgang zurück zu Level 2.' },
              { id: 36, title: '36: Breaker', content: 'Breaker.' },
              { id: 37, title: '37: Breaker', content: 'Breaker.' },
              { id: 38, title: '38: Ausgang zu Level 4', content: 'Ausgang zu Level 4.' },
              { id: 39, title: '39: Spieler-Spawn', content: 'Startpunkt des Spielers.' },
              { id: 40, title: '40: Breaker', content: 'Breaker.' },
            ],
            detailsHtml: `
              <h2>Karten-Überblick</h2>
              <p>Diese Karte zeigt das vollständige Layout von Level 3 (Electrical Station), einer riesigen verlassenen Elektrostation mit drei gefährlichen Zonen. Spieler müssen Breaker (Sicherungskästen) in jeder Zone finden und aktivieren, um den Ausgang zu Level 4 zu entriegeln.</p>
        
              <h2>Zonen</h2>
              <p>Level 3 ist in drei Zonen unterteilt, die progressiv gefährlicher werden:</p>
              <ul>
                <li><strong>East Substation (Zone 1):</strong> Die erste Zone. Enthält 3 einfache Sicherungskästen, die aktiviert werden müssen. Relativ sicher, aber dunkel.</li>
                <li><strong>West Substation (Zone 2):</strong> Die zweite Zone. Viel dunkler und gefährlicher als Zone 1. Enthält 3 Sicherungskästen und 2 Hounds. Nutze die Taschenlampe, um Hounds zu blenden.</li>
                <li><strong>Generator (Zone 3):</strong> Die gefährlichste Zone. Sehr dunkel, enthält Rätsel-basierte Sicherungskästen (Triway und farbige Kabel), Hounds und unter Strom stehende Pfützen. Enthält 3 Sicherungskästen.</li>
              </ul>
        
              <h2>Breaker (Sicherungskästen)</h2>
              <p>In Level 3 müssen insgesamt 9 Sicherungskästen aktiviert werden:</p>
              <ul>
                <li><strong>Zone 1:</strong> 3 einfache Schalter-Sicherungskästen.</li>
                <li><strong>Zone 2:</strong> 3 einfache Schalter-Sicherungskästen.</li>
                <li><strong>Zone 3:</strong> 3 Rätsel-basierte Sicherungskästen (Triway- und Farbige-Kabel-Rätsel).</li>
              </ul>
              <p>Alle Breaker müssen aktiviert sein, um den Ausgang zu Level 4 zu öffnen.</p>
        
              <h2>Hound-Entitäten</h2>
              <p>Hounds patrouillieren das Level, besonders in Zone 2 und Zone 3. Benutze deine Taschenlampe, um sie kurzzeitig zu blenden und zu entkommen. Sei vorsichtig, wenn du dich in diesen Bereichen bewegst.</p>
        
              <h2>Gefahren</h2>
              <ul>
                <li><strong>Elektrische Pfützen:</strong> Nur in Zone 3 (Generator) zu finden. Diese unter Strom stehenden Pfützen töten dich sofort bei Berührung. Meide sie einfach großräumig.</li>
                <li><strong>Dunkelheit:</strong> Das Level ist sehr dunkel, vor allem in Zone 2 und 3. Die Taschenlampe ist hier überlebenswichtig.</li>
              </ul>
        
              <h2>Ziel</h2>
              <p>Finde und aktiviere alle 9 Sicherungskästen in den drei Zonen. Während Zone 1 und 2 einfache Schalter haben, erfordert Zone 3 das Lösen von Triway- oder Kabel-Rätseln.</p>
        
              <h2>Level-Informationen</h2>
              <p><strong>Kategorie:</strong> Early Game</p>
              <p><strong>Überlebensschwierigkeit:</strong> Klasse 4 - Große Gefahr</p>
              <p><strong>Sanitätsgefahr:</strong> Klasse 2 - Moderate Gefahr für den Verstand</p>
              <p><strong>Mechanik:</strong> Rätsel, Erkundung, Breaker-Aktivierung, Vermeidung von Entitäten</p>
              <p><strong>Entitäten:</strong> Hound (insgesamt 9)</p>
              <p><strong>Gegenstände:</strong> Mandelwasser, Energieriegel, Taschenlampe</p>
              <p><strong>Warnung:</strong> Das Level ist dunkel und gefährlich. Nutze die Taschenlampe zur Navigation und zum Abwehren von Hounds. Meide elektrische Pfützen in Zone 3.</p>
            `,
      },
        {
          id: 7,
          title: 'Karte: Level 4 Karte',
          addressBar: 'level-4-map',
          description: 'Vollständige Navigationskarte für Level 4 (Abandoned Office) mit Verkaufsautomaten-Rätsel, Überwachungskameras und Sicherheitszonen.',
          imageUrl: '/images/maps/map-07.webp',
          imageAlt: 'Level 4 Karte',
          mapImageUrl: '/images/maps/map-07-map.webp',
          category: 'Early Game',
          tags: ['Abandoned Office', 'Verkaufsautomaten', 'CCTV', 'Fenster'],
          isHome: false,
          seo: {
            title: 'Level 4 Abandoned Office Karten-Walkthrough: Automaten- & CCTV-Rätsel - Escape the Backrooms',
            description: 'Vollständiger Guide für Level 4 Abandoned Office. Löse das Zählrätsel der Automaten, schleiche an Kameras vorbei und erreiche Level 5.',
            keywords: 'Level 4, Abandoned Office, Karte, Verkaufsautomat, CCTV, Überwachungskamera, Windows Entität, Zählrätsel, Brecheisen, Walkthrough',
          },
          mapPoints: [
            {
              id: 1,
              title: '1: Die Hub-Tür',
              content: 'Dies ist die Hub-Tür, die direkt zum Hub führt.',
            },
            {
              id: 2,
              title: '2: Level 3 Eingang',
              content: 'Dieser Eingang führt zurück zu Level 3 (Electrical Station).',
            },
            {
              id: 3,
              title: '3: Erster Rätselraum',
              content: 'Dies ist der erste Rätselraum des Levels, in dem es um Verkaufsautomaten geht.',
            },
            {
              id: 4,
              title: '4: Kameras zurücksetzen',
              content: 'Wenn dich eine Kamera entdeckt, nutze diesen Knopf, um sie zurückzusetzen und es erneut zu versuchen.',
            },
            {
              id: 5,
              title: '5: Kamera 1',
              content: 'Eine Überwachungskamera. Wenn sie dich erwischt, wird der Zugang zu Level 5 verriegelt.',
            },
            {
              id: 6,
              title: '6: Kamera 2',
              content: 'Eine Überwachungskamera. Wenn sie dich erwischt, wird der Zugang zu Level 5 verriegelt.',
            },
            {
              id: 7,
              title: '7: Lüftungsschacht',
              content: 'Ein Schacht, den du nutzen kannst, um zum Start zurückzukehren, falls du von einer Kamera entdeckt wurdest.',
            },
            {
              id: 8,
              title: '8: Kamera 3',
              content: 'Eine Überwachungskamera. Wenn sie dich erwischt, wird der Zugang zu Level 5 verriegelt.',
            },
            {
              id: 9,
              title: '9: Kamera 4',
              content: 'Eine Überwachungskamera. Wenn sie dich erwischt, wird der Zugang zu Level 5 verriegelt.',
            },
            {
              id: 10,
              title: '10: Level 5 Eingang',
              content: 'Dies ist der Eingang zu Level 5, auch bekannt als Terror Hotel.',
            },
          ],
          detailsHtml: `
              <h2>Karten-Überblick</h2>
              <p>Diese Karte zeigt das Layout von Level 4 (Abandoned Office), ein verlassenes Bürogebäude ohne menschliche Spuren. Dieses Level beinhaltet Automaten-Rätsel und ein CCTV-Sicherheitssystem. Da die Sanity hier nicht sinkt, ist es ein guter Ort zum Verweilen.</p>
        
              <h2>Wichtige Orte</h2>
              <ul>
                <li><strong>Erster Rätselraum (Punkt 3):</strong> Hier müssen die Verkaufsautomaten gelöst werden, um voranzukommen.</li>
                <li><strong>Kameras zurücksetzen (Punkt 4):</strong> Ein essenzieller Knopf, um das Sicherheitssystem nach einer Entdeckung zu resetten.</li>
                <li><strong>Level 5 Eingang (Punkt 10):</strong> Der Hauptausgang zum Terror Hotel. Er wird verriegelt, sobald eine Kamera Alarm schlägt.</li>
                <li><strong>Die Hub-Tür (Punkt 1):</strong> Befindet sich im Säulenraum und führt zum Hub.</li>
              </ul>
        
              <h2>Verkaufsautomaten-Rätsel</h2>
              <p>Im ersten Rätselraum findest du 4 verschiedene Automaten. Jeder Automat ist einem Objekttyp zugeordnet (Stühle, Tische, Wasserspender, Bücherstapel). Zähle die Anzahl dieser Objekte im Raum und stelle die entsprechende Zahl am jeweiligen Automaten ein. Bei korrekter Eingabe öffnet sich die Tür.</p>
        
              <h2>Kamerasystem</h2>
              <p>Level 4 wird von 4 Kameras (Punkte 5, 6, 8, 9) überwacht. Du musst dich an allen vorbeischleichen, ohne entdeckt zu werden. Falls du gesehen wirst, musst du zum Reset-Knopf zurückkehren.</p>
        
              <h2>Lüftungssystem</h2>
              <p><strong>Lüftungsschacht (Punkt 7):</strong> Du kannst ein Brecheisen benutzen, um den Schacht zu öffnen. Dies dient als Abkürzung zurück zum Startpunkt, falls du entdeckt wurdest.</p>
        
              <h2>Windows-Entitäten (Fenster)</h2>
              <p>An den Enden einiger Flure lauern Fenster-Entitäten. Diese sind Fallen und sollten unter keinen Umständen genähert werden.</p>
        
              <h2>Strategie</h2>
              <ol>
                <li>Löse das Zählrätsel im ersten Raum.</li>
                <li>Navigiere durch die Bürozellen zum "Reset Cameras"-Knopf.</li>
                <li>Drücke den Knopf und schleiche extrem vorsichtig an den 4 Kameras vorbei.</li>
                <li>Nutze bei Entdeckung das Brecheisen für den Lüftungsschacht, um es erneut zu versuchen.</li>
                <li>Gehe zum nun offenen Level 5 Eingang.</li>
              </ol>
        
              <h2>Level-Informationen</h2>
              <p><strong>Überlebensschwierigkeit:</strong> Klasse 0 - Größtenteils sicher</p>
              <p><strong>Sanitätsgefahr:</strong> Klasse 0 - Kein Risiko</p>
              <p><strong>Gegenstände:</strong> Mandelwasser, Saft, Energieriegel, Taschenlampe, Brecheisen</p>
            `,
        },
        {
          id: 8,
          title: 'Karte: Level 9 Karte',
          addressBar: 'level-9-map',
          description: 'Vollständige Navigationskarte für Level 9 (The Suburbs) mit sicheren Häusern, Computern und Wretch-Standorten.',
          imageUrl: '/images/maps/map-08.webp',
          imageAlt: 'Level 9 Karte',
          mapImageUrl: '/images/maps/map-08-map.webp',
          category: 'The Depths',
          tags: ['The Suburbs', 'Sichere Häuser', 'Wretch'],
          isHome: false,
          seo: {
            title: 'Level 9 The Suburbs Karten-Walkthrough: Sichere Häuser & Computer - Escape the Backrooms',
            description: 'Vollständiger Guide für Level 9. Navigiere zwischen sicheren und unsicheren Häusern, aktiviere Computer und finde die Admin-Karte im verlassenen Außenposten.',
            keywords: 'Level 9, The Suburbs, Karte, Sichere Häuser, Computer, Wretch, Admin Karte, Außenposten, Level 10, Walkthrough',
          },
          mapPoints: [
            {
              id: 1,
              title: '1: Sicheres Haus',
              content: 'Ein Haus, das einen Computer enthalten kann und keinen Wretch beherbergt.',
            },
            {
              id: 2,
              title: '2: Eingang zu Level 10',
              content: 'Der einzige Zugang zu Level 10. Öffnet sich erst mit der Administrator-Karte.',
            },
            {
              id: 3,
              title: '3: Unsicheres Haus',
              content: 'Kann einen Computer enthalten, wird aber von einem Wretch bewacht.',
            },
            {
              id: 5,
              title: '5: Eingang zum verlassenen Außenposten',
              content: 'Öffnet sich erst, wenn alle Computer im Level aktiviert wurden.',
            },
            {
              id: 8,
              title: '8: Gate Spawn',
              content: 'Spawn-Punkt, nachdem das Tor entdeckt wurde. Enthält das Terminal, das die Computer-Standorte anzeigt.',
            },
            {
              id: 12,
              title: '12: Haupt-Spawn',
              content: 'Der initiale Startpunkt für alle Spieler.',
            },
            {
              id: 14,
              title: '14: Eingang zum Hub',
              content: 'Der einzige Zugang zum Hub in diesem Level, versteckt in einem unsicheren Haus (Punkt 13).',
            },
          ],
          detailsHtml: `
              <h2>Karten-Überblick</h2>
              <p>Level 9 (The Suburbs) basiert auf einem Puzzle-System in einer Vorstadt-Umgebung. Spieler müssen Computer in verschiedenen Häusern finden, während sie den gefährlichen Wretches ausweichen.</p>
        
              <h2>Sichere vs. Unsichere Häuser</h2>
              <ul>
                <li><strong>Sichere Häuser (Punkte 1, 6, 11):</strong> Keine Entitäten. Ideal, um nach Computern zu suchen.</li>
                <li><strong>Unsichere Häuser (Punkte 3, 4, 7, 9, 10, 13):</strong> Hier patrouillieren Wretches. Gehe nur hinein, wenn es für den Fortschritt notwendig ist.</li>
              </ul>
        
              <h2>Wichtige Eingänge</h2>
              <ul>
                <li><strong>Verlassener Außenposten (Punkt 5):</strong> Hier erhältst du die Admin-Karte von einem besiegten Wretch.</li>
                <li><strong>Level 10 (Punkt 2):</strong> Das Ziel des Levels.</li>
                <li><strong>The Hub (Punkt 14):</strong> Befindet sich in Haus 13.</li>
              </ul>
        
              <h2>Strategie</h2>
              <ol>
                <li>Nutze das Terminal am Gate Spawn (Punkt 8), um zu sehen, welche Häuser Computer haben.</li>
                <li>Arbeite zuerst die sicheren Häuser ab.</li>
                <li>Aktiviere alle Computer, um den Außenposten zu öffnen.</li>
                <li>Hol dir die Admin-Karte im Außenposten und öffne damit den Weg zu Level 10.</li>
              </ol>
        
              <h2>Level-Informationen</h2>
              <p><strong>Kategorie:</strong> The Depths</p>
              <p><strong>Entitäten:</strong> Wretch (Elende)</p>
              <p><strong>Schwierigkeit:</strong> Mittel bis Schwer (erfordert Stealth und Planung).</p>
            `,
        }
      
      

]