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
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 lg:mb-16 items-end">
          <div class="lg:col-span-7">
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-5
                     px-3.5 py-1.5 rounded-full
                     bg-leaf-500/10 border border-leaf-500/20
                     text-leaf-600 dark:text-leaf-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
              Buying Questions
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              Everything you'd want<br />
              <span class="text-leaf-500">to ask before reserving.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
              Straight answers about pre-orders, deposits, delivery, and what
              happens if plans change. If your question isn't here, our team
              replies within 24 hours.
            </p>
          </div>
        </div>
  
        <!-- ============ FAQ GRID ============ -->
        <div
          ref="faqGridRef"
          class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6"
        >
          <div
            v-for="(faq, i) in faqs"
            :key="faq.q"
            class="faq-card rounded-2xl overflow-hidden
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]
                   transition-all duration-300
                   hover:border-leaf-500/25"
            :class="{ 'border-leaf-500/30': openIndex === i }"
          >
            <!-- Question button -->
            <button
              type="button"
              class="w-full flex items-start gap-4 p-5 lg:p-6 text-left
                     transition-colors duration-300
                     hover:bg-[rgb(var(--bg-alt)/0.5)]"
              :aria-expanded="openIndex === i"
              :aria-controls="`faq-panel-${i}`"
              @click="toggle(i)"
            >
              <!-- Number -->
              <span
                class="shrink-0 font-display font-bold text-[0.8rem]
                       pt-1 tabular-nums transition-colors duration-300"
                :class="openIndex === i
                  ? 'text-harvest-500'
                  : 'text-[rgb(var(--text-muted))]'"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </span>
  
              <!-- Question -->
              <span
                class="flex-1 font-display font-semibold
                       text-[1rem] lg:text-[1.05rem] leading-snug
                       text-[rgb(var(--text))]"
              >
                {{ faq.q }}
              </span>
  
              <!-- Chevron -->
              <span
                class="shrink-0 grid place-items-center w-8 h-8 rounded-full
                       border transition-all duration-400 mt-0.5"
                :class="openIndex === i
                  ? 'bg-harvest-500 border-harvest-500 text-white rotate-180'
                  : 'border-[rgb(var(--border)/0.15)] text-[rgb(var(--text-muted))]'"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.5"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </span>
            </button>
  
            <!-- Answer panel -->
            <div
              :id="`faq-panel-${i}`"
              :data-faq-index="i"
              class="faq-panel overflow-hidden"
              :style="{ height: 0 }"
              role="region"
            >
              <div class="pl-12 lg:pl-14 pr-6 pb-6 pt-1">
                <p class="text-[rgb(var(--text-muted))] text-[0.94rem] leading-relaxed">
                  {{ faq.a }}
                </p>
  
                <NuxtLink
                  v-if="faq.link"
                  :to="faq.link.href"
                  class="inline-flex items-center gap-1.5 mt-4
                         text-leaf-600 dark:text-leaf-400
                         font-semibold text-[0.88rem]
                         hover:gap-2.5 transition-all duration-200"
                >
                  {{ faq.link.label }}
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
  
        <!-- ============ CATEGORY CHIPS ============ -->
        <div
          ref="categoriesRef"
          class="mt-12 flex flex-wrap items-center justify-center gap-2.5"
        >
          <span
            class="text-[rgb(var(--text-muted))] text-[0.82rem]
                   font-medium mr-1 hidden sm:block"
          >
            Can't find your question?
          </span>
          <NuxtLink
            v-for="cat in categories"
            :key="cat.label"
            :to="cat.href"
            class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.12)]
                   text-[rgb(var(--text))] text-[0.85rem] font-semibold
                   hover:border-leaf-500 hover:text-leaf-600
                   dark:hover:text-leaf-400
                   hover:-translate-y-0.5
                   transition-all duration-300"
          >
            <span
              class="grid place-items-center w-4 h-4"
              v-html="cat.icon"
            />
            {{ cat.label }}
          </NuxtLink>
        </div>
  
        <!-- ============ BOTTOM CTA ============ -->
        <div
          ref="ctaRef"
          class="mt-14 lg:mt-20 max-w-3xl mx-auto
                 rounded-2xl p-7 lg:p-9
                 bg-gradient-to-br from-leaf-500 to-leaf-700
                 relative overflow-hidden
                 flex flex-col md:flex-row md:items-center
                 md:justify-between gap-6"
        >
          <div class="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
          <div class="absolute -right-4 top-1/2 w-20 h-20 rounded-full bg-white/10" />
  
          <div class="relative z-10">
            <div class="text-white/80 text-[0.78rem] font-semibold
                        uppercase tracking-wider mb-1.5">
              Still have questions?
            </div>
            <div class="text-white font-display font-bold
                        text-[1.35rem] lg:text-[1.6rem] leading-tight max-w-lg">
              Talk to a buyer relations manager — usually within 24 hours.
            </div>
          </div>
  
          <div class="relative z-10 flex flex-wrap gap-3 shrink-0">
            <NuxtLink
              to="/contact?type=buyer"
              class="btn !px-5 !py-3
                     bg-white text-leaf-700 font-semibold
                     hover:bg-white/95 hover:-translate-y-0.5
                     shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
            >
              Contact Us
            </NuxtLink>
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noopener"
              class="btn !px-5 !py-3
                     bg-white/10 backdrop-blur-md
                     border border-white/25 text-white font-semibold
                     hover:bg-white/20"
            >
              WhatsApp
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
  const icons = {
    truck: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
    shield: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    doc: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
  }
  
  /* -------- FAQs -------- */
  interface Faq {
    q: string
    a: string
    link?: { label: string; href: string }
  }
  
  const faqs: Faq[] = [
    {
      q: 'Can I reserve without paying a deposit?',
      a: 'Yes — you can join our harvest alerts list for free and be notified 30 days before any window opens. To lock in a specific volume and price, however, a deposit is required. Standard deposit is 25–30% of the order value depending on the crop and tier.',
      link: { label: 'Join the alerts list', href: '/contact?type=buyer&action=notify' },
    },
    {
      q: 'What happens if the harvest is delayed or falls short?',
      a: 'Agriculture is inherently variable, so we plan conservatively. If a harvest delivers less than the reserved volume, we first reduce pro-rata across all reservations. If a harvest is fully delayed, your deposit is 100% refundable within 14 days, or automatically rolled to the next available window — your choice.',
      link: { label: 'Read our reservation terms', href: '/legal/terms' },
    },
    {
      q: 'How is the price locked in?',
      a: 'The price shown on each harvest card is fixed at the moment you confirm your reservation. We do not adjust reservation pricing for market movements. The only variable is freight, which is quoted separately at the time of shipment and depends on your destination port and Incoterms.',
      link: { label: 'See shipping terms', href: '/products' },
    },
    {
      q: 'Can I reserve volume from multiple harvests at once?',
      a: 'Absolutely — and we encourage it. Buyers who reserve across multiple crops and windows get preferred pricing, consolidated shipping, and a single account manager. Tell us your total sourcing plan and we\'ll structure the reservations together.',
      link: { label: 'Talk to our team', href: '/contact?type=buyer' },
    },
    {
      q: 'What if I need to cancel my reservation?',
      a: 'Deposits are fully refundable up to 30 days before the reserve-by deadline. Between 30 and 7 days before, 50% is refundable. Within 7 days of the harvest window opening, deposits become non-refundable, as production and logistics commitments have already been made on your behalf.',
    },
    {
      q: 'Do you offer reservations for small volumes?',
      a: 'Yes. Our standard harvest cards list bulk volumes, but we reserve allocations for smaller buyers as well. For orders under the listed minimum, contact us directly and we\'ll route you to our small-lot program (typically 1–5 tonnes per crop).',
      link: { label: 'Request small-lot access', href: '/contact?type=buyer&action=small-lot' },
    },
  ]
  
  /* -------- Categories -------- */
  const categories = [
    { label: 'Shipping & logistics', href: '/contact?type=buyer&topic=shipping', icon: icons.truck },
    { label: 'Payment & deposits',   href: '/contact?type=buyer&topic=payment', icon: icons.shield },
    { label: 'Legal & terms',        href: '/legal/terms',                        icon: icons.doc },
  ]
  
  /* -------- Refs -------- */
  const sectionRef    = ref<HTMLElement | null>(null)
  const eyebrowRef    = ref<HTMLElement | null>(null)
  const headingRef    = ref<HTMLElement | null>(null)
  const descRef       = ref<HTMLElement | null>(null)
  const faqGridRef    = ref<HTMLElement | null>(null)
  const categoriesRef = ref<HTMLElement | null>(null)
  const ctaRef        = ref<HTMLElement | null>(null)
  
  /* -------- State -------- */
  const openIndex = ref<number | null>(0)
  
  /* ✅ THE FIX: use a plain (non-reactive) Map to hold panel elements.
     This avoids Vue's hydration-time ref assignment entirely. */
  const panelMap = new Map<number, HTMLElement>()
  
  /* Register panel elements when they mount — using a plain callback (NOT a ref binding) */
  const registerPanel = (index: number, el: Element | ComponentPublicInstance | null) => {
    if (el && el instanceof HTMLElement) {
      panelMap.set(index, el)
    }
  }
  
  /* ---------------------------------------------------------------
     TOGGLE — GSAP height animation
     --------------------------------------------------------------- */
  const toggle = (index: number) => {
    const panel = panelMap.get(index)
    if (!panel) return
  
    const isOpening = openIndex.value !== index
  
    // Close currently open panel
    if (openIndex.value !== null && openIndex.value !== index) {
      const current = panelMap.get(openIndex.value)
      if (current) {
        gsap.to(current, {
          height: 0,
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.set(current, { height: 0, autoAlpha: 0 })
          },
        })
      }
    }
  
    if (isOpening) {
      gsap.set(panel, { autoAlpha: 1, height: 'auto' })
      const targetHeight = panel.offsetHeight
  
      gsap.fromTo(panel,
        { height: 0 },
        {
          height: targetHeight,
          duration: 0.45,
          ease: 'power2.out',
          onComplete: () => {
            gsap.set(panel, { height: 'auto' })
          },
        }
      )
  
      openIndex.value = index
    } else {
      gsap.to(panel, {
        height: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(panel, { height: 0, autoAlpha: 0 })
        },
      })
      openIndex.value = null
    }
  }
  
  /* ---------------------------------------------------------------
     GSAP — entrance + initial open panel
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    /* Query all FAQ panels + cards once */
    const panels = sectionRef.value?.querySelectorAll<HTMLElement>('.faq-panel') ?? []
    const cards  = sectionRef.value?.querySelectorAll<HTMLElement>('.faq-card') ?? []
  
    /* Populate the panel map from the DOM (by data-faq-index attribute) */
    panels.forEach((panel) => {
      const idx = Number(panel.dataset.faqIndex)
      if (!Number.isNaN(idx)) {
        panelMap.set(idx, panel)
      }
    })
  
    /* Open first panel immediately (no animation) */
    const firstPanel = panelMap.get(0)
    if (firstPanel) {
      gsap.set(firstPanel, { autoAlpha: 1, height: 'auto' })
    }
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         ...Array.from(cards), categoriesRef.value, ctaRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0 }
      )
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
  
      /* --- FAQ cards stagger --- */
      if (cards.length) {
        gsap.from(cards, {
          y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: faqGridRef.value, start: 'top 82%' },
        })
      }
  
      /* --- Categories --- */
      if (categoriesRef.value) {
        gsap.from(categoriesRef.value.children, {
          y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: categoriesRef.value, start: 'top 90%' },
        })
      }
  
      /* --- CTA --- */
      gsap.from(ctaRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => {
    ctx?.revert()
    panelMap.clear()
  })
  </script>
  
  <style scoped>
  .faq-card {
    will-change: border-color;
  }
  </style>