<template>
    <section
      ref="sectionRef"
      class="relative pt-14 lg:pt-20 pb-16 lg:pb-24
             bg-[rgb(var(--bg))] overflow-hidden"
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
  
      <div class="container-page relative">
  
        <!-- ============ BREADCRUMB ============ -->
        <nav
          ref="breadcrumbRef"
          aria-label="Breadcrumb"
          class="flex items-center gap-2 mb-8 lg:mb-10
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
          <span class="text-[rgb(var(--text))] font-semibold">About</span>
        </nav>
  
        <!-- ============ MAIN GRID ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
  
          <!-- ============ LEFT: TEXT ============ -->
          <div class="lg:col-span-6 xl:col-span-6">
  
            <!-- Eyebrow -->
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-6
                     px-3.5 py-1.5 rounded-full
                     bg-leaf-500/10 border border-leaf-500/20
                     text-leaf-600 dark:text-leaf-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
              Our Story
            </div>
  
            <!-- Headline (split-text reveal) -->
            <h1
              ref="headlineRef"
              class="font-display font-extrabold
                     text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08]
                     tracking-[-0.03em] text-[rgb(var(--text))] mb-6"
            >
              Fifteen years of growing<br />
              <span class="text-leaf-500">more than just crops.</span>
            </h1>
  
            <!-- Lead paragraph -->
            <p
              ref="leadRef"
              class="text-[rgb(var(--text-muted))] text-[1.08rem] leading-relaxed mb-8 max-w-xl"
            >
              We started with a single 40-hectare plot in Ondo State — a family
              convinced that long-term agriculture, done right, could rebuild
              rural economies. Today we manage six estates across Nigeria,
              employing over 340 people and supporting hundreds more through
              our outgrower programs.
            </p>
  
            <!-- Signature line -->
            <div
              ref="signRef"
              class="flex items-center gap-4 mb-10"
            >
              <div
                class="grid place-items-center w-12 h-12 rounded-xl
                       bg-gradient-to-br from-leaf-500 to-leaf-700
                       text-white shadow-[0_8px_20px_-8px_rgba(46,125,50,0.5)]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <div class="font-display font-bold text-[1rem] text-[rgb(var(--text))] leading-tight">
                  Okeke Emeka Christian
                </div>
                <div class="text-[rgb(var(--text-muted))] text-[0.85rem] mt-0.5">
                  Founder & Managing Director
                </div>
              </div>
            </div>
  
            <!-- Mini stats -->
            <div
              ref="statsRef"
              class="grid grid-cols-3 gap-6 pt-8
                     border-t border-[rgb(var(--border)/0.1)] max-w-lg"
            >
              <div v-for="s in miniStats" :key="s.label">
                <div
                  class="font-display font-extrabold
                         text-[clamp(1.35rem,2.2vw,1.85rem)] leading-none
                         text-leaf-500 mb-2"
                >
                  <span class="counter" :data-target="s.value">0</span
                  ><span class="text-leaf-500/70">{{ s.suffix }}</span>
                </div>
                <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                            uppercase tracking-wider font-semibold leading-tight">
                  {{ s.label }}
                </div>
              </div>
            </div>
          </div>
  
          <!-- ============ RIGHT: IMAGE ============ -->
          <div
            ref="imageWrapRef"
            class="lg:col-span-6 xl:col-span-6 relative"
          >
            <!-- Main image -->
            <div
              class="relative rounded-2xl overflow-hidden
                     aspect-[4/5] lg:aspect-[5/6]
                     shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]"
            >
              <img
                src="/about/founder1.jpeg"
                alt="Founder standing in a mature palm plantation at golden hour"
                fetchpriority="high"
                class="absolute inset-0 w-full h-full object-cover"
              />
  
              <!-- Subtle gradient bottom for legibility of tag -->
              <div
                class="absolute inset-x-0 bottom-0 h-40
                       bg-gradient-to-t from-black/70 to-transparent"
              />
            </div>
  
            <!-- Floating accent card (badge) -->
            <div
              ref="badgeRef"
              class="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8
                     rounded-2xl p-5 lg:p-6
                     bg-[rgb(var(--surface))]
                     border border-[rgb(var(--border)/0.1)]
                     shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)]
                     max-w-[240px]"
            >
              <div
                class="grid place-items-center w-11 h-11 rounded-xl mb-4
                       bg-harvest-500/15 text-harvest-600 dark:text-harvest-400"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div class="font-display font-extrabold text-[1.05rem]
                          text-[rgb(var(--text))] leading-tight mb-1">
                B-Corp Certified
              </div>
              <div class="text-[rgb(var(--text-muted))] text-[0.8rem] leading-snug">
                Recognized for social and environmental performance.
              </div>
            </div>
  
            <!-- Corner accent (small circle) -->
            <div
              class="absolute -top-4 -right-4 lg:-top-6 lg:-right-6
                     w-20 h-20 lg:w-28 lg:h-28 rounded-full
                     border-2 border-dashed border-harvest-500/30
                     pointer-events-none"
              aria-hidden="true"
            />
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
          <span>Scroll to read our story</span>
          <span class="h-px w-12 bg-[rgb(var(--border)/0.3)]" />
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  
  /* -------- Refs -------- */
  const sectionRef      = ref<HTMLElement | null>(null)
  const breadcrumbRef   = ref<HTMLElement | null>(null)
  const eyebrowRef      = ref<HTMLElement | null>(null)
  const headlineRef     = ref<HTMLElement | null>(null)
  const leadRef         = ref<HTMLElement | null>(null)
  const signRef         = ref<HTMLElement | null>(null)
  const statsRef        = ref<HTMLElement | null>(null)
  const imageWrapRef    = ref<HTMLElement | null>(null)
  const badgeRef        = ref<HTMLElement | null>(null)
  const scrollCueRef    = ref<HTMLElement | null>(null)
  
  /* -------- Mini stats -------- */
  const miniStats = [
    { label: 'Estates',      value: 6,    suffix: '' },
    { label: 'Hectares',     value: 1200, suffix: '+' },
    { label: 'People',       value: 340,  suffix: '+' },
  ]
  
  /* ---------------------------------------------------------------
     ENTRANCE ANIMATION
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [breadcrumbRef.value, eyebrowRef.value, headlineRef.value,
         leadRef.value, signRef.value, statsRef.value,
         imageWrapRef.value, badgeRef.value, scrollCueRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0, scale: 1 }
      )
      runCounters()
      return
    }
  
    ctx = gsap.context(() => {
      /* --- Text column --- */
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 })
  
      tl
        .from(breadcrumbRef.value, { y: 16, autoAlpha: 0, duration: 0.5 })
        .from(eyebrowRef.value,    { y: 20, autoAlpha: 0, duration: 0.6 }, '-=0.2')
        .from(headlineRef.value,   { y: 44, autoAlpha: 0, duration: 0.9, ease: 'power4.out' }, '-=0.4')
        .from(leadRef.value,       { y: 24, autoAlpha: 0, duration: 0.7 }, '-=0.5')
        .from(signRef.value,       { y: 20, autoAlpha: 0, duration: 0.6 }, '-=0.5')
        .from(statsRef.value,      { y: 24, autoAlpha: 0, duration: 0.7 }, '-=0.4')
        .add(() => runCounters(), '-=0.3')
  
      /* --- Image column --- */
      gsap.from(imageWrapRef.value, {
        x: 60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        delay: 0.35,
      })
  
      gsap.from(badgeRef.value, {
        y: 30, autoAlpha: 0, duration: 0.7, ease: 'power3.out',
        delay: 1,
      })
  
      /* --- Continuous float on the dashed ring --- */
      const ring = imageWrapRef.value?.querySelector('[aria-hidden="true"]')
      if (ring) {
        gsap.to(ring, {
          rotate: 360,
          duration: 40,
          repeat: -1,
          ease: 'none',
        })
      }
  
      /* --- Scroll cue fade in --- */
      gsap.from(scrollCueRef.value, {
        y: 12, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        delay: 1.4,
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
    const els = sectionRef.value?.querySelectorAll<HTMLElement>('.counter')
    if (!els) return
  
    els.forEach((el) => {
      const target = Number(el.dataset.target || 0)
      const obj = { val: 0 }
  
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toLocaleString()
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