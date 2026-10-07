<template>
  <section
    id="catalog"
    ref="sectionRef"
    class="relative py-20 lg:py-28 bg-[rgb(var(--bg-alt))]"
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
            Product Catalog
          </div>

          <h2
            ref="headingRef"
            class="font-display font-extrabold
                   text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                   tracking-[-0.025em] text-[rgb(var(--text))]"
          >
            Every product,<br />
            <span class="text-leaf-500">ready to ship.</span>
          </h2>
        </div>

        <div ref="descRef" class="lg:col-span-5 lg:pb-2">
          <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
            Filter by crop, sort by availability, or search by name. Every
            product is graded, documented, and available for sampling before
            purchase.
          </p>
        </div>
      </div>

      <!-- ============ FILTER / SORT / SEARCH BAR (sticky) ============ -->
      <div
        ref="filterBarRef"
        class="sticky top-[76px] z-30 -mx-6 px-6 lg:mx-0 lg:px-0
               py-4 mb-8 lg:mb-10
               bg-[rgb(var(--bg-alt)/0.92)] backdrop-blur-md
               border-b border-[rgb(var(--border)/0.08)]"
      >
        <div class="flex flex-col lg:flex-row lg:items-center gap-4">

          <!-- Crop chips (horizontal scroll) -->
          <div class="flex-1 min-w-0">
            <div
              class="flex items-center gap-2 overflow-x-auto
                     [-ms-overflow-style:none] [scrollbar-width:none]
                     [&::-webkit-scrollbar]:hidden
                     pb-1 lg:pb-0"
            >
              <span
                class="shrink-0 text-[0.72rem] uppercase tracking-wider
                       font-bold text-[rgb(var(--text-muted))] mr-1 hidden sm:block"
              >
                Crop:
              </span>
              <button
                v-for="crop in cropOptions"
                :key="crop"
                type="button"
                class="shrink-0 px-3.5 py-2 rounded-full
                       text-[0.82rem] font-semibold whitespace-nowrap
                       transition-all duration-300"
                :class="activeCrop === crop
                  ? 'bg-leaf-500 text-white shadow-[0_4px_14px_-4px_rgba(46,125,50,0.5)]'
                  : 'bg-[rgb(var(--surface))] border border-[rgb(var(--border)/0.12)] text-[rgb(var(--text-muted))] hover:border-leaf-500/50 hover:text-[rgb(var(--text))]'"
                @click="activeCrop = crop"
              >
                {{ crop }}
              </button>
            </div>
          </div>

          <!-- Sort + search -->
          <div class="flex items-center gap-3 shrink-0">

            <!-- Sort -->
            <div class="relative">
              <select
                v-model="activeSort"
                class="h-10 pl-4 pr-9 rounded-full
                       text-[0.85rem] font-medium
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.12)]
                       text-[rgb(var(--text))]
                       focus:outline-none focus:border-leaf-500
                       focus:ring-4 focus:ring-leaf-500/15
                       appearance-none cursor-pointer"
              >
                <option value="featured">Featured first</option>
                <option value="name">Name (A–Z)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="moq-low">Smallest MOQ first</option>
              </select>
              <span
                class="absolute right-3 top-1/2 -translate-y-1/2
                       pointer-events-none text-[rgb(var(--text-muted))]"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </span>
            </div>

            <!-- Search -->
            <div class="relative hidden md:block">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search products…"
                class="h-10 w-[200px] pl-9 pr-4 rounded-full
                       text-[0.85rem]
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.12)]
                       text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-muted))]
                       focus:outline-none focus:border-leaf-500
                       focus:ring-4 focus:ring-leaf-500/15
                       transition-all duration-300
                       focus:w-[260px]"
              />
              <span
                class="absolute left-3.5 top-1/2 -translate-y-1/2
                       text-[rgb(var(--text-muted))] pointer-events-none"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </span>
            </div>

            <!-- Reset -->
            <button
              v-if="hasActiveFilters"
              type="button"
              class="h-10 px-4 rounded-full
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
            {{ filteredProducts.length }}
          </span>
          {{ filteredProducts.length === 1 ? 'product' : 'products' }}
          <span v-if="hasActiveFilters"> matching your filters</span>
        </div>
      </div>

      <!-- ============ PRODUCT GRID ============ -->
      <TransitionGroup
        tag="div"
        name="products"
        class="products-grid
               grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
      >
        <!-- Empty state -->
        <div
          v-if="!filteredProducts.length"
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
              <path d="M3 6h18M6 12h12M9 18h6"/>
            </svg>
          </div>
          <h3 class="font-display font-bold text-[rgb(var(--text))]
                     text-[1.15rem] mb-2">
            No products match these filters
          </h3>
          <p class="text-[rgb(var(--text-muted))] text-[0.92rem] mb-6 max-w-sm mx-auto">
            Try removing a filter or resetting to see the full catalog.
          </p>
          <button
            type="button"
            class="btn !px-5 !py-3
                   bg-leaf-500 text-white font-semibold
                   hover:bg-leaf-600"
            @click="reset"
          >
            Reset Filters
          </button>
        </div>

        <!-- Product cards -->
        <article
          v-for="product in filteredProducts"
          :key="product.slug"
          class="product-card group relative flex flex-col
                 rounded-2xl overflow-hidden
                 bg-[rgb(var(--surface))]
                 border border-[rgb(var(--border)/0.08)]
                 transition-all duration-500
                 hover:-translate-y-1.5
                 hover:border-leaf-500/25
                 hover:shadow-[0_25px_50px_-20px_rgba(46,125,50,0.28)]"
        >
          <!-- ============ IMAGE ============ -->
          <div class="relative aspect-[4/3] overflow-hidden bg-[rgb(var(--bg-alt))]">
            <img
              :src="product.image"
              :alt="product.name"
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover
                     transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.9,0.3,1)]
                     group-hover:scale-[1.06]"
            />

            <!-- Top-left: category tag -->
            <div class="absolute top-4 left-4 flex items-center gap-2">
              <span
                class="inline-flex items-center gap-1.5 px-2.5 py-1
                       rounded-full text-[0.68rem] font-bold tracking-wider uppercase
                       bg-white/15 backdrop-blur-md border border-white/25
                       text-white"
              >
                {{ product.category }}
              </span>
            </div>

            <!-- Top-right: availability status -->
            <div class="absolute top-4 right-4">
              <span
                class="inline-flex items-center gap-1.5 px-2.5 py-1
                       rounded-full text-[0.68rem] font-bold tracking-wider uppercase
                       backdrop-blur-md border"
                :class="statusPill(product.status)"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full"
                  :class="statusDot(product.status)"
                />
                {{ statusLabel(product.status) }}
              </span>
            </div>

            <!-- Bottom-left: grade badge -->
            <div v-if="product.grade" class="absolute bottom-4 left-4">
              <span
                class="inline-flex items-center gap-1.5 px-2.5 py-1
                       rounded-md text-[0.72rem] font-bold
                       bg-leaf-500/90 backdrop-blur-md text-white"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="3"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                {{ product.grade }}
              </span>
            </div>

            <!-- Hover overlay -->
            <div
              class="absolute inset-0 bg-black/40
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-300
                     flex items-center justify-center"
            >
              <span
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full
                       bg-white/15 backdrop-blur-md border border-white/30
                       text-white font-semibold text-[0.85rem]
                       translate-y-3 group-hover:translate-y-0
                       transition-transform duration-400"
              >
                View Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </span>
            </div>
          </div>

          <!-- ============ BODY ============ -->
          <div class="p-5 lg:p-6 flex flex-col flex-1">

            <h3
              class="font-display font-bold text-[rgb(var(--text))]
                     text-[1.15rem] lg:text-[1.25rem] leading-tight
                     tracking-[-0.015em] mb-2"
            >
              {{ product.name }}
            </h3>

            <p
              class="text-[rgb(var(--text-muted))] text-[0.88rem]
                     leading-relaxed mb-5 flex-1"
            >
              {{ product.shortDescription }}
            </p>

            <!-- Specs grid -->
            <div
              class="grid grid-cols-2 gap-x-4 gap-y-3 pt-4
                     border-t border-[rgb(var(--border)/0.08)] mb-5"
            >
              <div>
                <div class="text-[rgb(var(--text-muted))] text-[0.68rem]
                            uppercase tracking-wider font-bold mb-0.5">
                  MOQ
                </div>
                <div class="text-[rgb(var(--text))] font-display font-bold
                            text-[0.92rem] leading-none">
                  {{ product.moq }}
                </div>
              </div>
              <div>
                <div class="text-[rgb(var(--text-muted))] text-[0.68rem]
                            uppercase tracking-wider font-bold mb-0.5">
                  Lead Time
                </div>
                <div class="text-[rgb(var(--text))] font-display font-bold
                            text-[0.92rem] leading-none">
                  {{ product.leadTime }}
                </div>
              </div>
            </div>

            <!-- Price row -->
            <div
              class="flex items-end justify-between gap-3
                     pb-5 mb-5 border-b border-[rgb(var(--border)/0.08)]"
            >
              <div>
                <div class="text-[rgb(var(--text-muted))] text-[0.68rem]
                            uppercase tracking-wider font-bold mb-1">
                  Price from
                </div>
                <div class="flex items-baseline gap-1">
                  <span
                    class="font-display font-extrabold text-leaf-500
                           text-[1.35rem] leading-none"
                  >
                    {{ product.priceFrom }}
                  </span>
                  <span class="text-[rgb(var(--text-muted))] text-[0.82rem] font-medium">
                    {{ product.priceUnit }}
                  </span>
                </div>
              </div>

              <div
                v-if="product.origin"
                class="text-right text-[0.78rem] text-[rgb(var(--text-muted))]"
              >
                <div class="flex items-center gap-1.5 justify-end">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.2"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{{ product.origin }}</span>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-2.5 mt-auto">
              <NuxtLink
                :to="`/contact?type=buyer&product=${product.slug}&action=sample`"
                class="btn flex-1 justify-center !py-3
                       bg-[rgb(var(--bg-alt))]
                       border border-[rgb(var(--border)/0.12)]
                       text-[rgb(var(--text))] font-semibold !text-[0.85rem]
                       hover:border-leaf-500 hover:text-leaf-600 dark:hover:text-leaf-400"
              >
                Request Sample
              </NuxtLink>
              <NuxtLink
                :to="`/products/${product.slug}`"
                class="grid place-items-center w-11 h-11 rounded-xl
                       bg-leaf-500 text-white
                       hover:bg-leaf-600 hover:-translate-y-0.5
                       shadow-[0_8px_20px_-8px_rgba(46,125,50,0.5)]
                       transition-all duration-300"
                aria-label="View product details"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </article>
      </TransitionGroup>

      <!-- ============ BULK ENQUIRY CTA STRIP ============ -->
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
            Custom Orders Welcome
          </div>

          <h3
            class="font-display font-extrabold text-white
                   text-[clamp(1.35rem,2.5vw,1.85rem)] leading-tight
                   tracking-[-0.02em] mb-4 max-w-xl"
          >
            Need a custom blend, larger volume,<br class="hidden sm:block" />
            or specific packaging?
          </h3>

          <p class="text-white/75 text-[0.98rem] leading-relaxed max-w-lg">
            We work directly with industrial buyers, distributors, and exporters
            on tailored supply agreements — including private-label packaging,
            scheduled deliveries, and long-term contracts.
          </p>
        </div>

        <div class="lg:col-span-5 relative z-10 flex flex-col sm:flex-row lg:justify-end gap-3">
          <NuxtLink
            to="/contact?type=buyer&action=bulk"
            class="btn !px-6 !py-3.5
                   bg-white text-leaf-700 font-semibold
                   hover:bg-white/95 hover:-translate-y-0.5
                   shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
          >
            Send Bulk Enquiry
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.4"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </NuxtLink>

          <a
            href="/pdfs/catalog.pdf"
            target="_blank"
            rel="noopener"
            class="btn !px-6 !py-3.5
                   bg-white/10 backdrop-blur-md
                   border border-white/25 text-white font-semibold
                   hover:bg-white/20 hover:border-white/40"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.2"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <path d="M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Catalog
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { productsData, type Product } from '~/data/products'

