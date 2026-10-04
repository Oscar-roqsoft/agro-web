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
  
        <!-- ============ HEADER ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 lg:mb-20 items-end">
          <div class="lg:col-span-7">
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-5
                     px-3.5 py-1.5 rounded-full
                     bg-harvest-500/10 border border-harvest-500/20
                     text-harvest-700 dark:text-harvest-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-harvest-500" />
              How Ordering Works
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              From first inquiry<br />
              <span class="text-leaf-500">to full container.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
              Five clear steps, each with fixed timelines and documented
              deliverables. Whether you're ordering 5 tonnes or 500, the
              process is the same.
            </p>
          </div>
        </div>
  
        <!-- ============ TIMELINE TRACK ============ -->
        <div
          ref="timelineWrapRef"
          class="relative"
        >
          <!-- Progress rail (desktop) -->
          <div
            class="hidden lg:block absolute left-0 right-0 top-[80px] h-[3px]
                   bg-[rgb(var(--border)/0.12)] rounded-full overflow-hidden
                   mx-[3%]"
          >
            <div
              ref="progressRef"
              class="h-full w-full origin-left scale-x-0
                     bg-gradient-to-r from-leaf-500 via-leaf-400 to-harvest-500"
              style="transform-origin: left center;"
            />
          </div>
  
          <!-- Cards track -->
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
              v-for="(step, i) in steps"
              :key="step.number"
              :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
              class="step-card group relative shrink-0 snap-start
                     w-[300px] sm:w-[340px] lg:w-[360px]
                     rounded-2xl p-6 lg:p-7
                     bg-[rgb(var(--surface))]
                     border border-[rgb(var(--border)/0.08)]
                     transition-all duration-500
                     hover:-translate-y-1.5
                     hover:border-leaf-500/25
                     hover:shadow-[0_25px_50px_-20px_rgba(46,125,50,0.28)]"
            >
              <!-- Top: number + timeframe -->
              <div class="flex items-start justify-between gap-3 mb-5">
                <div
                  class="step-node relative
                         grid place-items-center
                         w-12 h-12 rounded-xl
                         bg-leaf-500/10 text-leaf-600 dark:text-leaf-400
                         font-display font-extrabold text-[1.1rem]
                         transition-all duration-500
                         group-hover:bg-leaf-500 group-hover:text-white"
                >
                  {{ step.number }}
                </div>
  
                <span
                  class="inline-flex items-center gap-1.5 px-3 py-1.5
                         rounded-full text-[0.7rem] font-bold tracking-wider uppercase
                         bg-harvest-500/15 text-harvest-700 dark:text-harvest-400"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.4"
                       stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  {{ step.timeframe }}
                </span>
              </div>
  
              <!-- Title -->
              <h3
                class="font-display font-bold text-[rgb(var(--text))]
                       text-[1.15rem] leading-tight
                       tracking-[-0.015em] mb-3"
              >
                {{ step.title }}
              </h3>
  
              <!-- Description -->
              <p
                class="text-[rgb(var(--text-muted))] text-[0.92rem]
                       leading-relaxed mb-5"
              >
                {{ step.description }}
              </p>
  
              <!-- YOU / US split -->
              <div class="grid grid-cols-1 gap-3 pt-5
                          border-t border-[rgb(var(--border)/0.08)]">
                <!-- YOU column -->
                <div>
                  <div class="flex items-center gap-2 mb-2.5">
                    <span
                      class="grid place-items-center w-4 h-4 rounded-full
                             bg-leaf-500 text-white"
                    >
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="3.2"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </span>
                    <span
                      class="text-[0.68rem] font-bold uppercase tracking-wider
                             text-leaf-700 dark:text-leaf-400"
                    >
                      You
                    </span>
                  </div>
                  <ul class="space-y-1.5">
                    <li
                      v-for="item in step.you"
                      :key="item"
                      class="flex items-start gap-2
                             text-[rgb(var(--text))] text-[0.82rem] leading-snug"
                    >
                      <span class="mt-1 w-1 h-1 rounded-full bg-leaf-500 shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
  
                <!-- US column -->
                <div>
                  <div class="flex items-center gap-2 mb-2.5">
                    <span
                      class="grid place-items-center w-4 h-4 rounded-full
                             bg-harvest-500 text-white"
                    >
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="3"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2v20M5 12h14"/>
                      </svg>
                    </span>
                    <span
                      class="text-[0.68rem] font-bold uppercase tracking-wider
                             text-harvest-700 dark:text-harvest-400"
                    >
                      Us
                    </span>
                  </div>
                  <ul class="space-y-1.5">
                    <li
                      v-for="item in step.us"
                      :key="item"
                      class="flex items-start gap-2
                             text-[rgb(var(--text))] text-[0.82rem] leading-snug"
                    >
                      <span class="mt-1 w-1 h-1 rounded-full bg-harvest-500 shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
  
              <!-- Bottom accent -->
              <div
                class="absolute bottom-0 left-0 right-0 h-1
                       bg-gradient-to-r from-leaf-500 to-harvest-500
                       scale-x-0 origin-left
                       group-hover:scale-x-100 transition-transform duration-500
                       rounded-b-2xl"
              />
            </article>
  
            <!-- End spacer -->
            <div class="shrink-0 w-2" aria-hidden="true" />
          </div>
  
          <!-- Swipe hint (mobile) -->
          <div
            class="lg:hidden flex items-center justify-center gap-2 mt-2
                   text-[rgb(var(--text-muted))] text-[0.78rem] font-medium"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
            Swipe to see all steps
          </div>
        </div>
  
        <!-- ============ WHAT YOU GET (right after ordering) ============ -->
        <div
          ref="deliverablesRef"
          class="mt-16 lg:mt-24"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
  
            <!-- Left: heading -->
            <div class="lg:col-span-4">
              <div
                class="inline-flex items-center gap-2.5 mb-5
                       px-3.5 py-1.5 rounded-full
                       bg-leaf-500/10 border border-leaf-500/20
                       text-leaf-600 dark:text-leaf-400
                       text-[0.78rem] font-semibold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
                What You Receive
              </div>
  
              <h3
                class="font-display font-extrabold
                       text-[clamp(1.35rem,2.5vw,1.85rem)] leading-tight
                       tracking-[-0.02em] text-[rgb(var(--text))] mb-4"
              >
                Every order ships<br />
                with full documentation.
              </h3>
  
              <p class="text-[rgb(var(--text-muted))] text-[0.95rem] leading-relaxed">
                No buyer should ever have to chase paperwork. Everything you
                need for customs, compliance, and resale arrives with your
                shipment — automatically.
              </p>
            </div>
  
            <!-- Right: deliverables grid -->
            <div class="lg:col-span-8">
              <div
                ref="deliverablesGridRef"
                class="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div
                  v-for="(item, i) in deliverables"
                  :key="item.title"
                  :ref="(el) => { if (el) deliverableRefs[i] = el as HTMLElement }"
                  class="flex items-start gap-4 p-5 rounded-2xl
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.08)]
                         transition-all duration-500
                         hover:border-leaf-500/25
                         hover:-translate-y-0.5"
                >
                  <span
                    class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                           bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                    v-html="item.icon"
                  />
                  <div class="min-w-0">
                    <div class="font-semibold text-[rgb(var(--text))]
                                text-[0.95rem] leading-tight mb-1">
                      {{ item.title }}
                    </div>
                    <div class="text-[rgb(var(--text-muted))] text-[0.84rem]
                                leading-snug">
                      {{ item.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ SMALL ORDER NOTE ============ -->
        <div
          ref="noteRef"
          class="mt-14 lg:mt-16 max-w-3xl mx-auto
                 rounded-2xl p-6 lg:p-7
                 bg-[rgb(var(--bg-alt))]
                 border border-[rgb(var(--border)/0.08)]
                 flex items-start gap-4"
        >
          <span
            class="shrink-0 grid place-items-center w-10 h-10 rounded-xl
                   bg-harvest-500/15 text-harvest-600 dark:text-harvest-400"
            v-html="infoIcon"
          />
          <div>
            <div class="font-display font-bold text-[rgb(var(--text))]
                        text-[1rem] leading-tight mb-1.5">
              Ordering under 5 tonnes?
            </div>
            <p class="text-[rgb(var(--text-muted))] text-[0.9rem] leading-relaxed">
              We work with small-scale buyers too — reach out via our contact
              form and we'll arrange a route that fits your volume. Minimum
              orders per product are listed on each catalog card.
            </p>
          </div>
        </div>
  
        <!-- ============ BOTTOM CTA ============ -->
        <div
          ref="ctaRef"
          class="mt-14 lg:mt-16 max-w-2xl mx-auto text-center"
        >
          <div
            class="text-[rgb(var(--text-muted))] text-[0.78rem]
                   uppercase tracking-[0.2em] font-semibold mb-4"
          >
            Ready to start?
          </div>
          <h3
            class="font-display font-extrabold
                   text-[clamp(1.35rem,2.5vw,1.85rem)] leading-tight
                   tracking-[-0.02em] text-[rgb(var(--text))] mb-7"
          >
            Send your first inquiry — we reply<br class="hidden sm:block" />
            within 24 hours.
          </h3>
  
          <div class="flex flex-wrap justify-center gap-3">
            <NuxtLink
              to="/contact?type=buyer&action=inquiry"
              class="btn !px-6 !py-3.5
                     bg-leaf-500 text-white font-semibold
                     hover:bg-leaf-600 hover:-translate-y-0.5
                     shadow-[0_10px_24px_-8px_rgba(46,125,50,0.5)]"
            >
              Start an Inquiry
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </NuxtLink>
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noopener"
              class="btn !px-6 !py-3.5
                     bg-[#25D366] text-white font-semibold
                     hover:bg-[#1FB855] hover:-translate-y-0.5
                     shadow-[0_10px_24px_-8px_rgba(37,211,102,0.6)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.83-1.32l-.35-.2-3.6.94.96-3.5-.23-.36a9.5 9.5 0 1 1 8.06 4.44zm8.07-17.55A11.4 11.4 0 0 0 12.04.5 11.5 11.5 0 0 0 2.1 17.85L.5 23.5l5.8-1.52a11.5 11.5 0 0 0 5.74 1.52h.01a11.5 11.5 0 0 0 8.06-19.55z"/>
              </svg>
              WhatsApp Us
            </a>
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
  
  const icons = {
    doc:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
    shield: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    map:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    ship:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21h20M5 21V10l7-5 7 5v11M12 10v11M9 13h6"/></svg>`,
    box:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>`,
    qr:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20h.01"/></svg>`,
  }
  
  /* -------- Steps data -------- */
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
      title: 'Send inquiry & specs',
      description:
        'Tell us which product, how much, and where it needs to go. Our team receives it instantly and routes it to the right desk.',
      you: [
        'Submit inquiry form or WhatsApp',
        'Specify quantity & destination port',
      ],
      us: [
        'Acknowledge within 24 hours',
        'Assign a dedicated account manager',
      ],
    },
    {
      number: '02',
      timeframe: 'Day 2–5',
      title: 'Receive quote & sample',
      description:
        'We send a detailed quote with pricing, MOQ, and lead time. If required, we ship a physical sample by courier at our cost.',
      you: [
        'Review quote & specs',
        'Test the sample if requested',
      ],
      us: [
        'Issue written quotation',
        'Dispatch sample by courier',
      ],
    },
    {
      number: '03',
      timeframe: 'Week 1–2',
      title: 'Confirm order & contract',
      description:
        'Once you approve the quote, we issue a formal Sales Agreement and Proforma Invoice. Payment terms are agreed in writing.',
      you: [
        'Sign the sales agreement',
        'Complete deposit / LC',
      ],
      us: [
        'Issue contract & proforma',
        'Confirm production schedule',
      ],
    },
    {
      number: '04',
      timeframe: 'Week 2–4',
      title: 'Production, grading & packing',
      description:
        'Your order is processed from our certified estates, graded to your specification, and packed in export-standard materials.',
      you: [
        'Confirm packaging preferences',
        'Track batch via dashboard',
      ],
      us: [
        'Harvest, grade & pack',
        'Issue quality certificate',
      ],
    },
    {
      number: '05',
      timeframe: 'Week 4–5',
      title: 'Shipping & delivery',
      description:
        'We handle all export documentation, customs clearance, and freight. Tracking details are shared with you and your broker.',
      you: [
        'Receive shipping documents',
        'Track container to port',
      ],
      us: [
        'Clear customs & load',
        'Share BOL, COO, phytosanitary',
      ],
    },
  ]
  
  /* -------- Deliverables data -------- */
  const deliverables = [
    { title: 'Commercial Invoice', description: 'Standard export invoice with all customs details.', icon: icons.doc },
    { title: 'Certificate of Origin', description: 'Issued by Nigerian Export Promotion Council.', icon: icons.map },
    { title: 'Phytosanitary Cert', description: 'Compliance with destination-country plant health rules.', icon: icons.shield },
    { title: 'Quality Certificate', description: 'Independent lab report on grading and moisture.', icon: icons.qr },
    { title: 'Bill of Lading', description: 'Full ocean freight documentation.', icon: icons.ship },
    { title: 'Packing List', description: 'Detailed breakdown of every pallet and drum.', icon: icons.box },
  ]
  
  /* -------- Refs -------- */
  const sectionRef          = ref<HTMLElement | null>(null)
  const eyebrowRef          = ref<HTMLElement | null>(null)
  const headingRef          = ref<HTMLElement | null>(null)
  const descRef             = ref<HTMLElement | null>(null)
  const timelineWrapRef     = ref<HTMLElement | null>(null)
  const trackRef            = ref<HTMLElement | null>(null)
  const progressRef         = ref<HTMLElement | null>(null)
  const deliverablesRef     = ref<HTMLElement | null>(null)
  const deliverablesGridRef = ref<HTMLElement | null>(null)
  const noteRef             = ref<HTMLElement | null>(null)
  const ctaRef              = ref<HTMLElement | null>(null)
  const cardRefs: HTMLElement[] = []
  const deliverableRefs: HTMLElement[] = []
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  let horizontalST: ScrollTrigger | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value, ...cardRefs,
         deliverablesRef.value, noteRef.value, ctaRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0 }
      )
      if (progressRef.value) gsap.set(progressRef.value, { scaleX: 1 })
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
  
      /* --- Card entrance --- */
      const cards = cardRefs.filter(Boolean)
      if (cards.length) {
        gsap.from(cards, {
          y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: timelineWrapRef.value, start: 'top 82%' },
        })
      }
  
      /* --- Progress bar (desktop) --- */
      if (progressRef.value) {
        gsap.to(progressRef.value, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineWrapRef.value,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        })
      }
  
      /* --- Deliverables header + grid --- */
      gsap.from(deliverablesRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: deliverablesRef.value, start: 'top 85%' },
      })
  
      const delivs = deliverableRefs.filter(Boolean)
      if (delivs.length) {
        gsap.from(delivs, {
          y: 25, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: deliverablesGridRef.value, start: 'top 82%' },
        })
      }
  
      /* --- Note --- */
      gsap.from(noteRef.value, {
        y: 24, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: noteRef.value, start: 'top 88%' },
      })
  
      /* --- CTA --- */
      gsap.from(ctaRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => {
    ctx?.revert()
    horizontalST?.kill()
  })
  </script>
  
  <style scoped>
  .step-card {
    will-change: transform;
  }
  </style>