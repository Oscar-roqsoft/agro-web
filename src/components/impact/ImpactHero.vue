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
          <span class="text-[rgb(var(--text))] font-semibold">Impact Report</span>
        </nav>
  
        <!-- ============ MAIN GRID ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
  
          <!-- ============ LEFT: STATEMENT ============ -->
          <div class="lg:col-span-7">
  
            <!-- Eyebrow -->
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-6
                     px-3.5 py-1.5 rounded-full
                     bg-leaf-500/10 border border-leaf-500/20
                     text-leaf-600 dark:text-leaf-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-leaf-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-2 w-2 bg-leaf-500" />
              </span>
              2025 Impact Report · Published Annually
            </div>
  
            <!-- Headline -->
            <h1
              ref="headlineRef"
              class="font-display font-extrabold
                     text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05]
                     tracking-[-0.035em] text-[rgb(var(--text))] mb-7 max-w-2xl"
            >
              Farming that proves<br />
              <span class="text-leaf-500">its impact.</span>
            </h1>
  
            <!-- Lead paragraph -->
            <p
              ref="leadRef"
              class="text-[rgb(var(--text-muted))] text-[1.08rem] leading-relaxed
                     max-w-xl mb-10"
            >
              Every number in this report is measured, audited, and disclosed.
              From hectares restored to carbon sequestered, from farmer wages to
              community reinvestment — nothing is rounded up, nothing is hidden.
            </p>
  
            <!-- CTAs -->
            <div
              ref="ctaRef"
              class="flex flex-wrap items-center gap-3.5 mb-12"
            >
              <a
                href="/pdfs/impact-report-2025.pdf"
                download
                class="btn btn-primary !px-6 !py-3.5 !text-[0.95rem]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <path d="M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download Report (PDF)
              </a>
              <a
                href="#read-online"
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                Read Online
              </a>
            </div>
  
            <!-- Trust markers row -->
            <div
              ref="trustRef"
              class="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8
                     border-t border-[rgb(var(--border)/0.1)]"
            >
              <div
                v-for="trust in trustItems"
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
  
          <!-- ============ RIGHT: REPORT PREVIEW CARD ============ -->
          <div
            ref="previewCardRef"
            class="lg:col-span-5 relative"
          >
            <!-- Main card -->
            <div
              class="relative rounded-2xl overflow-hidden
                     bg-gradient-to-br from-leaf-700 via-leaf-800 to-leaf-900
                     p-7 lg:p-8
                     shadow-[0_30px_60px_-20px_rgba(46,125,50,0.45)]"
            >
              <!-- Decorative circles -->
              <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
              <div class="absolute -right-4 top-1/3 w-24 h-24 rounded-full bg-white/5" />
              <div class="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-white/5" />
  
              <div class="relative z-10">
                <!-- Report label -->
                <div class="flex items-center justify-between gap-3 mb-6">
                  <div
                    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                           bg-white/10 backdrop-blur-md border border-white/20
                           text-harvest-300 text-[0.68rem]
                           font-bold tracking-wider uppercase"
                  >
                    <span class="w-1 h-1 rounded-full bg-harvest-400 animate-pulse" />
                    Latest Edition
                  </div>
  
                  <div class="text-white/60 text-[0.72rem] font-medium">
                    Published Jan 2025
                  </div>
                </div>
  
                <!-- Report cover (visual mockup) -->
               
  
                <!-- Contents preview -->
                <div class="space-y-3">
                  <div
                    v-for="(section, i) in reportContents"
                    :key="section.label"
                    class="flex items-center gap-3 py-2
                           border-b border-white/10"
                  >
                    <span
                      class="shrink-0 font-display font-bold text-[0.72rem]
                             text-harvest-400 tabular-nums w-6"
                    >
                      {{ String(i + 1).padStart(2, '0') }}
                    </span>
                    <span class="text-white/85 text-[0.86rem] font-medium flex-1">
                      {{ section.label }}
                    </span>
                    <span class="text-white/40 text-[0.72rem] tabular-nums">
                      p. {{ section.page }}
                    </span>
                  </div>
                </div>
  
                <!-- Footer meta -->
                <div
                  class="flex items-center justify-between gap-3 mt-6 pt-5
                         border-t border-white/10"
                >
                  <div class="text-white/50 text-[0.72rem] font-medium">
                    48 pages · PDF · 6.2 MB
                  </div>
                  <div class="text-white/50 text-[0.72rem] font-medium">
                    EN · FR · PT
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Floating badge -->
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
                Third-party audited
              </div>
            </div>
  
            <!-- Rotating ring -->
            <div
              ref="ringRef"
              class="hidden lg:block absolute -bottom-6 -left-6
                     w-24 h-24 rounded-full
                     border-2 border-dashed border-leaf-500/30
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
          <span>Explore the numbers</span>
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
    globe: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    doc: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
  }
  
  /* -------- Trust items -------- */
  const trustItems = [
    {
      title: 'Independently audited',
      subtitle: 'SGS, Rainforest Alliance, ISO 14001',
      icon: icons.shield,
    },
    {
      title: 'Globally comparable',
      subtitle: 'Aligned with GRI + SDG frameworks',
      icon: icons.globe,
    },
    {
      title: 'Fully disclosed',
      subtitle: 'Methodology & raw data included',
      icon: icons.doc,
    },
  ]
  
  /* -------- Report contents preview -------- */
  const reportContents = [
    { label: 'Message from the founder',       page: 3 },
    { label: 'Our estates & operations',       page: 7 },
    { label: 'Environmental impact',           page: 14 },
    { label: 'Farmers & communities',          page: 22 },
    { label: 'Governance & compliance',        page: 30 },
    { label: 'Methodology & data',             page: 38 },
  ]
  
  /* -------- Refs -------- */
  const sectionRef      = ref<HTMLElement | null>(null)
  const breadcrumbRef   = ref<HTMLElement | null>(null)
  const eyebrowRef      = ref<HTMLElement | null>(null)
  const headlineRef     = ref<HTMLElement | null>(null)
  const leadRef         = ref<HTMLElement | null>(null)
  const ctaRef          = ref<HTMLElement | null>(null)
  const trustRef        = ref<HTMLElement | null>(null)
  const previewCardRef  = ref<HTMLElement | null>(null)
  const badgeRef        = ref<HTMLElement | null>(null)
  const ringRef         = ref<HTMLElement | null>(null)
  const scrollCueRef    = ref<HTMLElement | null>(null)
  
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
         ctaRef.value, trustRef.value, previewCardRef.value, badgeRef.value,
         scrollCueRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0, scale: 1 }
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
        .from(ctaRef.value?.children ?? [], {
          y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1,
        }, '-=0.45')
        .from(trustRef.value?.children ?? [], {
          y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1,
        }, '-=0.4')
  
      /* --- Report preview card --- */
      gsap.from(previewCardRef.value, {
        x: 60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        delay: 0.4,
      })
  
      /* --- Contents stagger in --- */
      if (previewCardRef.value) {
        const contents = previewCardRef.value.querySelectorAll('.space-y-3 > div')
        gsap.from(contents, {
          x: 20, autoAlpha: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
          delay: 0.9,
        })
      }
  
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
  
      /* --- Rotating dashed ring --- */
      if (ringRef.value) {
        gsap.to(ringRef.value, {
          rotate: 360, duration: 40, repeat: -1, ease: 'none',
        })
      }
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>