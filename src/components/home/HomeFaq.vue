<template>
    <section
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg))] overflow-hidden"
    >
      <!-- Ambient blobs -->
      <div class="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full
                  bg-leaf-500/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div class="absolute -bottom-32 left-0 w-[420px] h-[420px] rounded-full
                  bg-harvest-500/5 blur-3xl pointer-events-none" aria-hidden="true" />
  
      <div class="container-page relative">
  
        <!-- ============ HEADER ============ -->
        <div class="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
          <div
            ref="eyebrowRef"
            class="inline-flex items-center gap-2.5 mb-5
                   px-3.5 py-1.5 rounded-full
                   bg-leaf-500/10 border border-leaf-500/20
                   text-leaf-600 dark:text-leaf-400
                   text-[0.78rem] font-semibold tracking-wider uppercase"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
            Frequently Asked
          </div>
  
          <h2
            ref="headingRef"
            class="font-display font-extrabold
                   text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                   tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
          >
            Everything you need<br />
            <span class="text-leaf-500">before you commit.</span>
          </h2>
  
          <p
            ref="descRef"
            class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed"
          >
            Straight answers about our produce, our process, and our partnerships.
            Can't find what you're looking for? Our team replies within 24 hours.
          </p>
        </div>
  
        <!-- ============ ACCORDION ============ -->
        <div
          ref="accordionRef"
          class="max-w-3xl mx-auto divide-y divide-[rgb(var(--border)/0.1)]
                 border-y border-[rgb(var(--border)/0.1)]"
        >
          <div
            v-for="(faq, i) in faqs"
            :key="faq.q"
            :ref="(el) => { if (el) itemRefs[i] = el as HTMLElement }"
            class="faq-item group"
          >
            <!-- Question row -->
            <button
              type="button"
              class="w-full flex items-start gap-4 lg:gap-6
                     py-6 lg:py-7 text-left
                     transition-colors duration-300
                     hover:bg-[rgb(var(--bg-alt)/0.5)]
                     px-2 lg:px-3 rounded-lg"
              :aria-expanded="openIndex === i"
              :aria-controls="`faq-panel-${i}`"
              @click="toggle(i)"
            >
              <!-- Number -->
              <span
                class="shrink-0 font-display font-bold text-[0.85rem] lg:text-[0.9rem]
                       pt-1 tabular-nums
                       transition-colors duration-300"
                :class="openIndex === i
                  ? 'text-harvest-500'
                  : 'text-[rgb(var(--text-muted))] group-hover:text-leaf-600 dark:group-hover:text-leaf-400'"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </span>
  
              <!-- Question -->
              <span
                class="flex-1 font-display font-semibold
                       text-[1.02rem] lg:text-[1.12rem] leading-snug
                       transition-colors duration-300"
                :class="openIndex === i
                  ? 'text-[rgb(var(--text))]'
                  : 'text-[rgb(var(--text))] group-hover:text-leaf-600 dark:group-hover:text-leaf-400'"
              >
                {{ faq.q }}
              </span>
  
              <!-- Chevron -->
              <span
                class="shrink-0 grid place-items-center w-9 h-9 rounded-full
                       border transition-all duration-400"
                :class="openIndex === i
                  ? 'bg-harvest-500 border-harvest-500 text-white rotate-180'
                  : 'border-[rgb(var(--border)/0.15)] text-[rgb(var(--text-muted))] group-hover:border-leaf-500 group-hover:text-leaf-600 dark:group-hover:text-leaf-400'"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </span>
            </button>
  
            <!-- Answer panel -->
            <div
              :id="`faq-panel-${i}`"
              :ref="(el) => { if (el) panelRefs[i] = el as HTMLElement }"
              class="overflow-hidden"
              :style="{ height: 0 }"
              role="region"
            >
              <div class="pl-11 lg:pl-14 pr-12 pb-7 pt-1">
                <p class="text-[rgb(var(--text-muted))] text-[0.98rem] leading-relaxed">
                  {{ faq.a }}
                </p>
  
                <!-- Optional per-item link -->
                <NuxtLink
                  v-if="faq.link"
                  :to="faq.link.href"
                  class="inline-flex items-center gap-1.5 mt-4
                         text-leaf-600 dark:text-leaf-400
                         font-semibold text-[0.9rem]
                         hover:gap-2.5 transition-all duration-200"
                >
                  {{ faq.link.label }}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ STILL HAVE QUESTIONS ============ -->
        <div
          ref="ctaRef"
          class="max-w-3xl mx-auto mt-14 lg:mt-16
                 rounded-2xl
                 bg-gradient-to-br from-leaf-500 to-leaf-700
                 p-7 lg:p-9
                 relative overflow-hidden
                 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <!-- Decorative circles -->
          <div class="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
          <div class="absolute -right-4 top-1/2 w-20 h-20 rounded-full bg-white/10" />
  
          <div class="relative z-10">
            <div class="text-white/80 text-[0.8rem] font-semibold uppercase tracking-wider mb-1.5">
              Still have questions?
            </div>
            <div class="text-white font-display font-bold text-[1.25rem] lg:text-[1.5rem] leading-tight max-w-md">
              Talk to a real person — usually within 24 hours.
            </div>
          </div>
  
          <div class="relative z-10 flex flex-wrap gap-3">
            <NuxtLink
              to="/contact"
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
                     border border-white/25 text-white
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
  
  /* -------- Refs -------- */
  const sectionRef   = ref<HTMLElement | null>(null)
  const eyebrowRef   = ref<HTMLElement | null>(null)
  const headingRef   = ref<HTMLElement | null>(null)
  const descRef      = ref<HTMLElement | null>(null)
  const accordionRef = ref<HTMLElement | null>(null)
  const ctaRef       = ref<HTMLElement | null>(null)
  const itemRefs: HTMLElement[] = []
  const panelRefs: HTMLElement[] = []
  
  /* -------- State -------- */
  const openIndex = ref<number | null>(0)
  
  /* -------- Data -------- */
  interface Faq {
    q: string
    a: string
    link?: { label: string; href: string }
  }
  
  const faqs: Faq[] = [
    {
      q: 'How can you sell produce if most crops are still maturing?',
      a: 'We operate a portfolio of estates at different maturity stages. While our palm and vegetable estates are in full harvest today, our cocoa, rubber, and plantain estates are still maturing. This staggered model lets us sell now while building the next wave of produce — and it gives pre-order investors priority access to those future harvests.',
      link: { label: 'See our harvest calendar', href: '/plantations' },
    },
    {
      q: 'What does "reserve your harvest" actually mean?',
      a: 'Pre-ordering locks in a quantity and price for a future harvest — typically 3–18 months ahead. Your reservation is contractually guaranteed; if for any reason the harvest falls short, your deposit is either refunded in full or rolled to the next cycle, your choice.',
      link: { label: 'View reservation terms', href: '/invest' },
    },
    {
      q: 'How do you guarantee the quality of exported produce?',
      a: 'Every batch is harvested at peak ripeness, graded on-site, and inspected against destination-country standards before packing. We hold Rainforest Alliance, Fairtrade, and ISO 14001 certifications, and work with independent auditors (SGS) for export-bound shipments.',
    },
    {
      q: 'Can I visit the plantations in person?',
      a: 'Yes — and we encourage it. Estate-tier investors and bulk buyers get scheduled on-site visits twice a year. Other partners can book a virtual tour with live drone footage and our agronomist on the call. Reach out and we\'ll arrange it.',
      link: { label: 'Book a tour', href: '/contact' },
    },
    {
      q: 'What are the risks of investing in long-gestation agriculture?',
      a: 'The main risks are weather, disease, and market price fluctuation. We manage them through crop diversification, insurance on every estate, and long-term contracts that lock in purchase prices. Our investor prospectus outlines all risk factors and historical variance in detail.',
      link: { label: 'Download prospectus', href: '/legal/prospectus' },
    },
    {
      q: 'Do you work with smallholder farmers or only large investors?',
      a: 'Both. Our outgrower program partners with 200+ smallholder farmers across Ondo, Ogun, and Cross River — providing certified seedlings, training, and guaranteed purchase at fair-trade prices. On the investment side, our Seedling package starts at $5,000.',
    },
  ]
  
  /* ---------------------------------------------------------------
     TOGGLE — GSAP height animation (smooth)
     --------------------------------------------------------------- */
  const toggle = (index: number) => {
    const panel = panelRefs[index]
    if (!panel) return
  
    const isOpening = openIndex.value !== index
  
    // Close currently open panel
    if (openIndex.value !== null && openIndex.value !== index) {
      const current = panelRefs[openIndex.value]
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
      // Set autoAlpha before animating height (text becomes visible immediately)
      gsap.set(panel, { autoAlpha: 1, height: 'auto' })
      const targetHeight = panel.offsetHeight
  
      gsap.fromTo(panel,
        { height: 0 },
        {
          height: targetHeight,
          duration: 0.45,
          ease: 'power2.out',
          onComplete: () => {
            gsap.set(panel, { height: 'auto' }) // allow reflow if content changes
          },
        }
      )
  
      openIndex.value = index
    } else {
      // Collapse if clicking the open item
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
     GSAP — reveals + initial open panel
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    /* Open the first panel by default (no animation) */
    if (panelRefs[0]) {
      const p = panelRefs[0]
      gsap.set(p, { autoAlpha: 1, height: 'auto' })
    }
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         ...itemRefs, ctaRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0 }
      )
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
  
      /* --- FAQ items stagger --- */
      const items = itemRefs.filter(Boolean)
      if (items.length) {
        gsap.from(items, {
          y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: accordionRef.value, start: 'top 82%' },
        })
      }
  
      /* --- CTA --- */
      gsap.from(ctaRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => {
    ctx?.revert()
  })
  </script>
  
  <style scoped>
  .faq-item {
    position: relative;
  }
  </style>