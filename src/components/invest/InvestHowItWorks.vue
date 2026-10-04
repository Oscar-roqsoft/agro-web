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
      <!-- Faint grid -->
      <div
        class="absolute inset-0 opacity-[0.3] dark:opacity-[0.1] pointer-events-none"
        style="background-image:
          linear-gradient(to right, rgb(var(--border) / 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(var(--border) / 0.06) 1px, transparent 1px);
          background-size: 72px 72px;"
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
            How It Works
          </div>
  
          <h2
            ref="headingRef"
            class="font-display font-extrabold
                   text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                   tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
          >
            From first call<br />
            <span class="text-leaf-500">to first payout.</span>
          </h2>
  
          <p
            ref="descRef"
            class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed"
          >
            Five stages, each with clear deliverables and timing. No grey areas,
            no hidden steps, no unexpected fees.
          </p>
        </div>
  
        <!-- ============ TIMELINE ============ -->
        <div ref="timelineRef" class="relative">
  
          <!-- CENTER RAIL (desktop) -->
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
  
          <!-- LEFT RAIL (mobile) -->
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
  
          <!-- STEPS -->
          <ol class="space-y-14 lg:space-y-0">
            <li
              v-for="(step, i) in steps"
              :key="step.number"
              :ref="(el) => { if (el) stepRefs[i] = el as HTMLElement }"
              class="step relative
                     lg:grid lg:grid-cols-2 lg:gap-16
                     lg:min-h-[340px]
                     pl-16 lg:pl-0"
            >
              <!-- NODE on rail -->
              <div
                class="absolute lg:absolute
                       left-0 lg:left-1/2
                       top-0 lg:top-8
                       lg:-translate-x-1/2
                       flex items-center justify-center z-10"
              >
                <div
                  class="step-node
                         grid place-items-center
                         w-11 h-11 lg:w-14 lg:h-14
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
  
              <!-- CARD (alternates) -->
              <div
                :class="[
                  'step-card',
                  i % 2 === 0
                    ? 'lg:col-start-1 lg:row-start-1 lg:pr-16'
                    : 'lg:col-start-2 lg:pl-16',
                ]"
              >
                <StepCardContent :step="step" :align="i % 2 === 0 ? 'right' : 'left'" />
              </div>
  
              <!-- EMPTY COUNTERPART (for grid balance) -->
              <div
                v-if="i % 2 === 0"
                class="hidden lg:block lg:col-start-2"
                aria-hidden="true"
              />
              <div
                v-if="i % 2 !== 0"
                class="hidden lg:block lg:col-start-1 lg:row-start-1"
                aria-hidden="true"
              />
            </li>
          </ol>
        </div>
  
        <!-- ============ NOTE STRIP ============ -->
        <div
          ref="noteRef"
          class="mt-16 lg:mt-20 max-w-3xl mx-auto
                 rounded-2xl p-6 lg:p-7
                 bg-[rgb(var(--surface))]
                 border border-[rgb(var(--border)/0.08)]
                 flex items-start gap-4"
        >
          <span
            class="shrink-0 grid place-items-center w-10 h-10 rounded-xl
                   bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
            v-html="infoIcon"
          />
          <div>
            <div class="font-display font-bold text-[rgb(var(--text))]
                        text-[1rem] leading-tight mb-1.5">
              No upfront fees until Step 3
            </div>
            <p class="text-[rgb(var(--text-muted))] text-[0.9rem] leading-relaxed">
              Steps 1 and 2 are completely free — including the prospectus,
              consultation call, and legal review. You only pay the onboarding
              fee once you've decided to proceed and signed the investment
              agreement.
            </p>
          </div>
        </div>
  
        <!-- ============ BOTTOM CTA ============ -->
        <div
          ref="ctaRef"
          class="mt-14 lg:mt-16 text-center max-w-2xl mx-auto"
        >
          <div
            class="text-[rgb(var(--text-muted))] text-[0.78rem]
                   uppercase tracking-[0.2em] font-semibold mb-4"
          >
            Want to walk through this with a human?
          </div>
          <h3
            class="font-display font-extrabold
                   text-[clamp(1.35rem,2.5vw,1.85rem)] leading-tight
                   tracking-[-0.02em] text-[rgb(var(--text))] mb-7"
          >
            Book a 30-minute call with<br class="hidden sm:block" />
            one of our investor relations team.
          </h3>
  
          <div class="flex flex-wrap justify-center gap-3">
            <NuxtLink
              to="/contact?type=investor&action=call"
              class="btn !px-6 !py-3.5
                     bg-leaf-500 text-white font-semibold
                     hover:bg-leaf-600 hover:-translate-y-0.5
                     shadow-[0_10px_24px_-8px_rgba(46,125,50,0.5)]"
            >
              Book a Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/legal/prospectus"
              class="btn !px-6 !py-3.5
                     border border-[rgb(var(--border)/0.15)]
                     text-[rgb(var(--text))]
                     hover:border-leaf-500 hover:text-leaf-600 dark:hover:text-leaf-400"
            >
              Read the Prospectus First
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
  const infoIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`
  
  const youIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`
  
  const usIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M5 12h14"/></svg>`
  
  /* -------- Data -------- */
  interface Step {
    number: string
    timeframe: string
    title: string
    description: string
    you: string[]
    us: string[]
  }
  
  const steps: Step[] = [
    {
      number: '01',
      timeframe: 'Day 1',
      title: 'Express interest & receive the prospectus',
      description:
        'Fill out a short form or book a call. Within 24 hours, you receive the full investor prospectus — including financials, risk factors, and land documentation.',
      you: [
        'Submit interest form (2 minutes)',
        'Review the prospectus',
      ],
      us: [
        'Send prospectus within 24h',
        'Assign a dedicated advisor',
      ],
    },
    {
      number: '02',
      timeframe: 'Week 1–2',
      title: 'Consultation & due diligence',
      description:
        'A 30-minute call to answer every question. We provide access to independent audits, land titles, and reference calls with existing investors.',
      you: [
        'Ask anything — no commitment',
        'Review audits & land docs',
        'Speak with existing investors',
      ],
      us: [
        'Host the call (agronomist available)',
        'Share audit links & references',
      ],
    },
    {
      number: '03',
      timeframe: 'Week 2–3',
      title: 'Choose a tier & sign the agreement',
      description:
        'Select your package, review the investment agreement with your own counsel if you wish, and sign digitally. The onboarding fee is paid at this step.',
      you: [
        'Select tier & hectares',
        'Sign the agreement',
        'Complete KYC / AML',
      ],
      us: [
        'Send agreement for review',
        'Process KYC within 48h',
      ],
    },
    {
      number: '04',
      timeframe: 'Week 4',
      title: 'Allocation & investor dashboard access',
      description:
        'Your hectares are formally allocated and mapped. You receive access to your investor dashboard with the exact plot, crop, planting date, and expected harvest cycle.',
      you: [
        'Access dashboard',
        'Review your allocated plot',
      ],
      us: [
        'Map & register your hectares',
        'Activate reporting access',
      ],
    },
    {
      number: '05',
      timeframe: 'Ongoing',
      title: 'Quarterly reporting & harvest returns',
      description:
        'Every quarter you receive a field report — photos, yield data, and financials. Harvest proceeds are distributed according to your tier agreement.',
      you: [
        'Read quarterly reports',
        'Receive distributions',
        'Optional: visit the estate',
      ],
      us: [
        'Publish quarterly reports',
        'Distribute harvest proceeds',
      ],
    },
  ]
  
  /* -------- Inner card component -------- */
  const StepCardContent = defineComponent({
    props: {
      step: { type: Object as () => Step, required: true },
      align: { type: String as () => 'left' | 'right', required: true },
    },
    setup(props) {
      const right = props.align === 'right'
      const s = props.step
  
      return () =>
        h('div', { class: 'flex flex-col ' + (right ? 'lg:items-end lg:text-right' : '') }, [
          // Timeframe chip
          h('div', {
            class: [
              'inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4',
              'bg-harvest-500/10 border border-harvest-500/20',
              'text-harvest-700 dark:text-harvest-400',
              'text-[0.72rem] font-semibold tracking-wider uppercase',
            ].join(' '),
          }, [
            h('span', { class: 'w-1 h-1 rounded-full bg-harvest-500' }),
            s.timeframe,
          ]),
  
          // Title
          h('h3', {
            class: 'font-display font-bold text-[rgb(var(--text))] ' +
                   'text-[1.35rem] lg:text-[1.5rem] leading-tight ' +
                   'tracking-[-0.02em] mb-3 max-w-md',
          }, s.title),
  
          // Description
          h('p', {
            class: 'text-[rgb(var(--text-muted))] text-[0.98rem] ' +
                   'leading-relaxed max-w-md mb-6',
          }, s.description),
  
          // You / Us split
          h('div', {
            class: 'grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md ' +
                   (right ? 'lg:ml-auto' : ''),
          }, [
            // YOU column
            h('div', {
              class: 'rounded-xl p-4 bg-leaf-500/6 border border-leaf-500/15',
            }, [
              h('div', {
                class: 'flex items-center gap-2 mb-3 ' +
                       'text-leaf-700 dark:text-leaf-400',
              }, [
                h('span', {
                  class: 'grid place-items-center w-5 h-5 rounded-full bg-leaf-500 text-white',
                  innerHTML: youIcon,
                }),
                h('span', { class: 'text-[0.72rem] font-bold uppercase tracking-wider' }, 'You'),
              ]),
              h('ul', { class: 'space-y-1.5' }, s.you.map((item) =>
                h('li', {
                  class: 'text-[rgb(var(--text))] text-[0.84rem] leading-snug flex items-start gap-2',
                }, [
                  h('span', { class: 'mt-1 w-1 h-1 rounded-full bg-leaf-500 shrink-0' }),
                  h('span', item),
                ])
              )),
            ]),
  
            // US column
            h('div', {
              class: 'rounded-xl p-4 bg-harvest-500/6 border border-harvest-500/15',
            }, [
              h('div', {
                class: 'flex items-center gap-2 mb-3 ' +
                       'text-harvest-700 dark:text-harvest-400',
              }, [
                h('span', {
                  class: 'grid place-items-center w-5 h-5 rounded-full bg-harvest-500 text-white',
                  innerHTML: usIcon,
                }),
                h('span', { class: 'text-[0.72rem] font-bold uppercase tracking-wider' }, 'Us'),
              ]),
              h('ul', { class: 'space-y-1.5' }, s.us.map((item) =>
                h('li', {
                  class: 'text-[rgb(var(--text))] text-[0.84rem] leading-snug flex items-start gap-2',
                }, [
                  h('span', { class: 'mt-1 w-1 h-1 rounded-full bg-harvest-500 shrink-0' }),
                  h('span', item),
                ])
              )),
            ]),
          ]),
        ])
    },
  })
  
  /* -------- Refs -------- */
  const sectionRef     = ref<HTMLElement | null>(null)
  const eyebrowRef     = ref<HTMLElement | null>(null)
  const headingRef     = ref<HTMLElement | null>(null)
  const descRef        = ref<HTMLElement | null>(null)
  const timelineRef    = ref<HTMLElement | null>(null)
  const railRef        = ref<HTMLElement | null>(null)
  const railMobileRef  = ref<HTMLElement | null>(null)
  const noteRef        = ref<HTMLElement | null>(null)
  const ctaRef         = ref<HTMLElement | null>(null)
  const stepRefs: HTMLElement[] = []
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         ...stepRefs, noteRef.value, ctaRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0 }
      )
      gsap.set([railRef.value, railMobileRef.value].filter(Boolean), { scaleY: 1 })
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
  
      /* --- Rails draw as scroll progresses --- */
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
  
      /* --- Step reveals --- */
      const stepsEls = stepRefs.filter(Boolean)
      stepsEls.forEach((stepEl, i) => {
        const card    = stepEl.querySelector('.step-card')
        const node    = stepEl.querySelector('.step-node')
        const numberEl = stepEl.querySelector('.step-number')
        const isLeft  = i % 2 === 0
        const fromX   = window.innerWidth >= 1024 ? (isLeft ? -40 : 40) : 20
  
        if (card) {
          gsap.from(card, {
            x: fromX,
            autoAlpha: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: stepEl, start: 'top 78%' },
          })
        }
  
        if (node) {
          gsap.from(node, {
            scale: 0.4,
            autoAlpha: 0,
            duration: 0.6,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: stepEl, start: 'top 82%' },
          })
        }
  
        /* Node activation when entering center */
        ScrollTrigger.create({
          trigger: stepEl,
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
            if (numberEl) {
              gsap.to(numberEl, { color: 'rgb(46 125 50)', duration: 0.5 })
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
            if (numberEl) {
              gsap.to(numberEl, { color: 'rgb(107 114 128)', duration: 0.4 })
            }
          },
        })
      })
  
      /* --- Note strip --- */
      gsap.from(noteRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: noteRef.value, start: 'top 88%' },
      })
  
      /* --- Bottom CTA --- */
      gsap.from(ctaRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.value, start: 'top 90%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>
  
  <style scoped>
  .step-card {
    will-change: transform;
  }
  
  .step-node {
    will-change: transform, box-shadow, border-color;
  }
  </style>