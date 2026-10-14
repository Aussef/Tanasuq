/**
 * Tanasuq Design Studio — Dr. Alaa Youssef Portfolio Engine
 * Pure Vanilla JavaScript (ES6+)
 */

const PRINCIPAL_PROJECTS = [
  {
    id: 'itc',
    slug: 'integrated-tourism-complexes-itc',
    projectTrack: 'principal',
    title: 'Integrated Tourism Complexes (ITC) Advisory',
    category: 'tourism',
    categoryLabel: 'Tourism & Mega Projects',
    client: 'Ministry of Heritage and Tourism, Sultanate of Oman',
    role: 'Urban Planning Advisor & Master Plan Auditor',
    location: 'Sultanate of Oman (National Portfolio)',
    areaOrScope: 'National Portfolio (12+ Mega ITC Developments)',
    summary: 'Strategic evaluation, statutory review, and urban design optimization of Oman’s flagship Integrated Tourism Complexes, balancing high-yield investment with Omani architectural identity.',
    keyOutcomes: [
      'Statutory review of 12+ mega tourism complexes',
      'Formulation of coastal setback and public beach access protocols',
      'Harmonization between international developers and Omani heritage codes'
    ],
    primaryImage: 'portfolio-images/integrated-tourism-complexes-itc-1.jpg',
    images: [
      'portfolio-images/integrated-tourism-complexes-itc-1.jpg',
      'portfolio-images/integrated-tourism-complexes-itc-2.jpg',
      'portfolio-images/integrated-tourism-complexes-itc-3.jpg'
    ],
    fullDescription: [
      'Serving as the Urban Planning Advisor within the Minister’s Office at the Ministry of Heritage and Tourism in Oman, Dr. Alaa Youssef conducted comprehensive evaluations and revisions of multi-billion dollar Integrated Tourism Complexes (ITCs).',
      'The scope entailed reviewing master plans submitted by international consortiums, verifying land use distributions, calculating gross floor area (GFA) ratios, and enforcing architectural character compatible with Omani spatial traditions.',
      'Special focus was given to vehicular-pedestrian separation, sustainable infrastructure rights-of-way, marina integration, and public realm permeability, creating an enduring framework for national tourism growth.'
    ],
    attributionNote: 'Performed as Urban Planning Advisor to the Minister’s Office, Ministry of Heritage and Tourism, Sultanate of Oman.'
  },
  {
    id: 'marassi',
    slug: 'marrasi-sidi-abd-el-rahman',
    projectTrack: 'principal',
    title: 'Marassi Sidi Abd El Rahman Master Plan',
    category: 'waterfront',
    categoryLabel: 'Waterfront & Resort Cities',
    client: 'Arab Consulting Engineers (ACE) / Emaar Properties',
    role: 'Master Plan Coordination & Optimization Lead',
    location: 'Mediterranean Coast, Sidi Abd El Rahman, Egypt',
    areaOrScope: '6.5 Million m² (1,544 Acres)',
    summary: 'Master plan coordination between international master planner WATG and lead engineering consultant ACE, integrating world-class marina basins, golf lagoons, and luxury residential districts.',
    keyOutcomes: [
      'Comprehensive multi-firm alignment (WATG & ACE)',
      'Spatial optimization of 23 unique neighborhood village typologies',
      'Integrated stormwater, utilities, and coastal circulation network'
    ],
    primaryImage: 'portfolio-images/marrasi-sidi-abd-el-rahman-1.jpg',
    images: [
      'portfolio-images/marrasi-sidi-abd-el-rahman-1.jpg',
      'portfolio-images/marrasi-sidi-abd-el-rahman-2.jpg'
    ],
    fullDescription: [
      'Marassi is Emaar’s flagship Mediterranean resort destination on the Egyptian North Coast, spanning 6.5 million square meters of pristine coastline.',
      'Dr. Alaa Youssef led the master plan coordination between the international master planning firm (WATG) and lead infrastructure engineers Arab Consulting Engineers (ACE).',
      'He analyzed the master plan layout against infrastructure feasibility, proposing strategic modifications to parcel boundaries, road alignments, canal waterways, and open space networks to achieve optimum integration between landscape aesthetics and real-world execution.'
    ],
    attributionNote: 'Collaboration with Arab Consulting Engineers (ACE Moharram Bakhoum) and master planner WATG for client Emaar Misr.'
  },
  {
    id: 'muscat',
    slug: 'muscat-tourism-development-masterplan',
    projectTrack: 'principal',
    title: 'Muscat Tourism Development Masterplan',
    category: 'tourism',
    categoryLabel: 'Regional & Coastal Planning',
    client: 'Ministry of Heritage and Tourism, Sultanate of Oman',
    role: 'Senior Urban Planning Expert',
    location: 'Muscat Governorate, Sultanate of Oman',
    areaOrScope: 'Metropolitan Governorate Coastal Corridors',
    summary: 'Regional tourism development masterplan identifying key strategic tourism development nodes, environmental conservation zones, and cultural heritage corridors throughout Muscat.',
    keyOutcomes: [
      'Protection of dramatic mountain-sea visual corridors',
      'Identification of sustainable eco-resort development nodes',
      'Comprehensive photographic survey and site analysis across the governorate'
    ],
    primaryImage: 'portfolio-images/muscat-tourism-development-masterplan-1.jpg',
    images: [
      'portfolio-images/muscat-tourism-development-masterplan-1.jpg',
      'portfolio-images/muscat-tourism-development-masterplan-2.jpg',
      'portfolio-images/muscat-tourism-development-masterplan-3.jpg'
    ],
    fullDescription: [
      'The Muscat Tourism Development Masterplan establishes the overarching spatial vision for leisure and tourism in the capital city of Oman.',
      'Dr. Alaa Youssef conducted rigorous physical site investigations, landscape character appraisals, and slope analyses across Muscat’s distinctive rugged terrain.',
      'The study proposed strict height controls, coastal setback zones, and clustered tourism nodes that safeguard the natural beauty of Muscat’s fjords and bays while welcoming premier hospitality investments.'
    ],
    attributionNote: 'Conducted under official auspices of the Ministry of Heritage and Tourism, Sultanate of Oman.'
  },
  {
    id: 'dhofar',
    slug: 'dhofar-tourism-development-master-plan',
    projectTrack: 'principal',
    title: 'Dhofar Tourism Development Master Plan',
    category: 'tourism',
    categoryLabel: 'Regional & Eco-Tourism',
    client: 'Ministry of Heritage and Tourism, Sultanate of Oman',
    role: 'Urban Design & Tourism Master Planner',
    location: 'Dhofar Governorate & Salalah, Oman',
    areaOrScope: 'Regional Eco-Tourism Master Plan',
    summary: 'Eco-tourism master planning and landscape preservation strategy capitalizing on Dhofar’s unique Khareef (monsoon) season, ancient frankincense routes, and Arabian Sea beaches.',
    keyOutcomes: [
      'Spatial master plan tailored for seasonal Khareef tourism surges',
      'Buffer zone strategies for UNESCO Frankincense Land heritage sites',
      'Sustainable coastal cluster typologies respecting fragile wadi ecosystems'
    ],
    primaryImage: 'portfolio-images/dhofar-tourism-development-master-plan-1.jpg',
    images: [
      'portfolio-images/dhofar-tourism-development-master-plan-1.jpg',
      'portfolio-images/dhofar-tourism-development-master-plan-2.jpg',
      'portfolio-images/dhofar-tourism-development-master-plan-3.jpg'
    ],
    fullDescription: [
      'Dhofar in southern Oman represents one of the Arabian Peninsula’s most biodiverse and culturally rich regions, renowned for its misty green monsoon climate and ancient frankincense groves.',
      'Dr. Alaa Youssef authored the spatial tourism strategy for the governorate, formulating zoning recommendations that protect delicate wadi drainage channels and coastal bluffs from unmitigated urban sprawl.',
      'The master plan introduced community-based eco-lodges, agricultural heritage trails, and heritage harbor revitalization guidelines in Mirbat and Taqah.'
    ],
    attributionNote: 'Commissioned by the Ministry of Heritage and Tourism, Sultanate of Oman.'
  },
  {
    id: 'kku',
    slug: 'king-abdel-aziz-university',
    projectTrack: 'principal',
    title: 'King Khaled University Campus & Staff Housing',
    category: 'campus',
    categoryLabel: 'Institutional & Campus Urbanism',
    client: 'Zuhair Fayez Partnership',
    role: 'Lead Urban Planner & Site Designer',
    location: 'Abha, Asir Province, Kingdom of Saudi Arabia',
    areaOrScope: 'Complete Academic & Residential City',
    summary: 'Master planning the academic communities, faculty housing neighborhoods, and pedestrian spine for King Khaled University on steep mountainous terrain in Abha.',
    keyOutcomes: [
      'Topography-adaptive terraced housing and vehicular contour grading',
      'Integration of shaded pedestrian walkways and courtyards for mountain climates',
      'Comprehensive neighborhood centers with civic, educational, and leisure hubs'
    ],
    primaryImage: 'portfolio-images/king-abdel-aziz-university-1.jpg',
    images: [
      'portfolio-images/king-abdel-aziz-university-1.jpg',
      'portfolio-images/king-abdel-aziz-university-2.jpg',
      'portfolio-images/king-abdel-aziz-university-3.jpg'
    ],
    fullDescription: [
      'Commissioned by Saudi Arabia’s leading architecture and engineering consultancy, Zuhair Fayez Partnership, this commission called for master planning the faculty and staff housing districts for King Khaled University.',
      'The project site presented steep elevation changes in the mountainous Asir region. Dr. Alaa Youssef designed a stepped, terraced urban layout that minimized earthwork cut-and-fill while maximizing panoramic mountain views.',
      'Pedestrian and vehicular circulation were masterfully stratified, ensuring children and residents can safely traverse between schools, mosques, recreational parks, and community centers without crossing primary arterial roads.'
    ],
    attributionNote: 'Executed during consultancy tenure with Zuhair Fayez Partnership (ZFP), Jeddah / Riyadh.'
  },
  {
    id: 'marrakech',
    slug: 'mudon-of-arabia-city-centre-of-marrakech',
    projectTrack: 'principal',
    title: 'Mudon of Arabia — Marrakech City Centre',
    category: 'waterfront',
    categoryLabel: 'Mixed-Use & Historic Urbanism',
    client: 'CDC Abdelhalim Ibrahim',
    role: 'Urban Designer & Spatial Form Planner',
    location: 'Marrakech, Kingdom of Morocco',
    areaOrScope: 'New Urban Mixed-Use City Center',
    summary: 'A contemporary city center expansion inspired by traditional Maghrebi urban geometry, featuring pedestrian suqs, public plazas, riad-style housing clusters, and civic arcades.',
    keyOutcomes: [
      'Reinterpretation of historic medina proportions into a modern mixed-use grid',
      'Climate-responsive microclimates via wind funnels and shaded alleys',
      'Seamless multi-modal transit interchange and pedestrian civic core'
    ],
    primaryImage: 'portfolio-images/mudon-of-arabia-city-centre-of-marrakech-1.jpg',
    images: [
      'portfolio-images/mudon-of-arabia-city-centre-of-marrakech-1.jpg',
      'portfolio-images/mudon-of-arabia-city-centre-of-marrakech-2.jpg',
      'portfolio-images/mudon-of-arabia-city-centre-of-marrakech-3.jpg'
    ],
    fullDescription: [
      'Working with the renowned Aga Khan Award laureate Community Design Collaborative (CDC - Dr. Abdelhalim Ibrahim), Dr. Alaa Youssef contributed to the urban design of Mudon of Arabia in Marrakech.',
      'The project reinterprets the spatial logic of the historic Moroccan medina — intimate alleyways, water fountains, cooling courtyards, and vibrant commercial spine — while accommodating contemporary traffic, fire safety, and modern retail formats.',
      'The master plan achieved an exemplary balance between vernacular architectural heritage and 21st-century urban infrastructure.'
    ],
    attributionNote: 'In collaboration with Community Design Collaborative (CDC - Dr. Abdelhalim CDC).'
  },
  {
    id: 'dreamland-theme-park',
    slug: 'dream-land-theme-park',
    projectTrack: 'principal',
    title: 'Dreamland Theme Park Master Plan',
    category: 'leisure',
    categoryLabel: 'Entertainment & Leisure Planning',
    client: 'Talat Imam Consultant',
    role: 'Master Planner & Attraction Spatial Coordinator',
    location: '6th of October City, Giza, Egypt',
    areaOrScope: '150 Acres (607,000 m²)',
    summary: 'Master planning Egypt’s premier 150-acre amusement and entertainment destination, featuring intricate crowd circulation loops, ride zoning, and infrastructure support.',
    keyOutcomes: [
      '150-acre master plan catering to over 30,000 daily visitors',
      'Thematic transition gateways and backstage service access networks',
      'Water attraction basins integrated with regional landscape recycling'
    ],
    primaryImage: 'portfolio-images/dream-land-theme-park-1.jpg',
    images: [
      'portfolio-images/dream-land-theme-park-1.jpg',
      'portfolio-images/dream-land-theme-park-2.jpg',
      'portfolio-images/dream-land-theme-park-3.jpg'
    ],
    fullDescription: [
      'Dreamland Theme Park was conceptualized as the foremost destination theme park in Egypt and North Africa.',
      'Dr. Alaa Youssef led the comprehensive site planning and attraction zoning, establishing continuous radial visitor flow corridors that prevent bottlenecks and optimize guest experience.',
      'The plan separated backstage service logistics, ride maintenance zones, and safety perimeters from public guest areas, delivering a durable master plan that has entertained millions of guests for decades.'
    ],
    attributionNote: 'Undertaken with Talat Imam Consultant for Bahgat Group / Dreamland Egypt.'
  },
  {
    id: 'dreamland-residential',
    slug: 'dream-land-residential',
    projectTrack: 'principal',
    title: 'Dreamland Residential Community Master Plan',
    category: 'campus',
    categoryLabel: 'Residential Communities',
    client: 'Talat Imam Consultant',
    role: 'Urban & Site Planner',
    location: '6th of October City, Giza, Egypt',
    areaOrScope: 'Multi-Phase Gated Golf Community',
    summary: 'Site planning and urban layout for Egypt’s pioneering gated master-planned community, integrating championship golf courses, neighborhood clusters, and green finger spines.',
    keyOutcomes: [
      'Hierarchical street grid prioritizing calm residential cul-de-sacs',
      'Scenic golf course frontage maximized across villa parcels',
      'Integration of community clubhouses, schools, and neighborhood commercial nodes'
    ],
    primaryImage: 'portfolio-images/dream-land-residential-1.jpg',
    images: [
      'portfolio-images/dream-land-residential-1.jpg',
      'portfolio-images/dream-land-residential-2.jpg',
      'portfolio-images/dream-land-residential-3.jpg'
    ],
    fullDescription: [
      'Dreamland Residential in 6th of October City represented one of Egypt’s first comprehensive private master-planned suburban communities.',
      'Dr. Alaa Youssef designed neighborhood subdivisions, parcel layouts, and internal road hierarchies that shielded residential clusters from arterial highways.',
      'The plan featured green pedestrian corridors linking residential cul-de-sacs directly to neighborhood parks, local amenities, and the central golf resort.'
    ],
    attributionNote: 'Undertaken with Talat Imam Consultant for Bahgat Group / Dreamland Egypt.'
  }
];

