import type { Locale } from '@/types/locale'

export interface CodeSearchEntry {
  id: string
  title: string
  code: string
  description: string
  type: string
}

const entries: Record<Locale, readonly CodeSearchEntry[]> = {
  en: [
    { id: 'level-1-colours', title: 'Level 1 - Car Colour Lock', code: 'Varies by run', description: 'Count the coloured cars in the current garage and press each colour button the matching number of times. There is no universal four-digit code.', type: 'variable puzzle colours cars' },
    { id: 'hub-password', title: 'The Hub - M.E.G. Computer Password', code: 'itheardyou', description: 'Enter itheardyou at the M.E.G. Base computer, then run Gate.exe to open the Hub gate.', type: 'fixed password computer' },
    { id: 'level-4-counts', title: 'Level 4 - Vending Machine Counts', code: 'Varies by run', description: 'Count the stools, tables, water dispensers and other requested objects in the room. The answer is generated from the current layout, not a fixed 729 code.', type: 'variable puzzle count vending machine' },
    { id: 'level-5-room-235', title: 'Level 5 - Room 235 Keypad', code: '17564 / 05938 / 89472', description: 'Room 235 uses one of these three combinations. Complete the mailbox clue or try the three verified options.', type: 'fixed keypad hotel room' },
    { id: 'level-188-keypad', title: 'Level 188 - Exit Keypad', code: '415314', description: 'Use 415314 on the six-digit keypad on the Level 188 route.', type: 'fixed keypad exit' },
    { id: 'level-3999-ticket', title: 'Level 3999 - Arcade Ticket Code', code: '931', description: 'Collect the prize ticket in the Arcade and enter 931 at the nearby elevator keypad.', type: 'fixed ticket elevator arcade' },
  ],
  de: [
    { id: 'level-1-colours', title: 'Level 1 – Schloss mit Autofarben', code: 'Je Durchlauf verschieden', description: 'Zählt die farbigen Autos in der aktuellen Garage und drückt jede Farbtaste entsprechend oft. Einen allgemeingültigen vierstelligen Code gibt es nicht.', type: 'variables Rätsel Farben Autos' },
    { id: 'hub-password', title: 'The Hub – Passwort des M.E.G.-Computers', code: 'itheardyou', description: 'Gebt am Computer der M.E.G.-Basis itheardyou ein und startet anschließend Gate.exe, um das Tor im Hub zu öffnen.', type: 'festes Passwort Computer' },
    { id: 'level-4-counts', title: 'Level 4 – Zahlen der Verkaufsautomaten', code: 'Je Durchlauf verschieden', description: 'Zählt Hocker, Tische, Wasserspender und die übrigen verlangten Gegenstände. Die Lösung folgt aus dem aktuellen Raum und ist nicht der feste Code 729.', type: 'variables Rätsel zählen Verkaufsautomat' },
    { id: 'level-5-room-235', title: 'Level 5 – Tastenfeld an Zimmer 235', code: '17564 / 05938 / 89472', description: 'Für Zimmer 235 gilt eine dieser drei Kombinationen. Löst den Briefkasten-Hinweis oder probiert die drei bestätigten Möglichkeiten.', type: 'festes Tastenfeld Hotelzimmer' },
    { id: 'level-188-keypad', title: 'Level 188 – Ausgangstastenfeld', code: '415314', description: 'Gebt 415314 am sechsstelligen Tastenfeld auf der Route durch Level 188 ein.', type: 'festes Tastenfeld Ausgang' },
    { id: 'level-3999-ticket', title: 'Level 3999 – Ticketcode der Spielhalle', code: '931', description: 'Nehmt das Gewinnlos in der Spielhalle auf und gebt 931 am nahe gelegenen Aufzug ein.', type: 'fester Ticketcode Aufzug Spielhalle' },
  ],
  fr: [
    { id: 'level-1-colours', title: 'Niveau 1 – Serrure des voitures colorées', code: 'Variable selon la partie', description: 'Comptez les voitures de chaque couleur dans le garage actuel, puis appuyez autant de fois sur chaque touche colorée. Il n’existe pas de code universel à quatre chiffres.', type: 'énigme variable couleurs voitures' },
    { id: 'hub-password', title: 'The Hub – Mot de passe de l’ordinateur M.E.G.', code: 'itheardyou', description: 'Saisissez itheardyou sur l’ordinateur de la base M.E.G., puis lancez Gate.exe pour ouvrir la grille du Hub.', type: 'mot de passe fixe ordinateur' },
    { id: 'level-4-counts', title: 'Niveau 4 – Comptage des distributeurs', code: 'Variable selon la partie', description: 'Comptez les tabourets, tables, fontaines à eau et autres objets demandés. La réponse dépend de la salle actuelle ; 729 n’est pas un code fixe.', type: 'énigme variable comptage distributeur' },
    { id: 'level-5-room-235', title: 'Niveau 5 – Clavier de la chambre 235', code: '17564 / 05938 / 89472', description: 'La chambre 235 utilise l’une de ces trois combinaisons. Résolvez l’indice des boîtes aux lettres ou essayez ces trois possibilités vérifiées.', type: 'clavier fixe chambre hôtel' },
    { id: 'level-188-keypad', title: 'Niveau 188 – Clavier de sortie', code: '415314', description: 'Saisissez 415314 sur le clavier à six chiffres de l’itinéraire du niveau 188.', type: 'clavier fixe sortie' },
    { id: 'level-3999-ticket', title: 'Niveau 3999 – Code du ticket de l’Arcade', code: '931', description: 'Ramassez le ticket dans l’Arcade et saisissez 931 sur le clavier de l’ascenseur voisin.', type: 'code fixe ticket ascenseur arcade' },
  ],
  es: [
    { id: 'level-1-colours', title: 'Nivel 1 - Cerradura de coches de colores', code: 'Cambia en cada partida', description: 'Cuenta los coches de cada color del garaje actual y pulsa cada botón de color el mismo número de veces. No existe un código universal de cuatro cifras.', type: 'acertijo variable colores coches' },
    { id: 'hub-password', title: 'The Hub - Contraseña del ordenador M.E.G.', code: 'itheardyou', description: 'Escribe itheardyou en el ordenador de la base M.E.G. y ejecuta Gate.exe para abrir la puerta del Hub.', type: 'contraseña fija ordenador' },
    { id: 'level-4-counts', title: 'Nivel 4 - Recuento de las máquinas expendedoras', code: 'Cambia en cada partida', description: 'Cuenta los taburetes, mesas, dispensadores de agua y demás objetos indicados. La respuesta depende de la sala actual; 729 no es un código fijo.', type: 'acertijo variable recuento expendedora' },
    { id: 'level-5-room-235', title: 'Nivel 5 - Teclado de la habitación 235', code: '17564 / 05938 / 89472', description: 'La habitación 235 utiliza una de estas tres combinaciones. Resuelve la pista de los buzones o prueba las tres opciones verificadas.', type: 'teclado fijo habitación hotel' },
    { id: 'level-188-keypad', title: 'Nivel 188 - Teclado de salida', code: '415314', description: 'Introduce 415314 en el teclado de seis cifras de la ruta del nivel 188.', type: 'teclado fijo salida' },
    { id: 'level-3999-ticket', title: 'Nivel 3999 - Código del billete de la sala recreativa', code: '931', description: 'Recoge el billete de premio de la sala recreativa e introduce 931 en el teclado del ascensor cercano.', type: 'código fijo billete ascensor recreativa' },
  ],
}

export function getCodeSearchEntries(locale: Locale): readonly CodeSearchEntry[] {
  return entries[locale]
}
