<template>
    <section
      id="estates"
      ref="sectionRef"
      class="relative py-20 lg:py-28 bg-[rgb(var(--bg))]"
    >
      <div class="container-page">
  
        <!-- ============ HEADER ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 lg:mb-14 items-end">
          <div class="lg:col-span-7">
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-5
                     px-3.5 py-1.5 rounded-full
                     bg-leaf-500/10 border border-leaf-500/20
                     text-leaf-600 dark:text-leaf-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
              Our Estates
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              Six estates,<br />
              <span class="text-leaf-500">one standard of care.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
              Every estate is independently audited, managed by resident
              agronomists, and traced from soil to sale. Use the filters below to
              explore by crop or location.
            </p>
          </div>
        </div>
  
        <!-- ============ FILTER BAR (sticky) ============ -->
        <div
          ref="filterBarRef"
          class="sticky top-[76px] z-30 -mx-6 px-6 lg:mx-0 lg:px-0
                 py-4 mb-8 lg:mb-10
                 bg-[rgb(var(--bg)/0.92)] backdrop-blur-md
                 border-b border-[rgb(var(--border)/0.08)]"
        >
          <div class="flex flex-col lg:flex-row lg:items-center gap-4">
  
            <!-- Crop chips (horizontal scroll on mobile) -->
            <div class="flex-1 min-w-0">
              <div
                class="flex items-center gap-2 overflow-x-auto
                       [-ms-overflow-style:none] [scrollbar-width:none]
                       [&::-webkit-scrollbar]:hidden
                       pb-1 lg:pb-0"
              >
                <span
                  class="shrink-0 text-[0.72rem] uppercase tracking-wider
                         font-bold text-[rgb(var(--text-muted))] mr-1 hidden sm:block"
                >
                  Crop:
                </span>
                <button
                  v-for="crop in cropOptions"
                  :key="crop"
                  type="button"
                  class="shrink-0 px-3.5 py-2 rounded-full
                         text-[0.82rem] font-semibold whitespace-nowrap
                         transition-all duration-300"
                  :class="activeCrop === crop
                    ? 'bg-leaf-500 text-white shadow-[0_4px_14px_-4px_rgba(46,125,50,0.5)]'
                    : `bg-[rgb(var(--surface))] border border-[rgb(var(--border)/0.12)]
                       text-[rgb(var(--text-muted))] hover:border-leaf-500/50
                       hover:text-[rgb(var(--text))]`"
                  @click="activeCrop = crop"
                >
                  {{ crop }}
                </button>
              </div>
            </div>
  
            <!-- State select + search + reset -->
            <div class="flex items-center gap-3 shrink-0">
              <!-- State select -->
              <div class="relative">
                <select
                  v-model="activeState"
                  class="h-10 pl-4 pr-9 rounded-full
                         text-[0.85rem] font-medium
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.12)]
                         text-[rgb(var(--text))]
                         focus:outline-none focus:border-leaf-500
                         focus:ring-4 focus:ring-leaf-500/15
                         appearance-none cursor-pointer"
                >
                  <option value="All">All States</option>
                  <option v-for="st in stateOptions" :key="st" :value="st">
                    {{ st }}
                  </option>
                </select>
                <span class="absolute right-3 top-1/2 -translate-y-1/2
                             pointer-events-none text-[rgb(var(--text-muted))]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.4"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </span>
              </div>
  
              <!-- Search input (desktop) -->
              <div class="relative hidden lg:block">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search estate…"
                  class="h-10 w-[200px] pl-9 pr-4 rounded-full
                         text-[0.85rem]
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.12)]
                         text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-muted))]
                         focus:outline-none focus:border-leaf-500
                         focus:ring-4 focus:ring-leaf-500/15
                         transition-all duration-300
                         focus:w-[260px]"
                />
                <span class="absolute left-3.5 top-1/2 -translate-y-1/2
                             text-[rgb(var(--text-muted))] pointer-events-none">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.4"
                       stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.3-4.3"/>
                  </svg>
                </span>
              </div>
  
              <!-- Reset (only when filters active) -->
              <button
                v-if="hasActiveFilters"
                type="button"
                class="h-10 px-4 rounded-full
                       text-[0.82rem] font-semibold
                       text-[rgb(var(--text-muted))]
                       hover:text-leaf-600 dark:hover:text-leaf-400
                       transition-colors"
                @click="reset"
              >
                Reset
              </button>
            </div>
          </div>
  
          <!-- Result count -->
          <div class="mt-3 text-[0.82rem] text-[rgb(var(--text-muted))]">
            <span class="font-semibold text-[rgb(var(--text))]">
              {{ filteredEstates.length }}
            </span>
            {{ filteredEstates.length === 1 ? 'estate' : 'estates' }}
            <span v-if="hasActiveFilters"> matching your filters</span>
          </div>
        </div>
  
        <!-- ============ ESTATES GRID ============ -->
        <TransitionGroup
          tag="div"
          name="estates"
          class="estates-grid
                 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6"
          :class="!filteredEstates.length ? 'lg:grid-cols-1' : ''"
        >
          <!-- Empty state -->
          <div
            v-if="!filteredEstates.length"
            key="empty"
            class="lg:col-span-12 py-20 text-center rounded-2xl
                   border border-dashed border-[rgb(var(--border)/0.2)]"
          >
            <div
              class="grid place-items-center w-16 h-16 rounded-2xl mx-auto mb-5
                     bg-[rgb(var(--bg-alt))] text-[rgb(var(--text-muted))]"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
            <h3 class="font-display font-bold text-[rgb(var(--text))]
                       text-[1.15rem] mb-2">
              No estates match these filters
            </h3>
            <p class="text-[rgb(var(--text-muted))] text-[0.92rem] mb-6 max-w-sm mx-auto">
              Try removing a filter or resetting to see all six estates.
            </p>
            <button
              type="button"
              class="btn !px-5 !py-3
                     bg-leaf-500 text-white font-semibold
                     hover:bg-leaf-600"
              @click="reset"
            >
              Reset Filters
            </button>
          </div>
  
          <!-- Estate cards -->
          <article
            v-for="(estate, i) in filteredEstates"
            :key="estate.slug"
            class="estate-card group relative overflow-hidden rounded-2xl
                   cursor-pointer
                   border border-[rgb(var(--border)/0.08)]
                   bg-[rgb(var(--surface))]
                   transition-all duration-500
                   hover:border-leaf-500/30
                   hover:shadow-[0_25px_60px_-20px_rgba(46,125,50,0.35)]"
            :class="getCardSpan(estate, i)"
            @click="navigateTo(`/plantations/${estate.slug}`)"
          >
            <!-- Image -->
            <img
              :src="estate.image"
              :alt="estate.name"
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover
                     transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.9,0.3,1)]
                     group-hover:scale-[1.08]"
            />
  
            <!-- Gradient overlay -->
            <div
              class="absolute inset-0
                     bg-gradient-to-t from-black/90 via-black/40 to-black/10"
            />
  
            <!-- ========== TOP: Status + Maturity ========== -->
            <div class="absolute top-5 left-5 right-5 flex items-start justify-between gap-3">
              <!-- Harvest status -->
              <span
                class="inline-flex items-center gap-2 px-3 py-1.5
                       rounded-full text-[0.72rem] font-semibold tracking-wide
                       backdrop-blur-md border"
                :class="estate.ready
                  ? 'bg-leaf-500/25 border-leaf-400/40 text-leaf-100'
                  : 'bg-harvest-500/25 border-harvest-400/40 text-harvest-100'"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full"
                  :class="estate.ready ? 'bg-leaf-400 animate-pulse' : 'bg-harvest-400'"
                />
                {{ estate.ready ? 'Harvesting Now' : `Harvest ${estate.harvestYear}` }}
              </span>
  
              <!-- Bookmark (top-right, appears on hover) -->
              <button
                type="button"
                aria-label="Save estate"
                class="grid place-items-center w-9 h-9 rounded-full
                       bg-white/10 backdrop-blur-md border border-white/20
                       text-white
                       opacity-0 -translate-y-2
                       group-hover:opacity-100 group-hover:translate-y-0
                       hover:bg-white/20
                       transition-all duration-300"
                @click.stop
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.2"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
                </svg>
              </button>
            </div>
  
            <!-- ========== BOTTOM: Content ========== -->
            <div class="absolute inset-x-0 bottom-0 p-5 lg:p-6">
              <!-- Location -->
              <div class="flex items-center gap-2 mb-3
                          text-white/75 text-[0.76rem] font-medium
                          tracking-[0.12em] uppercase">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.2"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {{ estate.state }}, Nigeria
              </div>
  
              <!-- Name -->
              <h3
                class="font-display font-bold text-white
                       leading-tight tracking-[-0.02em] mb-3"
                :class="isFeatured(estate, i)
                  ? 'text-[clamp(1.5rem,2.8vw,2.25rem)]'
                  : 'text-[clamp(1.25rem,2vw,1.6rem)]'"
              >
                {{ estate.name }}
              </h3>
  
              <!-- Crop chips -->
              <div class="flex flex-wrap gap-1.5 mb-4">
                <span
                  v-for="crop in estate.crops"
                  :key="crop"
                  class="px-2.5 py-1 rounded-md
                         bg-white/10 backdrop-blur-md border border-white/15
                         text-white/90 text-[0.72rem] font-medium"
                >
                  {{ crop }}
                </span>
              </div>
  
              <!-- Meta grid -->
              <div
                class="grid grid-cols-3 gap-4 pt-4 mt-1
                       border-t border-white/15"
              >
                <div>
                  <div class="text-white/55 text-[0.68rem] uppercase
                              tracking-wider font-semibold mb-1">
                    Size
                  </div>
                  <div class="text-white font-display font-bold
                              text-[1.05rem] leading-none">
                    {{ estate.size }}<span class="text-white/60 text-[0.78rem] ml-0.5">ha</span>
                  </div>
                </div>
                <div>
                  <div class="text-white/55 text-[0.68rem] uppercase
                              tracking-wider font-semibold mb-1">
                    Planted
                  </div>
                  <div class="text-white font-display font-bold
                              text-[1.05rem] leading-none">
                    {{ estate.planted }}
                  </div>
                </div>
                <div>
                  <div class="text-white/55 text-[0.68rem] uppercase
                              tracking-wider font-semibold mb-1">
                    Farmers
                  </div>
                  <div class="text-white font-display font-bold
                              text-[1.05rem] leading-none">
                    {{ estate.farmers }}
                  </div>
                </div>
              </div>
  
              <!-- Bottom accent bar on hover -->
              <div
                class="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0
                       bg-gradient-to-r from-harvest-500 to-leaf-500
                       group-hover:scale-x-100 transition-transform duration-500"
              />
            </div>
  
            <!-- ========== HOVER ARROW ========== -->
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     grid place-items-center w-14 h-14 rounded-full
                     bg-white/15 backdrop-blur-md border border-white/25
                     text-white
                     opacity-0 scale-75
                     group-hover:opacity-100 group-hover:scale-100
                     transition-all duration-400"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17 17 7M7 7h10v10"/>
              </svg>
            </div>
          </article>
        </TransitionGroup>
  
        <!-- ============ BOTTOM CTA ============ -->
        <div
          ref="ctaRef"
          class="mt-14 lg:mt-20 rounded-2xl
                 p-6 lg:p-8
                 bg-gradient-to-br from-leaf-500 to-leaf-700
                 relative overflow-hidden
                 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
        >
          <!-- Decorative circles -->
          <div class="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
          <div class="absolute -right-4 top-1/2 w-20 h-20 rounded-full bg-white/10" />
  
          <div class="relative z-10">
            <div class="text-white/80 text-[0.78rem] font-semibold
                        uppercase tracking-wider mb-1.5">
              Not sure which estate fits your needs?
            </div>
            <div class="text-white font-display font-bold
                        text-[1.25rem] lg:text-[1.5rem] leading-tight max-w-lg">
              Our team can match you with the right crop, quantity, and delivery
              window.
            </div>
          </div>
  
          <div class="relative z-10 flex flex-wrap gap-3">
            <NuxtLink
              to="/contact?type=buyer"
              class="btn !px-6 !py-3.5
                     bg-white text-leaf-700 font-semibold
                     hover:bg-white/95 hover:-translate-y-0.5
                     shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
            >
              Talk to Our Team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  /* -------- Shared filter state -------- */
  const { activeCrop, activeState, searchQuery, reset } = usePlantationsFilter()
  
  /* -------- Ref -------- */
  const sectionRef = ref<HTMLElement | null>(null)
  
  /* -------- Data -------- */
  interface Estate {
    slug: string
    name: string
    state: string
    image: string
    size: number
    planted: string
    farmers: number
    crops: string[]
    ready: boolean
    harvestYear?: number
    featured?: boolean
  }
  
  const estates: Estate[] = [
    {
      slug: 'okitipupa-palm-estate',
      name: 'Okitipupa Palm Estate',
      state: 'Ondo State',
      image: '/estate/palm.jpg',
      size: 520,
      planted: '2018',
      farmers: 145,
      crops: ['Oil Palm', 'Palm Kernel'],
      ready: true,
      featured: true,
    },
    {
      slug: 'ikom-cocoa-farm',
      name: 'Ikom Cocoa Farm',
      state: 'Cross River',
      image: '/estate/cocoa.jpg',
      size: 180,
      planted: '2021',
      farmers: 62,
      crops: ['Cocoa', 'Plantain'],
      ready: false,
      harvestYear: 2027,
    },
    {
      slug: 'abeokuta-plantain-belt',
      name: 'Abeokuta Plantain Belt',
      state: 'Ogun State',
      image: '/estate/plantain.jpg',
      size: 240,
      planted: '2022',
      farmers: 78,
      crops: ['Plantain', 'Cassava'],
      ready: false,
      harvestYear: 2026,
    },
    {
      slug: 'epe-mixed-farm',
      name: 'Epe Mixed Farm',
      state: 'Lagos State',
      image: '/estate/mixed.jpg',
      size: 95,
      planted: '2020',
      farmers: 41,
      crops: ['Vegetables', 'Maize'],
      ready: true,
    },
    {
      slug: 'uyo-rubber-estate',
      name: 'Uyo Rubber Estate',
      state: 'Akwa Ibom',
      image: '/estate/rubber.jpg',
      size: 165,
      planted: '2019',
      farmers: 54,
      crops: ['Rubber', 'Palm'],
      ready: false,
      harvestYear: 2028,
    },
    {
      slug: 'badagry-cassava-fields',
      name: 'Badagry Cassava Fields',
      state: 'Lagos State',
      image: '/estate/cassava.jpg',
      size: 130,
      planted: '2023',
      farmers: 36,
      crops: ['Cassava'],
      ready: false,
      harvestYear: 2026,
    },
  ]
  
  /* -------- Filter options -------- */
  const cropOptions = ['All', 'Palm', 'Cocoa', 'Plantain', 'Rubber', 'Cassava', 'Vegetables']
  
  const stateOptions = computed(() => {
    const set = new Set(estates.map((e) => e.state))
    return Array.from(set).sort()
  })
  
  /* -------- Filter logic -------- */
  const filteredEstates = computed(() => {
    return estates.filter((e) => {
      // Crop filter
      if (activeCrop.value !== 'All') {
        const match = e.crops.some((c) =>
          c.toLowerCase().includes(activeCrop.value.toLowerCase())
        )
        if (!match) return false
      }
  
      // State filter
      if (activeState.value !== 'All' && e.state !== activeState.value) {
        return false
      }
  
      // Search filter
      if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase().trim()
        const hay = `${e.name} ${e.state} ${e.crops.join(' ')}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
  
      return true
    })
  })
  
  /* -------- Helpers -------- */
  const hasActiveFilters = computed(
    () => activeCrop.value !== 'All' || activeState.value !== 'All' || searchQuery.value.trim() !== ''
  )
  
  /* Determine grid span for each card (featured looks bigger) */
  const getCardSpan = (estate: Estate, index: number) => {
    // If filtered down to 1 → full width
    if (filteredEstates.value.length === 1) {
      return 'lg:col-span-12 aspect-[16/9] lg:aspect-[21/9]'
    }
    // If filtered to 2 → 2 x half width
    if (filteredEstates.value.length === 2) {
      return 'lg:col-span-6 aspect-[4/5] lg:aspect-[16/11]'
    }
    // Otherwise: featured card 7/5, other cards 5/5
    if (estate.featured && index === 0) {
      return 'lg:col-span-7 lg:row-span-2 aspect-[4/3] lg:aspect-[16/13]'
    }
    return 'lg:col-span-5 aspect-[4/3] lg:aspect-[16/9]'
  }
  
  const isFeatured = (estate: Estate, index: number) =>
    !!estate.featured && index === 0 && filteredEstates.value.length > 2
  
  /* ---------------------------------------------------------------
     GSAP — entrance + filter change animation
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
  
    ctx = gsap.context(() => {
      /* Initial grid reveal */
      const cards = sectionRef.value?.querySelectorAll('.estate-card')
      if (cards?.length) {
        gsap.from(cards, {
          y: 60, autoAlpha: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.estates-grid',
            start: 'top 80%',
          },
        })
      }
  
      /* Parallax on card images */
      cards?.forEach((card) => {
        const img = card.querySelector('img')
        if (!img) return
  
        gsap.fromTo(
          img,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        )
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>
  
  <style scoped>
  /* ============ TRANSITION GROUP (filter change animation) ============ */
  
  .estates-move,
  .estates-enter-active,
  .estates-leave-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Ensure leaving items don't push layout */
  .estates-leave-active {
    position: absolute;
    opacity: 0;
    transform: scale(0.95);
  }
  
  .estates-enter-from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  
  .estates-leave-to {
    opacity: 0;
    transform: scale(0.95);
  }
  </style>