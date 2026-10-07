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
                     bg-leaf-500/10 border border-leaf-500/20
                     text-leaf-600 dark:text-leaf-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
              Logistics & Shipping
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              From our port<br />
              <span class="text-leaf-500">to yours — fully documented.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
              We ship FCL and LCL to ports worldwide with all export documentation
              handled in-house. Transit times and shipping terms are fixed at the
              quotation stage — no surprises at the dock.
            </p>
          </div>
        </div>
  
        <!-- ============================================================
             PART 1: TRACK RECORD STRIP
             ============================================================ -->
        <div
          ref="trackRecordRef"
          class="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16 lg:mb-20"
        >
          <div
            v-for="stat in trackRecord"
            :key="stat.label"
            class="track-stat rounded-2xl p-6
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]
                   transition-all duration-500
                   hover:border-leaf-500/25
                   hover:-translate-y-0.5"
          >
            <div
              class="grid place-items-center w-11 h-11 rounded-xl mb-5
                     bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
              v-html="stat.icon"
            />
            <div
              class="font-display font-extrabold
                     text-[clamp(1.5rem,3vw,2.15rem)] leading-none
                     tracking-[-0.03em] text-[rgb(var(--text))] mb-2
                     tabular-nums"
            >
              <span
                class="stat-number"
                :data-target="stat.value"
                :data-suffix="stat.suffix || ''"
              >0</span>
            </div>
            <div class="text-[rgb(var(--text-muted))] text-[0.78rem]
                        uppercase tracking-wider font-semibold leading-tight">
              {{ stat.label }}
            </div>
          </div>
        </div>
  
        <!-- ============================================================
             PART 2: SHIPPING OPTIONS + TRANSIT TIMES
             ============================================================ -->
        <div class="mb-16 lg:mb-20">
  
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                          uppercase tracking-[0.2em] font-bold mb-2">
                01 — Shipping Options
              </div>
              <h3 class="font-display font-bold
                         text-[clamp(1.25rem,2.2vw,1.6rem)] leading-tight
                         tracking-[-0.02em] text-[rgb(var(--text))]">
                Choose the Incoterm that fits your operation.
              </h3>
            </div>
            <div class="text-[rgb(var(--text-muted))] text-[0.85rem]">
              Incoterms 2020 compliant
            </div>
          </div>
  
          <!-- Incoterms grid -->
          <div
            ref="incotermsRef"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
          >
            <div
              v-for="term in incoterms"
              :key="term.code"
              class="incoterm-card group relative rounded-2xl p-6
                     bg-[rgb(var(--surface))]
                     border transition-all duration-500
                     hover:-translate-y-1"
              :class="term.recommended
                ? 'border-leaf-500 shadow-[0_20px_45px_-18px_rgba(46,125,50,0.3)]'
                : 'border-[rgb(var(--border)/0.08)] hover:border-leaf-500/25 hover:shadow-[0_20px_40px_-18px_rgba(46,125,50,0.25)]'"
            >
              <div
                v-if="term.recommended"
                class="absolute -top-2.5 left-1/2 -translate-x-1/2
                       px-2.5 py-1 rounded-full
                       bg-leaf-500 text-white
                       text-[0.62rem] font-extrabold tracking-wider uppercase
                       shadow-md whitespace-nowrap"
              >
                Most Common
              </div>
  
              <div
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg mb-4
                       font-display font-extrabold text-[1.05rem]
                       tracking-wider"
                :class="term.recommended
                  ? 'bg-leaf-500 text-white'
                  : 'bg-[rgb(var(--bg-alt))] text-[rgb(var(--text))]'"
              >
                {{ term.code }}
              </div>
  
              <div class="font-display font-bold text-[rgb(var(--text))]
                          text-[0.95rem] leading-tight mb-3">
                {{ term.name }}
              </div>
  
              <p class="text-[rgb(var(--text-muted))] text-[0.85rem]
                        leading-relaxed mb-5">
                {{ term.description }}
              </p>
  
              <div class="pt-4 border-t border-[rgb(var(--border)/0.08)] space-y-2.5">
                <div class="flex items-start gap-2.5">
                  <span
                    class="shrink-0 mt-1 w-4 h-4 grid place-items-center rounded-full
                           bg-leaf-500/15 text-leaf-600 dark:text-leaf-400"
                  >
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="3.2"
                         stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </span>
                  <div class="text-[rgb(var(--text))] text-[0.8rem] leading-snug">
                    <span class="text-[rgb(var(--text-muted))] font-semibold">
                      We handle:
                    </span>
                    {{ term.weHandle }}
                  </div>
                </div>
                <div class="flex items-start gap-2.5">
                  <span
                    class="shrink-0 mt-1 w-4 h-4 grid place-items-center rounded-full
                           bg-harvest-500/15 text-harvest-600 dark:text-harvest-400"
                  >
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="3"
                         stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2v20M5 12h14"/>
                    </svg>
                  </span>
                  <div class="text-[rgb(var(--text))] text-[0.8rem] leading-snug">
                    <span class="text-[rgb(var(--text-muted))] font-semibold">
                      You handle:
                    </span>
                    {{ term.youHandle }}
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Transit table -->
          <div
            ref="transitCardRef"
            class="rounded-2xl overflow-hidden
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]"
          >
            <div class="p-6 lg:px-8 lg:py-6
                        bg-[rgb(var(--bg-alt))]
                        border-b border-[rgb(var(--border)/0.08)]">
              <div class="flex flex-col sm:flex-row sm:items-center
                          justify-between gap-3">
                <div class="flex items-center gap-3">
                  <span
                    class="grid place-items-center w-10 h-10 rounded-xl
                           bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                    v-html="routeIcon"
                  />
                  <div>
                    <div class="font-display font-bold text-[rgb(var(--text))]
                                text-[1rem] leading-tight">
                      Estimated Transit Times
                    </div>
                    <div class="text-[rgb(var(--text-muted))] text-[0.78rem]">
                      From {{ product.shipping.port }}
                    </div>
                  </div>
                </div>
  
                <div
                  class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                         bg-harvest-500/15 text-harvest-700 dark:text-harvest-400
                         text-[0.72rem] font-bold uppercase tracking-wider
                         self-start sm:self-auto"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.4"
                       stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  Average 14–35 days
                </div>
              </div>
            </div>
  
            <div>
              <div
                v-for="(route, i) in transitRoutes"
                :key="route.destination"
                class="transit-row grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6
                       px-6 lg:px-8 py-5
                       transition-colors duration-200
                       hover:bg-[rgb(var(--bg-alt)/0.6)]"
                :class="i < transitRoutes.length - 1
                  ? 'border-b border-[rgb(var(--border)/0.06)]'
                  : ''"
              >
                <div class="md:col-span-2 flex items-center gap-3">
                  <span
                    class="grid place-items-center w-9 h-9 rounded-lg
                           bg-leaf-500/10 text-leaf-600 dark:text-leaf-400 shrink-0"
                    v-html="mapPinIcon"
                  />
                  <div class="min-w-0">
                    <div class="font-display font-bold text-[rgb(var(--text))]
                                text-[0.95rem] leading-tight">
                      {{ route.region }}
                    </div>
                    <div class="text-[rgb(var(--text-muted))] text-[0.82rem]
                                truncate">
                      {{ route.destination }}
                    </div>
                  </div>
                </div>
  
                <div class="md:col-span-1">
                  <div class="text-[rgb(var(--text-muted))] text-[0.68rem]
                              uppercase tracking-wider font-bold mb-0.5">
                    Transit
                  </div>
                  <div class="font-display font-bold text-[rgb(var(--text))]
                              text-[0.92rem] tabular-nums">
                    {{ route.time }}
                  </div>
                </div>
  
                <div class="md:col-span-1">
                  <div class="text-[rgb(var(--text-muted))] text-[0.68rem]
                              uppercase tracking-wider font-bold mb-0.5">
                    Frequency
                  </div>
                  <div class="font-display font-bold text-[rgb(var(--text))]
                              text-[0.92rem]">
                    {{ route.frequency }}
                  </div>
                </div>
              </div>
            </div>
  
            <div class="p-6 lg:px-8 lg:py-5
                        bg-[rgb(var(--bg-alt))]
                        border-t border-[rgb(var(--border)/0.08)]">
              <div class="text-[rgb(var(--text-muted))] text-[0.82rem]
                          leading-relaxed flex items-start gap-2.5">
                <span class="shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round"
                       class="text-harvest-500">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                </span>
                <span>
                  Transit times exclude loading, customs clearance, and
                  destination port delays. Live tracking details are shared
                  once your container is loaded.
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============================================================
             PART 3: DOCUMENTATION + PACKAGING
             ============================================================ -->
        <div class="mb-16 lg:mb-20">
  
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                          uppercase tracking-[0.2em] font-bold mb-2">
                02 — Documentation
              </div>
              <h3 class="font-display font-bold
                         text-[clamp(1.25rem,2.2vw,1.6rem)] leading-tight
                         tracking-[-0.02em] text-[rgb(var(--text))]">
                Every shipment arrives with full export papers.
              </h3>
            </div>
            <div class="text-[rgb(var(--text-muted))] text-[0.85rem]">
              All documents issued in-house
            </div>
          </div>
  
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
  
            <div class="lg:col-span-8">
              <div
                ref="docsGridRef"
                class="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div
                  v-for="doc in documents"
                  :key="doc.name"
                  class="doc-card group flex items-start gap-4 p-5 rounded-2xl
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.08)]
                         transition-all duration-500
                         hover:border-leaf-500/25
                         hover:-translate-y-0.5"
                >
                  <span
                    class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                           bg-leaf-500/10 text-leaf-600 dark:text-leaf-400
                           transition-all duration-500
                           group-hover:bg-leaf-500 group-hover:text-white"
                    v-html="doc.icon"
                  />
                  <div class="min-w-0">
                    <div class="font-semibold text-[rgb(var(--text))]
                                text-[0.92rem] leading-tight mb-1">
                      {{ doc.name }}
                    </div>
                    <div class="text-[rgb(var(--text-muted))] text-[0.82rem]
                                leading-snug">
                      {{ doc.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <aside class="lg:col-span-4">
              <div
                ref="packagingCardRef"
                class="lg:sticky lg:top-28
                       rounded-2xl overflow-hidden
                       bg-gradient-to-br from-leaf-700 via-leaf-800 to-leaf-900
                       text-white
                       p-7 relative"
              >
                <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
                <div class="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-white/5" />
  
                <div class="relative z-10">
                  <div class="flex items-center gap-3 mb-6">
                    <span
                      class="grid place-items-center w-11 h-11 rounded-xl
                             bg-white/10 backdrop-blur-md border border-white/15
                             text-harvest-400"
                      v-html="packageIcon"
                    />
                    <div>
                      <div class="font-display font-bold text-white
                                  text-[1rem] leading-tight">
                        Packing Details
                      </div>
                      <div class="text-white/60 text-[0.78rem]">
                        Per shipment
                      </div>
                    </div>
                  </div>
  
                  <dl class="space-y-4 mb-7">
                    <div class="flex items-start justify-between gap-4
                                pb-4 border-b border-white/10">
                      <dt class="text-white/60 text-[0.82rem] font-medium">
                        Container
                      </dt>
                      <dd class="text-white text-[0.9rem] font-semibold text-right">
                        {{ product.shipping.containerCapacity }}
                      </dd>
                    </div>
                    <div class="flex items-start justify-between gap-4
                                pb-4 border-b border-white/10">
                      <dt class="text-white/60 text-[0.82rem] font-medium">
                        Origin Port
                      </dt>
                      <dd class="text-white text-[0.9rem] font-semibold text-right">
                        {{ product.shipping.port.split(',')[0] }}
                      </dd>
                    </div>
                    <div class="flex items-start justify-between gap-4
                                pb-4 border-b border-white/10">
                      <dt class="text-white/60 text-[0.82rem] font-medium">
                        Sample
                      </dt>
                      <dd class="text-white text-[0.9rem] font-semibold text-right">
                        {{ product.shipping.sampleAvailable ? 'Available' : 'Not available' }}
                      </dd>
                    </div>
                    <div class="flex items-start justify-between gap-4">
                      <dt class="text-white/60 text-[0.82rem] font-medium">
                        Sample Lead
                      </dt>
                      <dd class="text-white text-[0.9rem] font-semibold text-right">
                        {{ product.shipping.sampleLeadTime }}
                      </dd>
                    </div>
                  </dl>
  
                  <NuxtLink
                    :to="`/contact?type=buyer&product=${product.slug}&action=logistics`"
                    class="btn w-full justify-center !py-3
                           bg-harvest-500 text-leaf-900 font-semibold
                           hover:bg-harvest-400 hover:-translate-y-0.5
                           shadow-[0_8px_20px_-8px_rgba(249,168,37,0.6)]"
                  >
                    Ask About Shipping
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2.4"
                         stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </aside>
          </div>
        </div>
  
        <!-- ============ BOTTOM CTA STRIP ============ -->
        <div
          ref="ctaRef"
          class="rounded-3xl
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
              Logistics Team
            </div>
  
            <h3
              class="font-display font-extrabold text-white
                     text-[clamp(1.35rem,2.5vw,1.85rem)] leading-tight
                     tracking-[-0.02em] mb-4 max-w-xl"
            >
              Need a specific port, transit time,<br class="hidden sm:block" />
              or freight arrangement?
            </h3>
  
            <p class="text-white/75 text-[0.98rem] leading-relaxed max-w-lg">
              Our logistics desk handles custom routes, freight forwarding,
              and multi-container shipments. Tell us your destination and
              we'll provide a complete landed-cost estimate.
            </p>
          </div>
  
          <div class="lg:col-span-5 relative z-10 flex flex-col sm:flex-row lg:justify-end gap-3">
            <NuxtLink
              :to="`/contact?type=buyer&product=${product.slug}&action=logistics`"
              class="btn !px-6 !py-3.5
                     bg-white text-leaf-700 font-semibold
                     hover:bg-white/95 hover:-translate-y-0.5
                     shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
            >
              Contact Logistics
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
  import type { Product } from '~/data/products'
  
  gsap.registerPlugin(ScrollTrigger)
  
  defineProps<{ product: Product }>()
  
  /* -------- Icons -------- */
  const icons = {
    ship: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21h20M5 21V10l7-5 7 5v11M12 10v11M9 13h6"/></svg>`,
    globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    box: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>`,
    clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  }
  
  const routeIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>`
  
  const mapPinIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`
  
  const packageIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 9.4 7.55 4.24M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>`
  
  const docIcons = {
    invoice: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18M8 15h2M14 15h2M8 19h2M14 19h2"/></svg>`,
    cert: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    shield: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    clipboard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>`,
    flask: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v6l4 10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2l4-10V3z"/><path d="M7 14h10"/></svg>`,
  }
  
  /* -------- Track record -------- */
  const trackRecord = [
    { value: 240, suffix: '+', label: 'Containers shipped', icon: icons.box },
    { value: 18, suffix: '', label: 'Destination ports', icon: icons.globe },
    { value: 12, suffix: '', label: 'Countries served', icon: icons.ship },
    { value: 99.4, suffix: '%', label: 'On-time delivery', icon: icons.clock },
  ]
  
  /* -------- Incoterms -------- */
  const incoterms = [
    {
      code: 'FOB',
      name: 'Free On Board',
      description: 'You take ownership once goods cross the ship\'s rail at our port.',
      weHandle: 'Export, loading',
      youHandle: 'Freight, insurance',
      recommended: true,
    },
    {
      code: 'CIF',
      name: 'Cost, Insurance, Freight',
      description: 'We cover freight and marine insurance to your destination port.',
      weHandle: 'Export, freight, insurance',
      youHandle: 'Import, inland delivery',
    },
    {
      code: 'CFR',
      name: 'Cost & Freight',
      description: 'Like CIF, but you arrange your own marine insurance.',
      weHandle: 'Export, freight',
      youHandle: 'Insurance, import',
    },
    {
      code: 'DAP',
      name: 'Delivered At Place',
      description: 'We deliver to your named inland location — full door-to-door.',
      weHandle: 'Freight, clearance, delivery',
      youHandle: 'Unloading, import duty',
    },
  ]
  
  /* -------- Transit routes -------- */
  const transitRoutes = [
    { region: 'West Africa', destination: 'Tema, Abidjan, Dakar', time: '7–12 days', frequency: 'Weekly' },
    { region: 'Europe', destination: 'Rotterdam, Antwerp, Hamburg', time: '18–24 days', frequency: 'Weekly' },
    { region: 'Middle East', destination: 'Jebel Ali, Jeddah', time: '20–28 days', frequency: 'Bi-weekly' },
    { region: 'Asia', destination: 'Mumbai, Singapore, Shanghai', time: '32–42 days', frequency: 'Bi-weekly' },
    { region: 'North America', destination: 'New York, Houston, Montreal', time: '24–32 days', frequency: 'Monthly' },
  ]
  
  /* -------- Documents -------- */
  const documents = [
    { name: 'Commercial Invoice', description: 'Standard export invoice with full customs details.', icon: docIcons.invoice },
    { name: 'Bill of Lading', description: 'Original BOL issued by carrier, negotiable per agreement.', icon: icons.ship },
    { name: 'Certificate of Origin', description: 'Issued by NEPC, verified by Nigerian Chamber of Commerce.', icon: docIcons.cert },
    { name: 'Phytosanitary Certificate', description: 'Plant health compliance for destination country.', icon: docIcons.globe },
    { name: 'Quality Certificate', description: 'Independent lab report on batch parameters.', icon: docIcons.flask },
    { name: 'Packing List', description: 'Detailed pallet, drum, or container contents.', icon: docIcons.clipboard },
  ]
  
  /* -------- Refs -------- */
  const sectionRef        = ref<HTMLElement | null>(null)
  const eyebrowRef        = ref<HTMLElement | null>(null)
  const headingRef        = ref<HTMLElement | null>(null)
  const descRef           = ref<HTMLElement | null>(null)
  const trackRecordRef    = ref<HTMLElement | null>(null)
  const incotermsRef      = ref<HTMLElement | null>(null)
  const transitCardRef    = ref<HTMLElement | null>(null)
  const docsGridRef       = ref<HTMLElement | null>(null)
  const packagingCardRef  = ref<HTMLElement | null>(null)
  const ctaRef            = ref<HTMLElement | null>(null)
  
  /* ✅ NO ref arrays — query the DOM instead */
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    /* Query elements once */
    const trackEls = sectionRef.value?.querySelectorAll<HTMLElement>('.track-stat') ?? []
    const termEls  = sectionRef.value?.querySelectorAll<HTMLElement>('.incoterm-card') ?? []
    const routeEls = sectionRef.value?.querySelectorAll<HTMLElement>('.transit-row') ?? []
    const docEls   = sectionRef.value?.querySelectorAll<HTMLElement>('.doc-card') ?? []
  
    if (prefersReduced) {
      gsap.set(
        [
          eyebrowRef.value,
          headingRef.value,
          descRef.value,
          ...Array.from(trackEls),
          ...Array.from(termEls),
          ...Array.from(routeEls),
          ...Array.from(docEls),
          transitCardRef.value,
          packagingCardRef.value,
          ctaRef.value,
        ].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0 }
      )
      runCounters()
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
  
      /* --- Track record --- */
      if (trackEls.length) {
        gsap.from(trackEls, {
          y: 40, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: trackRecordRef.value,
            start: 'top 82%',
            onEnter: () => runCounters(),
          },
        })
      }
  
      /* --- Incoterms --- */
      if (termEls.length) {
        gsap.from(termEls, {
          y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: incotermsRef.value, start: 'top 82%' },
        })
      }
  
      /* --- Transit card --- */
      gsap.from(transitCardRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: transitCardRef.value, start: 'top 85%' },
      })
  
      /* --- Transit rows --- */
      if (routeEls.length) {
        gsap.from(routeEls, {
          y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: transitCardRef.value, start: 'top 72%' },
        })
      }
  
      /* --- Documents --- */
      if (docEls.length) {
        gsap.from(docEls, {
          y: 30, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: docsGridRef.value, start: 'top 82%' },
        })
      }
  
      /* --- Packaging card --- */
      gsap.from(packagingCardRef.value, {
        x: 40, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: docsGridRef.value, start: 'top 82%' },
      })
  
      /* --- CTA --- */
      gsap.from(ctaRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  
  /* ---------------------------------------------------------------
     COUNTERS
     --------------------------------------------------------------- */
  const runCounters = () => {
    const els = sectionRef.value?.querySelectorAll<HTMLElement>('.stat-number')
    if (!els) return
  
    els.forEach((el) => {
      const target = Number(el.dataset.target || 0)
      const suffix = el.dataset.suffix || ''
      const isDecimal = !Number.isInteger(target)
      const obj = { val: 0 }
  
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          const n = isDecimal
            ? obj.val.toFixed(1)
            : Math.round(obj.val).toLocaleString()
          el.textContent = `${n}${suffix}`
        },
      })
    })
  }
  </script>
  
  <style scoped>
  .incoterm-card,
  .doc-card {
    will-change: transform;
  }
  
  .stat-number {
    display: inline-block;
    font-variant-numeric: tabular-nums;
  }
  </style>