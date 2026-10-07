<template>
    <section
      ref="sectionRef"
      class="relative py-20 lg:py-24 bg-[rgb(var(--bg-alt))]"
    >
      <div class="container-page">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
  
          <!-- ============ LEFT: DESCRIPTION + SPECS + PACKAGING ============ -->
          <div class="lg:col-span-8 space-y-14">
  
            <!-- ====== ABOUT THIS PRODUCT ====== -->
            <div>
              <div
                class="inline-flex items-center gap-2.5 mb-5
                       px-3.5 py-1.5 rounded-full
                       bg-leaf-500/10 border border-leaf-500/20
                       text-leaf-600 dark:text-leaf-400
                       text-[0.78rem] font-semibold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
                About This Product
              </div>
  
              <h2
                class="font-display font-extrabold
                       text-[clamp(1.35rem,2.5vw,1.85rem)] leading-tight
                       tracking-[-0.02em] text-[rgb(var(--text))] mb-5"
              >
                {{ product.name }} from our certified estates.
              </h2>
  
              <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed mb-8">
                {{ product.longDescription }}
              </p>
  
              <!-- Applications -->
              <div>
                <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                            uppercase tracking-wider font-bold mb-3">
                  Common Applications
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="app in product.applications"
                    :key="app"
                    class="px-3 py-1.5 rounded-lg
                           bg-[rgb(var(--surface))]
                           border border-[rgb(var(--border)/0.1)]
                           text-[rgb(var(--text))] text-[0.85rem] font-medium"
                  >
                    {{ app }}
                  </span>
                </div>
              </div>
            </div>
  
            <!-- ====== SPECIFICATIONS ====== -->
            <div>
              <div class="flex items-center gap-3 mb-6">
                <span
                  class="grid place-items-center w-10 h-10 rounded-xl
                         bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                  v-html="rulerIcon"
                />
                <h3 class="font-display font-bold text-[rgb(var(--text))]
                           text-[1.15rem] leading-tight">
                  Technical Specifications
                </h3>
              </div>
  
              <div
                class="rounded-2xl overflow-hidden
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.08)]"
              >
                <div
                  v-for="(spec, i) in product.specs"
                  :key="spec.label"
                  class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6
                         p-5 sm:px-6
                         transition-colors duration-200
                         hover:bg-[rgb(var(--bg)/0.5)]"
                  :class="i < product.specs.length - 1
                    ? 'border-b border-[rgb(var(--border)/0.06)]'
                    : ''"
                >
                  <div class="text-[rgb(var(--text-muted))] text-[0.85rem]
                              font-medium sm:col-span-1">
                    {{ spec.label }}
                  </div>
                  <div class="text-[rgb(var(--text))] font-semibold
                              text-[0.92rem] sm:col-span-2">
                    {{ spec.value }}
                  </div>
                </div>
              </div>
            </div>
  
            <!-- ====== PACKAGING OPTIONS ====== -->
            <div>
              <div class="flex items-center gap-3 mb-6">
                <span
                  class="grid place-items-center w-10 h-10 rounded-xl
                         bg-harvest-500/10 text-harvest-600 dark:text-harvest-400"
                  v-html="boxIcon"
                />
                <h3 class="font-display font-bold text-[rgb(var(--text))]
                           text-[1.15rem] leading-tight">
                  Packaging Options
                </h3>
              </div>
  
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  v-for="pack in product.packaging"
                  :key="pack.label"
                  class="flex items-start gap-4 p-5 rounded-2xl
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.08)]
                         transition-all duration-500
                         hover:border-harvest-500/25
                         hover:-translate-y-0.5"
                >
                  <span
                    class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                           bg-harvest-500/10 text-harvest-600 dark:text-harvest-400"
                    v-html="boxIcon"
                  />
                  <div>
                    <div class="font-semibold text-[rgb(var(--text))]
                                text-[0.95rem] leading-tight mb-1">
                      {{ pack.label }}
                    </div>
                    <div class="text-[rgb(var(--text-muted))] text-[0.84rem] leading-snug">
                      {{ pack.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- ====== KEY HIGHLIGHTS ====== -->
            <div>
              <div class="flex items-center gap-3 mb-6">
                <span
                  class="grid place-items-center w-10 h-10 rounded-xl
                         bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                  v-html="starIcon"
                />
                <h3 class="font-display font-bold text-[rgb(var(--text))]
                           text-[1.15rem] leading-tight">
                  Why Buyers Choose This
                </h3>
              </div>
  
              <ul class="space-y-3">
                <li
                  v-for="highlight in product.highlights"
                  :key="highlight"
                  class="flex items-start gap-3
                         p-4 rounded-xl
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.08)]"
                >
                  <span
                    class="shrink-0 grid place-items-center w-5 h-5 rounded-full mt-0.5
                           bg-leaf-500 text-white"
                    v-html="checkIcon"
                  />
                  <span class="text-[rgb(var(--text))] text-[0.92rem] leading-relaxed">
                    {{ highlight }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
  
          <!-- ============ RIGHT: STICKY SIDEBAR ============ -->
          <aside class="lg:col-span-4">
            <div class="lg:sticky lg:top-28 space-y-5">
  
              <!-- ====== ORIGIN ESTATE ====== -->
              <div
                class="rounded-2xl p-6
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.08)]"
              >
                <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                            uppercase tracking-wider font-bold mb-4">
                  Where It's Grown
                </div>
  
                <NuxtLink
                  :to="`/plantations/${product.estate.slug}`"
                  class="group block"
                >
                  <div class="flex items-start gap-4">
                    <span
                      class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                             bg-leaf-500/10 text-leaf-600 dark:text-leaf-400
                             group-hover:bg-leaf-500 group-hover:text-white
                             transition-all duration-300"
                      v-html="mapIcon"
                    />
                    <div class="min-w-0">
                      <div class="font-display font-bold text-[rgb(var(--text))]
                                  text-[1rem] leading-tight mb-1
                                  group-hover:text-leaf-600 dark:group-hover:text-leaf-400
                                  transition-colors">
                        {{ product.estate.name }}
                      </div>
                      <div class="text-[rgb(var(--text-muted))] text-[0.85rem] leading-snug">
                        {{ product.origin }}, Nigeria
                      </div>
                    </div>
                  </div>
  
                  <div class="mt-4 pt-4 border-t border-[rgb(var(--border)/0.08)]
                              flex items-center gap-1.5
                              text-leaf-600 dark:text-leaf-400
                              text-[0.85rem] font-semibold">
                    View estate details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2.4"
                         stroke-linecap="round" stroke-linejoin="round"
                         class="group-hover:translate-x-0.5 transition-transform">
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </div>
                </NuxtLink>
              </div>
  
              <!-- ====== CERTIFICATIONS ====== -->
              <div
                class="rounded-2xl p-6
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.08)]"
              >
                <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                            uppercase tracking-wider font-bold mb-4">
                  Certifications
                </div>
  
                <ul class="space-y-3">
                  <li
                    v-for="cert in product.certifications"
                    :key="cert"
                    class="flex items-center gap-3"
                  >
                    <span
                      class="shrink-0 grid place-items-center w-8 h-8 rounded-lg
                             bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                      v-html="shieldIcon"
                    />
                    <span class="text-[rgb(var(--text))] text-[0.9rem] font-medium">
                      {{ cert }}
                    </span>
                  </li>
                </ul>
              </div>
  
              <!-- ====== HAVE QUESTIONS ====== -->
              <div
                class="rounded-2xl p-6
                       bg-gradient-to-br from-leaf-500/8 to-harvest-500/8
                       border border-leaf-500/20"
              >
                <div class="flex items-center gap-3 mb-4">
                  <span
                    class="grid place-items-center w-10 h-10 rounded-xl
                           bg-leaf-500 text-white"
                    v-html="chatIcon"
                  />
                  <div>
                    <div class="font-display font-bold text-[rgb(var(--text))]
                                text-[1rem] leading-tight">
                      Questions about this product?
                    </div>
                    <div class="text-[rgb(var(--text-muted))] text-[0.78rem]">
                      We reply within 24 hours
                    </div>
                  </div>
                </div>
  
                <div class="space-y-2.5">
                  <NuxtLink
                    :to="`/contact?type=buyer&product=${product.slug}`"
                    class="btn w-full justify-center !py-3 !text-[0.85rem]
                           bg-leaf-500 text-white font-semibold
                           hover:bg-leaf-600"
                  >
                    Send Enquiry
                  </NuxtLink>
  
                  <a
                    href="https://wa.me/0000000000"
                    target="_blank"
                    rel="noopener"
                    class="btn w-full justify-center !py-3 !text-[0.85rem]
                           bg-white text-[rgb(var(--text))] font-semibold
                           border border-[rgb(var(--border)/0.15)]
                           hover:border-leaf-500"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
  
            </div>
          </aside>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import type { Product } from '~/data/products'
  
  defineProps<{ product: Product }>()
  
  const rulerIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 8.7 8.7 21.3c-.4.4-1 .4-1.4 0L2.7 16.7c-.4-.4-.4-1 0-1.4L15.3 2.7c.4-.4 1-.4 1.4 0l4.6 4.6c.4.4.4 1 0 1.4Z"/></svg>`
  const boxIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>`
  const starIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
  const checkIcon = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`
  const mapIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`
  const shieldIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`
  const chatIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
  </script>