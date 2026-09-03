import type { YouTubeChapter } from '@/lib/data/youtube'
import type { Locale } from '@/types/locale'

type ChapterLabels = Record<string, readonly string[]>

const german: ChapterLabels = {
  _ebQrXMMcb8: ['Porträträtsel: von jung nach alt', 'Insektenspray und Mottengelee sammeln', 'Mottengelee gegen Schlüssel tauschen', 'Abkürzung an der fünften Ziegelreihe', 'Neustart-Trick für die Ausgangstür', 'Mit dem Aufzug entkommen'],
  _q_HErkpw3M: ['Thermometer finden', 'Große Motten ohne Taschenlampe passieren', 'Route über die Dampfventile lösen', 'Letzte Jagd der Death Moth', 'Die echte Ausgangstür wählen'],
  '0hSXEPpTuH4': ['Voraussetzungen für das wahre Ende', 'M.E.G.-Aufzug zu Level 3999 nehmen', 'Geheimen Arcade-Bereich erkunden', 'Vier Hauptautomaten einschalten', 'Mit dem Hausmeister sprechen', 'Der Hausmeister öffnet den Ausgang', 'Das Ende „Final Escape“ auslösen'],
  '2Giiy2ixJNw': ['Normales Fernsehrätsel', 'Curtain Spirit ausweichen', 'Fernseher per Rutschangriff schieben', 'Aufzug-Abkürzung mit einem Fernseher', 'Level 188 verlassen'],
  '3FChsY_BfUs': ['Warnung zum Mehrspieler-Auslöser', 'Linken Sprung nehmen', 'Sprung-Duck-Technik einsetzen', 'Ausgangstür erreichen'],
  '5IO2o0TgH5k': ['Warnung vor der Fensterfalle', 'Hocker zählen', 'Tische zählen', 'Wasserspender zählen', 'Kameralabyrinth durchqueren und Sicherheitstaste drücken', 'Ausgangstreppe erreichen'],
  '6Ypd5PZsXBs': ['Route in Richtung Level 3', 'Ausdauertechnik mit Lauf-Sprüngen', 'Taschenlampe aufnehmen', 'Dampffallen richtig abpassen', 'Smiler-Verfolgung überleben', 'Linkes Ausgangsloch nehmen'],
  '7eDAm964Cv4': ['Drei mögliche Codes für Zimmer 235', 'Briefkastenrätsel lösen', 'Hound ausweichen', 'Code an der Decke ablesen', 'Zimmer 235 öffnen'],
  AN6K0M1pz1Y: ['Eingang am Rolltor finden', 'M.E.G.-Karte durchziehen', 'Endlose Treppe betreten', 'Treppenabstieg mit niedriger Bildrate', 'Etage 94 erkennen', 'In die Treppenspirale springen', 'Im Schlafzimmer aufwachen', 'Aus dem Fenster auf die Hügel blicken', 'Das Ende „The Suburbs“ auslösen'],
  ckxN2YKqFuQ: ['Grundlagen der Tarnung', 'Unter Tischen verstecken', 'Ballon als Ablenkung nutzen', 'Partygoer-Patrouillen abpassen', 'Letzten karierten Raum durchqueren', 'Ausgang zu den Poolrooms nehmen'],
  'd-Xwm5CY4tM': ['Kopfgeldnotiz finden', 'Dem Sweeper folgen', 'Geduckte Route des Führers nachmachen', 'Curtain Monster ausweichen'],
  D223jekpV4Q: ['Fun+-Lobby betreten', 'Ballon-Schlüssel-Rätsel lösen', 'Vier Ballons im mittleren Labyrinth platzen lassen', 'Leuchtstab-Zeichnung lesen', 'Am blinden Partygoer vorbeischleichen', 'Leuchtstäbe auf die Symbole legen', 'Schlüssel am Greifautomaten abgeben', 'Ausgangstür öffnen'],
  e9sJpWs4iYc: ['Farbreihenfolge am Aufzug lösen', 'Schlüssel in der Garage finden', 'Skin-Stealer einsperren', 'Sichtbarkeit bei niedriger Grafik zeigen', 'Computerrätsel im Hub lösen', 'Tunnelverfolgung abschließen'],
  FDk9KG4pB4E: ['Technik für schnelleres Schwimmen', 'Sicht unter Wasser verbessern', 'Leuchtturm und Leuchtpistole erreichen', 'Unterwasser-Höhlenausgang finden'],
  hDsXOxSmbLU: ['M.E.G.-Tür öffnen und Insektenspray nehmen', 'Skin-Stealer ausweichen', 'Regel „Motten gehen links“ nutzen', 'Hängebrücke überqueren', 'Optionale Parkour-Abkürzung'],
  HGS4_EGr1m4: ['Arcade erkunden', 'Ticket mit der Nummer 931 finden', 'Tastentür öffnen', 'M.E.G.-Aufzug nehmen'],
  I3iu31tuNu0: ['Überblick über den Zugang zu Level 363', 'Ursprüngliche Entwickler-Cheat-Bedingung', 'Spinnengriff auslösen', 'Tod-und-Respawn-Route auslösen', 'In Level 363 erscheinen', 'Klopfende Tür prüfen', 'Durch den Hotelkorridor zurückkehren'],
  'iC5-aFb7-ag': ['Versionshinweis und Routenüberblick', 'Ab Start der rechten Wand folgen', 'Alle vier Leiterteile finden', 'Ausgang erreichen und Bacteria ausweichen', 'Fallenraum sicher überqueren', 'Abgestürzten Mitspieler mit dem Seil retten', 'Solo-Rückweg und Verhalten von Bacteria', 'Gamma einstellen und Taschenlampe aufnehmen'],
  JlcjsuhqqH8: ['Überblick über die Lichttafel', 'Erste Sicherungskästen finden', 'Abschnitt mit dem Hound bewältigen', 'Kabelrätsel lösen', 'Alle Lampen auf Grün stellen und entkommen'],
  kEZQ5NJM8sQ: ['Karte und Computer finden', 'Optionale Wandabkürzung', 'Wretch ausweichen', 'Laborrätsel lösen', 'Entität heilen und Schlüsselkarte nehmen'],
  LpiHcFB49Sk: ['Startpunkte und Hub-Warnung', 'Tiefwasserfalle meiden', 'Bereich zur Regeneration der geistigen Gesundheit nutzen', 'Rote Ausgangstür finden'],
  LVHeNjt0XQ0: ['Duck-Sprung-Technik am Floß', 'Mikrobrücke überqueren', 'Abkürzung über den F11-Fenstermodus', 'Fun+ durch die Röhren betreten'],
  LysnApdBzxY: ['Graffiti-Platz betreten', 'Tempo-Getränk nehmen und Schalter ziehen', 'Linke Seite des Labyrinths nehmen', 'Ersten Körper finden', 'Körper tragen, ohne ihn fallen zu lassen', 'Ventilator mit dem ersten Körper blockieren', 'Weitere Tempo-Getränke sammeln', 'An Bacteria vorbeischleichen', 'Übrige Körper tragen', 'Alle vier farbigen Schächte einschalten', 'In die Ausgangsröhre springen'],
  pkGEH8cdQZ4: ['FUN-Graffiti folgen', 'Ausdauertechnik mit Lauf-Sprüngen', 'Dampfdüsen ausweichen', 'Smiler-Verfolgung überleben', 'Rote Leitern erreichen'],
  PRsArou9ipY: ['Level 55.1 betreten', 'Kamera finden und Solo-Fotomotiv nutzen', 'Transportwagen vor dem Abstieg absenken', 'Wagen fotografieren', 'Schacht hinabsteigen', 'Schneller Bacteria ausweichen', 'Am Smiler vorbeikommen', 'Statuen und Skin-Stealer fotografieren', 'Bei Bedarf Kontrollpunkt neu laden', 'Aufzug zum normalen Ende nehmen', 'Versteckte „Wrong Door“-Route nehmen'],
  sYQfhIlponU: ['Crazy-Growth-Anlage betreten', 'Warnung zum Weiterlaufen lesen', 'Aufzugseile für Solo und Mehrspieler', 'Messer finden', 'Seil durchtrennen und Glasboden zerbrechen', 'Vier Wandtasten finden', 'Ausgangstor öffnen', 'Aufzug zu Level 11 nehmen'],
  tDD7YKWHY9Y: ['Im M.E.G.-Bunker aufwachen', 'Bunkerkorridore erkunden', 'M.E.G.-Ausweis durchziehen', 'Weg zu Level 931 finden', 'Zentralen Aufzug finden', 'Zwischen H, 3999 und B wählen', 'Nächstes Level freischalten'],
  TvYjhNwfDSI: ['Blaue Karte und Türlogik lesen', 'Smiling-Eye-Falle ausschalten', 'Optionale Abkürzung über den Vorsprung', 'Alle Tore auf Grün stellen und Entität einsperren'],
  uGpIdqnQq8w: ['Mit der M.E.G.-Karte Level 974 betreten', 'Im LiDAR-Labyrinth der rechten Wand folgen', 'Kittys Haus betreten', 'Puppensuche beginnen', 'Erste Begegnung mit Kitty', 'Kitty im Blick behalten', 'Puppengeräuschen folgen und Räume durchsuchen', 'Puppen auf die Stühle in der Lobby legen', 'Räume rückwärts betreten', 'Letzte Puppen ablegen', 'In den Lichtkegel stellen', 'Das Ende „The Pink House“ auslösen'],
  UNGLQ3pgFJM: ['LiDAR-Scanner finden', 'Dunkelheit mit LiDAR abtasten', 'Wretch begegnen', 'Geduckt durch den Tarnabschnitt gehen', 'M.E.G.-Ausgangstür erreichen'],
  VCNPh9_dLZI: ['Sicht in den Feldern verbessern', 'Im Weizen in Bewegung bleiben', 'Links-rechts-links-Route folgen', 'Optionale Abkürzung über den Zaun', 'Arcade von Level 3999 erreichen'],
  W4WGueErhlI: ['Vor dem Start der Jagd auf das Team warten', 'Optionale Türabkürzung mit der Kettensäge', 'Links-rechts-links-rechts-Route folgen'],
  WdizI7rFMso: ['Regeln für Ausgangssperre und Nacht', 'Zeitroute zum Schloss', 'Zäune und Häuser als Deckung nutzen', 'Formenrätsel im Schloss lösen', 'Sichere Position beim Achterbahn-Clown'],
  xqjOhlKuGiw: ['VHS-Kassetten sammeln', 'Feueralarm benutzen', 'Unter dem Tisch verstecken', 'Stromausfall überleben', 'Ausgangsleiter finden'],
}

