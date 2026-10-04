<template>
    <section
      ref="sectionRef"
      class="relative isolate overflow-hidden
             pt-14 lg:pt-20 pb-20 lg:pb-28
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
      <!-- Faint grid pattern -->
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
          <span class="text-[rgb(var(--text))] font-semibold">Invest</span>
        </nav>
  
        <!-- ============ MAIN GRID ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
  
          <!-- ============ LEFT: STATEMENT ============ -->
          <div class="lg:col-span-7">
  
            <!-- Eyebrow -->
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-6
                     px-3.5 py-1.5 rounded-full
                     bg-harvest-500/10 border border-harvest-500/20
                     text-harvest-700 dark:text-harvest-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-harvest-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-2 w-2 bg-harvest-500" />
              </span>
              Now open for 2026 allocations
            </div>
  
            <!-- Headline -->
            <h1
              ref="headlineRef"
              class="font-display font-extrabold
                     text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05]
                     tracking-[-0.035em] text-[rgb(var(--text))] mb-7 max-w-2xl"
            >
              Backed by land,<br />
              measured by harvests,<br />
              <span class="text-leaf-500">built for the long term.</span>
            </h1>
  
            <!-- Lead paragraph -->
            <p
              ref="leadRef"
              class="text-[rgb(var(--text-muted))] text-[1.08rem] leading-relaxed
                     max-w-xl mb-10"
            >
              GreenField Agri offers investors direct exposure to West African
              agriculture — an asset class that grows with the population, not
              the news cycle. Every package is backed by real hectares, audited
              yields, and 15 years of operating history.
            </p>
  
            <!-- CTAs -->
            <div
              ref="ctaRef"
              class="flex flex-wrap items-center gap-3.5 mb-14"
            >
              <a
                href="#packages"
                class="btn btn-primary !px-6 !py-3.5 !text-[0.95rem]"
              >
                View Investment Packages
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </a>
              <NuxtLink
                to="/legal/prospectus"
                class="btn !px-6 !py-3.5 !text-[0.95rem]
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.15)]
                       text-[rgb(var(--text))]
                       hover:border-leaf-500 hover:text-leaf-600
                       dark:hover:text-leaf-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.2"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <path d="M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download Prospectus
              </NuxtLink>
            </div>
  
            <!-- Trust markers row -->
            <div
              ref="trustRef"
              class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8
                     border-t border-[rgb(var(--border)/0.1)]"
            >
              <div
                v-for="trust in trustMarkers"
                :key="trust.title"
                class="flex items-start gap-3.5"
              >
                <span
                  class="shrink-0 grid place-items-center w-9 h-9 rounded-lg
                         bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                  v-html="trust.icon"
                />
                <div>
                  <div class="font-semibold text-[0.9rem]
                              text-[rgb(var(--text))] leading-tight mb-0.5">
                    {{ trust.title }}
                  </div>
                  <div class="text-[rgb(var(--text-muted))]
                              text-[0.78rem] leading-snug">
                    {{ trust.subtitle }}
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- ============ RIGHT: KEY NUMBERS CARD ============ -->
          <div
            ref="statsCardRef"
            class="lg:col-span-5 relative"
          >
            <div
              class="relative rounded-3xl overflow-hidden
                     bg-gradient-to-br from-leaf-700 via-leaf-800 to-leaf-900
                     p-8 lg:p-10
                     shadow-[0_30px_60px_-20px_rgba(46,125,50,0.4)]"
            >
              <!-- Decorative circles -->
              <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
              <div class="absolute -right-4 top-1/3 w-24 h-24 rounded-full bg-white/5" />
              <div class="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-white/5" />
  
              <!-- Header -->
              <div class="relative z-10 flex items-center gap-3 mb-8">
                <span
                  class="grid place-items-center w-11 h-11 rounded-xl
                         bg-white/10 backdrop-blur-md border border-white/15
                         text-harvest-400"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                  </svg>
                </span>
                <div>
                  <div class="font-display font-bold text-white
                              text-[1rem] leading-tight">
                    At a glance
                  </div>
                  <div class="text-white/60 text-[0.78rem]">
                    Historical performance
                  </div>
                </div>
              </div>
  
              <!-- Stats stack -->
              <div class="relative z-10 space-y-6">
                <div
                  v-for="(stat, i) in heroStats"
                  :key="stat.label"
                  :ref="(el) => { if (el) statRefs[i] = el as HTMLElement }"
                >
                  <div class="flex items-baseline gap-2.5 mb-1.5">
                    <span
                      class="font-display font-extrabold text-white
                             text-[clamp(1.85rem,3.5vw,2.5rem)] leading-none
                             tracking-[-0.03em] tabular-nums stat-number"
                      :data-target="stat.value"
                      :data-decimals="stat.decimals || 0"
                      :data-prefix="stat.prefix || ''"
                      :data-suffix="stat.suffix || ''"
                     
                    >
                      {{ stat.prefix || '' }}0{{ stat.suffix || '' }}
                    </span>
                  </div>
                  <div class="text-white/75 text-[0.9rem] font-medium leading-snug">
                    {{ stat.label }}
                  </div>
                  <div
                    v-if="i < heroStats.length - 1"
                    class="mt-6 h-px bg-white/10"
                  />
                </div>
              </div>
  
              <!-- Footnote -->
              <div
                class="relative z-10 mt-8 pt-6 border-t border-white/10
                       flex items-start gap-3"
              >
                <span class="shrink-0 mt-0.5 text-white/50">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                </span>
                <p class="text-white/55 text-[0.75rem] leading-relaxed">
                  Yields are historical averages and not a guarantee of future
                  returns. Full risk factors in the prospectus.
                </p>
              </div>
            </div>
  
            <!-- Floating badge (top-right of card) -->
            <div
              ref="badgeRef"
              class="hidden lg:flex absolute -top-4 -right-4
                     items-center gap-2.5
                     px-4 py-2.5 rounded-full
                     bg-[rgb(var(--surface))]
                     border border-[rgb(var(--border)/0.1)]
                     shadow-[0_12px_30px_-10px_rgba(0,0,0,0.2)]"
            >
              <span class="grid place-items-center w-7 h-7 rounded-full
                           bg-leaf-500 text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="3"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </span>
              <div class="text-[0.82rem] font-semibold text-[rgb(var(--text))]">
                SEC-compliant structure
              </div>
            </div>
  
            <!-- Corner accent (dashed ring) -->
            <div
              class="hidden lg:block absolute -bottom-6 -left-6
                     w-24 h-24 rounded-full
                     border-2 border-dashed border-harvest-500/30
                     pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
  
        <!-- ============ SCROLL CUE ============ -->
        <div
          ref="scrollCueRef"
          class="mt-20 lg:mt-24 flex items-center justify-center gap-3
                 text-[rgb(var(--text-muted))] text-[0.72rem]
                 uppercase tracking-[0.25em] font-semibold"
        >
          <span class="h-px w-12 bg-[rgb(var(--border)/0.3)]" />
          <span>Explore the opportunity</span>
          <span class="h-px w-12 bg-[rgb(var(--border)/0.3)]" />
        </div>
      </div>
    </section>