gsap.registerPlugin(ScrollTrigger)

/* -------- Shared filter state (synced with hero chips) -------- */
const { activeCrop, activeSort, searchQuery, reset } = useProductsFilter()

/* -------- Refs -------- */
const sectionRef = ref<HTMLElement | null>(null)

/* -------- Products (from shared data file) -------- */
const products = productsData

/* -------- Chip options (must match hero chips) -------- */
const cropOptions = ['All Products', 'Palm', 'Cocoa', 'Plantain', 'Rubber', 'Cassava']

/* -------- Filtering + sorting -------- */
const filteredProducts = computed(() => {
  let list = [...products]

  // Crop filter
  if (activeCrop.value !== 'All Products') {
    list = list.filter((p) => p.crop === activeCrop.value)
  }

  // Search
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    list = list.filter((p) =>
      `${p.name} ${p.category} ${p.shortDescription}`.toLowerCase().includes(q)
    )
  }

  // Sort
  switch (activeSort.value) {
    case 'name':
      list.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'price-low':
      list.sort((a, b) =>
        parseFloat(a.priceFrom.replace(/[^0-9.]/g, '')) -
        parseFloat(b.priceFrom.replace(/[^0-9.]/g, ''))
      )
      break
    case 'price-high':
      list.sort((a, b) =>
        parseFloat(b.priceFrom.replace(/[^0-9.]/g, '')) -
        parseFloat(a.priceFrom.replace(/[^0-9.]/g, ''))
      )
      break
    case 'moq-low':
      list.sort((a, b) => a.moqTonnes - b.moqTonnes)
      break
    case 'featured':
    default:
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
      break
  }

  return list
})

