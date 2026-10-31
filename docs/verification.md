# Verification and release record

## Automated verification

`npm run check`, all nineteen automated tests, and `npm run build` pass. Runtime file references are validated during the build. Tests cover route mounting, storage failure, malformed storage, distinct-day streaks, drawing state, drafts/books, craft completion, recipes, plush profiles, and opt-in music.

## Browser verification on the existing Vercel project

Verified on deployed previews on 31 October 2026:

- Desktop homepage and room illustrations rendered. Fixed portrait positioning so Mika’s face and red headband remain visible.
- A five-step perspective lesson progresses through all diagrams and opens its practice canvas.
- Real pointer input draws on canvas. Rectangle, eraser, undo and redo work. A gallery PNG source was identical before and after refresh; the piece reopened for further work and saved without duplication.
- A story draft survived refresh, bound into a book, reopened for editing, and updated. Its text download completed.
- A craft’s material and five-step checklists persisted after completion and refresh.
- Recipe search, favourite, four-portion scaling, notes, and completion worked. Favourite and notes survived refresh. Fixed missing cereal and bread labels discovered during this check.
- A plush character saved, survived refresh, and reopened for editing.
- All three original YouTube piano covers loaded their correct title and duration. Next/previous, stop, direct-watch links, and maintaining the player during room navigation worked.
- Phone (390 px) and tablet (768 px) CSS layout tested in a same-origin iframe using the preview-only `/_checks/viewport.html` harness. Phone navigation, studio toolbar, actual pointer drawing, writing fields and scrollable recipe dialog were exercised. A small decorative horizontal overflow was fixed.
- No application-origin console errors observed. All local runtime files are included in the static build.

## Honest limits

The cloud browser loaded the three YouTube players but playback remained buffering at 0:00. Audible playback has not been verified here. The original video selections remain unchanged and each has a direct YouTube fallback. The player loads only after a click.

The cloud browser did not expose an operating-system print dialog. The print action and stylesheet exist; native print/PDF output has not been visually verified. Text export was verified. Responsive checks validate CSS layout in actual browser viewports, not physical touch hardware or iOS Safari.

## Release target

Existing project `mikmiksworld` (`prj_iSJeQLYWgtoR16SWTJqE3Slzv38a`) in team `team_7A0t2DxRJHsNVUZ9tmuBzA8m`. `mikmiksworld.com` is verified on this project. No new hosting project or domain migration is required. Production deployment `dpl_BeaDMuQ5qFyJuJ4sXh9A7e2Mrjis` is READY from commit `1c9484a1a6cc3a80f197174cbc3329806445553f`. Vercel assigned `mikmiksworld.com` and `www.mikmiksworld.com` successfully. The public domain was opened in a fresh browser tab and the redesigned homepage and full studio were confirmed.

Final no-overflow measurements on the verified runtime: phone content/viewport 375/375 px; tablet 753/753 px (390/768 px frames less scrollbars). The rotated decorative backdrop was corrected at its source. The production build excludes the preview-only viewport harness.

No DNS or hosting project change was made. The direct promotion endpoint returned 422, so the same verified commit was built with the existing project’s standard production target. Runtime source is identical to the verified preview.
