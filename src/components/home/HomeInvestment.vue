<template>
    <section
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg))] overflow-hidden"
    >
      <!-- Ambient background blobs -->
      <div class="absolute -top-32 left-1/4 w-[420px] h-[420px] rounded-full
                  bg-leaf-500/6 blur-3xl pointer-events-none" aria-hidden="true" />
      <div class="absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full
                  bg-harvest-500/6 blur-3xl pointer-events-none" aria-hidden="true" />
  
      <div class="container-page relative">
  
        <!-- ============ HEADER ============ -->
        <div class="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
          <div
            ref="eyebrowRef"
            class="inline-flex items-center gap-2.5 mb-5
                   px-3.5 py-1.5 rounded-full
                   bg-harvest-500/10 border border-harvest-500/20
                   text-harvest-700 dark:text-harvest-400
                   text-[0.78rem] font-semibold tracking-wider uppercase"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-harvest-500 animate-pulse" />
            Investment Opportunities
          </div>
  
          <h2
            ref="headingRef"
            class="font-display font-extrabold
                   text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                   tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
          >
            Grow your capital<br />
            <span class="text-harvest-500">alongside the land.</span>
          </h2>
  
          <p
            ref="descRef"
            class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed"
          >
            Choose a package that matches your horizon. Every plan is backed by
            real hectares, audited yields, and full transparency — no hidden fees.
          </p>
        </div>
  
        <!-- ============ PRICING TIERS ============ -->
        <div
          ref="gridRef"
          class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7
                 items-start max-w-6xl mx-auto"
        >
          <article
            v-for="(tier, i) in tiers"
            :key="tier.name"
            :ref="(el) => { if (el) tierRefs[i] = el as HTMLElement }"
            class="tier-card relative flex flex-col
                   rounded-2xl overflow-hidden
                   transition-all duration-500
                   will-change-transform"
            :class="[
              tier.featured
                ? 'bg-gradient-to-br from-leaf-700 via-leaf-800 to-leaf-900 text-white lg:-translate-y-4 lg:scale-[1.03] shadow-[0_30px_60px_-20px_rgba(46,125,50,0.5)] border border-leaf-600/40 z-10'
                : 'bg-[rgb(var(--surface))] border border-[rgb(var(--border)/0.1)] hover:-translate-y-1.5 hover:border-leaf-500/30 hover:shadow-[0_25px_50px_-25px_rgba(46,125,50,0.35)]',
            ]"
          >
            <!-- Featured badge -->
            <div
              v-if="tier.featured"
              class="absolute top-0 left-1/2 -translate-x-1/2
                     px-4 py-1.5 rounded-b-lg
                     bg-harvest-500 text-leaf-900
                     text-[0.68rem] font-extrabold tracking-wider uppercase
                     shadow-lg"
            >
              Most Popular
            </div>
  
            <!-- Decorative circle (featured only) -->
            <div
              v-if="tier.featured"
              class="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none"
            />
  
            <!-- ---- HEADER ---- -->
            <div class="relative p-7 lg:p-8 pb-6">
              <div class="flex items-baseline gap-2 mb-1">
                <span
                  class="inline-block text-[0.72rem] font-bold uppercase tracking-wider"
                  :class="tier.featured ? 'text-harvest-400' : 'text-leaf-600 dark:text-leaf-400'"
                >
                  {{ tier.tagline }}
                </span>
              </div>
  
              <h3
                class="font-display font-extrabold
                       text-[1.5rem] lg:text-[1.7rem] leading-tight
                       tracking-[-0.02em] mb-2"
                :class="tier.featured ? 'text-white' : 'text-[rgb(var(--text))]'"
              >
                {{ tier.name }}
              </h3>
  
              <p
                class="text-[0.9rem] leading-relaxed mb-7"
                :class="tier.featured ? 'text-white/70' : 'text-[rgb(var(--text-muted))]'"
              >
                {{ tier.summary }}
              </p>
  
              <!-- Price -->
              <div class="flex items-end gap-2 mb-1">
                <span
                  class="font-display font-extrabold leading-none
                         text-[clamp(2rem,4vw,2.75rem)] tracking-[-0.03em]"
                  :class="tier.featured ? 'text-white' : 'text-[rgb(var(--text))]'"
                >
                  {{ tier.price }}
                </span>
                <span
                  class="text-[0.85rem] font-medium mb-1.5"
                  :class="tier.featured ? 'text-white/60' : 'text-[rgb(var(--text-muted))]'"
                >
                  {{ tier.unit }}
                </span>
              </div>
  
              <div
                class="text-[0.82rem] font-medium mb-6"
                :class="tier.featured ? 'text-harvest-300' : 'text-leaf-600 dark:text-leaf-400'"
              >
                {{ tier.yield }}
              </div>
  
              <!-- CTA -->
              <NuxtLink
                :to="tier.ctaHref"
                class="btn w-full justify-center !py-3.5 !text-[0.92rem]"
                :class="tier.featured
                  ? 'bg-harvest-500 text-leaf-900 hover:bg-harvest-400 hover:-translate-y-0.5 shadow-[0_10px_24px_-8px_rgba(249,168,37,0.6)]'
                  : 'bg-leaf-500 text-white hover:bg-leaf-600 hover:-translate-y-0.5 shadow-[0_8px_20px_-8px_rgba(46,125,50,0.5)]'"
              >
                {{ tier.cta }}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </NuxtLink>
            </div>
  
            <!-- ---- FEATURES LIST ---- -->
            <div
              class="relative px-7 lg:px-8 py-6 lg:py-7 border-t"
              :class="tier.featured
                ? 'border-white/10 bg-white/[0.03]'
                : 'border-[rgb(var(--border)/0.08)] bg-[rgb(var(--bg-alt)/0.5)]'"
            >
              <div
                class="text-[0.72rem] font-bold uppercase tracking-wider mb-4"
                :class="tier.featured ? 'text-white/60' : 'text-[rgb(var(--text-muted))]'"
              >
                What's included
              </div>
  
              <ul class="space-y-3">
                <li
                  v-for="feature in tier.features"
                  :key="feature"
                  class="flex items-start gap-3"
                >
                  <span
                    class="shrink-0 grid place-items-center w-5 h-5 rounded-full mt-0.5"
                    :class="tier.featured
                      ? 'bg-harvest-500/20 text-harvest-400'
                      : 'bg-leaf-500/15 text-leaf-600 dark:text-leaf-400'"
                    v-html="checkIcon"
                  />
                  <span
                    class="text-[0.9rem] leading-relaxed"
                    :class="tier.featured ? 'text-white/85' : 'text-[rgb(var(--text))]'"
                  >
                    {{ feature }}
                  </span>
                </li>
              </ul>
  
              <!-- Footer meta -->
              <div
                class="mt-6 pt-5 border-t text-[0.78rem]"
                :class="tier.featured
                  ? 'border-white/10 text-white/55'
                  : 'border-[rgb(var(--border)/0.08)] text-[rgb(var(--text-muted))]'"
              >
                <div class="flex items-center gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  {{ tier.duration }}
                </div>
              </div>
            </div>
          </article>
        </div>
  
        <!-- ============ ENTERPRISE STRIP ============ -->
        <div
          ref="enterpriseRef"
          class="mt-10 lg:mt-14 max-w-6xl mx-auto
                 rounded-2xl border border-[rgb(var(--border)/0.1)]
                 bg-[rgb(var(--surface))]
                 p-7 lg:p-9
                 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div class="flex items-start gap-5">
            <div
              class="shrink-0 grid place-items-center w-14 h-14 rounded-xl
                     bg-gradient-to-br from-leaf-500 to-leaf-700
                     text-white shadow-[0_8px_20px_-8px_rgba(46,125,50,0.5)]"
              v-html="buildingIcon"
            />
            <div>
              <h3 class="font-display font-bold text-[1.2rem] leading-tight text-[rgb(var(--text))] mb-1.5">
                Enterprise & Institutional Investors
              </h3>
              <p class="text-[rgb(var(--text-muted))] text-[0.92rem] leading-relaxed max-w-xl">
                Custom allocations from <strong class="text-[rgb(var(--text))]">$250K</strong> upward.
                Direct estate ownership, board seats, and co-development opportunities.
              </p>
            </div>
          </div>
  
          <NuxtLink
            to="/contact?type=enterprise"
            class="btn !px-6 !py-3.5 shrink-0
                   border-2 border-leaf-500 text-leaf-600 dark:text-leaf-400
                   hover:bg-leaf-500 hover:text-white
                   transition-all duration-300"
          >
            Talk to Our Team
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </NuxtLink>
        </div>
  
        <!-- ============ TRUST MARKERS ============ -->
        <div
          ref="trustRef"
          class="mt-12 lg:mt-14 max-w-6xl mx-auto
                 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          <div
            v-for="trust in trustMarkers"
            :key="trust.title"
            class="flex items-start gap-4"
          >
            <div
              class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                     bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
              v-html="trust.icon"
            />
            <div>
              <div class="font-semibold text-[0.95rem] text-[rgb(var(--text))] mb-1">
                {{ trust.title }}
              </div>
              <div class="text-[rgb(var(--text-muted))] text-[0.85rem] leading-relaxed">
                {{ trust.description }}
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ LEGAL FOOTNOTE ============ -->
        <div
          ref="footnoteRef"
          class="mt-14 max-w-3xl mx-auto text-center
                 text-[0.78rem] text-[rgb(var(--text-muted))] leading-relaxed"
        >
          <p>
            Yields are historical averages and not a guarantee of future returns.
            All investments are subject to independent audit, agricultural risk, and
            applicable securities regulations. Download the full
            <NuxtLink to="/legal/prospectus" class="underline decoration-dotted hover:text-leaf-600 dark:hover:text-leaf-400">
              investor prospectus
            </NuxtLink> for complete terms.
          </p>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  /* -------- Icons -------- */
  const checkIcon = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`
  
  const buildingIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>`
  
  const shieldIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`
  
  const fileIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`
  
  const bankIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>`
  
  /* -------- Refs -------- */
  const sectionRef    = ref<HTMLElement | null>(null)
  const eyebrowRef    = ref<HTMLElement | null>(null)
  const headingRef    = ref<HTMLElement | null>(null)
  const descRef       = ref<HTMLElement | null>(null)
  const gridRef       = ref<HTMLElement | null>(null)
  const enterpriseRef = ref<HTMLElement | null>(null)
  const trustRef      = ref<HTMLElement | null>(null)
  const footnoteRef   = ref<HTMLElement | null>(null)
  const tierRefs: HTMLElement[] = []
  
  /* -------- Types -------- */
  interface Tier {
    name: string
    tagline: string
    summary: string
    price: string
    unit: string
    yield: string
    duration: string
    features: string[]
    cta: string
    ctaHref: string
    featured?: boolean
  }
  
  /* -------- Data -------- */
  const tiers: Tier[] = [
    {
      name: 'Seedling',
      tagline: 'Entry Level',
      summary: 'A great first step into ethical agribusiness — own a share of a working estate.',
      price: '$5,000',
      unit: '/ 1 hectare',
      yield: 'Historical avg. 12–14% p.a.',
      duration: '5-year term with quarterly reporting',
      features: [
        'Fractional ownership of 1 hectare',
        'Palm or plantain cycle',
        'Quarterly progress reports',
        'Access to investor dashboard',
        'Exit option at year 5',
      ],
      cta: 'Choose Seedling',
      ctaHref: '/invest/seedling',
    },
    {
      name: 'Growth',
      tagline: 'Most Popular',
      summary: 'For investors who want meaningful exposure and priority access to premium harvests.',
      price: '$25,000',
      unit: '/ 5 hectares',
      yield: 'Historical avg. 15–18% p.a.',
      duration: '7-year term with priority exit',
      features: [
        'Full ownership of 5 hectares',
        'Choice of crop — palm, cocoa, or plantain',
        'Priority access to harvest yields',
        'Dedicated account manager',
        'Annual on-site visit',
        'Early exit option at year 5',
      ],
      cta: 'Choose Growth',
      ctaHref: '/invest/growth',
      featured: true,
    },
    {
      name: 'Estate',
      tagline: 'Premium',
      summary: 'A flagship tier with maximum allocation, named estate rights, and co-development voice.',
      price: '$100,000',
      unit: '/ 25 hectares',
      yield: 'Historical avg. 18–22% p.a.',
      duration: '10-year term with structured exit',
      features: [
        'Ownership of 25 hectares',
        'Named estate plot rights',
        'Co-development of new acreage',
        'Quarterly board updates',
        'Two annual on-site visits',
        'Priority allocation in future estates',
      ],
      cta: 'Choose Estate',
      ctaHref: '/invest/estate',
    },
  ]
  
  const trustMarkers = [
    {
      title: 'Independently Audited',
      description: 'Annual third-party audits of yields, land titles, and financials.',
      icon: shieldIcon,
    },
    {
      title: 'Full Legal Transparency',
      description: 'Investor prospectus, land deeds, and terms reviewed by counsel.',
      icon: fileIcon,
    },
    {
      title: 'Insured Against Loss',
      description: 'Every estate carries crop, weather, and liability insurance.',
      icon: bankIcon,
    },
  ]
  
  /* ---------------------------------------------------------------
     GSAP — reveals
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         ...tierRefs, enterpriseRef.value, trustRef.value, footnoteRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, scale: 1 }
      )
      return
    }
  
    ctx = gsap.context(() => {
      /* --- Header --- */
      gsap.from(eyebrowRef.value, {
        y: 24, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: eyebrowRef.value, start: 'top 88%' },
      })
      gsap.from(headingRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.value, start: 'top 85%' },
      })
      gsap.from(descRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: descRef.value, start: 'top 88%' },
      })
  
      /* --- Tier cards --- */
      const tiers = tierRefs.filter(Boolean)
      tiers.forEach((tier, i) => {
        const featured = tier.classList.contains('z-10')
  
        gsap.from(tier, {
          y: featured ? 80 : 60,
          autoAlpha: 0,
          scale: featured ? 0.95 : 1,
          duration: 1,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.value,
            start: 'top 75%',
          },
        })
      })
  
      /* --- Enterprise --- */
      gsap.from(enterpriseRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: enterpriseRef.value, start: 'top 85%' },
      })
  
      /* --- Trust markers --- */
      const trustItems = trustRef.value?.children ?? []
      if (trustItems.length) {
        gsap.from(trustItems, {
          y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: trustRef.value, start: 'top 88%' },
        })
      }
  
      /* --- Footnote --- */
      gsap.from(footnoteRef.value, {
        y: 20, autoAlpha: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: footnoteRef.value, start: 'top 92%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => {
    ctx?.revert()
  })
  </script>
  
  <style scoped>
  .tier-card {
    min-height: 100%;
  }
  </style>