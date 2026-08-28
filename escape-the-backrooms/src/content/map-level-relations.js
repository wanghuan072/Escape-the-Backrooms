// Stable local IDs keep related links correct in every language.
// Paragraph positions refer to the trusted rich-text content for the related page.
export const mapLevelRelations = {
  1: { levelIds: [1], levelLinkParagraph: 4, mapLinkParagraph: 1 },
  2: { levelIds: [2], levelLinkParagraph: 3, mapLinkParagraph: 1 },
  3: { levelIds: [2], levelLinkParagraph: 3, mapLinkParagraph: 1 },
  4: { levelIds: [3], levelLinkParagraph: 2, mapLinkParagraph: 1 },
  5: { levelIds: [11], levelLinkParagraph: 2, mapLinkParagraph: 1 },
  6: { levelIds: [4], levelLinkParagraph: 2, mapLinkParagraph: 1 },
  7: { levelIds: [5], levelLinkParagraph: 2, mapLinkParagraph: 1 },
  8: { levelIds: [19], levelLinkParagraph: 2, mapLinkParagraph: 1 },
  9: { levelIds: [6], levelLinkParagraph: 3, mapLinkParagraph: 1 },
  10: { levelIds: [13], levelLinkParagraph: 2, mapLinkParagraph: 1 },
}