const TANASUQ_PROJECTS = [
  {
    id: 'tanasuq-muscat-waterfront',
    slug: 'tanasuq-muscat-waterfront-regeneration',
    projectTrack: 'tanasuq',
    title: 'Muscat Coastal & Maritime Waterfront Regeneration',
    category: 'waterfront',
    categoryLabel: 'Waterfront Regeneration & Maritime Urbanism',
    client: 'Tanasuq Urban Design Practice / Maritime Advisory Group',
    role: 'Principal Urban Designer & Master Planning Director',
    location: 'Muscat Coastal Corridor, Sultanate of Oman',
    areaOrScope: '340 Hectares (4.2 km Coastline Frontage)',
    summary: 'A climate-responsive urban regeneration framework reconnecting the historic port hinterland with active public waterfront promenades, shaded arcades, and sustainable marine eco-habitats.',
    keyOutcomes: [
      '4.2 km continuous pedestrian waterfront esplanade with native Omani landscape buffers',
      'Context-sensitive building envelope zoning respecting coastal mountain ridgelines',
      'Multi-modal water taxi terminal integrated with public transit & active mobility lanes'
    ],
    primaryImage: 'portfolio-images/muscat-tourism-development-masterplan-2.jpg',
    images: [
      'portfolio-images/muscat-tourism-development-masterplan-2.jpg',
      'portfolio-images/muscat-tourism-development-masterplan-1.jpg',
      'portfolio-images/muscat-tourism-development-masterplan-3.jpg'
    ],
    fullDescription: [
      'Authored as a flagship Tanasuq urban design initiative, this master plan addresses the vital interface between historic Muscat’s dramatic mountainous topography and its vibrant marine coastline.',
      'The strategy restructures underutilized maritime lands into high-value cultural, leisure, and civic destinations, prioritizing microclimate thermal comfort through prevailing sea breeze corridors and shaded colonnades.',
      'Tanasuq established strict architectural proportion guidelines, ensuring that new waterfront massing harmonizes with traditional Omani architectural scale while facilitating state-of-the-art marina logistics.'
    ],
    attributionNote: 'Flagship initiative developed under the Tanasuq (تناسق) independent urban design practice.'
  },
  {
    id: 'tanasuq-oasis-ecotourism',
    slug: 'tanasuq-al-dakhiliyah-oasis-heritage',
    projectTrack: 'tanasuq',
    title: 'Al Dakhiliyah Oasis & Falaj Cultural Heritage Master Plan',
    category: 'tourism',
    categoryLabel: 'Cultural Heritage & Eco-Tourism',
    client: 'Tanasuq Regional Heritage Advisory / Tourism Consortium',
    role: 'Lead Master Planner & Cultural Landscape Strategist',
    location: 'Al Dakhiliyah Foothills, Sultanate of Oman',
    areaOrScope: '180 Hectares (Historic Date Palm Groves & Aflaj Channels)',
    summary: 'Restorative heritage tourism framework integrating UNESCO-recognized aflaj hydraulic channels with boutique eco-lodges, vernacular stone trails, and date palm agrarian preservation.',
    keyOutcomes: [
      'Active preservation buffer protecting century-old vernacular gravity-fed irrigation channels',
      'Low-impact micro-lodge hospitality clusters constructed from regional rammed-earth and stone',
      'Zero-emission pedestrian circulation network shaded by indigenous date palms'
    ],
    primaryImage: 'portfolio-images/dhofar-tourism-development-master-plan-2.jpg',
    images: [
      'portfolio-images/dhofar-tourism-development-master-plan-2.jpg',
      'portfolio-images/dhofar-tourism-development-master-plan-1.jpg',
      'portfolio-images/dhofar-tourism-development-master-plan-3.jpg'
    ],
    fullDescription: [
      'Under the Tanasuq design methodology, agrarian heritage and modern eco-tourism are treated as symbiotic systems rather than competing interests.',
      'This master plan safeguards vulnerable date palm groves by weaving unobtrusive raised timber walkways and shaded observation pavilions through the existing canopy.',
      'Architectural vernacular codes mandate locally sourced materials, passive earth cooling, and natural water filtration, serving as a regional benchmark for sensitive cultural landscape revitalization.'
    ],
    attributionNote: 'Authored under Tanasuq independent advisory for regional eco-tourism development.'
  },
  {
    id: 'tanasuq-innovation-campus',
    slug: 'tanasuq-regional-knowledge-district',
    projectTrack: 'tanasuq',
    title: 'Regional Knowledge District & Academic Campus',
    category: 'campus',
    categoryLabel: 'Academic Cities & Research Campuses',
    client: 'Higher Education & Innovation Foundation',
    role: 'Master Planning Director (Tanasuq Practice)',
    location: 'New Administrative Expansion Corridor, Cairo, Egypt',
    areaOrScope: '210 Hectares',
    summary: 'A high-density walkable university quarter organized around 5-minute pedestrian learning clusters, climate-responsive courtyard quadrangles, and shared civic R&D incubator spines.',
    keyOutcomes: [
      'Human-scaled 5-minute walkable campus modules interconnected by shaded wind corridors',
      'Shared R&D enterprise zone bridging academic faculties with regional industry incubators',
      'Integrated water retention swales and solar canopy arrays providing 40% passive shading'
    ],
    primaryImage: 'portfolio-images/king-abdel-aziz-university-2.jpg',
    images: [
      'portfolio-images/king-abdel-aziz-university-2.jpg',
      'portfolio-images/king-abdel-aziz-university-1.jpg',
      'portfolio-images/king-abdel-aziz-university-3.jpg'
    ],
    fullDescription: [
      'Developed by Tanasuq as a state-of-the-art campus urban design framework, the master plan departs from car-centric institutional layouts in favor of an intensely pedestrian collegiate environment.',
      'Centering on a green academic ravine with cascading water features, faculties are positioned along radial axes that channel prevailing northwestern breezes throughout student gathering courts.',
      'The urban morphology enables phased institutional expansion without disrupting existing campus life or compromising spatial coherency.'
    ],
    attributionNote: 'Curated university master plan developed by Tanasuq Urban Design Consultancy.'
  },
  {
    id: 'tanasuq-red-sea-enclave',
    slug: 'tanasuq-red-sea-sustainable-enclave',
    projectTrack: 'tanasuq',
    title: 'Red Sea Sustainable Coastal Enclave & Eco-Resort',
    category: 'leisure',
    categoryLabel: 'Marine Conservation & Destination Leisure',
    client: 'Coastal Development & Eco-Resorts Authority',
    role: 'Chief Urban Planner & Marine Setback Consultant',
    location: 'Red Sea Coastal Territory, Saudi Arabia',
    areaOrScope: '420 Hectares (14 km Shoreline & Barrier Reef Buffer)',
    summary: 'Low-density destination master plan implementing rigorous marine sanctuary setback zones, autonomous solar transit loops, and regenerative mangrove conservation.',
    keyOutcomes: [
      'Zero-impact coastal construction setbacks safeguarding pristine coral reef ecosystems',
      'Fully autonomous electric mobility network with off-grid renewable microgrid integration',
      'Tide-adaptive overwater chalets engineered with floating helical foundations'
    ],
    primaryImage: 'portfolio-images/integrated-tourism-complexes-itc-2.jpg',
    images: [
      'portfolio-images/integrated-tourism-complexes-itc-2.jpg',
      'portfolio-images/integrated-tourism-complexes-itc-1.jpg',
      'portfolio-images/integrated-tourism-complexes-itc-3.jpg'
    ],
    fullDescription: [
      'The Tanasuq Red Sea Enclave establishes a new paradigm for regenerative coastal leisure, where ecological restoration guides all spatial land-use determinations.',
      'By aligning all circulation networks behind natural coastal sand dune ridges, the development shields nesting sea turtles and fragile littoral habitats from light and noise pollution.',
      'The architecture incorporates bioclimatic mashrabiya shading elements, thermal massing, and open-air cross ventilation, drastically reducing lifecycle operational energy requirements.'
    ],
    attributionNote: 'Eco-tourism master planning initiative authored under Tanasuq Consultancy.'
  },
  {
    id: 'tanasuq-wadi-al-khoudh',
    slug: 'tanasuq-wadi-al-khoudh-civic-spine',
    projectTrack: 'tanasuq',
    title: 'Wadi Al Khoudh Hydrological & Civic Green Spine',
    category: 'waterfront',
    categoryLabel: 'Resilient Waterfronts & Flood Mitigation',
    client: 'Municipal Planning & Urban Resilience Council',
    role: 'Urban Design Lead & Resilient Infrastructure Strategist',
    location: 'Seeb / Muscat, Sultanate of Oman',
    areaOrScope: '580 Hectares (12 km Linear Natural Wadi Corridor)',
    summary: 'Transformative climate-adaptation master plan transforming an active flood corridor into a resilient linear civic park, groundwater replenishment basin, and amphitheater spine.',
    keyOutcomes: [
      'Engineered terraced retention basins designed to absorb 100-year storm surge events safely',
      'Linear recreational trail network with botanical desert flora and bird observation wetlands',
      'Seamless multi-neighborhood pedestrian bridges re-connecting severed metropolitan districts'
    ],
    primaryImage: 'portfolio-images/marrasi-sidi-abd-el-rahman-2.jpg',
    images: [
      'portfolio-images/marrasi-sidi-abd-el-rahman-2.jpg',
      'portfolio-images/muscat-tourism-development-masterplan-3.jpg',
      'portfolio-images/dhofar-tourism-development-master-plan-3.jpg'
    ],
    fullDescription: [
      'Natural wadis throughout the Arabian Peninsula oscillate between dry desert gullies and torrential flash floods. Tanasuq developed this master plan to convert risk into civic amenity.',
      'The hydrological urban design utilizes stepped stone gabions, bio-swales, and deep gravel infiltration beds to slow torrential currents while recharging local water tables.',
      'During dry seasons, the park features multi-tiered amphitheaters, sports courts, and shaded picnic groves, seamlessly reconnecting residential districts across the metropolitan divide.'
    ],
    attributionNote: 'Hydrological urban design and resilience master plan by Tanasuq Urban Design.'
  }
];

