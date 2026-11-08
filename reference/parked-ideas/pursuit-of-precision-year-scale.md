# "The pursuit of precision" year scale

Status: back in use since 2026-11-06. It now sits on the homepage of the Bolt Circle prototype (https://claude.ai/artifact/Gm4tLqrRaWD1KS7LiAxoCp, version 27 onward), below Applications and above Resources. Its job is to bring people to the About page.

Earlier placement (parked on 2026-11-06): directly under the product wheel, in the space the wheel's lower arc reserves. Version 19 of the prototype shows it there.

## What it is now

- Left: "The pursuit of precision" in large type, breaking as "The pursuit / of precision". It is the section's H2.
- Right, aligned to the bottom of the heading: the caption "Eighty years of solving problems in manufacturing, measuring and scientific research." and one call to action, a "Read our history" button linking to about.html#history. (Version 27 also had a "Who we are" link; it was removed in version 28 so the section has a single call to action.)
- Below, at full container width, a year scale from 1946 to 2026:
  - One tick per year, a longer labelled tick per decade, and long end ticks.
  - "Since 1946" under the left end, "2026" under the right.
  - On phones (600 px and narrower), only every other decade label shows: 1960, 1980, 2000, 2020.
- Entrance: when the section comes into view, the heading and side column rise in, and the scale draws right to left (the same move as the section headings).
- Scroll behaviour:
  - A red index travels along the scale with a red year readout above it, counting 1946 to 2026.
  - It is tied to scroll position only: it stops when scrolling stops and reverses when scrolling up.
  - The readout is held inside the scale at both ends, so "2026" can't widen the page on phones.
  - With reduced motion, the index is parked at 2026.

## Resources section beneath it

Two items only: "Brochures and drawings" ("Open the library" shows the prototype's not-built-yet notice) and "Technical posters" (links to the Drive folder of all 87 posters). "Eighty years in Hopkins" was removed from Resources because this section now does that job.

## Notes for reuse

- In the prototype, the markup and styles are built by `yr_scale()` and `PURSUIT_SEC` in the homepage generator.
- The heading reveal relies on the page's shared `.reveal` / `.in-view` IntersectionObserver.
- The About page's History section uses the same scale, with era descriptions under it and a milestone dot at 1965 (first Blockheads).
