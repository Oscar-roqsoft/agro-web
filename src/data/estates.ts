export interface Estate {
  slug: string
  name: string
  state: string
  region: string
  image: string
  gallery: string[]
  size: number
  planted: string
  farmers: number
  crops: string[]
  ready: boolean
  harvestYear?: number
  featured?: boolean

  // Detail fields
  shortDescription: string
  longDescription: string
  highlights: string[]
  certifications: string[]
  soilType: string
  rainfall: string
  elevation: string
  coordinates: { lat: number; lng: number }
  logistics: {
    nearestPort: string
    distanceToPort: string
    roadAccess: string
    nearestCity: string
  }
  timeline: { year: string; label: string; description: string }[]
  cropDetails: { name: string; hectares: number; status: 'ready' | 'growing' | 'planted'; icon: string }[]
}

export const estatesData: Estate[] = [
  // ============================================================
  // ANAMBRA STATE — 3 ESTATES
  // ============================================================

  // 1. ENUGU AGIDI PLANTAIN ESTATE
  {
    slug: 'enugu-agidi-plantain',
    name: 'Enugu Agidi Plantain Estate',
    state: 'Anambra State',
    region: 'South East Nigeria',
    image: '/estate/plantain.jpg',
    gallery: [
      '/images/plantain1.jpg',
      '/images/plantain2.jpg',
      '/images/plantain3.jpg',
      '/images/plantain4.jpg',
    ],
    size: 180,
    planted: '2022',
    farmers: 62,
    crops: ['Plantain'],
    ready: true,
    featured: true,
    shortDescription:
      'Our Anambra plantain estate in Enugu Agidi — high-yield plantain groves supplying domestic and regional markets.',
    longDescription:
      'Enugu Agidi is the plantain heartland of our Anambra operations. Set on fertile South East Nigerian soil, the estate produces high-yield plantain varieties suited to both fresh-market consumption and processing. The groves are managed by partner farming families under our outgrower model, with on-site washing and packing ensuring uniform quality from field to buyer. Enugu Agidi anchors our plantain supply chain for the South East and beyond.',
    highlights: [
      'High-yield plantain varieties for fresh and processing markets',
      'On-site washing and packing operations',
      '62 partner farming families in the outgrower program',
      'Strategic South East Nigeria location',
      'Year-round staggered harvesting cycles',
    ],
    certifications: ['NEPC Export Certified', 'GlobalG.A.P. (in progress)'],
    soilType: 'Loamy sand (pH 6.2)',
    rainfall: '1,800 mm/year',
    elevation: '90 m above sea level',
    coordinates: { lat: 6.0167, lng: 6.9167 },
    logistics: {
      nearestPort: 'Onne Port, Rivers',
      distanceToPort: '180 km',
      roadAccess: 'Direct access via Enugu–Onitsha expressway',
      nearestCity: 'Enugu Agidi (2 km)',
    },
    timeline: [
      { year: '2022', label: 'Land acquired', description: '180 hectares cleared and prepared for plantain.' },
      { year: '2022', label: 'First planting', description: 'Plantain suckers planted across the estate.' },
      { year: '2024', label: 'First harvest cycle', description: 'Initial plantain harvest for regional markets.' },
      { year: '2025', label: 'Today', description: 'Full production with 62 partner families.' },
    ],
    cropDetails: [
      { name: 'Plantain', hectares: 180, status: 'ready', icon: 'plantain' },
    ],
  },

  // 2. ACHALLA PALM ESTATE
  {
    slug: 'achalla-palm',
    name: 'Achalla Palm Estate',
    state: 'Anambra State',
    region: 'South East Nigeria',
    image: '/estate/palm.jpg',
    gallery: [
      '/images/palm1.jpg',
      '/images/palm2.jpg',
      '/images/palm3.jpg',
      '/images/palm4.jpg',
      '/images/palm1.jpg',
    ],
    size: 220,
    planted: '2019',
    farmers: 84,
    crops: ['Oil Palm', 'Palm Kernel'],
    ready: true,
    featured: true,
    shortDescription:
      'Achalla is our Anambra oil palm estate — mature palms under continuous harvest, supporting 84 partner farming families.',
    longDescription:
      'Achalla is the flagship of our Anambra operations and one of our most productive palm estates. Planted in 2019, the palms are now at peak productivity, producing fresh fruit bunches year-round. The estate hosts kernel pressing capacity to add value close to the source, and the outgrower program supports 84 partner families across the surrounding communities. Achalla is a living demonstration of our South East palm model.',
    highlights: [
      'Mature palms at peak productivity',
      'On-site palm kernel pressing',
      '84 partner families in the outgrower program',
      'Year-round continuous harvest',
      'Anchor estate for South East palm operations',
    ],
    certifications: ['Rainforest Alliance', 'ISO 14001', 'Fairtrade'],
    soilType: 'Sandy loam (pH 5.9)',
    rainfall: '2,100 mm/year',
    elevation: '120 m above sea level',
    coordinates: { lat: 6.2833, lng: 6.8167 },
    logistics: {
      nearestPort: 'Onne Port, Rivers',
      distanceToPort: '210 km',
      roadAccess: 'Direct access via Onitsha–Enugu highway',
      nearestCity: 'Achalla (3 km)',
    },
    timeline: [
      { year: '2019', label: 'Land acquired', description: '220 hectares cleared and planted with Tenera palm seedlings.' },
      { year: '2022', label: 'First harvest', description: 'First commercial FFB harvest.' },
      { year: '2023', label: 'Processing facility', description: 'On-site kernel pressing commissioned.' },
      { year: '2025', label: 'Today', description: '220 hectares in full production. 84 partner families.' },
    ],
    cropDetails: [
      { name: 'Oil Palm', hectares: 195, status: 'ready', icon: 'palm' },
      { name: 'Palm Kernel', hectares: 25, status: 'ready', icon: 'kernel' },
    ],
  },

  // 3. EKWULOBIA YAM ESTATE
  {
    slug: 'ekwulobia-yam',
    name: 'Ekwulobia Yam Estate',
    state: 'Anambra State',
    region: 'South East Nigeria',
    image: '/images/yam1.jpg',
    gallery: [
      '/images/yam1.jpg',
      '/images/yam2.jpg',
      // '/images/yam1.jpg',
      // '/images/yam4.jpg',
    ],
    size: 150,
    planted: '2023',
    farmers: 48,
    crops: ['Yam'],
    ready: false,
    harvestYear: 2027,
    shortDescription:
      'Ekwulobia is our Anambra yam estate — 150 hectares of high-grade yam varieties for food and processing markets.',
    longDescription:
      'Ekwulobia is our dedicated yam estate, established on the fertile soils of Anambra State. Yam is a staple crop of enormous cultural and economic importance in the South East, and this estate is built around producing high-grade tubers for both food markets and processing. The estate is managed with partner families using traditional knowledge combined with improved agronomic practices. First full commercial harvest is projected for 2025.',
    highlights: [
      'High-grade yam varieties for food and processing',
      '48 partner families in the outgrower program',
      'Traditional knowledge combined with improved agronomy',
      'First commercial harvest projected 2025',
      'Strategic location in Anambra State',
    ],
    certifications: ['NEPC Export Certified'],
    soilType: 'Loamy soil (pH 6.0)',
    rainfall: '1,900 mm/year',
    elevation: '160 m above sea level',
    coordinates: { lat: 6.0167, lng: 7.0500 },
    logistics: {
      nearestPort: 'Onne Port, Rivers',
      distanceToPort: '200 km',
      roadAccess: 'Direct access via Ekwulobia–Onitsha road',
      nearestCity: 'Ekwulobia (2 km)',
    },
    timeline: [
      { year: '2023', label: 'Land acquired', description: '150 hectares cleared and prepared for yam.' },
      { year: '2023', label: 'First planting', description: 'Yam setts planted across the estate.' },
      { year: '2024', label: 'Crop development', description: 'First yam cycle development and care.' },
      { year: '2025', label: 'First harvest', description: 'First full commercial harvest projected.' },
    ],
    cropDetails: [
      { name: 'Yam', hectares: 150, status: 'growing', icon: 'yam' },
    ],
  },

  // ============================================================
  // EBONYI STATE — 2 ESTATES (Rice + Groundnut)
  // ============================================================

  // 4. EBONYI RICE ESTATE
  {
    slug: 'ebonyi-rice',
    name: 'Ebonyi Rice Estate',
    state: 'Ebonyi State',
    region: 'South East Nigeria',
    image: '/images/rice1.jpg',
    gallery: [
      '/images/rice1.jpg',
      // '/images/rice-gallery-2.jpg',
      // '/images/rice-gallery-3.jpg',
      // '/images/rice-gallery-4.jpg',
    ],
    size: 200,
    planted: '2022',
    farmers: 70,
    crops: ['Rice'],
    ready: true,
    featured: true,
    shortDescription:
      'Our Ebonyi rice estate — paddy rice production on fertile lowland fields, feeding Nigeria\'s rice value chain.',
    longDescription:
      'Ebonyi is known as one of Nigeria\'s rice-producing heartlands, and our estate here is a key part of that story. The rice estate operates on fertile lowland fields suited to paddy rice, with partner families managing plots under our outgrower model. The estate is equipped for paddy production and post-harvest handling, supplying both millers and direct buyers. Ebonyi rice is a flagship of our South East grain portfolio.',
    highlights: [
      'Fertile lowland paddy rice fields',
      '70 partner families in the outgrower program',
      'Post-harvest handling and storage capacity',
      'Supplies millers and direct buyers',
      'Flagship of our South East grain portfolio',
    ],
    certifications: ['NEPC Export Certified', 'GlobalG.A.P. (in progress)'],
    soilType: 'Alluvial clay loam (pH 6.1)',
    rainfall: '1,700 mm/year',
    elevation: '60 m above sea level',
    coordinates: { lat: 6.3167, lng: 8.1000 },
    logistics: {
      nearestPort: 'Onne Port, Rivers',
      distanceToPort: '230 km',
      roadAccess: 'Direct access via Abakaliki–Enugu highway',
      nearestCity: 'Abakaliki (12 km)',
    },
    timeline: [
      { year: '2022', label: 'Land acquired', description: '200 hectares prepared for paddy rice.' },
      { year: '2022', label: 'First planting', description: 'First rice cycle planted.' },
      { year: '2023', label: 'First harvest', description: 'First commercial paddy harvest.' },
      { year: '2025', label: 'Today', description: 'Full production with 70 partner families.' },
    ],
    cropDetails: [
      { name: 'Rice', hectares: 200, status: 'ready', icon: 'rice' },
    ],
  },

  // 5. EBONYI GROUNDNUT ESTATE
  {
    slug: 'ebonyi-groundnut',
    name: 'Ebonyi Groundnut Estate',
    state: 'Ebonyi State',
    region: 'South East Nigeria',
    image: '/images/groundnut1.jpg',
    gallery: [
      '/images/groundnut1.jpg',
      // '/images/groundnut2.jpg',
      // '/images/groundnut3.jpg',
    ],
    size: 140,
    planted: '2023',
    farmers: 45,
    crops: ['Groundnut'],
    ready: false,
    harvestYear: 2025,
    shortDescription:
      'Ebonyi groundnut estate — 140 hectares of high-oil groundnut varieties for food and oil processing markets.',
    longDescription:
      'Our Ebonyi groundnut estate is dedicated to high-oil groundnut varieties suited to both food markets and oil processing. Groundnut is a valuable rotation crop that supports soil health, and the estate integrates with our Ebonyi rice operations to diversify the state\'s portfolio. Partner families manage plots under the outgrower model, and first full commercial harvest is projected for 2025.',
    highlights: [
      'High-oil groundnut varieties for food and processing',
      '45 partner families in the outgrower program',
      'Supports soil health and rotation',
      'Diversifies Ebonyi state crop portfolio',
      'First commercial harvest projected 2025',
    ],
    certifications: ['NEPC Export Certified'],
    soilType: 'Sandy loam (pH 6.3)',
    rainfall: '1,600 mm/year',
    elevation: '75 m above sea level',
    coordinates: { lat: 6.2667, lng: 8.0667 },
    logistics: {
      nearestPort: 'Onne Port, Rivers',
      distanceToPort: '235 km',
      roadAccess: 'Direct access via Abakaliki–Enugu highway',
      nearestCity: 'Abakaliki (15 km)',
    },
    timeline: [
      { year: '2023', label: 'Land acquired', description: '140 hectares prepared for groundnut.' },
      { year: '2023', label: 'First planting', description: 'High-oil groundnut varieties planted.' },
      { year: '2024', label: 'Crop care', description: 'First groundnut cycle development and care.' },
      { year: '2025', label: 'First harvest', description: 'First full commercial harvest projected.' },
    ],
    cropDetails: [
      { name: 'Groundnut', hectares: 140, status: 'growing', icon: 'groundnut' },
    ],
  },

  // ============================================================
  // RIVERS STATE — 1 ESTATE (Bell Pepper)
  // ============================================================

  // 6. RIVERS BELL PEPPER ESTATE
  {
    slug: 'rivers-bell-pepper',
    name: 'Rivers Bell Pepper Estate',
    state: 'Rivers State',
    region: 'South South Nigeria',
    image: '/images/bellpepper1.jpg',
    gallery: [
      '/images/bellpepper1.jpg',
      // '/images/bellpepper2.jpg',
      // '/images/bellpepper3.jpg',
      // '/images/bellpepper4.jpg',
    ],
    size: 90,
    planted: '2022',
    farmers: 38,
    crops: ['Bell Pepper'],
    ready: true,
    featured: true,
    shortDescription:
      'Our Rivers bell pepper estate — 90 hectares of high-quality bell pepper for fresh markets and processing buyers.',
    longDescription:
      'Rivers State is home to our dedicated bell pepper estate — 90 hectares of high-quality bell pepper varieties grown for fresh markets and processing buyers. The estate benefits from the humid South South climate and is managed with modern greenhouse-assisted techniques to ensure uniform fruit quality and year-round supply. 38 partner families are engaged in the outgrower program, and the estate is positioned close to Port Harcourt for efficient distribution.',
    highlights: [
      'High-quality bell pepper for fresh and processing markets',
      'Greenhouse-assisted cultivation for uniform quality',
      '38 partner families in the outgrower program',
      'Close to Port Harcourt distribution corridors',
      'Year-round supply capability',
    ],
    certifications: ['GlobalG.A.P. (in progress)', 'NEPC Export Certified'],
    soilType: 'Sandy loam (pH 6.4)',
    rainfall: '2,400 mm/year',
    elevation: '20 m above sea level',
    coordinates: { lat: 4.8156, lng: 7.0498 },
    logistics: {
      nearestPort: 'Onne Port, Rivers',
      distanceToPort: '35 km',
      roadAccess: 'Direct access via Port Harcourt–Aba expressway',
      nearestCity: 'Port Harcourt (25 km)',
    },
    timeline: [
      { year: '2022', label: 'Land acquired', description: '90 hectares prepared for bell pepper.' },
      { year: '2022', label: 'First planting', description: 'Bell pepper seedlings planted under assisted cultivation.' },
      { year: '2023', label: 'First harvest', description: 'First commercial bell pepper harvest.' },
      { year: '2025', label: 'Today', description: 'Full production with 38 partner families.' },
    ],
    cropDetails: [
      { name: 'Bell Pepper', hectares: 90, status: 'ready', icon: 'pepper' },
    ],
  },

  // ============================================================
  // LAGOS STATE — 1 FACILITY (General Distribution Office / Store)
  // ============================================================

  // 7. LAGOS DISTRIBUTION OFFICE
  {
    slug: 'lagos-distribution',
    name: 'Lagos General Distribution Office',
    state: 'Lagos State',
    region: 'South West Nigeria',
    image: '/images/distribution1.jpg',
    gallery: [
      '/images/distribution1.jpg',
      // '/images/distribution2.jpg',
      // '/images/distribution3.jpg',
    ],
    size: 5,
    planted: '2021',
    farmers: 25,
    crops: ['Distribution', 'Storage'],
    ready: true,
    featured: true,
    shortDescription:
      'Our Lagos general distribution office and central store — the logistics hub for all estates, serving national and export markets.',
    longDescription:
      'The Lagos office is the operational nerve centre of our agricultural network. It functions as the general distribution office and central store, receiving produce from all our estates across Anambra, Ebonyi, and Rivers states and coordinating onward distribution to national markets and export buyers. The facility handles aggregation, quality control, cold storage, and order fulfillment, ensuring that produce moves efficiently from farm to buyer. It is the commercial and logistics anchor of the entire operation.',
    highlights: [
      'Central distribution and storage hub',
      'Aggregation point for all estate produce',
      'Quality control and cold storage capacity',
      'Order fulfillment and export coordination',
      'Strategic Lagos location near ports and markets',
    ],
    certifications: ['NEPC Export Certified', 'ISO 9001 (in progress)'],
    soilType: 'N/A (distribution facility)',
    rainfall: 'N/A',
    elevation: '15 m above sea level',
    coordinates: { lat: 6.5244, lng: 3.3792 },
    logistics: {
      nearestPort: 'Apapa Port, Lagos',
      distanceToPort: '15 km',
      roadAccess: 'Direct access via Lagos mainland road network',
      nearestCity: 'Lagos (central)',
    },
    timeline: [
      { year: '2021', label: 'Facility established', description: 'Lagos distribution office and central store opened.' },
      { year: '2023', label: 'Expansion', description: 'Cold storage and quality control capacity expanded.' },
      { year: '2025', label: 'Today', description: 'Serving all estates as central logistics hub.' },
    ],
    cropDetails: [
      { name: 'Distribution & Storage', hectares: 5, status: 'ready', icon: 'warehouse' },
    ],
  },
]

/* -------- Helper: get estate by slug -------- */
export const getEstateBySlug = (slug: string) =>
  estatesData.find((e) => e.slug === slug)

/* -------- Helper: get estates by crop -------- */
export const getEstatesByCrop = (crop: string) =>
  estatesData.filter((e) =>
    e.crops.some((c) => c.toLowerCase().includes(crop.toLowerCase()))
  )

/* -------- Helper: get estates by state -------- */
export const getEstatesByState = (state: string) =>
  estatesData.filter((e) => e.state.toLowerCase() === state.toLowerCase())

/* -------- Helper: get all states represented -------- */
export const getStates = () => [...new Set(estatesData.map((e) => e.state))]