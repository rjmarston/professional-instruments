# Professional Instruments — website copy deck

Existing copy from airbearings.com (crawled 2026-11-01), sorted by the new sitemap. Audit and IA: https://claude.ai/artifact/ET1vGNp3LGUw1vnzy3XXWM


---

<!-- source file: pages/00-global.md -->
---
title: Global elements (header, footer, contact data)
applies_to: every page
---

# Global elements

## Company data (from the current footer)

- Name: Professional Instruments Company
- Address: 7800 Powell Road, Hopkins, MN 55343 USA
- Phone: (952) 933-1222
- Email: sales@airbearings.com
- YouTube: https://www.youtube.com/@PIcoAirBearings
- LinkedIn: https://www.linkedin.com/company/professional-instruments-company/
- Map pin (from the Contact embed): 44.929351, -93.376439
- Founded: 1946

## Current header nav (for reference)

- Home
- Products
  - Air bearings
  - 4RH oil hydrostatic (opens PDF)
  - Flatstones (opens PDF)
  - Precision engineering
  - Precision manufacturing
  - Applications
- Our Company
  - History
  - Submit a Request
  - Contact Us
- Posters
- Terms and Conditions (opens PDF)

## Proposed header nav

Products · Applications · Capabilities · Resources · About · Contact · [Request a quote] (button)

Products menu:
- Blockhead series: 3R, 4B, 4R, 4R 225, 10B, 10R, 10R 606
- ISO series: ISO 2.25 (50K), ISO 3R DB400, ISO 3.375PG, ISO 5.5F, ISO 5.5PG
- 4RH oil hydrostatic
- Flatstones
- Attachments
- Custom spindles (links to /capabilities/custom-spindles)

## Proposed footer

Address · phone · email · YouTube · LinkedIn · Terms and Conditions · Privacy · © Professional Instruments Company

---

<!-- source file: pages/01-home.md -->
---
title: Home
slug: /
old_urls: [/, /home]
copy_status: Write new
template: home
---

# Home

## Current page

No body copy. Two large images (see `data/assets.csv`, page = home) and two buttons:

- "Motion Products" → /products/air-bearings
- "Precision Engineering" → /products/precision-engineering

## Raw material for new copy (all from other pages of the current site)

- Positioning (Our Company): "Professional Instruments Company manufactures the world's most accurate air bearing spindles and slides for customers who require millionth-inch precision, high stiffness, and zero friction."
- Heritage: "Since 1946, we have solved our customers' problems in manufacturing, measuring, and scientific research." (Our Company). 2026 = 80 years.
- Reach: "Anywhere ultra-precise motion or geometry is involved, there's a good chance we have something to do with it." (Our Company)
- Custom range: loads as high as 15,000 pounds or speeds to 60,000 rpm (Precision engineering).
- Accuracy proof: sub-microinch asynchronous error motion (Applications, disk testing); roundness and circular flatness better than 20 microinches (Precision manufacturing).

## Proposed modules

1. Hero: positioning line + Request a quote + Browse spindles. > [new]
2. Proof strip: since 1946 · millionth-inch precision · loads to 15,000 lb · speeds to 60,000 rpm.
3. Product families: Blockhead, ISO, 4RH oil hydrostatic, Flatstones, Custom.
4. Applications strip: the seven applications.
5. Capabilities: custom spindles + precision manufacturing.
6. 80 years band linking to History. > [new]
7. Closing call to action: send drawings / request a quote.

---

<!-- source file: pages/10-products.md -->
---
title: Products
slug: /products
old_urls: [/products, /products/air-bearings]
copy_status: Write new
template: product-hub
---

# Products

## Current pages

**/products** has no body copy: three image tiles linking to
- /products/air-bearings/blockheads ("Blockheads")
- /products/air-bearings/iso-spindles ("ISO Spindles")
- /products/precision-engineering

**/products/air-bearings** has no body copy: three tiles
- "Blockhead Spindles" → /products/air-bearings/blockheads
- "ISO Spindles" → /products/air-bearings/iso-spindles
- "Custom Spindles" → /products/precision-engineering
- Image alt text: "Air bearings"

## Proposed modules

1. Intro: what an air bearing spindle is and why PI's are different. > [new]
2. Family cards: Blockhead series, ISO series, 4RH oil hydrostatic, Flatstones, Attachments — each with headline specs (from `data/models.csv` once filled).
3. Compare table across all models.
4. "Need something different?" → Custom spindles.

