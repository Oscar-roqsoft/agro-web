<template>
    <div class="p2030-root">
  
      <!-- ================================================================
           1. HERO
           ================================================================ -->
      <section
        ref="heroRef"
        class="p2030-hero"
      >
        <!-- Background image -->
        <div class="p2030-hero__bg">
          <img
            ref="heroBgRef"
            src="/bg.png"
            alt=""
            aria-hidden="true"
            class="p2030-hero__img"
          />
          <div class="p2030-hero__overlay" />
          <div class="p2030-hero__glow" />
        </div>
  
        <!-- Ambient orbs -->
        <div class="p2030-orb p2030-orb--warm" aria-hidden="true" />
        <div class="p2030-orb p2030-orb--cool" aria-hidden="true" />
  
        <!-- Content -->
        <div class="p2030-container p2030-hero__content">
          <div class="p2030-hero__inner">
  
            <!-- Eyebrow -->
            <div ref="eyebrowRef" class="p2030-eyebrow">
              <span class="p2030-eyebrow__dot-wrap">
                <span class="p2030-eyebrow__ping" />
                <span class="p2030-eyebrow__dot" />
              </span>
              <span class="p2030-eyebrow__text">
                Flagship Initiative · Est. 2025
              </span>
            </div>
  
            <!-- Title -->
            <h1 ref="titleRef" class="p2030-title">
              <span class="p2030-title__kicker">Chrismek Technology</span>
              <span class="p2030-title__main">Project 2030</span>
              <span class="p2030-title__sub">Growing beyond borders.</span>
            </h1>
  
            <!-- Sub -->
            <p ref="subRef" class="p2030-sub">
              By 2030, Chrismek Technology will operate as a fully integrated, export-ready
              agribusiness — linking Nigeria's finest estates to international partners,
              and cultivating a new generation of agricultural leaders through our
              Australia-sponsored training program.
            </p>
  
            <!-- Quick stats -->
            <div ref="quickStatsRef" class="p2030-quickstats">
              <div
                v-for="s in quickStats"
                :key="s.label"
                class="p2030-quickstat"
              >
                <div class="p2030-quickstat__value">{{ s.value }}</div>
                <div class="p2030-quickstat__label">{{ s.label }}</div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Scroll cue -->
        <div class="p2030-scroll-cue">
          <span class="p2030-scroll-cue__text">Scroll</span>
          <span class="p2030-scroll-cue__bar" />
        </div>
      </section>
  
      <!-- ================================================================
           2. VISION
           ================================================================ -->
      <section class="p2030-section">
        <div class="p2030-container">
          <div class="p2030-vision-grid">
  
            <div class="p2030-reveal">
              <span class="p2030-eyebrow-tag p2030-eyebrow-tag--harvest">The Vision</span>
              <h2 class="p2030-h2">Why 2030?</h2>
            </div>
  
            <div class="p2030-reveal p2030-body">
              <p>
                The next five years are the most important in our company's history. Every
                estate we've planted, every partnership we've formed, and every kilo of
                produce we've harvested has been building toward a single moment: the day
                our network reaches full maturity.
              </p>
              <p>
                By 2030, that moment arrives. Yam, rice, groundnut, plantain, oil palm,
                and bell pepper will be in full rotation. Our Lagos distribution hub will
                be operating at full capacity. And with new international linkages, our
                products will reach buyers across Africa, Europe, the Middle East, and
                beyond — carrying Nigeria's agricultural quality to the world.
              </p>
              <p>
                But Project 2030 isn't just about volume. It's about
                <span class="p2030-accent-harvest">people</span>
                — the farmers, agronomists, and leaders who make it possible. That's why a
                core part of this initiative is investing in our team, beginning with
                a sponsored training program in Australia.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ================================================================
           3. PILLARS
           ================================================================ -->
      <section class="p2030-section p2030-section--band">
        <div class="p2030-container">
  
          <div class="p2030-reveal p2030-heading-block">
            <span class="p2030-eyebrow-tag p2030-eyebrow-tag--leaf">Four Pillars</span>
            <h2 class="p2030-h2">What Project 2030 delivers.</h2>
          </div>
  
          <div class="p2030-pillars-grid">
            <article
              v-for="(p, i) in pillars"
              :key="p.title"
              class="p2030-pillar p2030-reveal-card"
            >
              <div class="p2030-pillar__glow" :style="{ background: p.glow }" aria-hidden="true" />
  
              <div class="p2030-pillar__inner">
                <div class="p2030-pillar__icon" v-html="p.icon" />
                <div class="p2030-pillar__body">
                  <span class="p2030-pillar__num">0{{ i + 1 }}</span>
                  <h3 class="p2030-pillar__title">{{ p.title }}</h3>
                  <p class="p2030-pillar__desc">{{ p.description }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
  
      <!-- ================================================================
           4. GLOBAL EXPANSION MAP
           ================================================================ -->
      <section class="p2030-section">
        <div class="p2030-container">
  
          <div class="p2030-reveal p2030-heading-block p2030-heading-block--center">
            <span class="p2030-eyebrow-tag p2030-eyebrow-tag--harvest">Global Reach</span>
            <h2 class="p2030-h2">From Nigerian soil to the world's shelves.</h2>
            <p class="p2030-heading-block__sub">
              Project 2030 formalizes our first international partnerships — linking our
              estates to distributors, processors, and buyers across multiple continents.
            </p>
          </div>
  
          <div class="p2030-reveal p2030-map">
            <div class="p2030-map__grid" aria-hidden="true" />
  
            <div class="p2030-map__cards">
              <div
                v-for="region in regions"
                :key="region.name"
                class="p2030-region p2030-reveal-card"
              >
                <div class="p2030-region__head">
                  <div class="p2030-region__flag">{{ region.flag }}</div>
                  <span class="p2030-region__status" :class="statusClass(region.status)">
                    {{ region.status }}
                  </span>
                </div>
                <div class="p2030-region__name">{{ region.name }}</div>
                <div class="p2030-region__sub">{{ region.region }}</div>
                <p class="p2030-region__detail">{{ region.detail }}</p>
              </div>
            </div>
  
            <div class="p2030-map__legend">
              <div class="p2030-map__legend-item p2030-map__legend-item--leaf">
                <span class="p2030-map__legend-dot" />
                <span>Active</span>
              </div>
              <div class="p2030-map__legend-item p2030-map__legend-item--harvest">
                <span class="p2030-map__legend-dot" />
                <span>In Development</span>
              </div>
              <div class="p2030-map__legend-item p2030-map__legend-item--muted">
                <span class="p2030-map__legend-dot" />
                <span>Planned by 2030</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ================================================================
           5. AUSTRALIA SPONSORSHIP
           ================================================================ -->
      <section class="p2030-section p2030-section--band">
        <div class="p2030-container">
          <div class="p2030-australia-grid">
  
            <div class="p2030-reveal">
              <span class="p2030-eyebrow-tag p2030-eyebrow-tag--leaf p2030-eyebrow-tag--live">
                <span class="p2030-eyebrow__dot-wrap">
                  <span class="p2030-eyebrow__ping p2030-eyebrow__ping--leaf" />
                  <span class="p2030-eyebrow__dot p2030-eyebrow__dot--leaf" />
                </span>
                Team Development
              </span>
  
              <h2 class="p2030-h2">
                Sponsored in Australia.
                <span class="p2030-gradient-text">Returning in 2030 — ready to lead.</span>
              </h2>
  
              <div class="p2030-body p2030-australia-body">
                <p>
                  Chrismek Technology has sponsored a dedicated team of agronomists,
                  logistics specialists, and operations leaders to undergo advanced
                  training in Australia — one of the world's most advanced agricultural
                  economies.
                </p>
                <p>
                  Over the coming years, this team will study best practices in
                  sustainable farming, precision agriculture, cold-chain logistics,
                  and export compliance. When they return in
                  <span class="p2030-accent-harvest">2030</span>,
                  they'll lead our network into its next chapter — trained, tested, and ready.
                </p>
              </div>
  
              <div class="p2030-training-list">
                <div
                  v-for="area in trainingAreas"
                  :key="area"
                  class="p2030-training-item"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.4"
                       stroke-linecap="round" stroke-linejoin="round"
                       class="p2030-training-icon">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{{ area }}</span>
                </div>
              </div>
            </div>
  
            <div class="p2030-reveal">
              <div class="p2030-journey-card">
                <div class="p2030-journey-card__gradient" aria-hidden="true" />
  
                <div class="p2030-journey-card__year">2030</div>
                <div class="p2030-journey-card__year-caption">
                  <span class="p2030-journey-card__year-bar" />
                  <span>Return of the Australia-trained team</span>
                </div>
  
                <div class="p2030-journey-block">
                  <div class="p2030-journey-block__head">
                    <div class="p2030-journey-block__flag">🇦🇺</div>
                    <div class="p2030-journey-block__meta">
                      <div class="p2030-journey-block__title">Australia → Nigeria</div>
                      <div class="p2030-journey-block__sub">Sponsored training · 2025 → 2030</div>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round"
                         class="p2030-journey-block__arrow">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
  
                  <div class="p2030-journey-timeline">
                    <div class="p2030-journey-timeline__rail" />
                    <div class="p2030-journey-timeline__steps">
                      <div
                        v-for="step in teamJourney"
                        :key="step.year"
                        class="p2030-journey-timeline__step"
                      >
                        <span class="p2030-journey-timeline__dot" />
                        <div>
                          <div class="p2030-journey-timeline__label">
                            {{ step.year }} — {{ step.title }}
                          </div>
                          <div class="p2030-journey-timeline__desc">{{ step.desc }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ================================================================
           6. ROADMAP
           ================================================================ -->
      <section class="p2030-section">
        <div class="p2030-container">
  
          <div class="p2030-reveal p2030-heading-block">
            <span class="p2030-eyebrow-tag p2030-eyebrow-tag--harvest">Roadmap</span>
            <h2 class="p2030-h2">The path to 2030.</h2>
          </div>
  
          <div class="p2030-roadmap">
            <div class="p2030-roadmap__rail" aria-hidden="true" />
  
            <div class="p2030-roadmap__list">
              <div
                v-for="m in roadmap"
                :key="m.year"
                class="p2030-roadmap__row p2030-reveal"
              >
                <div class="p2030-roadmap__node" aria-hidden="true">
                  <span class="p2030-roadmap__node-dot" />
                </div>
  
                <div class="p2030-roadmap__card">
                  <div class="p2030-roadmap__head">
                    <span class="p2030-roadmap__year">{{ m.year }}</span>
                    <span class="p2030-roadmap__status" :class="statusClass(m.status)">
                      {{ statusLabel(m.status) }}
                    </span>
                  </div>
                  <h3 class="p2030-roadmap__title">{{ m.title }}</h3>
                  <p class="p2030-roadmap__desc">{{ m.description }}</p>
                  <div v-if="m.tags?.length" class="p2030-roadmap__tags">
                    <span
                      v-for="t in m.tags"
                      :key="t"
                      class="p2030-roadmap__tag"
                    >
                      {{ t }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ================================================================
           7. IMPACT METRICS
           ================================================================ -->
      <section class="p2030-section p2030-section--band">
        <div class="p2030-container">
  
          <div class="p2030-reveal p2030-heading-block p2030-heading-block--center">
            <span class="p2030-eyebrow-tag p2030-eyebrow-tag--leaf">The Numbers</span>
            <h2 class="p2030-h2">What Project 2030 measures.</h2>
          </div>
  
          <div class="p2030-metrics-grid">
            <div
              v-for="m in metrics"
              :key="m.label"
              class="p2030-metric p2030-reveal-card"
            >
              <div class="p2030-metric__value">{{ m.value }}</div>
              <div class="p2030-metric__label">{{ m.label }}</div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ================================================================
           8. CTA
           ================================================================ -->
      <section class="p2030-section">
        <div class="p2030-container">
          <div ref="ctaRef" class="p2030-cta">
            <div class="p2030-cta__glow" aria-hidden="true" />
  
            <div class="p2030-cta__inner">
              <span class="p2030-eyebrow-tag p2030-eyebrow-tag--harvest p2030-cta__tag">
                Partner With Us
              </span>
              <h2 class="p2030-h2 p2030-cta__heading">Be part of the next chapter.</h2>
              <p class="p2030-cta__desc">
                Whether you're an international distributor, an investor looking at the
                next decade of African agriculture, or a partner who shares our vision for
                2030 — we'd love to hear from you.
              </p>
  
              <div class="p2030-cta__buttons">
                <NuxtLink to="/contact?type=project-2030" class="p2030-btn p2030-btn--primary">
                  Start a Conversation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.4"
                       stroke-linecap="round" stroke-linejoin="round"
                       class="p2030-btn__arrow">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </NuxtLink>
  
                <NuxtLink to="/estates" class="p2030-btn p2030-btn--secondary">
                  Explore Our Estates
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  useHead({
    title: 'Project 2030 — Chrismek Technology',
    meta: [
      {
        name: 'description',
        content:
          "Project 2030 is Chrismek Technology's flagship initiative to reach full agricultural maturity, expand internationally, and lead the next generation of Nigerian agribusiness. Team sponsored in Australia, returning 2030.",
      },
    ],
  })
  
  /* -------- Refs -------- */
  const heroRef       = ref<HTMLElement | null>(null)
  const heroBgRef     = ref<HTMLImageElement | null>(null)
  const eyebrowRef    = ref<HTMLElement | null>(null)
  const titleRef      = ref<HTMLElement | null>(null)
  const subRef        = ref<HTMLElement | null>(null)
  const quickStatsRef = ref<HTMLElement | null>(null)
  const ctaRef        = ref<HTMLElement | null>(null)
  
  /* -------- Icons -------- */
  const icons = {
    estates: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    globe:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg>`,
    ship:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21h20M4 18l1-9h14l1 9M8 9V6a4 4 0 0 1 8 0v3M12 3v3"/></svg>`,
    people:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  }
  
  /* -------- Data -------- */
  const quickStats = [
    { value: '2030', label: 'Full Network Maturity' },
    { value: '4+',   label: 'Target Export Markets' },
    { value: '1',    label: 'Australia-Trained Team' },
    { value: '7',    label: 'Estates & Facilities' },
  ]
  
  const pillars = [
    {
      title: 'Full Estate Maturity',
      description:
        'Every estate — Anambra, Ebonyi, Rivers, Lagos — operating at peak productivity with year-round harvest cycles and integrated logistics.',
      icon: icons.estates,
      glow: 'radial-gradient(circle, rgba(249,168,37,0.22), transparent 70%)',
    },
    {
      title: 'International Linkages',
      description:
        'Formal partnerships with buyers, distributors, and processors across Africa, Europe, and the Middle East — opening new markets for Nigerian produce.',
      icon: icons.globe,
      glow: 'radial-gradient(circle, rgba(132,204,22,0.22), transparent 70%)',
    },
    {
      title: 'Export-Ready Logistics',
      description:
        'The Lagos hub expands into a full export coordination centre — cold chain, documentation, container loading — built to global standards.',
      icon: icons.ship,
      glow: 'radial-gradient(circle, rgba(249,168,37,0.22), transparent 70%)',
    },
    {
      title: 'Team Development',
      description:
        'A selected team of agronomists and operations leaders is sponsored in Australia — returning in 2030 to lead the next phase of Chrismek.',
      icon: icons.people,
      glow: 'radial-gradient(circle, rgba(132,204,22,0.22), transparent 70%)',
    },
  ]
  
  const regions = [
    { flag: '🇳🇬', name: 'Nigeria',        region: 'West Africa',      status: 'Active',         detail: 'Home base — 7 estates & facilities across 4 states.' },
    { flag: '🇦🇺', name: 'Australia',      region: 'Oceania',          status: 'Active',         detail: 'Team training & agricultural best-practice partnership.' },
    { flag: '🇪🇺', name: 'European Union', region: 'Europe',           status: 'In Development', detail: 'Export pathway for palm, plantain, and bell pepper.' },
    { flag: '🇦🇪', name: 'Middle East',    region: 'Gulf Region',      status: 'In Development', detail: 'Distribution partnerships for rice and groundnut.' },
    { flag: '🇬🇭', name: 'Ghana',          region: 'West Africa',      status: 'Planned',        detail: 'Regional distribution hub serving ECOWAS markets.' },
    { flag: '🇰🇪', name: 'Kenya',          region: 'East Africa',      status: 'Planned',        detail: 'East African gateway — logistics partnership target.' },
    { flag: '🇿🇦', name: 'South Africa',   region: 'Southern Africa',  status: 'Planned',        detail: 'Southern African distribution & processing partner.' },
    { flag: '🇬🇧', name: 'United Kingdom', region: 'Europe',           status: 'Planned',        detail: 'Diaspora-focused retail and wholesale channel.' },
  ]
  
  const trainingAreas = [
    'Sustainable farming practices',
    'Precision agriculture & agtech',
    'Cold-chain and export logistics',
    'International trade compliance',
    'Supply-chain management',
    'Leadership & team operations',
  ]
  
  const teamJourney = [
    { year: '2025', title: 'Team departs',      desc: 'Selected team begins sponsored program in Australia.' },
    { year: '2027', title: 'Mid-program review', desc: 'Skills assessment and integration planning.' },
    { year: '2030', title: 'Team returns',       desc: 'Ready to lead the next phase of Chrismek Technology.' },
  ]
  
  const roadmap = [
    { year: '2025', title: 'Foundation Year',        status: 'active',   tags: ['Yam', 'Groundnut', 'Australia'],       description: 'Yam and groundnut estates deliver first commercial harvests. Australia-sponsored team departs. Lagos hub operational.' },
    { year: '2026', title: 'Full Cycle Production',  status: 'progress', tags: ['Oil Palm', 'Plantain', 'Rice'],        description: 'Achalla palm, Enugu Agidi plantain, and Ebonyi rice enter their second full commercial year. Distribution scales.' },
    { year: '2027', title: 'Bell Pepper at Peak',    status: 'progress', tags: ['Bell Pepper', 'Australia'],             description: 'Rivers bell pepper estate hits full greenhouse-assisted capacity with two harvest cycles per year. Australia team mid-program review.' },
    { year: '2028', title: 'Achalla Decade Milestone', status: 'planned', tags: ['Oil Palm', 'Exports'],                 description: 'Achalla palm estate completes its first decade of continuous production. First international export contracts signed.' },
    { year: '2029', title: 'Export-Scale Logistics', status: 'planned',  tags: ['Lagos', 'Logistics', 'Exports'],       description: 'Lagos distribution expands into a full export coordination centre. Cold-chain and container capacity unlock global routes.' },
    { year: '2030', title: 'Full Network Maturity',  status: 'planned',  tags: ['All Crops', 'Team Return', 'Global'],  description: 'All estates at peak yield. Australia-trained team returns and takes leadership. Chrismek operates as a fully integrated, export-ready agribusiness.' },
  ]
  
  const metrics = [
    { value: '4.5 kt+',  label: 'Annual Harvest Volume' },
    { value: '1,200+',   label: 'Hectares Cultivated' },
    { value: '400+',     label: 'Partner Farming Families' },
    { value: '4+',       label: 'Countries by 2030' },
  ]
  
  const statusLabel = (status: string) => {
    if (status === 'active') return 'Active'
    if (status === 'progress') return 'In Progress'
    return 'Planned'
  }
  
  const statusClass = (status: string) => {
    if (status === 'active') return 'p2030-status--active'
    if (status === 'progress' || status === 'In Development') return 'p2030-status--progress'
    return 'p2030-status--planned'
  }
  
  /* ---------------------------------------------------------------
     GSAP ANIMATIONS — reliable pattern
     ---------------------------------------------------------------
     - Hero: timeline entrance (plays once)
     - Scroll reveals: gsap.set for initial state + ScrollTrigger.batch
       for grouped, no-flicker, no-replay reveals
     --------------------------------------------------------------- */
  
  let heroTl: gsap.core.Timeline | null = null
  let ctaTween: gsap.core.Tween | null = null
  let mm: gsap.MatchMedia | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    /* ---- Reduced motion: reveal everything, skip animations ---- */
    if (prefersReduced) {
      gsap.set('.p2030-reveal, .p2030-reveal-card', { clearProps: 'all' })
      return
    }
  
    /* ---- Hero entrance ---- */
    if (heroRef.value) {
      heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
      if (heroBgRef.value) {
        heroTl.from(heroBgRef.value, {
          scale: 1.15,
          duration: 2.2,
          ease: 'power2.out',
        })
      }
  
      if (eyebrowRef.value) {
        heroTl.from(eyebrowRef.value, {
          y: 20, opacity: 0,
          duration: 0.7, ease: 'back.out(1.4)',
        }, 0.2)
      }
  
      if (titleRef.value) {
        const titleChildren = Array.from(titleRef.value.children) as HTMLElement[]
        if (titleChildren.length) {
          heroTl.from(titleChildren, {
            y: 40, opacity: 0,
            duration: 0.9, stagger: 0.12, ease: 'power3.out',
          }, '-=0.3')
        }
      }
  
      if (subRef.value) {
        heroTl.from(subRef.value, {
          y: 20, opacity: 0, duration: 0.8,
        }, '-=0.5')
      }
  
      if (quickStatsRef.value) {
        const statChildren = Array.from(quickStatsRef.value.children) as HTMLElement[]
        if (statChildren.length) {
          heroTl.from(statChildren, {
            y: 20, opacity: 0, scale: 0.94,
            duration: 0.6, stagger: 0.08, ease: 'back.out(1.6)',
          }, '-=0.4')
        }
      }
    }
  
    /* ---- Scroll reveals — batched, reliable ---- */
  
    // Single elements (headings, paragraphs, containers)
    gsap.set('.p2030-reveal', { y: 30, opacity: 0 })
  
    ScrollTrigger.batch('.p2030-reveal', {
      start: 'top 88%',
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.08,
          ease: 'power3.out',
          overwrite: 'auto',
        })
      },
    })
  
    // Card grids (pillars, regions, metrics) — animated as groups
    gsap.set('.p2030-reveal-card', { y: 24, opacity: 0 })
  
    ScrollTrigger.batch('.p2030-reveal-card', {
      start: 'top 90%',
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      },
    })
  
    /* ---- CTA glow pulse ---- */
    if (ctaRef.value) {
      ctaTween = gsap.to(ctaRef.value, {
        boxShadow: '0 0 80px -20px rgba(249, 168, 37, 0.35)',
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  
    /* ---- Ensure ScrollTrigger recalculates after images load ---- */
    await nextTick()
    ScrollTrigger.refresh()
  
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true })
    }
  })
  
  onBeforeUnmount(() => {
    heroTl?.kill()
    ctaTween?.kill()
    mm?.revert()
    ScrollTrigger.getAll().forEach((t) => t.kill())
  })
  </script>
  
  <style scoped>
  /* ================================================================
     THEME TOKENS — scoped to this page only
     ================================================================ */
  .p2030-root {
    /* Light mode defaults */
    --p-bg:            250 247 240;
    --p-surface:       255 255 255;
    --p-surface-2:     245 240 230;
    --p-surface-3:     235 228 214;
    --p-border:        0 0 0 / 0.08;
    --p-border-strong: 0 0 0 / 0.14;
    --p-text:          15 34 20;
    --p-text-2:        60 82 68;
    --p-text-3:        110 128 116;
    --p-harvest:       200 130 20;
    --p-harvest-soft:  249 168 37;
    --p-leaf:          62 120 32;
    --p-leaf-soft:     132 204 22;
    --p-glow-warm:     249 168 37;
    --p-glow-cool:     132 204 22;
    --p-map-bg:        245 240 228;
    --p-map-grid:      0 0 0 / 0.06;
  
    position: relative;
    overflow: hidden;
    background-color: rgb(var(--p-bg));
    color: rgb(var(--p-text));
  }
  
  :global(.dark) .p2030-root {
    --p-bg:            8 20 12;
    --p-surface:       14 30 20;
    --p-surface-2:     20 38 26;
    --p-surface-3:     28 48 34;
    --p-border:        255 255 255 / 0.08;
    --p-border-strong: 255 255 255 / 0.16;
    --p-text:          245 245 240;
    --p-text-2:        200 210 200;
    --p-text-3:        150 165 155;
    --p-harvest:       249 168 37;
    --p-harvest-soft:  251 191 86;
    --p-leaf:          132 204 22;
    --p-leaf-soft:     163 230 53;
    --p-glow-warm:     249 168 37;
    --p-glow-cool:     132 204 22;
    --p-map-bg:        10 26 16;
    --p-map-grid:      255 255 255 / 0.12;
  }
  
  /* ================================================================
     LAYOUT
     ================================================================ */
  .p2030-container {
    position: relative;
    width: 100%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  @media (min-width: 768px) {
    .p2030-container { padding-left: 2rem; padding-right: 2rem; }
  }
  @media (min-width: 1280px) {
    .p2030-container { padding-left: 2.5rem; padding-right: 2.5rem; }
  }
  
  .p2030-section {
    position: relative;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  @media (min-width: 1024px) {
    .p2030-section { padding-top: 8rem; padding-bottom: 8rem; }
  }
  .p2030-section--band {
    background-color: rgb(var(--p-surface-2) / 0.4);
  }
  
  /* ================================================================
     HERO
     ================================================================ */
  .p2030-hero {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 92svh;
    padding-top: 7rem;
    padding-bottom: 5rem;
    overflow: hidden;
  }
  
  .p2030-hero__bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }
  
  .p2030-hero__img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: transform;
  }
  
  /* Overlay — strong enough for white text in BOTH modes */
  .p2030-hero__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.62) 0%,
      rgba(0, 0, 0, 0.50) 45%,
      rgba(0, 0, 0, 0.80) 100%
    );
  }
  
  .p2030-hero__glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 30% 40%,
      rgb(var(--p-glow-warm) / 0.18),
      transparent 60%
    );
  }
  
  .p2030-orb {
    position: absolute;
    border-radius: 9999px;
    pointer-events: none;
    z-index: 0;
    filter: blur(120px);
  }
  .p2030-orb--warm {
    top: -8rem;
    right: -8rem;
    width: 460px;
    height: 460px;
    background: rgb(var(--p-glow-warm) / 0.20);
  }
  .p2030-orb--cool {
    bottom: -10rem;
    left: -10rem;
    width: 520px;
    height: 520px;
    background: rgb(var(--p-glow-cool) / 0.18);
  }
  
  .p2030-hero__content {
    position: relative;
    z-index: 10;
    width: 100%;
  }
  
  .p2030-hero__inner {
    max-width: 64rem;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
  @media (min-width: 1024px) {
    .p2030-hero__inner { margin-left: 0; }
  }
  
  /* ---- Eyebrow ---- */
  .p2030-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    margin-bottom: 2rem;
    padding: 0.5rem 0.875rem;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.25);
  }
  
  .p2030-eyebrow__dot-wrap {
    position: relative;
    display: flex;
    width: 0.5rem;
    height: 0.5rem;
  }
  .p2030-eyebrow__ping {
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    background: rgb(var(--p-harvest-soft));
    opacity: 0.75;
    animation: p2030-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  .p2030-eyebrow__dot {
    position: relative;
    display: inline-flex;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: rgb(var(--p-harvest));
  }
  .p2030-eyebrow__ping--leaf { background: rgb(var(--p-leaf-soft)); }
  .p2030-eyebrow__dot--leaf { background: rgb(var(--p-leaf)); }
  
  @keyframes p2030-ping {
    75%, 100% { transform: scale(2); opacity: 0; }
  }
  
  .p2030-eyebrow__text {
    color: #fff;
    font-size: 0.78rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.18em;
  }
  
  /* ---- Title — ALWAYS WHITE ---- */
  .p2030-title {
    font-family: 'Inter Tight', ui-sans-serif, system-ui, sans-serif;
    font-weight: 900;
    font-size: clamp(2.75rem, 7vw, 5.5rem);
    line-height: 1.02;
    letter-spacing: -0.04em;
    margin-bottom: 1.5rem;
    color: #ffffff;
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.45);
  }
  .p2030-title__kicker {
    display: block;
    color: rgba(255, 255, 255, 0.72);
    font-size: clamp(1rem, 1.4vw, 1.2rem);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    margin-bottom: 1rem;
    text-shadow: 0 1px 12px rgba(0, 0, 0, 0.4);
  }
  .p2030-title__main {
    display: block;
    background-image: linear-gradient(
      135deg,
      rgb(var(--p-harvest-soft)) 0%,
      rgb(var(--p-harvest)) 45%,
      rgb(var(--p-leaf-soft)) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: drop-shadow(0 2px 20px rgba(249, 168, 37, 0.35));
  }
  .p2030-title__sub {
    display: block;
    color: #ffffff;
    margin-top: 0.5rem;
  }
  
  /* ---- Sub ---- */
  .p2030-sub {
    color: rgba(255, 255, 255, 0.88);
    font-size: clamp(1rem, 1.4vw, 1.15rem);
    line-height: 1.7;
    max-width: 42rem;
    margin-bottom: 2.5rem;
    text-shadow: 0 1px 12px rgba(0, 0, 0, 0.4);
  }
  
  /* ---- Quick stats ---- */
  .p2030-quickstats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    max-width: 48rem;
  }
  @media (min-width: 768px) {
    .p2030-quickstats { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  }
  
  .p2030-quickstat {
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.20);
    padding: 1rem;
  }
  .p2030-quickstat__value {
    font-family: 'Inter Tight', ui-sans-serif, system-ui, sans-serif;
    font-weight: 900;
    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
    line-height: 1;
    margin-bottom: 0.375rem;
    color: rgb(var(--p-harvest-soft));
    filter: drop-shadow(0 2px 12px rgba(249, 168, 37, 0.5));
  }
  .p2030-quickstat__label {
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 600;
    line-height: 1.3;
  }
  
  /* ---- Scroll cue ---- */
  .p2030-scroll-cue {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.55);
  }
  .p2030-scroll-cue__text {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.28em;
  }
  .p2030-scroll-cue__bar {
    width: 1px;
    height: 2.5rem;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.55), transparent);
  }
  
  /* ================================================================
     HEADINGS
     ================================================================ */
  .p2030-h2 {
    font-family: 'Inter Tight', ui-sans-serif, system-ui, sans-serif;
    font-weight: 800;
    font-size: clamp(2rem, 3.8vw, 3.1rem);
    line-height: 1.08;
    letter-spacing: -0.03em;
    color: rgb(var(--p-text));
  }
  
  .p2030-eyebrow-tag {
    display: inline-block;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .p2030-eyebrow-tag--harvest { color: rgb(var(--p-harvest)); }
  .p2030-eyebrow-tag--leaf    { color: rgb(var(--p-leaf)); }
  
  .p2030-eyebrow-tag--live {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }
  
  .p2030-heading-block {
    max-width: 42rem;
    margin-bottom: 4rem;
  }
  .p2030-heading-block--center {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .p2030-heading-block__sub {
    color: rgb(var(--p-text-2));
    line-height: 1.7;
    margin-top: 1rem;
  }
  
  .p2030-gradient-text {
    display: block;
    background-image: linear-gradient(
      135deg,
      rgb(var(--p-harvest-soft)) 0%,
      rgb(var(--p-harvest)) 45%,
      rgb(var(--p-leaf-soft)) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  .p2030-accent-harvest {
    font-weight: 600;
    color: rgb(var(--p-harvest));
  }
  
  /* ================================================================
     BODY TEXT
     ================================================================ */
  .p2030-body {
    color: rgb(var(--p-text-2));
    font-size: 1.02rem;
    line-height: 1.7;
  }
  .p2030-body p + p { margin-top: 1.25rem; }
  
  /* ================================================================
     VISION
     ================================================================ */
  .p2030-vision-grid {
    display: grid;
    gap: 2.5rem;
    align-items: start;
  }
  @media (min-width: 1024px) {
    .p2030-vision-grid {
      grid-template-columns: 5fr 7fr;
      gap: 4rem;
    }
  }
  
  /* ================================================================
     PILLARS
     ================================================================ */
  .p2030-pillars-grid {
    display: grid;
    gap: 1.25rem;
  }
  @media (min-width: 768px) {
    .p2030-pillars-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
  }
  
  .p2030-pillar {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    background: rgb(var(--p-surface));
    border: 1px solid rgb(var(--p-border-strong));
    padding: 1.75rem;
    transition: border-color 0.4s ease, background-color 0.4s ease;
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.04),
      0 8px 24px -12px rgba(0, 0, 0, 0.10);
  }
  :global(.dark) .p2030-pillar {
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.4),
      0 12px 32px -16px rgba(0, 0, 0, 0.6);
  }
  .p2030-pillar:hover {
    border-color: rgb(var(--p-harvest) / 0.45);
  }
  @media (min-width: 1024px) {
    .p2030-pillar { padding: 2rem; }
  }
  
  .p2030-pillar__glow {
    position: absolute;
    top: -5rem;
    right: -5rem;
    width: 12rem;
    height: 12rem;
    border-radius: 9999px;
    opacity: 0;
    transition: opacity 0.7s ease;
    pointer-events: none;
  }
  .p2030-pillar:hover .p2030-pillar__glow { opacity: 1; }
  
  .p2030-pillar__inner {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
  }
  
  .p2030-pillar__icon {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    background: rgb(var(--p-harvest) / 0.12);
    border: 1px solid rgb(var(--p-harvest) / 0.30);
    color: rgb(var(--p-harvest));
  }
  
  .p2030-pillar__body { flex: 1; min-width: 0; }
  
  .p2030-pillar__num {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    font-weight: 600;
    color: rgb(var(--p-harvest));
  }
  .p2030-pillar__title {
    font-family: 'Inter Tight', ui-sans-serif, system-ui, sans-serif;
    font-weight: 700;
    font-size: 1.35rem;
    margin-top: 0.25rem;
    margin-bottom: 0.625rem;
    color: rgb(var(--p-text));
  }
  .p2030-pillar__desc {
    color: rgb(var(--p-text-2));
    font-size: 0.95rem;
    line-height: 1.65;
  }
  
  /* ================================================================
     MAP
     ================================================================ */
  .p2030-map {
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;
    background: rgb(var(--p-map-bg));
    border: 1px solid rgb(var(--p-border-strong));
    padding: 1.5rem;
  }
  @media (min-width: 1024px) {
    .p2030-map { padding: 3rem; }
  }
  
  .p2030-map__grid {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(rgb(var(--p-map-grid)) 1px, transparent 1px),
      linear-gradient(90deg, rgb(var(--p-map-grid)) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  
  .p2030-map__cards {
    position: relative;
    display: grid;
    gap: 1rem;
  }
  @media (min-width: 640px) {
    .p2030-map__cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (min-width: 1024px) {
    .p2030-map__cards { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.25rem; }
  }
  
  .p2030-region {
    border-radius: 1rem;
    background: rgb(var(--p-surface-2));
    border: 1px solid rgb(var(--p-border));
    padding: 1.25rem;
    transition: border-color 0.4s ease, background-color 0.4s ease;
  }
  .p2030-region:hover {
    border-color: rgb(var(--p-harvest) / 0.45);
    background: rgb(var(--p-surface));
  }
  @media (min-width: 1024px) {
    .p2030-region { padding: 1.5rem; }
  }
  
  .p2030-region__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .p2030-region__flag { font-size: 1.5rem; }
  
  .p2030-region__status {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    border: 1px solid;
  }
  .p2030-status--active {
    background: rgb(var(--p-leaf) / 0.15);
    color: rgb(var(--p-leaf));
    border-color: rgb(var(--p-leaf) / 0.35);
  }
  .p2030-status--progress {
    background: rgb(var(--p-harvest) / 0.15);
    color: rgb(var(--p-harvest));
    border-color: rgb(var(--p-harvest) / 0.35);
  }
  .p2030-status--planned {
    background: rgb(var(--p-surface-3) / 0.7);
    color: rgb(var(--p-text-3));
    border-color: rgb(var(--p-border));
  }
  
  .p2030-region__name {
    font-family: 'Inter Tight', ui-sans-serif, system-ui, sans-serif;
    font-weight: 700;
    font-size: 1.05rem;
    margin-bottom: 0.25rem;
    color: rgb(var(--p-text));
  }
  .p2030-region__sub {
    color: rgb(var(--p-text-3));
    font-size: 0.78rem;
    margin-bottom: 0.75rem;
  }
  .p2030-region__detail {
    color: rgb(var(--p-text-2));
    font-size: 0.82rem;
    line-height: 1.4;
  }
  
  .p2030-map__legend {
    position: relative;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgb(var(--p-border));
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem 1rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 600;
  }
  .p2030-map__legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .p2030-map__legend-item--leaf    { color: rgb(var(--p-leaf)); }
  .p2030-map__legend-item--harvest { color: rgb(var(--p-harvest)); }
  .p2030-map__legend-item--muted   { color: rgb(var(--p-text-3)); }
  .p2030-map__legend-dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: currentColor;
  }
  
  /* ================================================================
     AUSTRALIA
     ================================================================ */
  .p2030-australia-grid {
    display: grid;
    gap: 2.5rem;
    align-items: center;
  }
  @media (min-width: 1024px) {
    .p2030-australia-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 4rem;
    }
  }
  
  .p2030-australia-body { margin-top: 1.5rem; }
  
  .p2030-training-list {
    margin-top: 2rem;
    display: grid;
    gap: 0.75rem;
  }
  @media (min-width: 640px) {
    .p2030-training-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  .p2030-training-item {
    display: flex;
    align-items: flex-start;
    gap: 0.625rem;
    color: rgb(var(--p-text-2));
    font-size: 0.9rem;
  }
  .p2030-training-icon {
    flex-shrink: 0;
    margin-top: 0.125rem;
    color: rgb(var(--p-leaf));
  }
  
  .p2030-journey-card {
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;
    background: rgb(var(--p-surface));
    border: 1px solid rgb(var(--p-border-strong));
    padding: 1.5rem;
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.04),
      0 8px 24px -12px rgba(0, 0, 0, 0.10);
  }
  :global(.dark) .p2030-journey-card {
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.4),
      0 12px 32px -16px rgba(0, 0, 0, 0.6);
  }
  @media (min-width: 1024px) {
    .p2030-journey-card { padding: 2.5rem; }
  }
  
  .p2030-journey-card__gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgb(var(--p-harvest) / 0.12) 0%,
      transparent 50%,
      rgb(var(--p-leaf) / 0.12) 100%
    );
    pointer-events: none;
  }
  
  .p2030-journey-card__year {
    position: relative;
    z-index: 1;
    font-family: 'Inter Tight', ui-sans-serif, system-ui, sans-serif;
    font-weight: 900;
    font-size: clamp(5rem, 14vw, 10rem);
    line-height: 1;
    letter-spacing: -0.06em;
    background-image: linear-gradient(
      135deg,
      rgb(var(--p-harvest-soft)) 0%,
      rgb(var(--p-harvest)) 45%,
      rgb(var(--p-leaf-soft)) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: drop-shadow(0 4px 30px rgb(var(--p-glow-warm) / 0.35));
  }
  
  .p2030-journey-card__year-caption {
    position: relative;
    z-index: 1;
    margin-top: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: rgb(var(--p-text-2));
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-weight: 600;
  }
  .p2030-journey-card__year-bar {
    width: 3rem;
    height: 1px;
    background: rgb(var(--p-harvest));
  }
  
  .p2030-journey-block {
    position: relative;
    z-index: 1;
    margin-top: 2.5rem;
    border-radius: 1rem;
    background: rgb(var(--p-surface-3) / 0.65);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgb(var(--p-border-strong));
    padding: 1.25rem;
  }
  
  .p2030-journey-block__head {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .p2030-journey-block__flag {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
    background: rgb(var(--p-harvest) / 0.15);
    border: 1px solid rgb(var(--p-harvest) / 0.40);
    font-size: 1.5rem;
  }
  .p2030-journey-block__meta { flex: 1; min-width: 0; }
  .p2030-journey-block__title {
    font-weight: 600;
    font-size: 0.95rem;
    color: rgb(var(--p-text));
  }
  .p2030-journey-block__sub {
    font-size: 0.78rem;
    color: rgb(var(--p-text-3));
  }
  .p2030-journey-block__arrow {
    color: rgb(var(--p-harvest));
  }
  
  .p2030-journey-timeline {
    position: relative;
    margin-top: 1.25rem;
  }
  .p2030-journey-timeline__rail {
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 1px;
    background: rgb(var(--p-border-strong));
  }
  .p2030-journey-timeline__steps {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .p2030-journey-timeline__step {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.82rem;
  }
  .p2030-journey-timeline__dot {
    position: relative;
    z-index: 1;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    margin-top: 0.125rem;
    background: rgb(var(--p-harvest));
    border: 2px solid rgb(var(--p-bg));
  }
  .p2030-journey-timeline__label {
    font-weight: 600;
    color: rgb(var(--p-text));
  }
  .p2030-journey-timeline__desc {
    color: rgb(var(--p-text-2));
  }
  
  /* ================================================================
     ROADMAP
     ================================================================ */
  .p2030-roadmap {
    position: relative;
  }
  .p2030-roadmap__rail {
    display: none;
  }
  @media (min-width: 768px) {
    .p2030-roadmap__rail {
      display: block;
      position: absolute;
      left: 22px;
      top: 1rem;
      bottom: 1rem;
      width: 1px;
      background: rgb(var(--p-border-strong));
    }
  }
  
  .p2030-roadmap__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  @media (min-width: 768px) {
    .p2030-roadmap__list { gap: 2.5rem; }
  }
  
  .p2030-roadmap__row {
    position: relative;
  }
  @media (min-width: 768px) {
    .p2030-roadmap__row { padding-left: 4rem; }
  }
  
  .p2030-roadmap__node {
    display: none;
  }
  @media (min-width: 768px) {
    .p2030-roadmap__node {
      display: flex;
      position: absolute;
      left: 0;
      top: 0;
      width: 3rem;
      height: 3rem;
      border-radius: 9999px;
      background: rgb(var(--p-harvest) / 0.15);
      border: 1px solid rgb(var(--p-harvest) / 0.40);
      align-items: center;
      justify-content: center;
    }
  }
  .p2030-roadmap__node-dot {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 9999px;
    background: rgb(var(--p-harvest));
  }
  
  .p2030-roadmap__card {
    border-radius: 1rem;
    background: rgb(var(--p-surface));
    border: 1px solid rgb(var(--p-border-strong));
    padding: 1.5rem;
    transition: border-color 0.4s ease;
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.04),
      0 8px 24px -12px rgba(0, 0, 0, 0.10);
  }
  :global(.dark) .p2030-roadmap__card {
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.4),
      0 12px 32px -16px rgba(0, 0, 0, 0.6);
  }
  .p2030-roadmap__card:hover {
    border-color: rgb(var(--p-harvest) / 0.40);
  }
  @media (min-width: 1024px) {
    .p2030-roadmap__card { padding: 1.75rem; }
  }
  
  .p2030-roadmap__head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
  }
  .p2030-roadmap__year {
    font-family: 'Inter Tight', ui-sans-serif, system-ui, sans-serif;
    font-weight: 900;
    font-size: 1.35rem;
    color: rgb(var(--p-harvest));
  }
  .p2030-roadmap__status {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-weight: 700;
    padding: 0.3125rem 0.625rem;
    border-radius: 9999px;
    border: 1px solid;
  }
  .p2030-roadmap__title {
    font-family: 'Inter Tight', ui-sans-serif, system-ui, sans-serif;
    font-weight: 700;
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
    color: rgb(var(--p-text));
  }
  .p2030-roadmap__desc {
    color: rgb(var(--p-text-2));
    font-size: 0.92rem;
    line-height: 1.65;
  }
  
  .p2030-roadmap__tags {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .p2030-roadmap__tag {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 600;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background: rgb(var(--p-surface-3) / 0.7);
    color: rgb(var(--p-text-3));
    border: 1px solid rgb(var(--p-border));
  }
  
  /* ================================================================
     METRICS
     ================================================================ */
  .p2030-metrics-grid {
    display: grid;
    gap: 1rem;
  }
  @media (min-width: 640px) {
    .p2030-metrics-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (min-width: 1024px) {
    .p2030-metrics-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1.25rem; }
  }
  
  .p2030-metric {
    border-radius: 1rem;
    background: rgb(var(--p-surface));
    border: 1px solid rgb(var(--p-border-strong));
    padding: 1.5rem;
    text-align: center;
    transition: border-color 0.4s ease;
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.04),
      0 8px 24px -12px rgba(0, 0, 0, 0.10);
  }
  :global(.dark) .p2030-metric {
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.4),
      0 12px 32px -16px rgba(0, 0, 0, 0.6);
  }
  .p2030-metric:hover {
    border-color: rgb(var(--p-harvest) / 0.40);
  }
  
  .p2030-metric__value {
    font-family: 'Inter Tight', ui-sans-serif, system-ui, sans-serif;
    font-weight: 900;
    font-size: clamp(2rem, 4vw, 2.8rem);
    line-height: 1;
    margin-bottom: 0.5rem;
    background-image: linear-gradient(
      135deg,
      rgb(var(--p-harvest-soft)) 0%,
      rgb(var(--p-harvest)) 45%,
      rgb(var(--p-leaf-soft)) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .p2030-metric__label {
    color: rgb(var(--p-text-3));
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-weight: 600;
    line-height: 1.3;
  }
  
  /* ================================================================
     CTA
     ================================================================ */
  .p2030-cta {
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;
    border: 1px solid rgb(var(--p-harvest) / 0.35);
    background: linear-gradient(
      135deg,
      rgb(var(--p-harvest) / 0.10) 0%,
      rgb(var(--p-surface)) 50%,
      rgb(var(--p-leaf) / 0.10) 100%
    );
    padding: 2.5rem;
    text-align: center;
  }
  @media (min-width: 1024px) {
    .p2030-cta { padding: 4rem; }
  }
  
  .p2030-cta__glow {
    position: absolute;
    top: -10rem;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    border-radius: 9999px;
    background: rgb(var(--p-glow-warm) / 0.20);
    filter: blur(120px);
    pointer-events: none;
  }
  
  .p2030-cta__inner {
    position: relative;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
  }
  
  .p2030-cta__tag { margin-bottom: 1.25rem; }
  .p2030-cta__heading {
    font-size: clamp(2rem, 4vw, 3.4rem);
    margin-bottom: 1.25rem;
  }
  .p2030-cta__desc {
    color: rgb(var(--p-text-2));
    font-size: 1.02rem;
    line-height: 1.7;
    margin-bottom: 2.5rem;
  }
  .p2030-cta__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }
  
  .p2030-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    border-radius: 9999px;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  .p2030-btn--primary {
    background: rgb(var(--p-harvest));
    color: #0f2214;
    box-shadow: 0 6px 24px -8px rgb(var(--p-harvest) / 0.5);
  }
  .p2030-btn--primary:hover {
    background: rgb(var(--p-harvest-soft));
    transform: translateY(-1px);
  }
  .p2030-btn--secondary {
    background: rgb(var(--p-surface));
    border: 1px solid rgb(var(--p-border-strong));
    color: rgb(var(--p-text));
  }
  .p2030-btn--secondary:hover {
    border-color: rgb(var(--p-harvest) / 0.50);
    background: rgb(var(--p-surface-2));
  }
  .p2030-btn__arrow {
    transition: transform 0.3s ease;
  }
  .p2030-btn:hover .p2030-btn__arrow {
    transform: translateX(4px);
  }
  
  /* ================================================================
     ACCESSIBILITY — respect reduced motion
     ================================================================ */
  @media (prefers-reduced-motion: reduce) {
    .p2030-root *,
    .p2030-root *::before,
    .p2030-root *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  </style>