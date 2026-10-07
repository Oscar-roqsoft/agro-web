<template>
    <section
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg-alt))] overflow-hidden"
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
        <div class="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div
            ref="eyebrowRef"
            class="inline-flex items-center gap-2.5 mb-5
                   px-3.5 py-1.5 rounded-full
                   bg-leaf-500/10 border border-leaf-500/20
                   text-leaf-600 dark:text-leaf-400
                   text-[0.78rem] font-semibold tracking-wider uppercase"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
            Quality & Certifications
          </div>
  
          <h2
            ref="headingRef"
            class="font-display font-extrabold
                   text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                   tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
          >
            Every batch, verified<br />
            <span class="text-leaf-500">before it leaves the estate.</span>
          </h2>
  
          <p
            ref="descRef"
            class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed"
          >
            Quality isn't a marketing claim for us — it's a documented process.
            Here's how we ensure every shipment meets your market's standards.
          </p>
        </div>
  
        <!-- ============================================================
             PART 1: CERTIFICATIONS
             ============================================================ -->
        <div ref="certsSectionRef" class="mb-20 lg:mb-28">
  
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                          uppercase tracking-[0.2em] font-bold mb-2">
                01 — Certifications
              </div>
              <h3 class="font-display font-bold
                         text-[clamp(1.25rem,2.2vw,1.6rem)] leading-tight
                         tracking-[-0.02em] text-[rgb(var(--text))]">
                Standards we're certified against.
              </h3>
            </div>
            <div class="text-[rgb(var(--text-muted))] text-[0.85rem]">
              Verified annually by independent auditors
            </div>
          </div>
  
          <div
            ref="certsGridRef"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            <div
              v-for="cert in certificationDetails"
              :key="cert.name"
              class="cert-card group relative rounded-2xl p-6
                     bg-[rgb(var(--surface))]
                     border border-[rgb(var(--border)/0.08)]
                     transition-all duration-500
                     hover:-translate-y-1
                     hover:border-leaf-500/25
                     hover:shadow-[0_20px_40px_-18px_rgba(46,125,50,0.25)]"
            >
              <div
                class="grid place-items-center w-12 h-12 rounded-xl mb-5
                       transition-transform duration-500
                       group-hover:scale-110
                       bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                v-html="cert.icon"
              />
  
              <div class="font-display font-bold text-[rgb(var(--text))]
                          text-[1.05rem] leading-tight mb-2">
                {{ cert.name }}
              </div>
  
              <p class="text-[rgb(var(--text-muted))] text-[0.85rem]
                        leading-relaxed mb-4">
                {{ cert.description }}
              </p>
  
              <div class="flex items-center justify-between pt-4
                          border-t border-[rgb(var(--border)/0.08)]">
                <span class="text-[0.72rem] text-[rgb(var(--text-muted))]
                             font-semibold">
                  Since {{ cert.since }}
                </span>
                <span
                  class="inline-flex items-center gap-1.5 px-2 py-1 rounded-md
                         text-[0.68rem] font-bold uppercase tracking-wider
                         bg-leaf-500/15 text-leaf-700 dark:text-leaf-400"
                >
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="3.2"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============================================================
             PART 2: QC PROCESS
             ============================================================ -->
        <div ref="processSectionRef" class="mb-20 lg:mb-28">
  
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                          uppercase tracking-[0.2em] font-bold mb-2">
                02 — Quality Control Process
              </div>
              <h3 class="font-display font-bold
                         text-[clamp(1.25rem,2.2vw,1.6rem)] leading-tight
                         tracking-[-0.02em] text-[rgb(var(--text))]">
                Four checkpoints before shipping.
              </h3>
            </div>
            <div class="text-[rgb(var(--text-muted))] text-[0.85rem]">
              Every batch, every time
            </div>
          </div>
  
          <div
            ref="processTrackRef"
            class="relative rounded-2xl overflow-hidden
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]
                   p-6 lg:p-10"
          >
            <!-- Connecting line (desktop only) -->
            <div
              class="hidden lg:block absolute top-[112px] left-[12%] right-[12%]
                     h-[2px] bg-[rgb(var(--border)/0.15)]"
              aria-hidden="true"
            >
              <div
                ref="processProgressRef"
                class="h-full origin-left scale-x-0
                       bg-gradient-to-r from-leaf-500 to-harvest-500"
                style="transform-origin: left center;"
              />
            </div>
  
            <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              <div
                v-for="(step, i) in qcSteps"
                :key="step.title"
                class="qc-step relative text-center lg:text-left"
              >
                <div class="flex justify-center lg:justify-start mb-5">
                  <div
                    class="qc-node relative
                           grid place-items-center
                           w-14 h-14 rounded-full
                           bg-[rgb(var(--bg))]
                           border-2 border-[rgb(var(--border)/0.2)]
                           transition-all duration-500"
                  >
                    <span
                      class="qc-node-icon text-[rgb(var(--text-muted))]
                             transition-colors duration-500"
                      v-html="step.icon"
                    />
                    <span
                      class="absolute -top-1 -right-1
                             grid place-items-center
                             w-5 h-5 rounded-full
                             bg-harvest-500 text-white
                             text-[0.62rem] font-extrabold
                             shadow-md"
                    >
                      {{ i + 1 }}
                    </span>
                  </div>
                </div>
  
                <div class="font-display font-bold text-[rgb(var(--text))]
                            text-[1rem] leading-tight mb-2.5">
                  {{ step.title }}
                </div>
  
                <p class="text-[rgb(var(--text-muted))] text-[0.86rem]
                          leading-relaxed max-w-xs mx-auto lg:mx-0">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============================================================
             PART 3: LAB RESULTS + TRACEABILITY
             ============================================================ -->
        <div ref="labSectionRef">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
  
            <!-- LEFT: LAB RESULTS -->
            <div class="lg:col-span-7">
              <div class="mb-8">
                <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                            uppercase tracking-[0.2em] font-bold mb-2">
                  03 — Lab Results
                </div>
                <h3 class="font-display font-bold
                           text-[clamp(1.25rem,2.2vw,1.6rem)] leading-tight
                           tracking-[-0.02em] text-[rgb(var(--text))] mb-3">
                  Latest verified batch analysis.
                </h3>
                <p class="text-[rgb(var(--text-muted))] text-[0.95rem] leading-relaxed">
                  Independent laboratory analysis of our most recent shipment.
                  Updated with every production run.
                </p>
              </div>
  
              <div
                ref="labCardRef"
                class="rounded-2xl overflow-hidden
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.08)]"
              >
                <div class="flex flex-col sm:flex-row sm:items-center
                            justify-between gap-4 p-6
                            bg-[rgb(var(--bg))]">
                  <div class="flex items-center gap-3">
                    <span
                      class="grid place-items-center w-10 h-10 rounded-xl
                             bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                      v-html="flaskIcon"
                    />
                    <div>
                      <div class="font-display font-bold text-[rgb(var(--text))]
                                  text-[1rem] leading-tight">
                        Batch Analysis Report
                      </div>
                      <div class="text-[rgb(var(--text-muted))] text-[0.78rem]">
                        Tested {{ labDate }}
                      </div>
                    </div>
                  </div>
  
                  <div
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                           bg-leaf-500/15 text-leaf-700 dark:text-leaf-400
                           text-[0.72rem] font-bold uppercase tracking-wider
                           self-start sm:self-auto"
                  >
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="3.2"
                         stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    Passed All Specs
                  </div>
                </div>
  
                <div class="border-t border-[rgb(var(--border)/0.08)]">
                  <div
                    v-for="(param, i) in product.labParams"
                    :key="param.label"
                    class="grid grid-cols-3 gap-4 px-6 py-4
                           transition-colors duration-200
                           hover:bg-[rgb(var(--bg)/0.5)]"
                    :class="i < product.labParams.length - 1
                      ? 'border-b border-[rgb(var(--border)/0.06)]'
                      : ''"
                  >
                    <div class="text-[rgb(var(--text-muted))] text-[0.85rem]
                                font-medium col-span-1">
                      {{ param.label }}
                    </div>
                    <div class="col-span-1">
                      <span class="font-display font-bold text-[rgb(var(--text))]
                                   text-[0.95rem] tabular-nums">
                        {{ param.value }}
                      </span>
                    </div>
                    <div class="col-span-1 flex justify-end">
                      <span
                        class="inline-flex items-center gap-1.5 px-2 py-1 rounded-md
                               bg-leaf-500/10 text-leaf-700 dark:text-leaf-400
                               text-[0.68rem] font-bold uppercase"
                      >
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="3.2"
                             stroke-linecap="round" stroke-linejoin="round">
                          <path d="M20 6 9 17l-5-5"/>
                        </svg>
                        Pass
                      </span>
                    </div>
                  </div>
                </div>
  
                <div class="p-6 bg-[rgb(var(--bg))] flex flex-col sm:flex-row
                            items-start sm:items-center justify-between gap-4">
                  <div class="text-[rgb(var(--text-muted))] text-[0.82rem]
                              leading-relaxed max-w-sm">
                    Full lab report (with methodology, instruments, and analyst
                    signature) available on request.
                  </div>
                  <NuxtLink
                    :to="`/contact?type=buyer&product=${product.slug}&action=lab-report`"
                    class="btn !px-5 !py-3 !text-[0.85rem]
                           bg-leaf-500 text-white font-semibold
                           hover:bg-leaf-600 hover:-translate-y-0.5
                           shadow-[0_8px_20px_-8px_rgba(46,125,50,0.5)]
                           shrink-0"
                  >
                    Request Full Report
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2.4"
                         stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <path d="M7 10l5 5 5-5M12 15V3"/>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
  
            <!-- RIGHT: TRACEABILITY -->
            <div class="lg:col-span-5">
              <div
                ref="traceCardRef"
                class="rounded-2xl overflow-hidden
                       bg-gradient-to-br from-leaf-700 via-leaf-800 to-leaf-900
                       text-white
                       p-7 lg:p-8
                       relative"
              >
                <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
                <div class="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-white/5" />
  
                <div class="relative z-10">
                  <div class="flex items-center gap-3 mb-6">
                    <span
                      class="grid place-items-center w-11 h-11 rounded-xl
                             bg-white/10 backdrop-blur-md border border-white/15
                             text-harvest-400"
                      v-html="qrIcon"
                    />
                    <div>
                      <div class="font-display font-bold text-white
                                  text-[1rem] leading-tight">
                        Full Traceability
                      </div>
                      <div class="text-white/60 text-[0.78rem]">
                        Every batch, back to the plot
                      </div>
                    </div>
                  </div>
  
                  <p class="text-white/80 text-[0.95rem] leading-relaxed mb-6">
                    Each shipment carries a unique QR code linking to its full
                    production record — the exact estate, planting date, harvest
                    date, lab results, and export documentation.
                  </p>
  
                  <ul class="space-y-3 mb-7">
                    <li
                      v-for="item in traceabilityItems"
                      :key="item.label"
                      class="flex items-start gap-3"
                    >
                      <span
                        class="shrink-0 grid place-items-center w-5 h-5 rounded-full mt-0.5
                               bg-harvest-500 text-leaf-900"
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="3.2"
                             stroke-linecap="round" stroke-linejoin="round">
                          <path d="M20 6 9 17l-5-5"/>
                        </svg>
                      </span>
                      <div class="flex-1">
                        <div class="text-white text-[0.9rem] font-semibold
                                    leading-tight mb-0.5">
                          {{ item.label }}
                        </div>
                        <div class="text-white/60 text-[0.78rem]">
                          {{ item.value }}
                        </div>
                      </div>
                    </li>
                  </ul>
  
                  <div class="flex items-center gap-4 pt-6 border-t border-white/15">
                    <div class="shrink-0 w-20 h-20 rounded-xl bg-white p-2">
                      <svg viewBox="0 0 100 100" class="w-full h-full">
                        <rect x="0" y="0" width="100" height="100" fill="white"/>
                        <g fill="#0F2A11">
                          <rect x="8" y="8" width="24" height="24"/>
                          <rect x="14" y="14" width="12" height="12" fill="white"/>
                          <rect x="68" y="8" width="24" height="24"/>
                          <rect x="74" y="14" width="12" height="12" fill="white"/>
                          <rect x="8" y="68" width="24" height="24"/>
                          <rect x="14" y="74" width="12" height="12" fill="white"/>
                          <rect x="40" y="10" width="4" height="4"/>
                          <rect x="50" y="10" width="4" height="4"/>
                          <rect x="40" y="20" width="4" height="4"/>
                          <rect x="55" y="20" width="4" height="4"/>
                          <rect x="40" y="30" width="4" height="4"/>
                          <rect x="45" y="40" width="4" height="4"/>
                          <rect x="55" y="40" width="4" height="4"/>
                          <rect x="10" y="40" width="4" height="4"/>
                          <rect x="20" y="45" width="4" height="4"/>
                          <rect x="40" y="55" width="4" height="4"/>
                          <rect x="50" y="55" width="4" height="4"/>
                          <rect x="60" y="55" width="4" height="4"/>
                          <rect x="70" y="55" width="4" height="4"/>
                          <rect x="45" y="70" width="4" height="4"/>
                          <rect x="55" y="70" width="4" height="4"/>
                          <rect x="65" y="70" width="4" height="4"/>
                          <rect x="75" y="70" width="4" height="4"/>
                          <rect x="85" y="70" width="4" height="4"/>
                          <rect x="45" y="80" width="4" height="4"/>
                          <rect x="60" y="80" width="4" height="4"/>
                          <rect x="70" y="80" width="4" height="4"/>
                          <rect x="85" y="80" width="4" height="4"/>
                          <rect x="50" y="90" width="4" height="4"/>
                          <rect x="65" y="90" width="4" height="4"/>
                          <rect x="80" y="90" width="4" height="4"/>
                        </g>
                      </svg>
                    </div>
  
                    <div>
                      <div class="text-white/60 text-[0.68rem]
                                  uppercase tracking-wider font-bold mb-1">
                        Sample Batch ID
                      </div>
                      <div class="font-display font-extrabold text-white
                                  text-[0.95rem] tracking-wide">
                        GF-2026-PLM-0147
                      </div>
                      <div class="text-white/60 text-[0.75rem] mt-1">
                        Okitipupa Estate · Plot 12B
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ HONEST NOTE ============ -->
        <div
          ref="noteRef"
          class="mt-14 lg:mt-20 max-w-3xl mx-auto
                 rounded-2xl p-6 lg:p-7
                 bg-[rgb(var(--surface))]
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
              What we don't claim
            </div>
            <p class="text-[rgb(var(--text-muted))] text-[0.9rem] leading-relaxed">
              We don't promise that every batch will meet every certification
              threshold — agricultural products naturally vary. What we do
              promise is full disclosure. Every batch comes with a real lab
              report showing exactly what it contains, so you know precisely
              what you're buying.
            </p>
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
    leaf: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    globe: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    award: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  }
  
  const qcIcons = {
    field: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`,
    scale: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18M3 12a9 9 0 0 1 18 0 9 9 0 0 1-18 0z"/></svg>`,
    flask: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v6l4 10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2l4-10V3z"/><path d="M7 14h10"/></svg>`,
    package: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>`,
  }
  
  const flaskIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v6l4 10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2l4-10V3z"/><path d="M7 14h10"/></svg>`
  
  const qrIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20h.01"/></svg>`
  
  const infoIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`
  
  /* -------- Certifications data -------- */
  const certificationDetails = [
    {
      name: 'Rainforest Alliance',
      description: 'Sustainable agriculture meeting environmental and social standards.',
      since: '2022',
      icon: icons.leaf,
    },
    {
      name: 'ISO 14001',
      description: 'Environmental management system certified internationally.',
      since: '2022',
      icon: icons.shield,
    },
    {
      name: 'NEPC Export',
      description: 'Nigerian Export Promotion Council registered exporter.',
      since: '2019',
      icon: icons.globe,
    },
    {
      name: 'SON Approved',
      description: 'Standards Organisation of Nigeria product conformity.',
      since: '2021',
      icon: icons.award,
    },
  ]
  
  /* -------- QC Steps -------- */
  const qcSteps = [
    {
      title: 'Field Inspection',
      description: 'Agronomists walk each harvest batch before picking — checking ripeness, color, and any signs of disease.',
      icon: qcIcons.field,
    },
    {
      title: 'On-Site Grading',
      description: 'Every batch is weighed, sorted, and graded against international export standards.',
      icon: qcIcons.scale,
    },
    {
      title: 'Lab Verification',
      description: 'Samples sent to independent labs for FFA, moisture, impurities, and other key metrics.',
      icon: qcIcons.flask,
    },
    {
      title: 'Sealed Packaging',
      description: 'Approved batches are packed in export-grade containers and sealed with tamper-proof tags.',
      icon: qcIcons.package,
    },
  ]
  
  /* -------- Traceability items -------- */
  const traceabilityItems = [
    { label: 'Origin Estate & Plot', value: 'Okitipupa · Plot 12B' },
    { label: 'Harvest Date', value: 'Recorded per batch' },
    { label: 'Lab Analysis', value: 'Independent · 4-param report' },
    { label: 'Export Documents', value: 'COO, Phyto, BOL linked' },
  ]
  
  /* -------- Lab date (current month) -------- */
  const labDate = computed(() => {
    const now = new Date()
    const month = now.toLocaleString('en-US', { month: 'long' })
    return `${month} ${now.getFullYear()}`
  })
  
  /* -------- Refs -------- */
  const sectionRef         = ref<HTMLElement | null>(null)
  const eyebrowRef         = ref<HTMLElement | null>(null)
  const headingRef         = ref<HTMLElement | null>(null)
  const descRef            = ref<HTMLElement | null>(null)
  
  const certsSectionRef    = ref<HTMLElement | null>(null)
  const certsGridRef       = ref<HTMLElement | null>(null)
  
  const processSectionRef  = ref<HTMLElement | null>(null)
  const processTrackRef    = ref<HTMLElement | null>(null)
  const processProgressRef = ref<HTMLElement | null>(null)
  
  const labSectionRef      = ref<HTMLElement | null>(null)
  const labCardRef         = ref<HTMLElement | null>(null)
  const traceCardRef       = ref<HTMLElement | null>(null)
  
  const noteRef            = ref<HTMLElement | null>(null)
  
  /* ✅ NO ref arrays — we query the DOM instead */
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    /* Query elements once */
    const certEls = sectionRef.value?.querySelectorAll<HTMLElement>('.cert-card') ?? []
    const qcEls   = sectionRef.value?.querySelectorAll<HTMLElement>('.qc-step') ?? []
  
    if (prefersReduced) {
      gsap.set(
        [
          eyebrowRef.value,
          headingRef.value,
          descRef.value,
          ...Array.from(certEls),
          ...Array.from(qcEls),
          labCardRef.value,
          traceCardRef.value,
          noteRef.value,
        ].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0, scale: 1 }
      )
      if (processProgressRef.value) {
        gsap.set(processProgressRef.value, { scaleX: 1 })
      }
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
  
      /* --- Certifications grid --- */
      if (certEls.length) {
        gsap.from(certEls, {
          y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: certsGridRef.value, start: 'top 82%' },
        })
      }
  
      /* --- QC process --- */
      if (qcEls.length) {
        gsap.from(qcEls, {
          y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: processTrackRef.value, start: 'top 82%' },
        })
      }
  
      /* --- Progress line --- */
      if (processProgressRef.value) {
        gsap.to(processProgressRef.value, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: processTrackRef.value,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.8,
          },
        })
      }
  
      /* --- Lab card --- */
      gsap.from(labCardRef.value, {
        x: -40, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: labSectionRef.value, start: 'top 82%' },
      })
  
      /* --- Traceability card --- */
      gsap.from(traceCardRef.value, {
        x: 40, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: labSectionRef.value, start: 'top 82%' },
      })
  
      /* --- Honest note --- */
      gsap.from(noteRef.value, {
        y: 24, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: noteRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>
  
  <style scoped>
  .cert-card {
    will-change: transform;
  }
  
  .qc-node {
    will-change: transform, box-shadow, border-color, background-color;
  }
  </style>