---

<!-- source file: pages/11-products-blockhead.md -->
---
title: Blockhead series
slug: /products/blockhead
old_urls:
  - /products/air-bearings/blockheads
  - /products/air-bearings/blockheads/4-inch-blockheads
  - /products/air-bearings/blockheads/10-inch-blockheads
copy_status: Extract from PDF
template: product-family
model_pages:
  - /products/blockhead/3r
  - /products/blockhead/4b
  - /products/blockhead/4r
  - /products/blockhead/4r-225
  - /products/blockhead/10b
  - /products/blockhead/10r
  - /products/blockhead/10r-606
---

# Blockhead series

## Current copy

### Blockheads page

"The 3R is our smallest Blockhead capable of 15,000 RPM." (link text to the 3R brochure)

Links: 4 inch Blockheads · 10 inch Blockheads · Blockhead Operator's Manual (PDF) · Blockhead Spindles Overview (PDF)
Image alt text: "Blockhead spindles"

### 4 inch Blockheads

> [verify] Two crawl passes returned different wording for 4B and 4R 225 (the 4R line matched both times). Copy the exact text from the live page before reuse.

- **4B Blockhead** with six stator faces providing convenient mounting. → drawing PDF
- **4R Blockhead** is our standard universal spindle with a round stator. → drawing PDF
- **4R 225 Blockhead** features a large central aperture. → drawing PDF

### 10 inch Blockheads (verbatim)

- "10B Blockhead has six stator faces provided for convenient mounting." → drawing PDF
- "10R Blockhead is our high load capacity universal spindle with a round stator." → drawing PDF
- "10R 606 large capacity spindle with a large central aperture." → drawing PDF

## Proposed family page modules

1. Intro to the Blockhead series. > [new] — source: Blockhead Spindles Overview PDF
2. Size groups: 3 in (3R) · 4 in (4B, 4R, 4R 225) · 10 in (10B, 10R, 10R 606)
3. Comparison table (fields in `data/models.csv`)
4. Downloads: Operator's Manual, Overview
5. Applications that use Blockheads (cross-links)
6. Request a quote

## Model page template

One-line summary · spec table · drawing (PDF) · CAD (if available) · brochure · suited applications · Request a quote

---

<!-- source file: pages/12-products-iso.md -->
---
title: ISO series
slug: /products/iso
old_urls:
  - /products/air-bearings/iso-spindles
  - /products/air-bearings/iso-spindles/iso-5-5-spindle
copy_status: Write new (family) / Extract from PDF (models)
template: product-family
model_pages:
  - /products/iso/iso-2-25
  - /products/iso/iso-3r-db400
  - /products/iso/iso-3-375pg
  - /products/iso/iso-5-5   # ISO 5.5F and ISO 5.5PG, or split into two pages
---

# ISO series

## Current copy

### ISO Spindles page

No body copy. Links:
- ISO 2.25 (50K) → brochure PDF
- ISO 3R DB400 → brochure PDF
- ISO 3.375PG → brochure PDF
- ISO 5.5 → /products/air-bearings/iso-spindles/iso-5-5-spindle

Image alt text: "ISO AIR BEARINGS"

### ISO 5.5 spindle page (link text, verbatim)

- "ISO 5.5F features bronze sleeves and deterministic groove compensation." → brochure PDF
- "The ISO 5.5PG features robust porous graphite journal sleeves." → brochure PDF

## Proposed family page modules

1. Intro to the ISO series. > [new] — what "ISO" denotes needs confirming with the client
2. Bearing options: bronze sleeve with groove compensation vs porous graphite
3. Comparison table (fields in `data/models.csv`)
4. Applications that use ISO spindles
5. Request a quote

## Open question

Should ISO 5.5F and ISO 5.5PG be one page with two variants, or two pages? The IA counts them as two model pages.

---

<!-- source file: pages/13-products-more.md -->
---
title: 4RH oil hydrostatic · Flatstones · Attachments
slugs:
  - /products/4rh-oil-hydrostatic
  - /products/flatstones
  - /products/attachments
old_urls: [none — 4RH and Flatstones are PDF links in the current nav]
copy_status: Extract from PDF (4RH, Flatstones) / Write new (Attachments)
template: product-model
---

