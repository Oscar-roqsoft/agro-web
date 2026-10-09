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
        <div class="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <div
            ref="eyebrowRef"
            class="inline-flex items-center gap-2.5 mb-5
                   px-3.5 py-1.5 rounded-full
                   bg-harvest-500/10 border border-harvest-500/20
                   text-harvest-700 dark:text-harvest-400
                   text-[0.78rem] font-semibold tracking-wider uppercase"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-harvest-500" />
            Our Journey
          </div>
  
          <h2
            ref="headingRef"
            class="font-display font-extrabold
                   text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                   tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
          >
            From a single plot<br />
            <span class="text-leaf-500">to a growing enterprise.</span>
          </h2>
  
          <p
            ref="descRef"
            class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed"
          >
            Every hectare we manage today was planted with intention. Here are
            the moments that shaped who we are.
          </p>
        </div>
  
        <!-- ============ TIMELINE ============ -->
        <div ref="timelineRef" class="relative">
  
          <!-- ========== CENTER RAIL (desktop) ========== -->
          <div
            class="hidden lg:block absolute left-1/2 top-0 bottom-0
                   w-px -translate-x-1/2 bg-[rgb(var(--border)/0.15)]"
            aria-hidden="true"
          >
            <div
              ref="railRef"
              class="absolute top-0 left-0 w-full h-full
                     bg-gradient-to-b from-leaf-500 via-leaf-400 to-harvest-500
                     origin-top"
              style="transform: scaleY(0);"
            />
          </div>
  
          <!-- ========== LEFT RAIL (mobile) ========== -->
          <div
            class="lg:hidden absolute left-5 top-2 bottom-2
                   w-px bg-[rgb(var(--border)/0.15)]"
            aria-hidden="true"
          >
            <div
              ref="railMobileRef"
              class="absolute top-0 left-0 w-full h-full
                     bg-gradient-to-b from-leaf-500 via-leaf-400 to-harvest-500
                     origin-top"
              style="transform: scaleY(0);"
            />
          </div>
  
          <!-- ========== MILESTONES ========== -->
          <ol class="space-y-14 lg:space-y-0">
            <li
              v-for="(m, i) in milestones"
              :key="m.year + m.title"
              :ref="(el) => { if (el) itemRefs[i] = el as HTMLElement }"
              class="milestone relative
                     lg:grid lg:grid-cols-2 lg:gap-16
                     lg:min-h-[280px]
                     pl-16 lg:pl-0"
            >
              <!-- ---- YEAR MARKER ---- -->
              <div
                class="absolute lg:static
                       left-0 lg:col-span-2 lg:order-none
                       lg:absolute lg:top-8"
                :class="i % 2 === 0
                  ? 'lg:left-1/2 lg:-translate-x-1/2'
                  : 'lg:left-1/2 lg:-translate-x-1/2'"
                aria-hidden="false"
              >
                <!-- Dot on rail -->
                <div
                  class="year-node
                         grid place-items-center
                         w-11 h-11 lg:w-14 lg:h-14
                         rounded-full
                         bg-[rgb(var(--bg))]
                         border-2 border-[rgb(var(--border)/0.2)]
                         transition-all duration-700
                         shadow-sm"
                >
                  <span
                    class="year-node-dot
                           w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full
                           bg-[rgb(var(--border)/0.35)]
                           transition-all duration-500"
                  />
                </div>
              </div>
  
              <!-- ---- HERO YEAR (opposite side on desktop) ---- -->
              <div
                v-if="i % 2 === 0"
                class="hidden lg:flex lg:col-start-2 lg:items-center
                       lg:pl-16"
              >
                <span
                  class="year-text
                         font-display font-extrabold
                         text-[clamp(3rem,7vw,5.5rem)] leading-none
                         tracking-[-0.04em]
                         text-[rgb(var(--text-muted)/0.15)]
                         transition-colors duration-700 select-none"
                >
                  {{ m.year }}
                </span>
              </div>
  
              <!-- ---- CARD ---- -->
              <div
                :class="[
                  'milestone-card',
                  i % 2 === 0
                    ? 'lg:col-start-1 lg:row-start-1 lg:text-right lg:pr-16'
                    : 'lg:col-start-2 lg:pl-16',
                ]"
              >
                <MilestoneCardContent :milestone="m" :align="i % 2 === 0 ? 'right' : 'left'" />
              </div>
  
              <!-- Mobile: hero year inside card column -->
              <div
                v-if="i % 2 !== 0"
                class="hidden lg:flex lg:col-start-1 lg:row-start-1
                       lg:items-center lg:justify-end lg:pr-16"
              >
                <span
                  class="year-text
                         font-display font-extrabold
                         text-[clamp(3rem,7vw,5.5rem)] leading-none
                         tracking-[-0.04em]
                         text-[rgb(var(--text-muted)/0.15)]
                         transition-colors duration-700 select-none"
                >
                  {{ m.year }}
                </span>
              </div>
            </li>
          </ol>
        </div>
  
        <!-- ============ BOTTOM QUOTE ============ -->
        <div
          ref="quoteRef"
          class="mt-20 lg:mt-28 max-w-3xl mx-auto text-center"
        >
          <div class="relative">
            <span
              class="absolute -top-6 left-1/2 -translate-x-1/2
                     font-display font-extrabold
                     text-[5rem] lg:text-[6rem] leading-none
                     text-leaf-500/15 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p
              class="relative font-display font-semibold
                     text-[clamp(1.15rem,2.2vw,1.55rem)] leading-snug
                     tracking-[-0.015em] text-[rgb(var(--text))] pt-8"
            >
              We didn't set out to build the biggest plantation.
              We set out to build the one our grandchildren will still be proud of.
            </p>
            <div class="mt-6 flex items-center justify-center gap-3">
              <span class="w-8 h-px bg-[rgb(var(--border)/0.3)]" />
              <span class="text-[rgb(var(--text-muted))] text-[0.85rem] font-medium">
                Mr Emeka Christian Okeke, Founder
              </span>
              <span class="w-8 h-px bg-[rgb(var(--border)/0.3)]" />
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
  
  /* -------- Inner card component (avoids repetition) -------- */
  interface Milestone {
    year: string
    title: string
    description: string
    image?: string
    tag?: string
  }
  
  const MilestoneCardContent = defineComponent({
    props: {
      milestone: { type: Object as () => Milestone, required: true },
      align: { type: String as () => 'left' | 'right', required: true },
    },
    setup(props) {
      return () => {
        const right = props.align === 'right'
        const m = props.milestone
  
        return h('div', { class: ['flex flex-col', right ? 'lg:items-end lg:text-right' : ''] }, [
          // Tag chip
          m.tag
            ? h('div', {
                class: [
                  'inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4',
                  'bg-leaf-500/10 border border-leaf-500/20',
                  'text-leaf-600 dark:text-leaf-400',
                  'text-[0.72rem] font-semibold tracking-wider uppercase',
                ].join(' '),
              }, [
                h('span', { class: 'w-1 h-1 rounded-full bg-leaf-500' }),
                m.tag,
              ])
            : null,
  
          // Title
          h('h3', {
            class: 'font-display font-bold text-[rgb(var(--text))] text-[1.35rem] lg:text-[1.55rem] leading-tight tracking-[-0.02em] mb-3 max-w-md',
          }, m.title),
  
          // Description
          h('p', {
            class: 'text-[rgb(var(--text-muted))] text-[0.98rem] leading-relaxed max-w-md',
          }, m.description),
  
          // Optional image (small, above title — but placed here for flexible layout)
          m.image
            ? h('div', {
                class: [
                  'mt-5 rounded-xl overflow-hidden w-full max-w-md',
                  'aspect-[16/10]',
                  'border border-[rgb(var(--border)/0.08)]',
                ].join(' '),
              }, [
                h('img', {
                  src: m.image,
                  alt: m.title,
                  loading: 'lazy',
                  class: 'w-full h-full object-cover',
                }),
              ])
            : null,
        ])
      }
    },
  })
  
  /* -------- Refs -------- */
  const sectionRef      = ref<HTMLElement | null>(null)
  const eyebrowRef      = ref<HTMLElement | null>(null)
  const headingRef      = ref<HTMLElement | null>(null)
  const descRef         = ref<HTMLElement | null>(null)
  const timelineRef     = ref<HTMLElement | null>(null)
  const railRef         = ref<HTMLElement | null>(null)
  const railMobileRef   = ref<HTMLElement | null>(null)
  const quoteRef        = ref<HTMLElement | null>(null)
  const itemRefs: HTMLElement[] = []
  
  /* -------- Data -------- */
  const milestones: Milestone[] = [
    {
      year: '2018',
      tag: 'The Beginning',
      title: 'A 40-hectare plot in Anambra State.',
      description:
        'Two brothers and a small team planted their first oil palm seedlings on family land — mostly by hand, with borrowed tools and a lot of hope.',
    },
    {
      year: '2019',
      tag: 'First Harvest',
      title: 'Our first palm harvest ships.',
      description:
        'Three years after planting, the first commercial yield of palm oil was pressed and sold locally. It funded the nursery for the next phase.',
    },
    {
      year: '2020',
      tag: 'Expansion',
      title: 'Three new estates acquired.',
      description:
        'We acquired land in Cross River, Enugu, and Akwa Ibom — diversifying into cocoa, rubber, and plantain. The company became a true multi-crop operation.',
    },
    {
      year: '2020',
      tag: 'Community',
      title: 'The Outgrower Program launches.',
      description:
        'We began partnering with smallholder farmers — providing certified seedlings, training, and guaranteed purchase at fair-trade prices. 200+ farmers joined within two years.',
    },
    {
      year: '2022',
      tag: 'Sustainability',
      title: 'Certified organic. Committed to net-zero.',
      description:
        'Rainforest Alliance and ISO 14001 certifications earned. We pledged to restore 500 hectares of degraded land and reach carbon neutrality across all estates by 2030.',
    },
    {
      year: '2026',
      tag: 'Today',
      title: 'Six estates. 1,200+ hectares. And just getting started.',
      description:
        'With institutional investors on board and three new crops maturing over the next four years, we\'re building the foundation for the next generation of West African agriculture.',
    },
  ]
  
  /* ---------------------------------------------------------------
     GSAP — rail draw + card reveals + node activation
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         ...itemRefs, quoteRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0 }
      )
      gsap.set([railRef.value, railMobileRef.value].filter(Boolean), { scaleY: 1 })
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
  
      /* --- Rails draw as user scrolls --- */
      if (railRef.value) {
        gsap.to(railRef.value, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.value,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        })
      }
      if (railMobileRef.value) {
        gsap.to(railMobileRef.value, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.value,
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: 0.6,
          },
        })
      }
  
      /* --- Milestone reveals --- */
      const items = itemRefs.filter(Boolean)
      items.forEach((item, i) => {
        const card       = item.querySelector('.milestone-card')
        const node       = item.querySelector('.year-node')
        const nodeDot    = item.querySelector('.year-node-dot')
        const yearText   = item.querySelector('.year-text')
  
        const isLeft = i % 2 === 0
        const fromX = window.innerWidth >= 1024 ? (isLeft ? -40 : 40) : 20
  
        // Card
        if (card) {
          gsap.from(card, {
            x: fromX,
            autoAlpha: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 78%',
            },
          })
        }
  
        // Hero year text fades in
        if (yearText) {
          gsap.from(yearText, {
            autoAlpha: 0,
            y: 20,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 78%',
            },
          })
        }
  
        // Node scales in
        if (node) {
          gsap.from(node, {
            scale: 0.4,
            autoAlpha: 0,
            duration: 0.6,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: item,
              start: 'top 82%',
            },
          })
        }
  
        // Activate node + year color when it crosses viewport center
        ScrollTrigger.create({
          trigger: item,
          start: 'top 55%',
          onEnter: () => {
            if (node) {
              gsap.to(node, {
                borderColor: 'rgb(46 125 50)',
                boxShadow: '0 0 0 8px rgba(46,125,50,0.15)',
                duration: 0.6,
                ease: 'power2.out',
              })
            }
            if (nodeDot) {
              gsap.to(nodeDot, {
                backgroundColor: 'rgb(46 125 50)',
                scale: 1.4,
                duration: 0.5,
                ease: 'back.out(2)',
              })
            }
            if (yearText) {
              gsap.to(yearText, {
                color: 'rgb(46 125 50 / 0.35)',
                duration: 0.6,
              })
            }
          },
          onLeaveBack: () => {
            if (node) {
              gsap.to(node, {
                borderColor: 'rgba(0,0,0,0.2)',
                boxShadow: '0 0 0 0 rgba(46,125,50,0)',
                duration: 0.5,
              })
            }
            if (nodeDot) {
              gsap.to(nodeDot, {
                backgroundColor: 'rgba(0,0,0,0.35)',
                scale: 1,
                duration: 0.4,
              })
            }
            if (yearText) {
              gsap.to(yearText, {
                color: 'rgba(0,0,0,0.15)',
                duration: 0.5,
              })
            }
          },
        })
      })
  
      /* --- Bottom quote --- */
      gsap.from(quoteRef.value, {
        y: 30, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: quoteRef.value, start: 'top 85%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => {
    ctx?.revert()
  })
  </script>
  
  <style scoped>
  .milestone {
    /* avoids layout jump on mobile */
  }
  
  .milestone-card {
    will-change: transform;
  }
  
  .year-node {
    will-change: transform, box-shadow, border-color;
  }
  
  .year-text {
    will-change: color;
  }
  </style>