const hasActiveFilters = computed(
  () =>
    activeCrop.value !== 'All Products' ||
    activeSort.value !== 'featured' ||
    searchQuery.value.trim() !== ''
)

/* -------- Status helpers -------- */
const statusPill = (status: string) =>
  ({
    ready:    'bg-leaf-500/25 border-leaf-400/40 text-leaf-100',
    seasonal: 'bg-harvest-500/25 border-harvest-400/40 text-harvest-100',
    preorder: 'bg-blue-500/25 border-blue-400/40 text-blue-100',
  }[status] || '')

const statusDot = (status: string) =>
  ({
    ready:    'bg-leaf-400 animate-pulse',
    seasonal: 'bg-harvest-400',
    preorder: 'bg-blue-400',
  }[status] || '')

const statusLabel = (status: string) =>
  ({
    ready:    'In Stock',
    seasonal: 'Seasonal',
    preorder: 'Pre-Order',
  }[status] || '')

/* ---------------------------------------------------------------
   GSAP — entrance only (filter animation handled by TransitionGroup)
   --------------------------------------------------------------- */
let ctx: gsap.Context | null = null

onMounted(async () => {
  await nextTick()

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return

  ctx = gsap.context(() => {
    const cards = sectionRef.value?.querySelectorAll('.product-card')
    if (cards?.length) {
      gsap.from(cards, {
        y: 60,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value?.querySelector('.products-grid'),
          start: 'top 80%',
        },
      })
    }

    /* Footer CTA entrance */
    const cta = sectionRef.value?.querySelector('.btn')?.closest('.rounded-3xl')
    if (cta) {
      gsap.from(cta, {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: cta, start: 'top 88%' },
      })
    }
  }, sectionRef.value!)
})

onBeforeUnmount(() => ctx?.revert())
</script>

<style scoped>
/* ============ TRANSITION GROUP (filter change animation) ============ */

.products-move,
.products-enter-active,
.products-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.products-leave-active {
  position: absolute;
  opacity: 0;
  transform: scale(0.95);
}

.products-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.products-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>