# 4RH oil hydrostatic

Current: nav item opens a Drive PDF:
https://drive.google.com/file/d/1fla_itfQBidZspt5uUqYZGwBgP6s735I/view?usp=sharing

> [new] Page copy and specs to be extracted from the PDF.

# Flatstones

Current: nav item opens a Drive PDF:
https://drive.google.com/file/d/1BFfBzG8ACVB_hKCGKhqBqpP9-WJbLYYa/view?usp=share_link

> [new] Page copy and specs to be extracted from the PDF.

# Attachments

Current: one entry on the Applications page (verbatim):

**Attachments**
"Workholding devices; motor drives; high-precision piloting systems; vacuum seals; rotary unions."

> [new] Expand into a page: one short section per attachment type, compatible spindles, photos.

---

<!-- source file: pages/20-applications.md -->
---
title: Applications
slug: /applications
old_urls: [/products/applications]
copy_status: Edit existing
template: application
child_pages:
  - /applications/disk-testing-pack-writing
  - /applications/roundness-flatness-testing
  - /applications/machine-tool-workheads
  - /applications/bearing-analysis
  - /applications/precision-pivots-indexers
  - /applications/optical-scanner-spindles
  - /applications/grinding-spindles
---

# Applications

## Current copy (verbatim, in page order)

### Computer Disk Testing & Pack Writing
Sub-microinch asynchronous error motion makes our spindles the preferred rotational reference standard in the computer memory disk industry.

### Roundness & Flatness Testing
Check inside diameters, outside diameters, and face surfaces for runout, concentricity, and squareness to one-microinch accuracy.

### Machine Tool Workheads
Face, turn, and bore to better than ten-microinch accuracies and achieve specular finishes.

### Bearing Analysis
Measure bearing noise signature, runout, and asynchronous error motion through bearing analysis.

### Precision Pivots & Indexers
Parts such as scanner polygons can be readily centered and machined with a horizontal or vertical axis. The pneumo-lock feature is often used in this application to fix the rotor's position without introducing rotational error.

### Optical Scanner Spindles
High rotational accuracy, no torque ripple, and low thermal excursion offer performance gains.

### Attachments
Workholding devices; motor drives; high-precision piloting systems; vacuum seals; rotary unions.
→ moves to /products/attachments in the new IA

### Grinding Spindles
Superior finishes are attainable through improved stiffness, smoothness, and accuracy. Operations such as slicing complex ferrite forms without chipping delicate edges, or grinding glass and other brittle materials are some examples. Our air bearing spindles have been found to cause a minimum of sub-surface damage, reducing polishing requirements.

Three embedded Drive files also sit on this page (contents unknown; see `data/documents.csv`).

## Application page template

1. The problem (1–2 sentences) — from the blurb above
2. Why air bearings / why PI > [new]
3. Recommended spindles (cross-links to model pages) > [new — needs client input]
4. Photo or diagram
5. Request a quote

## Edit notes

- "Computer Disk Testing & Pack Writing": check the term "computer memory disk industry" is still how the client wants to describe that market.
- Use "and" rather than "&" in headings and URLs.

---

<!-- source file: pages/30-capabilities-custom-spindles.md -->
---
title: Custom spindles
slug: /capabilities/custom-spindles
old_urls: [/products/precision-engineering]
copy_status: Edit existing
template: capability
---

# Custom spindles

## Current copy (verbatim; page heading on the current site: "Precision Engineering")

When a customer comes to Professional Instruments Company with an air bearing application, we try to provide a solution from our standard line of spindles. Occasionally a customer will have a set of specifications far enough outside of our standard lines that we must design and build a spindle specific to their application. Our engineering and manufacturing staff combines years of experience with a genuine enthusiasm for problem solving. The range of custom air bearing spindles produced at Professional Instruments Company over the last 35 years is mind boggling. Hemispherical bearings, dual diameter bearings, custom BLOCK-HEAD spindles, air pad spindles, and even spindles that operate in vacuum have been built. The long history of Professional Instruments Company includes custom spindle making almost all the way back to the beginning in 1946.

The need for special materials is a common reason for producing a custom spindle. Many applications in the disk drive, semiconductor, and gravity research fields require non-magnetic structures. We commonly produce spindles made from aluminum, and use nonmagnetic fasteners. Sometimes very low-expansion materials such as Invar are used to achieve rigid thermal-expansion requirements. Graphite and ceramic are used in applications where a robust or high-specific-stiffness structure is required.

