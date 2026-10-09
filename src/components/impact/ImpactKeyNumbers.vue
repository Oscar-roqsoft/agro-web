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
  
      <!-- Radial glows -->
      <div
        class="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full
               bg-harvest-500/15 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        class="absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full
               bg-leaf-500/20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
  
      <!-- Top + bottom accent lines -->
      <div
        class="absolute top-0 left-0 right-0 h-px
               bg-gradient-to-r from-transparent via-harvest-500/50 to-transparent"
        aria-hidden="true"
      />
      <div
        class="absolute bottom-0 left-0 right-0 h-px
               bg-gradient-to-r from-transparent via-harvest-500/30 to-transparent"
        aria-hidden="true"
      />
  
      <div class="container-page relative">
  
        <!-- ============ HEADER ============ -->
        <div class="max-w-3xl mb-14 lg:mb-20">
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
            Audited Impact Numbers
          </div>
  
          <h2
            ref="headingRef"
            class="font-display font-extrabold text-white
                   text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1]
                   tracking-[-0.025em] mb-5"
          >
            15 years, six numbers.<br />
            <span class="text-harvest-400">All third-party verified.</span>
          </h2>
  
          <p
            ref="descRef"
            class="text-white/70 text-[1.02rem] leading-relaxed"
          >
            Every figure below is measured against the same methodology each year
            and audited by SGS, Rainforest Alliance, and ISO 14001 assessors. No
            estimates. No rounding. No exceptions.
          </p>
        </div>
  
        <!-- ============ STATS GRID ============ -->
        <div
          ref="statsRef"
          class="grid grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-y-16
                 gap-x-6 lg:gap-x-0"
        >
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="impact-stat relative
                   text-center lg:text-left
                   lg:px-8
                   lg:border-l border-white/10
                   group"
            :class="[
              i === 0 ? 'lg:border-l-0' : '',
              i === 3 ? 'lg:border-t lg:pt-16' : '',
            ]"
          >
            <!-- Icon -->
            <div
              class="inline-flex items-center justify-center
                     w-11 h-11 rounded-xl mb-5
                     bg-white/[0.08] backdrop-blur-md
                     border border-white/15
                     text-harvest-400
                     transition-transform duration-500
                     group-hover:scale-110"
              v-html="stat.icon"
            />
  
            <!-- Big number -->
            <div class="flex items-baseline justify-center lg:justify-start gap-1 mb-2">
              <span
                class="stat-number
                       font-display font-extrabold text-white
                       text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.95]
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
                       text-[clamp(1.1rem,1.75vw,1.5rem)]
                       tracking-[-0.02em]
                       text-harvest-400"
              >
                {{ stat.suffix }}
              </span>
            </div>
  
            <!-- Label -->
            <div
              class="text-white/90 font-semibold
                     text-[0.95rem] lg:text-[1rem] leading-snug mb-3"
            >
              {{ stat.label }}
            </div>
  
            <!-- YoY delta + source -->
            <div
              class="flex items-center justify-center lg:justify-start gap-3
                     flex-wrap"
            >
              <!-- Delta badge -->
              <span
                v-if="stat.delta"
                class="inline-flex items-center gap-1 px-2 py-1 rounded-md
                       text-[0.68rem] font-bold tracking-wide"
                :class="stat.delta.startsWith('+')
                  ? 'bg-leaf-500/20 text-leaf-300'
                  : 'bg-harvest-500/20 text-harvest-300'"
              >
                <svg
                  v-if="stat.delta.startsWith('+')"
                  width="9" height="9" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="3"
                  stroke-linecap="round" stroke-linejoin="round"
                >
                  <path d="M7 17 17 7M7 7h10v10"/>
                </svg>
                <svg
                  v-else
                  width="9" height="9" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="3"
                  stroke-linecap="round" stroke-linejoin="round"
                >
                  <path d="M17 7 7 17M17 17H7V7"/>
                </svg>
                {{ stat.delta }}
              </span>
  
              <!-- Since note -->
              <span
                v-if="stat.since"
                class="text-white/50 text-[0.72rem] font-medium"
              >
                since {{ stat.since }}
              </span>
            </div>
  
            <!-- Bottom accent (hover only) -->
            <div
              class="absolute bottom-0 left-8 right-8 h-px
                     bg-gradient-to-r from-harvest-500/0 via-harvest-500/40 to-harvest-500/0
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
  
        <!-- ============ AUDIT STRIP ============ -->
        <div
          ref="auditStripRef"
          class="mt-16 lg:mt-20
                 rounded-2xl p-6 lg:p-7
                 bg-white/[0.04] backdrop-blur-md
                 border border-white/10
                 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          <div class="lg:col-span-3 flex items-center gap-3">
            <span
              class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                     bg-harvest-500/15 text-harvest-400"
              v-html="shieldIcon"
            />
            <div>
              <div class="text-white/55 text-[0.68rem]
                          uppercase tracking-wider font-bold">
                Verification
              </div>
              <div class="text-white font-display font-bold
                          text-[1rem] leading-tight">
                Every number is audited
              </div>
            </div>
          </div>
  
          <div class="lg:col-span-6">
            <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
              <div
                v-for="auditor in auditors"
                :key="auditor"
                class="flex items-center gap-2
                       text-white/75 text-[0.85rem] font-medium"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-leaf-400" />
                {{ auditor }}
              </div>
            </div>
          </div>
  
          <div class="lg:col-span-3 lg:text-right">
            <a
              href="/pdfs/methodology-2025.pdf"
              download
              class="inline-flex items-center gap-2
                     text-harvest-400 hover:text-harvest-300
                     font-semibold text-[0.85rem]
                     transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <path d="M14 2v6h6"/>
              </svg>
              Read methodology
            </a>
          </div>
        </div>
  
        <!-- ============ FOOTNOTE ============ -->
        <div
          ref="footnoteRef"
          class="mt-8 text-center
                 text-white/45 text-[0.78rem] leading-relaxed
                 max-w-3xl mx-auto"
        >
          <p>
            All figures reference the period January–December 2024 unless otherwise
            stated. Delta percentages compare to the previous reporting period.
            Full raw data, including per-estate breakdowns, is available in the
            report appendix.
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
  const icons = {
    leaf: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    users: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    globe: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    droplet: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`,
    recycle: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3M8.293 13.596 7.196 9.5 3.1 10.598M12.5 5.5 12 4l-2.5-2-2 3.5M15 8h-1.5"/></svg>`,
    sprout: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`,
  }
  
  const shieldIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`
  
  /* -------- Stats data -------- */
  const stats = [
    {
      value: 1200,
      suffix: '+',
      decimals: 0,
      label: 'Hectares under sustainable management',
      delta: '+18%',
      since: '2010',
      icon: icons.leaf,
    },
    {
      value: 340,
      suffix: '+',
      decimals: 0,
      label: 'People directly employed across estates',
      delta: '+22%',
      since: '2010',
      icon: icons.users,
    },
    {
      value: 208,
      suffix: '+',
      decimals: 0,
      label: 'Smallholder farmers supported',
      delta: '+31%',
      since: '2019',
      icon: icons.sprout,
    },
    {
      value: 8.2,
      suffix: 'kt',
      decimals: 1,
      label: 'CO₂ sequestered annually',
      delta: '+12%',
      since: '2016',
      icon: icons.globe,
    },
    {
      value: 4.2,
      suffix: 'M L',
      decimals: 1,
      label: 'Water saved vs. traditional irrigation',
      delta: '+9%',
      since: '2020',
      icon: icons.droplet,
    },
    {
      value: 92,
      suffix: '%',
      decimals: 0,
      label: 'Agricultural waste recycled or repurposed',
      delta: '+7%',
      since: '2021',
      icon: icons.recycle,
    },
  ]
  
  /* -------- Auditors -------- */
  const auditors = [
    'SGS',
    'Rainforest Alliance',
    'ISO 14001',
    'Fairtrade International',
    'NEPC',
  ]
  
  /* -------- Refs -------- */
  const sectionRef    = ref<HTMLElement | null>(null)
  const eyebrowRef    = ref<HTMLElement | null>(null)
  const headingRef    = ref<HTMLElement | null>(null)
  const descRef       = ref<HTMLElement | null>(null)
  const statsRef      = ref<HTMLElement | null>(null)
  const auditStripRef = ref<HTMLElement | null>(null)
  const footnoteRef   = ref<HTMLElement | null>(null)
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    /* Query stat cards once */
    const statCards = sectionRef.value?.querySelectorAll<HTMLElement>('.impact-stat') ?? []
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         ...Array.from(statCards), auditStripRef.value, footnoteRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, scale: 1 }
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
  
      /* --- Stat cards stagger + trigger counters --- */
      if (statCards.length) {
        gsap.from(statCards, {
          y: 50, autoAlpha: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.value,
            start: 'top 78%',
            onEnter: () => runCounters(),
          },
        })
      }
  
      /* --- Audit strip --- */
      gsap.from(auditStripRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: auditStripRef.value, start: 'top 88%' },
      })
  
      /* --- Footnote --- */
      gsap.from(footnoteRef.value, {
        y: 20, autoAlpha: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: footnoteRef.value, start: 'top 92%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  
  /* ---------------------------------------------------------------
     COUNTERS — supports decimals (8.2)
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
  const setFinalCounters = () => {
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