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
    {
      slug: 'okitipupa-palm-estate',
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
        'Okitipupa is where GreenField began. Planted in 2018 on rolling red-earth land that had been idle for two decades, it has become our most productive estate and a living proof-of-concept for the model we now replicate across Nigeria. Under the care of Dr. Ngozi Okafor and resident agronomist Tunde Bakare, the estate produces an average of 18 tonnes of fresh fruit bunches per hectare annually — well above the West African average. Harvesting runs year-round, and the estate hosts our first on-site kernel pressing facility, allowing us to add value close to the source.',
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
  
    // ... 5 more estates (same structure)
  ]