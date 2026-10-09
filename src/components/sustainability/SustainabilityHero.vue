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
               bg-emerald-500/6 blur-3xl pointer-events-none"
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
          <span class="text-[rgb(var(--text))] font-semibold">Sustainability</span>
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
                     bg-emerald-500/10 border border-emerald-500/20
                     text-emerald-700 dark:text-emerald-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Certified · Audited · Regenerative
            </div>
  
            <!-- Headline -->
            <h1
              ref="headlineRef"
              class="font-display font-extrabold
                     text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05]
                     tracking-[-0.035em] text-[rgb(var(--text))] mb-7 max-w-2xl"
            >
              Farming that gives back<br />
              <span class="text-leaf-500">more than it takes.</span>
            </h1>
  
            <!-- Lead paragraph -->
            <p
              ref="leadRef"
              class="text-[rgb(var(--text-muted))] text-[1.08rem] leading-relaxed
                     max-w-xl mb-10"
            >
              Sustainability isn't a badge we bought — it's a set of daily
              operational decisions. From how we treat soil to how we pay
              farmers, every practice is documented, audited, and improving
              year over year.
            </p>
  
            <!-- Pillar chips -->
            <div
              ref="pillarChipsRef"
              class="flex flex-wrap items-center gap-2.5 mb-10"
            >
              <button
                v-for="pillar in pillars"
                :key="pillar.slug"
                type="button"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.12)]
                       text-[rgb(var(--text))] text-[0.88rem] font-semibold
                       hover:border-leaf-500 hover:text-leaf-600
                       dark:hover:text-leaf-400
                       hover:-translate-y-0.5
                       transition-all duration-300"
                @click="scrollToSection(pillar.slug)"
              >
                <span
                  class="grid place-items-center w-5 h-5 rounded-md"
                  :class="pillar.iconBg"
                  v-html="pillar.icon"
                />
                {{ pillar.label }}
              </button>
            </div>
  
            <!-- CTAs -->
            <div
              ref="ctaRef"
              class="flex flex-wrap items-center gap-3.5"
            >
              <NuxtLink
                to="/impact-report"
                class="btn btn-primary !px-6 !py-3.5 !text-[0.95rem]"
              >
                Read the Impact Report
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </NuxtLink>
              <NuxtLink
                to="/contact?type=sustainability"
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <path d="M14 2v6h6"/>
                </svg>
                Request Methodology
              </NuxtLink>
            </div>
          </div>
  
          <!-- ============ RIGHT: CERTIFICATIONS CARD ============ -->
          <div
            ref="certsCardRef"
            class="lg:col-span-5 relative"
          >
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
                <!-- Header -->
                <div class="flex items-center gap-3 mb-6">
                  <span
                    class="grid place-items-center w-11 h-11 rounded-xl
                           bg-white/10 backdrop-blur-md border border-white/15
                           text-harvest-400"
                    v-html="shieldIcon"
                  />
                  <div>
                    <div class="font-display font-bold text-white
                                text-[1rem] leading-tight">
                      Certified Practices
                    </div>
                    <div class="text-white/60 text-[0.78rem]">
                      Independently audited annually
                    </div>
                  </div>
                </div>
  
                <!-- Certifications list -->
                <div class="space-y-4 mb-7">
                  <div
                    v-for="cert in certifications"
                    :key="cert.name"
                    class="flex items-start gap-4 py-3
                           border-b border-white/10
                           last:border-b-0 last:pb-0"
                  >
                    <span
                      class="shrink-0 grid place-items-center w-9 h-9 rounded-lg
                             bg-white/10 backdrop-blur-md border border-white/15
                             text-harvest-400"
                      v-html="cert.icon"
                    />
                    <div class="flex-1 min-w-0">
                      <div class="font-semibold text-white
                                  text-[0.9rem] leading-tight mb-0.5">
                        {{ cert.name }}
                      </div>
                      <div class="text-white/60 text-[0.78rem]
                                  leading-snug">
                        {{ cert.issuer }}
                      </div>
                    </div>
                    <div
                      class="shrink-0 inline-flex items-center gap-1.5
                             px-2 py-1 rounded-md
                             bg-harvest-500/25 text-harvest-300
                             text-[0.62rem] font-bold uppercase tracking-wider"
                    >
                      <span class="w-1 h-1 rounded-full bg-harvest-400 animate-pulse" />
                      Active
                    </div>
                  </div>
                </div>
  
                <!-- Stats row -->
                <div class="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <div class="font-display font-extrabold text-white
                                text-[1.35rem] leading-none mb-1
                                tabular-nums">
                      1,200<span class="text-harvest-400">ha</span>
                    </div>
                    <div class="text-white/50 text-[0.68rem]
                                uppercase tracking-wider font-bold">
                      Managed
                    </div>
                  </div>
                  <div>
                    <div class="font-display font-extrabold text-white
                                text-[1.35rem] leading-none mb-1
                                tabular-nums">
                      92<span class="text-harvest-400">%</span>
                    </div>
                    <div class="text-white/50 text-[0.68rem]
                                uppercase tracking-wider font-bold">
                      Waste recycled
                    </div>
                  </div>
                  <div>
                    <div class="font-display font-extrabold text-white
                                text-[1.35rem] leading-none mb-1
                                tabular-nums">
                      0
                    </div>
                    <div class="text-white/50 text-[0.68rem]
                                uppercase tracking-wider font-bold">
                      Deforestation
                    </div>
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
                           bg-emerald-500 text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="3"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </span>
              <div class="text-[0.82rem] font-semibold text-[rgb(var(--text))]">
                Net-positive since 2022
              </div>
            </div>
  
            <!-- Rotating ring -->
            <div
              ref="ringRef"
              class="hidden lg:block absolute -bottom-6 -left-6
                     w-24 h-24 rounded-full
                     border-2 border-dashed border-emerald-500/30
                     pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
  
        <!-- ============ TRUST MARKERS ROW ============ -->
        <div
          ref="trustRef"
          class="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6
                 pt-8 lg:pt-10 border-t border-[rgb(var(--border)/0.1)]"
        >
          <div
            v-for="trust in trustMarkers"
            :key="trust.title"
            class="flex items-start gap-4"
          >
            <span
              class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                     bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              v-html="trust.icon"
            />
            <div>
              <div class="font-semibold text-[0.95rem]
                          text-[rgb(var(--text))] leading-tight mb-1">
                {{ trust.title }}
              </div>
              <div class="text-[rgb(var(--text-muted))] text-[0.82rem]
                          leading-snug">
                {{ trust.subtitle }}
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
          <span>Explore our practices</span>
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
    soil: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/><path d="M8 6v12M16 6v12"/></svg>`,
    water: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`,
    community: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  }
  
  const shieldIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`
  
  const certIcons = {
    ra: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    iso: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    ft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/></svg>`,
  }
  
  /* -------- Pillars -------- */
  const pillars = [
    {
      slug: 'soil',
      label: 'Soil & Land',
      icon: icons.soil,
      iconBg: 'bg-leaf-500/15 text-leaf-600 dark:text-leaf-400',
    },
    {
      slug: 'water',
      label: 'Water',
      icon: icons.water,
      iconBg: 'bg-blue-500/15 text-blue-600 dark:text-blue-400',
    },
    {
      slug: 'community',
      label: 'Community',
      icon: icons.community,
      iconBg: 'bg-harvest-500/15 text-harvest-600 dark:text-harvest-400',
    },
  ]
  
  /* -------- Certifications -------- */
  const certifications = [
    {
      name: 'Rainforest Alliance Certified',
      issuer: 'Since March 2022 · renewed annually',
      icon: certIcons.ra,
    },
    {
      name: 'ISO 14001 Environmental Management',
      issuer: 'Since November 2022 · renewed 2026',
      icon: certIcons.iso,
    },
    {
      name: 'Fairtrade International',
      issuer: 'Since August 2019 · 208 farmers covered',
      icon: certIcons.ft,
    },
  ]
  
  /* -------- Trust markers -------- */
  const trustMarkers = [
    {
      title: 'Third-party audited',
      subtitle: 'SGS, Rainforest Alliance, ISO 14001 assessors',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    },
    {
      title: 'Publicly reported',
      subtitle: 'Full methodology in our annual impact report',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    },
    {
      title: 'Continuously improving',
      subtitle: 'New metrics and certifications added each year',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>`,
    },
  ]
  
  /* -------- Scroll to section -------- */
  const scrollToSection = (slug: string) => {
    const el = document.getElementById(slug)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  
  /* -------- Refs -------- */
  const sectionRef      = ref<HTMLElement | null>(null)
  const breadcrumbRef   = ref<HTMLElement | null>(null)
  const eyebrowRef      = ref<HTMLElement | null>(null)
  const headlineRef     = ref<HTMLElement | null>(null)
  const leadRef         = ref<HTMLElement | null>(null)
  const pillarChipsRef  = ref<HTMLElement | null>(null)
  const ctaRef          = ref<HTMLElement | null>(null)
  const certsCardRef    = ref<HTMLElement | null>(null)
  const badgeRef        = ref<HTMLElement | null>(null)
  const ringRef         = ref<HTMLElement | null>(null)
  const trustRef        = ref<HTMLElement | null>(null)
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
         pillarChipsRef.value, ctaRef.value, certsCardRef.value, badgeRef.value,
         trustRef.value, scrollCueRef.value].filter(Boolean),
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
        .from(pillarChipsRef.value?.children ?? [], {
          y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.08,
        }, '-=0.45')
        .from(ctaRef.value?.children ?? [], {
          y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1,
        }, '-=0.4')
  
      /* --- Certs card --- */
      gsap.from(certsCardRef.value, {
        x: 60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        delay: 0.4,
      })
  
      /* --- Cert rows stagger --- */
      if (certsCardRef.value) {
        const certRows = certsCardRef.value.querySelectorAll('.space-y-4 > div')
        gsap.from(certRows, {
          x: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
          delay: 0.9,
        })
      }
  
      /* --- Floating badge --- */
      gsap.from(badgeRef.value, {
        y: 20, autoAlpha: 0, scale: 0.9, duration: 0.6, ease: 'back.out(2)',
        delay: 1.5,
      })
  
      /* --- Trust markers --- */
      if (trustRef.value) {
        gsap.from(trustRef.value.children, {
          y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          delay: 1.2,
        })
      }
  
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