const french: ChapterLabels = {
  _ebQrXMMcb8: ['Portraits : du plus jeune au plus âgé', 'Récupérer l’insecticide et la gelée de papillon', 'Échanger la gelée contre des clés', 'Raccourci du cinquième rang de briques', 'Astuce de redémarrage pour la porte de sortie', 'Partir par l’ascenseur'],
  _q_HErkpw3M: ['Trouver le thermomètre', 'Passer les grands papillons sans lampe', 'Résoudre le parcours des vannes de vapeur', 'Dernière poursuite du Death Moth', 'Choisir la véritable porte de sortie'],
  '0hSXEPpTuH4': ['Conditions de la vraie fin', 'Prendre l’ascenseur M.E.G. vers le niveau 3999', 'Explorer la zone secrète de l’Arcade', 'Alimenter les quatre bornes principales', 'Parler au concierge', 'Le concierge ouvre la sortie', 'Déclencher la fin « Final Escape »'],
  '2Giiy2ixJNw': ['Énigme normale des téléviseurs', 'Éviter le Curtain Spirit', 'Pousser un téléviseur avec une glissade', 'Raccourci de l’ascenseur avec un seul téléviseur', 'Quitter le niveau 188'],
  '3FChsY_BfUs': ['Avertissement sur le déclencheur multijoueur', 'Prendre le saut de gauche', 'Utiliser la technique saut-accroupissement', 'Atteindre la porte de sortie'],
  '5IO2o0TgH5k': ['Avertissement sur le piège de la fenêtre', 'Compter les tabourets', 'Compter les tables', 'Compter les fontaines à eau', 'Traverser les caméras et presser le bouton de sécurité', 'Atteindre l’escalier de sortie'],
  '6Ypd5PZsXBs': ['Itinéraire vers le niveau 3', 'Technique course-saut pour l’endurance', 'Ramasser la lampe torche', 'Passer les jets de vapeur au bon moment', 'Survivre à la poursuite du Smiler', 'Prendre l’ouverture de gauche'],
  '7eDAm964Cv4': ['Trois codes possibles pour la chambre 235', 'Résoudre l’énigme des boîtes aux lettres', 'Éviter le Hound', 'Lire le code au plafond', 'Ouvrir la chambre 235'],
  AN6K0M1pz1Y: ['Trouver l’entrée au volet métallique', 'Passer la carte M.E.G.', 'Entrer dans l’escalier infini', 'Descendre avec une faible fréquence d’images', 'Repérer l’étage 94', 'Sauter dans le vide central', 'Se réveiller dans la chambre', 'Regarder les collines par la fenêtre', 'Déclencher la fin « The Suburbs »'],
  ckxN2YKqFuQ: ['Bases de l’infiltration', 'Se cacher sous les tables', 'Utiliser un ballon comme diversion', 'Observer les patrouilles des Partygoers', 'Traverser la dernière salle à damier', 'Sortir vers les Poolrooms'],
  'd-Xwm5CY4tM': ['Trouver la note de prime', 'Suivre le Sweeper', 'Reproduire son trajet accroupi', 'Éviter le Curtain Monster'],
  D223jekpV4Q: ['Entrer dans le hall de Fun+', 'Résoudre l’énigme de la clé et des ballons', 'Faire éclater les quatre ballons du labyrinthe central', 'Lire le dessin aux bâtons lumineux', 'Passer discrètement devant le Partygoer aveugle', 'Placer les bâtons sur les symboles', 'Déposer les clés dans la machine à pince', 'Déverrouiller la sortie'],
  e9sJpWs4iYc: ['Résoudre la suite de couleurs de l’ascenseur', 'Trouver les clés du garage', 'Enfermer le Skin-Stealer', 'Démonstration de visibilité en qualité basse', 'Résoudre l’ordinateur du Hub', 'Terminer la poursuite dans le tunnel'],
  FDk9KG4pB4E: ['Technique de nage rapide', 'Améliorer la visibilité sous l’eau', 'Atteindre le phare et le pistolet lance-fusées', 'Trouver la grotte de sortie sous-marine'],
  hDsXOxSmbLU: ['Ouvrir la porte M.E.G. et prendre l’insecticide', 'Éviter le Skin-Stealer', 'Appliquer la règle « les papillons vont à gauche »', 'Traverser le pont suspendu', 'Raccourci de parkour facultatif'],
  HGS4_EGr1m4: ['Explorer l’Arcade', 'Trouver le ticket portant le numéro 931', 'Ouvrir la porte à clavier', 'Prendre l’ascenseur M.E.G.'],
  I3iu31tuNu0: ['Aperçu de l’accès au niveau 363', 'Ancienne condition du code de triche développeur', 'Déclencher l’attaque de l’araignée', 'Déclencher la route mort-réapparition', 'Réapparaître dans le niveau 363', 'Examiner la porte qui frappe', 'Revenir par le couloir de l’hôtel'],
  'iC5-aFb7-ag': ['Mise à jour et aperçu de l’itinéraire', 'Suivre le mur de droite dès le départ', 'Trouver les quatre morceaux d’échelle', 'Atteindre la sortie et éviter Bacteria', 'Traverser la salle piégée sans risque', 'Remonter un équipier avec la corde', 'Route de récupération solo et comportement de Bacteria', 'Régler le gamma et récupérer la lampe'],
  JlcjsuhqqH8: ['Aperçu du panneau lumineux', 'Trouver les premiers disjoncteurs', 'Passer la zone du Hound', 'Résoudre le câblage', 'Mettre tous les voyants au vert et sortir'],
  kEZQ5NJM8sQ: ['Trouver la carte et les ordinateurs', 'Raccourci mural facultatif', 'Éviter le Wretch', 'Résoudre l’énigme du laboratoire', 'Soigner l’entité et récupérer la carte d’accès'],
  LpiHcFB49Sk: ['Points d’apparition et avertissement du Hub', 'Éviter le piège en eau profonde', 'Utiliser la zone de régénération de santé mentale', 'Trouver la porte de sortie rouge'],
  LVHeNjt0XQ0: ['Technique accroupissement-saut près du radeau', 'Traverser le petit pont', 'Raccourci avec le mode fenêtré F11', 'Entrer dans Fun+ par les tubes'],
  LysnApdBzxY: ['Entrer sur la place Graffiti', 'Prendre la boisson de vitesse et tirer le levier', 'Prendre le côté gauche du labyrinthe', 'Trouver le premier corps', 'Porter un corps sans le lâcher', 'Bloquer le ventilateur avec le premier corps', 'Récupérer d’autres boissons de vitesse', 'Passer discrètement devant Bacteria', 'Transporter les corps restants', 'Activer les quatre conduits colorés', 'Sauter dans le tube de sortie'],
  pkGEH8cdQZ4: ['Suivre le graffiti FUN', 'Technique course-saut pour l’endurance', 'Éviter les jets de vapeur', 'Survivre à la poursuite du Smiler', 'Atteindre les échelles rouges'],
  PRsArou9ipY: ['Entrer dans le niveau 55.1', 'Trouver l’appareil photo et utiliser la cible solo', 'Faire descendre le chariot avant de descendre', 'Photographier le chariot', 'Descendre dans la cage', 'Éviter le Bacteria rapide', 'Passer le Smiler', 'Photographier les statues et le Skin-Stealer', 'Recharger le point de contrôle si nécessaire', 'Prendre la plateforme pour la fin normale', 'Emprunter la route secrète « Wrong Door »'],
  sYQfhIlponU: ['Entrer dans l’installation Crazy Growth', 'Lire l’avertissement de ne pas s’arrêter', 'Cordes d’ascenseur en solo et en multijoueur', 'Trouver le couteau', 'Couper la corde et briser le sol en verre', 'Trouver les quatre boutons muraux', 'Ouvrir la grille de sortie', 'Prendre l’ascenseur vers le niveau 11'],
  tDD7YKWHY9Y: ['Se réveiller dans le bunker M.E.G.', 'Explorer les couloirs du bunker', 'Passer la carte d’identité M.E.G.', 'Trouver le chemin vers le niveau 931', 'Repérer l’ascenseur central', 'Choisir entre H, 3999 et B', 'Déverrouiller le niveau suivant'],
  TvYjhNwfDSI: ['Lire la carte bleue et la logique des portes', 'Désactiver le piège Smiling Eye', 'Raccourci facultatif par le rebord', 'Mettre toutes les grilles au vert et piéger l’entité'],
  uGpIdqnQq8w: ['Accéder au niveau 974 avec la carte M.E.G.', 'Suivre le mur de droite dans le labyrinthe LiDAR', 'Entrer dans la maison de Kitty', 'Commencer la recherche des poupées', 'Première rencontre avec Kitty', 'Garder Kitty dans son champ de vision', 'Suivre les sons des poupées et fouiller les pièces', 'Placer les poupées sur les chaises du hall', 'Entrer dans les pièces à reculons', 'Déposer les dernières poupées', 'Se placer dans le faisceau de lumière', 'Déclencher la fin « The Pink House »'],
  UNGLQ3pgFJM: ['Trouver le scanner LiDAR', 'Cartographier l’obscurité avec le LiDAR', 'Rencontrer le Wretch', 'Traverser la zone discrètement, accroupi', 'Atteindre la porte de sortie M.E.G.'],
  VCNPh9_dLZI: ['Améliorer la visibilité dans les champs', 'Continuer d’avancer dans le blé', 'Suivre l’itinéraire gauche-droite-gauche', 'Raccourci facultatif par la clôture', 'Atteindre l’Arcade du niveau 3999'],
  W4WGueErhlI: ['Attendre l’équipe avant de lancer la poursuite', 'Raccourci facultatif à la tronçonneuse', 'Suivre l’itinéraire gauche-droite-gauche-droite'],
  WdizI7rFMso: ['Règles du couvre-feu et de la nuit', 'Itinéraire chronométré vers le château', 'Utiliser les clôtures et les maisons comme abris', 'Résoudre l’énigme des formes du château', 'Position sûre face au clown des montagnes russes'],
  xqjOhlKuGiw: ['Récupérer les cassettes VHS', 'Utiliser l’alarme incendie', 'Se cacher sous la table', 'Survivre à la panne de courant', 'Trouver l’échelle de sortie'],
}

