<template>
    <section
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg))] overflow-hidden"
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
              Volume Pricing
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              The more you order,<br />
              <span class="text-leaf-500">the better the price.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
              All prices are FOB Lagos unless otherwise agreed. Volume breaks are
              automatic — no negotiation required. Custom volumes and long-term
              contracts available on request.
            </p>
          </div>
        </div>
  
        <!-- ============ TIER CARDS (visual overview) ============ -->
        <div
          ref="cardsRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-14"
        >
          <article
            v-for="(tier, i) in product.pricingTiers"
            :key="tier.qty"
            class="tier-card group relative flex flex-col
                   rounded-2xl p-6
                   bg-[rgb(var(--surface))]
                   border transition-all duration-500
                   hover:-translate-y-1.5"
            :class="isBestValue(i)
              ? 'border-leaf-500 shadow-[0_20px_45px_-15px_rgba(46,125,50,0.35)]'
              : 'border-[rgb(var(--border)/0.08)] hover:border-leaf-500/30 hover:shadow-[0_20px_40px_-18px_rgba(46,125,50,0.25)]'"
          >
            <!-- Best value badge -->
            <div
              v-if="isBestValue(i)"
              class="absolute -top-3 left-1/2 -translate-x-1/2
                     px-3 py-1 rounded-full
                     bg-leaf-500 text-white
                     text-[0.62rem] font-extrabold tracking-wider uppercase
                     shadow-md whitespace-nowrap"
            >
              Best Value
            </div>
  
            <!-- Tier label -->
            <div
              class="inline-flex items-center gap-2 self-start
                     px-2.5 py-1 rounded-md mb-4
                     text-[0.68rem] font-bold uppercase tracking-wider"
              :class="isBestValue(i)
                ? 'bg-leaf-500/15 text-leaf-700 dark:text-leaf-400'
                : 'bg-[rgb(var(--bg-alt))] text-[rgb(var(--text-muted))]'"
            >
              {{ tierLabels[i] || `Tier ${i + 1}` }}
            </div>
  
            <!-- Quantity -->
            <div class="font-display font-bold text-[rgb(var(--text))]
                        text-[1.05rem] leading-tight mb-3">
              {{ tier.qty }}
            </div>
  
            <!-- Price -->
            <div class="flex items-baseline gap-1.5 mb-2">
              <span
                class="font-display font-extrabold leading-none
                       tracking-[-0.03em] tabular-nums"
                :class="[
                  'text-[clamp(1.65rem,3vw,2rem)]',
                  isBestValue(i)
                    ? 'text-leaf-600 dark:text-leaf-400'
                    : 'text-[rgb(var(--text))]',
                ]"
              >
                {{ tier.price }}
              </span>
            </div>
  
            <!-- Savings note -->
            <div
              v-if="tier.note"
              class="inline-flex items-center gap-1.5 self-start
                     px-2.5 py-1 rounded-full mb-6
                     text-[0.68rem] font-bold tracking-wide"
              :class="tier.note.includes('Best')
                ? 'bg-harvest-500/15 text-harvest-700 dark:text-harvest-400'
                : tier.note.includes('Save')
                  ? 'bg-leaf-500/15 text-leaf-700 dark:text-leaf-400'
                  : 'bg-[rgb(var(--bg-alt))] text-[rgb(var(--text-muted))]'"
            >
              <span
                class="w-1 h-1 rounded-full"
                :class="tier.note.includes('Best')
                  ? 'bg-harvest-500'
                  : tier.note.includes('Save')
                    ? 'bg-leaf-500'
                    : 'bg-[rgb(var(--text-muted))]'"
              />
              {{ tier.note }}
            </div>
  
            <!-- Spacer -->
            <div class="flex-1" />
  
            <!-- CTA -->
            <NuxtLink
              :to="`/contact?type=buyer&product=${product.slug}&tier=${encodeURIComponent(tier.qty)}&action=quote`"
              class="btn w-full justify-center !py-3 !text-[0.85rem]"
              :class="isBestValue(i)
                ? 'bg-leaf-500 text-white font-semibold hover:bg-leaf-600'
                : `bg-[rgb(var(--bg-alt))] border border-[rgb(var(--border)/0.15)]
                   text-[rgb(var(--text))] font-semibold
                   hover:border-leaf-500 hover:text-leaf-600
                   dark:hover:text-leaf-400`"
            >
              Get This Price
            </NuxtLink>
          </article>
        </div>
  
        <!-- ============ DETAILED TERMS CARD ============ -->
        <div
          ref="termsRef"
          class="rounded-2xl overflow-hidden
                 bg-[rgb(var(--surface))]
                 border border-[rgb(var(--border)/0.08)]"
        >
          <!-- Header row -->
          <div
            class="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 lg:p-8
                   bg-[rgb(var(--bg-alt))]"
          >
            <div>
              <div class="text-[0.72rem] uppercase tracking-wider
                          font-bold text-[rgb(var(--text-muted))] mb-1.5">
                Currency
              </div>
              <div class="font-display font-bold text-[rgb(var(--text))]
                          text-[0.95rem]">
                USD (other on request)
              </div>
            </div>
            <div>
              <div class="text-[0.72rem] uppercase tracking-wider
                          font-bold text-[rgb(var(--text-muted))] mb-1.5">
                Terms
              </div>
              <div class="font-display font-bold text-[rgb(var(--text))]
                          text-[0.95rem]">
                FOB Lagos
              </div>
            </div>
            <div>
              <div class="text-[0.72rem] uppercase tracking-wider
                          font-bold text-[rgb(var(--text-muted))] mb-1.5">
                Quote Validity
              </div>
              <div class="font-display font-bold text-[rgb(var(--text))]
                          text-[0.95rem]">
                30 days from issue
              </div>
            </div>
          </div>
  
          <!-- Terms rows -->
          <div>
            <div
              v-for="(term, i) in paymentTerms"
              :key="term.label"
              class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6
                     p-5 sm:px-8
                     transition-colors duration-200
                     hover:bg-[rgb(var(--bg-alt)/0.5)]"
              :class="i < paymentTerms.length - 1
                ? 'border-b border-[rgb(var(--border)/0.06)]'
                : ''"
            >
              <div class="flex items-center gap-3 sm:col-span-1">
                <span
                  class="shrink-0 grid place-items-center w-8 h-8 rounded-lg
                         bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                  v-html="term.icon"
                />
                <span class="text-[rgb(var(--text))] text-[0.92rem] font-semibold">
                  {{ term.label }}
                </span>
              </div>
              <div class="text-[rgb(var(--text-muted))] text-[0.92rem]
                          leading-relaxed sm:col-span-2">
                {{ term.value }}
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ CUSTOM QUOTE STRIP ============ -->
        <div
          ref="customRef"
          class="mt-10 rounded-2xl p-6 lg:p-8
                 bg-gradient-to-br from-leaf-500/8 to-harvest-500/8
                 border border-leaf-500/20
                 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          <div class="lg:col-span-8 flex items-start gap-5">
            <span
              class="shrink-0 grid place-items-center w-12 h-12 rounded-xl
                     bg-leaf-500 text-white
                     shadow-[0_10px_24px_-8px_rgba(46,125,50,0.5)]"
              v-html="negotiateIcon"
            />
            <div>
              <div class="font-display font-bold text-[rgb(var(--text))]
                          text-[1.05rem] leading-tight mb-1.5">
                Need a custom volume or long-term contract?
              </div>
              <p class="text-[rgb(var(--text-muted))] text-[0.92rem] leading-relaxed max-w-xl">
                We work with industrial buyers, distributors, and exporters on
                tailored supply agreements — including scheduled deliveries,
                private-label packaging, and locked-in pricing for 6–12 months.
              </p>
            </div>
          </div>
  
          <div class="lg:col-span-4 flex flex-col sm:flex-row lg:justify-end gap-3">
            <NuxtLink
              :to="`/contact?type=buyer&product=${product.slug}&action=custom`"
              class="btn !px-5 !py-3
                     bg-leaf-500 text-white font-semibold
                     hover:bg-leaf-600 hover:-translate-y-0.5
                     shadow-[0_8px_20px_-8px_rgba(46,125,50,0.5)]"
            >
              Discuss Custom Terms
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
  
        <!-- ============ FOOTNOTE ============ -->
        <div
          ref="footnoteRef"
          class="mt-8 text-center max-w-3xl mx-auto
                 text-[0.78rem] text-[rgb(var(--text-muted))] leading-relaxed"
        >
          <p>
            Prices are indicative and may vary with market conditions, freight
            rates, and destination. Request a formal quotation for binding pricing.
            Payment terms and escrow options available for orders over
            <strong class="text-[rgb(var(--text))]">100 tonnes</strong>.
          </p>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import type { Product } from '~/data/products'
  
  gsap.registerPlugin(ScrollTrigger)
  
  const props = defineProps<{ product: Product }>()
  
  /* -------- Tier labels (semantic names for each tier) -------- */
  const tierLabels = ['MOQ', 'Wholesale', 'Container', 'Bulk Contract']
  
  /* -------- Best value = the 3rd tier (container = sweet spot) -------- */
  const isBestValue = (i: number) => i === 2
  
  /* -------- Icons for payment terms -------- */
  const icons = {
    payment: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/></svg>`,
    bank: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>`,
    doc: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
    clock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    ship: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21h20M5 21V10l7-5 7 5v11M12 10v11M9 13h6"/></svg>`,
  }
  
  const negotiateIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/></svg>`
  
  /* -------- Payment terms -------- */
  const paymentTerms = [
    {
      label: 'Payment Methods',
      value: 'Bank transfer (TT), Letter of Credit (LC at sight), or Escrow via approved partners. USD, EUR, or NGN accepted.',
      icon: icons.payment,
    },
    {
      label: 'Deposit Structure',
      value: '30% deposit to confirm order · 70% before shipment against Bill of Lading copy. Flexible for recurring buyers.',
      icon: icons.bank,
    },
    {
      label: 'Documentation',
      value: 'All export documents included: Commercial Invoice, Certificate of Origin, Phytosanitary Certificate, Bill of Lading, Packing List, Quality Certificate.',
      icon: icons.doc,
    },
    {
      label: 'Lead Time',
      value: `${props.product.leadTime} from order confirmation and deposit receipt. Expedited processing available for a small surcharge.`,
      icon: icons.clock,
    },
    {
      label: 'Shipping Terms',
      value: 'FOB Lagos by default. CIF, CFR, and DAP available on request for select destination ports. Full Incoterms 2020 compliance.',
      icon: icons.ship,
    },
  ]
  
  /* -------- Refs -------- */
  const sectionRef  = ref<HTMLElement | null>(null)
  const eyebrowRef  = ref<HTMLElement | null>(null)
  const headingRef  = ref<HTMLElement | null>(null)
  const descRef     = ref<HTMLElement | null>(null)
  const cardsRef    = ref<HTMLElement | null>(null)
  const termsRef    = ref<HTMLElement | null>(null)
  const customRef   = ref<HTMLElement | null>(null)
  const footnoteRef = ref<HTMLElement | null>(null)
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    /* Query the tier cards once — no ref array needed */
    const cardEls = sectionRef.value?.querySelectorAll<HTMLElement>('.tier-card') ?? []
  
    if (prefersReduced) {
      gsap.set(
        [
          eyebrowRef.value,
          headingRef.value,
          descRef.value,
          ...Array.from(cardEls),
          termsRef.value,
          customRef.value,
          footnoteRef.value,
        ].filter(Boolean),
        { autoAlpha: 1, y: 0, scale: 1 }
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
  
      /* --- Tier cards stagger --- */
      if (cardEls.length) {
        gsap.from(cardEls, {
          y: 50, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.value, start: 'top 80%' },
        })
      }
  
      /* --- Terms card --- */
      gsap.from(termsRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: termsRef.value, start: 'top 85%' },
      })
  
      /* --- Custom quote strip --- */
      gsap.from(customRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: customRef.value, start: 'top 88%' },
      })
  
      /* --- Footnote --- */
      gsap.from(footnoteRef.value, {
        y: 20, autoAlpha: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: footnoteRef.value, start: 'top 92%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>
  
  <style scoped>
  .tier-card {
    will-change: transform;
  }
  </style>