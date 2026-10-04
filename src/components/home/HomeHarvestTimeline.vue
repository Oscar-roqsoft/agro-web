<template>
    <section
      ref="sectionRef"
      class="relative bg-[rgb(var(--bg-alt))] overflow-hidden
             py-20 lg:py-0"
    >
      <!-- ============ PINNED WRAPPER (desktop) ============ -->
      <div
        ref="pinRef"
        class="lg:h-screen lg:flex lg:flex-col lg:justify-center lg:py-24"
      >
        <div class="container-page">
  
          <!-- ============ HEADER ============ -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 lg:mb-16">
            <div class="lg:col-span-7">
              <div
                ref="eyebrowRef"
                class="inline-flex items-center gap-2.5 mb-5
                       px-3.5 py-1.5 rounded-full
                       bg-harvest-500/10 border border-harvest-500/20
                       text-harvest-700 dark:text-harvest-400
                       text-[0.78rem] font-semibold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-harvest-500 animate-pulse" />
                Harvest Calendar
              </div>
  
              <h2
                ref="headingRef"
                class="font-display font-extrabold
                       text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                       tracking-[-0.025em] text-[rgb(var(--text))]"
              >
                From planting to<br />
                <span class="text-harvest-500">harvest — a journey in time.</span>
              </h2>
            </div>
  
            <div ref="descRef" class="lg:col-span-5 lg:pb-2 lg:self-end">
              <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
                We plan every estate around the natural cycles of the crops we grow.
                Here's what's being harvested now — and what's maturing for the years ahead.
              </p>
            </div>
          </div>
  
          <!-- ============ TIMELINE AREA ============ -->
          <div ref="timelineWrapRef" class="relative">
  
            <!-- Progress track (behind everything) -->
            <div
              class="hidden lg:block absolute left-0 right-0 top-[92px] h-[3px]
                     bg-[rgb(var(--border)/0.15)] rounded-full overflow-hidden"
            >
              <div
                ref="progressRef"
                class="h-full w-full origin-left scale-x-0
                       bg-gradient-to-r from-leaf-500 via-leaf-400 to-harvest-500"
                style="transform-origin: left center;"
              />
            </div>
  
            <!-- Cards container -->
            <div
              ref="trackRef"
              class="flex lg:flex-nowrap gap-5 lg:gap-6
                     overflow-x-auto lg:overflow-visible
                     snap-x snap-mandatory lg:snap-none
                     pb-6 lg:pb-0
                     [-ms-overflow-style:none] [scrollbar-width:none]
                     [&::-webkit-scrollbar]:hidden"
            >
              <article
                v-for="(item, i) in milestones"
                :key="item.year + item.title"
                :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
                class="milestone-card group relative shrink-0 snap-start
                       w-[300px] sm:w-[340px] lg:w-[380px]
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.1)]
                       rounded-2xl p-6 lg:p-7
                       transition-all duration-500
                       hover:-translate-y-1.5
                       hover:border-leaf-500/30
                       hover:shadow-[0_25px_60px_-20px_rgba(46,125,50,0.35)]"
              >
                <!-- Year marker dot (on progress line) -->
                <div
                  class="hidden lg:flex absolute -top-[38px] left-6
                         flex-col items-center gap-2"
                >
                  <span
                    class="milestone-dot
                           w-3.5 h-3.5 rounded-full
                           bg-[rgb(var(--bg-alt))]
                           border-[3px] border-[rgb(var(--border)/0.3)]
                           transition-all duration-500"
                    :class="item.status === 'ready' && 'is-ready'"
                  />
                </div>
  
                <!-- Year big number -->
                <div class="flex items-start justify-between mb-5">
                  <div
                    class="font-display font-extrabold leading-none
                           text-[clamp(2rem,3.5vw,2.75rem)]
                           tracking-[-0.03em]"
                    :class="yearColor(item.status)"
                  >
                    {{ item.year }}
                  </div>
  
                  <span
                    class="inline-flex items-center gap-1.5 px-2.5 py-1
                           rounded-full text-[0.68rem] font-bold tracking-wider uppercase"
                    :class="statusPill(item.status)"
                  >
                    <span
                      class="w-1.5 h-1.5 rounded-full"
                      :class="statusDot(item.status)"
                    />
                    {{ statusLabel(item.status) }}
                  </span>
                </div>
  
                <!-- Image -->
                <div
                  class="relative w-full h-[140px] rounded-xl overflow-hidden mb-5
                         bg-[rgb(var(--bg))]"
                >
                  <img
                    :src="item.image"
                    :alt="item.title"
                    loading="lazy"
                    class="absolute inset-0 w-full h-full object-cover
                           transition-transform duration-700
                           group-hover:scale-105"
                  />
                  <div
                    class="absolute inset-0
                           bg-gradient-to-t from-black/40 to-transparent"
                  />
                </div>
  
                <!-- Title -->
                <h3
                  class="font-display font-bold text-[1.15rem] leading-tight
                         text-[rgb(var(--text))] mb-2.5"
                >
                  {{ item.title }}
                </h3>
  
                <!-- Description -->
                <p class="text-[rgb(var(--text-muted))] text-[0.92rem] leading-relaxed mb-5">
                  {{ item.description }}
                </p>
  
                <!-- Meta row (crops + hectares) -->
                <div
                  class="flex items-center gap-3 pt-4
                         border-t border-[rgb(var(--border)/0.1)]"
                >
                  <div class="flex flex-wrap gap-1.5 flex-1">
                    <span
                      v-for="crop in item.crops"
                      :key="crop"
                      class="px-2 py-0.5 rounded-md
                             bg-leaf-500/10 dark:bg-leaf-500/15
                             text-leaf-700 dark:text-leaf-400
                             text-[0.68rem] font-semibold"
                    >
                      {{ crop }}
                    </span>
                  </div>
                  <div class="text-right">
                    <div class="text-[rgb(var(--text-muted))] text-[0.65rem] uppercase tracking-wider font-semibold">
                      Volume
                    </div>
                    <div class="text-[rgb(var(--text))] font-display font-bold text-[0.95rem] leading-none mt-0.5">
                      {{ item.volume }}
                    </div>
                  </div>
                </div>
  
                <!-- Corner accent -->
                <div
                  class="absolute top-0 right-0 w-16 h-16
                         bg-gradient-to-br opacity-0 group-hover:opacity-100
                         transition-opacity duration-500 rounded-tr-2xl"
                  :class="cornerGradient(item.status)"
                />
              </article>
  
              <!-- End spacer (adds breathing room) -->
              <div class="shrink-0 w-2" aria-hidden="true" />
            </div>
  
            <!-- ============ HORIZONTAL SCROLL HINT (desktop) ============ -->
            <div
              ref="hintRef"
              class="hidden lg:flex items-center gap-3 mt-8
                     text-[rgb(var(--text-muted))] text-[0.82rem]
                     font-medium tracking-wide"
            >
              <span>Keep scrolling to see the road ahead</span>
              <span class="flex-1 h-px bg-[rgb(var(--border)/0.15)]" />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </div>
  
            <!-- Mobile swipe hint -->
            <div
              class="lg:hidden flex items-center justify-center gap-2 mt-2
                     text-[rgb(var(--text-muted))] text-[0.78rem] font-medium"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
              Swipe to explore
            </div>
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
  const sectionRef      = ref<HTMLElement | null>(null)
  const pinRef          = ref<HTMLElement | null>(null)
  const eyebrowRef      = ref<HTMLElement | null>(null)
  const headingRef      = ref<HTMLElement | null>(null)
  const descRef         = ref<HTMLElement | null>(null)
  const timelineWrapRef = ref<HTMLElement | null>(null)
  const trackRef        = ref<HTMLElement | null>(null)
  const progressRef     = ref<HTMLElement | null>(null)
  const hintRef         = ref<HTMLElement | null>(null)
  const cardRefs: HTMLElement[] = []
  
  /* -------- Types -------- */
  type Status = 'ready' | 'maturing' | 'planting'
  
  interface Milestone {
    year: string
    title: string
    description: string
    crops: string[]
    volume: string
    image: string
    status: Status
  }
  
  /* -------- Data -------- */
  const milestones: Milestone[] = [
    {
      year: '2026',
      title: 'Palm & Plantain Harvest',
      description:
        'Our mature palm groves and first plantain cycle deliver their second commercial harvest.',
      crops: ['Oil Palm', 'Plantain'],
      volume: '820 t',
      image: '/timeline/plantain.jpg',
      status: 'ready',
    },
    {
      year: '2027',
      title: 'First Cocoa Yield',
      description:
        'The Ikom cocoa farm reaches maturity — our first export-grade bean harvest ready for global buyers.',
      crops: ['Cocoa'],
      volume: '140 t',
      image: '/timeline/cocoa.jpg',
      status: 'maturing',
    },
    {
      year: '2028',
      title: 'Rubber Tapping Begins',
      description:
        'Uyo rubber estate enters production with a steady flow of natural latex for industrial partners.',
      crops: ['Rubber'],
      volume: '260 t',
      image: '/timeline/rubber.jpg',
      status: 'maturing',
    },
    {
      year: '2029',
      title: 'Cassava Processing Hub',
      description:
        'A new processing facility transforms our cassava into starch, flour, and ethanol for regional markets.',
      crops: ['Cassava'],
      volume: '1.2 kt',
      image: '/timeline/rubber.jpg',
      status: 'planting',
    },
    {
      year: '2030',
      title: 'Full Estate Maturity',
      description:
        'All six estates operating at peak yield — a fully integrated agribusiness with year-round output.',
      crops: ['All Crops'],
      volume: '3.5 kt',
      image: '/timeline/crops.jpg',
      status: 'planting',
    },
  ]
  
  /* -------- Style helpers -------- */
  const yearColor = (s: Status) =>
    ({
      ready:    'text-leaf-500',
      maturing: 'text-harvest-500',
      planting: 'text-[rgb(var(--text-muted))]',
    }[s])
  
  const statusPill = (s: Status) =>
    ({
      ready:    'bg-leaf-500/15 text-leaf-700 dark:text-leaf-400',
      maturing: 'bg-harvest-500/15 text-harvest-700 dark:text-harvest-400',
      planting: 'bg-[rgb(var(--border)/0.1)] text-[rgb(var(--text-muted))]',
    }[s])
  
  const statusDot = (s: Status) =>
    ({
      ready:    'bg-leaf-500 animate-pulse',
      maturing: 'bg-harvest-500',
      planting: 'bg-[rgb(var(--text-muted))]',
    }[s])
  
  const statusLabel = (s: Status) =>
    ({ ready: 'Ready Now', maturing: 'Maturing', planting: 'Planned' }[s])
  
  const cornerGradient = (s: Status) =>
    ({
      ready:    'from-leaf-500/20 to-transparent',
      maturing: 'from-harvest-500/20 to-transparent',
      planting: 'from-[rgb(var(--text-muted)/0.15)] to-transparent',
    }[s])
  
  /* ---------------------------------------------------------------
     DESKTOP HORIZONTAL SCROLL (pinned)
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  let mainST: ScrollTrigger | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value, ...cardRefs, hintRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0 }
      )
      if (progressRef.value) gsap.set(progressRef.value, { scaleX: 1 })
      return
    }
  
    ctx = gsap.context(() => {
      /* --- Header entrance --- */
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
  
      /* --- Card stagger (mobile fallback — visible reveal) --- */
      const cards = cardRefs.filter(Boolean)
      if (cards.length) {
        gsap.from(cards, {
          y: 50, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineWrapRef.value,
            start: 'top 85%',
          },
        })
      }
  
      /* --- Horizontal pinned scroll — desktop only --- */
      const mm = gsap.matchMedia()
  
      mm.add('(min-width: 1024px)', () => {
        const track = trackRef.value
        const pin   = pinRef.value
        if (!track || !pin || !sectionRef.value) return
  
        // Wait a tick for layout
        requestAnimationFrame(() => {
          const trackWidth = track.scrollWidth
          const viewportW  = window.innerWidth
          const distance   = Math.max(0, trackWidth - viewportW + 80) // small buffer
  
          mainST = ScrollTrigger.create({
            trigger: sectionRef.value,
            start: 'top top',
            end: () => `+=${distance + window.innerHeight * 0.6}`,
            pin: pin,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          })
  
          /* Move track horizontally as user scrolls */
          gsap.to(track, {
            x: () => -distance,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.value,
              start: 'top top',
              end: () => `+=${distance + window.innerHeight * 0.6}`,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          })
  
          /* Progress line fills in sync */
          if (progressRef.value) {
            gsap.to(progressRef.value, {
              scaleX: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.value,
                start: 'top top',
                end: () => `+=${distance + window.innerHeight * 0.6}`,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            })
          }
  
          /* Light up milestone dots as they pass center */
          cards.forEach((card) => {
            const dot = card.querySelector('.milestone-dot')
            if (!dot) return
  
            ScrollTrigger.create({
              trigger: card,
              containerAnimation: gsap.getTweensOf(track)[0] as any, // if containerAnim used
              start: 'top top',
              onEnter: () => dot.classList.add('is-active'),
              onLeaveBack: () => dot.classList.remove('is-active'),
            })
          })
        })
      })
  
      mm.add('(max-width: 1023px)', () => {
        // No pin, native horizontal scroll-snap only
        return () => {}
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => {
    ctx?.revert()
    mainST?.kill()
  })
  </script>
  
  <style scoped>
  /* Milestone dot — active state */
  .milestone-dot.is-active {
    border-color: theme('colors.leaf.500');
    background: theme('colors.leaf.500');
    box-shadow: 0 0 0 4px theme('colors.leaf.500 / 20%');
  }
  .milestone-dot.is-ready {
    border-color: theme('colors.harvest.500');
    background: theme('colors.harvest.500');
  }
  
  /* Smooth scrollbar hide for mobile track */
  .track-scroll {
    scroll-behavior: smooth;
  }
  </style>