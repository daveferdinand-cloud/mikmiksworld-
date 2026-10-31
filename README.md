# Mika’s World

A personal creative world at **mikmiksworld.com**. The second implementation replaces the original shallow room experience with substantial creative tools while preserving the family-approved illustrated artwork, Mika’s interests, and her exact three favourite songs.

## What it contains

- An editorial, flowing home with illustrated spreads and responsive navigation.
- Twelve five-step art studies: perspective, characters, fashion, botanical drawing, ribbons, lettering, still life, comics, plush design, architecture, repeat patterns, and a favourite kitty warm-up.
- Twenty-four open-ended art prompts and a working drawing studio with pencil, pen, translucent marker, eraser, line/rectangle/ellipse tools, colour choices, undo/redo, PNG export, exact vector persistence, and an editable gallery.
- Sixteen five-step craft projects, material checklists, saved projects, and persistent progress. Includes friendship bracelets, origami, zines, weaving, crochet, set design, room moodboards, and cardboard engineering.
- A private writing desk with six genres, twenty-four story sparks, outline notes, continuous local draft saving, cover choices, editable books, text exports, and browser print/PDF.
- Fifty no-cook recipes with quantities, 1/2/4-portion scaling, search, pantry matching, favourites, personal notes, and completion records.
- Enchanted, Blank Space, and Love Story: the original three piano-cover selections, with credits and opt-in visible YouTube playback that survives room navigation.
- A local plush-character collection and links to the existing cousins’ sites.
- An honest local creative notebook and progress milestones based on saved or completed work.

## Development

```sh
npm ci
npm run check
npm test
npm run build
npm run dev
```

The dev server runs on port 4173. `npm run build` validates runtime references and produces the static `dist/` directory. There is no backend, database, paid API, or production server process.

## Deployment

Use the existing Vercel project **mikmiksworld**, project ID `prj_iSJeQLYWgtoR16SWTJqE3Slzv38a`, with the existing **mikmiksworld.com** domain. `vercel.json` specifies a static build and `dist/` output. Build a preview and complete the visual gate in `docs/verification.md` before promoting to production. Do not create a replacement project or change DNS.

The baseline Muse implementation remains in Git history at commit `6e34702c6630b5f479b591b86d9799c06dcc43bd`.

## Source and privacy

`index.html` is the app shell; `styles.css` is the design system; `js/` contains explicit application, content, drawing, and storage modules. All seventeen original illustrations and font files are now included in `assets/`, so the repository is sufficient to reproduce the product. Fonts are self-hosted with their OFL licenses. Existing artwork was recovered unchanged from the production site; no family photographs are included.

User work is stored only in this browser’s `localStorage`, under `mikmiks-world:v2`. There are no accounts, public publishing, forms that transmit data, chat, uploads, analytics, or tracking SDKs. User-authored text is escaped before rendering. Google Fonts is not requested at runtime. The only optional third-party service is a credited YouTube embed, loaded after a play click; it uses the privacy-enhanced embed domain and has a direct YouTube fallback.

Local storage is not cloud backup: clearing browser data or switching devices does not transfer the notebook. Text/PNG exports and a complete JSON notebook export are available. A full JSON restore UI is not included in this release.

See `docs/design.md` and `docs/verification.md` for the current decisions and remaining release gate.