const ALL_PROJECTS = [...PRINCIPAL_PROJECTS, ...TANASUQ_PROJECTS];
const PROJECTS = ALL_PROJECTS;

let currentTrack = 'principal'; // 'principal' | 'tanasuq'
let currentCategoryFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  renderWorks();
  initTrackSwitcher();
  initMobileNav();
  initProjectFilters();
  initCaseStudyModal();
  initQualificationsModal();
  initContactForm();
  initCurrentYear();
});

/* --------------------------------------------------------------------------
 * Render Works Cards
 * -------------------------------------------------------------------------- */
function renderWorks() {
  const grid = document.getElementById('worksGrid');
  if (!grid) return;

  const trackProjects = currentTrack === 'principal' ? PRINCIPAL_PROJECTS : TANASUQ_PROJECTS;
  const filtered = trackProjects.filter(p => currentCategoryFilter === 'all' || p.category === currentCategoryFilter);

  grid.innerHTML = filtered.map(p => `
    <article class="work-card" data-category="${p.category}" style="display:flex;">
      <div class="work-media">
        <img src="${p.primaryImage}" alt="${p.title}" class="work-img" loading="lazy" referrerpolicy="no-referrer">
        
        <div style="position:absolute; top:0.75rem; left:0.75rem; background:rgba(23,23,22,0.85); color:#fff; font-size:0.7rem; font-weight:600; padding:0.25rem 0.5rem; border-radius:4px; z-index:2;">
          ${p.projectTrack === 'principal' ? 'Principal Experience' : 'Tanasuq Initiative'}
        </div>

        <div class="work-metric-badge" style="bottom:0.75rem; left:0.75rem;">
          <span class="metric-value">${p.categoryLabel}</span>
        </div>
      </div>
      <div class="work-content">
        <div class="work-meta">
          <span style="font-weight:600; color: #171716;">${p.client}</span>
          <span aria-hidden="true">·</span>
          <span>${p.location}</span>
        </div>
        <h3 class="work-title">${p.title}</h3>
        <p class="work-summary">${p.summary}</p>

        <div style="background:#FAF8F5; border:1px solid rgba(23,23,22,0.06); border-radius:6px; padding:0.6rem 0.75rem; margin-bottom:1rem; font-size:0.75rem; color:#6B6862;">
          <strong style="display:block; font-size:0.65rem; text-transform:uppercase; letter-spacing:0.05em; color:#171716; margin-bottom:0.25rem;">Key Outcomes:</strong>
          ${p.keyOutcomes.slice(0, 2).map(out => `
            <div style="display:flex; align-items:flex-start; gap:0.4rem; margin-top:0.2rem;">
              <span style="color:#171716;">•</span>
              <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${out}</span>
            </div>
          `).join('')}
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(23,23,22,0.06); padding-top:0.75rem; margin-top:auto;">
          <button class="work-cta-btn" data-project="${p.id}">View Master Plan Study &rarr;</button>
          ${p.projectTrack === 'principal' ? `
            <a href="https://alaayoussef.myportfolio.com/${p.slug}" target="_blank" rel="noopener noreferrer" style="font-size:0.75rem; color:#9E9B94; text-decoration:none;">Adobe Portfolio</a>
          ` : `
            <span style="font-size:0.75rem; font-family:monospace; color:#9E9B94;">Tanasuq</span>
          `}
        </div>
      </div>
    </article>
  `).join('');

  // Attach modal listeners to buttons
  grid.querySelectorAll('.work-cta-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pid = e.currentTarget.getAttribute('data-project');
      if (pid && window.openCaseStudyModal) {
        window.openCaseStudyModal(pid);
      }
    });
  });
}

