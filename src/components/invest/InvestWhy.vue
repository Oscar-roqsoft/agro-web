<template>
    <section
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg-alt))] overflow-hidden"
    >
      <!-- Ambient blobs -->
      <div
        class="absolute -top-40 -right-32 w-[420px] h-[420px] rounded-full
               bg-leaf-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        class="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full
               bg-harvest-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
  
      <div class="container-page relative">
  
        <!-- ============ HEADER ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 lg:mb-20 items-end">
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
              The Case for Agriculture
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              Three reasons agriculture<br />
              <span class="text-leaf-500">outperforms the noise.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
              Agriculture isn't a trend — it's the one asset class the world
              cannot stop consuming. Here's why serious investors are adding it
              to their portfolios, and how we help them capture the upside.
            </p>
          </div>
        </div>
  
        <!-- ============ PILLARS BENTO GRID ============ -->
        <div
          ref="gridRef"
          class="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6"
        >
  
          <!-- ============ PILLAR 1 (FEATURED, large) ============ -->
          <article
            ref="pillar1Ref"
            class="lg:col-span-7 lg:row-span-2 relative overflow-hidden
                   rounded-3xl
                   bg-gradient-to-br from-leaf-700 via-leaf-800 to-leaf-900
                   p-7 lg:p-10
                   min-h-[520px]
                   flex flex-col justify-between"
          >
            <!-- Decorative circles -->
            <div class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/5" />
            <div class="absolute -right-4 top-1/2 w-32 h-32 rounded-full bg-white/5" />
            <div class="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/5" />
  
            <!-- Top: tag + number -->
            <div class="relative z-10">
              <div
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                       bg-white/10 backdrop-blur-md border border-white/20
                       text-harvest-300 text-[0.72rem]
                       font-semibold tracking-wider uppercase mb-8"
              >
                <span class="w-1 h-1 rounded-full bg-harvest-400" />
                Macro Driver 01
              </div>
  
              <!-- Big number -->
              <div
                class="font-display font-extrabold text-white
                       text-[clamp(4rem,8vw,6.5rem)] leading-[0.9]
                       tracking-[-0.05em] mb-6 tabular-nums"
              >
                <span
                  class="stat-number"
                  data-target="2.5"
                  data-decimals="1"
                  data-suffix="B"
                >0B</span>
              </div>
  
              <h3
                class="font-display font-bold text-white
                       text-[clamp(1.35rem,2.2vw,1.85rem)] leading-tight
                       tracking-[-0.02em] mb-5 max-w-md"
              >
                More mouths to feed by 2050.
              </h3>
  
              <p class="text-white/75 text-[1.02rem] leading-relaxed max-w-md">
                Africa's population is set to double by 2050, making it the
                fastest-growing food market in the world. Demand for staple
                crops — palm, cocoa, cassava, plantain — is structurally rising,
                regardless of economic cycles.
              </p>
            </div>
  
            <!-- Bottom: how we capture it -->
            <div class="relative z-10 mt-10 pt-8 border-t border-white/15">
              <div
                class="text-harvest-300 text-[0.72rem] font-bold
                       uppercase tracking-[0.2em] mb-3"
              >
                How we capture it
              </div>
              <p class="text-white/85 text-[0.98rem] leading-relaxed max-w-md">
                We farm the crops West Africans eat every single day — the
                staples that don't lose demand in a recession.
              </p>
            </div>
          </article>
  
          <!-- ============ PILLAR 2 ============ -->
          <article
            ref="pillar2Ref"
            class="lg:col-span-5 relative overflow-hidden rounded-3xl
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]
                   p-7 lg:p-8
                   min-h-[250px]
                   flex flex-col justify-between
                   transition-all duration-500
                   hover:-translate-y-1.5
                   hover:border-leaf-500/25
                   hover:shadow-[0_25px_50px_-20px_rgba(46,125,50,0.25)]"
          >
            <div class="relative z-10">
              <div
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                       bg-leaf-500/10 border border-leaf-500/20
                       text-leaf-600 dark:text-leaf-400
                       text-[0.72rem] font-semibold tracking-wider uppercase mb-6"
              >
                <span class="w-1 h-1 rounded-full bg-leaf-500" />
                Macro Driver 02
              </div>
  
              <!-- Number -->
              <div
                class="font-display font-extrabold text-leaf-500
                       text-[clamp(2.75rem,5vw,4rem)] leading-none
                       tracking-[-0.04em] mb-4 tabular-nums"
              >
                <span
                  class="stat-number"
                  data-target="6"
                  data-decimals="0"
                  data-suffix="%"
                >0%</span>
              </div>
  
              <h3
                class="font-display font-bold text-[rgb(var(--text))]
                       text-[1.25rem] lg:text-[1.4rem] leading-tight
                       tracking-[-0.02em] mb-3"
              >
                Africa's farmland returns beat global equities.
              </h3>
  
              <p class="text-[rgb(var(--text-muted))] text-[0.95rem] leading-relaxed">
                Over the past 15 years, well-managed African farmland has
                delivered average returns above 6% p.a. — with low correlation
                to stock markets.
              </p>
            </div>
  
            <div class="relative z-10 mt-6 pt-5 border-t border-[rgb(var(--border)/0.08)]">
              <div
                class="text-[rgb(var(--text-muted))] text-[0.68rem]
                       font-bold uppercase tracking-wider mb-2"
              >
                How we capture it
              </div>
              <p class="text-[rgb(var(--text))] text-[0.88rem] leading-relaxed">
                Our diversified crop mix spreads risk across harvest cycles,
                so no single bad season defines the year.
              </p>
            </div>
          </article>
  
          <!-- ============ PILLAR 3 ============ -->
          <article
            ref="pillar3Ref"
            class="lg:col-span-5 relative overflow-hidden rounded-3xl
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]
                   p-7 lg:p-8
                   min-h-[250px]
                   flex flex-col justify-between
                   transition-all duration-500
                   hover:-translate-y-1.5
                   hover:border-harvest-500/30
                   hover:shadow-[0_25px_50px_-20px_rgba(249,168,37,0.28)]"
          >
            <div class="relative z-10">
              <div
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                       bg-harvest-500/10 border border-harvest-500/20
                       text-harvest-700 dark:text-harvest-400
                       text-[0.72rem] font-semibold tracking-wider uppercase mb-6"
              >
                <span class="w-1 h-1 rounded-full bg-harvest-500" />
                Macro Driver 03
              </div>
  
              <!-- Number -->
              <div
                class="font-display font-extrabold text-harvest-500
                       text-[clamp(2.75rem,5vw,4rem)] leading-none
                       tracking-[-0.04em] mb-4 tabular-nums"
              >
                <span
                  class="stat-number"
                  data-target="60"
                  data-decimals="0"
                  data-suffix="%"
                >0%</span>
              </div>
  
              <h3
                class="font-display font-bold text-[rgb(var(--text))]
                       text-[1.25rem] lg:text-[1.4rem] leading-tight
                       tracking-[-0.02em] mb-3"
              >
                Of the world's arable land is here.
              </h3>
  
              <p class="text-[rgb(var(--text-muted))] text-[0.95rem] leading-relaxed">
                Over 60% of the world's uncultivated arable land sits in Africa.
                As global food demand rises, this land becomes increasingly
                valuable — and increasingly scarce.
              </p>
            </div>
  
            <div class="relative z-10 mt-6 pt-5 border-t border-[rgb(var(--border)/0.08)]">
              <div
                class="text-[rgb(var(--text-muted))] text-[0.68rem]
                       font-bold uppercase tracking-wider mb-2"
              >
                How we capture it
              </div>
              <p class="text-[rgb(var(--text))] text-[0.88rem] leading-relaxed">
                We acquired our estates early — securing long-term land rights
                before prices reflect the coming demand.
              </p>
            </div>
          </article>
        </div>
  
        <!-- ============ SOURCE STRIP ============ -->
        <div
          ref="sourcesRef"
          class="mt-10 lg:mt-14
                 rounded-2xl p-5 lg:p-6
                 bg-[rgb(var(--surface))]
                 border border-[rgb(var(--border)/0.08)]"
        >
          <div class="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <div class="shrink-0 flex items-center gap-3">
              <span
                class="grid place-items-center w-10 h-10 rounded-xl
                       bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                v-html="infoIcon"
              />
              <div>
                <div class="text-[0.72rem] uppercase tracking-wider
                            font-bold text-[rgb(var(--text-muted))]">
                  Data Sources
                </div>
                <div class="text-[rgb(var(--text))] text-[0.9rem] font-semibold">
                  Independently verified
                </div>
              </div>
            </div>
  
            <div
              class="flex-1 flex flex-wrap items-center gap-x-6 gap-y-2
                     text-[0.82rem] text-[rgb(var(--text-muted))]"
            >
              <span class="inline-flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-leaf-500/60" />
                UN FAO Agricultural Outlook
              </span>
              <span class="inline-flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-leaf-500/60" />
                World Bank Africa Pulse
              </span>
              <span class="inline-flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-leaf-500/60" />
                AfDB Land Productivity Reports
              </span>
            </div>
          </div>
        </div>
  
        <!-- ============ TRANSITION CTA ============ -->
        <div
          ref="transitionRef"
          class="mt-14 lg:mt-20 text-center max-w-2xl mx-auto"
        >
          <div
            class="text-[rgb(var(--text-muted))] text-[0.78rem]
                   uppercase tracking-[0.2em] font-semibold mb-4"
          >
            So what does this mean for you?
          </div>
          <h3
            class="font-display font-extrabold
                   text-[clamp(1.35rem,2.5vw,1.85rem)] leading-tight
                   tracking-[-0.02em] text-[rgb(var(--text))] mb-6"
          >
            Three ways to participate —<br class="hidden sm:block" />
            sized to your horizon.
          </h3>
          <a
            href="#packages"
            class="group inline-flex items-center gap-2
                   text-leaf-600 dark:text-leaf-400
                   font-semibold text-[0.95rem]
                   hover:gap-3 transition-all duration-200"
          >
            See investment packages
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.4"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </a>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  /* -------- Icons -------- */
  const infoIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`
  
  /* -------- Refs -------- */
  const sectionRef     = ref<HTMLElement | null>(null)
  const eyebrowRef     = ref<HTMLElement | null>(null)
  const headingRef     = ref<HTMLElement | null>(null)
  const descRef        = ref<HTMLElement | null>(null)
  const gridRef        = ref<HTMLElement | null>(null)
  const pillar1Ref     = ref<HTMLElement | null>(null)
  const pillar2Ref     = ref<HTMLElement | null>(null)
  const pillar3Ref     = ref<HTMLElement | null>(null)
  const sourcesRef     = ref<HTMLElement | null>(null)
  const transitionRef  = ref<HTMLElement | null>(null)
  
  /* ---------------------------------------------------------------
     GSAP — entrance + counters
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         pillar1Ref.value, pillar2Ref.value, pillar3Ref.value,
         sourcesRef.value, transitionRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0 }
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
  
      /* --- Pillar 1 (featured) --- */
      gsap.from(pillar1Ref.value, {
        y: 60, autoAlpha: 0, scale: 0.98, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.value, start: 'top 78%' },
      })
  
      /* --- Pillars 2 & 3 --- */
      gsap.from([pillar2Ref.value, pillar3Ref.value].filter(Boolean), {
        y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.value, start: 'top 72%' },
      })
  
      /* --- Sources strip --- */
      gsap.from(sourcesRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sourcesRef.value, start: 'top 88%' },
      })
  
      /* --- Transition CTA --- */
      gsap.from(transitionRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: transitionRef.value, start: 'top 90%' },
      })
  
      /* --- Counters trigger when pillar 1 enters --- */
      ScrollTrigger.create({
        trigger: gridRef.value,
        start: 'top 75%',
        once: true,
        onEnter: () => runCounters(),
      })
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
      const suffix   = el.dataset.suffix || ''
      const obj = { val: 0 }
  
      gsap.to(obj, {
        val: target,
        duration: 2.2,
        ease: 'power2.out',
        onUpdate: () => {
          const n = decimals > 0
            ? obj.val.toFixed(decimals)
            : Math.round(obj.val).toLocaleString()
          el.textContent = `${n}${suffix}`
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
      const suffix   = el.dataset.suffix || ''
      const n = decimals > 0 ? target.toFixed(decimals) : Math.round(target).toLocaleString()
      el.textContent = `${n}${suffix}`
    })
  }
  </script>
  
  <style scoped>
  .stat-number {
    display: inline-block;
    font-variant-numeric: tabular-nums;
  }
  </style>