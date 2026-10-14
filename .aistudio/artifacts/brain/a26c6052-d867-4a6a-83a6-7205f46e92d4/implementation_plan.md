# Unified Projects Tab & Dual Track Architecture (Principal Experience & Tanasuq Projects)

This plan outlines the architecture and design for introducing a unified **Projects** tab in the main navigation, containing two distinct sub-navigation tracks: **Principal Experience** (historical commissions with former employers and government agencies) and **Tanasuq Projects** (curated flagship master planning and urban design initiatives led under Dr. Alaa Youssef's independent practice).

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The structure incorporates the user's confirmed choices from Phase 1:
> 1. **Sub-Navigation Tabs**: Visitors switch between project tracks via an elegant, accessible segmented tab control situated directly within the Projects section.
> 2. **Default Track**: "Principal Experience" displays first upon navigation, with a seamless toggle to "Tanasuq Projects".
> 3. **Tanasuq Content Scope**: Curated flagship urban design, territorial master planning, and statutory advisory initiatives showcasing the firm's direct methodology and regional impact.

- **Confirmed Decision 1**: Main navigation updates from "Principal Experience" to a unified "Projects" tab leading to `#projects`.
- **Confirmed Decision 2**: Clear legal attribution and copyright disclaimer remains prominently bound to the "Principal Experience" view, ensuring strict differentiation from the independent Tanasuq commissions.
- **Confirmed Decision 3**: Synchronized across both the React application and the downloadable standalone vanilla website package (`tanasuq-site` + `tanasuq-website.zip`).

---

## 1. Overview & Core Concept

- **What It Does**: Unifies all portfolio work under a single, cohesive **Projects** section with a top-level tab switcher. Users can fluidly navigate between Dr. Youssef's past major commissions (e.g., Marassi, Oman ITC audits, King Khaled University, Marrakech) and contemporary Tanasuq advisory projects (e.g., coastal resilience frameworks, municipal infill urban design, and developer compliance audits).
- **Target Audience / Persona**: Institutional clients, government tourism ministries, private master developers, and prospective municipal partners seeking clarity on Dr. Youssef's extensive career record alongside his current advisory practice.
- **Key Value**: Delivers clarity and professional credibility by explicitly separating legacy corporate/government roles from current firm commissions while preserving full access to case studies and visual plans.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Header Navigation**:
   - The visitor clicks **Projects** in the top navigation bar (or mobile menu drawer).
   - The page smoothly scrolls to the `#projects` section.
2. **Track Switching (Segmented Sub-Navigation)**:
   - A refined segmented control sits above the project gallery with two options:
     - `Principal Experience (8 Commissions)`
     - `Tanasuq Projects (Flagship Initiatives)`
   - Switching tracks transitions the view instantly without page reload, updating the section subtitle, attribution box, category filters, and card grid.
3. **Interactive Project Inspection**:
   - Each project card features high-resolution imagery, location and client metadata, core scope summaries, and an interactive "View Master Plan Study" trigger opening the detailed multi-image modal.

### Visual Identity & Theme

- **Aesthetic Direction**: High-end architectural monograph style inspired by leading global planning and landscape practices. Warm off-white canvas (`#FBFBFA`), deep carbon typography (`#171716`), and subtle hairline dividers (`border-[#171716]/8`).
- **Zero-Pill Discipline**:
  - Filter controls and track switches are functional `<button>` elements with segmented container framing.
  - Informational metadata (client, location, typology, year) is rendered as clean unboxed text with subtle typographic separators (`·`).
- **Typography Pairing**:
  - Display face: Playfair Display / Editorial Serif for titles and section headings.
  - Body & UI face: Plus Jakarta Sans for high-legibility interface text and metadata.
  - Tabular numerals: `font-mono tabular-nums` for scopes, areas, and dates.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Sub-navigation Tabs vs. Dropdown Nav Menu**
  - *Chosen Approach*: Sub-navigation segmented tabs within the `#projects` section.
  - *Why*: Keeps the header top bar minimal and compliant with the 3-Zone Top Bar Contract while giving visitors immediate visual context and single-click switching without hovering or nested menus.
- **Decision 2: Shared Modal vs. Dedicated Track Modals**
  - *Chosen Approach*: Unified `CaseStudyModal` supporting both project types via a unified `Project` data interface.
  - *Why*: Maintains consistent keyboard navigation (`ESC`), focus traps, and image lightbox behavior across both tracks with zero code duplication.
- **Decision 3: Dual Synchronization (React SPA + Standalone Vanilla Site)**
  - *Chosen Approach*: Update `src/components/Works.tsx` and simultaneously update `public/tanasuq-site/index.html` and `public/tanasuq-site/app.js`, re-generating the standalone zip file.
  - *Why*: Guarantees that the "Download Website Package" feature provides the exact same state-of-the-art dual-track navigation as the live app.

---

## 4. Technical Architecture & Data Strategy

### System & Component Architecture

```
┌────────────────────────────────────────────────────────┐
│                      Header.tsx                        │
│   [Brand] ─── [About | Qualifications | Projects | ...] │
└───────────────────────────┬────────────────────────────┘
                            │ (scrolls to #projects)
                            ▼
┌────────────────────────────────────────────────────────┐
│                      Projects.tsx                      │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │     Track Switcher (Segmented Sub-Nav Tabs)       │  │
│  │   [ Principal Experience ]   [ Tanasuq Projects ] │  │
│  └────────────────────────┬─────────────────────────┘  │
│                           │                            │
│         ┌─────────────────┴─────────────────┐          │
│         ▼                                   ▼          │
│  ┌───────────────────────┐       ┌──────────────────┐  │
│  │ Principal Experience  │       │ Tanasuq Projects │  │
│  │ - Attribution Notice  │       │ - Practice Ethos │  │
│  │ - 4 Typology Filters  │       │ - Practice Scope │  │
│  │ - 8 Legacy Projects   │       │ - 4 Flagships    │  │
│  └───────────┬───────────┘       └────────┬─────────┘  │
│              └──────────────┬─────────────┘            │
│                             ▼                          │
│                  ┌──────────────────────┐              │
│                  │  Project Card Grid   │              │
│                  └──────────┬───────────┘              │
└─────────────────────────────┼──────────────────────────┘
                              │ (click on project)
                              ▼
┌────────────────────────────────────────────────────────┐
│                   CaseStudyModal.tsx                   │
│   [Full Gallery | Strategic Scope | Outcomes | Links]  │
└────────────────────────────────────────────────────────┘
```

### Data Model Additions

- In `src/types.ts`:
  - Add `projectTrack: 'principal' | 'tanasuq'` to the `Project` interface.
  - Define `ProjectTrack = 'principal' | 'tanasuq'`.
- In `src/data/projectsData.ts`:
  - Tag existing 8 commissions with `projectTrack: 'principal'`.
  - Add curated `TANASUQ_PROJECTS: Project[]` (with `projectTrack: 'tanasuq'`) covering:
    1. **Oman Coastal Tourism & Eco-Resort Spatial Framework** (Muscat & Batinah littoral advisory).
    2. **Metropolitan Public Realm & Shaded Pedestrian Network** (Microclimate & streetscape guidelines).
    3. **Private ITC Master Plan Peer Review & Audit** (Multi-billion dollar luxury resort optimization).
    4. **Red Sea Eco-Tourism Master Plan & Sensitive Terrain Zoning** (Topographic wadi conservation).
  - Export combined `ALL_PROJECTS` and track-specific collections.

### Component Updates

1. **`src/components/Works.tsx` (renamed or aliased as `Projects.tsx`)**:
   - Manage state `activeTrack: 'principal' | 'tanasuq'`.
   - Render segmented toggle at the top of the section.
   - Conditionally render the exact `PRINCIPAL_EXPERIENCE_DISCLAIMER` box when viewing Principal Experience.
   - Filter projects according to `activeTrack` and active category filters.
2. **`src/components/Header.tsx` & `src/components/Footer.tsx`**:
   - Update navigation link label from "Principal Experience" to "Projects".
3. **`public/tanasuq-site/index.html` & `public/tanasuq-site/app.js`**:
   - Update desktop & mobile navigation labels.
   - Add track switcher tabs in `#works` (renamed/aliased `#projects`).
   - Wire JavaScript event listeners to switch tracks dynamically.
   - Run `node scripts/build-zip.js` to update `tanasuq-website.zip` and `src/data/sourceCode.ts`.
