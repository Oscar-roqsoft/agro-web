<template>
    <section
      id="faq-grid"
      ref="sectionRef"
      class="relative py-20 lg:py-28 bg-[rgb(var(--bg-alt))] scroll-mt-24"
    >
      <div class="container-page">
  
        <!-- ============ HEADER ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 lg:mb-14 items-end">
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
              All Questions
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              Browse by topic,<br />
              <span class="text-leaf-500">search for anything.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
              Forty questions covering buying, investing, sustainability, and
              company operations. Use the tabs below or the search bar above to
              find exactly what you need.
            </p>
          </div>
        </div>
  
        <!-- ============ STICKY CATEGORY TABS ============ -->
        <div
          ref="tabsBarRef"
          class="sticky top-[76px] z-30 -mx-6 px-6 lg:mx-0 lg:px-0
                 py-4 mb-8 lg:mb-10
                 bg-[rgb(var(--bg-alt)/0.92)] backdrop-blur-md
                 border-b border-[rgb(var(--border)/0.08)]"
        >
          <div class="flex flex-col lg:flex-row lg:items-center gap-4">
  
            <!-- Category tabs -->
            <div class="flex-1 min-w-0">
              <div
                class="flex items-center gap-2 overflow-x-auto
                       [-ms-overflow-style:none] [scrollbar-width:none]
                       [&::-webkit-scrollbar]:hidden
                       pb-1 lg:pb-0"
              >
                <button
                  v-for="cat in categoriesWithAll"
                  :key="cat.slug"
                  type="button"
                  class="shrink-0 px-4 py-2.5 rounded-full
                         text-[0.85rem] font-semibold whitespace-nowrap
                         transition-all duration-300
                         inline-flex items-center gap-2"
                  :class="activeCategory === cat.slug
                    ? 'bg-leaf-500 text-white shadow-[0_4px_14px_-4px_rgba(46,125,50,0.5)]'
                    : 'bg-[rgb(var(--surface))] border border-[rgb(var(--border)/0.12)] text-[rgb(var(--text-muted))] hover:border-leaf-500/50 hover:text-[rgb(var(--text))]'"
                  @click="activeCategory = cat.slug"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full"
                    :class="activeCategory === cat.slug
                      ? 'bg-white'
                      : 'bg-[rgb(var(--text-muted)/0.4)]'"
                  />
                  {{ cat.label }}
                  <span
                    class="text-[0.72rem] opacity-70 tabular-nums"
                  >
                    {{ cat.count }}
                  </span>
                </button>
              </div>
            </div>
  
            <!-- Active search chip + reset -->
            <div class="flex items-center gap-3 shrink-0">
              <div
                v-if="searchQuery"
                class="inline-flex items-center gap-2
                       px-3 py-2 rounded-full
                       bg-leaf-500/10 border border-leaf-500/25
                       text-leaf-700 dark:text-leaf-400
                       text-[0.82rem] font-semibold"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
                <span class="max-w-[140px] truncate">"{{ searchQuery }}"</span>
                <button
                  type="button"
                  class="grid place-items-center w-4 h-4 rounded-full
                         hover:bg-leaf-500/20
                         transition-colors duration-200"
                  @click="searchQuery = ''"
                  aria-label="Clear search"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="3"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>
  
              <button
                v-if="hasActiveFilters"
                type="button"
                class="h-9 px-4 rounded-full
                       text-[0.82rem] font-semibold
                       text-[rgb(var(--text-muted))]
                       hover:text-leaf-600 dark:hover:text-leaf-400
                       transition-colors"
                @click="reset"
              >
                Reset
              </button>
            </div>
          </div>
  
          <!-- Result count -->
          <div class="mt-3 text-[0.82rem] text-[rgb(var(--text-muted))]">
            <span class="font-semibold text-[rgb(var(--text))]">
              {{ filteredFaqs.length }}
            </span>
            {{ filteredFaqs.length === 1 ? 'question' : 'questions' }}
            <span v-if="hasActiveFilters"> matching your filters</span>
          </div>
        </div>
  
        <!-- ============ FAQ LIST ============ -->
        <TransitionGroup
          tag="div"
          name="faq"
          class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-start"
        >
          <!-- Empty state -->
          <div
            v-if="!filteredFaqs.length"
            key="empty"
            class="col-span-full py-20 text-center rounded-2xl
                   border border-dashed border-[rgb(var(--border)/0.2)]"
          >
            <div
              class="grid place-items-center w-16 h-16 rounded-2xl mx-auto mb-5
                     bg-[rgb(var(--bg))] text-[rgb(var(--text-muted))]"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
            <h3 class="font-display font-bold text-[rgb(var(--text))]
                       text-[1.15rem] mb-2">
              No questions match your search
            </h3>
            <p class="text-[rgb(var(--text-muted))] text-[0.92rem] mb-6 max-w-sm mx-auto">
              Try a different term, or reach out to our team — we answer within
              24 hours.
            </p>
            <div class="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                class="btn !px-5 !py-3
                       bg-leaf-500 text-white font-semibold
                       hover:bg-leaf-600"
                @click="reset"
              >
                Reset Filters
              </button>
              <NuxtLink
                to="/contact"
                class="btn !px-5 !py-3
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.15)]
                       text-[rgb(var(--text))] font-semibold
                       hover:border-leaf-500 hover:text-leaf-600
                       dark:hover:text-leaf-400"
              >
                Contact Us
              </NuxtLink>
            </div>
          </div>
  
          <!-- FAQ cards -->
          <article
            v-for="(faq, i) in filteredFaqs"
            :key="faq.id"
            :id="`q-${faq.id}`"
            class="faq-card rounded-2xl overflow-hidden
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]
                   transition-all duration-300
                   hover:border-leaf-500/25
                   scroll-mt-32"
            :class="{ 'border-leaf-500/30': openId === faq.id }"
          >
            <!-- Question button -->
            <button
              type="button"
              class="w-full flex items-start gap-4 p-5 lg:p-6 text-left
                     transition-colors duration-300
                     hover:bg-[rgb(var(--bg-alt)/0.5)]"
              :aria-expanded="openId === faq.id"
              :aria-controls="`panel-${faq.id}`"
              @click="toggle(faq.id)"
            >
              <!-- Category dot -->
              <span
                class="shrink-0 grid place-items-center w-8 h-8 rounded-lg mt-0.5
                       transition-colors duration-300"
                :class="categoryBg(faq.category)"
                v-html="categoryIcon(faq.category)"
              />
  
              <!-- Question -->
              <span
                class="flex-1 font-display font-semibold
                       text-[1rem] lg:text-[1.05rem] leading-snug
                       text-[rgb(var(--text))]"
              >
                {{ faq.question }}
              </span>
  
              <!-- Chevron -->
              <span
                class="shrink-0 grid place-items-center w-8 h-8 rounded-full
                       border transition-all duration-400 mt-0.5"
                :class="openId === faq.id
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
              :id="`panel-${faq.id}`"
              :data-faq-id="faq.id"
              class="faq-panel overflow-hidden"
              :style="{ height: 0 }"
              role="region"
            >
              <div class="pl-[68px] lg:pl-[72px] pr-6 pb-6 pt-1">
                <p class="text-[rgb(var(--text-muted))] text-[0.94rem] leading-relaxed">
                  {{ faq.answer }}
                </p>
  
                <!-- Optional link -->
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
  
                <!-- Category tag -->
                <div class="mt-4 flex items-center gap-2">
                  <span
                    class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md
                           text-[0.68rem] font-bold uppercase tracking-wider
                           bg-[rgb(var(--bg-alt))]
                           text-[rgb(var(--text-muted))]"
                  >
                    <span
                      class="w-1 h-1 rounded-full"
                      :class="categoryDot(faq.category)"
                    />
                    {{ categoryLabel(faq.category) }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </TransitionGroup>
  
        <!-- ============ LOAD MORE (if needed) ============ -->
        <div
          v-if="filteredFaqs.length > 20 && !hasActiveFilters"
          ref="loadMoreRef"
          class="mt-12 text-center"
        >
          <button
            type="button"
            class="btn !px-7 !py-3.5
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.15)]
                   text-[rgb(var(--text))] font-semibold
                   hover:border-leaf-500 hover:text-leaf-600 dark:hover:text-leaf-400
                   transition-all duration-300"
          >
            Load More Questions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.4"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </button>
        </div>
  
        <!-- ============ BOTTOM CTA STRIP ============ -->
        <div
          ref="ctaRef"
          class="mt-14 lg:mt-20 rounded-3xl
                 bg-gradient-to-br from-leaf-600 via-leaf-700 to-leaf-800
                 relative overflow-hidden
                 p-7 lg:p-10
                 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div class="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/5" />
          <div class="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5" />
  
          <div class="lg:col-span-7 relative z-10">
            <div
              class="inline-flex items-center gap-2.5 mb-5
                     px-3.5 py-1.5 rounded-full
                     bg-white/10 backdrop-blur-md border border-white/20
                     text-harvest-300
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-harvest-400 animate-pulse" />
              Still Can't Find It?
            </div>
  
            <h3
              class="font-display font-extrabold text-white
                     text-[clamp(1.35rem,2.5vw,1.85rem)] leading-tight
                     tracking-[-0.02em] mb-4 max-w-xl"
            >
              Ask us directly — no bots,<br class="hidden sm:block" />
              a real person replies.
            </h3>
  
            <p class="text-white/75 text-[0.98rem] leading-relaxed max-w-lg">
              Every inquiry gets read by a member of our team. Typical reply time
              is under 24 hours, and complex questions get routed to the right
              specialist.
            </p>
          </div>
  
          <div class="lg:col-span-5 relative z-10 flex flex-col sm:flex-row lg:flex-col lg:justify-end gap-3">
            <NuxtLink
              to="/contact"
              class="btn !px-6 !py-3.5
                     bg-white text-leaf-700 font-semibold
                     hover:bg-white/95 hover:-translate-y-0.5
                     shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
            >
              Send a Question
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
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
                     bg-white/10 backdrop-blur-md
                     border border-white/25 text-white font-semibold
                     hover:bg-white/20 hover:border-white/40"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.83-1.32l-.35-.2-3.6.94.96-3.5-.23-.36a9.5 9.5 0 1 1 8.06 4.44zm8.07-17.55A11.4 11.4 0 0 0 12.04.5 11.5 11.5 0 0 0 2.1 17.85L.5 23.5l5.8-1.52a11.5 11.5 0 0 0 5.74 1.52h.01a11.5 11.5 0 0 0 8.06-19.55z"/>
              </svg>
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
  import { useFaqFilter } from '~/composables/useFaqFilter'
  
  gsap.registerPlugin(ScrollTrigger)
  
  /* -------- Shared filter state -------- */
  const { searchQuery, activeCategory, reset } = useFaqFilter()
  
  /* -------- Icons -------- */
  const icons = {
    cart: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
    chart: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    leaf: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    building: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>`,
  }
  
  /* -------- FAQ Data -------- */
  interface Faq {
    id: string
    question: string
    answer: string
    category: 'buying' | 'investing' | 'sustainability' | 'company'
    link?: { label: string; href: string }
  }
  
  const allFaqs: Faq[] = [
    // ============ BUYING (12) ============
    {
      id: 'moq',
      question: 'What is the minimum order quantity (MOQ)?',
      answer: 'MOQ varies by product: 5 tonnes for palm oil, 10 tonnes for palm kernel, 20 tonnes for cocoa beans, 2 tonnes for plantain flour, and 5 tonnes for cassava starch. Smaller orders can be arranged through our small-lot program — just contact us with your requirements.',
      category: 'buying',
      link: { label: 'View full product catalog', href: '/products' },
    },
    {
      id: 'sample-orders',
      question: 'Can I order a sample before committing to a bulk purchase?',
      answer: 'Yes. We ship physical samples by courier within 3–7 days for most products, at our cost for verified businesses. Sample quantities are typically 1–5 kg for dry goods and 1–2 litres for oils. Every sample comes with the corresponding lab analysis report.',
      category: 'buying',
      link: { label: 'Request a sample', href: '/contact?type=buyer&action=sample' },
    },
    {
      id: 'payment-terms',
      question: 'What payment terms do you offer?',
      answer: 'Standard terms are 30% deposit to confirm order, and 70% before shipment against Bill of Lading copy. For recurring buyers, we offer more flexible structures including Letter of Credit (LC at sight) and 45-day terms after three successful orders.',
      category: 'buying',
    },
    {
      id: 'payment-methods',
      question: 'Which payment methods do you accept?',
      answer: 'We accept bank transfer (TT) in USD, EUR, or NGN, Letter of Credit (LC at sight), and escrow via approved partners. We do not accept cash, crypto, or payments to third-party accounts not listed on our proforma invoice.',
      category: 'buying',
    },
    {
      id: 'shipping-incoterms',
      question: 'Which Incoterms do you support?',
      answer: 'We ship FOB Lagos by default. CIF, CFR, and DAP are available on request for most destination ports. We are fully compliant with Incoterms 2020.',
      category: 'buying',
      link: { label: 'See shipping details', href: '/products' },
    },
    {
      id: 'lead-time',
      question: 'How long does delivery take?',
      answer: 'Lead time varies by product and quantity: 7–14 days for palm oil, 60–90 days for pre-order cocoa, 10–14 days for cassava starch. Transit time depends on destination — see our product pages for region-specific estimates.',
      category: 'buying',
    },
    {
      id: 'export-docs',
      question: 'What export documentation do you provide?',
      answer: 'Every shipment includes: Commercial Invoice, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, Quality Certificate, and Packing List. Additional documentation (fumigation certificates, halal certification) can be arranged for specific markets.',
      category: 'buying',
    },
    {
      id: 'quality-guarantee',
      question: 'How do you guarantee product quality?',
      answer: 'Every batch is field-inspected, graded on-site, and lab-verified by an independent lab before shipping. Your shipment arrives with a full lab report matching the parameters we advertise. If a batch fails to meet spec, we replace it or refund in full.',
      category: 'buying',
    },
    {
      id: 'custom-packaging',
      question: 'Do you offer custom packaging or private label?',
      answer: 'Yes. We offer private-label packaging for orders above 20 tonnes, including custom bag printing, custom container loading, and brand-specific pack sizes. Contact us with your requirements for a custom quote.',
      category: 'buying',
      link: { label: 'Discuss custom packaging', href: '/contact?type=buyer&action=custom' },
    },
    {
      id: 'small-orders',
      question: 'Can I order below the standard MOQ?',
      answer: 'For orders below our standard MOQ, we operate a small-lot program (typically 1–5 tonnes per product) with a modest surcharge. Contact us with your specific volume and we\'ll route you appropriately.',
      category: 'buying',
    },
    {
      id: 'traceability',
      question: 'Can I trace my purchase back to a specific estate?',
      answer: 'Yes. Every batch is tagged with a unique GF-ID linking it to the exact estate, plot, harvest date, and lab report. Scanning the QR code on your shipment gives you the full production record.',
      category: 'buying',
    },
    {
      id: 'inspection-visits',
      question: 'Can my team visit the estate or inspection facility?',
      answer: 'Yes — and we encourage it. Buyers can arrange estate visits with two weeks\' notice, and pre-shipment inspections by third-party inspectors (SGS, Bureau Veritas) are welcome at any stage.',
      category: 'buying',
    },
  
    // ============ INVESTING (10) ============
    {
      id: 'minimum-investment',
      question: 'What is the minimum investment amount?',
      answer: 'Our entry-level Seedling package starts at $5,000. Growth starts at $25,000, Estate at $100,000. For institutional investors, custom allocations start at $250,000.',
      category: 'investing',
      link: { label: 'View investment packages', href: '/invest' },
    },
    {
      id: 'returns-realistic',
      question: 'Are the advertised returns realistic?',
      answer: 'All returns we publish are historical averages from audited estates, not guarantees. We disclose ranges (e.g., 12–14%) rather than single figures, and our historical variance is available in the prospectus. We do not promise fixed returns.',
      category: 'investing',
    },
    {
      id: 'what-happens-bad-harvest',
      question: 'What happens if a harvest falls short?',
      answer: 'We plan conservatively, so shortfalls are rare. If they occur, we first reduce pro-rata across all reservations. If a full harvest is delayed, investors can choose a full refund within 14 days or a rollover to the next cycle at the same locked price.',
      category: 'investing',
    },
    {
      id: 'exit-options',
      question: 'What are my exit options?',
      answer: 'Seedling and Growth packages have an exit option at year 5. Estate packages have a structured exit at year 7. Early exits are possible with 90 days\' notice, subject to a modest fee detailed in the prospectus.',
      category: 'investing',
    },
    {
      id: 'reporting-frequency',
      question: 'How often will I receive reports?',
      answer: 'All investors receive quarterly reports covering yield, financials, and land status. Estate-tier investors also receive board-level updates and annual in-person briefings.',
      category: 'investing',
    },
    {
      id: 'investment-secured',
      question: 'Is my investment secured against land?',
      answer: 'Yes. Every investment is backed by specific hectares with registered land titles. In the unlikely event of default, investors have first-lien rights over the allocated plot. Full legal structure is described in the prospectus.',
      category: 'investing',
    },
    {
      id: 'tax-treatment',
      question: 'How is investment income taxed?',
      answer: 'Tax treatment depends on your jurisdiction. Nigerian investors are subject to Nigerian agricultural income tax rules. International investors receive dividends net of Nigerian withholding tax, and can typically claim credit in their home country under applicable treaties. We recommend consulting your tax advisor.',
      category: 'investing',
    },
    {
      id: 'auditor-access',
      question: 'Can I have my own auditor inspect the estate?',
      answer: 'Absolutely. We welcome investor-side audits and provide full access to field records, financial statements, and land documents. Institutional investors may also appoint a board observer.',
      category: 'investing',
    },
    {
      id: 'currency-risk',
      question: 'How do you manage currency risk?',
      answer: 'Our export revenues are primarily in USD and EUR, which naturally hedges against NGN depreciation. We disclose currency exposure in our quarterly reports and use forward contracts for larger transactions.',
      category: 'investing',
    },
    {
      id: 'institutional-investment',
      question: 'Do you work with institutional investors?',
      answer: 'Yes. We have structured vehicles suitable for family offices, impact funds, and corporate balance sheets. Enterprise allocations start at $250,000 and include board observer seats and co-development rights on new estates.',
      category: 'investing',
      link: { label: 'Contact our IR team', href: '/contact?type=enterprise' },
    },
  
    // ============ SUSTAINABILITY (9) ============
    {
      id: 'certifications-held',
      question: 'What certifications do you hold?',
      answer: 'We are certified by Rainforest Alliance (since 2022), ISO 14001 (since 2022), and Fairtrade International (since 2019). We are NEPC registered and GlobalG.A.P. certification for two estates is in progress, expected Q2 2026.',
      category: 'sustainability',
      link: { label: 'See methodology & verification', href: '/impact-report' },
    },
    {
      id: 'carbon-measurement',
      question: 'How do you measure carbon sequestration?',
      answer: 'We use the Gold Standard methodology combining soil carbon sampling, biomass measurement of standing trees, and satellite-based land-use tracking. All measurements are audited by SGS on an annual basis.',
      category: 'sustainability',
    },
    {
      id: 'water-usage',
      question: 'How much water do your estates use?',
      answer: 'Our drip irrigation and rainwater harvesting systems use approximately 62% less water than traditional irrigation for equivalent yields. Detailed water usage per estate is published in our annual impact report.',
      category: 'sustainability',
    },
    {
      id: 'deforestation',
      question: 'Do you cut down forests to expand?',
      answer: 'No. We have a strict zero-deforestation commitment since 2016. All our estates were established on previously cleared or degraded agricultural land. We plant native tree corridors along estate boundaries to improve biodiversity.',
      category: 'sustainability',
    },
    {
      id: 'farmer-wages',
      question: 'How much do your workers get paid?',
      answer: 'All our employees earn above the Nigerian living wage, independently verified by Fairtrade International. Outgrower farmers receive fair-trade minimum pricing plus a premium paid annually on top of market rates.',
      category: 'sustainability',
    },
    {
      id: 'community-investment',
      question: 'Do you reinvest in local communities?',
      answer: 'Yes — 5% of net profit is committed to community reinvestment, funding schools, health clinics, and rural infrastructure. Annual spend and outcomes are disclosed in our impact report.',
      category: 'sustainability',
    },
    {
      id: 'what-you-dont-measure',
      question: 'What impact metrics do you NOT yet measure?',
      answer: 'Scope 3 emissions, per-estate biodiversity indices, and downstream water quality. Each of these is documented publicly with target dates for measurement — we disclose gaps, not just wins.',
      category: 'sustainability',
      link: { label: 'See what we don\'t measure yet', href: '/impact-report' },
    },
    {
      id: 'waste-recycling',
      question: 'What happens to agricultural waste?',
      answer: '92% of agricultural waste (palm kernel shells, cocoa pods, pruned biomass) is recycled into compost, biofuel, or animal feed. The remaining 8% is disposed of through licensed waste contractors.',
      category: 'sustainability',
    },
    {
      id: 'organic-status',
      question: 'Are your products certified organic?',
      answer: 'Our core estates are not yet certified organic, but we follow regenerative practices that avoid synthetic pesticides and fertilizers on the majority of our acreage. Partial organic certification for Epe Mixed Farm is in progress.',
      category: 'sustainability',
    },
  
    // ============ COMPANY (9) ============
    {
      id: 'how-many-estates',
      question: 'How many estates do you operate?',
      answer: 'Six estates across four Nigerian states — Ondo, Cross River, Ogun, Lagos, and Akwa Ibom. Total managed area is 1,200+ hectares.',
      category: 'company',
      link: { label: 'Explore our estates', href: '/plantations' },
    },
    {
      id: 'company-history',
      question: 'How long have you been operating?',
      answer: 'GreenField Agri Estates was founded in 2010 with a single 40-hectare plot. We have been harvesting continuously since 2013 and have not missed a harvest cycle in 15 years.',
      category: 'company',
    },
    {
      id: 'team-size',
      question: 'How many people work for the company?',
      answer: 'We employ 340+ people directly across our estates and support 208+ smallholder farmer families through our outgrower program. Our leadership team has over 70 years of combined agronomy, finance, and community development experience.',
      category: 'company',
      link: { label: 'Meet our team', href: '/about' },
    },
    {
      id: 'estate-visits-media',
      question: 'Can journalists or researchers visit the estates?',
      answer: 'Yes, we welcome media visits, research partnerships, and case study collaborations. Please contact us with your request and proposed date — we ask for two weeks\' notice.',
      category: 'company',
      link: { label: 'Contact our press team', href: '/contact?type=press' },
    },
    {
      id: 'partnerships',
      question: 'Do you partner with other organizations?',
      answer: 'We partner with research institutions, community development NGOs, and supply chain partners. If you have a proposal, send it through our partnership form.',
      category: 'company',
      link: { label: 'Partnership inquiry', href: '/contact?type=partner' },
    },
    {
      id: 'careers',
      question: 'Do you have open roles?',
      answer: 'We regularly hire across agronomy, operations, finance, and community programs. Current openings are listed on our careers page.',
      category: 'company',
      link: { label: 'View open roles', href: '/careers' },
    },
    {
      id: 'press-kit',
      question: 'Do you have a press kit?',
      answer: 'Yes — our press kit includes logos, executive headshots, high-resolution estate imagery, and company fact sheets. Contact our press team to request it.',
      category: 'company',
    },
    {
      id: 'insurance',
      question: 'Are your estates insured?',
      answer: 'Yes. Every estate carries crop, weather, and liability insurance. Full policy details are available to institutional investors on request.',
      category: 'company',
    },
    {
      id: 'legal-entity',
      question: 'What is your legal structure?',
      answer: 'GreenField Agri Estates Ltd. is a Nigerian limited liability company registered with the Corporate Affairs Commission (RC 1234567). Full corporate documents are available on request.',
      category: 'company',
    },
  ]
  
  /* -------- Category metadata -------- */
  const categoryMeta: Record<string, { label: string; bg: string; dot: string; icon: string }> = {
    buying: {
      label: 'Buying',
      bg: 'bg-leaf-500/12 text-leaf-600 dark:text-leaf-400',
      dot: 'bg-leaf-500',
      icon: icons.cart,
    },
    investing: {
      label: 'Investing',
      bg: 'bg-harvest-500/15 text-harvest-700 dark:text-harvest-400',
      dot: 'bg-harvest-500',
      icon: icons.chart,
    },
    sustainability: {
      label: 'Sustainability',
      bg: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400',
      dot: 'bg-emerald-500',
      icon: icons.leaf,
    },
    company: {
      label: 'Company',
      bg: 'bg-blue-500/12 text-blue-600 dark:text-blue-400',
      dot: 'bg-blue-500',
      icon: icons.building,
    },
  }
  
  /* -------- Categories with "All" -------- */
  const categoriesWithAll = computed(() => {
    const counts: Record<string, number> = {
      all: allFaqs.length,
      buying: 0,
      investing: 0,
      sustainability: 0,
      company: 0,
    }
  
    allFaqs.forEach((f) => { counts[f.category]++ })
  
    return [
      { slug: 'all',           label: 'All Questions', count: counts.all },
      { slug: 'buying',        label: 'Buying',        count: counts.buying },
      { slug: 'investing',     label: 'Investing',     count: counts.investing },
      { slug: 'sustainability',label: 'Sustainability',count: counts.sustainability },
      { slug: 'company',       label: 'Company',       count: counts.company },
    ]
  })
  
  /* -------- Filtered FAQs -------- */
  const filteredFaqs = computed(() => {
    let list = [...allFaqs]
  
    // Category filter
    if (activeCategory.value !== 'all') {
      list = list.filter((f) => f.category === activeCategory.value)
    }
  
    // Search filter
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase().trim()
      list = list.filter((f) =>
        `${f.question} ${f.answer}`.toLowerCase().includes(q)
      )
    }
  
    return list
  })
  
  const hasActiveFilters = computed(
    () => activeCategory.value !== 'all' || searchQuery.value.trim() !== ''
  )
  
  /* -------- Category helpers -------- */
  const categoryBg = (cat: string) => categoryMeta[cat]?.bg || ''
  const categoryDot = (cat: string) => categoryMeta[cat]?.dot || 'bg-leaf-500'
  const categoryLabel = (cat: string) => categoryMeta[cat]?.label || cat
  const categoryIcon = (cat: string) => categoryMeta[cat]?.icon || icons.leaf
  
  /* -------- State -------- */
  const openId = ref<string | null>(null)
  
  /* Plain Map for panel elements (no ref arrays) */
  const panelMap = new Map<string, HTMLElement>()
  
  /* ---------------------------------------------------------------
     TOGGLE — GSAP height animation
     --------------------------------------------------------------- */
  const toggle = (id: string) => {
    const panel = panelMap.get(id)
    if (!panel) return
  
    const isOpening = openId.value !== id
  
    // Close currently open panel
    if (openId.value !== null && openId.value !== id) {
      const current = panelMap.get(openId.value)
      if (current) {
        gsap.to(current, {
          height: 0,
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => gsap.set(current, { height: 0, autoAlpha: 0 }),
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
          onComplete: () => gsap.set(panel, { height: 'auto' }),
        }
      )
      openId.value = id
    } else {
      gsap.to(panel, {
        height: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => gsap.set(panel, { height: 0, autoAlpha: 0 }),
      })
      openId.value = null
    }
  }
  
  /* -------- Refs -------- */
  const sectionRef = ref<HTMLElement | null>(null)
  const eyebrowRef = ref<HTMLElement | null>(null)
  const headingRef = ref<HTMLElement | null>(null)
  const descRef    = ref<HTMLElement | null>(null)
  const tabsBarRef = ref<HTMLElement | null>(null)
  const ctaRef     = ref<HTMLElement | null>(null)
  
  /* ---------------------------------------------------------------
     On mount — populate panel map from DOM
     --------------------------------------------------------------- */
  const refreshPanelMap = () => {
    panelMap.clear()
    const panels = sectionRef.value?.querySelectorAll<HTMLElement>('.faq-panel') ?? []
    panels.forEach((panel) => {
      const id = panel.dataset.faqId
      if (id) panelMap.set(id, panel)
    })
  }
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
    refreshPanelMap()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) return
  
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
  
      /* --- CTA --- */
      gsap.from(ctaRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  /* Re-populate when filtered list changes */
  watch(filteredFaqs, () => {
    nextTick(() => refreshPanelMap())
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
  
  /* ============ TRANSITION GROUP (filter change animation) ============ */
  
  .faq-move,
  .faq-enter-active,
  .faq-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .faq-leave-active {
    position: absolute;
    opacity: 0;
    transform: scale(0.98);
  }
  
  .faq-enter-from {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }
  
  .faq-leave-to {
    opacity: 0;
    transform: scale(0.98);
  }
  </style>