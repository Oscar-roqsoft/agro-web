<template>
    <section
      ref="sectionRef"
      class="relative isolate overflow-hidden
             pt-14 lg:pt-20 pb-20 lg:pb-28
             bg-[rgb(var(--bg))]"
    >
      <!-- Ambient blobs -->
      <div
        class="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full
               bg-leaf-500/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        class="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full
               bg-harvest-500/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
  
      <div class="container-page relative">
  
        <!-- ============ BREADCRUMB ============ -->
        <nav
          ref="breadcrumbRef"
          aria-label="Breadcrumb"
          class="flex items-center gap-2 mb-10
                 text-[0.82rem] font-medium
                 text-[rgb(var(--text-muted))]"
        >
          <NuxtLink
            to="/"
            class="hover:text-leaf-600 dark:hover:text-leaf-400
                   transition-colors duration-200"
          >
            Home
          </NuxtLink>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.4"
               stroke-linecap="round" stroke-linejoin="round"
               class="text-[rgb(var(--text-muted)/0.5)]">
            <path d="m9 18 6-6-6-6"/>
          </svg>
          <span class="text-[rgb(var(--text))] font-semibold">Products</span>
        </nav>
  
        <!-- ============ MAIN GRID ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
  
          <!-- ============ LEFT: STATEMENT ============ -->
          <div class="lg:col-span-6">
  
            <!-- Eyebrow -->
            <div
              ref="eyebrowRef"
              class="inline-flex items-center gap-2.5 mb-6
                     px-3.5 py-1.5 rounded-full
                     bg-harvest-500/10 border border-harvest-500/20
                     text-harvest-700 dark:text-harvest-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-harvest-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-2 w-2 bg-harvest-500" />
              </span>
              Export-ready · Certified · Traceable
            </div>
  
            <!-- Headline -->
            <h1
              ref="headlineRef"
              class="font-display font-extrabold
                     text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05]
                     tracking-[-0.035em] text-[rgb(var(--text))] mb-7 max-w-xl"
            >
              Produce you can<br />
              trace to the <span class="text-leaf-500">soil.</span>
            </h1>
  
            <!-- Lead paragraph -->
            <p
              ref="leadRef"
              class="text-[rgb(var(--text-muted))] text-[1.08rem] leading-relaxed
                     max-w-xl mb-10"
            >
              From our certified estates to your factory, kitchen, or port —
              we supply bulk and container quantities of West Africa's most
              in-demand agricultural products. Every batch is graded,
              documented, and available for sampling before purchase.
            </p>
  
            <!-- CTAs -->
            <div
              ref="ctaRef"
              class="flex flex-wrap items-center gap-3.5 mb-12"
            >
              <a
                href="#catalog"
                class="btn btn-primary !px-6 !py-3.5 !text-[0.95rem]"
              >
                Browse Product Catalog
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </a>
              <NuxtLink
                to="/contact?type=buyer"
                class="btn !px-6 !py-3.5 !text-[0.95rem]
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.15)]
                       text-[rgb(var(--text))]
                       hover:border-leaf-500 hover:text-leaf-600
                       dark:hover:text-leaf-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.2"
                     stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="3"/>
                  <path d="m2 7 10 7 10-7"/>
                </svg>
                Request Samples
              </NuxtLink>
            </div>
  
            <!-- Quick trust strip -->
            <div
              ref="trustRef"
              class="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8
                     border-t border-[rgb(var(--border)/0.1)]"
            >
              <div
                v-for="trust in trustItems"
                :key="trust.label"
                class="flex items-center gap-3"
              >
                <span
                  class="shrink-0 grid place-items-center w-9 h-9 rounded-lg
                         bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                  v-html="trust.icon"
                />
                <div>
                  <div class="font-display font-bold text-[rgb(var(--text))]
                              text-[0.9rem] leading-tight">
                    {{ trust.label }}
                  </div>
                  <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                              leading-snug">
                    {{ trust.sub }}
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- ============ RIGHT: PRODUCT IMAGE COMPOSITION ============ -->
          <div
            ref="imageWrapRef"
            class="lg:col-span-6 relative"
          >
            <!-- Main product hero image -->
            <div
              class="relative rounded-3xl overflow-hidden
                     aspect-[4/5] lg:aspect-[5/6]
                     shadow-[0_30px_70px_-25px_rgba(0,0,0,0.3)]"
            >
              <img
                src="/product/product-hero.png"
                alt="Freshly harvested palm fruit and agricultural produce"
                fetchpriority="high"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div
                class="absolute inset-0
                       bg-gradient-to-t from-black/30 via-transparent to-transparent"
              />
            </div>
  
            <!-- Floating card 1: MOQ -->
            <div
              ref="badge1Ref"
              class="absolute -top-4 lg:-top-6 -left-4 lg:-left-6
                     rounded-2xl p-5
                     bg-[rgb(var(--surface))]
                     border border-[rgb(var(--border)/0.1)]
                     shadow-[0_20px_45px_-15px_rgba(0,0,0,0.2)]
                     max-w-[200px]"
            >
              <div
                class="grid place-items-center w-10 h-10 rounded-xl mb-3
                       bg-leaf-500/15 text-leaf-600 dark:text-leaf-400"
                v-html="icons.package"
              />
              <div class="font-display font-bold text-[rgb(var(--text))]
                          text-[1rem] leading-tight mb-0.5">
                Bulk MOQ
              </div>
              <div class="text-[rgb(var(--text-muted))] text-[0.78rem]">
                From 5 tonnes per order
              </div>
            </div>
  
            <!-- Floating card 2: Delivery -->
            <div
              ref="badge2Ref"
              class="absolute -bottom-4 lg:-bottom-6 -right-4 lg:-right-6
                     rounded-2xl p-5
                     bg-[rgb(var(--surface))]
                     border border-[rgb(var(--border)/0.1)]
                     shadow-[0_20px_45px_-15px_rgba(0,0,0,0.2)]
                     max-w-[220px]"
            >
              <div
                class="grid place-items-center w-10 h-10 rounded-xl mb-3
                       bg-harvest-500/15 text-harvest-600 dark:text-harvest-400"
                v-html="icons.ship"
              />
              <div class="font-display font-bold text-[rgb(var(--text))]
                          text-[1rem] leading-tight mb-0.5">
                Ships in 14 days
              </div>
              <div class="text-[rgb(var(--text-muted))] text-[0.78rem]">
                From harvest to port
              </div>
            </div>
  
            <!-- Corner accent (rotating dashed ring) -->
            <div
              ref="ringRef"
              class="hidden lg:block absolute -bottom-8 -left-8
                     w-24 h-24 rounded-full
                     border-2 border-dashed border-leaf-500/30
                     pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
  
        <!-- ============ CROP FILTER CHIPS (bottom) ============ -->
        <div
          ref="chipsRef"
          class="mt-16 lg:mt-20"
        >
          <div class="flex flex-col md:flex-row md:items-center gap-5">
  
            <!-- Label -->
            <div class="shrink-0 flex items-center gap-3">
              <span
                class="grid place-items-center w-9 h-9 rounded-lg
                       bg-[rgb(var(--bg-alt))] text-[rgb(var(--text-muted))]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.2"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 6h18M6 12h12M9 18h6"/>
                </svg>
              </span>
              <div>
                <div class="text-[0.72rem] uppercase tracking-wider
                            font-bold text-[rgb(var(--text-muted))]">
                  Filter by
                </div>
                <div class="text-[rgb(var(--text))] font-semibold text-[0.92rem]">
                  Product line
                </div>
              </div>
            </div>
  
            <!-- Chips -->
            <div
              class="flex-1 flex items-center gap-2 overflow-x-auto
                     [-ms-overflow-style:none] [scrollbar-width:none]
                     [&::-webkit-scrollbar]:hidden
                     pb-1 md:pb-0"
            >
              <button
                v-for="chip in cropChips"
                :key="chip"
                type="button"
                class="shrink-0 px-4 py-2.5 rounded-full
                       text-[0.85rem] font-semibold whitespace-nowrap
                       transition-all duration-300"
                :class="activeCrop === chip
                  ? 'bg-leaf-500 text-white shadow-[0_6px_18px_-6px_rgba(46,125,50,0.55)]'
                  : `bg-[rgb(var(--surface))] border border-[rgb(var(--border)/0.12)]
                     text-[rgb(var(--text-muted))] hover:border-leaf-500/50
                     hover:text-[rgb(var(--text))]`"
                @click="activeCrop = chip"
              >
                {{ chip }}
              </button>
            </div>
  
            <!-- Result count -->
            <div
              class="shrink-0 text-[0.82rem] text-[rgb(var(--text-muted))] md:ml-4"
            >
              <span class="font-semibold text-[rgb(var(--text))]">
                {{ totalProducts }}
              </span>
              products available
            </div>
          </div>
        </div>
  
        <!-- ============ SCROLL CUE ============ -->
        <div
          ref="scrollCueRef"
          class="mt-14 lg:mt-16 flex items-center justify-center gap-3
                 text-[rgb(var(--text-muted))] text-[0.72rem]
                 uppercase tracking-[0.25em] font-semibold"
        >
          <span class="h-px w-12 bg-[rgb(var(--border)/0.3)]" />
          <span>Explore the catalog</span>
          <span class="h-px w-12 bg-[rgb(var(--border)/0.3)]" />
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { SplitText } from 'gsap/SplitText'
  
  gsap.registerPlugin(SplitText)
  
  /* -------- Icons -------- */
  const icons = {
    package: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>`,
    ship: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21h20M5 21V10l7-5 7 5v11M12 10v11M9 13h6"/></svg>`,
    shield: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    globe: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    file: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
    leaf: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  }
  
  /* -------- Trust items -------- */
  const trustItems = [
    { label: 'Certified', sub: 'Rainforest, Fairtrade, ISO', icon: icons.shield },
    { label: 'Export Ready', sub: 'Full documentation', icon: icons.globe },
    { label: 'Traceable', sub: 'QR-coded batches', icon: icons.file },
    { label: 'Organic Options', sub: 'Certified on request', icon: icons.leaf },
  ]
  
  /* -------- Chip options -------- */
  const cropChips = ['All Products', 'Palm', 'Cocoa', 'Plantain', 'Rubber', 'Cassava']
  
  /* -------- Shared filter state -------- */
  const activeCrop = useState<string>('products-filter', () => 'All Products')
  
  const totalProducts = computed(() => {
    // Placeholder — will be wired to actual product count
    return 12
  })
  
  /* -------- Refs -------- */
  const sectionRef   = ref<HTMLElement | null>(null)
  const breadcrumbRef = ref<HTMLElement | null>(null)
  const eyebrowRef   = ref<HTMLElement | null>(null)
  const headlineRef  = ref<HTMLElement | null>(null)
  const leadRef      = ref<HTMLElement | null>(null)
  const ctaRef       = ref<HTMLElement | null>(null)
  const trustRef     = ref<HTMLElement | null>(null)
  const imageWrapRef = ref<HTMLElement | null>(null)
  const badge1Ref    = ref<HTMLElement | null>(null)
  const badge2Ref    = ref<HTMLElement | null>(null)
  const ringRef      = ref<HTMLElement | null>(null)
  const chipsRef     = ref<HTMLElement | null>(null)
  const scrollCueRef = ref<HTMLElement | null>(null)
  
  /* ---------------------------------------------------------------
     ENTRANCE
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [breadcrumbRef.value, eyebrowRef.value, headlineRef.value, leadRef.value,
         ctaRef.value, trustRef.value, imageWrapRef.value, badge1Ref.value,
         badge2Ref.value, chipsRef.value, scrollCueRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0, scale: 1 }
      )
      return
    }
  
    ctx = gsap.context(() => {
      /* --- Split headline --- */
      let split: SplitText | null = null
      if (headlineRef.value) {
        split = new SplitText(headlineRef.value, {
          type: 'lines,words',
          linesClass: 'overflow-hidden',
        })
      }
  
      /* --- Master timeline --- */
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 })
  
      tl
        .from(breadcrumbRef.value, { y: 16, autoAlpha: 0, duration: 0.5 })
        .from(eyebrowRef.value,    { y: 20, autoAlpha: 0, duration: 0.6 }, '-=0.2')
        .from(split?.words ?? [], {
          y: 60, autoAlpha: 0, duration: 0.9, stagger: 0.05, ease: 'power4.out',
        }, '-=0.35')
        .from(leadRef.value, { y: 24, autoAlpha: 0, duration: 0.7 }, '-=0.5')
        .from(ctaRef.value?.children ?? [], {
          y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1,
        }, '-=0.45')
        .from(trustRef.value?.children ?? [], {
          y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1,
        }, '-=0.4')
  
      /* --- Image composition --- */
      gsap.from(imageWrapRef.value, {
        x: 60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        delay: 0.4,
      })
  
      gsap.from(badge1Ref.value, {
        y: 30, autoAlpha: 0, scale: 0.9, duration: 0.7, ease: 'back.out(2)',
        delay: 1.2,
      })
      gsap.from(badge2Ref.value, {
        y: 30, autoAlpha: 0, scale: 0.9, duration: 0.7, ease: 'back.out(2)',
        delay: 1.4,
      })
  
      /* --- Filter chips --- */
      gsap.from(chipsRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        delay: 1.5,
      })
  
      /* --- Scroll cue --- */
      gsap.from(scrollCueRef.value, {
        y: 12, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        delay: 1.8,
      })
  
      /* --- Rotating dashed ring --- */
      if (ringRef.value) {
        gsap.to(ringRef.value, {
          rotate: 360, duration: 40, repeat: -1, ease: 'none',
        })
      }
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>
  
  <style scoped>
  button {
    transition: background-color 0.3s ease, color 0.3s ease,
                border-color 0.3s ease, box-shadow 0.3s ease;
  }
  </style>