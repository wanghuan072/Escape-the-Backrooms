import type { Locale } from '@/types/locale'

interface LevelGuideCopy {
  highlights: string
  videoChapters: string
  author: string
  updated: string
  duration: string
  watchVideo: string
  embeddedVideo: string
  researchIntro: string
  checks: readonly string[]
  multiplayerNotes: Record<number, string>
}

const englishNotes: Record<number, string> = {
  1: 'At the square-hole room, leave one player on the safe side before anyone tries the crossing. If a teammate falls, a player who made it across can use a rope to pull them back; if nobody is across yet, keep moving and look for the arrow-marked recovery route instead of repeatedly jumping into the same gap.',
  2: 'Give the four keys to players who are already standing at the central lock, then count down before turning them. The locks reset if the turns are too far apart, so the search team should call “all keys in” before anyone starts the interaction.',
  3: 'On the long Pipe Dreams route, put the fastest player at the front and keep everyone close enough to see the turn. Once the chase starts, nobody doubles back for loot; call the exit side and run the same line.',
  4: 'At the Electrical Station, split the fuse search by room rather than wandering. Whoever finds a fuse calls its room, while one teammate stays near the last opened gate so the team always has a known way back.',
  5: 'For the camera hall, have one player watch the camera sweep while the others use the side rooms. If the exit locks after a sighting, regroup at the reset point instead of trying to force the final door.',
  6: 'In the hotel, split the job cleanly: one player handles the painting order or notes while another gathers Moth Jelly. Keep the bug-spray carrier alive and call out every key before returning to the dumbwaiter.',
  7: 'In the Beverly Room, agree on who reads the clue and who handles the interaction before touching anything. The room is short, but rushing the first prompt is how groups repeat the same check without knowing what changed.',
  8: 'In the Boiler Room, one player watches the thermometer and calls danger while the others move between doors. Stay crouched near moths and wait for the call instead of having everyone test a different exit.',
  9: 'For the Pipe Run, keep the group in single file through tight turns. The lead calls the next opening; the last player confirms everyone made it through before the team commits to the next section.',
  10: 'In Level Fun, do not pop balloons or pull Partygoers toward teammates who are still hiding. Pick one caller for the next table or doorway, then move in pairs so nobody is left behind.',
  11: 'In the Poolrooms, pick left or right before the first junction and keep that rule for everyone. If somebody loses the group, stop at the last clear landmark and use short callouts instead of having everyone reverse direction.',
  12: 'During RUN!, there is no time for loot calls. Everyone follows the same runner, calls “left” or “right” early, and keeps moving; turning around for one teammate often turns one mistake into a full-party reset.',
  13: 'At The End, let one player read the terminal or tape clue while another watches the route back. Call every completed objective out loud so the team does not lose track of the final requirement.',
  14: 'At Level 94, keep Almond Water with the players taking the longest route and use houses as agreed cover when danger starts. Regroup at a house before moving toward the castle.',
  15: 'In Lights Out, use names and landmarks, not “over here.” Keep a light carrier in front and make the second player call doors behind the group so the team does not split at a dark junction.',
  16: 'For Thalassophobia, decide whether the group is using the boat or swimming before leaving shore. Keep the diving-helmet objective with the group and do not send one player into the deep section without a return landmark.',
  17: 'In the caves, open nearby doors as you go so there is always a retreat. Send one player to check the next corner, then call the group through once the choke point is clear.',
  19: 'In the Suburbs and Lab, keep the key item with a player who is not leading a chase. Regroup before each puzzle; clues are much easier to read once nobody is still running from the previous area.',
  20: 'In the Fields, call each turbine as it is activated and keep one player watching the route through the wheat. Do not send everyone after a shortcut while part of the group still needs the normal objective.',
  21: 'In the Arcade, one player tracks tickets and codes while the others clear machines or rooms. Read the code back before pressing the elevator buttons so a swapped digit does not waste the run.',
  22: 'On the Ancient Path, keep the switch count in voice chat and wait at the tunnel gate until everyone is ready. Cross together once the safe window opens.',
  23: 'For Level !!, nominate one player to read the colour or symbol sequence and a second to repeat it back. That short check is faster than guessing under pressure.',
  24: 'For the Courtyard TVs, one player remembers which window is A, B, and C while the others search the floors. Bring each set back to the main room before splitting again.',
  25: 'At each valve section, count the valves aloud and leave one player by the water tank to confirm it filled. Do not start a timed sequence until the group knows which side it covers.',
  26: 'In Fun+, give each sector a caller and return every key to the centre before opening another route. If a Partygoer blocks a key, name the sector so nobody walks into the same danger blind.',
  27: 'In Level 52, stay behind the player following the guide character and do not race into the next hall. Pause at each safe break so anyone who crouched or hid can catch up.',
  28: 'In multiplayer, the first camera target can be another player. Take that photo while everyone is together, then use the elevator lever deliberately; stopping it gives the team time to break line of sight.',
  29: 'Use Level B as a regroup point. Confirm supplies, keycards, and the next exit before anyone boards an elevator or opens a route the rest of the lobby has not unlocked.',
  30: 'For the Graffiti puzzle, have one player read the colour order while another works the tubes or fans. Repeat the sequence before committing; correcting a heard-wrong colour is safer than resetting late.',
  31: 'In the Grassrooms, call every lever and rope cut before moving on. Keep the group on the safe path together; do not stop in the grass while waiting for someone behind.',
  32: 'For the Level 363 secret route, let one player lead the discovery steps and keep the others close enough to confirm the prompt. If it does not trigger, reset the route conditions instead of forcing an old skip.',
  33: 'In Kitty’s House, keep one player watching Kitty while another carries toys to the theatre. Call every deposited toy; Kitty can move when nobody is looking, so never have the whole group turn away together.',
  34: 'On Level 922, keep the team together on the stairs and have one player call the floor labels. If somebody sees the wrong number, everyone stops before jumping.',
  35: 'On the final 3999 route, treat every completed objective as a team checkpoint. Confirm the key item, code, and exit state together before using the final ending trigger.',
  36: 'For Level 0.11, scout the random side rooms before starting the lever chain, then give each player a numbered switch. Count down the first pull, call every activation, and leave someone close enough to the shutter to hold the exit route while the rest catch up.',
  37: 'In Level 421, split the three floors for the flower search but use one caller to record each shape and colour. Regroup before setting the projectors. In Plastic Mariana, have the first player at the blue ball call it out and collect it before the team splits; if it is thrown as shark bait, name the lighthouse everyone else is running to. Announce every lighthouse switch, then assign one basketball hoop per player so the team can spot a missed score immediately.',
}

