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
  // 1. OKITIPUPA PALM ESTATE
  // ============================================================
  {
    slug: 'palm',
    name: 'Okitipupa Palm Estate',
    state: 'Ondo State',
    region: 'South West Nigeria',
    image: '/estate/palm.jpg',
    gallery: [
      '/images/palm-gallery-1.jpg',
      '/images/palm-gallery-2.jpg',
      '/images/palm-gallery-3.jpg',
      '/images/palm-gallery-4.jpg',
      '/images/palm-gallery-5.jpg',
      '/images/palm-gallery-6.jpg',
    ],
    size: 520,
    planted: '2018',
    farmers: 145,
    crops: ['Oil Palm', 'Palm Kernel'],
    ready: true,
    featured: true,
    shortDescription:
      'Our flagship estate — 520 hectares of mature oil palm under continuous harvest, supporting 145 farming families.',
    longDescription:
      'Okitipupa is where Chrismek began. Planted in 2018 on rolling red-earth land that had been idle for two decades, it has become our most productive estate and a living proof-of-concept for the model we now replicate across Nigeria. Under the care of Dr. Ngozi Okafor and resident agronomist Tunde Bakare, the estate produces an average of 18 tonnes of fresh fruit bunches per hectare annually — well above the West African average. Harvesting runs year-round, and the estate hosts our first on-site kernel pressing facility, allowing us to add value close to the source.',
    highlights: [
      'Mature 7-year-old palms at peak productivity',
      'On-site kernel pressing facility',
      'Rainforest Alliance certified since 2022',
      '145 smallholder families in the outgrower program',
      '12 km from the Okitipupa–Lagos expressway',
    ],
    certifications: ['Rainforest Alliance', 'ISO 14001', 'Fairtrade'],
    soilType: 'Sandy loam (pH 5.8)',
    rainfall: '2,400 mm/year',
    elevation: '70 m above sea level',
    coordinates: { lat: 6.5555, lng: 4.7167 },
    logistics: {
      nearestPort: 'Apapa Port, Lagos',
      distanceToPort: '270 km',
      roadAccess: 'Direct access via A121 expressway',
      nearestCity: 'Okitipupa (8 km)',
    },
    timeline: [
      { year: '2018', label: 'Land acquired', description: '40 hectares cleared and planted with certified Tenera palm seedlings.' },
      { year: '2019', label: 'First expansion', description: 'Additional 200 hectares acquired and planted.' },
      { year: '2021', label: 'First harvest', description: 'First commercial yield — 380 tonnes of FFB harvested.' },
      { year: '2022', label: 'Certification', description: 'Rainforest Alliance and ISO 14001 certifications earned.' },
      { year: '2023', label: 'Processing facility', description: 'On-site kernel pressing facility commissioned.' },
      { year: '2025', label: 'Today', description: '520 hectares in full production. 145 partner families.' },
    ],
    cropDetails: [
      { name: 'Oil Palm', hectares: 460, status: 'ready', icon: 'palm' },
      { name: 'Palm Kernel', hectares: 60, status: 'ready', icon: 'kernel' },
    ],
  },

  // ============================================================
  // 2. IKOM COCOA FARM
  // ============================================================
  {
    slug: 'cocoa',
    name: 'Ikom Cocoa Farm',
    state: 'Cross River',
    region: 'South East Nigeria',
    image: '/estate/cocoa.jpg',
    gallery: [
      '/images/cocoa-gallery-1.jpg',
      '/images/cocoa-gallery-2.jpg',
      '/images/cocoa-gallery-3.jpg',
      '/images/cocoa-gallery-4.jpg',
    ],
    size: 180,
    planted: '2021',
    farmers: 62,
    crops: ['Cocoa', 'Plantain'],
    ready: false,
    harvestYear: 2027,
    shortDescription:
      '180 hectares of young cocoa trees reaching maturity, with plantain as an intercrop supporting the outgrower families.',
    longDescription:
      'Ikom sits on the fertile slopes of Cross River State — Nigeria\'s traditional cocoa belt. Planted in 2021 with hybrid cocoa varieties selected for disease resistance and premium flavor profile, the estate is entering its first significant harvest window in 2027. Until then, plantain intercropping provides shade, retains soil moisture, and generates interim income for the 62 partner families managing the plots. The estate operates as our primary cocoa export hub, with post-harvest fermentation and drying facilities nearing completion.',
    highlights: [
      'Hybrid cocoa varieties selected for premium flavor',
      'Plantain intercropping for shade and interim income',
      'Fermentation and drying facilities under construction',
      'Located in Nigeria\'s traditional cocoa belt',
      '62 partner families in the outgrower program',
    ],
    certifications: ['Rainforest Alliance', 'Fairtrade', 'NEPC Export Certified'],
    soilType: 'Deep red laterite (pH 6.1)',
    rainfall: '2,900 mm/year',
    elevation: '120 m above sea level',
    coordinates: { lat: 5.9613, lng: 8.7207 },
    logistics: {
      nearestPort: 'Calabar Port, Cross River',
      distanceToPort: '180 km',
      roadAccess: 'Direct access via A4 highway',
      nearestCity: 'Ikom (4 km)',
    },
    timeline: [
      { year: '2021', label: 'Land acquired', description: '180 hectares cleared on former cocoa land.' },
      { year: '2021', label: 'First planting', description: 'Hybrid cocoa seedlings planted with plantain intercrop.' },
      { year: '2023', label: 'First plantain harvest', description: 'Interim income flow begins for partner families.' },
      { year: '2025', label: 'Facility build', description: 'Fermentation and drying facility construction begins.' },
      { year: '2027', label: 'Cocoa harvest', description: 'First commercial cocoa harvest projected.' },
    ],
    cropDetails: [
      { name: 'Cocoa', hectares: 140, status: 'growing', icon: 'cocoa' },
      { name: 'Plantain', hectares: 40, status: 'ready', icon: 'plantain' },
    ],
  },

  // ============================================================
  // 3. ABEOKUTA PLANTAIN BELT
  // ============================================================
  {
    slug: 'plantain',
    name: 'Abeokuta Plantain Belt',
    state: 'Ogun State',
    region: 'South West Nigeria',
    image: '/estate/plantain.jpg',
    gallery: [
      '/images/plantain-gallery-1.jpg',
      '/images/plantain-gallery-2.jpg',
      '/images/plantain-gallery-3.jpg',
      '/images/plantain-gallery-4.jpg',
    ],
    size: 240,
    planted: '2022',
    farmers: 78,
    crops: ['Plantain', 'Cassava'],
    ready: false,
    harvestYear: 2026,
    shortDescription:
      '240 hectares of plantain groves with cassava as a rotational crop, feeding both domestic and export plantain markets.',
    longDescription:
      'Abeokuta is our plantain heartland — 240 hectares of high-yielding plantain varieties, interplanted with cassava to maximize soil health and diversify output. The estate was planted in 2022 and enters its first full harvest cycle in 2026. Partner families here manage an average of 3 hectares each, producing for both regional markets and export-processing buyers. Our on-site washing and packing facility ensures uniform quality from field to container.',
    highlights: [
      'High-yield plantain varieties selected for export',
      'Cassava rotational cropping for soil regeneration',
      'On-site washing and packing facility',
      '78 partner families on 3-hectare average plots',
      'Located 100 km from Lagos export hub',
    ],
    certifications: ['NEPC Export Certified', 'GlobalG.A.P. (in progress)'],
    soilType: 'Loamy sand (pH 6.3)',
    rainfall: '1,400 mm/year',
    elevation: '85 m above sea level',
    coordinates: { lat: 7.1557, lng: 3.3451 },
    logistics: {
      nearestPort: 'Apapa Port, Lagos',
      distanceToPort: '100 km',
      roadAccess: 'Direct access via A5 highway',
      nearestCity: 'Abeokuta (12 km)',
    },
    timeline: [
      { year: '2022', label: 'Land acquired', description: '240 hectares cleared and prepared.' },
      { year: '2022', label: 'First planting', description: 'Plantain suckers planted with cassava intercrop.' },
      { year: '2024', label: 'First plantain cycle', description: 'Initial plantain harvest for regional markets.' },
      { year: '2025', label: 'Packing facility', description: 'Washing and packing facility commissioned.' },
      { year: '2026', label: 'Full harvest', description: 'First full commercial scale harvest projected.' },
    ],
    cropDetails: [
      { name: 'Plantain', hectares: 180, status: 'growing', icon: 'plantain' },
      { name: 'Cassava', hectares: 60, status: 'ready', icon: 'cassava' },
    ],
  },

  // ============================================================
  // 4. EPE MIXED FARM
  // ============================================================
  {
    slug: 'epe-mixed-farm',
    name: 'Epe Mixed Farm',
    state: 'Lagos State',
    region: 'South West Nigeria',
    image: '/estate/mixed.jpg',
    gallery: [
      '/images/mixed-gallery-1.jpg',
      '/images/mixed-gallery-2.jpg',
      '/images/mixed-gallery-3.jpg',
    ],
    size: 95,
    planted: '2020',
    farmers: 41,
    crops: ['Vegetables', 'Maize'],
    ready: true,
    shortDescription:
      '95 hectares of diversified vegetable and maize production supplying Lagos\'s urban markets year-round.',
    longDescription:
      'Epe is our commercial-garden estate — a mix of leafy vegetables, tomatoes, peppers, and maize, all grown under a rapid-rotation system that keeps Lagos\'s urban markets supplied throughout the year. Located on the Lekki peninsula just 40 km from Lagos Island, it is our closest estate to a major consumer market. The estate serves as a testing ground for new varieties and organic techniques before we scale them to our larger estates.',
    highlights: [
      'Year-round production for Lagos urban markets',
      'Rapid-rotation vegetable systems',
      'Trial ground for new varieties and techniques',
      '41 partner families managing smallholder plots',
      '40 km from Lagos Island',
    ],
    certifications: ['GlobalG.A.P. (in progress)', 'Organic (partial)'],
    soilType: 'Sandy loam (pH 6.5)',
    rainfall: '1,600 mm/year',
    elevation: '15 m above sea level',
    coordinates: { lat: 6.5844, lng: 3.9809 },
    logistics: {
      nearestPort: 'Apapa Port, Lagos',
      distanceToPort: '65 km',
      roadAccess: 'Direct access via Lekki-Epe expressway',
      nearestCity: 'Epe (3 km)',
    },
    timeline: [
      { year: '2020', label: 'Land acquired', description: '95 hectares acquired on the Lekki peninsula.' },
      { year: '2020', label: 'First planting', description: 'Mixed vegetables planted under rapid-rotation system.' },
      { year: '2022', label: 'Urban supply', description: 'Regular supply contracts established with Lagos markets.' },
      { year: '2024', label: 'Trial expansion', description: 'New variety trials and organic methods introduced.' },
    ],
    cropDetails: [
      { name: 'Vegetables', hectares: 60, status: 'ready', icon: 'vegetables' },
      { name: 'Maize', hectares: 35, status: 'ready', icon: 'maize' },
    ],
  },

  // ============================================================
  // 5. UYO RUBBER ESTATE
  // ============================================================
  {
    slug: 'rubber',
    name: 'Uyo Rubber Estate',
    state: 'Akwa Ibom',
    region: 'South South Nigeria',
    image: '/estate/rubber.jpg',
    gallery: [
      '/images/rubber-gallery-1.jpg',
      '/images/rubber-gallery-2.jpg',
      '/images/rubber-gallery-3.jpg',
      '/images/rubber-gallery-4.jpg',
    ],
    size: 165,
    planted: '2019',
    farmers: 54,
    crops: ['Rubber', 'Palm'],
    ready: false,
    harvestYear: 2028,
    shortDescription:
      '165 hectares of Hevea rubber trees entering tapping maturity, alongside a secondary palm plot for diversified income.',
    longDescription:
      'Uyo is our rubber estate — 165 hectares of Hevea brasiliensis planted in 2019 on rich Akwa Ibom soil. Rubber trees require 6–7 years of growth before tapping can begin, and we anticipate our first commercial latex harvest in 2028. Until then, a secondary palm plot provides interim income. The estate is preparing for the addition of on-site latex processing, which will allow us to produce high-ammonia concentrate (HA 60%) directly at the source.',
    highlights: [
      'Hevea brasiliensis trees entering tapping maturity',
      'Planted 2019, first latex harvest projected 2028',
      'Secondary palm plot for interim income',
      'On-site latex processing facility planned',
      '54 partner families on average 3-hectare plots',
    ],
    certifications: ['NEPC Export Certified'],
    soilType: 'Deep clay loam (pH 5.5)',
    rainfall: '2,600 mm/year',
    elevation: '60 m above sea level',
    coordinates: { lat: 5.0378, lng: 7.9128 },
    logistics: {
      nearestPort: 'Apapa Port, Lagos',
      distanceToPort: '650 km',
      roadAccess: 'Direct access via A342 highway',
      nearestCity: 'Uyo (18 km)',
    },
    timeline: [
      { year: '2019', label: 'Land acquired', description: '165 hectares cleared and prepared for rubber.' },
      { year: '2019', label: 'First planting', description: 'Hevea brasiliensis seedlings planted.' },
      { year: '2023', label: 'Palm intercrop', description: 'Secondary palm plot planted for interim income.' },
      { year: '2026', label: 'Facility planning', description: 'On-site latex processing facility design begins.' },
      { year: '2028', label: 'First tapping', description: 'First commercial latex harvest projected.' },
    ],
    cropDetails: [
      { name: 'Rubber', hectares: 140, status: 'growing', icon: 'rubber' },
      { name: 'Palm', hectares: 25, status: 'ready', icon: 'palm' },
    ],
  },

  // ============================================================
  // 6. BADAGRY CASSAVA FIELDS
  // ============================================================
  {
    slug: 'badagry-cassava-fields',
    name: 'Badagry Cassava Fields',
    state: 'Lagos State',
    region: 'South West Nigeria',
    image: '/estate/cassava.jpg',
    gallery: [
      '/images/cassava-gallery-1.jpg',
      '/images/cassava-gallery-2.jpg',
      '/images/cassava-gallery-3.jpg',
    ],
    size: 130,
    planted: '2023',
    farmers: 36,
    crops: ['Cassava'],
    ready: false,
    harvestYear: 2026,
    shortDescription:
      '130 hectares of high-starch cassava varieties for industrial starch and food-grade flour production.',
    longDescription:
      'Badagry is our newest estate — 130 hectares planted in 2023 with high-starch cassava varieties selected for industrial processing. Cassava matures in 10–14 months, putting the first commercial harvest in early 2026. The estate is being developed with a strong focus on processing: on-site starch and flour production will allow us to capture the full value chain from root to finished product. We partner with 36 local families on outgrower plots adjacent to the main estate.',
    highlights: [
      'High-starch cassava varieties for industrial use',
      'First harvest projected early 2026',
      'On-site starch and flour processing planned',
      '36 partner families in the outgrower program',
      '35 km from Lagos export facilities',
    ],
    certifications: ['NEPC Export Certified'],
    soilType: 'Sandy loam (pH 6.0)',
    rainfall: '1,300 mm/year',
    elevation: '20 m above sea level',
    coordinates: { lat: 6.4167, lng: 2.8833 },
    logistics: {
      nearestPort: 'Apapa Port, Lagos',
      distanceToPort: '35 km',
      roadAccess: 'Direct access via Badagry expressway',
      nearestCity: 'Badagry (6 km)',
    },
    timeline: [
      { year: '2023', label: 'Land acquired', description: '130 hectares cleared and prepared.' },
      { year: '2023', label: 'First planting', description: 'High-starch cassava varieties planted.' },
      { year: '2024', label: 'Processing plan', description: 'On-site starch facility design approved.' },
      { year: '2026', label: 'First harvest', description: 'First commercial cassava harvest projected.' },
    ],
    cropDetails: [
      { name: 'Cassava', hectares: 130, status: 'growing', icon: 'cassava' },
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