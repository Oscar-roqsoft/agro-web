export interface Product {
    slug: string
    name: string
    category: string
    crop: string
    grade?: string
    status: 'ready' | 'seasonal' | 'preorder'
    shortDescription: string
    longDescription: string
  
    // Images
    image: string
    hero: string
    gallery: string[]
  
    // Commercial
    moq: string
    moqTonnes: number
    leadTime: string
    priceFrom: string
    priceUnit: string
    pricingTiers: { qty: string; price: string; note?: string }[]
  
    // Specs
    specs: { label: string; value: string }[]
  
    // Packaging
    packaging: { label: string; description: string; icon: string }[]
  
    // Quality
    certifications: string[]
    labParams: { label: string; value: string }[]
  
    // Shipping
    shipping: {
      origin: string
      port: string
      containerCapacity: string
      sampleAvailable: boolean
      sampleLeadTime: string
    }
  
    // Origin
    origin: string
    estate: { name: string; slug: string }
  
    highlights: string[]
    applications: string[]
  
    featured?: boolean
  }
  
  export const productsData: Product[] = [
    {
      slug: 'crude-palm-oil',
      name: 'Crude Palm Oil',
      category: 'Palm',
      crop: 'Palm',
      grade: 'Grade A',
      status: 'ready',
      shortDescription: 'Cold-pressed, high FFA content for industrial and food processing.',
      longDescription:
        'Our crude palm oil is pressed from fresh fruit bunches harvested at peak ripeness on our Okitipupa estate in Ondo State. The oil is cold-pressed within 24 hours of harvest to preserve natural color, aroma, and nutritional profile — with no chemical additives or refining.',
  
      image: '/product/product-hero.png',
      hero: '/product/product-hero.png',
      gallery: [
        '/product/product-hero.png',
        '/images/farm1.jpg',
        '/images/farm3.jpg',
        '/images/farm4.jpg',
      ],
  
      moq: '5 tonnes',
      moqTonnes: 5,
      leadTime: '7–14 days',
      priceFrom: '$1,050',
      priceUnit: '/ tonne',
      pricingTiers: [
        { qty: '5–19 tonnes', price: '$1,050', note: 'MOQ' },
        { qty: '20–99 tonnes', price: '$1,010', note: 'Save 4%' },
        { qty: '100+ tonnes', price: '$960', note: 'Save 9%' },
        { qty: 'Full container (FCL)', price: 'On request', note: 'Best rate' },
      ],
  
      specs: [
        { label: 'Free Fatty Acid (FFA)', value: '3.5–5.0%' },
        { label: 'Moisture & Impurities', value: '< 0.5%' },
        { label: 'Iodine Value', value: '50–55' },
        { label: 'Melting Point', value: '33–39 °C' },
        { label: 'Color', value: 'Red-orange, natural' },
        { label: 'Shelf Life', value: '12 months (sealed)' },
        { label: 'Origin', value: 'Ondo State, Nigeria' },
        { label: 'Harvest Method', value: 'Hand-picked, cold-pressed' },
      ],
  
      packaging: [
        { label: 'Steel Drums', description: '190 kg net, food-grade lined', icon: 'drum' },
        { label: 'IBC Totes', description: '1,000 kg food-grade, single-trip', icon: 'tote' },
        { label: 'Flexitanks', description: '24 tonnes per 20ft container', icon: 'tank' },
        { label: 'Custom', description: 'Private label & customer packing', icon: 'custom' },
      ],
  
      certifications: ['Rainforest Alliance', 'ISO 14001', 'NEPC Export Certified', 'SON Approved'],
  
      labParams: [
        { label: 'FFA', value: '4.2%' },
        { label: 'Moisture', value: '0.32%' },
        { label: 'Impurities', value: '0.18%' },
        { label: 'Density', value: '0.912 g/cm³' },
      ],
  
      shipping: {
        origin: 'Ondo State, Nigeria',
        port: 'Apapa Port, Lagos (270 km)',
        containerCapacity: '24 tonnes per 20ft flexitank',
        sampleAvailable: true,
        sampleLeadTime: '3–5 days by courier',
      },
  
      origin: 'Ondo State',
      estate: { name: 'Okitipupa Palm Estate', slug: 'okitipupa-palm-estate' },
  
      highlights: [
        'Pressed within 24 hours of harvest',
        'No chemical refining or additives',
        'Available in drums, totes, or flexitanks',
        'Batch-traceable to specific estate plots',
        'Lab report included with every shipment',
      ],
  
      applications: [
        'Food manufacturing',
        'Cosmetics & soap',
        'Biofuel feedstock',
        'Animal feed',
        'Industrial lubricants',
      ],
  
      featured: true,
    },
  
    // ============ PALM KERNEL ============
    {
      slug: 'palm-kernel',
      name: 'Palm Kernel',
      category: 'Palm',
      crop: 'Palm',
      grade: 'Premium',
      status: 'ready',
      shortDescription: 'Sun-dried, clean kernels suitable for crushing and extraction.',
      longDescription:
        'Our palm kernels are mechanically extracted from fresh fruit bunches harvested on our Okitipupa estate. Each batch is sun-dried to optimal moisture content, cleaned of shell fragments, and graded for oil extraction yield. Ideal for palm kernel oil (PKO) producers and animal feed manufacturers.',
  
      image: '/images/farm2.jpg',
      hero: '/images/farm2.jpg',
      gallery: ['/images/farm2.jpg', '/images/farm3.jpg', '/images/farm4.jpg'],
  
      moq: '10 tonnes',
      moqTonnes: 10,
      leadTime: '10–14 days',
      priceFrom: '$780',
      priceUnit: '/ tonne',
      pricingTiers: [
        { qty: '10–49 tonnes', price: '$780', note: 'MOQ' },
        { qty: '50–199 tonnes', price: '$750', note: 'Save 4%' },
        { qty: '200+ tonnes', price: '$710', note: 'Save 9%' },
        { qty: 'Full container (FCL)', price: 'On request', note: 'Best rate' },
      ],
  
      specs: [
        { label: 'Moisture Content', value: '< 7%' },
        { label: 'Foreign Matter', value: '< 2%' },
        { label: 'Oil Content', value: '48–52%' },
        { label: 'Broken Kernels', value: '< 5%' },
        { label: 'Shelf Life', value: '18 months' },
        { label: 'Origin', value: 'Ondo State, Nigeria' },
      ],
  
      packaging: [
        { label: 'Jute Bags', description: '50 kg, breathable natural fiber', icon: 'bag' },
        { label: 'PP Bags', description: '50 kg, moisture-resistant', icon: 'bag' },
        { label: 'Bulk (Loos)', description: 'In-container loading', icon: 'tank' },
        { label: 'Custom', description: 'Private label packing', icon: 'custom' },
      ],
  
      certifications: ['Rainforest Alliance', 'NEPC Export Certified'],
  
      labParams: [
        { label: 'Moisture', value: '6.2%' },
        { label: 'Foreign Matter', value: '1.1%' },
        { label: 'Oil Content', value: '50.3%' },
      ],
  
      shipping: {
        origin: 'Ondo State, Nigeria',
        port: 'Apapa Port, Lagos (270 km)',
        containerCapacity: '18 tonnes per 20ft container',
        sampleAvailable: true,
        sampleLeadTime: '3–5 days by courier',
      },
  
      origin: 'Ondo State',
      estate: { name: 'Okitipupa Palm Estate', slug: 'okitipupa-palm-estate' },
  
      highlights: [
        'Cleaned and graded for extraction',
        'Low moisture for extended shelf life',
        'Consistent oil yield',
        'Batch-traceable',
      ],
  
      applications: ['Palm kernel oil production', 'Animal feed', 'Cosmetics', 'Soap manufacturing'],
    },
  
    // ============ COCOA BEANS ============
    {
      slug: 'fermented-cocoa-beans',
      name: 'Fermented Cocoa Beans',
      category: 'Cocoa',
      crop: 'Cocoa',
      grade: 'Grade 1',
      status: 'preorder',
      shortDescription: 'Fully fermented, sun-dried beans with consistent moisture content.',
      longDescription:
        'Our cocoa beans are harvested from mature trees on our Ikom farm in Cross River State, fermented in wooden boxes for 6–7 days, and sun-dried to optimal moisture. The result is a rich, well-developed flavor profile prized by chocolate makers in Europe and North America. Every batch is graded to international Grade 1 standards.',
  
      image: '/images/farm4.jpg',
      hero: '/images/farm4.jpg',
      gallery: ['/images/farm4.jpg', '/images/farm1.jpg', '/images/farm3.jpg'],
  
      moq: '20 tonnes',
      moqTonnes: 20,
      leadTime: '60–90 days',
      priceFrom: '$3,200',
      priceUnit: '/ tonne',
      pricingTiers: [
        { qty: '20–99 tonnes', price: '$3,200', note: 'MOQ' },
        { qty: '100–299 tonnes', price: '$3,080', note: 'Save 4%' },
        { qty: '300+ tonnes', price: '$2,900', note: 'Save 9%' },
        { qty: 'Full container (FCL)', price: 'On request', note: 'Best rate' },
      ],
  
      specs: [
        { label: 'Moisture Content', value: '< 7.5%' },
        { label: 'Bean Count', value: '95–105 per 100g' },
        { label: 'Moldy Beans', value: '< 3%' },
        { label: 'Slaty Beans', value: '< 3%' },
        { label: 'Foreign Matter', value: '< 1%' },
        { label: 'Fermentation', value: '6–7 days' },
        { label: 'Origin', value: 'Cross River, Nigeria' },
      ],
  
      packaging: [
        { label: 'Jute Bags', description: '60 kg, export-grade', icon: 'bag' },
        { label: 'Big Bags', description: '1 tonne FIBC super sacks', icon: 'tank' },
        { label: 'Custom', description: 'Buyer-branded bags available', icon: 'custom' },
      ],
  
      certifications: ['Rainforest Alliance', 'Fairtrade', 'NEPC Export Certified', 'SON Approved'],
  
      labParams: [
        { label: 'Moisture', value: '6.8%' },
        { label: 'Bean Count', value: '98/100g' },
        { label: 'Moldy', value: '1.2%' },
      ],
  
      shipping: {
        origin: 'Cross River, Nigeria',
        port: 'Apapa Port, Lagos (750 km)',
        containerCapacity: '24 tonnes per 20ft container',
        sampleAvailable: true,
        sampleLeadTime: '5–7 days by courier',
      },
  
      origin: 'Cross River',
      estate: { name: 'Ikom Cocoa Farm', slug: 'ikom-cocoa-farm' },
  
      highlights: [
        'Fully fermented for premium flavor',
        'Grade 1 certified by independent assessors',
        'Direct trade with Fairtrade pricing',
        'Full traceability to specific plots',
      ],
  
      applications: ['Chocolate manufacturing', 'Cocoa powder', 'Confectionery', 'Beverages'],
    },
  
    // ============ COCOA NIBS ============
    {
      slug: 'cocoa-nibs',
      name: 'Roasted Cocoa Nibs',
      category: 'Cocoa',
      crop: 'Cocoa',
      grade: 'Food Grade',
      status: 'seasonal',
      shortDescription: 'Roasted and cracked beans, ready for chocolate and beverage production.',
      longDescription:
        'Our cocoa nibs are produced by roasting our fermented cocoa beans and cracking them into small, uniform pieces. The nibs retain full chocolate flavor and are ideal for craft chocolate makers, bakeries, and premium beverage producers. Available in various screen sizes.',
  
      image: '/images/farm3.jpg',
      hero: '/images/farm3.jpg',
      gallery: ['/images/farm3.jpg', '/images/farm4.jpg'],
  
      moq: '5 tonnes',
      moqTonnes: 5,
      leadTime: '30–45 days',
      priceFrom: '$4,500',
      priceUnit: '/ tonne',
      pricingTiers: [
        { qty: '5–19 tonnes', price: '$4,500', note: 'MOQ' },
        { qty: '20–99 tonnes', price: '$4,320', note: 'Save 4%' },
        { qty: '100+ tonnes', price: '$4,100', note: 'Save 9%' },
      ],
  
      specs: [
        { label: 'Moisture Content', value: '< 5%' },
        { label: 'Fat Content', value: '50–54%' },
        { label: 'Screen Size', value: '4–8 mm' },
        { label: 'Shelf Life', value: '12 months' },
        { label: 'Origin', value: 'Cross River, Nigeria' },
      ],
  
      packaging: [
        { label: 'Vacuum Bags', description: '25 kg, foil-lined', icon: 'bag' },
        { label: 'Cartons', description: '10 kg food-grade cartons', icon: 'box' },
        { label: 'Custom', description: 'Private label packing', icon: 'custom' },
      ],
  
      certifications: ['Rainforest Alliance', 'NEPC Export Certified', 'SON Approved'],
  
      labParams: [
        { label: 'Moisture', value: '3.9%' },
        { label: 'Fat Content', value: '52.1%' },
      ],
  
      shipping: {
        origin: 'Cross River, Nigeria',
        port: 'Apapa Port, Lagos (750 km)',
        containerCapacity: '18 tonnes per 20ft container',
        sampleAvailable: true,
        sampleLeadTime: '5–7 days by courier',
      },
  
      origin: 'Cross River',
      estate: { name: 'Ikom Cocoa Farm', slug: 'ikom-cocoa-farm' },
  
      highlights: [
        'Roasted and cracked in-house',
        'Uniform size for consistent processing',
        'Ideal for craft chocolate & baking',
      ],
  
      applications: ['Craft chocolate', 'Bakeries', 'Confectionery', 'Premium beverages'],
    },
  
    // ============ FRESH PLANTAIN ============
    {
      slug: 'fresh-plantain',
      name: 'Fresh Plantain',
      category: 'Plantain',
      crop: 'Plantain',
      grade: 'Export',
      status: 'ready',
      shortDescription: 'Firm, ripe plantain bunches packed for local and regional distribution.',
      longDescription:
        'Our plantain is grown on the Abeokuta Plantain Belt in Ogun State and harvested at optimal ripeness for export. Each bunch is hand-selected, cleaned, and packed in ventilated crates to protect against bruising during transit. Available year-round with consistent supply.',
  
      image: '/images/farm1.jpg',
      hero: '/images/farm1.jpg',
      gallery: ['/images/farm1.jpg', '/images/farm2.jpg'],
  
      moq: '8 tonnes',
      moqTonnes: 8,
      leadTime: '3–7 days',
      priceFrom: '$340',
      priceUnit: '/ tonne',
      pricingTiers: [
        { qty: '8–49 tonnes', price: '$340', note: 'MOQ' },
        { qty: '50–199 tonnes', price: '$325', note: 'Save 4%' },
        { qty: '200+ tonnes', price: '$305', note: 'Save 10%' },
      ],
  
      specs: [
        { label: 'Ripeness Stage', value: 'Green to turning' },
        { label: 'Bunch Weight', value: '12–18 kg average' },
        { label: 'Finger Count', value: '45–60 per bunch' },
        { label: 'Shelf Life', value: '7–10 days' },
        { label: 'Origin', value: 'Ogun State, Nigeria' },
      ],
  
      packaging: [
        { label: 'Ventilated Crates', description: '18 kg plastic crates', icon: 'box' },
        { label: 'Cartons', description: '20 kg perforated cartons', icon: 'box' },
      ],
  
      certifications: ['NEPC Export Certified'],
  
      labParams: [
        { label: 'Moisture', value: '65%' },
        { label: 'Firmness', value: 'Optimal' },
      ],
  
      shipping: {
        origin: 'Ogun State, Nigeria',
        port: 'Apapa Port, Lagos (100 km)',
        containerCapacity: '16 tonnes per 20ft reefer',
        sampleAvailable: false,
        sampleLeadTime: 'Not applicable',
      },
  
      origin: 'Ogun State',
      estate: { name: 'Abeokuta Plantain Belt', slug: 'abeokuta-plantain-belt' },
  
      highlights: [
        'Hand-selected at peak ripeness',
        'Consistent year-round supply',
        'Cold-chain logistics available',
      ],
  
      applications: ['Retail', 'Food service', 'Ethnic markets', 'Catering'],
    },
  
    // ============ PLANTAIN FLOUR ============
    {
      slug: 'plantain-flour',
      name: 'Plantain Flour',
      category: 'Plantain',
      crop: 'Plantain',
      grade: 'Food Grade',
      status: 'ready',
      shortDescription: 'Stone-milled, gluten-free flour for health food and baking markets.',
      longDescription:
        'Our plantain flour is produced by drying and stone-milling our fresh plantains into a fine, gluten-free flour with a natural sweetness. Rich in fiber and resistant starch, it\'s ideal for health food brands, gluten-free bakeries, and African food exporters.',
  
      image: '/images/farm1.jpg',
      hero: '/images/farm1.jpg',
      gallery: ['/images/farm1.jpg', '/images/farm4.jpg'],
  
      moq: '2 tonnes',
      moqTonnes: 2,
      leadTime: '7–10 days',
      priceFrom: '$980',
      priceUnit: '/ tonne',
      pricingTiers: [
        { qty: '2–19 tonnes', price: '$980', note: 'MOQ' },
        { qty: '20–99 tonnes', price: '$940', note: 'Save 4%' },
        { qty: '100+ tonnes', price: '$890', note: 'Save 9%' },
      ],
  
      specs: [
        { label: 'Moisture Content', value: '< 10%' },
        { label: 'Fineness', value: '80–100 mesh' },
        { label: 'Shelf Life', value: '12 months' },
        { label: 'Gluten', value: 'Free' },
        { label: 'Origin', value: 'Ogun State, Nigeria' },
      ],
  
      packaging: [
        { label: 'Paper Bags', description: '25 kg multi-wall paper bags', icon: 'bag' },
        { label: 'PP Bags', description: '25 kg food-grade lined', icon: 'bag' },
        { label: 'Retail Pack', description: '500g – 2kg consumer packs', icon: 'box' },
      ],
  
      certifications: ['NEPC Export Certified', 'SON Approved'],
  
      labParams: [
        { label: 'Moisture', value: '8.4%' },
        { label: 'Fineness', value: '90 mesh' },
      ],
  
      shipping: {
        origin: 'Ogun State, Nigeria',
        port: 'Apapa Port, Lagos (100 km)',
        containerCapacity: '20 tonnes per 20ft container',
        sampleAvailable: true,
        sampleLeadTime: '3–5 days by courier',
      },
  
      origin: 'Ogun State',
      estate: { name: 'Abeokuta Plantain Belt', slug: 'abeokuta-plantain-belt' },
  
      highlights: [
        'Gluten-free and naturally sweet',
        'Stone-milled for superior texture',
        'Rich in fiber and resistant starch',
      ],
  
      applications: ['Health food', 'Gluten-free baking', 'Baby food', 'African cuisine'],
    },
  
    // ============ NATURAL RUBBER ============
    {
      slug: 'natural-rubber',
      name: 'Natural Rubber (RSS3)',
      category: 'Rubber',
      crop: 'Rubber',
      grade: 'RSS3',
      status: 'preorder',
      shortDescription: 'Ribbed smoked sheet, standard international grade for tire manufacturers.',
      longDescription:
        'Our RSS3 natural rubber is produced from latex tapped on our Uyo Rubber Estate in Akwa Ibom. The latex is coagulated, rolled into ribbed sheets, and smoked to standard RSS3 specifications. Suitable for tire manufacturing, retreading, and industrial rubber products.',
  
      image: '/images/farm2.jpg',
      hero: '/images/farm2.jpg',
      gallery: ['/images/farm2.jpg', '/images/farm3.jpg'],
  
      moq: '20 tonnes',
      moqTonnes: 20,
      leadTime: '90–120 days',
      priceFrom: '$1,850',
      priceUnit: '/ tonne',
      pricingTiers: [
        { qty: '20–99 tonnes', price: '$1,850', note: 'MOQ' },
        { qty: '100–199 tonnes', price: '$1,780', note: 'Save 4%' },
        { qty: '200+ tonnes', price: '$1,690', note: 'Save 9%' },
      ],
  
      specs: [
        { label: 'Grade', value: 'RSS3' },
        { label: 'Dirt Content', value: '< 0.20%' },
        { label: 'Ash Content', value: '< 1.0%' },
        { label: 'Nitrogen', value: '< 0.60%' },
        { label: 'Volatile Matter', value: '< 1.0%' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Origin', value: 'Akwa Ibom, Nigeria' },
      ],
  
      packaging: [
        { label: 'Bales', description: '33.3 kg standard bales', icon: 'box' },
        { label: 'Pallets', description: '1 tonne palletized units', icon: 'tank' },
      ],
  
      certifications: ['NEPC Export Certified', 'SON Approved'],
  
      labParams: [
        { label: 'Dirt', value: '0.12%' },
        { label: 'Ash', value: '0.78%' },
        { label: 'Nitrogen', value: '0.42%' },
      ],
  
      shipping: {
        origin: 'Akwa Ibom, Nigeria',
        port: 'Apapa Port, Lagos (650 km)',
        containerCapacity: '20 tonnes per 20ft container',
        sampleAvailable: true,
        sampleLeadTime: '7–10 days by courier',
      },
  
      origin: 'Akwa Ibom',
      estate: { name: 'Uyo Rubber Estate', slug: 'uyo-rubber-estate' },
  
      highlights: [
        'Consistent RSS3 grading',
        'Smoked to international standards',
        'Batch-traceable to tapping plots',
      ],
  
      applications: ['Tire manufacturing', 'Retreading', 'Industrial rubber', 'Footwear'],
    },
  
    // ============ RUBBER LATEX ============
    {
      slug: 'rubber-latex',
      name: 'Field Latex Concentrate',
      category: 'Rubber',
      crop: 'Rubber',
      grade: 'HA 60%',
      status: 'preorder',
      shortDescription: 'High-ammonia latex concentrate for gloves, foam, and dipped goods.',
      longDescription:
        'High-ammonia (HA) latex concentrate produced from freshly tapped latex on our Uyo estate. Ammoniated to 60% dry rubber content (DRC), it\'s suitable for dipped goods (gloves, balloons), foam mattresses, and adhesives. Requires refrigerated transport.',
  
      image: '/images/product-latex.jpg',
      hero: '/images/product-latex.jpg',
      gallery: ['/images/product-latex.jpg'],
  
      moq: '10 tonnes',
      moqTonnes: 10,
      leadTime: '60–90 days',
      priceFrom: '$1,450',
      priceUnit: '/ tonne',
      pricingTiers: [
        { qty: '10–49 tonnes', price: '$1,450', note: 'MOQ' },
        { qty: '50+ tonnes', price: '$1,390', note: 'Save 4%' },
      ],
  
      specs: [
        { label: 'Dry Rubber Content', value: '60% min' },
        { label: 'Ammonia Content', value: '0.7% min' },
        { label: 'Volatile Fatty Acid', value: '< 0.05%' },
        { label: 'Mechanical Stability', value: '650 s min' },
        { label: 'Shelf Life', value: '6 months (refrigerated)' },
        { label: 'Origin', value: 'Akwa Ibom, Nigeria' },
      ],
  
      packaging: [
        { label: 'Drums', description: '205 L steel drums, food-grade lined', icon: 'drum' },
        { label: 'Flexitanks', description: '20 tonnes per flexitank', icon: 'tank' },
      ],
  
      certifications: ['NEPC Export Certified'],
  
      labParams: [
        { label: 'DRC', value: '60.2%' },
        { label: 'Ammonia', value: '0.72%' },
        { label: 'VFA', value: '0.03%' },
      ],
  
      shipping: {
        origin: 'Akwa Ibom, Nigeria',
        port: 'Apapa Port, Lagos (650 km)',
        containerCapacity: '20 tonnes per 20ft flexitank',
        sampleAvailable: true,
        sampleLeadTime: '7–10 days by courier',
      },
  
      origin: 'Akwa Ibom',
      estate: { name: 'Uyo Rubber Estate', slug: 'uyo-rubber-estate' },
  
      highlights: [
        'High-ammonia concentrate (HA 60%)',
        'Consistent DRC and mechanical stability',
        'Cold-chain logistics included',
      ],
  
      applications: ['Gloves & dipped goods', 'Foam mattresses', 'Adhesives', 'Medical products'],
    },
  
    // ============ CASSAVA STARCH ============
    {
      slug: 'cassava-starch',
      name: 'Cassava Starch',
      category: 'Cassava',
      crop: 'Cassava',
      grade: 'Industrial',
      status: 'ready',
      shortDescription: 'Industrial-grade starch for food, textile, and paper industries.',
      longDescription:
        'Our cassava starch is produced from freshly harvested cassava roots on our Badagry Cassava Fields. The roots are processed within 24 hours into a fine, white starch suitable for a wide range of industrial applications — from food thickening to textile sizing and paper coating.',
  
      image: '/images/farm1.jpg',
      hero: '/images/farm1.jpg',
      gallery: ['/images/farm1.jpg', '/images/farm2.jpg'],
  
      moq: '5 tonnes',
      moqTonnes: 5,
      leadTime: '10–14 days',
      priceFrom: '$720',
      priceUnit: '/ tonne',
      pricingTiers: [
        { qty: '5–19 tonnes', price: '$720', note: 'MOQ' },
        { qty: '20–99 tonnes', price: '$690', note: 'Save 4%' },
        { qty: '100+ tonnes', price: '$655', note: 'Save 9%' },
      ],
  
      specs: [
        { label: 'Moisture Content', value: '< 13%' },
        { label: 'Starch Purity', value: '> 98%' },
        { label: 'Whiteness', value: '92%+' },
        { label: 'pH', value: '5.0–7.0' },
        { label: 'Shelf Life', value: '18 months' },
        { label: 'Origin', value: 'Lagos State, Nigeria' },
      ],
  
      packaging: [
        { label: 'PP Bags', description: '50 kg food-grade lined', icon: 'bag' },
        { label: 'Big Bags', description: '1 tonne FIBC super sacks', icon: 'tank' },
        { label: 'Cartons', description: '25 kg industrial cartons', icon: 'box' },
      ],
  
      certifications: ['NEPC Export Certified', 'SON Approved'],
  
      labParams: [
        { label: 'Moisture', value: '11.8%' },
        { label: 'Purity', value: '99.1%' },
        { label: 'Whiteness', value: '93%' },
      ],
  
      shipping: {
        origin: 'Lagos State, Nigeria',
        port: 'Apapa Port, Lagos (40 km)',
        containerCapacity: '20 tonnes per 20ft container',
        sampleAvailable: true,
        sampleLeadTime: '3–5 days by courier',
      },
  
      origin: 'Lagos State',
      estate: { name: 'Badagry Cassava Fields', slug: 'badagry-cassava-fields' },
  
      highlights: [
        'Processed within 24 hours of harvest',
        'High purity for sensitive applications',
        'Consistent whiteness grade',
      ],
  
      applications: ['Food thickening', 'Textile sizing', 'Paper coating', 'Adhesives'],
    },
  
    // ============ CASSAVA FLOUR ============
    {
      slug: 'cassava-flour',
      name: 'High-Quality Cassava Flour',
      category: 'Cassava',
      crop: 'Cassava',
      grade: 'Food Grade',
      status: 'ready',
      shortDescription: 'Food-grade cassava flour, gluten-free and versatile for baking.',
      longDescription:
        'Our high-quality cassava flour (HQCF) is produced by peeling, grating, dewatering, drying, and milling cassava roots into a fine gluten-free flour. A popular wheat flour substitute for baking, thickening, and African cuisine. Naturally gluten-free and rich in carbohydrates.',
  
      image: '/images/farm4.jpg',
      hero: '/images/farm4.jpg',
      gallery: ['/images/farm4.jpg', '/images/farm1.jpg'],
  
      moq: '3 tonnes',
      moqTonnes: 3,
      leadTime: '7–10 days',
      priceFrom: '$890',
      priceUnit: '/ tonne',
      pricingTiers: [
        { qty: '3–19 tonnes', price: '$890', note: 'MOQ' },
        { qty: '20–99 tonnes', price: '$855', note: 'Save 4%' },
        { qty: '100+ tonnes', price: '$810', note: 'Save 9%' },
      ],
  
      specs: [
        { label: 'Moisture Content', value: '< 10%' },
        { label: 'Fineness', value: '80–100 mesh' },
        { label: 'Shelf Life', value: '12 months' },
        { label: 'Gluten', value: 'Free' },
        { label: 'Origin', value: 'Lagos State, Nigeria' },
      ],
  
      packaging: [
        { label: 'Paper Bags', description: '25 kg multi-wall paper bags', icon: 'bag' },
        { label: 'PP Bags', description: '50 kg food-grade lined', icon: 'bag' },
        { label: 'Retail Pack', description: '500g – 2kg consumer packs', icon: 'box' },
      ],
  
      certifications: ['NEPC Export Certified', 'SON Approved'],
  
      labParams: [
        { label: 'Moisture', value: '8.6%' },
        { label: 'Fineness', value: '92 mesh' },
      ],
  
      shipping: {
        origin: 'Lagos State, Nigeria',
        port: 'Apapa Port, Lagos (40 km)',
        containerCapacity: '20 tonnes per 20ft container',
        sampleAvailable: true,
        sampleLeadTime: '3–5 days by courier',
      },
  
      origin: 'Lagos State',
      estate: { name: 'Badagry Cassava Fields', slug: 'badagry-cassava-fields' },
  
      highlights: [
        'Naturally gluten-free',
        'Fine, uniform milling',
        'Consistent year-round availability',
      ],
  
      applications: ['Gluten-free baking', 'African cuisine', 'Health foods', 'Snack production'],
    },
  ]
  
  /* -------- Helper: get product by slug -------- */
  export const getProductBySlug = (slug: string) =>
    productsData.find((p) => p.slug === slug)