<template>
    <section
      id="packages"
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg))] overflow-hidden scroll-mt-24"
    >
      <!-- Ambient blobs -->
      <div
        class="absolute -top-32 left-1/4 w-[420px] h-[420px] rounded-full
               bg-leaf-500/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        class="absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full
               bg-harvest-500/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
  
      <div class="container-page relative">
  
        <!-- ============ HEADER ============ -->
        <div class="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
          <div
            ref="eyebrowRef"
            class="inline-flex items-center gap-2.5 mb-5
                   px-3.5 py-1.5 rounded-full
                   bg-harvest-500/10 border border-harvest-500/20
                   text-harvest-700 dark:text-harvest-400
                   text-[0.78rem] font-semibold tracking-wider uppercase"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-harvest-500 animate-pulse" />
            2026 Allocations Open
          </div>
  
          <h2
            ref="headingRef"
            class="font-display font-extrabold
                   text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                   tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
          >
            Choose the tier that<br />
            <span class="text-harvest-500">matches your horizon.</span>
          </h2>
  
          <p
            ref="descRef"
            class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed"
          >
            Every package is backed by real hectares, audited yields, and
            quarterly reporting. No hidden fees. No performance-based surprises.
          </p>
        </div>
  
        <!-- ============ PRICING TIERS ============ -->
        <div
          ref="gridRef"
          class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7
                 items-stretch max-w-6xl mx-auto"
        >
          <article
            v-for="(tier, i) in tiers"
            :key="tier.name"
            :ref="(el) => { if (el) tierRefs[i] = el as HTMLElement }"
            class="tier-card relative flex flex-col
                   rounded-2xl overflow-hidden
                   transition-all duration-500
                   will-change-transform"
            :class="[
              tier.featured
                ? 'bg-gradient-to-br from-leaf-700 via-leaf-800 to-leaf-900 text-white lg:-translate-y-3 lg:scale-[1.03] shadow-[0_35px_70px_-25px_rgba(46,125,50,0.55)] border border-leaf-600/40 z-10'
                : 'bg-[rgb(var(--surface))] border border-[rgb(var(--border)/0.1)] hover:-translate-y-1.5 hover:border-leaf-500/30 hover:shadow-[0_25px_50px_-25px_rgba(46,125,50,0.35)]',
            ]"
          >
            <!-- Featured badge -->
            <div
              v-if="tier.featured"
              class="absolute top-0 left-1/2 -translate-x-1/2
                     px-4 py-1.5 rounded-b-lg
                     bg-harvest-500 text-leaf-900
                     text-[0.68rem] font-extrabold tracking-wider uppercase
                     shadow-lg z-20"
            >
              Most Popular
            </div>
  
            <!-- Decorative circle (featured) -->
            <div
              v-if="tier.featured"
              class="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none"
            />
  
            <!-- ========== HEADER ========== -->
            <div class="relative p-7 lg:p-8 pb-6">
              <!-- Tagline -->
              <div
                class="inline-block text-[0.72rem] font-bold uppercase tracking-wider mb-1.5"
                :class="tier.featured ? 'text-harvest-400' : 'text-leaf-600 dark:text-leaf-400'"
              >
                {{ tier.tagline }}
              </div>
  
              <!-- Name -->
              <h3
                class="font-display font-extrabold
                       text-[1.55rem] lg:text-[1.75rem] leading-tight
                       tracking-[-0.02em] mb-2"
                :class="tier.featured ? 'text-white' : 'text-[rgb(var(--text))]'"
              >
                {{ tier.name }}
              </h3>
  
              <!-- Summary -->
              <p
                class="text-[0.9rem] leading-relaxed mb-7 min-h-[3.2rem]"
                :class="tier.featured ? 'text-white/70' : 'text-[rgb(var(--text-muted))]'"
              >
                {{ tier.summary }}
              </p>
  
              <!-- Price -->
              <div class="flex items-end gap-2 mb-2">
                <span
                  class="font-display font-extrabold leading-none
                         text-[clamp(2.1rem,4vw,2.85rem)] tracking-[-0.03em]"
                  :class="tier.featured ? 'text-white' : 'text-[rgb(var(--text))]'"
                >
                  {{ tier.price }}
                </span>
                <span
                  class="text-[0.85rem] font-medium mb-1.5"
                  :class="tier.featured ? 'text-white/60' : 'text-[rgb(var(--text-muted))]'"
                >
                  {{ tier.unit }}
                </span>
              </div>
  
              <!-- Yield chip -->
              <div
                class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full
                       text-[0.72rem] font-bold tracking-wide mb-6"
                :class="tier.featured
                  ? 'bg-harvest-500/20 text-harvest-300'
                  : 'bg-leaf-500/12 text-leaf-600 dark:text-leaf-400'"
              >
                <span class="w-1 h-1 rounded-full bg-current" />
                {{ tier.yield }}
              </div>
  
              <!-- CTA -->
              <NuxtLink
                :to="tier.ctaHref"
                class="btn w-full justify-center !py-3.5 !text-[0.92rem]"
                :class="tier.featured
                  ? 'bg-harvest-500 text-leaf-900 hover:bg-harvest-400 hover:-translate-y-0.5 shadow-[0_10px_24px_-8px_rgba(249,168,37,0.6)]'
                  : 'bg-leaf-500 text-white hover:bg-leaf-600 hover:-translate-y-0.5 shadow-[0_8px_20px_-8px_rgba(46,125,50,0.5)]'"
              >
                {{ tier.cta }}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </NuxtLink>
            </div>
  
            <!-- ========== FEATURES LIST ========== -->
            <div
              class="relative px-7 lg:px-8 py-6 lg:py-7 border-t flex-1"
              :class="tier.featured
                ? 'border-white/10 bg-white/[0.03]'
                : 'border-[rgb(var(--border)/0.08)] bg-[rgb(var(--bg-alt)/0.4)]'"
            >
              <div
                class="text-[0.72rem] font-bold uppercase tracking-wider mb-4"
                :class="tier.featured ? 'text-white/60' : 'text-[rgb(var(--text-muted))]'"
              >
                What's included
              </div>
  
              <ul class="space-y-3">
                <li
                  v-for="feature in tier.features"
                  :key="feature.label"
                  class="flex items-start gap-3"
                >
                  <!-- Check icon (always green) -->
                  <span
                    class="shrink-0 grid place-items-center w-5 h-5 rounded-full mt-0.5"
                    :class="tier.featured
                      ? 'bg-harvest-500/20 text-harvest-400'
                      : 'bg-leaf-500/15 text-leaf-600 dark:text-leaf-400'"
                    v-html="checkIcon"
                  />
                  <span
                    class="text-[0.9rem] leading-relaxed flex-1"
                    :class="tier.featured ? 'text-white/85' : 'text-[rgb(var(--text))]'"
                  >
                    <span :class="feature.muted ? 'opacity-60' : ''">
                      {{ feature.label }}
                    </span>
                    <span
                      v-if="feature.value"
                      class="font-semibold ml-1"
                      :class="tier.featured ? 'text-white' : 'text-[rgb(var(--text))]'"
                    >
                      · {{ feature.value }}
                    </span>
                  </span>
                </li>
              </ul>
  
              <!-- Duration footer -->
              <div
                class="mt-7 pt-5 border-t text-[0.78rem] flex items-center gap-2"
                :class="tier.featured
                  ? 'border-white/10 text-white/55'
                  : 'border-[rgb(var(--border)/0.08)] text-[rgb(var(--text-muted))]'"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                {{ tier.duration }}
              </div>
            </div>
  
            <!-- Bottom accent (non-featured) -->
            <div
              v-if="!tier.featured"
              class="absolute bottom-0 left-0 right-0 h-1
                     bg-gradient-to-r from-leaf-500 to-harvest-500
                     scale-x-0 origin-left
                     group-hover:scale-x-100 transition-transform duration-500"
            />
          </article>
        </div>
  
        <!-- ============ ALLOCATION SCARCITY ============ -->
        <div
          ref="scarcityRef"
          class="mt-10 lg:mt-12 max-w-6xl mx-auto
                 rounded-2xl p-5 lg:p-6
                 bg-[rgb(var(--surface))]
                 border border-[rgb(var(--border)/0.08)]
                 flex flex-col sm:flex-row sm:items-center gap-5"
        >
          <div class="flex items-center gap-3 shrink-0">
            <span
              class="grid place-items-center w-10 h-10 rounded-xl
                     bg-harvest-500/15 text-harvest-600 dark:text-harvest-400"
              v-html="clockIcon"
            />
            <div>
              <div class="text-[0.72rem] uppercase tracking-wider
                          font-bold text-[rgb(var(--text-muted))]">
                2026 Allocations
              </div>
              <div class="text-[rgb(var(--text))] text-[0.95rem] font-semibold">
                Limited by land, not demand
              </div>
            </div>
          </div>
  
          <!-- Progress per tier -->
          <div class="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div v-for="tier in tiers" :key="tier.name">
              <div class="flex items-center justify-between mb-1.5
                          text-[0.78rem]">
                <span class="text-[rgb(var(--text))] font-medium">
                  {{ tier.name }}
                </span>
                <span class="text-[rgb(var(--text-muted))] font-semibold">
                  {{ tier.allocated }}%
                </span>
              </div>
              <div class="h-1.5 rounded-full bg-[rgb(var(--border)/0.15)] overflow-hidden">
                <div
                  class="h-full rounded-full origin-left
                         bg-gradient-to-r from-leaf-500 to-harvest-500
                         transition-transform duration-1000"
                  :style="{ width: `${tier.allocated}%` }"
                />
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ COMPARISON TABLE (desktop) ============ -->
        <div
          ref="tableRef"
          class="mt-16 lg:mt-20 max-w-6xl mx-auto"
        >
          <div class="text-center mb-8">
            <div
              class="text-[rgb(var(--text-muted))] text-[0.78rem]
                     uppercase tracking-[0.2em] font-semibold mb-2"
            >
              Detailed Comparison
            </div>
            <h3
              class="font-display font-bold
                     text-[clamp(1.25rem,2.2vw,1.6rem)] leading-tight
                     tracking-[-0.02em] text-[rgb(var(--text))]"
            >
              Every detail, side by side.
            </h3>
          </div>
  
          <!-- Table (scrollable on mobile) -->
          <div class="rounded-2xl overflow-hidden
                      border border-[rgb(var(--border)/0.1)]
                      bg-[rgb(var(--surface))]">
            <div class="overflow-x-auto">
              <table class="w-full min-w-[640px] text-left">
                <thead>
                  <tr class="border-b border-[rgb(var(--border)/0.1)]
                             bg-[rgb(var(--bg-alt))]">
                    <th class="p-5 text-[0.75rem] uppercase tracking-wider
                               font-bold text-[rgb(var(--text-muted))]">
                      Feature
                    </th>
                    <th
                      v-for="tier in tiers"
                      :key="tier.name"
                      class="p-5 text-center min-w-[140px]"
                    >
                      <div
                        class="font-display font-bold text-[1rem]"
                        :class="tier.featured
                          ? 'text-leaf-600 dark:text-leaf-400'
                          : 'text-[rgb(var(--text))]'"
                      >
                        {{ tier.name }}
                      </div>
                      <div class="text-[0.78rem] text-[rgb(var(--text-muted))] mt-0.5">
                        {{ tier.price }}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in comparisonRows"
                    :key="row.feature"
                    :class="i % 2 === 0
                      ? 'bg-[rgb(var(--surface))]'
                      : 'bg-[rgb(var(--bg-alt)/0.4)]'"
                  >
                    <td class="p-5">
                      <div class="flex items-center gap-2.5">
                        <span
                          class="grid place-items-center w-6 h-6 rounded-md
                                 bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                          v-html="row.icon"
                        />
                        <span class="text-[0.9rem] font-medium text-[rgb(var(--text))]">
                          {{ row.feature }}
                        </span>
                      </div>
                    </td>
                    <td
                      v-for="(val, j) in row.values"
                      :key="j"
                      class="p-5 text-center"
                    >
                      <template v-if="typeof val === 'boolean'">
                        <span
                          class="inline-grid place-items-center w-6 h-6 rounded-full"
                          :class="val
                            ? 'bg-leaf-500/15 text-leaf-600 dark:text-leaf-400'
                            : 'bg-[rgb(var(--border)/0.15)] text-[rgb(var(--text-muted))]'"
                          v-html="val ? checkIcon : xIcon"
                        />
                      </template>
                      <template v-else>
                        <span
                          class="text-[0.9rem] font-medium"
                          :class="row.highlight
                            ? 'text-leaf-600 dark:text-leaf-400 font-semibold'
                            : 'text-[rgb(var(--text))]'"
                        >
                          {{ val }}
                        </span>
                      </template>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
        <!-- ============ ENTERPRISE STRIP ============ -->
        <div
          ref="enterpriseRef"
          class="mt-16 lg:mt-20 max-w-6xl mx-auto
                 rounded-3xl border border-[rgb(var(--border)/0.1)]
                 bg-[rgb(var(--surface))]
                 p-7 lg:p-10
                 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <!-- Left -->
          <div class="lg:col-span-7 flex items-start gap-5">
            <div
              class="shrink-0 grid place-items-center w-14 h-14 rounded-2xl
                     bg-gradient-to-br from-leaf-500 to-leaf-700
                     text-white shadow-[0_10px_24px_-8px_rgba(46,125,50,0.5)]"
              v-html="buildingIcon"
            />
            <div>
              <div
                class="inline-block text-[0.72rem] font-bold uppercase
                       tracking-wider text-harvest-600 dark:text-harvest-400 mb-2"
              >
                For Institutions
              </div>
              <h3
                class="font-display font-bold text-[rgb(var(--text))]
                       text-[1.35rem] lg:text-[1.55rem] leading-tight
                       tracking-[-0.02em] mb-3"
              >
                Enterprise & institutional investors
              </h3>
              <p class="text-[rgb(var(--text-muted))] text-[0.95rem] leading-relaxed max-w-xl">
                Custom allocations from <strong class="text-[rgb(var(--text))]">$250K</strong> upward.
                Direct estate co-ownership, board observer seats, and co-development
                rights on new plantations.
              </p>
            </div>
          </div>
  
          <!-- Right: CTAs -->
          <div class="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
            <NuxtLink
              to="/contact?type=enterprise"
              class="btn !px-6 !py-3.5
                     bg-leaf-500 text-white font-semibold
                     hover:bg-leaf-600 hover:-translate-y-0.5
                     shadow-[0_8px_24px_-8px_rgba(46,125,50,0.5)]"
            >
              Talk to Our Team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/legal/prospectus"
              class="btn !px-6 !py-3.5
                     border border-[rgb(var(--border)/0.15)]
                     text-[rgb(var(--text))]
                     hover:border-leaf-500 hover:text-leaf-600 dark:hover:text-leaf-400"
            >
              Read Prospectus
            </NuxtLink>
          </div>
        </div>
  
        <!-- ============ TRUST BAR ============ -->
        <div
          ref="trustRef"
          class="mt-12 lg:mt-14 max-w-6xl mx-auto
                 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          <div
            v-for="trust in trustMarkers"
            :key="trust.title"
            class="flex items-start gap-4"
          >
            <div
              class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                     bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
              v-html="trust.icon"
            />
            <div>
              <div class="font-semibold text-[0.95rem] text-[rgb(var(--text))] mb-1">
                {{ trust.title }}
              </div>
              <div class="text-[rgb(var(--text-muted))] text-[0.85rem] leading-relaxed">
                {{ trust.description }}
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ LEGAL FOOTNOTE ============ -->
        <div
          ref="footnoteRef"
          class="mt-14 max-w-3xl mx-auto text-center
                 text-[0.78rem] text-[rgb(var(--text-muted))] leading-relaxed"
        >
          <p>
            Yields shown are historical averages across audited estates and are
            not a guarantee of future returns. All investments are subject to
            agricultural risk, market price fluctuation, and applicable securities
            regulations. The complete terms, risk factors, and fee schedule are
            available in the
            <NuxtLink to="/legal/prospectus" class="underline decoration-dotted hover:text-leaf-600 dark:hover:text-leaf-400">
              investor prospectus
            </NuxtLink>.
          </p>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  /* -------- Icons -------- */
  const checkIcon = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`
  
  const xIcon = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`
  
  const clockIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`
  
  const buildingIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>`
  
  const shieldIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`
  
  const fileIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`
  
  const bankIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>`
  
  const rulerIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 8.7 8.7 21.3c-.4.4-1 .4-1.4 0L2.7 16.7c-.4-.4-.4-1 0-1.4L15.3 2.7c.4-.4 1-.4 1.4 0l4.6 4.6c.4.4.4 1 0 1.4Z"/><path d="m7.5 10.5 2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2"/></svg>`
  
  const percentIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`
  
  const calendarIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`
  
  const reportIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`
  
  const usersIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  
  const doorIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4h3a2 2 0 0 1 2 2v14M2 20h3M13 20h9M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.562Z"/></svg>`
  
  const airplaneIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`
  
  /* -------- Types -------- */
  interface Feature {
    label: string
    value?: string
    muted?: boolean
  }
  
  interface Tier {
    name: string
    tagline: string
    summary: string
    price: string
    unit: string
    yield: string
    duration: string
    allocated: number
    features: Feature[]
    cta: string
    ctaHref: string
    featured?: boolean
  }
  
  /* -------- Tiers data -------- */
  const tiers: Tier[] = [
    {
      name: 'Seedling',
      tagline: 'Entry Level',
      summary: 'A great first step into ethical agribusiness — own a share of a working estate.',
      price: '$5,000',
      unit: '/ 1 hectare',
      yield: 'Historical avg. 12–14% p.a.',
      duration: '5-year term with quarterly reporting',
      allocated: 78,
      features: [
        { label: 'Fractional ownership of 1 hectare' },
        { label: 'Palm or plantain cycle' },
        { label: 'Quarterly progress reports' },
        { label: 'Access to investor dashboard' },
        { label: 'Exit option at year 5' },
      ],
      cta: 'Choose Seedling',
      ctaHref: '/contact?type=investor&tier=seedling',
    },
    {
      name: 'Growth',
      tagline: 'Most Popular',
      summary: 'For investors who want meaningful exposure and priority access to premium harvests.',
      price: '$25,000',
      unit: '/ 5 hectares',
      yield: 'Historical avg. 15–18% p.a.',
      duration: '7-year term with priority exit',
      allocated: 45,
      features: [
        { label: 'Full ownership of 5 hectares' },
        { label: 'Choice of crop — palm, cocoa, or plantain' },
        { label: 'Priority access to harvest yields' },
        { label: 'Dedicated account manager' },
        { label: 'Annual on-site visit' },
        { label: 'Early exit option at year 5' },
      ],
      cta: 'Choose Growth',
      ctaHref: '/contact?type=investor&tier=growth',
      featured: true,
    },
    {
      name: 'Estate',
      tagline: 'Premium',
      summary: 'A flagship tier with maximum allocation, named estate rights, and co-development voice.',
      price: '$100,000',
      unit: '/ 25 hectares',
      yield: 'Historical avg. 18–22% p.a.',
      duration: '10-year term with structured exit',
      allocated: 32,
      features: [
        { label: 'Ownership of 25 hectares' },
        { label: 'Named estate plot rights' },
        { label: 'Co-development of new acreage' },
        { label: 'Quarterly board updates' },
        { label: 'Two annual on-site visits' },
        { label: 'Priority allocation in future estates' },
      ],
      cta: 'Choose Estate',
      ctaHref: '/contact?type=investor&tier=estate',
    },
  ]
  
  /* -------- Comparison table rows -------- */
  const comparisonRows = [
    {
      feature: 'Hectares owned',
      icon: rulerIcon,
      values: ['1 ha', '5 ha', '25 ha'],
    },
    {
      feature: 'Historical yield range',
      icon: percentIcon,
      values: ['12–14%', '15–18%', '18–22%'],
      highlight: true,
    },
    {
      feature: 'Lock-in period',
      icon: calendarIcon,
      values: ['5 years', '7 years', '10 years'],
    },
    {
      feature: 'Reporting frequency',
      icon: reportIcon,
      values: ['Quarterly', 'Quarterly', 'Quarterly + board'],
    },
    {
      feature: 'Dedicated account manager',
      icon: usersIcon,
      values: [false, true, true],
    },
    {
      feature: 'Early exit option',
      icon: doorIcon,
      values: ['Year 5', 'Year 5', 'Year 7'],
    },
    {
      feature: 'On-site visits per year',
      icon: airplaneIcon,
      values: ['—', '1 visit', '2 visits'],
    },
    {
      feature: 'Co-development rights',
      icon: buildingIcon,
      values: [false, false, true],
    },
  ]
  
  /* -------- Trust markers -------- */
  const trustMarkers = [
    {
      title: 'Independently Audited',
      description: 'Annual third-party audits of yields, land titles, and financials.',
      icon: shieldIcon,
    },
    {
      title: 'Full Legal Transparency',
      description: 'Investor prospectus, land deeds, and terms reviewed by counsel.',
      icon: fileIcon,
    },
    {
      title: 'Insured Against Loss',
      description: 'Every estate carries crop, weather, and liability insurance.',
      icon: bankIcon,
    },
  ]
  
  /* -------- Refs -------- */
  const sectionRef    = ref<HTMLElement | null>(null)
  const eyebrowRef    = ref<HTMLElement | null>(null)
  const headingRef    = ref<HTMLElement | null>(null)
  const descRef       = ref<HTMLElement | null>(null)
  const gridRef       = ref<HTMLElement | null>(null)
  const scarcityRef   = ref<HTMLElement | null>(null)
  const tableRef      = ref<HTMLElement | null>(null)
  const enterpriseRef = ref<HTMLElement | null>(null)
  const trustRef      = ref<HTMLElement | null>(null)
  const footnoteRef   = ref<HTMLElement | null>(null)
  const tierRefs: HTMLElement[] = []
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         ...tierRefs, scarcityRef.value, tableRef.value, enterpriseRef.value,
         trustRef.value, footnoteRef.value].filter(Boolean),
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
  
      /* --- Tier cards (stagger, featured slightly bigger) --- */
      const tiersEls = tierRefs.filter(Boolean)
      tiersEls.forEach((el, i) => {
        const featured = el.classList.contains('z-10')
        gsap.from(el, {
          y: featured ? 80 : 60,
          autoAlpha: 0,
          scale: featured ? 0.95 : 1,
          duration: 1,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.value,
            start: 'top 78%',
          },
        })
      })
  
      /* --- Scarcity strip --- */
      gsap.from(scarcityRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: scarcityRef.value, start: 'top 88%' },
      })
  
      /* --- Comparison table --- */
      gsap.from(tableRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: tableRef.value, start: 'top 85%' },
      })
  
      /* --- Enterprise strip --- */
      gsap.from(enterpriseRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: enterpriseRef.value, start: 'top 88%' },
      })
  
      /* --- Trust markers --- */
      const trustItems = trustRef.value?.children ?? []
      if (trustItems.length) {
        gsap.from(trustItems, {
          y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: trustRef.value, start: 'top 90%' },
        })
      }
  
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
    min-height: 100%;
  }
  </style>