Applications such as liquid-mirror telescopes require spindles with load capacities well outside of our standard line of spindles. Professional Instruments Company has built custom spindles capable of supporting loads as high as 15,000 pounds or speeds to 60,000 rpm. Some applications including custom LVDTs and smaller disk drive products require very compact spindle assemblies. The most common reason to choose a custom spindle is cost. If production quantities reach 25 spindles or more, a custom-designed solution can be a cost-effective way to get exactly what you want in an air bearing spindle. The wide range of air bearing structures available, and the variety of materials and compensation techniques, make Professional Instruments Company the place to come to for your custom spindle needs.

## Suggested structure for the new page

1. Intro: when standard spindles aren't enough (para 1, first three sentences)
2. Why go custom — four reasons, each a short block:
   - Special materials: aluminum, nonmagnetic fasteners, Invar, graphite, ceramic
   - Extreme loads and speeds: to 15,000 lb, to 60,000 rpm (liquid-mirror telescopes)
   - Compact assemblies: custom LVDTs, small disk drive products
   - Cost at volume: 25+ units
3. What we've built: hemispherical, dual diameter, custom BLOCK-HEAD, air pad, vacuum-rated
4. Request a quote

## Edit notes

- "over the last 35 years" is stale; the same paragraph dates custom work to 1946. Suggest "over eight decades" or drop the figure.
- "BLOCK-HEAD" here vs "Blockhead" elsewhere: pick one spelling site-wide.
- "mind boggling" → consider a more measured phrase.

---

<!-- source file: pages/31-capabilities-precision-manufacturing.md -->
---
title: Precision manufacturing
slug: /capabilities/precision-manufacturing
old_urls: [/products/precision-manufacturing]
copy_status: Edit existing
template: capability
---

# Precision manufacturing

## Current copy (verbatim)

Our talented, capable staff of technicians and engineers combines years of experience with can-do enthusiasm. Our shop is superbly tooled with the finest machines and inspection equipment. We have rebuilt many of our machines to better-than-new condition; for the most critical work, we have installed our own air-bearing spindles and slides, making extremely close-tolerance work a specialty. Our machine complement is extensive; many dedicated machines save setup costs and save you time.

We will provide superior service at a competitive price and, most importantly, no surprises! Please send your drawings for a prompt quotation.

- Air bearings spindles and slides
- Super-precise air bearing equipment
- OD, ID and surface grinding
- Diamond machining
- Tools, Gages & Prototypes
- Precise measuring devices
- Design and development
- R&D projects
- Precision Parts
- Roundness better than 20 microinches
- Circular flatness better than 20 microinches

One embedded Drive file also sits on this page (contents unknown; see `data/documents.csv`).

## Related copy from Our Company

"In addition to our product line of air bearings, we provide a wide range of sub-contract manufacturing including tools, gages, precision cams, special machines, and prototype or production parts."

## Suggested structure for the new page

1. Intro: shop built on its own air bearing spindles and slides
2. Services (grouped): Grinding (OD, ID, surface) · Diamond machining · Tools, gages and prototypes · Precision parts · Design, development and R&D
3. Tolerances: roundness and circular flatness better than 20 microinches (add metric: ~0.5 µm)
4. Equipment list > [new — needs client input]
5. Send your drawings → quote form with file upload

## Edit notes

- The list mixes services with tolerances; split them.
- "Air bearings spindles" → "Air bearing spindles".
- Capitalisation in the list is inconsistent ("Tools, Gages & Prototypes", "Precision Parts").

---

<!-- source file: pages/40-resources.md -->
---
title: Resources
slugs: [/resources, /resources/posters]
old_urls: [/posters]
copy_status: Reuse as is (files)
template: library
---

# Resources

## Current

- **/posters**: no copy; embeds the Drive folder "All Posters"
  https://docs.google.com/folderview?id=1fnoQGHLuQceyPYA0myIPR7fJ5yNXgVJJ
- Brochures, drawings and manuals are scattered across product pages as Drive links (full list in `data/documents.csv`).
- Videos: https://www.youtube.com/@PIcoAirBearings (linked from the footer only).

## Proposed library

Filterable list, one row per file:

