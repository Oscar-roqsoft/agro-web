<template>
    <section
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg))]"
    >
      <!-- Decorative background accent -->
      <div
        class="absolute inset-x-0 top-0 h-px
               bg-gradient-to-r from-transparent via-[rgb(var(--border)/0.15)] to-transparent"
      />
  
      <div class="container-page">
  
        <!-- ============ SECTION HEADER ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 lg:mb-20 items-end">
          <!-- Left: eyebrow + heading -->
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
              Cultivated with patience,<br />
              <span class="text-leaf-500">harvested with purpose.</span>
            </h2>
          </div>
  
          <!-- Right: description + view-all link -->
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed mb-5">
              Six estates across West Africa, each managed with modern agronomy
              and community-first practices — from mature palm groves to newly
              planted cocoa and plantain farms.
            </p>
            <NuxtLink
              to="/plantations"
              class="group inline-flex items-center gap-2
                     text-leaf-600 dark:text-leaf-400
                     font-semibold text-[0.95rem]
                     hover:gap-3 transition-all duration-200"
            >
              Explore all plantations
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </NuxtLink>
          </div>
        </div>
  
        <!-- ============ FEATURE GRID ============ -->
        <div
          ref="gridRef"
          class="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6"
        >
          <!-- FEATURED (large) card — spans 2 cols on lg -->
          <article
            v-for="(estate, i) in estates"
            :key="estate.name"
            :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
            class="estate-card group relative overflow-hidden rounded-2xl
                   cursor-pointer
                   border border-[rgb(var(--border)/0.08)]
                   bg-[rgb(var(--surface))]
                   transition-all duration-500
                   hover:border-leaf-500/30
                   hover:shadow-[0_20px_50px_-15px_rgba(46,125,50,0.35)]"
            :class="[
              i === 0
                ? 'lg:col-span-7 lg:row-span-2 aspect-[4/3] lg:aspect-[16/13]'
                : 'lg:col-span-5 aspect-[4/3] lg:aspect-[16/9]',
            ]"
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
  
            <!-- Gradient overlay (always visible, stronger on hover) -->
            <div
              class="absolute inset-0
                     bg-gradient-to-t from-black/85 via-black/35 to-black/10
                     transition-opacity duration-500
                     group-hover:opacity-95"
            />
  
            <!-- Top-right badges -->
            <div class="absolute top-5 right-5 flex flex-col items-end gap-2">
              <!-- Harvest status pill -->
              <span
                class="inline-flex items-center gap-2 px-3 py-1.5
                       rounded-full text-[0.72rem] font-semibold tracking-wide
                       backdrop-blur-md border"
                :class="estate.ready
                  ? 'bg-leaf-500/25 border-leaf-400/40 text-leaf-200'
                  : 'bg-harvest-500/25 border-harvest-400/40 text-harvest-100'"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full"
                  :class="estate.ready
                    ? 'bg-leaf-400 animate-pulse'
                    : 'bg-harvest-400'"
                />
                {{ estate.ready ? 'Harvesting Now' : `Harvest ${estate.harvestYear}` }}
              </span>
            </div>
  
            <!-- Bottom content -->
            <div class="absolute inset-x-0 bottom-0 p-5 lg:p-7">
              <!-- Location -->
              <div class="flex items-center gap-2 mb-3
                          text-white/75 text-[0.78rem] font-medium
                          tracking-[0.12em] uppercase">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {{ estate.location }}
              </div>
  
              <!-- Name -->
              <h3
                class="font-display font-bold text-white
                       leading-tight tracking-[-0.02em] mb-3"
                :class="i === 0
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
  
              <!-- Divider + meta (reveals more on hover) -->
              <div
                class="grid grid-cols-3 gap-4 pt-4 mt-1
                       border-t border-white/15"
              >
                <div>
                  <div class="text-white/55 text-[0.68rem] uppercase tracking-wider font-semibold mb-1">
                    Size
                  </div>
                  <div class="text-white font-display font-bold text-[1.05rem] leading-none">
                    {{ estate.size }}<span class="text-white/60 text-[0.78rem] ml-0.5">ha</span>
                  </div>
                </div>
                <div>
                  <div class="text-white/55 text-[0.68rem] uppercase tracking-wider font-semibold mb-1">
                    Planted
                  </div>
                  <div class="text-white font-display font-bold text-[1.05rem] leading-none">
                    {{ estate.planted }}
                  </div>
                </div>
                <div>
                  <div class="text-white/55 text-[0.68rem] uppercase tracking-wider font-semibold mb-1">
                    Farmers
                  </div>
                  <div class="text-white font-display font-bold text-[1.05rem] leading-none">
                    {{ estate.farmers }}
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Hover arrow indicator -->
            <div
              class="absolute top-5 left-5
                     grid place-items-center w-11 h-11 rounded-full
                     bg-white/10 backdrop-blur-md border border-white/20
                     text-white
                     opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17 17 7M7 7h10v10"/>
              </svg>
            </div>
          </article>
        </div>
  
        <!-- ============ BOTTOM CTA STRIP ============ -->
        <div
          ref="ctaStripRef"
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
            <div class="text-white/80 text-[0.8rem] font-semibold uppercase tracking-wider mb-1.5">
              Interested in partnering with us?
            </div>
            <div class="text-white font-display font-bold text-[1.35rem] lg:text-[1.6rem] leading-tight">
              Reserve your share of the next harvest.
            </div>
          </div>
  
          <NuxtLink
            to="/contact"
            class="relative z-10 btn !px-6 !py-3.5
                   bg-white text-leaf-700 font-semibold
                   hover:bg-white/95 hover:-translate-y-0.5
                   shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
          >
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </NuxtLink>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  /* -------- Refs -------- */
  const sectionRef  = ref<HTMLElement | null>(null)
  const eyebrowRef  = ref<HTMLElement | null>(null)
  const headingRef  = ref<HTMLElement | null>(null)
  const descRef     = ref<HTMLElement | null>(null)
  const gridRef     = ref<HTMLElement | null>(null)
  const ctaStripRef = ref<HTMLElement | null>(null)
  const cardRefs: HTMLElement[] = []
  
  /* -------- Data -------- */
  interface Estate {
    name: string
    location: string
    image: string
    size: number
    planted: string
    farmers: number
    crops: string[]
    ready: boolean
    harvestYear?: number
  }
  
  const estates: Estate[] = [
    {
      name: 'Okitipupa Palm Estate',
      location: 'Anambra State, Nigeria',
      image: '/estate/palm.jpg',
      size: 520,
      planted: '2018',
      farmers: 145,
      crops: ['Oil Palm', 'Palm Kernel'],
      ready: true,
    },
    {
      name: 'Ikom Cocoa Farm',
      location: 'Cross River, Nigeria',
      image: '/estate/cocoa.jpg',
      size: 180,
      planted: '2021',
      farmers: 62,
      crops: ['Cocoa', 'Plantain'],
      ready: false,
      harvestYear: 2027,
    },
    {
      name: 'Abeokuta Plantain Belt',
      location: 'Ogun State, Nigeria',
      image: '/estate/plantain.jpg',
      size: 240,
      planted: '2022',
      farmers: 78,
      crops: ['Plantain', 'Cassava'],
      ready: false,
      harvestYear: 2026,
    },
    {
      name: 'Epe Mixed Farm',
      location: 'Lagos State, Nigeria',
      image: '/estate/maize.jpg',
      size: 95,
      planted: '2020',
      farmers: 41,
      crops: ['Vegetables', 'Maize'],
      ready: true,
    },
    {
      name: 'Uyo Rubber Estate',
      location: 'Akwa Ibom, Nigeria',
      image: '/estate/rubber.jpg',
      size: 165,
      planted: '2019',
      farmers: 54,
      crops: ['Rubber', 'Palm'],
      ready: false,
      harvestYear: 2028,
    },
  ]
  
  /* ---------------------------------------------------------------
     GSAP ENTRANCE + SCROLL ANIMATIONS
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value, ...cardRefs, ctaStripRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0, scale: 1 }
      )
      return
    }
  
    ctx = gsap.context(() => {
      /* --- Header entrance --- */
      gsap.from(eyebrowRef.value, {
        y: 24, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: eyebrowRef.value, start: 'top 85%' },
      })
  
      gsap.from(headingRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.value, start: 'top 82%' },
      })
  
      gsap.from(descRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: descRef.value, start: 'top 85%' },
      })
  
      /* --- Estate cards: staggered reveal --- */
      const cards = cardRefs.filter(Boolean)
      if (cards.length) {
        gsap.from(cards, {
          y: 60,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.value,
            start: 'top 78%',
          },
        })
  
        /* --- Parallax on card images (subtle) --- */
        cards.forEach((card) => {
          const img = card.querySelector('img')
          if (!img) return
  
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            }
          )
        })
      }
  
      /* --- Bottom CTA strip --- */
      gsap.from(ctaStripRef.value, {
        y: 40, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ctaStripRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => {
    ctx?.revert()
    ScrollTrigger.getAll().forEach((t) => t.kill())
  })
  </script>
  
  <style scoped>
  /* Optional: prevent image scale from showing container background */
  .estate-card img {
    will-change: transform;
  }
  </style>