const spanish: ChapterLabels = {
  _ebQrXMMcb8: ['Retratos: de menor a mayor edad', 'Recoger insecticida y gelatina de polilla', 'Cambiar la gelatina por llaves', 'Atajo de la quinta fila de ladrillos', 'Truco de reinicio para la puerta de salida', 'Salir por el ascensor'],
  _q_HErkpw3M: ['Encontrar el termómetro', 'Pasar junto a las polillas grandes sin linterna', 'Resolver la ruta de las válvulas de vapor', 'Persecución final de la Death Moth', 'Elegir la puerta de salida real'],
  '0hSXEPpTuH4': ['Requisitos del final verdadero', 'Tomar el ascensor M.E.G. al nivel 3999', 'Explorar la zona secreta de la sala recreativa', 'Encender las cuatro máquinas principales', 'Hablar con el conserje', 'El conserje abre la salida', 'Activar el final «Final Escape»'],
  '2Giiy2ixJNw': ['Acertijo normal de los televisores', 'Evitar al Curtain Spirit', 'Empujar un televisor con un deslizamiento', 'Atajo del ascensor con un solo televisor', 'Salir del nivel 188'],
  '3FChsY_BfUs': ['Aviso sobre el activador multijugador', 'Saltar por el lado izquierdo', 'Usar la técnica de salto agachado', 'Llegar a la puerta de salida'],
  '5IO2o0TgH5k': ['Aviso sobre la trampa de la ventana', 'Contar los taburetes', 'Contar las mesas', 'Contar los dispensadores de agua', 'Cruzar las cámaras y pulsar el botón de seguridad', 'Llegar a las escaleras de salida'],
  '6Ypd5PZsXBs': ['Ruta hacia el nivel 3', 'Técnica de correr y saltar para ahorrar resistencia', 'Recoger la linterna', 'Pasar el vapor en el momento adecuado', 'Sobrevivir a la persecución del Smiler', 'Tomar el agujero de salida izquierdo'],
  '7eDAm964Cv4': ['Tres códigos posibles para la habitación 235', 'Resolver el acertijo de los buzones', 'Evitar al Hound', 'Leer el código del techo', 'Abrir la habitación 235'],
  AN6K0M1pz1Y: ['Encontrar la entrada de la persiana', 'Pasar la tarjeta M.E.G.', 'Entrar en las escaleras infinitas', 'Bajar las escaleras con pocos FPS', 'Localizar la planta 94', 'Saltar al vacío de la escalera', 'Despertar en el dormitorio', 'Mirar las colinas por la ventana', 'Activar el final «The Suburbs»'],
  ckxN2YKqFuQ: ['Fundamentos del sigilo', 'Esconderse bajo las mesas', 'Usar un globo como distracción', 'Esperar el momento de las patrullas Partygoer', 'Cruzar la última sala a cuadros', 'Salir hacia las Poolrooms'],
  'd-Xwm5CY4tM': ['Encontrar la nota de recompensa', 'Seguir al Sweeper', 'Copiar su ruta agachada', 'Evitar al Curtain Monster'],
  D223jekpV4Q: ['Entrar en el vestíbulo de Fun+', 'Resolver el acertijo de la llave y los globos', 'Reventar los cuatro globos del laberinto central', 'Leer el dibujo con barras luminosas', 'Pasar a escondidas junto al Partygoer ciego', 'Colocar las barras sobre los símbolos', 'Entregar las llaves en la máquina de gancho', 'Abrir la puerta de salida'],
  e9sJpWs4iYc: ['Resolver la secuencia de colores del ascensor', 'Encontrar las llaves del garaje', 'Encerrar al Skin-Stealer', 'Demostración de visibilidad con gráficos bajos', 'Resolver el ordenador del Hub', 'Completar la persecución del túnel'],
  FDk9KG4pB4E: ['Técnica para nadar más rápido', 'Mejorar la visibilidad bajo el agua', 'Llegar al faro y a la pistola de bengalas', 'Encontrar la cueva de salida submarina'],
  hDsXOxSmbLU: ['Abrir la puerta M.E.G. y recoger insecticida', 'Evitar al Skin-Stealer', 'Usar la regla «las polillas van a la izquierda»', 'Cruzar el puente colgante', 'Atajo de parkour opcional'],
  HGS4_EGr1m4: ['Explorar la sala recreativa', 'Encontrar el billete con el número 931', 'Abrir la puerta con teclado', 'Tomar el ascensor M.E.G.'],
  I3iu31tuNu0: ['Resumen del acceso al nivel 363', 'Antiguo requisito del truco de desarrollador', 'Activar el agarre de la araña', 'Activar la ruta de muerte y reaparición', 'Aparecer dentro del nivel 363', 'Comprobar la puerta que golpea', 'Volver por el pasillo del hotel'],
  'iC5-aFb7-ag': ['Actualización y resumen de la ruta', 'Seguir la pared derecha desde el inicio', 'Encontrar las cuatro piezas de escalera', 'Llegar a la salida y evitar a Bacteria', 'Cruzar con seguridad la sala de trampas', 'Rescatar con la cuerda a un compañero caído', 'Ruta de recuperación en solitario y comportamiento de Bacteria', 'Ajustar el gamma y recoger la linterna'],
  JlcjsuhqqH8: ['Resumen del panel de luces', 'Encontrar los primeros disyuntores', 'Superar la zona del Hound', 'Resolver el acertijo de cables', 'Poner todas las luces en verde y salir'],
  kEZQ5NJM8sQ: ['Encontrar el mapa y los ordenadores', 'Atajo opcional por la pared', 'Evitar al Wretch', 'Resolver el acertijo del laboratorio', 'Curar a la entidad y recoger la tarjeta'],
  LpiHcFB49Sk: ['Puntos de aparición y aviso sobre el Hub', 'Evitar la trampa de agua profunda', 'Usar la zona que recupera la cordura', 'Encontrar la puerta roja de salida'],
  LVHeNjt0XQ0: ['Técnica de agacharse y saltar junto a la balsa', 'Cruzar el puente pequeño', 'Atajo con el modo ventana de F11', 'Entrar en Fun+ por los tubos'],
  LysnApdBzxY: ['Entrar en la plaza Graffiti', 'Recoger la bebida de velocidad y tirar de la palanca', 'Tomar el lado izquierdo del laberinto', 'Localizar el primer cuerpo', 'Transportar un cuerpo sin soltarlo', 'Bloquear el ventilador con el primer cuerpo', 'Recoger más bebidas de velocidad', 'Pasar a escondidas junto a Bacteria', 'Transportar los cuerpos restantes', 'Activar los cuatro tubos de colores', 'Saltar al tubo de salida'],
  pkGEH8cdQZ4: ['Seguir el grafiti FUN', 'Técnica de correr y saltar para ahorrar resistencia', 'Esquivar las salidas de vapor', 'Sobrevivir a la persecución del Smiler', 'Llegar a las escaleras rojas'],
  PRsArou9ipY: ['Entrar en el nivel 55.1', 'Encontrar la cámara y usar el objetivo para solitario', 'Bajar el carro antes de descender', 'Fotografiar el carro', 'Bajar por el hueco', 'Evitar a la Bacteria rápida', 'Pasar junto al Smiler', 'Fotografiar las estatuas y al Skin-Stealer', 'Reiniciar el punto de control si hace falta', 'Tomar el elevador para el final normal', 'Seguir la ruta secreta «Wrong Door»'],
  sYQfhIlponU: ['Entrar en las instalaciones de Crazy Growth', 'Leer el aviso de no detenerse', 'Cuerdas del ascensor en solitario y multijugador', 'Encontrar el cuchillo', 'Cortar la cuerda y romper el suelo de cristal', 'Encontrar los cuatro botones de pared', 'Abrir la puerta de salida', 'Tomar el ascensor al nivel 11'],
  tDD7YKWHY9Y: ['Despertar en el búnker M.E.G.', 'Explorar los pasillos del búnker', 'Pasar la tarjeta de identidad M.E.G.', 'Encontrar el camino al nivel 931', 'Localizar el ascensor central', 'Elegir entre H, 3999 y B', 'Desbloquear el siguiente nivel'],
  TvYjhNwfDSI: ['Leer el mapa azul y la lógica de las puertas', 'Desactivar la trampa Smiling Eye', 'Atajo opcional por la cornisa', 'Poner todas las puertas en verde y atrapar a la entidad'],
  uGpIdqnQq8w: ['Acceder al nivel 974 con la tarjeta M.E.G.', 'Seguir la pared derecha en el laberinto LiDAR', 'Entrar en la casa de Kitty', 'Empezar la búsqueda de muñecos', 'Primer encuentro con Kitty', 'Mantener a Kitty a la vista', 'Seguir los sonidos de los muñecos y registrar las habitaciones', 'Colocar los muñecos en las sillas del vestíbulo', 'Entrar de espaldas en las habitaciones', 'Colocar los últimos muñecos', 'Situarse bajo el haz de luz', 'Activar el final «The Pink House»'],
  UNGLQ3pgFJM: ['Encontrar el escáner LiDAR', 'Cartografiar la oscuridad con LiDAR', 'Encontrarse con el Wretch', 'Cruzar agachado la sección de sigilo', 'Llegar a la puerta de salida M.E.G.'],
  VCNPh9_dLZI: ['Mejorar la visibilidad en los campos', 'Seguir avanzando entre el trigo', 'Seguir la ruta izquierda-derecha-izquierda', 'Atajo opcional por la valla', 'Llegar a la sala recreativa del nivel 3999'],
  W4WGueErhlI: ['Esperar al equipo antes de activar la persecución', 'Atajo opcional con la motosierra', 'Seguir la ruta izquierda-derecha-izquierda-derecha'],
  WdizI7rFMso: ['Reglas del toque de queda y la noche', 'Ruta contrarreloj hacia el castillo', 'Usar vallas y casas como refugio', 'Resolver el acertijo de formas del castillo', 'Posición segura ante el payaso de la montaña rusa'],
  xqjOhlKuGiw: ['Recoger las cintas VHS', 'Usar la alarma de incendios', 'Esconderse bajo la mesa', 'Sobrevivir al apagón', 'Encontrar la escalera de salida'],
}

const labelsByLocale: Record<Exclude<Locale, 'en'>, ChapterLabels> = { de: german, fr: french, es: spanish }

export function localizeVideoChapters(locale: Locale, videoId: string, chapters: readonly YouTubeChapter[]): readonly YouTubeChapter[] {
  if (locale === 'en') return chapters
  const labels = labelsByLocale[locale][videoId]
  if (!labels || labels.length !== chapters.length) return chapters
  return chapters.map((chapter, index) => ({ ...chapter, label: labels[index] }))
}

export function hasCompleteChapterTranslation(locale: Exclude<Locale, 'en'>, videoId: string, chapterCount: number): boolean {
  return labelsByLocale[locale][videoId]?.length === chapterCount
}
