<template>
    <section
      ref="sectionRef"
      class="relative isolate overflow-hidden
             min-h-[92svh] lg:min-h-[88svh]
             flex flex-col justify-end
             bg-[rgb(var(--bg-alt))]"
    >
      <!-- ============ BACKGROUND MEDIA ============ -->
      <div class="absolute inset-0 -z-10">
        <!-- Poster image (immediate paint) -->
        <img
          src="/images/farm4.jpg"
          alt=""
          aria-hidden="true"
          fetchpriority="high"
          class="absolute inset-0 w-full h-full object-cover"
        />
  
        <!-- Cinematic gradient overlays — light mode -->
        <div
          class="absolute inset-0 dark:hidden
                 bg-gradient-to-b from-black/55 via-black/45 to-black/85"
        />
        <div
          class="absolute inset-0 dark:hidden
                 bg-[radial-gradient(ellipse_at_bottom_left,rgba(46,125,50,0.35),transparent_65%)]"
        />
  
        <!-- Dark mode overlays -->
        <div
          class="absolute inset-0 hidden dark:block
                 bg-gradient-to-b from-black/70 via-black/55 to-black/90"
        />
        <div
          class="absolute inset-0 hidden dark:block
                 bg-[radial-gradient(ellipse_at_bottom_left,rgba(76,175,80,0.30),transparent_60%)]"
        />
  
        <!-- Grain -->
        <div
          class="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style="background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22/></svg>')"
        />
      </div>
  
      <!-- ============ CONTENT ============ -->
      <div class="container-page relative z-10 pb-14 lg:pb-20 pt-10 ">
  
        <!-- Breadcrumb -->
        <nav
          ref="breadcrumbRef"
          aria-label="Breadcrumb"
          class="flex items-center gap-2 mb-8 lg:mb-10
                 text-[0.82rem] font-medium text-white/70"
        >
          <NuxtLink
            to="/"
            class="hover:text-white transition-colors duration-200"
          >
            Home
          </NuxtLink>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.4"
               stroke-linecap="round" stroke-linejoin="round"
               class="text-white/40">
            <path d="m9 18 6-6-6-6"/>
          </svg>
          <span class="text-white font-semibold">Plantations</span>
        </nav>
  
        <!-- Eyebrow -->
        <div
          ref="eyebrowRef"
          class="inline-flex items-center gap-2.5 mb-6
                 px-3.5 py-1.5 rounded-full
                 bg-white/10 backdrop-blur-md
                 border border-white/20
                 text-white/95 text-[0.78rem] font-semibold
                 tracking-wider uppercase"
        >
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-harvest-400 opacity-75" />
            <span class="relative inline-flex rounded-full h-2 w-2 bg-harvest-500" />
          </span>
          <span>Six Estates · Four States · Nine Crops</span>
        </div>
  
        <!-- Headline -->
        <h1
          ref="headlineRef"
          class="font-display font-extrabold text-white
                 text-[clamp(2.25rem,6vw,4.75rem)] leading-[1.02]
                 tracking-[-0.035em] mb-6"
        >
          Rooted in the land,<br />
          <span class="text-harvest-400">grown for generations.</span>
        </h1>
  
        <!-- Lead paragraph -->
        <p
          ref="leadRef"
          class="text-white/85 text-[clamp(1rem,1.4vw,1.15rem)]
                 leading-relaxed  mb-10"
        >
          From mature palm groves to young cocoa and plantain estates still finding
          their feet — every hectare we manage is designed for decades, not
          seasons. Explore what we grow, where we grow it, and when it will be
          ready.
        </p>
  
        <!-- CTAs -->
        <div
          ref="ctaRef"
          class="flex flex-wrap items-center gap-3.5 mb-12"
        >
          <a
            href="#estates"
            class="btn btn-primary !px-6 !py-3.5 !text-[0.95rem]"
          >
            Browse Estates
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.4"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>
          <NuxtLink
            to="/harvest-calendar"
            class="btn !px-6 !py-3.5 !text-[0.95rem]
                   bg-white/10 backdrop-blur-md
                   border border-white/25 text-white
                   hover:bg-white/20 hover:border-white/40"
          >
            View Harvest Calendar
          </NuxtLink>
        </div>
  
        <!-- ============ STATS OVERLAY (bottom) ============ -->
        <div
          ref="statsRef"
          class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8
                 pt-8 lg:pt-10
                 border-t border-white/15"
        >
          <div v-for="s in stats" :key="s.label" class="flex items-start gap-3.5">
            <span
              class="shrink-0 grid place-items-center w-10 h-10 rounded-xl
                     bg-white/10 backdrop-blur-md border border-white/15
                     text-harvest-400"
              v-html="s.icon"
            />
            <div>
              <div class="font-display font-extrabold text-white
                          text-[clamp(1.35rem,2.2vw,1.85rem)] leading-none mb-1.5">
                <span
                  class="counter tabular-nums"
                  :data-target="s.value"
                  :data-decimals="s.decimals || 0"
                >0</span
                ><span class="text-harvest-400">{{ s.suffix }}</span>
              </div>
              <div class="text-white/65 text-[0.72rem] uppercase
                          tracking-wider font-semibold leading-tight w-[50%]">
                {{ s.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- ============ CROP FILTER CHIPS (bottom-right floating) ============ -->
      <!-- <div
        ref="chipsRef"
        class="hidden lg:flex absolute bottom-14 right-8 z-10
               flex-wrap gap-2 max-w-[420px] justify-end"
        aria-label="Filter estates by crop"
      >
        <span
          class="text-white/50 text-[0.68rem] uppercase tracking-[0.2em]
                 font-semibold w-full text-right mb-1 pr-1"
        >
          Filter by crop
        </span>
                <button
                v-for="crop in cropChips"
                :key="crop"
                type="button"
                class="px-3.5 py-2 rounded-full transition-all duration-200"
                :class="activeCrop === crop
                    ? 'bg-harvest-500 text-leaf-900 border-harvest-500 border font-semibold'
                    : 'bg-white/10 backdrop-blur-md border border-white/15 text-white/90 hover:bg-white/20 hover:border-white/35'"
                @click="activeCrop = crop"
                >
                {{ crop }}
                </button>
      </div> -->
  
      <!-- ============ SCROLL INDICATOR ============ -->
      <div
        ref="scrollRef"
        class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10
               hidden md:flex flex-col items-center gap-2
               text-white/60 text-[0.7rem] uppercase tracking-[0.25em]"
      >
        <span class="w-px h-8 bg-gradient-to-b from-transparent to-white/60" />
        <span>Scroll</span>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { SplitText } from 'gsap/SplitText'
  
  gsap.registerPlugin(SplitText)
  
  /* -------- Icons -------- */
  const icons = {
    leaf: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    map: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    sprout: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`,
    calendar: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  }

  const { activeCrop } = usePlantationsFilter()
  
  /* -------- Refs -------- */
  const sectionRef     = ref<HTMLElement | null>(null)
  const breadcrumbRef  = ref<HTMLElement | null>(null)
  const eyebrowRef     = ref<HTMLElement | null>(null)
  const headlineRef    = ref<HTMLElement | null>(null)
  const leadRef        = ref<HTMLElement | null>(null)
  const ctaRef         = ref<HTMLElement | null>(null)
  const statsRef       = ref<HTMLElement | null>(null)
  const chipsRef       = ref<HTMLElement | null>(null)
  const scrollRef      = ref<HTMLElement | null>(null)
  
  /* -------- Stats -------- */
  const stats = [
    { value: 1200, suffix: '+', decimals: 0, label: 'Hectares Managed', icon: icons.leaf },
    { value: 6,    suffix: '',  decimals: 0, label: 'Estates',           icon: icons.map },
    { value: 9,    suffix: '',  decimals: 0, label: 'Crops Grown',       icon: icons.sprout },
    { value: 2027, suffix: '',  decimals: 0, label: 'Next Big Harvest',  icon: icons.calendar },
  ]
  
  /* -------- Crop chips -------- */
  const cropChips = ['All', 'Palm', 'Cocoa', 'Plantain', 'Rubber', 'Cassava']
  
  /* ---------------------------------------------------------------
     ENTRANCE
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [breadcrumbRef.value, eyebrowRef.value, leadRef.value,
         ctaRef.value, statsRef.value, chipsRef.value, scrollRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0 }
      )
      runCounters()
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
        }, '-=0.4')
        .from(statsRef.value?.children ?? [], {
          y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.1,
        }, '-=0.4')
        .from(chipsRef.value, { x: 30, autoAlpha: 0, duration: 0.6 }, '-=0.5')
        .from(scrollRef.value, { y: 16, autoAlpha: 0, duration: 0.5 }, '-=0.3')
        .add(() => runCounters(), '-=0.5')
  
      /* --- Scroll indicator pulse --- */
      if (scrollRef.value) {
        const bar = scrollRef.value.querySelector('span')
        if (bar) {
          gsap.to(bar, {
            scaleY: 0.4, transformOrigin: 'top center',
            duration: 1.4, repeat: -1, yoyo: true, ease: 'power1.inOut',
          })
        }
      }
  
      /* --- Slow Ken-Burns on background --- */
      const bg = sectionRef.value?.querySelector('img')
      if (bg) {
        gsap.fromTo(bg,
          { scale: 1 },
          { scale: 1.06, duration: 25, ease: 'sine.inOut', yoyo: true, repeat: -1 }
        )
      }
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  
  /* ---------------------------------------------------------------
     COUNTERS
     --------------------------------------------------------------- */
     const runCounters = () => {
  const els = sectionRef.value?.querySelectorAll<HTMLElement>('.counter')
  if (!els) return

  els.forEach((el) => {
    const target = Number(el.dataset.target || 0)
    const decimals = Number(el.dataset.decimals || 0)

    // Skip counting for year values (>= 2000)
    if (target >= 2000) {
      el.textContent = target.toString()
      return
    }

    const obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = decimals > 0
          ? obj.val.toFixed(decimals)
          : Math.round(obj.val).toLocaleString()
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