/* --------------------------------------------------------------------------
 * Sub-navigation Dual Track Switcher
 * -------------------------------------------------------------------------- */
function initTrackSwitcher() {
  const principalBtn = document.getElementById('trackPrincipalBtn');
  const tanasuqBtn = document.getElementById('trackTanasuqBtn');
  const trackAttributionTitle = document.getElementById('trackAttributionTitle');
  const trackAttributionText = document.getElementById('trackAttributionText');
  const filterTrackLabel = document.getElementById('filterTrackLabel');

  if (!principalBtn || !tanasuqBtn) return;

  function switchTrack(track) {
    currentTrack = track;
    currentCategoryFilter = 'all';

    // Reset filter tabs active state
    document.querySelectorAll('.filter-tab').forEach(t => {
      if (t.getAttribute('data-filter') === 'all') {
        t.classList.add('active');
        t.setAttribute('aria-selected', 'true');
      } else {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      }
    });

    if (track === 'principal') {
      principalBtn.style.background = '#fff';
      principalBtn.style.border = '1px solid rgba(23,23,22,0.15)';
      tanasuqBtn.style.background = 'transparent';
      tanasuqBtn.style.border = '1px solid transparent';

      if (trackAttributionTitle) trackAttributionTitle.textContent = 'Principal Experience Attribution Notice';
      if (trackAttributionText) {
        trackAttributionText.textContent = "Projects featured on this website under 'Principal Experience' represent work performed by Dr. Alaaeldin Youssef during previous associations with former employers, consultancy partnerships, or government agencies. Credit is provided to the respective firms of record and client entities. Selected images and drawings remain the copyright of their original rights holders.";
      }
      if (filterTrackLabel) filterTrackLabel.textContent = 'Filter Principal Commissions:';
    } else {
      tanasuqBtn.style.background = '#fff';
      tanasuqBtn.style.border = '1px solid rgba(23,23,22,0.15)';
      principalBtn.style.background = 'transparent';
      principalBtn.style.border = '1px solid transparent';

      if (trackAttributionTitle) trackAttributionTitle.textContent = 'Tanasuq (تناسق) Practice Flagship Initiatives';
      if (trackAttributionText) {
        trackAttributionText.textContent = "Curated flagship urban master planning and advisory studies authored under the Tanasuq independent practice. Founded on spatial balance, ecological sensitivity, and regional architectural identity across Oman, Saudi Arabia, and Egypt.";
      }
      if (filterTrackLabel) filterTrackLabel.textContent = 'Filter Tanasuq Initiatives:';
    }

    renderWorks();
  }

  principalBtn.addEventListener('click', () => switchTrack('principal'));
  tanasuqBtn.addEventListener('click', () => switchTrack('tanasuq'));
}