</template>
  
<script setup lang="ts">
  import gsap from 'gsap'
  import { SplitText } from 'gsap/SplitText'
  
  gsap.registerPlugin(SplitText)
  
  /* -------- Icons -------- */
  const icons = {
    shield: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    doc:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
    bank:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>`,
  }
  
  /* -------- Trust markers -------- */
  const trustMarkers = [
    { title: 'Independently audited', subtitle: 'Annual third-party verification', icon: icons.shield },
    { title: 'Legal transparency',    subtitle: 'Reviewed by counsel',              icon: icons.doc },
    { title: 'Insured against loss',  subtitle: 'Crop, weather & liability cover',   icon: icons.bank },
  ]
  
  /* -------- Hero stats -------- */
  const heroStats = [
    { value: 15,  decimals: 0, suffix: '%',  prefix: '',  label: 'Historical average annual yield (Growth tier)' },
    { value: 1200, decimals: 0, suffix: '+', prefix: '',  label: 'Hectares under management across six estates' },
    { value: 15,  decimals: 0, suffix: 'yrs', prefix: '', label: 'Operating history without missing a harvest cycle' },
  ]
  
  /* -------- Refs -------- */
  const sectionRef    = ref<HTMLElement | null>(null)
  const breadcrumbRef = ref<HTMLElement | null>(null)
  const eyebrowRef    = ref<HTMLElement | null>(null)
  const headlineRef   = ref<HTMLElement | null>(null)
  const leadRef       = ref<HTMLElement | null>(null)
  const ctaRef        = ref<HTMLElement | null>(null)
  const trustRef      = ref<HTMLElement | null>(null)
  const statsCardRef  = ref<HTMLElement | null>(null)
  const badgeRef      = ref<HTMLElement | null>(null)
  const scrollCueRef  = ref<HTMLElement | null>(null)
  const statRefs: HTMLElement[] = []
  
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
         ctaRef.value, trustRef.value, statsCardRef.value, badgeRef.value,
         scrollCueRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0 }
      )
      setFinalCounters()
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
        .from(ctaRef.value?.children ?? [], {
          y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1,
        }, '-=0.45')
        .from(trustRef.value?.children ?? [], {
          y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1,
        }, '-=0.4')
  
      /* --- Stats card --- */
      gsap.from(statsCardRef.value, {
        x: 60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        delay: 0.4,
      })
  
      /* --- Stats counters (delay after card enters) --- */
      tl.add(() => runCounters(), '-=0.6')
  
      /* --- Floating badge --- */
      gsap.from(badgeRef.value, {
        y: 20, autoAlpha: 0, scale: 0.9, duration: 0.6, ease: 'back.out(2)',
        delay: 1.5,
      })
  
      /* --- Scroll cue --- */
      gsap.from(scrollCueRef.value, {
        y: 12, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        delay: 1.8,
      })
  
      /* --- Slow rotating dashed ring --- */
      const ring = sectionRef.value?.querySelector('[aria-hidden="true"].rounded-full')
      if (ring) {
        gsap.to(ring, {
          rotate: 360, duration: 40, repeat: -1, ease: 'none',
        })
      }
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  
  /* ---------------------------------------------------------------
     COUNTERS
     --------------------------------------------------------------- */
  const runCounters = () => {
    const els = sectionRef.value?.querySelectorAll<HTMLElement>('.stat-number')
    if (!els) return
  
    els.forEach((el) => {
      const target   = Number(el.dataset.target || 0)
      const decimals = Number(el.dataset.decimals || 0)
      const prefix   = el.dataset.prefix || ''
      const suffix   = el.dataset.suffix || ''
      const obj = { val: 0 }
  
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          const n = decimals > 0
            ? obj.val.toFixed(decimals)
            : Math.round(obj.val).toLocaleString()
          el.textContent = `${prefix}${n}${suffix}`
        },
      })
    })
  }
  
  const setFinalCounters = () => {
    const els = sectionRef.value?.querySelectorAll<HTMLElement>('.stat-number')
    if (!els) return
    els.forEach((el) => {
      const target   = Number(el.dataset.target || 0)
      const decimals = Number(el.dataset.decimals || 0)
      const prefix   = el.dataset.prefix || ''
      const suffix   = el.dataset.suffix || ''
      const n = decimals > 0 ? target.toFixed(decimals) : Math.round(target).toLocaleString()
      el.textContent = `${prefix}${n}${suffix}`
    })
  }
</script>
  
<style scoped>
  .stat-number {
    display: inline-block;
    font-variant-numeric: tabular-nums;
  }
</style>