<template>
    <section
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg))] overflow-hidden"
    >
      <!-- Ambient blobs -->
      <div
        class="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full
               bg-leaf-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        class="absolute -bottom-40 -right-32 w-[420px] h-[420px] rounded-full
               bg-harvest-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
  
      <div class="container-page relative">
  
        <!-- ============ MAIN GRID ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
  
          <!-- ============ LEFT: MISSION STATEMENT ============ -->
          <div class="lg:col-span-5 lg:sticky lg:top-28">
  
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-6
                     px-3.5 py-1.5 rounded-full
                     bg-leaf-500/10 border border-leaf-500/20
                     text-leaf-600 dark:text-leaf-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
              Mission & Values
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))] mb-6"
            >
              We don't just grow crops.<br />
              <span class="text-leaf-500">We grow futures.</span>
            </h2>
  
            <p
              ref="missionRef"
              class="text-[rgb(var(--text-muted))] text-[1.05rem] leading-relaxed mb-8"
            >
              Our mission is simple and unshakable: to build a West African
              agribusiness that rewards patience, protects the land, and lifts
              the communities we farm beside. Every decision we make — from soil
              to sale — answers to those three things.
            </p>
  
            <!-- Signature-style divider -->
            <div class="flex items-center gap-3 mb-8">
              <span class="h-px w-10 bg-harvest-500/60" />
              <span class="text-[rgb(var(--text-muted))] text-[0.78rem]
                           uppercase tracking-[0.2em] font-semibold">
                The GreenField Standard
              </span>
            </div>
  
            <!-- Mini trust markers -->
            <ul
              ref="markersRef"
              class="space-y-3.5"
            >
              <li
                v-for="marker in markers"
                :key="marker"
                class="flex items-start gap-3
                       text-[rgb(var(--text))] text-[0.95rem]"
              >
                <span
                  class="shrink-0 grid place-items-center w-5 h-5 rounded-full mt-0.5
                         bg-leaf-500/15 text-leaf-600 dark:text-leaf-400"
                  v-html="checkIcon"
                />
                <span>{{ marker }}</span>
              </li>
            </ul>
          </div>
  
          <!-- ============ RIGHT: VALUE PILLARS ============ -->
          <div class="lg:col-span-7">
            <div
              ref="gridRef"
              class="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
            >
              <article
                v-for="(value, i) in values"
                :key="value.title"
                :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
                class="value-card group relative flex flex-col
                       rounded-2xl p-6 lg:p-7
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.08)]
                       transition-all duration-500
                       hover:-translate-y-1.5
                       hover:border-leaf-500/25
                       hover:shadow-[0_25px_50px_-20px_rgba(46,125,50,0.28)]"
              >
                <!-- Icon -->
                <div
                  class="grid place-items-center w-14 h-14 rounded-xl mb-6
                         transition-all duration-500
                         group-hover:scale-110 group-hover:-rotate-6"
                  :class="value.iconBg"
                  v-html="value.icon"
                />
  
                <!-- Title -->
                <h3
                  class="font-display font-bold text-[rgb(var(--text))]
                         text-[1.15rem] lg:text-[1.25rem] leading-tight
                         tracking-[-0.015em] mb-3"
                >
                  {{ value.title }}
                </h3>
  
                <!-- Description -->
                <p
                  class="text-[rgb(var(--text-muted))] text-[0.94rem] leading-relaxed mb-5 flex-1"
                >
                  {{ value.description }}
                </p>
  
                <!-- "In practice" line -->
                <div
                  class="mt-auto pt-4 border-t border-[rgb(var(--border)/0.08)]
                         flex items-start gap-2.5"
                >
                  <span
                    class="shrink-0 grid place-items-center w-4 h-4 rounded-full mt-0.5
                           bg-harvest-500/15 text-harvest-600 dark:text-harvest-400"
                    v-html="arrowIcon"
                  />
                  <div class="text-[rgb(var(--text))] text-[0.82rem] leading-relaxed font-medium">
                    <span class="text-[rgb(var(--text-muted))] uppercase tracking-wider text-[0.68rem] font-bold block mb-0.5">
                      In practice
                    </span>
                    {{ value.inPractice }}
                  </div>
                </div>
  
                <!-- Corner accent -->
                <div
                  class="absolute top-0 right-0 w-20 h-20
                         bg-gradient-to-br opacity-0 group-hover:opacity-100
                         transition-opacity duration-500 rounded-tr-2xl pointer-events-none"
                  :class="value.cornerGradient"
                />
              </article>
            </div>
  
            <!-- ============ SMALL CALLOUT CARD ============ -->
            <div
              ref="calloutRef"
              class="mt-6 rounded-2xl p-6 lg:p-7
                     bg-gradient-to-br from-leaf-500/8 to-harvest-500/8
                     border border-leaf-500/20
                     flex items-start gap-5"
            >
              <div
                class="shrink-0 grid place-items-center w-12 h-12 rounded-xl
                       bg-leaf-500 text-white
                       shadow-[0_8px_20px_-8px_rgba(46,125,50,0.5)]"
                v-html="quoteIcon"
              />
              <div>
                <div class="font-display font-bold text-[rgb(var(--text))]
                            text-[1rem] leading-snug mb-1.5">
                  Our values are audited, not just advertised.
                </div>
                <p class="text-[rgb(var(--text-muted))] text-[0.88rem] leading-relaxed">
                  Every value on this page is verified annually by third-party
                  auditors — soil health, worker welfare, community investment,
                  and carbon footprint. Download our latest compliance report to
                  see the numbers.
                </p>
                <NuxtLink
                  to="/impact-report"
                  class="inline-flex items-center gap-1.5 mt-3
                         text-leaf-600 dark:text-leaf-400
                         font-semibold text-[0.88rem]
                         hover:gap-2.5 transition-all duration-200"
                >
                  View compliance report
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.4"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </NuxtLink>
              </div>
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
  
  /* -------- Icons -------- */
  const checkIcon = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`
  
  const arrowIcon = `<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`
  
  const quoteIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>`
  
  /* -------- Refs -------- */
  const sectionRef  = ref<HTMLElement | null>(null)
  const eyebrowRef  = ref<HTMLElement | null>(null)
  const headingRef  = ref<HTMLElement | null>(null)
  const missionRef  = ref<HTMLElement | null>(null)
  const markersRef  = ref<HTMLElement | null>(null)
  const gridRef     = ref<HTMLElement | null>(null)
  const calloutRef  = ref<HTMLElement | null>(null)
  const cardRefs: HTMLElement[] = []
  
  /* -------- Markers (bulleted trust points) -------- */
  const markers = [
    'Independently audited every year',
    'Fair wages verified by Fairtrade',
    'Zero-deforestation commitment since 2016',
    'Community reinvestment: 5% of net profit',
  ]
  
  /* -------- Values data -------- */
  interface Value {
    title: string
    description: string
    inPractice: string
    icon: string
    iconBg: string
    cornerGradient: string
  }
  
  const values: Value[] = [
    {
      title: 'Patience over speed',
      description:
        'Good things take time. We plant for decades, not quarters — and we build systems that reward discipline over shortcuts.',
      inPractice:
        'Every estate has a 15-year agronomic plan, revised annually with soil data.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
      iconBg: 'bg-leaf-500/12 text-leaf-600 dark:text-leaf-400',
      cornerGradient: 'from-leaf-500/10 to-transparent',
    },
    {
      title: 'Land as a legacy',
      description:
        'We treat every hectare as something borrowed from the next generation — not owned by this one. Soil health is non-negotiable.',
      inPractice:
        'Organic inputs only. 500 hectares of degraded land under restoration by 2030.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
      iconBg: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400',
      cornerGradient: 'from-emerald-500/10 to-transparent',
    },
    {
      title: 'People first',
      description:
        'From the field teams to the smallholder farmers in our network, everyone who touches our produce is paid fairly and treated well.',
      inPractice:
        '340+ direct employees. 200+ outgrower farmers. Living wage certified.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      iconBg: 'bg-harvest-500/12 text-harvest-600 dark:text-harvest-400',
      cornerGradient: 'from-harvest-500/10 to-transparent',
    },
    {
      title: 'Radical transparency',
      description:
        'Buyers, investors, and communities see the same numbers we do — audited, timestamped, and available on request.',
      inPractice:
        'Quarterly reports published. Every batch traceable by QR code.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
      iconBg: 'bg-blue-500/12 text-blue-600 dark:text-blue-400',
      cornerGradient: 'from-blue-500/10 to-transparent',
    },
  ]
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, missionRef.value,
         markersRef.value, ...cardRefs, calloutRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0 }
      )
      return
    }
  
    ctx = gsap.context(() => {
      /* --- Left column --- */
      gsap.from(eyebrowRef.value, {
        y: 20, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: eyebrowRef.value, start: 'top 88%' },
      })
      gsap.from(headingRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.value, start: 'top 85%' },
      })
      gsap.from(missionRef.value, {
        y: 24, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: missionRef.value, start: 'top 88%' },
      })
  
      /* --- Markers stagger --- */
      if (markersRef.value) {
        gsap.from(markersRef.value.children, {
          y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: markersRef.value, start: 'top 90%' },
        })
      }
  
      /* --- Value cards stagger --- */
      const cards = cardRefs.filter(Boolean)
      if (cards.length) {
        gsap.from(cards, {
          y: 50, autoAlpha: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.value, start: 'top 78%' },
        })
  
        /* Subtle scale-in on each icon */
        cards.forEach((card) => {
          const icon = card.querySelector('.rounded-xl')
          if (icon) {
            gsap.from(icon, {
              scale: 0.5, autoAlpha: 0, duration: 0.5, ease: 'back.out(2)',
              scrollTrigger: { trigger: card, start: 'top 82%' },
            })
          }
        })
      }
  
      /* --- Callout --- */
      gsap.from(calloutRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: calloutRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => {
    ctx?.revert()
  })
  </script>
  
  <style scoped>
  .value-card {
    min-height: 260px;
  }
  </style>