| Field | Values |
| --- | --- |
| Title | e.g. "4R Blockhead drawing" |
| Type | Brochure · Drawing · Manual · Poster · Video |
| Product | Blockhead (by model) · ISO (by model) · 4RH · Flatstones · General |
| Format and size | PDF, 1.2 MB |
| Link | Hosted on the new site, not Google Drive |

Every product model page pulls its own rows from the same list.

---

<!-- source file: pages/50-about.md -->
---
title: About
slug: /about
old_urls: [/our-company]
copy_status: Reuse as is
template: about
---

# About

## Current copy (verbatim)

**Professional Instruments Company** manufactures the world's most accurate air bearing spindles and slides for customers who require millionth-inch precision, high stiffness, and zero friction. Since 1946, we have solved our customers' problems in manufacturing, measuring, and scientific research. Anywhere ultra-precise motion or geometry is involved, there's a good chance we have something to do with it.

In addition to our product line of air bearings, we provide a wide range of sub-contract manufacturing including tools, gages, precision cams, special machines, and prototype or production parts. Our highly skilled technicians combine a profound understanding of precision engineering with the experience of many years; we satisfy and delight customers around the globe. For prompt, personal service, please let us know how we might contribute to your high-precision project.

## Edit notes

- On the live page the two paragraphs run together with no space ("…to do with it.In addition…"); split as above.
- "slides" appears here but no slide products are listed anywhere on the site — confirm whether linear slides are still offered.

## Proposed additions > [new]

- People: leadership, engineering team
- Shop photography
- 80 years callout linking to History

---

<!-- source file: pages/51-about-history.md -->
---
title: History
slug: /about/history
old_urls: [/our-company/history]
copy_status: Write new
template: timeline
---

# History

## Current

Six images, no live text (URLs in `data/assets.csv`, page = history). Their contents could not be read from the crawl — they may be photos, scanned documents or images of text.

## Known facts from elsewhere on the site

- Founded 1946 (Our Company; Precision engineering)
- Custom spindle making dates "almost all the way back to the beginning in 1946" (Precision engineering)
- Based at 7800 Powell Road, Hopkins, MN

## Proposed page > [new]

- 80 years, 1946–2026: a dated timeline of milestones, each with a photo
- Needs from client: milestone list with years, archive photos, founder story

---

<!-- source file: pages/60-contact-and-quote.md -->
---
title: Contact · Request a quote
slugs: [/contact, /request-a-quote]
old_urls: [/our-company/contact-us, /our-company/submit-a-request]
copy_status: Edit existing
template: form
---

# Contact

## Current

Embedded Google Map only, centred on 44.929351, -93.376439
("7800 Powell Rd, Hopkins, MN, United States (Professional Instruments Company)").
Contact details appear only in the footer.

## Proposed page

- Address: 7800 Powell Road, Hopkins, MN 55343 USA
- Phone: (952) 933-1222
- Email: sales@airbearings.com
- Hours > [new — needs client input]
- Map + directions
- Short contact form (name, company, email, phone, message)

# Request a quote

## Current

Embedded Google Form titled "Engineering Request":
https://docs.google.com/forms/d/1Zxxb2hw_kFIfxZGsbQusdZ_hsd9S2scPX7UbrX-n-Cs/viewform

Field list could not be read from the crawl — get it from the form owner.

## Proposed form (to confirm against the existing fields)

- Name, company, email, phone, country
- Interest: standard spindle (model picker) · custom spindle · precision manufacturing · other
- Application (picker of the seven applications + other)
- Requirements: load, speed, accuracy, environment (free text)
- Quantity
- Drawing upload (PDF, STEP, DWG)
- Message

---

<!-- source file: pages/70-legal.md -->
---
title: Terms and Conditions · Privacy
slugs: [/terms, /privacy]
old_urls: [none — Terms is a PDF link in the current nav]
copy_status: Extract from PDF (Terms) / Write new (Privacy)
---

# Terms and Conditions

Current: nav item opens a Drive PDF:
https://drive.google.com/file/d/1pVxfEVMu_ZpF70zb4xLuzHl04L1EgJnZ/view?usp=sharing

Convert to an HTML page; keep the PDF as a download. Move from main nav to footer.

# Privacy

> [new] None exists. Needed once the site collects form data; the client's counsel should supply or approve it.
