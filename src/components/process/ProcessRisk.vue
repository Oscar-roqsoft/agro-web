<template>
    <section
      id="risk"
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg))] overflow-hidden scroll-mt-24"
    >
      <!-- Ambient blobs -->
      <div
        class="absolute -top-40 -right-32 w-[420px] h-[420px] rounded-full
               bg-harvest-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        class="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full
               bg-leaf-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
  
      <div class="container-page relative">
  
        <!-- ============ HEADER ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div class="lg:col-span-7">
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-5
                     px-3.5 py-1.5 rounded-full
                     bg-harvest-500/10 border border-harvest-500/20
                     text-harvest-700 dark:text-harvest-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-harvest-500" />
              Risk & Mitigation
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              What can go wrong,<br />
              <span class="text-harvest-500">and how we handle it.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
              Agriculture isn't risk-free — and no honest operator pretends it
              is. Here are the six risks we track most closely, the documented
              mitigations we've built, and our track record on each.
            </p>
          </div>
        </div>
  
        <!-- ============ RISK GRID ============ -->
        <div
          ref="gridRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-14 lg:mb-20"
        >
          <article
            v-for="risk in risks"
            :key="risk.id"
            class="risk-card group relative flex flex-col
                   rounded-2xl overflow-hidden
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]
                   transition-all duration-500
                   hover:-translate-y-1.5
                   hover:border-harvest-500/30
                   hover:shadow-[0_25px_50px_-20px_rgba(249,168,37,0.25)]"
          >
            <!-- Top accent line -->
            <div
              class="absolute top-0 left-0 right-0 h-1 origin-left scale-x-100"
              :class="risk.accentBar"
            />
  
            <!-- Header -->
            <div class="p-6 pb-5">
              <!-- Category + severity -->
              <div class="flex items-start justify-between gap-3 mb-5">
                <span
                  class="grid place-items-center w-11 h-11 rounded-xl
                         transition-transform duration-500
                         group-hover:scale-110"
                  :class="risk.iconBg"
                  v-html="risk.icon"
                />
  
                <span
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md
                         text-[0.66rem] font-bold uppercase tracking-wider"
                  :class="severityBadge(risk.severity)"
                >
                  <span
                    class="w-1 h-1 rounded-full"
                    :class="severityDot(risk.severity)"
                  />
                  {{ risk.severity }} risk
                </span>
              </div>
  
              <!-- Title -->
              <h3
                class="font-display font-bold text-[rgb(var(--text))]
                       text-[1.1rem] leading-tight mb-2.5"
              >
                {{ risk.title }}
              </h3>
  
              <!-- Description -->
              <p
                class="text-[rgb(var(--text-muted))] text-[0.88rem]
                       leading-relaxed"
              >
                {{ risk.description }}
              </p>
            </div>
  
            <!-- Mitigation section -->
            <div
              class="px-6 py-5 border-t border-[rgb(var(--border)/0.08)]
                     bg-[rgb(var(--bg-alt)/0.5)]"
            >
              <div
                class="text-[0.68rem] uppercase tracking-wider
                       font-bold text-leaf-600 dark:text-leaf-400 mb-3
                       flex items-center gap-2"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="3"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                Our mitigation
              </div>
  
              <ul class="space-y-2.5 mb-5">
                <li
                  v-for="item in risk.mitigations"
                  :key="item"
                  class="flex items-start gap-2.5
                         text-[rgb(var(--text))] text-[0.85rem] leading-snug"
                >
                  <span
                    class="mt-1.5 w-1 h-1 rounded-full bg-leaf-500 shrink-0"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
  
              <!-- Track record -->
              <div
                class="flex items-center gap-3 pt-4
                       border-t border-[rgb(var(--border)/0.08)]"
              >
                <span
                  class="shrink-0 grid place-items-center w-7 h-7 rounded-lg
                         bg-leaf-500/12 text-leaf-600 dark:text-leaf-400"
                  v-html="shieldCheckIcon"
                />
                <div>
                  <div class="text-[0.68rem] uppercase tracking-wider
                              font-bold text-[rgb(var(--text-muted))]">
                    Track record
                  </div>
                  <div class="text-[0.85rem] font-semibold
                              text-[rgb(var(--text))] leading-tight">
                    {{ risk.trackRecord }}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
  
        <!-- ============ EXPOSURE SUMMARY STRIP ============ -->
        <div
          ref="summaryRef"
          class="rounded-3xl overflow-hidden mb-14 lg:mb-20"
        >
          <div
            class="relative bg-gradient-to-br from-leaf-700 via-leaf-800 to-leaf-900
                   p-7 lg:p-10"
          >
            <!-- Decorative circles -->
            <div class="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/5" />
            <div class="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5" />
  
            <div class="relative z-10">
              <!-- Header -->
              <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-9">
                <div>
                  <div
                    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                           bg-white/10 backdrop-blur-md border border-white/20
                           text-harvest-300 text-[0.68rem]
                           font-bold uppercase tracking-wider mb-5"
                  >
                    <span class="w-1 h-1 rounded-full bg-harvest-400 animate-pulse" />
                    Exposure Summary
                  </div>
  
                  <h3
                    class="font-display font-extrabold text-white
                           text-[clamp(1.35rem,2.5vw,1.85rem)] leading-tight
                           tracking-[-0.02em] max-w-xl"
                  >
                    Our overall exposure,<br class="hidden sm:block" />
                    in four numbers.
                  </h3>
                </div>
  
                <div class="text-white/60 text-[0.82rem] leading-relaxed max-w-xs">
                  Tracked quarterly by our risk committee and reported to
                  institutional investors.
                </div>
              </div>
  
              <!-- Metrics grid -->
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div
                  v-for="metric in metrics"
                  :key="metric.label"
                  class="exposure-metric"
                >
                  <div class="flex items-baseline gap-1.5 mb-2">
                    <span
                      class="exposure-number
                             font-display font-extrabold text-white
                             text-[clamp(1.85rem,3.5vw,2.5rem)] leading-none
                             tracking-[-0.03em] tabular-nums"
                      :data-target="metric.value"
                      :data-decimals="metric.decimals || 0"
                    >
                      0
                    </span>
                    <span
                      v-if="metric.suffix"
                      class="font-display font-bold
                             text-[1rem] leading-none
                             text-harvest-400"
                    >
                      {{ metric.suffix }}
                    </span>
                  </div>
                  <div class="text-white/80 text-[0.88rem] font-semibold
                              leading-tight mb-1.5">
                    {{ metric.label }}
                  </div>
                  <div class="text-white/50 text-[0.75rem] leading-snug">
                    {{ metric.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ INSURANCE & GOVERNANCE STRIP ============ -->
        <div
          ref="insuranceRef"
          class="rounded-2xl p-6 lg:p-8
                 bg-[rgb(var(--surface))]
                 border border-[rgb(var(--border)/0.08)]
                 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div class="lg:col-span-4">
            <div
              class="inline-flex items-center gap-2.5 mb-4
                     px-3 py-1.5 rounded-full
                     bg-leaf-500/10 border border-leaf-500/20
                     text-leaf-600 dark:text-leaf-400
                     text-[0.72rem] font-bold tracking-wider uppercase"
            >
              <span class="w-1 h-1 rounded-full bg-leaf-500" />
              Insurance & Governance
            </div>
  
            <h4
              class="font-display font-bold text-[rgb(var(--text))]
                     text-[1.15rem] leading-tight tracking-[-0.015em]"
            >
              Every estate is<br />insured and audited.
            </h4>
          </div>
  
          <div class="lg:col-span-8">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div
                v-for="item in governance"
                :key="item.title"
                class="flex items-start gap-3"
              >
                <span
                  class="shrink-0 grid place-items-center w-10 h-10 rounded-xl
                         bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                  v-html="item.icon"
                />
                <div>
                  <div class="font-semibold text-[rgb(var(--text))]
                              text-[0.92rem] leading-tight mb-1">
                    {{ item.title }}
                  </div>
                  <div class="text-[rgb(var(--text-muted))] text-[0.82rem]
                              leading-snug">
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ BOTTOM CTA ============ -->
        <div
          ref="ctaRef"
          class="mt-14 lg:mt-20 max-w-3xl mx-auto text-center"
        >
          <div
            class="text-[rgb(var(--text-muted))] text-[0.78rem]
                   uppercase tracking-[0.2em] font-semibold mb-4"
          >
            Need the full risk register?
          </div>
          <h3
            class="font-display font-extrabold
                   text-[clamp(1.35rem,2.5vw,1.85rem)] leading-tight
                   tracking-[-0.02em] text-[rgb(var(--text))] mb-6"
          >
            We share the complete risk register<br class="hidden sm:block" />
            with institutional investors and buyers.
          </h3>
  
          <div class="flex flex-wrap justify-center gap-3">
            <NuxtLink
              to="/contact?type=investor&topic=risk-register"
              class="btn !px-6 !py-3.5
                     bg-leaf-500 text-white font-semibold
                     hover:bg-leaf-600 hover:-translate-y-0.5
                     shadow-[0_10px_24px_-8px_rgba(46,125,50,0.5)]"
            >
              Request Risk Register
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/legal/prospectus"
              class="btn !px-6 !py-3.5
                     border border-[rgb(var(--border)/0.15)]
                     text-[rgb(var(--text))]
                     hover:border-leaf-500 hover:text-leaf-600
                     dark:hover:text-leaf-400"
            >
              Read Investor Prospectus
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
  
  /* -------- Icons -------- */
  const icons = {
    weather: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6M8 14v6M12 16v6"/></svg>`,
    bug: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 2 1.88 1.88M14.12 3.88 16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6zM12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>`,
    trend: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    ship: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21h20M5 21V10l7-5 7 5v11M12 10v11M9 13h6"/></svg>`,
    users: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  }
  
  const shieldCheckIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`
  
  /* -------- Risks data -------- */
  interface Risk {
    id: string
    title: string
    description: string
    severity: 'low' | 'medium' | 'high'
    icon: string
    iconBg: string
    accentBar: string
    mitigations: string[]
    trackRecord: string
  }
  
  const risks: Risk[] = [
    {
      id: 'weather',
      title: 'Weather & climate volatility',
      description: 'Droughts, erratic rainfall, and heat waves can reduce yields or delay harvests.',
      severity: 'high',
      icon: icons.weather,
      iconBg: 'bg-blue-500/12 text-blue-600 dark:text-blue-400',
      accentBar: 'bg-blue-500',
      mitigations: [
        'Drip irrigation on 70% of acreage',
        'Rainwater harvesting on every estate',
        'Weather-indexed crop insurance',
        'Multi-region spread across 4 states',
      ],
      trackRecord: '0 total crop-loss events since 2010',
    },
    {
      id: 'disease',
      title: 'Pest & disease outbreaks',
      description: 'Fungal infections, pest infestations, and crop diseases can devastate a single estate.',
      severity: 'medium',
      icon: icons.bug,
      iconBg: 'bg-harvest-500/12 text-harvest-600 dark:text-harvest-400',
      accentBar: 'bg-harvest-500',
      mitigations: [
        'Integrated Pest Management (IPM)',
        'Resistant crop varieties',
        'Monthly field scouting',
        'Early-warning alert network',
      ],
      trackRecord: 'Below 2% yield loss in 8 of last 10 years',
    },
    {
      id: 'price',
      title: 'Commodity price swings',
      description: 'Global commodity prices for palm, cocoa, and rubber can drop sharply, affecting margins.',
      severity: 'medium',
      icon: icons.trend,
      iconBg: 'bg-leaf-500/12 text-leaf-600 dark:text-leaf-400',
      accentBar: 'bg-leaf-500',
      mitigations: [
        'Diversified 9-crop portfolio',
        'Long-term buyer contracts (6–12 months)',
        'Forward pricing on 40% of volume',
        'Fairtrade price floor for cocoa',
      ],
      trackRecord: 'Positive gross margin in every year since 2013',
    },
    {
      id: 'logistics',
      title: 'Logistics & port delays',
      description: 'Port congestion, carrier shortages, or documentation errors can delay shipments by weeks.',
      severity: 'medium',
      icon: icons.ship,
      iconBg: 'bg-indigo-500/12 text-indigo-600 dark:text-indigo-400',
      accentBar: 'bg-indigo-500',
      mitigations: [
        'Two backup freight forwarders',
        'Pre-cleared export documentation',
        'Multi-port shipping options',
        '14-day buffer on all shipping quotes',
      ],
      trackRecord: '99.4% on-time delivery across 240+ containers',
    },
    {
      id: 'labor',
      title: 'Labor availability & turnover',
      description: 'Rural labor shortages and turnover can disrupt harvest timing and quality.',
      severity: 'low',
      icon: icons.users,
      iconBg: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400',
      accentBar: 'bg-emerald-500',
      mitigations: [
        'Above-market wages reduce turnover',
        'Cross-training across roles',
        'Outgrower network as surge capacity',
        'Seasonal worker housing on estates',
      ],
      trackRecord: 'Average tenure of 5.2 years across field staff',
    },
    {
      id: 'regulatory',
      title: 'Regulatory & trade policy',
      description: 'Export regulations, tariffs, or international trade policy shifts can affect access to markets.',
      severity: 'low',
      icon: icons.shield,
      iconBg: 'bg-slate-500/12 text-slate-600 dark:text-slate-400',
      accentBar: 'bg-slate-500',
      mitigations: [
        'Multi-country export diversification',
        'Legal counsel in 3 jurisdictions',
        'Active NEPC + Chamber of Commerce relationships',
        'Quarterly regulatory review',
      ],
      trackRecord: 'Zero regulatory incidents in 15 years of export',
    },
  ]
  
  /* -------- Severity helpers -------- */
  const severityBadge = (s: string) =>
    ({
      low: 'bg-leaf-500/15 text-leaf-700 dark:text-leaf-400',
      medium: 'bg-harvest-500/15 text-harvest-700 dark:text-harvest-400',
      high: 'bg-red-500/15 text-red-600 dark:text-red-400',
    }[s] || '')
  
  const severityDot = (s: string) =>
    ({
      low: 'bg-leaf-500',
      medium: 'bg-harvest-500',
      high: 'bg-red-500',
    }[s] || '')
  
  /* -------- Exposure metrics -------- */
  const metrics = [
    {
      value: 100,
      suffix: '%',
      decimals: 0,
      label: 'Insured acreage',
      description: 'Every hectare covered by crop + weather insurance',
    },
    {
      value: 9,
      suffix: ' crops',
      decimals: 0,
      label: 'Crop diversification',
      description: 'Spreading exposure across multiple commodity markets',
    },
    {
      value: 4,
      suffix: ' states',
      decimals: 0,
      label: 'Geographic spread',
      description: 'No single-region climate event impacts all estates',
    },
    {
      value: 0,
      suffix: '',
      decimals: 0,
      label: 'Uninsured events',
      description: 'Every loss event in 15 years was covered',
    },
  ]
  
  /* -------- Governance items -------- */
  const governance = [
    {
      title: 'Insurance',
      description: 'Crop, weather, liability, and cargo coverage via SGS-approved underwriters',
      icon: icons.shield,
    },
    {
      title: 'Risk committee',
      description: 'Quarterly reviews with external advisors and board oversight',
      icon: icons.users,
    },
    {
      title: 'Legal counsel',
      description: 'Standing counsel in Nigeria, UK, and EU for cross-border compliance',
      icon: icons.weather, // reuse weather icon (unused warning below)
    },
  ]
  
  /* -------- Refs -------- */
  const sectionRef = ref<HTMLElement | null>(null)
  const eyebrowRef = ref<HTMLElement | null>(null)
  const headingRef = ref<HTMLElement | null>(null)
  const descRef    = ref<HTMLElement | null>(null)
  const gridRef    = ref<HTMLElement | null>(null)
  const summaryRef = ref<HTMLElement | null>(null)
  const insuranceRef = ref<HTMLElement | null>(null)
  const ctaRef     = ref<HTMLElement | null>(null)
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    /* Query risk cards once */
    const riskCards = sectionRef.value?.querySelectorAll<HTMLElement>('.risk-card') ?? []
    const metricsEls = sectionRef.value?.querySelectorAll<HTMLElement>('.exposure-metric') ?? []
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         ...Array.from(riskCards), summaryRef.value,
         insuranceRef.value, ctaRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0 }
      )
      setFinalCounters()
      return
    }
  
    ctx = gsap.context(() => {
      /* --- Header --- */
      gsap.from(eyebrowRef.value, {
        y: 20, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: eyebrowRef.value, start: 'top 88%' },
      })
      gsap.from(headingRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.value, start: 'top 85%' },
      })
      gsap.from(descRef.value, {
        y: 24, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: descRef.value, start: 'top 88%' },
      })
  
      /* --- Risk cards stagger --- */
      if (riskCards.length) {
        gsap.from(riskCards, {
          y: 50, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.value, start: 'top 78%' },
        })
      }
  
      /* --- Summary strip --- */
      gsap.from(summaryRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: {
          trigger: summaryRef.value,
          start: 'top 82%',
          onEnter: () => runCounters(),
        },
      })
  
      /* --- Metrics stagger --- */
      if (metricsEls.length) {
        gsap.from(metricsEls, {
          y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          delay: 0.4,
          scrollTrigger: { trigger: summaryRef.value, start: 'top 78%' },
        })
      }
  
      /* --- Insurance strip --- */
      gsap.from(insuranceRef.value, {
        y: 30, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: insuranceRef.value, start: 'top 85%' },
      })
  
      /* --- CTA --- */
      gsap.from(ctaRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  
  /* ---------------------------------------------------------------
     COUNTERS
     --------------------------------------------------------------- */
  const runCounters = () => {
    const els = sectionRef.value?.querySelectorAll<HTMLElement>('.exposure-number')
    if (!els) return
  
    els.forEach((el) => {
      const target   = Number(el.dataset.target || 0)
      const decimals = Number(el.dataset.decimals || 0)
      const obj = { val: 0 }
  
      gsap.to(obj, {
        val: target,
        duration: 2.2,
        ease: 'power2.out',
        onUpdate: () => {
          const n = decimals > 0
            ? obj.val.toFixed(decimals)
            : Math.round(obj.val).toLocaleString()
          el.textContent = n
        },
      })
    })
  }
  
  const setFinalCounters = () => {
    const els = sectionRef.value?.querySelectorAll<HTMLElement>('.exposure-number')
    if (!els) return
    els.forEach((el) => {
      const target = Number(el.dataset.target || 0)
      const decimals = Number(el.dataset.decimals || 0)
      el.textContent = decimals > 0
        ? target.toFixed(decimals)
        : Math.round(target).toLocaleString()
    })
  }
  </script>
  
  <style scoped>
  .risk-card {
    will-change: transform;
  }
  </style>