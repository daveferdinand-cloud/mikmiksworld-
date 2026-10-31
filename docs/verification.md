# Verification and release gate

## Automated verification completed

- `npm run check`: JavaScript syntax checks.
- `npm test`: eighteen tests, including seven simulated DOM journeys and eleven model/content tests.
- `npm run build`: static output generation and validation of local runtime references.

The tests cover route mounting and uncaught UI exceptions; saved/reloaded story drafts; escaped user text; editable books without duplication; recipe search, portions, favourites, notes, and completion; craft material/step persistence and meaningful completion; drawing stroke persistence, undo/redo, clear undo, and updating an existing gallery item; plush creation/editing; opt-in music and persistence during navigation; storage failures; local-day streaks; content depth; and quantity scaling.

The drawing context in simulated DOM tests is mocked. These tests prove state and interaction behaviour, not actual pixels. Simulated DOM tests do not prove responsive layout, real canvas input, real YouTube playback, or browser print rendering.

## Required preview checks before production

- [ ] Load a deployment preview on desktop and confirm the full visual design and artwork.
- [ ] Verify at 390 px and 768 px widths; check navigation, dialogs, studio toolbar, and no horizontal clipping.
- [ ] Draw with actual pointer input, test shapes and eraser, save to gallery, refresh, reopen, and compare the drawing.
- [ ] Follow at least one lesson through five steps, then draw with the practice guide.
- [ ] Create a story, refresh the page, bind it, reopen it, update it, and export it.
- [ ] Complete a craft checklist, refresh, and verify progress.
- [ ] Search, save, scale, and annotate a recipe, then refresh.
- [ ] Create and edit a plush profile, then refresh.
- [ ] Play all three existing piano-cover embeds and confirm a direct watch fallback is present. Check music when changing rooms and stopping.
- [ ] Check console errors, missing runtime files, and the browser print/PDF flow.
- [ ] Promote only the verified deployment to the existing mikmiksworld.com domain.

## Current blocker

The Vercel connection can discover project `mikmiksworld`, but scoped project access returns a 403 requiring the user’s team authorization for `team_7A0t2DxRJHsNVUZ9tmuBzA8m` (team slug reported by Vercel: `ghost-cam`). Do not bypass this grant using other credentials, scopes, or hosting. Complete authorization, then use this same Vercel connection for the preview.

The original live website has not been replaced by this branch. No visual/browser-completion claim is justified until the preview gate above is recorded as completed.
