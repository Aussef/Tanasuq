import type { Project, QualificationItem } from '../types';

export const DOCTOR_PROFILE = {
  name: 'Dr. Alaa Youssef',
  fullName: 'Dr. Alaaeldin Youssef',
  title: 'PhD in Planning and Urban Design',
  subtitle: 'Senior Urban Planning, Master Planning & Urban Design Consultant',
  experience: '30+ Years of Academic & Regional Practice',
  email: 'Dr.Alaa.Yousef@gmail.com',
  portfolioUrl: 'https://alaayoussef.myportfolio.com/',
  locations: ['Muscat, Sultanate of Oman', 'Cairo, Egypt'],
  formerFaculty: 'Faculty of Urban and Regional Planning, Cairo University (1991 – 2010)',
  advisorRole: 'Urban Planning Advisor, Minister’s Office, Ministry of Heritage and Tourism, Oman',
  portraitImage: '/portfolio-images/about-2.jpg'
};

export const PRINCIPAL_EXPERIENCE_DISCLAIMER =
  "Projects featured on this website under 'Principal Experience' represent work performed by Dr. Alaaeldin Youssef during previous associations with former employers, consultancy partnerships, or government agencies. Credit is provided to the respective firms of record and client entities. Selected images and drawings remain the copyright of their original rights holders.";