const germanNotes: Record<number, string> = {
  1: 'Im Raum mit den quadratischen Löchern bleibt zuerst jemand auf der sicheren Seite. Stürzt ein Mitspieler ab, kann ihn ein bereits hinübergekommener Spieler mit dem Seil hochziehen; ist noch niemand drüben, folgt unten den Pfeilen zur Rückroute.',
  2: 'Verteilt die vier Schlüssel erst, wenn alle an den Schlössern stehen, und zählt gemeinsam herunter. Werden die Schlüssel zu weit auseinander gedreht, setzen sich die Schlösser zurück.',
  3: 'In Pipe Dreams läuft der schnellste Spieler vorne, der Rest bleibt nah genug, um jede Abbiegung zu sehen. Sobald die Jagd beginnt, kehrt niemand für Beute um; ruft die Ausgangsseite frühzeitig durch.',
  4: 'Teilt die Suche im Kraftwerk nach Räumen auf. Wer eine Sicherung findet, nennt den Raum; ein Mitspieler bleibt am zuletzt geöffneten Tor, damit der Rückweg eindeutig bleibt.',
  5: 'Im Kameragang beobachtet ein Spieler den Schwenkbereich, während die anderen die Seitenräume nutzen. Verriegelt der Ausgang nach einer Sichtung, trefft euch am Rücksetzpunkt, statt die Tür weiter zu erzwingen.',
  6: 'Im Hotel übernimmt eine Person die Gemälde beziehungsweise Hinweise, eine andere sammelt Mottengelee. Schützt den Spieler mit dem Insektenspray und meldet jeden Schlüssel vor der Rückkehr zum Speiseaufzug.',
  7: 'Im Beverly Room legt ihr vor der ersten Berührung fest, wer den Hinweis liest und wer interagiert. Wer die erste Einblendung überhastet wegklickt, lässt die Gruppe oft dieselbe Prüfung wiederholen.',
  8: 'Im Heizungsraum liest ein Spieler das Thermometer und warnt die Gruppe, während die anderen von Tür zu Tür gehen. In Mottennähe bleibt ihr geduckt und wartet auf die Ansage.',
  9: 'Beim Pipe Run bleibt die Gruppe in engen Kurven hintereinander. Der vorderste Spieler ruft die nächste Öffnung, der letzte bestätigt, dass alle durch sind.',
  10: 'In Level Fun platzt niemand Ballons oder zieht Partygoer zu noch versteckten Mitspielern. Bestimmt einen Ansager für Tisch und Tür und bewegt euch paarweise.',
  11: 'Legt in den Poolrooms an der ersten Kreuzung links oder rechts fest und bleibt alle bei dieser Regel. Geht jemand verloren, wartet am letzten klaren Orientierungspunkt und nutzt kurze Ansagen.',
  12: 'In RUN! bleibt keine Zeit für Beute. Alle folgen demselben Läufer, rufen links oder rechts frühzeitig und laufen weiter; ein Umdrehen macht aus einem Fehler schnell einen Gruppen-Neustart.',
  13: 'In The End liest ein Spieler Terminal oder Bandhinweis, während ein anderer den Rückweg beobachtet. Meldet jedes abgeschlossene Ziel laut, damit die letzte Aufgabe nicht untergeht.',
  14: 'In Level 94 tragen die Spieler auf der längsten Route das Mandelwasser. Einigt euch auf Häuser als Deckung und sammelt euch dort wieder, bevor ihr gemeinsam zum Schloss weiterzieht.',
  15: 'In Lights Out helfen Namen und Orientierungspunkte, nicht „hier drüben“. Der Lichtträger geht voraus, der zweite Spieler meldet Türen hinter der Gruppe.',
  16: 'Entscheidet vor dem Ablegen in Thalassophobia, ob ihr Boot oder Schwimmroute nehmt. Bleibt beim Taucherhelm zusammen und schickt niemanden ohne klaren Rückweg allein in die Tiefe.',
  17: 'Öffnet in den Höhlen Türen auf dem Weg, damit ein Rückzug möglich bleibt. Einer prüft die nächste Ecke, erst danach wird die Gruppe durch die Engstelle gerufen.',
  19: 'In Vorstadt und Labor trägt den Schlüsselgegenstand nicht der Spieler, der eine Verfolgung anführt. Sammelt euch vor jedem Rätsel, bevor jemand die Hinweise bedient.',
  20: 'Meldet jedes aktivierte Windrad und lasst einen Spieler den Weg durch das Weizenfeld im Blick behalten. Schickt nicht die ganze Gruppe zu einer Abkürzung, solange noch jemand das normale Ziel braucht.',
  21: 'In der Spielhalle notiert eine Person Tickets und Codes, während die anderen Automaten oder Räume abarbeiten. Lest den Code vor der Aufzugseingabe einmal zurück.',
  22: 'Auf dem Ancient Path zählt ihr die Schalter im Sprachchat und wartet am Tunneltor, bis alle bereit sind. Überquert den Abschnitt gemeinsam, sobald das sichere Zeitfenster beginnt.',
  23: 'In Level !! liest ein Spieler die Farb- oder Symbolfolge, ein zweiter wiederholt sie. Diese kurze Kontrolle spart unter Druck mehr Zeit als Raten.',
  24: 'Beim Fernsehrätsel merkt sich ein Spieler die Fenster A, B und C, während die anderen die Stockwerke absuchen. Bringt jeden Fund erst in den Hauptraum zurück.',
  25: 'Zählt in jedem Ventilabschnitt laut mit und lasst einen Spieler am Wassertank prüfen, ob er wirklich gefüllt ist. Startet zeitgesteuerte Ventile erst nach klarer Seitenaufteilung.',
  26: 'In Fun+ bekommt jeder Sektor einen Ansager; bringt jeden Schlüssel zur Mitte, bevor ihr die nächste Route öffnet. Nennt den Sektor, wenn ein Partygoer einen Schlüssel blockiert.',
  27: 'In Level 52 bleibt ihr hinter dem Spieler, der der Führungsfigur folgt. Wartet an jeder sicheren Unterbrechung, bis geduckte oder versteckte Mitspieler wieder aufgeschlossen haben.',
  28: 'Im Mehrspieler kann das erste Kameraziel ein Mitspieler sein. Nehmt das Foto, solange alle zusammenstehen, und bedient danach den Aufzug bewusst; ein Stopp schafft Zeit, die Sichtlinie zu brechen.',
  29: 'Nutzt Level B zum Sammeln. Prüft Vorräte, Schlüsselkarten und den nächsten Ausgang, bevor jemand in einen Aufzug steigt oder eine noch nicht für alle offene Route nimmt.',
  30: 'Beim Graffiti-Rätsel liest eine Person die Farbreihenfolge, eine zweite bedient Rohre oder Ventilatoren. Wiederholt die Folge vor der Eingabe.',
  31: 'In den Grassrooms meldet ihr jeden Hebel und jedes durchtrennte Seil. Bleibt gemeinsam auf dem sicheren Weg und wartet nicht auf dem Gras auf Nachzügler.',
  32: 'Auf der Geheimroute zu Level 363 führt eine Person die Schritte aus, während die anderen nahe genug bleiben, um die Einblendung zu bestätigen. Erscheint sie nicht, setzt die Bedingungen sauber zurück.',
  33: 'In Kittys Haus beobachtet ein Spieler Kitty, während ein anderer Spielzeug zum Theater trägt. Meldet jedes abgelegte Stück und dreht niemals gleichzeitig als ganze Gruppe den Blick weg.',
  34: 'In Level 922 bleibt die Gruppe auf der Treppe zusammen; eine Person liest die Etagenzahlen vor. Sieht jemand eine falsche Zahl, halten alle vor dem Sprung an.',
  35: 'Auf der letzten 3999-Route ist jedes erfüllte Ziel ein Gruppen-Checkpoint. Prüft Schlüsselgegenstand, Code und Ausgang gemeinsam, bevor jemand den finalen Endauslöser betätigt.',
  36: 'Erkundet in Level 0.11 zuerst die zufälligen Seitenräume und verteilt dann die nummerierten Schalter. Zählt den ersten Zug herunter, meldet jede Aktivierung und lasst jemanden nahe genug am Rolltor, damit die Fluchtroute offen bleibt, bis alle durch sind.',
  37: 'Teilt in Level 421 die drei Etagen für die Blumensuche auf, aber lasst eine Person jede Form und Farbe notieren. Trefft euch vor den Projektoren. In Plastic Mariana meldet der erste Spieler an der blauen Kugel sie und nimmt sie auf, bevor sich die Gruppe verteilt; dient sie als Hai-Köder, sagt an, zu welchem Leuchtturm alle anderen laufen. Meldet jeden Leuchtturmschalter und verteilt die vier Basketballkörbe fest auf die Spieler.',
}

