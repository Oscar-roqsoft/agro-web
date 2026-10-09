<template>
    <section
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg))] overflow-hidden"
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
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
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
              Methodology & Verification
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              How we measure,<br />
              <span class="text-leaf-500">and who verifies it.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
              Every number in our report is traceable to a documented method,
              an external audit, or both. This page publishes our framework,
              shows the timeline of certifications, and discloses what we
              don't yet measure.
            </p>
          </div>
        </div>
  
        <!-- ============================================================
             PART 1: MEASUREMENT FRAMEWORK
             ============================================================ -->
        <div ref="frameworkRef" class="mb-20 lg:mb-28">
  
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                          uppercase tracking-[0.2em] font-bold mb-2">
                01 — Our Framework
              </div>
              <h3 class="font-display font-bold
                         text-[clamp(1.25rem,2.2vw,1.6rem)] leading-tight
                         tracking-[-0.02em] text-[rgb(var(--text))]">
                Four pillars, published openly.
              </h3>
            </div>
            <div class="text-[rgb(var(--text-muted))] text-[0.85rem]">
              Aligned with GRI Standards & UN SDGs
            </div>
          </div>
  
          <!-- Pillar cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              v-for="(pillar, i) in pillars"
              :key="pillar.title"
              class="pillar-card group relative flex flex-col
                     rounded-2xl p-6
                     bg-[rgb(var(--surface))]
                     border border-[rgb(var(--border)/0.08)]
                     transition-all duration-500
                     hover:-translate-y-1
                     hover:border-leaf-500/25
                     hover:shadow-[0_20px_45px_-18px_rgba(46,125,50,0.25)]"
            >
              <!-- Index badge -->
              <span
                class="absolute top-5 right-5
                       font-display font-bold text-[0.72rem]
                       text-[rgb(var(--text-muted)/0.4)] tabular-nums"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </span>
  
              <!-- Icon -->
              <div
                class="grid place-items-center w-12 h-12 rounded-xl mb-5
                       bg-leaf-500/10 text-leaf-600 dark:text-leaf-400
                       transition-transform duration-500
                       group-hover:scale-110"
                v-html="pillar.icon"
              />
  
              <!-- Title -->
              <h4
                class="font-display font-bold text-[rgb(var(--text))]
                       text-[1.05rem] leading-tight mb-2.5"
              >
                {{ pillar.title }}
              </h4>
  
              <!-- Description -->
              <p class="text-[rgb(var(--text-muted))] text-[0.86rem]
                        leading-relaxed mb-4 flex-1">
                {{ pillar.description }}
              </p>
  
              <!-- Metric -->
              <div
                class="pt-4 border-t border-[rgb(var(--border)/0.08)]"
              >
                <div class="text-[rgb(var(--text-muted))] text-[0.68rem]
                            uppercase tracking-wider font-bold mb-1.5">
                  Key metric
                </div>
                <div class="font-display font-bold text-[rgb(var(--text))]
                            text-[0.88rem] leading-tight">
                  {{ pillar.metric }}
                </div>
                <div class="text-[rgb(var(--text-muted))] text-[0.76rem]
                            mt-1">
                  Verified by {{ pillar.verifier }}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============================================================
             PART 2: AUDIT TIMELINE
             ============================================================ -->
        <div ref="auditRef" class="mb-20 lg:mb-28">
  
          <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div class="text-[rgb(var(--text-muted))] text-[0.72rem]
                          uppercase tracking-[0.2em] font-bold mb-2">
                02 — Certification Timeline
              </div>
              <h3 class="font-display font-bold
                         text-[clamp(1.25rem,2.2vw,1.6rem)] leading-tight
                         tracking-[-0.02em] text-[rgb(var(--text))]">
                Every certification, every year.
              </h3>
            </div>
            <div class="text-[rgb(var(--text-muted))] text-[0.85rem]">
              Independently renewed, not self-declared
            </div>
          </div>
  
          <!-- Timeline -->
          <div
            ref="timelineRef"
            class="relative rounded-2xl
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]
                   overflow-hidden"
          >
            <!-- Vertical rail -->
            <div
              class="absolute left-[22px] lg:left-[26px]
                     top-8 bottom-8 w-px bg-[rgb(var(--border)/0.15)]"
              aria-hidden="true"
            >
              <div
                ref="railRef"
                class="absolute top-0 left-0 w-full h-full
                       bg-gradient-to-b from-leaf-500 via-leaf-400 to-harvest-500
                       origin-top"
                style="transform: scaleY(0);"
              />
            </div>
  
            <!-- Cert rows -->
            <div class="p-4 lg:p-6">
              <div
                v-for="(cert, i) in certifications"
                :key="cert.name"
                class="cert-row relative flex items-start gap-5
                       py-5 px-2 lg:px-3
                       rounded-xl
                       transition-colors duration-200
                       hover:bg-[rgb(var(--bg-alt)/0.5)]"
                :class="i < certifications.length - 1
                  ? 'border-b border-[rgb(var(--border)/0.06)]'
                  : ''"
              >
                <!-- Node -->
                <div
                  class="cert-node relative shrink-0 z-10
                         grid place-items-center
                         w-10 h-10 lg:w-12 lg:h-12 rounded-full
                         bg-[rgb(var(--bg))]
                         border-2 transition-all duration-500
                         border-[rgb(var(--border)/0.2)]"
                >
                  <span
                    class="cert-node-icon text-[rgb(var(--text-muted))]
                           transition-colors duration-500"
                    v-html="cert.icon"
                  />
                </div>
  
                <!-- Content -->
                <div class="flex-1 min-w-0 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6">
                  <!-- Name + org -->
                  <div class="lg:col-span-5">
                    <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                      <h4 class="font-display font-bold text-[rgb(var(--text))]
                                 text-[1rem] leading-tight">
                        {{ cert.name }}
                      </h4>
                      <span
                        class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md
                               text-[0.66rem] font-bold uppercase tracking-wider"
                        :class="cert.status === 'active'
                          ? 'bg-leaf-500/15 text-leaf-700 dark:text-leaf-400'
                          : cert.status === 'in-progress'
                            ? 'bg-harvest-500/15 text-harvest-700 dark:text-harvest-400'
                            : 'bg-[rgb(var(--bg-alt))] text-[rgb(var(--text-muted))]'"
                      >
                        <span
                          class="w-1 h-1 rounded-full"
                          :class="cert.status === 'active'
                            ? 'bg-leaf-500'
                            : cert.status === 'in-progress'
                              ? 'bg-harvest-500'
                              : 'bg-[rgb(var(--text-muted))]'"
                        />
                        {{ cert.statusLabel }}
                      </span>
                    </div>
                    <div class="text-[rgb(var(--text-muted))] text-[0.82rem]">
                      Issued by {{ cert.issuer }}
                    </div>
                  </div>
  
                  <!-- Scope -->
                  <div class="lg:col-span-4">
                    <div class="text-[rgb(var(--text-muted))] text-[0.68rem]
                                uppercase tracking-wider font-bold mb-1">
                      Scope
                    </div>
                    <div class="text-[rgb(var(--text))] text-[0.85rem]
                                leading-snug">
                      {{ cert.scope }}
                    </div>
                  </div>
  
                  <!-- Date + renewal -->
                  <div class="lg:col-span-3">
                    <div class="text-[rgb(var(--text-muted))] text-[0.68rem]
                                uppercase tracking-wider font-bold mb-1">
                      Certified
                    </div>
                    <div class="text-[rgb(var(--text))] text-[0.85rem]
                                font-semibold leading-snug">
                      {{ cert.since }}
                    </div>
                    <div class="text-[rgb(var(--text-muted))] text-[0.76rem]
                                mt-0.5">
                      Next renewal: {{ cert.renewal }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============================================================
             PART 3: WHAT WE DON'T MEASURE (HONEST DISCLOSURE)
             ============================================================ -->
        <div ref="honestRef" class="mb-20 lg:mb-28">
          <div
            class="rounded-2xl overflow-hidden
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]
                   grid grid-cols-1 lg:grid-cols-12"
          >
            <!-- Left: heading -->
            <div class="lg:col-span-5 p-7 lg:p-9
                        bg-gradient-to-br from-harvest-500/8 to-leaf-500/8
                        border-b lg:border-b-0 lg:border-r border-[rgb(var(--border)/0.08)]">
              <div
                class="inline-flex items-center gap-2.5 mb-5
                       px-3 py-1.5 rounded-full
                       bg-harvest-500/15 border border-harvest-500/25
                       text-harvest-700 dark:text-harvest-400
                       text-[0.72rem] font-bold tracking-wider uppercase"
              >
                <span class="w-1 h-1 rounded-full bg-harvest-500" />
                Honest disclosure
              </div>
  
              <h3 class="font-display font-extrabold
                         text-[clamp(1.25rem,2.5vw,1.6rem)] leading-tight
                         tracking-[-0.02em] text-[rgb(var(--text))] mb-4">
                What we don't measure yet.
              </h3>
  
              <p class="text-[rgb(var(--text-muted))] text-[0.95rem] leading-relaxed">
                An honest impact report discloses gaps, not just wins. Here's
                what's outside our current framework — and when we plan to
                address each item.
              </p>
            </div>
  
            <!-- Right: gaps list -->
            <div class="lg:col-span-7 p-7 lg:p-9">
              <ul class="space-y-5">
                <li
                  v-for="(gap, i) in gaps"
                  :key="gap.item"
                  class="gap-item flex items-start gap-4
                         pb-5"
                  :class="i < gaps.length - 1
                    ? 'border-b border-[rgb(var(--border)/0.06)]'
                    : 'pb-0'"
                >
                  <span
                    class="shrink-0 grid place-items-center w-8 h-8 rounded-lg mt-0.5
                           bg-harvest-500/12 text-harvest-600 dark:text-harvest-400"
                    v-html="gap.icon"
                  />
                  <div class="flex-1 min-w-0">
                    <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                      <div class="font-semibold text-[rgb(var(--text))]
                                  text-[0.95rem] leading-tight">
                        {{ gap.item }}
                      </div>
                      <span
                        class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md
                               bg-[rgb(var(--bg-alt))]
                               text-[rgb(var(--text-muted))]
                               text-[0.66rem] font-bold uppercase tracking-wider"
                      >
                        Target: {{ gap.target }}
                      </span>
                    </div>
                    <p class="text-[rgb(var(--text-muted))] text-[0.85rem]
                              leading-relaxed">
                      {{ gap.reason }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <!-- ============================================================
             PART 4: DATA REQUEST STRIP
             ============================================================ -->
        <div
          ref="dataStripRef"
          class="rounded-3xl
                 bg-gradient-to-br from-leaf-600 via-leaf-700 to-leaf-800
                 relative overflow-hidden
                 p-7 lg:p-10
                 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <!-- Decorative circles -->
          <div class="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/5" />
          <div class="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5" />
  
          <!-- Left: copy -->
          <div class="lg:col-span-7 relative z-10">
            <div
              class="inline-flex items-center gap-2.5 mb-5
                     px-3.5 py-1.5 rounded-full
                     bg-white/10 backdrop-blur-md border border-white/20
                     text-harvest-300
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-harvest-400 animate-pulse" />
              Audit Access
            </div>
  
            <h3
              class="font-display font-extrabold text-white
                     text-[clamp(1.35rem,2.5vw,1.85rem)] leading-tight
                     tracking-[-0.02em] mb-4 max-w-xl"
            >
              Need the raw data, or a<br class="hidden sm:block" />
              letter from our auditors?
            </h3>
  
            <p class="text-white/75 text-[0.98rem] leading-relaxed max-w-lg">
              Institutional investors, buyers with compliance requirements, and
              journalists can request the full dataset, per-estate breakdowns,
              and direct letters from SGS, Rainforest Alliance, and ISO assessors.
            </p>
          </div>
  
          <!-- Right: actions -->
          <div class="lg:col-span-5 relative z-10 flex flex-col sm:flex-row lg:flex-col lg:justify-end gap-3">
            <NuxtLink
              to="/contact?type=audit&topic=data-request"
              class="btn !px-6 !py-3.5
                     bg-white text-leaf-700 font-semibold
                     hover:bg-white/95 hover:-translate-y-0.5
                     shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
            >
              Request Raw Data
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <path d="M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/contact?type=audit&topic=auditor-letter"
              class="btn !px-6 !py-3.5
                     bg-white/10 backdrop-blur-md
                     border border-white/25 text-white font-semibold
                     hover:bg-white/20 hover:border-white/40"
            >
              Request Auditor Letter
            </NuxtLink>
          </div>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  /* -------- Icons -------- */
  const icons = {
    leaf: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    users: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    globe: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    scale: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18M3 12a9 9 0 0 1 18 0 9 9 0 0 1-18 0z"/></svg>`,
  }
  
  const certIcons = {
    ra: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    iso: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    ft: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/></svg>`,
    globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    flask: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v6l4 10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2l4-10V3z"/><path d="M7 14h10"/></svg>`,
    alert: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 22h20L12 2zM12 8v6M12 18h.01"/></svg>`,
  }
  
  /* -------- Pillars data (renamed to avoid scope collision) -------- */
  const frameworkPillars = [
    {
      title: 'Environmental',
      description: 'Carbon sequestration, water use, waste reduction, and land restoration across every estate.',
      metric: '8.2kt CO₂ · 4.2M L water · 92% waste recycled',
      verifier: 'SGS + ISO 14001',
      icon: icons.leaf,
    },
    {
      title: 'Social & Labour',
      description: 'Fair wages, safe conditions, farmer support, and community reinvestment measured per capita.',
      metric: '340+ employees · 208+ farmers · living wage certified',
      verifier: 'Fairtrade International',
      icon: icons.users,
    },
    {
      title: 'Governance',
      description: 'Board composition, audit cadence, grievance mechanisms, and anti-corruption controls.',
      metric: 'Independent board · quarterly audits · zero incidents',
      verifier: 'External counsel + ISO',
      icon: icons.scale,
    },
    {
      title: 'Land & Biodiversity',
      description: 'Hectares under regenerative management, native species restored, and habitat corridors preserved.',
      metric: '1,200+ ha managed · 218 ha restored · 500 ha target by 2030',
      verifier: 'Rainforest Alliance',
      icon: icons.globe,
    },
  ]
  
  /* -------- Certifications timeline -------- */
  interface Certification {
    name: string
    issuer: string
    scope: string
    since: string
    renewal: string
    status: 'active' | 'in-progress' | 'pending'
    statusLabel: string
    icon: string
  }
  
  const certifications: Certification[] = [
    {
      name: 'Rainforest Alliance Certified',
      issuer: 'Rainforest Alliance',
      scope: 'Okitipupa Estate · Ikom Farm · Abeokuta Belt (870 ha)',
      since: 'March 2022',
      renewal: 'March 2027',
      status: 'active',
      statusLabel: 'Active',
      icon: certIcons.ra,
    },
    {
      name: 'ISO 14001 — Environmental Management',
      issuer: 'International Organization for Standardization',
      scope: 'All operations across all six estates',
      since: 'November 2022',
      renewal: 'November 2026',
      status: 'active',
      statusLabel: 'Active',
      icon: certIcons.iso,
    },
    {
      name: 'Fairtrade International',
      issuer: 'Fairtrade International',
      scope: 'Outgrower program · 208 partner farmers',
      since: 'August 2019',
      renewal: 'August 2026',
      status: 'active',
      statusLabel: 'Active',
      icon: certIcons.ft,
    },
    {
      name: 'NEPC Export Registration',
      issuer: 'Nigerian Export Promotion Council',
      scope: 'All export-bound produce',
      since: 'January 2019',
      renewal: 'Annual (auto-renewed)',
      status: 'active',
      statusLabel: 'Active',
      icon: certIcons.globe,
    },
    {
      name: 'GlobalG.A.P. Certification',
      issuer: 'GLOBALG.A.P. c/o FoodPLUS GmbH',
      scope: 'Epe Mixed Farm · Abeokuta Plantain Belt',
      since: 'Expected Q2 2026',
      renewal: '—',
      status: 'in-progress',
      statusLabel: 'In progress',
      icon: certIcons.flask,
    },
  ]
  
  /* -------- Gaps disclosure -------- */
  const gaps = [
    {
      item: 'Scope 3 emissions (supply chain)',
      reason: 'Currently we measure Scope 1 and 2 emissions. Scope 3 tracking — covering transport, packaging, and downstream use — is complex and requires partner-side data we don\'t yet have access to at scale.',
      target: 'Q4 2026',
      icon: certIcons.alert,
    },
    {
      item: 'Biodiversity index per estate',
      reason: 'We track hectares restored, but not species-level biodiversity. A partnership with a research institution to conduct quarterly bio-surveys is underway.',
      target: 'Q2 2026',
      icon: certIcons.alert,
    },
    {
      item: 'Water quality downstream',
      reason: 'We track water consumed and saved, but not the quality of water leaving our estates. Baseline water testing is being scoped with an environmental consultancy.',
      target: 'Q1 2027',
      icon: certIcons.alert,
    },
  ]
  
  /* -------- Refs -------- */
  const sectionRef      = ref<HTMLElement | null>(null)
  const eyebrowRef      = ref<HTMLElement | null>(null)
  const headingRef      = ref<HTMLElement | null>(null)
  const descRef         = ref<HTMLElement | null>(null)
  const frameworkRef    = ref<HTMLElement | null>(null)
  const auditRef        = ref<HTMLElement | null>(null)
  const timelineRef     = ref<HTMLElement | null>(null)
  const railRef         = ref<HTMLElement | null>(null)
  const honestRef       = ref<HTMLElement | null>(null)
  const dataStripRef    = ref<HTMLElement | null>(null)
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    /* Query elements once — using distinct variable names to avoid collisions */
    const pillarEls = sectionRef.value?.querySelectorAll<HTMLElement>('.pillar-card') ?? []
    const certRows  = sectionRef.value?.querySelectorAll<HTMLElement>('.cert-row') ?? []
    const gapItems  = sectionRef.value?.querySelectorAll<HTMLElement>('.gap-item') ?? []
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         ...Array.from(pillarEls), ...Array.from(certRows), ...Array.from(gapItems),
         honestRef.value, dataStripRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, scale: 1 }
      )
      if (railRef.value) gsap.set(railRef.value, { scaleY: 1 })
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
  
      /* --- Pillars stagger --- */
      if (pillarEls.length) {
        gsap.from(pillarEls, {
          y: 50, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: frameworkRef.value, start: 'top 80%' },
        })
      }
  
      /* --- Certification rail draw --- */
      if (railRef.value) {
        gsap.to(railRef.value, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.value,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        })
      }
  
      /* --- Cert rows reveal --- */
      if (certRows.length) {
        gsap.from(certRows, {
          x: -20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: timelineRef.value, start: 'top 80%' },
        })
  
        /* Node activation on scroll */
        certRows.forEach((row) => {
          const node = row.querySelector('.cert-node') as HTMLElement
          const icon = row.querySelector('.cert-node-icon') as HTMLElement
          if (!node) return
  
          ScrollTrigger.create({
            trigger: row,
            start: 'top 70%',
            onEnter: () => {
              gsap.to(node, {
                borderColor: 'rgb(46 125 50)',
                boxShadow: '0 0 0 6px rgba(46,125,50,0.15)',
                duration: 0.6,
                ease: 'power2.out',
              })
              if (icon) gsap.to(icon, { color: 'rgb(46 125 50)', duration: 0.5 })
            },
            onLeaveBack: () => {
              gsap.to(node, {
                borderColor: 'rgba(0,0,0,0.2)',
                boxShadow: '0 0 0 0 rgba(46,125,50,0)',
                duration: 0.4,
              })
              if (icon) gsap.to(icon, { color: 'rgb(107 114 128)', duration: 0.4 })
            },
          })
        })
      }
  
      /* --- Honest disclosure section --- */
      gsap.from(honestRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: honestRef.value, start: 'top 84%' },
      })
  
      if (gapItems.length) {
        gsap.from(gapItems, {
          x: 20, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: honestRef.value, start: 'top 78%' },
        })
      }
  
      /* --- Data request strip --- */
      gsap.from(dataStripRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: dataStripRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>
  
  <style scoped>
  .pillar-card,
  .cert-row,
  .gap-item {
    will-change: transform;
  }
  </style>