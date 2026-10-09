<template>
    <section
      ref="sectionRef"
      class="relative isolate overflow-hidden
             pt-14 lg:pt-20 pb-16 lg:pb-24
             bg-[rgb(var(--bg))]"
    >
      <!-- Ambient background -->
      <div
        class="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full
               bg-leaf-500/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        class="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full
               bg-harvest-500/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <!-- Faint grid -->
      <div
        class="absolute inset-0 opacity-[0.35] dark:opacity-[0.12] pointer-events-none"
        style="background-image:
          linear-gradient(to right, rgb(var(--border) / 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(var(--border) / 0.06) 1px, transparent 1px);
          background-size: 72px 72px;"
        aria-hidden="true"
      />
  
      <div class="container-page relative">
  
        <!-- ============ BREADCRUMB ============ -->
        <nav
          ref="breadcrumbRef"
          aria-label="Breadcrumb"
          class="flex items-center gap-2 mb-10
                 text-[0.82rem] font-medium
                 text-[rgb(var(--text-muted))]"
        >
          <NuxtLink
            to="/"
            class="hover:text-leaf-600 dark:hover:text-leaf-400
                   transition-colors duration-200"
          >
            Home
          </NuxtLink>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.4"
               stroke-linecap="round" stroke-linejoin="round"
               class="text-[rgb(var(--text-muted)/0.5)]">
            <path d="m9 18 6-6-6-6"/>
          </svg>
          <span class="text-[rgb(var(--text))] font-semibold">FAQ</span>
        </nav>
  
        <!-- ============ MAIN GRID ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
  
          <!-- ============ LEFT: STATEMENT + SEARCH ============ -->
          <div class="lg:col-span-6">
  
            <!-- Eyebrow -->
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-6
                     px-3.5 py-1.5 rounded-full
                     bg-leaf-500/10 border border-leaf-500/20
                     text-leaf-600 dark:text-leaf-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
              Help Center
            </div>
  
            <!-- Headline -->
            <h1
              ref="headlineRef"
              class="font-display font-extrabold
                     text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]
                     tracking-[-0.035em] text-[rgb(var(--text))] mb-6 max-w-xl"
            >
              Questions,<br />
              answered <span class="text-leaf-500">honestly.</span>
            </h1>
  
            <!-- Lead paragraph -->
            <p
              ref="leadRef"
              class="text-[rgb(var(--text-muted))] text-[1.08rem] leading-relaxed
                     max-w-xl mb-9"
            >
              Everything buyers, investors, and partners ask us — organized by
              topic. If your question isn't answered here, our team responds
              within 24 hours.
            </p>
  
            <!-- Search bar -->
            <div
              ref="searchWrapRef"
              class="relative max-w-xl mb-8"
            >
              <span
                class="absolute left-4 top-1/2 -translate-y-1/2
                       text-[rgb(var(--text-muted))] pointer-events-none"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.2"
                     stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </span>
              <input
                ref="searchInputRef"
                v-model="searchQuery"
                type="text"
                placeholder="Search 40+ questions…"
                class="w-full h-[56px] pl-12 pr-4 rounded-xl
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.12)]
                       text-[rgb(var(--text))] text-[1rem]
                       placeholder:text-[rgb(var(--text-muted))]
                       focus:outline-none focus:border-leaf-500
                       focus:ring-4 focus:ring-leaf-500/15
                       transition-all duration-200"
                @keydown.enter="scrollToResults"
              />
              <button
                v-if="searchQuery"
                type="button"
                class="absolute right-3 top-1/2 -translate-y-1/2
                       grid place-items-center w-7 h-7 rounded-full
                       bg-[rgb(var(--bg-alt))]
                       text-[rgb(var(--text-muted))]
                       hover:text-leaf-600 dark:hover:text-leaf-400
                       transition-colors duration-200"
                @click="searchQuery = ''"
                aria-label="Clear search"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
  
            <!-- Quick hint chips -->
            <div
              ref="hintChipsRef"
              class="flex flex-wrap items-center gap-2"
            >
              <span
                class="text-[rgb(var(--text-muted))] text-[0.82rem]
                       font-medium mr-1 hidden sm:block"
              >
                Popular:
              </span>
              <button
                v-for="hint in popularSearches"
                :key="hint"
                type="button"
                class="px-3 py-1.5 rounded-full
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.12)]
                       text-[rgb(var(--text))] text-[0.82rem] font-medium
                       hover:border-leaf-500 hover:text-leaf-600
                       dark:hover:text-leaf-400
                       transition-all duration-200"
                @click="applySearch(hint)"
              >
                {{ hint }}
              </button>
            </div>
          </div>
  
          <!-- ============ RIGHT: CATEGORY TILES ============ -->
          <div
            ref="categoriesRef"
            class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5"
          >
            <NuxtLink
              v-for="(category, i) in categories"
              :key="category.slug"
              :to="`/faq/${category.slug}`"
              class="category-tile group relative flex flex-col
                     rounded-2xl p-6 lg:p-7
                     bg-[rgb(var(--surface))]
                     border border-[rgb(var(--border)/0.08)]
                     transition-all duration-500
                     hover:-translate-y-1.5
                     hover:border-leaf-500/30
                     hover:shadow-[0_25px_50px_-20px_rgba(46,125,50,0.25)]"
            >
              <!-- Icon -->
              <div
                class="grid place-items-center w-12 h-12 rounded-xl mb-5
                       transition-all duration-500
                       group-hover:scale-110 group-hover:-rotate-6"
                :class="category.iconBg"
                v-html="category.icon"
              />
  
              <!-- Title -->
              <h3
                class="font-display font-bold text-[rgb(var(--text))]
                       text-[1.1rem] leading-tight mb-2"
              >
                {{ category.title }}
              </h3>
  
              <!-- Description -->
              <p
                class="text-[rgb(var(--text-muted))] text-[0.88rem]
                       leading-relaxed mb-5 flex-1"
              >
                {{ category.description }}
              </p>
  
              <!-- Footer: count + arrow -->
              <div
                class="flex items-center justify-between gap-3 pt-4
                       border-t border-[rgb(var(--border)/0.08)]"
              >
                <span class="text-[0.78rem] text-[rgb(var(--text-muted))]
                             font-semibold">
                  {{ category.count }} questions
                </span>
                <span
                  class="grid place-items-center w-7 h-7 rounded-full
                         bg-[rgb(var(--bg-alt))]
                         text-[rgb(var(--text-muted))]
                         transition-all duration-300
                         group-hover:bg-leaf-500 group-hover:text-white
                         group-hover:translate-x-0.5"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.4"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </span>
              </div>
  
              <!-- Bottom accent on hover -->
              <div
                class="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0
                       bg-gradient-to-r from-leaf-500 to-harvest-500
                       group-hover:scale-x-100 transition-transform duration-500
                       rounded-b-2xl"
              />
            </NuxtLink>
          </div>
        </div>
  
        <!-- ============ STATS ROW ============ -->
        <div
          ref="statsRowRef"
          class="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8
                 pt-8 lg:pt-10 border-t border-[rgb(var(--border)/0.1)]"
        >
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex items-center gap-3.5"
          >
            <span
              class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                     bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
              v-html="stat.icon"
            />
            <div>
              <div
                class="font-display font-extrabold text-[rgb(var(--text))]
                       text-[1.35rem] leading-none mb-1 tabular-nums"
              >
                {{ stat.value }}
              </div>
              <div class="text-[rgb(var(--text-muted))] text-[0.78rem]
                          font-medium leading-tight">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ SCROLL CUE ============ -->
        <div
          ref="scrollCueRef"
          class="mt-16 lg:mt-20 flex items-center justify-center gap-3
                 text-[rgb(var(--text-muted))] text-[0.72rem]
                 uppercase tracking-[0.25em] font-semibold"
        >
          <span class="h-px w-12 bg-[rgb(var(--border)/0.3)]" />
          <span>Browse all questions</span>
          <span class="h-px w-12 bg-[rgb(var(--border)/0.3)]" />
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { SplitText } from 'gsap/SplitText'
  import { useFaqFilter } from '~/composables/useFaqFilter'
  
  gsap.registerPlugin(SplitText)
  
  /* -------- Shared filter state (used by hero + grid below) -------- */
  const { searchQuery } = useFaqFilter()
  
  /* -------- Icons for categories -------- */
  const icons = {
    cart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
    chart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    leaf: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    building: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>`,
  }
  
  /* -------- Category tiles -------- */
  const categories = [
    {
      slug: 'buying',
      title: 'Buying our produce',
      description: 'Order volumes, pricing, samples, shipping, documentation, and payment terms.',
      count: 12,
      icon: icons.cart,
      iconBg: 'bg-leaf-500/12 text-leaf-600 dark:text-leaf-400',
    },
    {
      slug: 'investing',
      title: 'Investing in estates',
      description: 'Packages, returns, risk, exits, legal structure, and reporting cadence.',
      count: 10,
      icon: icons.chart,
      iconBg: 'bg-harvest-500/15 text-harvest-700 dark:text-harvest-400',
    },
    {
      slug: 'sustainability',
      title: 'Sustainability & impact',
      description: 'Certifications, methodology, audits, carbon, water, and community programs.',
      count: 9,
      icon: icons.leaf,
      iconBg: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400',
    },
    {
      slug: 'company',
      title: 'Company & operations',
      description: 'Our estates, our team, careers, partnerships, media, and press inquiries.',
      count: 9,
      icon: icons.building,
      iconBg: 'bg-blue-500/12 text-blue-600 dark:text-blue-400',
    },
  ]
  
  /* -------- Stats row -------- */
  const stats = [
    {
      value: '40+',
      label: 'Questions answered',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/></svg>`,
    },
    {
      value: '4',
      label: 'Topic areas',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>`,
    },
    {
      value: '24h',
      label: 'Average reply time',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    },
    {
      value: '100%',
      label: 'Answered by humans',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
    },
  ]
  
  /* -------- Popular searches -------- */
  const popularSearches = ['MOQ', 'deposits', 'certifications', 'shipping']
  
  const applySearch = (term: string) => {
    searchQuery.value = term
    scrollToResults()
  }
  
  const scrollToResults = () => {
    nextTick(() => {
      const el = document.getElementById('faq-grid')
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }
  
  /* -------- Refs -------- */
  const sectionRef    = ref<HTMLElement | null>(null)
  const breadcrumbRef = ref<HTMLElement | null>(null)
  const eyebrowRef    = ref<HTMLElement | null>(null)
  const headlineRef   = ref<HTMLElement | null>(null)
  const leadRef       = ref<HTMLElement | null>(null)
  const searchWrapRef = ref<HTMLElement | null>(null)
  const hintChipsRef  = ref<HTMLElement | null>(null)
  const categoriesRef = ref<HTMLElement | null>(null)
  const statsRowRef   = ref<HTMLElement | null>(null)
  const scrollCueRef  = ref<HTMLElement | null>(null)
  const searchInputRef = ref<HTMLInputElement | null>(null)
  
  /* ---------------------------------------------------------------
     ENTRANCE
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [breadcrumbRef.value, eyebrowRef.value, headlineRef.value, leadRef.value,
         searchWrapRef.value, hintChipsRef.value, statsRowRef.value,
         scrollCueRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0 }
      )
      return
    }
  
    ctx = gsap.context(() => {
      /* --- Split headline --- */
      let split: SplitText | null = null
      if (headlineRef.value) {
        split = new SplitText(headlineRef.value, {
          type: 'lines,words',
          linesClass: 'overflow-hidden',
        })
      }
  
      /* --- Master timeline --- */
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 })
  
      tl
        .from(breadcrumbRef.value, { y: 16, autoAlpha: 0, duration: 0.5 })
        .from(eyebrowRef.value,    { y: 20, autoAlpha: 0, duration: 0.6 }, '-=0.2')
        .from(split?.words ?? [], {
          y: 60, autoAlpha: 0, duration: 0.9, stagger: 0.05, ease: 'power4.out',
        }, '-=0.35')
        .from(leadRef.value, { y: 24, autoAlpha: 0, duration: 0.7 }, '-=0.5')
        .from(searchWrapRef.value, { y: 20, autoAlpha: 0, duration: 0.7 }, '-=0.5')
        .from(hintChipsRef.value?.children ?? [], {
          y: 12, autoAlpha: 0, duration: 0.4, stagger: 0.06,
        }, '-=0.4')
  
      /* --- Category tiles stagger --- */
      if (categoriesRef.value) {
        gsap.from(categoriesRef.value.children, {
          y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          delay: 0.4,
        })
      }
  
      /* --- Stats row --- */
      if (statsRowRef.value) {
        gsap.from(statsRowRef.value.children, {
          y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          delay: 0.9,
        })
      }
  
      /* --- Scroll cue --- */
      gsap.from(scrollCueRef.value, {
        y: 12, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        delay: 1.2,
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>
  
  <style scoped>
  .category-tile {
    will-change: transform;
  }
  </style>