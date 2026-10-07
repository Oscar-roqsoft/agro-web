<template>
    <section
      ref="sectionRef"
      class="relative pt-14 lg:pt-20 pb-16 lg:pb-20
             bg-[rgb(var(--bg))] overflow-hidden"
    >
      <!-- Ambient blobs -->
      <div
        class="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full
               bg-leaf-500/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
  
      <div class="container-page relative">
  
        <!-- ============ BREADCRUMB ============ -->
        <nav
          ref="breadcrumbRef"
          aria-label="Breadcrumb"
          class="flex flex-wrap items-center gap-2 mb-8
                 text-[0.82rem] font-medium
                 text-[rgb(var(--text-muted))]"
        >
          <NuxtLink to="/" class="hover:text-leaf-600 dark:hover:text-leaf-400">
            Home
          </NuxtLink>
          <span class="text-[rgb(var(--text-muted)/0.5)]">›</span>
          <NuxtLink to="/products" class="hover:text-leaf-600 dark:hover:text-leaf-400">
            Products
          </NuxtLink>
          <span class="text-[rgb(var(--text-muted)/0.5)]">›</span>
          <span class="text-[rgb(var(--text))] font-semibold">{{ product.name }}</span>
        </nav>
  
        <!-- ============ MAIN GRID ============ -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
  
          <!-- ============ LEFT: GALLERY ============ -->
          <div ref="galleryRef" class="lg:col-span-7">
            <!-- Main image -->
            <div
              class="relative rounded-3xl overflow-hidden
                     aspect-[4/3]
                     bg-[rgb(var(--bg-alt))]
                     border border-[rgb(var(--border)/0.08)]"
            >
              <img
                :src="product.gallery[activeImage] || product.hero"
                :alt="product.name"
                fetchpriority="high"
                class="absolute inset-0 w-full h-full object-cover"
              />
  
              <!-- Status badge top-right -->
              <div class="absolute top-5 right-5">
                <span
                  class="inline-flex items-center gap-2 px-3.5 py-2
                         rounded-full text-[0.72rem] font-bold tracking-wider uppercase
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
            </div>
  
            <!-- Thumbnail strip -->
            <div
              v-if="product.gallery.length > 1"
              class="grid grid-cols-4 gap-3 mt-4"
            >
              <button
                v-for="(img, i) in product.gallery"
                :key="i"
                type="button"
                class="relative rounded-xl overflow-hidden aspect-square
                       border-2 transition-all duration-300"
                :class="activeImage === i
                  ? 'border-leaf-500'
                  : 'border-transparent hover:border-leaf-500/40'"
                @click="activeImage = i"
              >
                <img
                  :src="img"
                  :alt="`${product.name} view ${i + 1}`"
                  loading="lazy"
                  class="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            </div>
          </div>
  
          <!-- ============ RIGHT: KEY INFO ============ -->
          <div ref="infoRef" class="lg:col-span-5">
  
            <!-- Category + grade -->
            <div class="flex flex-wrap items-center gap-2.5 mb-5">
              <span
                class="inline-flex items-center gap-1.5 px-3 py-1.5
                       rounded-full text-[0.72rem] font-bold tracking-wider uppercase
                       bg-leaf-500/10 border border-leaf-500/20
                       text-leaf-600 dark:text-leaf-400"
              >
                {{ product.category }}
              </span>
              <span
                class="inline-flex items-center gap-1.5 px-3 py-1.5
                       rounded-full text-[0.72rem] font-semibold
                       bg-harvest-500/10 border border-harvest-500/20
                       text-harvest-700 dark:text-harvest-400"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="3"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                {{ product.grade }}
              </span>
            </div>
  
            <!-- Name -->
            <h1
              ref="headlineRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1]
                     tracking-[-0.03em] text-[rgb(var(--text))] mb-4"
            >
              {{ product.name }}
            </h1>
  
            <!-- Short description -->
            <p
              ref="descRef"
              class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed mb-7"
            >
              {{ product.shortDescription }}
            </p>
  
            <!-- Price block -->
            <div
              ref="priceRef"
              class="rounded-2xl p-6 lg:p-7 mb-6
                     bg-gradient-to-br from-leaf-500/8 to-harvest-500/8
                     border border-leaf-500/20"
            >
              <div class="flex items-end justify-between gap-4 mb-5">
                <div>
                  <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                              uppercase tracking-wider font-bold mb-1.5">
                    Price from
                  </div>
                  <div class="flex items-baseline gap-2">
                    <span
                      class="font-display font-extrabold text-leaf-600 dark:text-leaf-400
                             text-[clamp(1.75rem,3.5vw,2.25rem)] leading-none
                             tracking-[-0.03em]"
                    >
                      {{ product.priceFrom }}
                    </span>
                    <span class="text-[rgb(var(--text-muted))] text-[0.9rem] font-medium">
                      {{ product.priceUnit }}
                    </span>
                  </div>
                </div>
  
                <div class="text-right">
                  <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                              uppercase tracking-wider font-bold mb-1.5">
                    MOQ
                  </div>
                  <div class="font-display font-bold text-[rgb(var(--text))]
                              text-[1.15rem]">
                    {{ product.moq }}
                  </div>
                </div>
              </div>
  
              <!-- Volume tiers preview -->
              <div class="pt-5 border-t border-[rgb(var(--border)/0.1)]">
                <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                            uppercase tracking-wider font-bold mb-3">
                  Volume pricing
                </div>
                <div class="grid grid-cols-3 gap-3">
                  <div
                    v-for="(tier, i) in product.pricingTiers.slice(0, 3)"
                    :key="i"
                    class="rounded-lg p-3 bg-[rgb(var(--surface))]"
                  >
                    <div class="text-[0.68rem] text-[rgb(var(--text-muted))]
                                font-semibold mb-1 truncate">
                      {{ tier.qty }}
                    </div>
                    <div class="text-[rgb(var(--text))] font-display font-bold
                                text-[0.92rem] leading-tight">
                      {{ tier.price }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Quick facts grid -->
            <div
              ref="factsRef"
              class="grid grid-cols-2 gap-3 mb-6"
            >
              <div
                v-for="fact in quickFacts"
                :key="fact.label"
                class="rounded-xl p-4
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.08)]"
              >
                <div class="flex items-center gap-2 mb-2">
                  <span
                    class="grid place-items-center w-7 h-7 rounded-lg
                           bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                    v-html="fact.icon"
                  />
                  <span class="text-[0.7rem] uppercase tracking-wider
                               font-bold text-[rgb(var(--text-muted))]">
                    {{ fact.label }}
                  </span>
                </div>
                <div class="font-display font-bold text-[rgb(var(--text))]
                            text-[0.9rem] leading-snug">
                  {{ fact.value }}
                </div>
              </div>
            </div>
  
            <!-- CTAs -->
            <div ref="ctaRef" class="space-y-3">
              <NuxtLink
                :to="`/contact?type=buyer&product=${product.slug}&action=quote`"
                class="btn w-full justify-center !py-4 !text-[0.95rem]
                       bg-leaf-500 text-white font-semibold
                       hover:bg-leaf-600 hover:-translate-y-0.5
                       shadow-[0_12px_28px_-10px_rgba(46,125,50,0.55)]"
              >
                Request a Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </NuxtLink>
  
              <div class="grid grid-cols-2 gap-3">
                <NuxtLink
                  v-if="product.shipping.sampleAvailable"
                  :to="`/contact?type=buyer&product=${product.slug}&action=sample`"
                  class="btn justify-center !py-3.5 !text-[0.88rem]
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.15)]
                         text-[rgb(var(--text))] font-semibold
                         hover:border-leaf-500 hover:text-leaf-600
                         dark:hover:text-leaf-400"
                >
                  Free Sample
                </NuxtLink>
  
                <a
                  href="https://wa.me/0000000000"
                  target="_blank"
                  rel="noopener"
                  class="btn justify-center !py-3.5 !text-[0.88rem]
                         bg-[#25D366] text-white font-semibold
                         hover:bg-[#1FB855]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
  
            <!-- Trust strip below CTAs -->
            <div
              ref="trustRef"
              class="mt-6 pt-5 border-t border-[rgb(var(--border)/0.1)]
                     flex items-center justify-center gap-5 flex-wrap
                     text-[0.78rem] text-[rgb(var(--text-muted))]"
            >
              <span class="inline-flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round"
                     class="text-leaf-500">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
                </svg>
                {{ product.certifications.length }} certifications
              </span>
              <span class="inline-flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round"
                     class="text-leaf-500">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                Ships in {{ product.leadTime }}
              </span>
              <span class="inline-flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round"
                     class="text-leaf-500">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
                Lab report included
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import type { Product } from '~/data/products'
  
  const props = defineProps<{ product: Product }>()
  
  const activeImage = ref(0)
  
  /* -------- Icons -------- */
  const icons = {
    ruler: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 8.7 8.7 21.3c-.4.4-1 .4-1.4 0L2.7 16.7c-.4-.4-.4-1 0-1.4L15.3 2.7c.4-.4 1-.4 1.4 0l4.6 4.6c.4.4.4 1 0 1.4Z"/></svg>`,
    box: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>`,
    ship: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21h20M5 21V10l7-5 7 5v11M12 10v11M9 13h6"/></svg>`,
    clock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  }
  
  const quickFacts = computed(() => [
    { label: 'Origin', value: props.product.origin, icon: icons.ruler },
    { label: 'Lead Time', value: props.product.leadTime, icon: icons.clock },
    { label: 'Port', value: props.product.shipping.port.split(',')[0], icon: icons.ship },
    { label: 'Capacity', value: props.product.shipping.containerCapacity.split(' per ')[0], icon: icons.box },
  ])
  
  /* -------- Status helpers -------- */
  const statusPill = (s: string) =>
    ({
      ready:    'bg-leaf-500/25 border-leaf-400/40 text-leaf-100',
      seasonal: 'bg-harvest-500/25 border-harvest-400/40 text-harvest-100',
      preorder: 'bg-blue-500/25 border-blue-400/40 text-blue-100',
    }[s] || '')
  
  const statusDot = (s: string) =>
    ({
      ready:    'bg-leaf-400 animate-pulse',
      seasonal: 'bg-harvest-400',
      preorder: 'bg-blue-400',
    }[s] || '')
  
  const statusLabel = (s: string) =>
    ({ ready: 'In Stock', seasonal: 'Seasonal', preorder: 'Pre-Order' }[s] || '')
  
  /* -------- Refs -------- */
  const sectionRef    = ref<HTMLElement | null>(null)
  const breadcrumbRef = ref<HTMLElement | null>(null)
  const galleryRef    = ref<HTMLElement | null>(null)
  const infoRef       = ref<HTMLElement | null>(null)
  const headlineRef   = ref<HTMLElement | null>(null)
  const descRef       = ref<HTMLElement | null>(null)
  const priceRef      = ref<HTMLElement | null>(null)
  const factsRef      = ref<HTMLElement | null>(null)
  const ctaRef        = ref<HTMLElement | null>(null)
  const trustRef      = ref<HTMLElement | null>(null)
  
  /* -------- GSAP -------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [breadcrumbRef.value, galleryRef.value, headlineRef.value, descRef.value,
         priceRef.value, factsRef.value, ctaRef.value, trustRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0 }
      )
      return
    }
  
    ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 })
  
      tl
        .from(breadcrumbRef.value, { y: 16, autoAlpha: 0, duration: 0.5 })
        .from(galleryRef.value,   { x: -40, autoAlpha: 0, duration: 0.9 }, '-=0.2')
        .from(headlineRef.value,  { y: 40, autoAlpha: 0, duration: 0.9, ease: 'power4.out' }, '-=0.6')
        .from(descRef.value,      { y: 24, autoAlpha: 0, duration: 0.7 }, '-=0.5')
        .from(priceRef.value,     { y: 30, autoAlpha: 0, duration: 0.8 }, '-=0.5')
        .from(factsRef.value?.children ?? [], {
          y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.08,
        }, '-=0.5')
        .from(ctaRef.value?.children ?? [], {
          y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.08,
        }, '-=0.4')
        .from(trustRef.value, { y: 12, autoAlpha: 0, duration: 0.5 }, '-=0.3')
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>