const frenchNotes: Record<number, string> = {
  1: 'Dans la salle aux trous carrés, laissez d’abord un joueur du côté sûr. Si un équipier tombe, celui qui a traversé peut le remonter avec une corde ; si personne n’est passé, suivez les flèches en contrebas pour rejoindre l’itinéraire de secours.',
  2: 'Distribuez les quatre clés uniquement lorsque chacun est déjà devant une serrure, puis lancez un compte à rebours. Les serrures se réinitialisent si elles ne sont pas tournées presque en même temps.',
  3: 'Dans Pipe Dreams, le joueur le plus rapide ouvre la marche et les autres restent assez proches pour voir les virages. Dès que la poursuite commence, personne ne revient chercher du butin ; annoncez tôt le côté de la sortie.',
  4: 'Dans la centrale électrique, répartissez la recherche des fusibles par salle. Celui qui en trouve un annonce sa position et un joueur reste près de la dernière grille ouverte pour garder un retour clair.',
  5: 'Dans le couloir des caméras, un joueur observe leur balayage pendant que les autres passent par les salles latérales. Si la sortie se verrouille, regroupez-vous au point de réinitialisation.',
  6: 'Dans l’hôtel, une personne gère l’ordre des tableaux ou les indices et une autre récupère la gelée de papillon. Protégez le porteur de l’insecticide et annoncez chaque clé avant de revenir au monte-plats.',
  7: 'Dans la Beverly Room, décidez avant toute interaction qui lit l’indice et qui manipule l’objet. Aller trop vite sur la première invite oblige souvent le groupe à refaire la même vérification.',
  8: 'Dans la chaufferie, un joueur surveille le thermomètre et annonce le danger pendant que les autres avancent de porte en porte. Restez accroupis près des papillons.',
  9: 'Dans le Pipe Run, progressez en file dans les virages étroits. Le premier annonce la prochaine ouverture et le dernier confirme que tout le monde est passé.',
  10: 'Dans Level Fun, ne crevez pas de ballon et n’attirez pas les Partygoers vers des équipiers encore cachés. Désignez une personne pour annoncer la table ou la porte suivante et avancez par deux.',
  11: 'Dans les Poolrooms, choisissez gauche ou droite dès le premier carrefour et gardez tous la même règle. Si quelqu’un se perd, attendez au dernier repère clair et utilisez des indications courtes.',
  12: 'Pendant RUN!, oubliez le butin. Tout le monde suit le même joueur, annonce gauche ou droite assez tôt et continue d’avancer ; se retourner transforme souvent une erreur en reprise complète.',
  13: 'Dans The End, un joueur lit le terminal ou l’indice des cassettes pendant qu’un autre surveille le retour. Annoncez chaque objectif validé pour ne pas perdre le fil de la dernière condition.',
  14: 'Dans le niveau 94, confiez l’eau d’amande aux joueurs qui prennent la route la plus longue. Utilisez les maisons comme abris convenus et regroupez-vous avant de repartir vers le château.',
  15: 'Dans Lights Out, donnez des noms et des repères, pas seulement « par ici ». Le porteur de lumière ouvre la marche et le deuxième joueur annonce les portes derrière le groupe.',
  16: 'Dans Thalassophobia, choisissez le bateau ou la nage avant de quitter la rive. Restez groupés pour le casque de plongée et n’envoyez personne seul dans les profondeurs sans repère de retour.',
  17: 'Dans les grottes, ouvrez les portes au passage afin de conserver une retraite. Un joueur vérifie le prochain angle, puis appelle le groupe lorsque l’étranglement est dégagé.',
  19: 'Dans les Banlieues et le laboratoire, ne confiez pas l’objet clé au joueur qui mène une poursuite. Regroupez-vous avant chaque énigme afin de lire les indices au calme.',
  20: 'Dans les Champs, annoncez chaque turbine activée et laissez un joueur surveiller le chemin dans le blé. N’envoyez pas toute l’équipe sur un raccourci si certains doivent encore valider l’objectif normal.',
  21: 'Dans l’Arcade, une personne suit les tickets et les codes pendant que les autres terminent les machines ou les salles. Relisez le code avant d’appuyer sur les boutons de l’ascenseur.',
  22: 'Sur l’Ancient Path, comptez les interrupteurs à voix haute et attendez tout le monde devant la grille du tunnel. Traversez ensemble dès l’ouverture de la fenêtre sûre.',
  23: 'Dans le niveau !!, un joueur lit la suite de couleurs ou de symboles et un second la répète. Cette vérification rapide vaut mieux qu’une tentative au hasard sous pression.',
  24: 'Pour les téléviseurs de la Courtyard, un joueur retient les fenêtres A, B et C pendant que les autres fouillent les étages. Ramenez chaque trouvaille dans la salle principale avant de vous séparer à nouveau.',
  25: 'Comptez les vannes à voix haute et laissez un joueur près du réservoir pour confirmer son remplissage. Ne lancez pas une séquence chronométrée avant d’avoir réparti les côtés.',
  26: 'Dans Fun+, attribuez un responsable à chaque secteur et ramenez chaque clé au centre avant d’ouvrir une autre route. Si un Partygoer bloque une clé, annoncez clairement le secteur.',
  27: 'Dans le niveau 52, restez derrière le joueur qui suit le personnage guide. Faites une pause à chaque zone sûre pour laisser revenir ceux qui ont dû s’accroupir ou se cacher.',
  28: 'En multijoueur, la première cible de l’appareil photo peut être un équipier. Prenez cette photo quand tout le monde est réuni, puis contrôlez l’ascenseur avec soin ; l’arrêter permet de couper la ligne de vue.',
  29: 'Servez-vous du niveau B comme point de regroupement. Vérifiez les provisions, les cartes d’accès et la prochaine sortie avant de prendre un ascenseur ou une route non débloquée pour tous.',
  30: 'Pour l’énigme Graffiti, un joueur lit l’ordre des couleurs et l’autre manipule les tubes ou ventilateurs. Répétez la suite avant de la valider.',
  31: 'Dans les Grassrooms, annoncez chaque levier et chaque corde coupée. Restez ensemble sur le chemin sûr et ne vous arrêtez pas dans l’herbe pour attendre un retardataire.',
  32: 'Pour la route secrète du niveau 363, une personne mène les étapes et les autres restent assez proches pour confirmer l’apparition de l’interaction. Si elle manque, réinitialisez proprement les conditions.',
  33: 'Dans la maison de Kitty, un joueur garde Kitty en vue pendant qu’un autre rapporte les jouets au théâtre. Annoncez chaque dépôt et ne détournez jamais tous le regard en même temps.',
  34: 'Dans le niveau 922, restez groupés dans l’escalier et laissez une personne annoncer les numéros d’étage. Si quelqu’un repère le mauvais numéro, tout le monde s’arrête avant de sauter.',
  35: 'Sur la dernière route de 3999, traitez chaque objectif comme un point de contrôle collectif. Confirmez ensemble l’objet clé, le code et l’état de la sortie avant le déclencheur final.',
  36: 'Dans le niveau 0.11, explorez les salles latérales aléatoires avant de lancer la chaîne, puis attribuez un levier numéroté à chacun. Comptez le premier tirage, annoncez chaque activation et gardez quelqu’un près du volet pour sécuriser le passage du reste de l’équipe.',
  37: 'Dans le niveau 421, partagez les trois étages pour chercher les fleurs, mais confiez à une seule personne la liste des formes et des couleurs. Regroupez-vous avant les projecteurs. Dans Plastic Mariana, le premier joueur qui voit la balle bleue l’annonce et la ramasse avant que le groupe se disperse ; si elle sert d’appât, dites vers quel phare les autres courent. Annoncez chaque phare et attribuez un panier à chacun pour repérer aussitôt un tir non validé.',
}