/* --------------------------------------------------------------------------
 * Mobile Navigation
 * -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const navLinks = drawer ? drawer.querySelectorAll('.mobile-nav-link, .btn') : [];

  if (!toggleBtn || !drawer) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    toggleBtn.classList.toggle('active', isOpen);
    drawer.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    drawer.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', () => toggleMenu());
  navLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) toggleMenu(false);
  });
}

/* --------------------------------------------------------------------------
 * Project Filtering
 * -------------------------------------------------------------------------- */
function initProjectFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      currentCategoryFilter = tab.getAttribute('data-filter') || 'all';
      renderWorks();
    });
  });
}

/* --------------------------------------------------------------------------
 * Case Study Modal
 * -------------------------------------------------------------------------- */
function initCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  const modalBody = document.getElementById('modalBody');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!modal || !modalBody || !closeBtn) return;

  function openModal(projectId) {
    const project = ALL_PROJECTS.find(p => p.id === projectId);
    if (!project) return;

    modalBody.innerHTML = `
      <div class="modal-header-meta">
        <span style="font-weight:600; padding:0.2rem 0.5rem; border-radius:4px; font-size:0.75rem; background:${project.projectTrack === 'principal' ? '#F3EFEA' : '#171716'}; color:${project.projectTrack === 'principal' ? '#171716' : '#fff'};">
          ${project.projectTrack === 'principal' ? 'Principal Experience' : 'Tanasuq Practice'}
        </span>
        <span aria-hidden="true">·</span>
        <span style="font-weight:600; color:#171716;">${project.categoryLabel}</span>
        <span aria-hidden="true">·</span>
        <span>${project.client}</span>
        <span aria-hidden="true">·</span>
        <span>${project.location}</span>
      </div>
      <h2 class="modal-title">${project.title}</h2>
      
      <div style="display:flex; flex-wrap:wrap; gap:1.5rem; font-size:0.8rem; color:#6B6862; margin-bottom:1.5rem; border-bottom:1px solid rgba(23,23,22,0.08); padding-bottom:1rem;">
        <div><strong>Role:</strong> ${project.role}</div>
        <div><strong>Scale:</strong> ${project.areaOrScope}</div>
      </div>

      <div class="modal-img-wrapper">
        <img src="${project.primaryImage}" alt="${project.title}" id="modalMainImg" class="modal-img">
      </div>

      ${project.images.length > 1 ? `
        <div style="display:flex; gap:0.5rem; overflow-x:auto; margin-bottom:1.5rem; padding-bottom:0.5rem;">
          ${project.images.map((img) => `
            <button onclick="document.getElementById('modalMainImg').src='${img}'" style="border:1px solid rgba(23,23,22,0.15); border-radius:4px; overflow:hidden; width:80px; height:50px; flex-shrink:0; cursor:pointer;">
              <img src="${img}" style="width:100%; height:100%; object-fit:cover;">
            </button>
          `).join('')}
        </div>
      ` : ''}

      <div class="modal-details-grid">
        ${project.keyOutcomes.map(out => `
          <div class="modal-stat-box">
            <span class="modal-stat-label">Inclusion / Outcome</span>
            <span class="modal-stat-value" style="font-size:0.85rem; font-weight:500;">${out}</span>
          </div>
        `).join('')}
      </div>

      <div class="modal-prose">
        ${project.fullDescription.map(p => `<p>${p}</p>`).join('')}
      </div>

      ${project.attributionNote ? `
        <div style="background:#F8F6F2; border:1px solid rgba(23,23,22,0.1); border-radius:8px; padding:1rem; margin-top:1.5rem; font-size:0.8rem; color:#52504B;">
          <strong style="display:block; text-transform:uppercase; letter-spacing:0.05em; font-size:0.7rem; color:#171716; margin-bottom:0.25rem;">
            Attribution & Record:
          </strong>
          ${project.attributionNote}
        </div>
      ` : ''}

      <div style="margin-top:2rem; padding-top:1.25rem; border-top:1px solid rgba(23,23,22,0.08); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
        ${project.projectTrack === 'principal' ? `
          <a href="https://alaayoussef.myportfolio.com/${project.slug}" target="_blank" rel="noopener noreferrer" style="font-size:0.85rem; color:#171716; text-decoration:underline;">View Archive on alaayoussef.myportfolio.com &rarr;</a>
        ` : `
          <span style="font-size:0.85rem; color:#6B6862;"><strong>Tanasuq Flagship Master Planning</strong> · Independent Practice</span>
        `}
        <a href="#contact" onclick="document.getElementById('caseStudyModal').classList.remove('open')" class="btn btn-primary" style="font-size:0.8rem; padding:0.5rem 1rem;">Inquire Regarding Master Plan</a>
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  window.openCaseStudyModal = openModal;

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}

/* --------------------------------------------------------------------------
 * Key Qualifications Modal
 * -------------------------------------------------------------------------- */
const QUALIFICATIONS = [
  {
    period: '2010 – Present',
    role: 'Independent Senior Urban Design & Planning Advisor',
    institution: 'Oman & Regional Practices',
    details: 'Advising ministries and premier developers on Integrated Tourism Complexes (ITCs), mega-development master planning, and collaborative governance with international consultants (WATG, ACE, Zuhair Fayez, CDC).'
  },
  {
    period: '2006 – 2012',
    role: 'Urban Planning Advisor (Minister’s Office)',
    institution: 'Ministry of Tourism, Sultanate of Oman',
    details: 'Responsible for evaluating, auditing, and editing major Integrated Tourism Complexes (ITCs), municipal development controls, and coastal tourism strategies across Oman.'
  },
  {
    period: '1991 – 2010',
    role: 'Faculty Staff Member & Lecturer',
    institution: 'Faculty of Urban and Regional Planning, Cairo University',
    details: 'Taught undergraduate and postgraduate studios in Urban Design, Site Planning, Landscape Architecture, and Regional Spatial Analysis for nearly two decades.'
  },
  {
    period: '1991 – Present',
    role: 'Lead Urban Design Consultant',
    institution: 'MENA Regional Mega Projects',
    details: 'Master planned flagship developments across Egypt, Saudi Arabia, Oman, and Morocco, including Marassi (North Coast), King Khaled University (Abha), Dreamland, and Mudon Marrakech.'
  }
];

function initQualificationsModal() {
  const modal = document.getElementById('qualificationsModal');
  const modalBody = document.getElementById('qualBody');
  const closeBtn = document.getElementById('qualCloseBtn');
  const openBtns = [
    document.getElementById('navQualificationsBtn'),
    document.getElementById('headerQualBtn'),
    document.getElementById('mobNavQual'),
    document.getElementById('heroQualBtn'),
    document.getElementById('aboutQualBtn'),
    document.getElementById('footerQualBtn')
  ].filter(Boolean);

  if (!modal || !modalBody || !closeBtn) return;

  function openQual() {
    modalBody.innerHTML = `
      <div class="modal-header-meta">
        <span style="font-weight:600; color:#171716;">Academic & Professional Credentials</span>
        <span aria-hidden="true">·</span>
        <span>Cairo University & Regional Ministries</span>
      </div>
      <h2 class="modal-title">Dr. Alaaeldin Youssef — Key Qualifications</h2>
      
      <p style="font-size:0.9rem; color:#5E5C56; line-height:1.6; margin-bottom:1.5rem;">
        PhD in Planning and Urban Design with three decades of distinguished leadership across academic teaching, ministerial statutory policy, and international private consulting practice.
      </p>

      <div class="qual-timeline">
        ${QUALIFICATIONS.map(q => `
          <div class="timeline-entry" style="margin-bottom:1.5rem; padding-left:1.5rem; border-left:2px solid #171716; position:relative;">
            <div style="position:absolute; left:-6px; top:0; width:10px; height:10px; background:#171716; border-radius:50%;"></div>
            <span style="font-size:0.75rem; font-family:monospace; color:#8C8880; font-weight:600; display:block; margin-bottom:0.25rem;">${q.period}</span>
            <strong style="font-size:1rem; color:#171716; display:block; margin-bottom:0.15rem;">${q.role}</strong>
            <span style="font-size:0.85rem; color:#171716; font-weight:500; display:block; margin-bottom:0.4rem;">${q.institution}</span>
            <p style="font-size:0.85rem; color:#5E5C56; line-height:1.5; margin:0;">${q.details}</p>
          </div>
        `).join('')}
      </div>

      <div style="background:#F8F6F2; border:1px solid rgba(23,23,22,0.08); border-radius:8px; padding:1.25rem; margin-top:1.5rem;">
        <strong style="font-size:0.85rem; color:#171716; display:block; margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Key Technical Disciplines</strong>
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
          <span style="background:#fff; border:1px solid rgba(23,23,22,0.1); padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:500;">Integrated Tourism Complexes (ITCs)</span>
          <span style="background:#fff; border:1px solid rgba(23,23,22,0.1); padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:500;">Multi-Consultant Master Plan Coordination</span>
          <span style="background:#fff; border:1px solid rgba(23,23,22,0.1); padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:500;">Steep Terrain Topographic Planning</span>
          <span style="background:#fff; border:1px solid rgba(23,23,22,0.1); padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:500;">Vernacular Heritage & Tourism Integration</span>
          <span style="background:#fff; border:1px solid rgba(23,23,22,0.1); padding:0.25rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:500;">Statutory Ministry Audit Protocols</span>
        </div>
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeQual() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtns.forEach(b => b.addEventListener('click', openQual));
  closeBtn.addEventListener('click', closeQual);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeQual();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeQual();
  });
}



/* --------------------------------------------------------------------------
 * Contact Form
 * -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('advisoryForm');
  const success = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Transmitting...';
      btn.disabled = true;
    }

    setTimeout(() => {
      if (btn) {
        btn.textContent = 'Advisory Inquiry Submitted';
      }
      if (success) {
        success.style.display = 'block';
      }
      form.reset();
    }, 800);
  });
}

/* --------------------------------------------------------------------------
 * Current Year in Footer
 * -------------------------------------------------------------------------- */
function initCurrentYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}
