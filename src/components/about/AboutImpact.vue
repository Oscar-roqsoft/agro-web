<template>
    <section
      ref="sectionRef"
      class="relative overflow-hidden
             bg-gradient-to-br from-leaf-800 via-leaf-900 to-[#0A1A0D]
             py-20 lg:py-28"
    >
      <!-- ============ DECORATIVE BACKGROUND ============ -->
      <!-- Grid pattern -->
      <div
        class="absolute inset-0 opacity-[0.08] pointer-events-none"
        style="background-image:
          linear-gradient(to right, #ffffff 1px, transparent 1px),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px);
          background-size: 64px 64px;"
        aria-hidden="true"
      />
  
      <!-- Radial glow top-right -->
      <div
        class="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full
               bg-harvest-500/15 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
  
      <!-- Radial glow bottom-left -->
      <div
        class="absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full
               bg-leaf-500/20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
  
      <!-- Top edge accent line -->
      <div
        class="absolute top-0 left-0 right-0 h-px
               bg-gradient-to-r from-transparent via-harvest-500/50 to-transparent"
        aria-hidden="true"
      />
  
      <div class="container-page relative">
  
        <!-- ============ HEADER ============ -->
        <div class="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div
            ref="eyebrowRef"
            class="inline-flex items-center gap-2.5 mb-5
                   px-3.5 py-1.5 rounded-full
                   bg-white/10 backdrop-blur-md
                   border border-white/20
                   text-harvest-300
                   text-[0.78rem] font-semibold tracking-wider uppercase"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-harvest-400 animate-pulse" />
            Our Impact So Far
          </div>
  
          <h2
            ref="headingRef"
            class="font-display font-extrabold text-white
                   text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1]
                   tracking-[-0.025em] mb-5"
          >
            eight years,<br />
            <span class="text-harvest-400">in numbers.</span>
          </h2>
  
          <p
            ref="descRef"
            class="text-white/70 text-[1.02rem] leading-relaxed"
          >
            Every figure below is independently audited and updated quarterly.
            These aren't projections — they're what we've built.
          </p>
        </div>
  
        <!-- ============ STATS GRID ============ -->
        <div
          ref="statsRef"
          class="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 gap-x-6 lg:gap-x-0"
        >
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            :ref="(el) => { if (el) statRefs[i] = el as HTMLElement }"
            class="impact-stat relative text-center lg:text-left
                   lg:px-8
                   lg:border-l border-white/10"
            :class="i === 0 ? 'lg:border-l-0' : ''"
          >
            <!-- Icon (small, top) -->
            <div
              class="inline-flex items-center justify-center
                     w-11 h-11 rounded-xl mb-5
                     bg-white/[0.08] backdrop-blur-md
                     border border-white/15
                     text-harvest-400
                     transition-all duration-500
                     group-hover:scale-110"
              v-html="stat.icon"
            />
  
            <!-- Big number -->
            <div class="flex items-baseline justify-center lg:justify-start gap-1 mb-3">
              <span
                class="stat-number
                       font-display font-extrabold text-white
                       text-[clamp(2.5rem,5.5vw,4rem)] leading-[0.95]
                       tracking-[-0.04em]
                       tabular-nums"
                :data-target="stat.value"
                :data-decimals="stat.decimals || 0"
              >
                0
              </span>
              <span
                v-if="stat.suffix"
                class="font-display font-bold
                       text-[clamp(1.25rem,2vw,1.75rem)]
                       tracking-[-0.02em]
                       text-harvest-400"
              >
                {{ stat.suffix }}
              </span>
            </div>
  
            <!-- Label -->
            <div
              class="text-white/90 font-semibold
                     text-[0.95rem] lg:text-[1rem] leading-snug mb-2"
            >
              {{ stat.label }}
            </div>
  
            <!-- Description -->
            <p
              class="text-white/55 text-[0.82rem] leading-relaxed
                     max-w-xs mx-auto lg:mx-0"
            >
              {{ stat.description }}
            </p>
  
            <!-- Bottom accent (invisible baseline) -->
            <div
              class="absolute bottom-0 left-8 right-8 h-px
                     bg-gradient-to-r from-harvest-500/0 via-harvest-500/40 to-harvest-500/0
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
  
        <!-- ============ DIVIDER ============ -->
        <div
          ref="dividerRef"
          class="mt-16 lg:mt-20 flex items-center justify-center gap-4"
        >
          <span class="h-px w-16 bg-white/15" />
          <span class="grid place-items-center w-2.5 h-2.5 rounded-full bg-harvest-500" />
          <span class="h-px w-16 bg-white/15" />
        </div>
  
        <!-- ============ FOOTER CTA ============ -->
        <div
          ref="ctaRef"
          class="mt-10 lg:mt-14 text-center max-w-xl mx-auto"
        >
          <div class="text-white/70 text-[0.95rem] leading-relaxed mb-6">
            These numbers grow every year. See the full breakdown — audited by
            third parties and published openly — in our annual impact report.
          </div>
  
          <div class="flex flex-wrap justify-center gap-3">
            <!-- <NuxtLink
              to="/impact-report"
              class="btn !px-6 !py-3.5
                     bg-harvest-500 text-leaf-900 font-semibold
                     hover:bg-harvest-400 hover:-translate-y-0.5
                     shadow-[0_10px_28px_-8px_rgba(249,168,37,0.55)]"
            >
              Download Impact Report
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <path d="M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </NuxtLink> -->
  
            <NuxtLink
              to="/contact"
              class="btn !px-6 !py-3.5
                     bg-white/[0.08] backdrop-blur-md
                     border border-white/20 text-white
                     hover:bg-white/[0.15] hover:border-white/35"
            >
              Talk to Our Team
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
    leaf: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    users: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    globe: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    sprout: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`,
  }
  
  /* -------- Refs -------- */
  const sectionRef  = ref<HTMLElement | null>(null)
  const eyebrowRef  = ref<HTMLElement | null>(null)
  const headingRef  = ref<HTMLElement | null>(null)
  const descRef     = ref<HTMLElement | null>(null)
  const statsRef    = ref<HTMLElement | null>(null)
  const dividerRef  = ref<HTMLElement | null>(null)
  const ctaRef      = ref<HTMLElement | null>(null)
  const statRefs: HTMLElement[] = []
  
  /* -------- Data -------- */
  const stats = [
    {
      value: 1200,
      suffix: '+',
      decimals: 0,
      label: 'Hectares Under Management',
      description: 'Across six estates in four Nigerian states.',
      icon: icons.leaf,
    },
    {
      value: 30,
      suffix: '+',
      decimals: 0,
      label: 'People Directly Employed',
      description: 'Fair-wage certified, with full benefits.',
      icon: icons.users,
    },
    {
      value: 208,
      suffix: '+',
      decimals: 0,
      label: 'Outgrower Farmers Supported',
      description: 'Smallholder partners across West Africa.',
      icon: icons.sprout,
    },
    {
      value: 8.2,
      suffix: 'kt',
      decimals: 1,
      label: 'CO₂ Sequestered Annually',
      description: 'Verified by independent third-party audit.',
      icon: icons.globe,
    },
  ]
  
  /* ---------------------------------------------------------------
     GSAP — reveals + counters
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         ...statRefs, dividerRef.value, ctaRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0 }
      )
      // Immediately set final counter values
      setFinalValues()
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
  
      /* --- Stats stagger --- */
      const stats = statRefs.filter(Boolean)
      if (stats.length) {
        gsap.from(stats, {
          y: 50, autoAlpha: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.value,
            start: 'top 78%',
            onEnter: () => runCounters(),
          },
        })
      }
  
      /* --- Divider --- */
      gsap.from(dividerRef.value, {
        scale: 0.6, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: dividerRef.value, start: 'top 92%' },
      })
  
      /* --- CTA --- */
      gsap.from(ctaRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.value, start: 'top 90%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => {
    ctx?.revert()
  })
  
  /* ---------------------------------------------------------------
     COUNTERS
     --------------------------------------------------------------- */
  const runCounters = () => {
    const els = sectionRef.value?.querySelectorAll<HTMLElement>('.stat-number')
    if (!els) return
  
    els.forEach((el) => {
      const target = Number(el.dataset.target || 0)
      const decimals = Number(el.dataset.decimals || 0)
      const obj = { val: 0 }
  
      gsap.to(obj, {
        val: target,
        duration: 2.2,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = decimals > 0
            ? obj.val.toFixed(decimals)
            : Math.round(obj.val).toLocaleString()
        },
      })
    })
  }
  
  /* Set final values instantly (for reduced motion) */
  const setFinalValues = () => {
    const els = sectionRef.value?.querySelectorAll<HTMLElement>('.stat-number')
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
  .stat-number {
    display: inline-block;
    font-variant-numeric: tabular-nums;
  }
  </style>