const spanishNotes: Record<number, string> = {
  1: 'En la sala de los agujeros cuadrados, dejad primero a una persona en el lado seguro. Si alguien cae, quien ya haya cruzado puede subirlo con una cuerda; si aún no ha cruzado nadie, seguid las flechas de abajo hasta la ruta de recuperación.',
  2: 'Repartid las cuatro llaves cuando todos estén frente a las cerraduras y haced una cuenta atrás. Si se giran con demasiada diferencia, las cerraduras se reinician.',
  3: 'En Pipe Dreams, el jugador más rápido va delante y el resto se mantiene lo bastante cerca para ver cada giro. Cuando empiece la persecución, nadie vuelve por objetos; avisad con tiempo del lado de la salida.',
  4: 'En la Central Eléctrica, repartid la búsqueda de fusibles por salas. Quien encuentre uno dice dónde está y otra persona espera junto a la última puerta abierta para mantener clara la vuelta.',
  5: 'En el pasillo de cámaras, una persona vigila el barrido y las demás usan las salas laterales. Si la salida se bloquea al ser vistos, reuníos en el punto de reinicio.',
  6: 'En el hotel, una persona se ocupa de los cuadros o las pistas y otra recoge gelatina de polilla. Proteged a quien lleva el insecticida y avisad de cada llave antes de volver al montacargas.',
  7: 'En la Beverly Room, decidid antes de tocar nada quién lee la pista y quién interactúa. Pasar demasiado rápido el primer aviso suele hacer que el grupo repita la misma comprobación.',
  8: 'En la Sala de Calderas, una persona controla el termómetro y avisa del peligro mientras las demás avanzan entre puertas. Cerca de las polillas, agachaos y esperad la señal.',
  9: 'En Pipe Run, avanzad en fila por los giros estrechos. La primera persona anuncia la siguiente abertura y la última confirma que todos han pasado.',
  10: 'En Level Fun, no explotéis globos ni llevéis Partygoers hacia compañeros que siguen escondidos. Elegid a quien anuncie la siguiente mesa o puerta y moveos por parejas.',
  11: 'En Poolrooms, elegid izquierda o derecha en el primer cruce y mantened todos esa regla. Si alguien se pierde, esperad en el último punto reconocible y usad indicaciones breves.',
  12: 'Durante RUN! no hay tiempo para recoger objetos. Todos siguen al mismo corredor, avisan pronto de izquierda o derecha y continúan; volver atrás suele convertir un fallo en un reinicio total.',
  13: 'En The End, una persona lee el terminal o la pista de las cintas y otra vigila la vuelta. Anunciad cada objetivo completado para no perder la última condición.',
  14: 'En el nivel 94, dejad el agua de almendras a quienes recorran la ruta más larga. Acordad las casas como refugio y reuníos en una antes de avanzar hacia el castillo.',
  15: 'En Lights Out, usad nombres y puntos de referencia, no “aquí”. Quien lleva la luz va delante y la segunda persona anuncia las puertas que quedan detrás.',
  16: 'En Thalassophobia, elegid barco o natación antes de salir de la orilla. Mantened unido al grupo durante el objetivo del casco y no enviéis a nadie solo a la zona profunda sin una referencia de regreso.',
  17: 'En las cuevas, abrid puertas al avanzar para conservar una retirada. Una persona revisa la siguiente esquina y llama al resto cuando el paso estrecho está despejado.',
  19: 'En los Suburbios y el laboratorio, que el objeto clave no lo lleve quien encabeza una persecución. Reuníos antes de cada puzle para leer las pistas sin arrastrar el peligro anterior.',
  20: 'En los Campos, anunciad cada turbina activada y dejad a una persona pendiente de la ruta por el trigo. No mandéis a todo el grupo a un atajo si alguien aún necesita el objetivo normal.',
  21: 'En el Arcade, una persona controla tickets y códigos mientras las demás completan máquinas o salas. Repetid el código antes de pulsar el ascensor.',
  22: 'En Ancient Path, contad los interruptores por voz y esperad ante la compuerta hasta que todos estén listos. Cruzad juntos cuando se abra la ventana segura.',
  23: 'En el nivel !!, una persona lee la secuencia de colores o símbolos y otra la repite. Esa comprobación corta es más rápida que adivinar bajo presión.',
  24: 'Para los televisores del Courtyard, una persona recuerda qué ventana es A, B y C mientras las demás registran las plantas. Llevad cada hallazgo a la sala principal antes de separaros otra vez.',
  25: 'Contad las válvulas en voz alta y dejad a alguien junto al depósito para confirmar que se ha llenado. No iniciéis una secuencia temporizada hasta repartir las zonas.',
  26: 'En Fun+, asignad una persona a cada sector y devolved cada llave al centro antes de abrir otra ruta. Si un Partygoer bloquea una llave, decid en qué sector está.',
  27: 'En el nivel 52, quedaos detrás de quien sigue al personaje guía. Parad en cada tramo seguro para que alcancen al grupo quienes tuvieron que agacharse o esconderse.',
  28: 'En multijugador, el primer objetivo de la cámara puede ser otro jugador. Haced esa foto con el grupo reunido y controlad el ascensor con cuidado; detenerlo da tiempo para romper la línea de visión.',
  29: 'Usad el nivel B para reuniros. Comprobad provisiones, tarjetas y la próxima salida antes de que alguien entre en un ascensor o abra una ruta que no está disponible para todos.',
  30: 'En el puzle Graffiti, una persona lee el orden de colores y otra maneja los tubos o ventiladores. Repetid la secuencia antes de confirmarla.',
  31: 'En Grassrooms, anunciad cada palanca y cada cuerda cortada. Seguid juntos por la ruta segura y no os detengáis sobre la hierba para esperar a alguien.',
  32: 'Para la ruta secreta del nivel 363, una persona dirige los pasos y las demás permanecen cerca para confirmar que aparece la interacción. Si no aparece, reiniciad las condiciones en vez de forzar un atajo antiguo.',
  33: 'En la casa de Kitty, una persona mantiene a Kitty a la vista y otra lleva juguetes al teatro. Anunciad cada entrega y no apartéis todos la mirada al mismo tiempo.',
  34: 'En el nivel 922, mantened al grupo unido en la escalera y dejad que una persona cante los números de planta. Si alguien ve el número incorrecto, todos paran antes de saltar.',
  35: 'En la ruta final de 3999, tratad cada objetivo como un punto de control del equipo. Confirmad juntos el objeto clave, el código y la salida antes de activar el final.',
  36: 'En el nivel 0.11, revisad primero las salas laterales aleatorias y asignad después una palanca numerada a cada persona. Haced una cuenta atrás, anunciad cada activación y dejad a alguien cerca de la persiana para asegurar el paso hasta que cruce todo el equipo.',
  37: 'En el nivel 421, repartid las tres plantas para buscar flores, pero dejad que una sola persona anote cada forma y color. Reuníos antes de configurar los proyectores. En Plastic Mariana, quien vea primero la pelota azul debe avisarlo y recogerla antes de que el grupo se disperse; si se usa como cebo para el tiburón, decid hacia qué faro correrán las demás personas. Avisad de cada faro y asignad una canasta a cada jugador para detectar enseguida un tiro que no contó.',
}

