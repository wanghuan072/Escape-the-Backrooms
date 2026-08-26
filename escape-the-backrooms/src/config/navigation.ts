import type { Locale } from '@/types/locale'

export const languages: Array<{ code: Locale; name: string }> = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
]

export const navigationLabels = {
  en: { home: 'Home', levels: 'Levels', maps: 'Maps & Keys', codes: 'Codes & Solutions', relatedGames: 'Related Games' },
  de: { home: 'Startseite', levels: 'Level', maps: 'Karten & Schlüssel', codes: 'Codes & Lösungen', relatedGames: 'Ähnliche Spiele' },
  fr: { home: 'Accueil', levels: 'Niveaux', maps: 'Cartes et clés', codes: 'Codes et solutions', relatedGames: 'Jeux similaires' },
  es: { home: 'Inicio', levels: 'Niveles', maps: 'Mapas y llaves', codes: 'Códigos y soluciones', relatedGames: 'Juegos relacionados' },
} as const

export const footerLabels = {
  en: {
    ...navigationLabels.en,
    navigate: 'Navigate', legal: 'Legal', privacy: 'Privacy Policy', terms: 'Terms of Service', copyright: 'Copyright', about: 'About Us', contact: 'Contact Us',
    description: 'Comprehensive Escape the Backrooms resources including guides, wiki, maps, and strategies to help you navigate and escape the Backrooms.',
    rights: '© 2026 escapethebackrooms.org. All rights reserved.',
    disclaimer: 'This is an independent fan site created for informational purposes only. All trademarks and copyrights belong to their respective owners.',
  },
  de: {
    ...navigationLabels.de,
    navigate: 'Navigation', legal: 'Rechtliches', privacy: 'Datenschutzerklärung', terms: 'Nutzungsbedingungen', copyright: 'Urheberrecht', about: 'Über uns', contact: 'Kontakt',
    description: 'Umfassende Escape-the-Backrooms-Ressourcen mit Guides, Wiki, Karten und Strategien, die dir beim Orientieren und Entkommen helfen.',
    rights: '© 2026 escapethebackrooms.org. Alle Rechte vorbehalten.',
    disclaimer: 'Dies ist eine unabhängige Fan-Seite nur zu Informationszwecken. Alle Marken und Urheberrechte gehören ihren jeweiligen Eigentümern.',
  },
  fr: {
    ...navigationLabels.fr,
    navigate: 'Navigation', legal: 'Mentions légales', privacy: 'Politique de confidentialité', terms: 'Conditions d’utilisation', copyright: 'Droit d’auteur', about: 'À propos', contact: 'Contact',
    description: 'Ressources complètes pour Escape the Backrooms, avec guides, wiki, cartes et stratégies pour vous aider à vous orienter et à vous échapper.',
    rights: '© 2026 escapethebackrooms.org. Tous droits réservés.',
    disclaimer: 'Ceci est un site de fans indépendant créé uniquement à des fins d’information. Toutes les marques et droits d’auteur appartiennent à leurs propriétaires respectifs.',
  },
  es: {
    ...navigationLabels.es,
    navigate: 'Navegación', legal: 'Legal', privacy: 'Política de privacidad', terms: 'Términos de servicio', copyright: 'Derechos de autor', about: 'Sobre nosotros', contact: 'Contacto',
    description: 'Recursos completos de Escape the Backrooms, con guías, wiki, mapas y estrategias para ayudarte a orientarte y escapar de los Backrooms.',
    rights: '© 2026 escapethebackrooms.org. Todos los derechos reservados.',
    disclaimer: 'Este es un sitio de fans independiente creado solo con fines informativos. Todas las marcas comerciales y derechos de autor pertenecen a sus respectivos propietarios.',
  },
} as const
