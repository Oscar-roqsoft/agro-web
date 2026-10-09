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
      <!-- Grid texture -->
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
          <span class="text-[rgb(var(--text))] font-semibold">Harvest Calendar</span>
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
              Live harvest schedule
            </div>
  
            <!-- Headline -->
            <h1
              ref="headlineRef"
              class="font-display font-extrabold
                     text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05]
                     tracking-[-0.035em] text-[rgb(var(--text))] mb-7 max-w-2xl"
            >
              What's ready now,<br />
              and what's coming<br />
              <span class="text-leaf-500">for years ahead.</span>
            </h1>
  
            <!-- Lead paragraph -->
            <p
              ref="leadRef"
              class="text-[rgb(var(--text-muted))] text-[1.08rem] leading-relaxed
                     max-w-xl mb-10"
            >
              Every harvest window across our six estates — updated as crops
              mature. Plan your sourcing, coordinate deliveries, or reserve
              future volumes. No surprises.
            </p>
  
            <!-- CTAs -->
            <div
              ref="ctaRef"
              class="flex flex-wrap items-center gap-3.5 mb-12"
            >
              <a
                href="#calendar"
                class="btn btn-primary !px-6 !py-3.5 !text-[0.95rem]"
              >
                View Full Calendar
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </a>
              <NuxtLink
                to="/contact?type=buyer"
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
                  <rect x="2" y="4" width="20" height="16" rx="3"/>
                  <path d="m2 7 10 7 10-7"/>
                </svg>
                Reserve Future Volume
              </NuxtLink>
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
  
          <!-- ============ RIGHT: LIVE STATUS CARD ============ -->
          <div
            ref="statusCardRef"
            class="lg:col-span-5 relative"
          >
            <div
              class="relative rounded-3xl overflow-hidden
                     bg-gradient-to-br from-leaf-700 via-leaf-800 to-leaf-900
                     p-7 lg:p-8
                     shadow-[0_30px_60px_-20px_rgba(46,125,50,0.4)]"
            >
              <!-- Decorative circles -->
              <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
              <div class="absolute -right-4 top-1/3 w-24 h-24 rounded-full bg-white/5" />
              <div class="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-white/5" />
  
              <!-- Header -->
              <div class="relative z-10 flex items-center justify-between gap-3 mb-7">
                <div class="flex items-center gap-3">
                  <span
                    class="grid place-items-center w-11 h-11 rounded-xl
                           bg-white/10 backdrop-blur-md border border-white/15
                           text-harvest-400"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2"
                         stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="3"/>
                      <path d="M16 2v4M8 2v4M3 10h18"/>
                    </svg>
                  </span>
                  <div>
                    <div class="font-display font-bold text-white
                                text-[1rem] leading-tight">
                      Live Status
                    </div>
                    <div class="text-white/60 text-[0.78rem]">
                      {{ currentMonth }} {{ currentYear }}
                    </div>
                  </div>
                </div>
  
                <!-- Live pulse -->
                <span
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                         bg-leaf-500/25 border border-leaf-400/40
                         text-leaf-100 text-[0.68rem] font-bold uppercase tracking-wider"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-leaf-400 animate-pulse" />
                  Live
                </span>
              </div>
  
              <!-- Stats stack -->
              <div class="relative z-10 space-y-5">
                <div
                  v-for="(stat, i) in liveStats"
                  :key="stat.label"
                >
                  <div class="flex items-baseline gap-3 mb-1.5">
                    <span
                      class="font-display font-extrabold text-white
                             text-[clamp(1.65rem,3vw,2.15rem)] leading-none
                             tracking-[-0.03em] tabular-nums"
                    >
                      {{ stat.value }}
                    </span>
                    <span
                      class="text-harvest-400 font-display font-bold
                             text-[1rem] leading-none"
                    >
                      {{ stat.suffix }}
                    </span>
                  </div>
                  <div class="text-white/75 text-[0.88rem] font-medium leading-snug">
                    {{ stat.label }}
                  </div>
                  <div
                    v-if="i < liveStats.length - 1"
                    class="mt-5 h-px bg-white/10"
                  />
                </div>
              </div>
  
              <!-- Footer: active crops mini row -->
              <div
                class="relative z-10 mt-7 pt-6 border-t border-white/10"
              >
                <div class="text-white/55 text-[0.68rem]
                            uppercase tracking-wider font-bold mb-3">
                  In Season Right Now
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="crop in inSeasonCrops"
                    :key="crop"
                    class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md
                           bg-white/10 backdrop-blur-md border border-white/15
                           text-white/90 text-[0.78rem] font-medium"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-leaf-400 animate-pulse" />
                    {{ crop }}
                  </span>
                </div>
              </div>
            </div>
  
            <!-- Floating card (top-right of status card) -->
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
                           bg-harvest-500 text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="3"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </span>
              <div class="text-[0.82rem] font-semibold text-[rgb(var(--text))]">
                Updated weekly
              </div>
            </div>
  
            <!-- Corner accent (rotating dashed ring) -->
            <div
              ref="ringRef"
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
          <span>Explore the full calendar</span>
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
    calendar: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
    globe: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    refresh: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
  }
  
  /* -------- Trust items -------- */
  const trustItems = [
    {
      title: 'Updated weekly',
      subtitle: 'Real harvest data, not estimates',
      icon: icons.refresh,
    },
    {
      title: 'Multi-year view',
      subtitle: 'See what\'s coming through 2030',
      icon: icons.calendar,
    },
    {
      title: 'All estates',
      subtitle: 'Palm, cocoa, plantain, rubber & more',
      icon: icons.globe,
    },
  ]
  
  /* -------- Current date -------- */
  const now = new Date()
  const currentMonth = now.toLocaleString('en-US', { month: 'long' })
  const currentYear  = now.getFullYear()
  
  /* -------- Live stats (static for now — will be computed from harvest data later) -------- */
  const liveStats = [
    { value: 4, suffix: ' crops', label: 'Currently being harvested across our estates' },
    { value: 3, suffix: ' estates', label: 'In active production this month' },
    { value: 12, suffix: '+', label: 'Harvest windows scheduled through 2030' },
  ]
  
  /* -------- Crops currently in season -------- */
  const inSeasonCrops = ['Palm Oil', 'Palm Kernel', 'Vegetables', 'Maize']
  
  /* -------- Refs -------- */
  const sectionRef     = ref<HTMLElement | null>(null)
  const breadcrumbRef  = ref<HTMLElement | null>(null)
  const eyebrowRef     = ref<HTMLElement | null>(null)
  const headlineRef    = ref<HTMLElement | null>(null)
  const leadRef        = ref<HTMLElement | null>(null)
  const ctaRef         = ref<HTMLElement | null>(null)
  const trustRef       = ref<HTMLElement | null>(null)
  const statusCardRef  = ref<HTMLElement | null>(null)
  const badgeRef       = ref<HTMLElement | null>(null)
  const ringRef        = ref<HTMLElement | null>(null)
  const scrollCueRef   = ref<HTMLElement | null>(null)
  
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
         ctaRef.value, trustRef.value, statusCardRef.value, badgeRef.value,
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
  
      /* --- Status card --- */
      gsap.from(statusCardRef.value, {
        x: 60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        delay: 0.4,
      })
  
      /* --- Live stats stagger in --- */
      if (statusCardRef.value) {
        const statEls = statusCardRef.value.querySelectorAll('.space-y-5 > div')
        gsap.from(statEls, {
          y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
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