const sharedCopy: Record<Locale, Omit<LevelGuideCopy, 'multiplayerNotes'>> = {
  en: {
    highlights: 'Level Highlights', videoChapters: 'Video chapters', author: 'Author', updated: 'Updated', duration: 'Duration', watchVideo: 'Watch this walkthrough on YouTube', embeddedVideo: 'Video walkthrough',
    researchIntro: 'We use this as the quick “don’t make the same mistake twice” checklist. If your room, spawn, or prompt does not match the video, stop and check the normal route first—patches and co-op timing can make an old shortcut look tempting when it simply will not work.',
    checks: ['Make sure this is actually the step you are on. If an item or prompt is missing, backtrack one room and check the inventory first.', 'Look around slowly before guessing. Props can hide chairs, switches, notes, and pickups; a second camera angle is usually faster than brute force.', 'Call out what was pressed, collected, or opened. It prevents the classic “we all thought somebody did it” reset.', 'If a skip behaves inconsistently, leave it and take the intended route. A clean run beats getting stuck in geometry.'],
  },
  de: {
    highlights: 'Highlights des Levels', videoChapters: 'Videokapitel', author: 'Autor', updated: 'Aktualisiert', duration: 'Dauer', watchVideo: 'Diesen Lösungsweg auf YouTube ansehen', embeddedVideo: 'Video-Lösungsweg',
    researchIntro: 'Diese Liste ist unser kurzer Check gegen vermeidbare Wiederholungen. Passen Raum, Startpunkt oder Einblendung nicht zum Video, prüfen wir zuerst den normalen Weg – Updates und Mehrspieler-Timing können alte Abkürzungen unbrauchbar machen.',
    checks: ['Prüft zuerst, ob ihr wirklich an diesem Schritt seid. Fehlt ein Gegenstand oder eine Einblendung, geht einen Raum zurück und kontrolliert das Inventar.', 'Schaut euch in Ruhe um, bevor ihr ratet. Möbel können Schalter, Notizen oder Gegenstände verdecken; ein anderer Blickwinkel ist meist schneller als Ausprobieren.', 'Sagt an, was gedrückt, aufgenommen oder geöffnet wurde. So vermeidet ihr den typischen Neustart, weil alle dachten, jemand anderes habe es erledigt.', 'Verhält sich eine Abkürzung unzuverlässig, nehmt den vorgesehenen Weg. Ein sauberer Lauf ist besser als in der Geometrie festzustecken.'],
  },
  fr: {
    highlights: 'Temps forts du niveau', videoChapters: 'Chapitres de la vidéo', author: 'Auteur', updated: 'Mis à jour', duration: 'Durée', watchVideo: 'Voir ce guide sur YouTube', embeddedVideo: 'Guide vidéo',
    researchIntro: 'Cette liste nous évite de refaire deux fois la même erreur. Si la salle, le point de départ ou l’interaction diffère de la vidéo, vérifiez d’abord l’itinéraire normal : une mise à jour ou le timing multijoueur peut rendre un ancien raccourci inutilisable.',
    checks: ['Vérifiez que vous êtes bien à cette étape. Si un objet ou une interaction manque, revenez d’une salle et contrôlez l’inventaire.', 'Observez tranquillement avant d’essayer au hasard. Le décor peut cacher une chaise, un interrupteur, une note ou un objet ; changer d’angle est souvent plus rapide.', 'Annoncez ce qui a été actionné, ramassé ou ouvert. Cela évite le redémarrage classique où chacun pensait qu’un autre s’en était chargé.', 'Si un raccourci réagit de façon irrégulière, reprenez la route prévue. Mieux vaut un passage propre qu’un personnage coincé dans le décor.'],
  },
  es: {
    highlights: 'Momentos destacados del nivel', videoChapters: 'Capítulos del vídeo', author: 'Autor', updated: 'Actualizado', duration: 'Duración', watchVideo: 'Ver esta guía en YouTube', embeddedVideo: 'Guía en vídeo',
    researchIntro: 'Usamos esta lista para no repetir el mismo error. Si la sala, el punto de aparición o la interacción no coinciden con el vídeo, comprobad primero la ruta normal: una actualización o el ritmo del multijugador pueden inutilizar un atajo antiguo.',
    checks: ['Comprobad que estáis realmente en este paso. Si falta un objeto o una interacción, volved una sala y revisad primero el inventario.', 'Mirad alrededor con calma antes de adivinar. El escenario puede ocultar sillas, interruptores, notas u objetos; cambiar el ángulo suele ser más rápido.', 'Anunciad lo que se ha pulsado, recogido o abierto. Así se evita el típico reinicio porque todos creían que lo había hecho otra persona.', 'Si un atajo funciona de forma irregular, tomad la ruta prevista. Es mejor una vuelta limpia que quedar atrapado en el escenario.'],
  },
}

export function getLevelGuideCopy(locale: Locale): LevelGuideCopy {
  const notes = locale === 'de' ? germanNotes : locale === 'fr' ? frenchNotes : locale === 'es' ? spanishNotes : englishNotes
  return {
    ...sharedCopy[locale],
    multiplayerNotes: notes,
  }
}

export function getLocalizedMultiplayerNote(locale: Locale, levelId: string | number): string {
  const numericId = typeof levelId === 'number' ? levelId : Number.parseInt(String(levelId).replace(/\D/g, ''), 10)
  const copy = getLevelGuideCopy(locale)
  return copy.multiplayerNotes[Number.isFinite(numericId) ? numericId : 1] ?? copy.multiplayerNotes[1]
}
