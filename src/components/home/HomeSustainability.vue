<template>
    <section
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg))] overflow-hidden"
    >
      <!-- Decorative gradient blobs -->
      <div
        class="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full
               bg-leaf-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        class="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full
               bg-harvest-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
  
      <div class="container-page relative">
  
        <!-- ============ HEADER ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 lg:mb-20 items-end">
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
              Sustainability & Impact
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              Farming that gives back<br />
              <span class="text-leaf-500">more than it takes.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
              Every hectare we cultivate is designed to restore soil, support farmers,
              and reduce emissions — measured, audited, and reported annually.
            </p>
          </div>
        </div>
  
        <!-- ============ BENTO GRID ============ -->
        <div
          ref="gridRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6"
        >
          <!-- ============ FEATURED CARD (large) ============ -->
          <article
            ref="featureRef"
            class="lg:col-span-7 lg:row-span-2 relative overflow-hidden
                   rounded-2xl border border-[rgb(var(--border)/0.08)]
                   bg-gradient-to-br from-leaf-600 to-leaf-800
                   p-7 lg:p-9 min-h-[420px] lg:min-h-[520px]
                   flex flex-col justify-between"
          >
            <!-- Decorative circles -->
            <div class="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/5" />
            <div class="absolute -right-6 top-40 w-32 h-32 rounded-full bg-white/5" />
            <div class="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-white/5" />
  
            <div class="relative z-10">
              <div
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                       bg-white/15 backdrop-blur-md border border-white/20
                       text-white text-[0.72rem] font-semibold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-harvest-400 animate-pulse" />
                Flagship Program
              </div>
  
              <h3
                class="font-display font-extrabold text-white
                       text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1]
                       tracking-[-0.025em] mt-6 mb-4 max-w-md"
              >
                Reforesting 500 hectares of degraded farmland.
              </h3>
  
              <p class="text-white/80 text-[1rem] leading-relaxed max-w-md">
                By 2030, we're restoring native tree cover across our estates —
                improving soil health, sequestering carbon, and creating
                habitats for local wildlife.
              </p>
            </div>
  
            <!-- Progress bar -->
            <div class="relative z-10 mt-8">
              <div class="flex items-baseline justify-between mb-3">
                <div class="text-white/70 text-[0.78rem] font-semibold uppercase tracking-wider">
                  Progress to 2030
                </div>
                <div class="font-display font-extrabold text-white text-[1.5rem] leading-none">
                  <span class="counter" data-target="64">0</span><span class="text-white/70">%</span>
                </div>
              </div>
              <div class="h-2 rounded-full bg-white/15 overflow-hidden">
                <div
                  ref="featureProgressRef"
                  class="h-full rounded-full origin-left
                         bg-gradient-to-r from-harvest-400 to-harvest-500"
                  style="transform: scaleX(0); transform-origin: left center;"
                />
              </div>
  
              <div class="grid grid-cols-3 gap-4 mt-7 pt-6 border-t border-white/15">
                <div>
                  <div class="font-display font-extrabold text-white text-[1.35rem] leading-none mb-1">
                    <span class="counter" data-target="218">0</span><span class="text-white/70 text-[0.9rem] ml-0.5">ha</span>
                  </div>
                  <div class="text-white/60 text-[0.68rem] uppercase tracking-wider font-semibold">
                    Restored
                  </div>
                </div>
                <div>
                  <div class="font-display font-extrabold text-white text-[1.35rem] leading-none mb-1">
                    <span class="counter" data-target="34000">0</span>
                  </div>
                  <div class="text-white/60 text-[0.68rem] uppercase tracking-wider font-semibold">
                    Trees Planted
                  </div>
                </div>
                <div>
                  <div class="font-display font-extrabold text-white text-[1.35rem] leading-none mb-1">
                    <span class="counter" data-target="8">0</span><span class="text-white/70 text-[0.9rem] ml-0.5">kt</span>
                  </div>
                  <div class="text-white/60 text-[0.68rem] uppercase tracking-wider font-semibold">
                    CO₂ Offset
                  </div>
                </div>
              </div>
            </div>
          </article>
  
          <!-- ============ METRIC CARDS ============ -->
          <article
            v-for="(metric, i) in metrics"
            :key="metric.label"
            :ref="(el) => { if (el) metricRefs[i] = el as HTMLElement }"
            class="metric-card group
                   lg:col-span-5 relative overflow-hidden
                   rounded-2xl border border-[rgb(var(--border)/0.08)]
                   bg-[rgb(var(--surface))]
                   p-6 lg:p-7
                   transition-all duration-500
                   hover:-translate-y-1
                   hover:border-leaf-500/25
                   hover:shadow-[0_25px_50px_-20px_rgba(46,125,50,0.25)]"
          >
            <!-- Icon -->
            <div
              class="grid place-items-center w-12 h-12 rounded-xl mb-5
                     transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
              :class="metric.iconBg"
              v-html="metric.icon"
            />
  
            <!-- Value -->
            <div
              class="font-display font-extrabold
                     text-[clamp(1.75rem,3vw,2.25rem)] leading-none
                     text-[rgb(var(--text))] mb-1.5"
            >
              <span class="counter" :data-target="metric.value">0</span
              ><span class="text-[rgb(var(--text-muted))] text-[0.55em] ml-1">{{ metric.suffix }}</span>
            </div>
  
            <!-- Label -->
            <div class="text-[rgb(var(--text))] font-semibold text-[0.95rem] mb-1.5">
              {{ metric.label }}
            </div>
  
            <!-- Description -->
            <p class="text-[rgb(var(--text-muted))] text-[0.85rem] leading-relaxed">
              {{ metric.description }}
            </p>
  
            <!-- Bottom accent -->
            <div
              class="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0
                     group-hover:scale-x-100 transition-transform duration-500"
              :class="metric.accentBg"
            />
          </article>
  
          <!-- ============ CERTIFICATION STRIP (full-width) ============ -->
          <div
            ref="certRef"
            class="lg:col-span-12 mt-2
                   rounded-2xl border border-[rgb(var(--border)/0.08)]
                   bg-[rgb(var(--surface))]
                   px-6 lg:px-8 py-6 lg:py-7"
          >
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
  
              <div class="md:col-span-4">
                <div class="text-[rgb(var(--text-muted))] text-[0.72rem] uppercase tracking-wider font-semibold mb-1">
                  Certified & Audited By
                </div>
                <div class="text-[rgb(var(--text))] font-display font-bold text-[1.1rem]">
                  Independent Standards
                </div>
              </div>
  
              <div class="md:col-span-8">
                <div class="flex flex-wrap items-center gap-x-6 gap-y-4 md:justify-end">
                  <div
                    v-for="cert in certifications"
                    :key="cert.name"
                    class="flex items-center gap-2.5
                           text-[rgb(var(--text-muted))]
                           hover:text-[rgb(var(--text))]
                           transition-colors duration-200"
                  >
                    <span
                      class="grid place-items-center w-8 h-8 rounded-lg
                             bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                      v-html="cert.icon"
                    />
                    <span class="text-[0.85rem] font-semibold tracking-wide">{{ cert.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ BOTTOM ACTION STRIP ============ -->
        <div
          ref="actionRef"
          class="mt-12 lg:mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-5
                 pt-8 border-t border-[rgb(var(--border)/0.1)]"
        >
          <div>
            <div class="text-[rgb(var(--text))] font-display font-bold text-[1.15rem] mb-1">
              Read our 2025 Impact Report
            </div>
            <div class="text-[rgb(var(--text-muted))] text-[0.9rem]">
              Full methodology, metrics, and third-party verification — 24 pages, PDF.
            </div>
          </div>
  
          <div class="flex flex-wrap gap-3">
            <button
              class="btn !px-6 !py-3.5
                     bg-leaf-500 text-white
                     hover:bg-leaf-600 hover:-translate-y-0.5
                     shadow-[0_8px_24px_-8px_rgba(46,125,50,0.5)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <path d="M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Report
            </button>
            <NuxtLink
              to="/sustainability"
              class="btn !px-6 !py-3.5
                     border border-[rgb(var(--border)/0.15)]
                     text-[rgb(var(--text))]
                     hover:border-leaf-500 hover:text-leaf-600 dark:hover:text-leaf-400"
            >
              Learn More
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
  
  /* -------- Refs -------- */
  const sectionRef         = ref<HTMLElement | null>(null)
  const eyebrowRef         = ref<HTMLElement | null>(null)
  const headingRef         = ref<HTMLElement | null>(null)
  const descRef            = ref<HTMLElement | null>(null)
  const gridRef            = ref<HTMLElement | null>(null)
  const featureRef         = ref<HTMLElement | null>(null)
  const featureProgressRef = ref<HTMLElement | null>(null)
  const certRef            = ref<HTMLElement | null>(null)
  const actionRef          = ref<HTMLElement | null>(null)
  const metricRefs: HTMLElement[] = []
  
  /* -------- Icons -------- */
  const icons = {
    users: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    droplet: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`,
    factory: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1M12 18h1M7 18h1"/></svg>`,
    shield: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
    leaf: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  }
  
  /* -------- Metrics -------- */
  const metrics = [
    {
      label: 'Farmers Empowered',
      description: 'Direct employment and fair-trade partnerships across all estates.',
      value: 340,
      suffix: '+',
      icon: icons.users,
      iconBg: 'bg-leaf-500/10 text-leaf-600 dark:text-leaf-400',
      accentBg: 'bg-leaf-500',
    },
    {
      label: 'Water Saved',
      description: 'Drip irrigation and rainwater harvesting vs. traditional methods.',
      value: 4.2,
      suffix: 'M L',
      icon: icons.droplet,
      iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
      accentBg: 'bg-blue-500',
    },
    {
      label: 'Waste Recycled',
      description: 'Palm kernel shells, cocoa pods, and pruned biomass turned into compost.',
      value: 92,
      suffix: '%',
      icon: icons.factory,
      iconBg: 'bg-harvest-500/10 text-harvest-600 dark:text-harvest-400',
      accentBg: 'bg-harvest-500',
    },
    {
      label: 'Fair-Trade Certified',
      description: 'Independent audits confirm living wages and safe working conditions.',
      value: 100,
      suffix: '%',
      icon: icons.shield,
      iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      accentBg: 'bg-emerald-500',
    },
  ]
  
  const certifications = [
    { name: 'Rainforest Alliance', icon: icons.globe },
    { name: 'Fairtrade Intl.',     icon: icons.check },
    { name: 'Organic Certified',   icon: icons.leaf },
    { name: 'ISO 14001',           icon: icons.shield },
  ]
  
  /* ---------------------------------------------------------------
     GSAP — ENTRANCE + COUNTERS + PROGRESS
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value, featureRef.value,
         ...metricRefs, certRef.value, actionRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0 }
      )
      if (featureProgressRef.value) gsap.set(featureProgressRef.value, { scaleX: 0.64 })
      runCounters()
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
  
      /* --- Featured card --- */
      gsap.from(featureRef.value, {
        y: 60, autoAlpha: 0, scale: 0.97, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: featureRef.value, start: 'top 82%' },
      })
  
      /* --- Featured progress bar --- */
      if (featureProgressRef.value) {
        gsap.to(featureProgressRef.value, {
          scaleX: 0.64,
          duration: 1.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: featureRef.value, start: 'top 70%' },
        })
      }
  
      /* --- Metric cards --- */
      const cards = metricRefs.filter(Boolean)
      if (cards.length) {
        gsap.from(cards, {
          y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.value, start: 'top 78%' },
        })
      }
  
      /* --- Cert strip --- */
      gsap.from(certRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: certRef.value, start: 'top 88%' },
      })
  
      /* --- Action strip --- */
      gsap.from(actionRef.value, {
        y: 24, autoAlpha: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: actionRef.value, start: 'top 90%' },
      })
  
      /* --- Trigger counters when the grid enters --- */
      ScrollTrigger.create({
        trigger: gridRef.value,
        start: 'top 75%',
        once: true,
        onEnter: () => runCounters(),
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => {
    ctx?.revert()
  })
  
  /* ---------------------------------------------------------------
     COUNTERS — supports decimals (4.2M)
     --------------------------------------------------------------- */
  const runCounters = () => {
    const els = sectionRef.value?.querySelectorAll<HTMLElement>('.counter')
    if (!els) return
  
    els.forEach((el) => {
      const target = Number(el.dataset.target || 0)
      const isDecimal = !Number.isInteger(target)
      const obj = { val: 0 }
  
      gsap.to(obj, {
        val: target,
        duration: 2.2,
        ease: 'power2.out',
        onUpdate: () => {
          const n = isDecimal
            ? obj.val.toFixed(1)
            : Math.round(obj.val).toLocaleString()
          el.textContent = n
        },
      })
    })
  }
  </script>
  
  <style scoped>
  .counter {
    display: inline-block;
    font-variant-numeric: tabular-nums;
  }
  </style>