export const QUALIFICATIONS_TIMELINE: QualificationItem[] = [
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

export const PRINCIPAL_PROJECTS: Project[] = [
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
    primaryImage: '/portfolio-images/integrated-tourism-complexes-itc-1.jpg',
    images: [
      '/portfolio-images/integrated-tourism-complexes-itc-1.jpg',
      '/portfolio-images/integrated-tourism-complexes-itc-2.jpg',
      '/portfolio-images/integrated-tourism-complexes-itc-3.jpg'
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
    primaryImage: '/portfolio-images/marrasi-sidi-abd-el-rahman-1.jpg',
    images: [
      '/portfolio-images/marrasi-sidi-abd-el-rahman-1.jpg',
      '/portfolio-images/marrasi-sidi-abd-el-rahman-2.jpg'
    ],
    fullDescription: [
      'Marassi is Emaar’s flagship Mediterranean resort destination on the Egyptian North Coast, spanning 6.5 million square meters of pristine coastline.',
      'Dr. Alaa Youssef led the master plan coordination between the international master planning firm (WATG - Wimberly Allison Tong & Goo) and lead infrastructure engineers Arab Consulting Engineers (ACE - Moharram Bakhoum).',
      'He analyzed the master plan layout against infrastructure feasibility, proposing strategic modifications to parcel boundaries, road alignments, canal waterways, and open space networks to achieve optimum integration between landscape aesthetics and real-world construction execution.'
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
    primaryImage: '/portfolio-images/muscat-tourism-development-masterplan-1.jpg',
    images: [
      '/portfolio-images/muscat-tourism-development-masterplan-1.jpg',
      '/portfolio-images/muscat-tourism-development-masterplan-2.jpg',
      '/portfolio-images/muscat-tourism-development-masterplan-3.jpg'
    ],
    fullDescription: [
      'The Muscat Tourism Development Masterplan establishes the overarching spatial vision for leisure and tourism in the capital city of Oman.',
      'Dr. Alaa Youssef conducted rigorous physical site investigations, landscape character appraisals, and slope analyses across Muscat’s distinctive rugged terrain.',
      'The study proposed strict height controls, coastal setback zones, and clustered tourism nodes that safeguard the natural beauty of Muscat’s fjords and bays while welcoming premier international hospitality investments.'
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
    primaryImage: '/portfolio-images/dhofar-tourism-development-master-plan-1.jpg',
    images: [
      '/portfolio-images/dhofar-tourism-development-master-plan-1.jpg',
      '/portfolio-images/dhofar-tourism-development-master-plan-2.jpg',
      '/portfolio-images/dhofar-tourism-development-master-plan-3.jpg'
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
    primaryImage: '/portfolio-images/king-abdel-aziz-university-1.jpg',
    images: [
      '/portfolio-images/king-abdel-aziz-university-1.jpg',
      '/portfolio-images/king-abdel-aziz-university-2.jpg',
      '/portfolio-images/king-abdel-aziz-university-3.jpg'
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
    primaryImage: '/portfolio-images/mudon-of-arabia-city-centre-of-marrakech-1.jpg',
    images: [
      '/portfolio-images/mudon-of-arabia-city-centre-of-marrakech-1.jpg',
      '/portfolio-images/mudon-of-arabia-city-centre-of-marrakech-2.jpg',
      '/portfolio-images/mudon-of-arabia-city-centre-of-marrakech-3.jpg'
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
    primaryImage: '/portfolio-images/dream-land-theme-park-1.jpg',
    images: [
      '/portfolio-images/dream-land-theme-park-1.jpg',
      '/portfolio-images/dream-land-theme-park-2.jpg',
      '/portfolio-images/dream-land-theme-park-3.jpg'
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
    primaryImage: '/portfolio-images/dream-land-residential-1.jpg',
    images: [
      '/portfolio-images/dream-land-residential-1.jpg',
      '/portfolio-images/dream-land-residential-2.jpg',
      '/portfolio-images/dream-land-residential-3.jpg'
    ],
    fullDescription: [
      'Dreamland Residential in 6th of October City represented one of Egypt’s first comprehensive private master-planned suburban communities.',
      'Dr. Alaa Youssef designed neighborhood subdivisions, parcel layouts, and internal road hierarchies that shielded residential clusters from arterial highways.',
      'The plan featured green pedestrian corridors linking residential cul-de-sacs directly to neighborhood parks, local amenities, and the central golf resort.'
    ],
    attributionNote: 'Undertaken with Talat Imam Consultant for Bahgat Group / Dreamland Egypt.'
  }
];

export const TANASUQ_PROJECTS: Project[] = [
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
    primaryImage: '/portfolio-images/muscat-tourism-development-masterplan-2.jpg',
    images: [
      '/portfolio-images/muscat-tourism-development-masterplan-2.jpg',
      '/portfolio-images/muscat-tourism-development-masterplan-1.jpg',
      '/portfolio-images/muscat-tourism-development-masterplan-3.jpg'
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
    primaryImage: '/portfolio-images/dhofar-tourism-development-master-plan-2.jpg',
    images: [
      '/portfolio-images/dhofar-tourism-development-master-plan-2.jpg',
      '/portfolio-images/dhofar-tourism-development-master-plan-1.jpg',
      '/portfolio-images/dhofar-tourism-development-master-plan-3.jpg'
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
    primaryImage: '/portfolio-images/king-abdel-aziz-university-2.jpg',
    images: [
      '/portfolio-images/king-abdel-aziz-university-2.jpg',
      '/portfolio-images/king-abdel-aziz-university-1.jpg',
      '/portfolio-images/king-abdel-aziz-university-3.jpg'
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
    primaryImage: '/portfolio-images/integrated-tourism-complexes-itc-2.jpg',
    images: [
      '/portfolio-images/integrated-tourism-complexes-itc-2.jpg',
      '/portfolio-images/integrated-tourism-complexes-itc-1.jpg',
      '/portfolio-images/integrated-tourism-complexes-itc-3.jpg'
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
    primaryImage: '/portfolio-images/marrasi-sidi-abd-el-rahman-2.jpg',
    images: [
      '/portfolio-images/marrasi-sidi-abd-el-rahman-2.jpg',
      '/portfolio-images/muscat-tourism-development-masterplan-3.jpg',
      '/portfolio-images/dhofar-tourism-development-master-plan-3.jpg'
    ],
    fullDescription: [
      'Natural wadis throughout the Arabian Peninsula oscillate between dry desert gullies and torrential flash floods. Tanasuq developed this master plan to convert risk into civic amenity.',
      'The hydrological urban design utilizes stepped stone gabions, bio-swales, and deep gravel infiltration beds to slow torrential currents while recharging local water tables.',
      'During dry seasons, the park features multi-tiered amphitheaters, sports courts, and shaded picnic groves, seamlessly reconnecting residential districts across the metropolitan divide.'
    ],
    attributionNote: 'Hydrological urban design and resilience master plan by Tanasuq Urban Design.'
  }
];

export const ALL_PROJECTS: Project[] = [...PRINCIPAL_PROJECTS, ...TANASUQ_PROJECTS];

// Default export alias for compatibility
export const PROJECTS: Project[] = PRINCIPAL_PROJECTS;
