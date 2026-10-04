<template>
    <section
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg-alt))] overflow-hidden"
    >
      <!-- Decorative subtle grid background -->
      <div
        class="absolute inset-0 opacity-[0.4] dark:opacity-[0.15] pointer-events-none"
        style="background-image:
          linear-gradient(to right, rgb(var(--border) / 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(var(--border) / 0.06) 1px, transparent 1px);
          background-size: 60px 60px;"
        aria-hidden="true"
      />
  
      <div class="container-page relative">
  
        <!-- ============ HEADER ============ -->
        <div class="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <div
            ref="eyebrowRef"
            class="inline-flex items-center gap-2.5 mb-5
                   px-3.5 py-1.5 rounded-full
                   bg-leaf-500/10 border border-leaf-500/20
                   text-leaf-600 dark:text-leaf-400
                   text-[0.78rem] font-semibold tracking-wider uppercase"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
            Our Process
          </div>
  
          <h2
            ref="headingRef"
            class="font-display font-extrabold
                   text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                   tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
          >
            From raw land to<br />
            <span class="text-leaf-500">reliable harvest.</span>
          </h2>
  
          <p
            ref="descRef"
            class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed"
          >
            Every estate we build follows the same disciplined five-stage process —
            refined over 15 years and thousands of hectares.
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
            <!-- Animated progress overlay -->
            <div
              ref="railProgressRef"
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
              ref="railProgressMobileRef"
              class="absolute top-0 left-0 w-full h-full
                     bg-gradient-to-b from-leaf-500 via-leaf-400 to-harvest-500
                     origin-top"
              style="transform: scaleY(0);"
            />
          </div>
  
          <!-- ========== STEPS ========== -->
          <ol class="space-y-12 lg:space-y-0">
            <li
              v-for="(step, i) in steps"
              :key="step.number"
              :ref="(el) => { if (el) stepRefs[i] = el as HTMLElement }"
              class="process-step relative
                     lg:grid lg:grid-cols-2 lg:gap-16
                     lg:min-h-[260px]
                     pl-16 lg:pl-0"
            >
              <!-- ---- NUMBER NODE ---- -->
              <div
                class="absolute lg:absolute
                       left-0 lg:left-1/2
                       top-0 lg:top-8
                       lg:-translate-x-1/2
                       flex items-center justify-center"
              >
                <div
                  class="step-node
                         grid place-items-center
                         w-10 h-10 lg:w-12 lg:h-12
                         rounded-full
                         bg-[rgb(var(--bg))]
                         border-2 border-[rgb(var(--border)/0.2)]
                         transition-all duration-700"
                >
                  <span
                    class="step-number
                           font-display font-extrabold text-[0.9rem] lg:text-[1rem]
                           text-[rgb(var(--text-muted))]
                           transition-colors duration-500"
                  >
                    {{ step.number }}
                  </span>
                </div>
              </div>
  
              <!-- ---- LEFT CARD (desktop: alternates) ---- -->
              <div
                v-if="i % 2 === 0"
                class="process-card lg:col-start-1 lg:text-right lg:pr-16"
              >
                <CardContent :step="step" align="right" />
              </div>
  
              <!-- ---- RIGHT CARD (desktop: alternates) ---- -->
              <div
                v-if="i % 2 !== 0"
                class="process-card lg:col-start-2 lg:pl-16"
              >
                <CardContent :step="step" align="left" />
              </div>
  
              <!-- For desktop, add placeholder in the empty column -->
              <div v-if="i % 2 === 0" class="hidden lg:block lg:col-start-2" aria-hidden="true" />
              <div v-if="i % 2 !== 0" class="hidden lg:block lg:col-start-1" aria-hidden="true" />
            </li>
          </ol>
        </div>
  
        <!-- ============ BOTTOM CTA ============ -->
        <div
          ref="ctaRef"
          class="mt-20 lg:mt-28 text-center
                 max-w-2xl mx-auto
                 pt-10 border-t border-[rgb(var(--border)/0.1)]"
        >
          <div class="text-[rgb(var(--text-muted))] text-[0.85rem] uppercase tracking-wider font-semibold mb-3">
            Ready to see the process in action?
          </div>
          <h3
            class="font-display font-extrabold
                   text-[clamp(1.35rem,2.5vw,1.75rem)] leading-tight
                   text-[rgb(var(--text))] mb-6"
          >
            Book a virtual tour of any estate.
          </h3>
  
          <div class="flex flex-wrap justify-center gap-3">
            <NuxtLink
              to="/contact"
              class="btn !px-6 !py-3.5
                     bg-leaf-500 text-white
                     hover:bg-leaf-600 hover:-translate-y-0.5
                     shadow-[0_8px_24px_-8px_rgba(46,125,50,0.5)]"
            >
              Book a Tour
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/plantations"
              class="btn !px-6 !py-3.5
                     border border-[rgb(var(--border)/0.15)]
                     text-[rgb(var(--text))]
                     hover:border-leaf-500 hover:text-leaf-600 dark:hover:text-leaf-400"
            >
              See Our Estates
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
  
  /* Small inner component for the card content (avoids repetition) */
  const CardContent = defineComponent({
    props: {
      step: { type: Object as () => Step, required: true },
      align: { type: String as () => 'left' | 'right', required: true },
    },
    setup(props) {
      return () => {
        const alignRight = props.align === 'right'
        return h('div', { class: alignRight ? 'lg:items-end flex flex-col' : 'flex flex-col' }, [
          // Duration chip
          h('div', {
            class: [
              'inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4',
              'bg-harvest-500/10 border border-harvest-500/20',
              'text-harvest-700 dark:text-harvest-400',
              'text-[0.72rem] font-semibold tracking-wider uppercase',
            ].join(' '),
          }, [
            h('span', { class: 'w-1 h-1 rounded-full bg-harvest-500' }),
            props.step.duration,
          ]),
  
          // Title
          h('h3', {
            class: 'font-display font-bold text-[rgb(var(--text))] text-[1.35rem] lg:text-[1.5rem] leading-tight tracking-[-0.02em] mb-3 max-w-md',
          }, props.step.title),
  
          // Description
          h('p', {
            class: 'text-[rgb(var(--text-muted))] text-[0.98rem] leading-relaxed max-w-md',
          }, props.step.description),
  
          // Bullet list (optional detail)
          h('ul', {
            class: 'mt-4 space-y-2 max-w-md ' + (alignRight ? 'lg:text-right lg:ml-auto' : ''),
          }, props.step.details.map((d) =>
            h('li', {
              class: 'flex items-start gap-2.5 text-[0.88rem] text-[rgb(var(--text-muted))] ' +
                     (alignRight ? 'lg:flex-row-reverse lg:text-right' : ''),
            }, [
              h('span', {
                class: 'shrink-0 grid place-items-center w-4 h-4 rounded-full mt-0.5 ' +
                       'bg-leaf-500/15 text-leaf-600 dark:text-leaf-400',
                innerHTML: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
              }),
              h('span', d),
            ])
          )),
        ])
      }
    },
  })
  
  /* -------- Refs -------- */
  const sectionRef              = ref<HTMLElement | null>(null)
  const eyebrowRef              = ref<HTMLElement | null>(null)
  const headingRef              = ref<HTMLElement | null>(null)
  const descRef                 = ref<HTMLElement | null>(null)
  const timelineRef             = ref<HTMLElement | null>(null)
  const railProgressRef         = ref<HTMLElement | null>(null)
  const railProgressMobileRef   = ref<HTMLElement | null>(null)
  const ctaRef                  = ref<HTMLElement | null>(null)
  const stepRefs: HTMLElement[] = []
  
  /* -------- Types -------- */
  interface Step {
    number: string
    title: string
    description: string
    duration: string
    details: string[]
  }
  
  /* -------- Data -------- */
  const steps: Step[] = [
    {
      number: '01',
      title: 'Land Selection & Soil Analysis',
      description:
        'We acquire and audit every plot for soil quality, water access, and long-term viability before a single tree is planted.',
      duration: '2–4 months',
      details: [
        'Independent soil testing',
        'Topography & drainage survey',
        'Community engagement & land rights',
      ],
    },
    {
      number: '02',
      title: 'Planting & Nursery Management',
      description:
        'Certified seedlings are raised in our own nurseries, then planted to strict spacing and shade-density standards.',
      duration: '6–12 months',
      details: [
        'Certified seed stock',
        'Nursery hardening',
        'Agronomist supervision',
      ],
    },
    {
      number: '03',
      title: 'Growth & Nurturing',
      description:
        'Years of disciplined tending — pruning, organic fertilization, pest control — long before the first harvest arrives.',
      duration: '3–5 years',
      details: [
        'Organic inputs only',
        'Monthly field audits',
        'Farmer training & fair wages',
      ],
    },
    {
      number: '04',
      title: 'Harvesting & Processing',
      description:
        'Once mature, crops are hand-harvested, graded, and processed at our facilities to preserve quality and traceability.',
      duration: 'Ongoing, seasonal',
      details: [
        'Hand-picked at peak ripeness',
        'On-site grading & sorting',
        'Cold-chain where required',
      ],
    },
    {
      number: '05',
      title: 'Delivery & Traceability',
      description:
        'Every batch is barcoded and documented, then delivered to local markets and export partners with full origin transparency.',
      duration: 'Days from harvest',
      details: [
        'QR-coded batch tracking',
        'Export documentation handled',
        'Direct-to-buyer logistics',
      ],
    },
  ]
  
  /* ---------------------------------------------------------------
     GSAP — rail draw + card reveals
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value, ...stepRefs, ctaRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0 }
      )
      gsap.set([railProgressRef.value, railProgressMobileRef.value].filter(Boolean), { scaleY: 1 })
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
  
      /* --- Rail progress line (desktop) --- */
      if (railProgressRef.value) {
        gsap.to(railProgressRef.value, {
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
  
      /* --- Rail progress line (mobile) --- */
      if (railProgressMobileRef.value) {
        gsap.to(railProgressMobileRef.value, {
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
  
      /* --- Step reveals --- */
      const steps = stepRefs.filter(Boolean)
      steps.forEach((stepEl, i) => {
        const card = stepEl.querySelector('.process-card')
        const node = stepEl.querySelector('.step-node')
        const numberEl = stepEl.querySelector('.step-number')
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
              trigger: stepEl,
              start: 'top 78%',
            },
          })
        }
  
        // Node (dot)
        if (node) {
          gsap.from(node, {
            scale: 0.4,
            autoAlpha: 0,
            duration: 0.6,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: stepEl,
              start: 'top 82%',
            },
          })
        }
  
        // Activate node when it enters center of viewport
        ScrollTrigger.create({
          trigger: stepEl,
          start: 'top 60%',
          onEnter: () => {
            if (node) {
              node.classList.add('is-active')
              gsap.to(node, {
                borderColor: 'rgb(46 125 50)',
                boxShadow: '0 0 0 6px rgba(46,125,50,0.15)',
                duration: 0.5,
                ease: 'power2.out',
              })
            }
            if (numberEl) {
              gsap.to(numberEl, { color: 'rgb(46 125 50)', duration: 0.5 })
            }
          },
          onLeaveBack: () => {
            if (node) {
              node.classList.remove('is-active')
              gsap.to(node, {
                borderColor: 'rgb(0 0 0 / 0)',
                boxShadow: '0 0 0 0 rgba(46,125,50,0)',
                duration: 0.4,
              })
            }
            if (numberEl) {
              gsap.to(numberEl, { color: 'rgb(107 114 128)', duration: 0.4 })
            }
          },
        })
      })
  
      /* --- Bottom CTA --- */
      gsap.from(ctaRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => {
    ctx?.revert()
  })
  </script>
  
  <style scoped>
  /* Prevent layout shifts when steps animate */
  .process-step {
    min-height: auto;
  }
  
  .process-card {
    will-change: transform;
  }
  
  .step-node {
    will-change: transform, box-shadow, border-color;
  }
  </style>