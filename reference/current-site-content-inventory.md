# Website content: current airbearings.com

Everything published on **https://www.airbearings.com** as of **5 November 2026**, plus every file it links to on Google Drive. This is a record of the site as it stands, before any rewriting. Nothing here has been edited, except where a note says so.

The site is built on Google Sites, and its product information lives in PDFs on Google Drive. All of those PDFs are downloaded here, so this folder doesn't depend on the Drive links staying live.

## What's in each folder

| Folder | What it holds |
| --- | --- |
| `inventory.xlsx` | One row per page, document, poster, image and link, with where it sits on the current site, where it lives in this folder, and where it goes in the new sitemap. Start here. |
| `01 pages/` | One Markdown file per page (16), numbered in nav order, plus `00 Global (header and footer).md`. Each file holds the live text verbatim, each image in place with any text printed inside it, every link, and notes. |
| `02 product documents/` | The 14 product brochures, the Blockhead Operator's Manual and the Blockhead Overview, grouped by family and model. Each PDF has a `(text).md` beside it with its text pulled out. |
| `03 posters/` | All 87 conference posters from the Drive folder "All Posters" (2004–2026). Their text is in `_text/`. |
| `04 other documents/` | Standard Terms and Conditions of Sale, with its text. |
| `05 images/` | Every image on the site at original resolution, one folder per page, plus `00 Global` for the logo and footer icons. Images used on several pages are stored once, in the folder of the first page that uses them. |
| `06 forms/` | The "Engineering Request" Google Form behind "Submit a Request", with every field written out. |
| `07 screenshots/` | Full-page screenshots of all 16 pages, desktop (1440 px wide) and mobile (iPhone 13). |

### Product documents

```
02 product documents/
├── blockhead/
│   ├── _series/     Blockhead Operator's Manual · Blockhead Spindles Overview
│   ├── 3R/  4B/  4R/  4R 225/  10B/  10R/  10R 606/
├── iso/
│   ├── ISO 2.25 (50K)/  ISO 3R DB400/  ISO 3.375PG/  ISO 5.5F/  ISO 5.5PG/
├── 4RH oil hydrostatic/
└── flatstones/      GF-5 Flatstones
```

## Naming

- Pages and screenshots start with the page's number in the current nav (01 Home … 16 Posters), so they sort the same way everywhere.
- Documents are renamed consistently (`4R Blockhead - brochure.pdf`). The original Drive file name and link for each one are in the inventory.
- Posters keep their original file names (year, event, topic, author initials).
- Images are numbered in the order they appear on the page and named for what they show (`02 tile - 4R Blockhead.png`).
- Text extracts are automatic, so table layouts are approximate. Check figures against the PDF before reusing them.

## What the capture turned up

**Much of the visible copy is not live text.** The headline and tagline on every product tile, every red section banner and the whole History timeline are printed inside images. Search engines and screen readers can't read them. All 34 text-bearing images are transcribed in the page files and the Images tab. Only four pages carry real body copy: Our Company, Precision engineering, Precision manufacturing and Applications, about 780 words in total. Eight pages have no live text at all: Home, Products, Air bearings, ISO Spindles, ISO 5.5 spindle, History, Contact Us and Posters. The three Blockhead pages have only their two document links.

**Alt text and image text often disagree.** For example:

- **4R 225:** the alt text says "large central aperture"; the tile says "large central hole".
- **ISO 5.5PG:** the alt text says "porous graphite"; the tile and the brochure say "porous carbon".
- **ISO 3R DB400:** the tile's sentence is cut off ("…nanometer-level asynchronous.").
- **Most images have no alt text at all,** and no page has a meta description.

**The product PDFs are all two-page brochures.** Page 1 is a spec sheet and page 2 is a dimensioned drawing. Three are in an older layout ("THE AIR BEARING AUTHORITY", 2022–23): 10R 606, ISO 2.25 (50K) and 4RH. The rest were redone in 2024–26. The ISO 2.25 (50K) brochure calls the model "ISO 50K" inside the PDF.

**The Blockhead Overview PDF has a spec table comparing all seven Blockheads,** which makes it the natural source for a compare table. The brochures also say Blockheads have been offered since 1965.

**The Operator's Manual dates from 2007.** It lists an old fax number and pico@airbearings.com, and it doesn't cover the 4R 225.

**The "embedded Drive files" on Applications and Precision manufacturing are photos.** Each one links to a larger original on Drive. Those four originals are saved next to the photos in `05 images/`.

**The History page names the founders and early milestones:** Ted and Harold Arneson, Honeywell and Control Data, and linear slides added between 1986 and 2006. Slides also appear in the Our Company copy and as an option on the request form, but no slide products are listed anywhere. Worth confirming with the client.

**The 87 posters are a strong resources library.** They date from 2004 to 2026, mostly from ASPE and euspen, and many are about specific products (4RH, 10R 606, ISO 5.5, Flatstones, Blockhead history). Titles, events and the products each one names are in the Posters tab.

**Two copy-deck questions are now answered:**

- The 4B and 4R 225 wording flagged [verify] is confirmed: "4B Blockhead with six stator faces providing convenient mounting." and "4R 225 Blockhead features a large central aperture."
- The Engineering Request form asks five questions, with only interest and email required. It has no phone, quantity or drawing upload.

**Smaller issues, captured as published:**

- On Our Company, the two paragraphs run together ("…to do with it.In addition…").
- /products and /products/air-bearings show the same three tiles.
- Precision engineering says "over the last 35 years" and spells it "BLOCK-HEAD".
- The Motion Products tile says "worlds most accurate".

## Not captured

- **YouTube videos.** The channel (https://www.youtube.com/@PIcoAirBearings) is linked from the footer, but youtube.com couldn't be reached from the capture environment, so individual videos aren't listed.
- **Form responses.** Responses to the Google Form are only visible to the form's owner.
- **LinkedIn.** The company page is a footer link only.
