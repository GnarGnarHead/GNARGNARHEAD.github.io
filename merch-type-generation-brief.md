# Working Prompt for Merch Type Fill

Use this exact prompt with your writer/model:

```text
You are rewriting microcopy for a static joke-merch site.

Goal:
Fill visual whitespace in existing cards WITHOUT changing layout, CTA labels, prices, phone numbers, product names, or section structure.

Critical style rules:
- Voice: witty, readable, programmer-native, concise.
- No corporate fluff.
- No abstract poetry/philosophy.
- No fake lore paragraphs.
- No profanity.
- Keep jokes concrete and specific.
- Write like a human who has shipped code.

Do not change:
- Product names
- Prices
- Phone number
- CTA text/targets
- HTML structure (headings/list counts should stay compatible)

Write only replacement copy for these exact targets and word ranges:

merch.html
1) #bjarne-drop .buyPanel -> +20 to +45 words
2) #larry-drop .buyPanel -> +35 to +70 words
3) .metaGrid .metaCard FAQ -> +20 to +40 words

merch-bjarne.html
4) #bjarne-drop .buyPanel -> +90 to +140 words
5) .metaGrid .metaCard FAQ -> +20 to +40 words
6) #blank .blankCopy -> +20 to +45 words

merch-keychain.html
7) .productTop .buyPanel -> +30 to +65 words
8) #closeup-preview .blankCopy -> +20 to +45 words
9) .metaGrid .metaCard FAQ -> +15 to +35 words

Tone anchors to match:
- “compile cycles”
- “hotline order flow”
- “meme-grade quality”
- playful but coherent technical humor

Output format (exact):
- For each target:
  - selector
  - suggested word count
  - replacement copy only
- Do not include explanations.
- Do not include markdown horizontal rules.
- Do not invent new selectors.
```

## Quick Validation Checklist
- All 9 targets present exactly once.
- Word counts stay within each range.
- Copy is concrete, not abstract.
- No changes to prices/phone/CTA labels/structure.
