<template>
    <div
      ref="sectionRef"
      class="relative bg-[rgb(var(--bg))]"
    >
      <!-- ============================================================
           PILLAR 1: SOIL & LAND
           ============================================================ -->
      <section
        id="soil"
        ref="soilRef"
        class="relative py-24 lg:py-32 overflow-hidden scroll-mt-24"
      >
        <!-- Ambient blob -->
        <div
          class="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full
                 bg-leaf-500/6 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
  
        <div class="container-page relative">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
  
            <!-- LEFT: visual composition -->
            <div
              ref="soilVisualRef"
              class="lg:col-span-6 relative order-2 lg:order-1"
            >
              <!-- Main visual card -->
              <div
                class="relative rounded-3xl overflow-hidden
                       aspect-[4/3]
                       bg-gradient-to-br from-leaf-600 via-leaf-700 to-leaf-900
                       shadow-[0_30px_60px_-20px_rgba(46,125,50,0.4)]"
              >
                <!-- Decorative circles -->
                <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
                <div class="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-white/5" />
  
                <!-- Content -->
                <div class="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div
                      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                             bg-white/10 backdrop-blur-md border border-white/20
                             text-harvest-300 text-[0.68rem]
                             font-bold uppercase tracking-wider mb-6"
                    >
                      <span class="w-1 h-1 rounded-full bg-harvest-400" />
                      Living Soil Program
                    </div>
  
                    <div
                      class="font-display font-extrabold text-white
                             text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                             tracking-[-0.02em] max-w-sm"
                    >
                      We rebuild<br />the soil<br />every season.
                    </div>
                  </div>
  
                  <!-- Big number -->
                  <div>
                    <div
                      class="font-display font-extrabold text-harvest-400
                             text-[clamp(3rem,7vw,4.5rem)] leading-none
                             tracking-[-0.04em] tabular-nums mb-2"
                    >
                      <span
                        class="stat-number"
                        data-target="218"
                        data-suffix="ha"
                      >0ha</span>
                    </div>
                    <div class="text-white/70 text-[0.88rem] font-medium">
                      under active restoration (2010 → today)
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Floating badge -->
              <div
                ref="soilBadgeRef"
                class="hidden lg:flex absolute -bottom-4 -right-4
                       items-center gap-2.5
                       px-4 py-3 rounded-2xl
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.1)]
                       shadow-[0_12px_30px_-10px_rgba(0,0,0,0.2)]"
              >
                <span class="grid place-items-center w-8 h-8 rounded-full
                             bg-leaf-500 text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.4"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10"/>
                    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/>
                  </svg>
                </span>
                <div>
                  <div class="text-[0.7rem] uppercase tracking-wider
                              font-bold text-[rgb(var(--text-muted))]">
                    Soil Organic Carbon
                  </div>
                  <div class="font-display font-bold text-[rgb(var(--text))]
                              text-[0.95rem] leading-tight">
                    +38% since 2016
                  </div>
                </div>
              </div>
            </div>
  
            <!-- RIGHT: content -->
            <div class="lg:col-span-6 order-1 lg:order-2">
              <div
                ref="soilEyebrowRef"
                class="inline-flex items-center gap-2.5 mb-5
                       px-3.5 py-1.5 rounded-full
                       bg-leaf-500/10 border border-leaf-500/20
                       text-leaf-600 dark:text-leaf-400
                       text-[0.78rem] font-semibold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
                01 · Soil & Land
              </div>
  
              <h2
                ref="soilHeadingRef"
                class="font-display font-extrabold
                       text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1]
                       tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
              >
                We farm soil,<br />
                <span class="text-leaf-500">not just crops.</span>
              </h2>
  
              <p
                ref="soilLeadRef"
                class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed mb-8 max-w-lg"
              >
                Healthy soil is the foundation of every harvest. We've spent 15
                years rebuilding the land we work — replacing synthetic inputs
                with living systems, and proving that regenerative farming
                produces better crops, not just cleaner consciences.
              </p>
  
              <!-- Practices list -->
              <div
                ref="soilPracticesRef"
                class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              >
                <div
                  v-for="practice in soilPractices"
                  :key="practice.title"
                  class="practice-card rounded-xl p-5
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.08)]
                         transition-all duration-300
                         hover:border-leaf-500/25
                         hover:-translate-y-0.5"
                >
                  <div class="flex items-start gap-3 mb-2.5">
                    <span
                      class="shrink-0 grid place-items-center w-8 h-8 rounded-lg
                             bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                      v-html="practice.icon"
                    />
                    <div class="font-display font-bold text-[rgb(var(--text))]
                                text-[0.92rem] leading-tight">
                      {{ practice.title }}
                    </div>
                  </div>
                  <p class="text-[rgb(var(--text-muted))] text-[0.84rem]
                            leading-relaxed">
                    {{ practice.description }}
                  </p>
                </div>
              </div>
  
              <!-- Honest note -->
              <div
                ref="soilNoteRef"
                class="flex items-start gap-3 p-4 rounded-xl
                       bg-[rgb(var(--bg-alt))]
                       border border-[rgb(var(--border)/0.08)]"
              >
                <span
                  class="shrink-0 grid place-items-center w-6 h-6 rounded-full mt-0.5
                         bg-harvest-500/15 text-harvest-600 dark:text-harvest-400"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="3"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2 2 22h20L12 2zM12 8v6M12 18h.01"/>
                  </svg>
                </span>
                <div class="text-[0.85rem] text-[rgb(var(--text-muted))]
                            leading-relaxed">
                  <span class="font-semibold text-[rgb(var(--text))]">
                    What we're still working on:
                  </span>
                  Full organic certification for our largest estate — targeted
                  for Q4 2026.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ============================================================
           PILLAR 2: WATER
           ============================================================ -->
      <section
        id="water"
        ref="waterRef"
        class="relative py-24 lg:py-32 overflow-hidden scroll-mt-24
               bg-[rgb(var(--bg-alt))]"
      >
        <!-- Ambient blob -->
        <div
          class="absolute -top-40 -right-32 w-[420px] h-[420px] rounded-full
                 bg-blue-500/6 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
  
        <div class="container-page relative">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
  
            <!-- LEFT: content -->
            <div class="lg:col-span-6">
              <div
                ref="waterEyebrowRef"
                class="inline-flex items-center gap-2.5 mb-5
                       px-3.5 py-1.5 rounded-full
                       bg-blue-500/10 border border-blue-500/20
                       text-blue-600 dark:text-blue-400
                       text-[0.78rem] font-semibold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500" />
                02 · Water
              </div>
  
              <h2
                ref="waterHeadingRef"
                class="font-display font-extrabold
                       text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1]
                       tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
              >
                Every drop<br />
                <span class="text-blue-500">accounted for.</span>
              </h2>
  
              <p
                ref="waterLeadRef"
                class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed mb-8 max-w-lg"
              >
                Water is the most contested resource in West African agriculture.
                We've invested heavily in systems that cut consumption while
                increasing yields — proving that efficiency and productivity
                aren't in conflict.
              </p>
  
              <!-- Practices -->
              <div
                ref="waterPracticesRef"
                class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              >
                <div
                  v-for="practice in waterPractices"
                  :key="practice.title"
                  class="practice-card rounded-xl p-5
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.08)]
                         transition-all duration-300
                         hover:border-blue-500/25
                         hover:-translate-y-0.5"
                >
                  <div class="flex items-start gap-3 mb-2.5">
                    <span
                      class="shrink-0 grid place-items-center w-8 h-8 rounded-lg
                             bg-blue-500/10 text-blue-600 dark:text-blue-400"
                      v-html="practice.icon"
                    />
                    <div class="font-display font-bold text-[rgb(var(--text))]
                                text-[0.92rem] leading-tight">
                      {{ practice.title }}
                    </div>
                  </div>
                  <p class="text-[rgb(var(--text-muted))] text-[0.84rem]
                            leading-relaxed">
                    {{ practice.description }}
                  </p>
                </div>
              </div>
  
              <!-- Honest note -->
              <div
                ref="waterNoteRef"
                class="flex items-start gap-3 p-4 rounded-xl
                       bg-[rgb(var(--bg))]
                       border border-[rgb(var(--border)/0.08)]"
              >
                <span
                  class="shrink-0 grid place-items-center w-6 h-6 rounded-full mt-0.5
                         bg-harvest-500/15 text-harvest-600 dark:text-harvest-400"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="3"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2 2 22h20L12 2zM12 8v6M12 18h.01"/>
                  </svg>
                </span>
                <div class="text-[0.85rem] text-[rgb(var(--text-muted))]
                            leading-relaxed">
                  <span class="font-semibold text-[rgb(var(--text))]">
                    What we're still working on:
                  </span>
                  Downstream water quality monitoring — baseline testing
                  begins Q1 2027.
                </div>
              </div>
            </div>
  
            <!-- RIGHT: visual composition -->
            <div
              ref="waterVisualRef"
              class="lg:col-span-6 relative"
            >
              <div
                class="relative rounded-3xl overflow-hidden
                       aspect-[4/3]
                       bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900
                       shadow-[0_30px_60px_-20px_rgba(59,130,246,0.4)]"
              >
                <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
                <div class="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-white/5" />
  
                <div class="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div
                      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                             bg-white/10 backdrop-blur-md border border-white/20
                             text-blue-200 text-[0.68rem]
                             font-bold uppercase tracking-wider mb-6"
                    >
                      <span class="w-1 h-1 rounded-full bg-blue-300" />
                      Water Efficiency Program
                    </div>
  
                    <div
                      class="font-display font-extrabold text-white
                             text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                             tracking-[-0.02em] max-w-sm"
                    >
                      Every litre<br />is measured,<br />tracked, and reused.
                    </div>
                  </div>
  
                  <div>
                    <div
                      class="font-display font-extrabold text-blue-200
                             text-[clamp(3rem,7vw,4.5rem)] leading-none
                             tracking-[-0.04em] tabular-nums mb-2"
                    >
                      <span
                        class="stat-number"
                        data-target="4.2"
                        data-decimals="1"
                        data-suffix="M L"
                      >0M L</span>
                    </div>
                    <div class="text-white/70 text-[0.88rem] font-medium">
                      saved annually vs. conventional irrigation
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Floating badge -->
              <div
                ref="waterBadgeRef"
                class="hidden lg:flex absolute -bottom-4 -left-4
                       items-center gap-2.5
                       px-4 py-3 rounded-2xl
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.1)]
                       shadow-[0_12px_30px_-10px_rgba(0,0,0,0.2)]"
              >
                <span class="grid place-items-center w-8 h-8 rounded-full
                             bg-blue-500 text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.4"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
                  </svg>
                </span>
                <div>
                  <div class="text-[0.7rem] uppercase tracking-wider
                              font-bold text-[rgb(var(--text-muted))]">
                    Drip irrigation
                  </div>
                  <div class="font-display font-bold text-[rgb(var(--text))]
                              text-[0.95rem] leading-tight">
                    62% less water used
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ============================================================
           PILLAR 3: COMMUNITY
           ============================================================ -->
      <section
        id="community"
        ref="communityRef"
        class="relative py-24 lg:py-32 overflow-hidden scroll-mt-24"
      >
        <!-- Ambient blob -->
        <div
          class="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full
                 bg-harvest-500/6 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
  
        <div class="container-page relative">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
  
            <!-- LEFT: visual -->
            <div
              ref="communityVisualRef"
              class="lg:col-span-6 relative order-2 lg:order-1"
            >
              <div
                class="relative rounded-3xl overflow-hidden
                       aspect-[4/3]
                       bg-gradient-to-br from-harvest-500 via-harvest-600 to-harvest-700
                       shadow-[0_30px_60px_-20px_rgba(249,168,37,0.4)]"
              >
                <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
                <div class="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-white/5" />
  
                <div class="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div
                      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                             bg-white/15 backdrop-blur-md border border-white/25
                             text-leaf-900 text-[0.68rem]
                             font-bold uppercase tracking-wider mb-6"
                    >
                      <span class="w-1 h-1 rounded-full bg-leaf-900" />
                      Community Program
                    </div>
  
                    <div
                      class="font-display font-extrabold text-leaf-900
                             text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                             tracking-[-0.02em] max-w-sm"
                    >
                      5% of net profit<br />goes back<br />to the community.
                    </div>
                  </div>
  
                  <div>
                    <div
                      class="font-display font-extrabold text-leaf-900
                             text-[clamp(3rem,7vw,4.5rem)] leading-none
                             tracking-[-0.04em] tabular-nums mb-2"
                    >
                      <span
                        class="stat-number"
                        data-target="340"
                        data-suffix="+"
                      >0+</span>
                    </div>
                    <div class="text-leaf-900/70 text-[0.88rem] font-semibold">
                      people directly employed across estates
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Floating badge -->
              <div
                ref="communityBadgeRef"
                class="hidden lg:flex absolute -bottom-4 -right-4
                       items-center gap-2.5
                       px-4 py-3 rounded-2xl
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.1)]
                       shadow-[0_12px_30px_-10px_rgba(0,0,0,0.2)]"
              >
                <span class="grid place-items-center w-8 h-8 rounded-full
                             bg-harvest-500 text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.4"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </span>
                <div>
                  <div class="text-[0.7rem] uppercase tracking-wider
                              font-bold text-[rgb(var(--text-muted))]">
                    Living wage
                  </div>
                  <div class="font-display font-bold text-[rgb(var(--text))]
                              text-[0.95rem] leading-tight">
                    Fairtrade certified
                  </div>
                </div>
              </div>
            </div>
  
            <!-- RIGHT: content -->
            <div class="lg:col-span-6 order-1 lg:order-2">
              <div
                ref="communityEyebrowRef"
                class="inline-flex items-center gap-2.5 mb-5
                       px-3.5 py-1.5 rounded-full
                       bg-harvest-500/10 border border-harvest-500/20
                       text-harvest-700 dark:text-harvest-400
                       text-[0.78rem] font-semibold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-harvest-500" />
                03 · Community
              </div>
  
              <h2
                ref="communityHeadingRef"
                class="font-display font-extrabold
                       text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1]
                       tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
              >
                Farmers first.<br />
                <span class="text-harvest-500">Always.</span>
              </h2>
  
              <p
                ref="communityLeadRef"
                class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed mb-8 max-w-lg"
              >
                An agricultural business is only as strong as the people who work
                its land. We pay above-market wages, invest in the communities we
                farm beside, and structure every partnership to benefit the farmer
                as much as the buyer.
              </p>
  
              <!-- Practices -->
              <div
                ref="communityPracticesRef"
                class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              >
                <div
                  v-for="practice in communityPractices"
                  :key="practice.title"
                  class="practice-card rounded-xl p-5
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.08)]
                         transition-all duration-300
                         hover:border-harvest-500/25
                         hover:-translate-y-0.5"
                >
                  <div class="flex items-start gap-3 mb-2.5">
                    <span
                      class="shrink-0 grid place-items-center w-8 h-8 rounded-lg
                             bg-harvest-500/10 text-harvest-600 dark:text-harvest-400"
                      v-html="practice.icon"
                    />
                    <div class="font-display font-bold text-[rgb(var(--text))]
                                text-[0.92rem] leading-tight">
                      {{ practice.title }}
                    </div>
                  </div>
                  <p class="text-[rgb(var(--text-muted))] text-[0.84rem]
                            leading-relaxed">
                    {{ practice.description }}
                  </p>
                </div>
              </div>
  
              <!-- Honest note -->
              <div
                ref="communityNoteRef"
                class="flex items-start gap-3 p-4 rounded-xl
                       bg-[rgb(var(--bg-alt))]
                       border border-[rgb(var(--border)/0.08)]"
              >
                <span
                  class="shrink-0 grid place-items-center w-6 h-6 rounded-full mt-0.5
                         bg-harvest-500/15 text-harvest-600 dark:text-harvest-400"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="3"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2 2 22h20L12 2zM12 8v6M12 18h.01"/>
                  </svg>
                </span>
                <div class="text-[0.85rem] text-[rgb(var(--text-muted))]
                            leading-relaxed">
                  <span class="font-semibold text-[rgb(var(--text))]">
                    What we're still working on:
                  </span>
                  Expanding outgrower program from 208 to 500 farmer families
                  by 2028.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  /* -------- Practice icons -------- */
  const practiceIcons = {
    compost: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M6 12h12M9 18h6"/></svg>`,
    cover: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22h20M4 18h16M6 14h12M8 10h8M10 6h4"/></svg>`,
    tree: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v10"/><path d="M12 12C12 7 8 3 3 3c0 5 4 9 9 9z"/><path d="M12 12c0-5 4-9 9-9 0 5-4 9-9 9z"/><path d="M12 22v-10"/></svg>`,
    test: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v6l4 10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2l4-10V3z"/><path d="M7 14h10"/></svg>`,
    drip: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`,
    rain: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6M8 14v6M12 16v6"/></svg>`,
    sensor: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>`,
    recycle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3M8.293 13.596 7.196 9.5 3.1 10.598M12.5 5.5 12 4l-2.5-2-2 3.5"/></svg>`,
    wage: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20M6 15h2M14 15h4"/></svg>`,
    school: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    health: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    training: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/></svg>`,
  }
  
  /* -------- Soil practices -------- */
  const soilPractices = [
    {
      title: 'Compost & Organic Matter',
      description: 'Every estate runs on-site composting, returning 100% of crop residue to the soil.',
      icon: practiceIcons.compost,
    },
    {
      title: 'Cover Cropping',
      description: 'Legume cover crops between rows fix nitrogen naturally — no synthetic fertilizer.',
      icon: practiceIcons.cover,
    },
    {
      title: 'Native Tree Corridors',
      description: 'Species-rich boundary plantings restore biodiversity and prevent soil erosion.',
      icon: practiceIcons.tree,
    },
    {
      title: 'Annual Soil Testing',
      description: 'Independent lab analysis of soil organic carbon, pH, and micronutrients on every plot.',
      icon: practiceIcons.test,
    },
  ]
  
  /* -------- Water practices -------- */
  const waterPractices = [
    {
      title: 'Drip Irrigation',
      description: 'Precision drip systems deliver water directly to roots — 62% less than flood irrigation.',
      icon: practiceIcons.drip,
    },
    {
      title: 'Rainwater Harvesting',
      description: 'Rain collection systems across all estates capture and store the wet-season surplus.',
      icon: practiceIcons.rain,
    },
    {
      title: 'Soil Moisture Sensors',
      description: 'IoT sensors monitor real-time soil moisture, triggering irrigation only when needed.',
      icon: practiceIcons.sensor,
    },
    {
      title: 'Water Recycling',
      description: 'Processing water is treated and reused for irrigation, closing the loop on water use.',
      icon: practiceIcons.recycle,
    },
  ]
  
  /* -------- Community practices -------- */
  const communityPractices = [
    {
      title: 'Above-Market Wages',
      description: 'All employees earn above the Nigerian living wage, independently verified by Fairtrade.',
      icon: practiceIcons.wage,
    },
    {
      title: 'Outgrower Support',
      description: '208 smallholder farmers receive seedlings, training, and guaranteed purchase prices.',
      icon: practiceIcons.training,
    },
    {
      title: 'Community Reinvestment',
      description: '5% of net profit funds local schools, clinics, and rural infrastructure projects.',
      icon: practiceIcons.school,
    },
    {
      title: 'Farmer Health Plans',
      description: 'Every employee family gets subsidized healthcare and annual medical checkups.',
      icon: practiceIcons.health,
    },
  ]
  
  /* -------- Refs -------- */
  const sectionRef          = ref<HTMLElement | null>(null)
  const soilRef             = ref<HTMLElement | null>(null)
  const soilVisualRef       = ref<HTMLElement | null>(null)
  const soilBadgeRef        = ref<HTMLElement | null>(null)
  const soilEyebrowRef      = ref<HTMLElement | null>(null)
  const soilHeadingRef      = ref<HTMLElement | null>(null)
  const soilLeadRef         = ref<HTMLElement | null>(null)
  const soilPracticesRef    = ref<HTMLElement | null>(null)
  const soilNoteRef         = ref<HTMLElement | null>(null)
  
  const waterRef            = ref<HTMLElement | null>(null)
  const waterVisualRef      = ref<HTMLElement | null>(null)
  const waterBadgeRef       = ref<HTMLElement | null>(null)
  const waterEyebrowRef     = ref<HTMLElement | null>(null)
  const waterHeadingRef     = ref<HTMLElement | null>(null)
  const waterLeadRef        = ref<HTMLElement | null>(null)
  const waterPracticesRef   = ref<HTMLElement | null>(null)
  const waterNoteRef        = ref<HTMLElement | null>(null)
  
  const communityRef        = ref<HTMLElement | null>(null)
  const communityVisualRef  = ref<HTMLElement | null>(null)
  const communityBadgeRef   = ref<HTMLElement | null>(null)
  const communityEyebrowRef = ref<HTMLElement | null>(null)
  const communityHeadingRef = ref<HTMLElement | null>(null)
  const communityLeadRef    = ref<HTMLElement | null>(null)
  const communityPracticesRef = ref<HTMLElement | null>(null)
  const communityNoteRef    = ref<HTMLElement | null>(null)
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [soilEyebrowRef.value, soilHeadingRef.value, soilLeadRef.value,
         soilVisualRef.value, soilBadgeRef.value, soilNoteRef.value,
         waterEyebrowRef.value, waterHeadingRef.value, waterLeadRef.value,
         waterVisualRef.value, waterBadgeRef.value, waterNoteRef.value,
         communityEyebrowRef.value, communityHeadingRef.value, communityLeadRef.value,
         communityVisualRef.value, communityBadgeRef.value, communityNoteRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0, scale: 1 }
      )
      setFinalCounters()
      return
    }
  
    ctx = gsap.context(() => {
      /* ========= SOIL ========= */
      gsap.from(soilEyebrowRef.value, {
        y: 20, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: soilRef.value, start: 'top 82%' },
      })
      gsap.from(soilHeadingRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: soilRef.value, start: 'top 78%' },
      })
      gsap.from(soilLeadRef.value, {
        y: 24, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: soilRef.value, start: 'top 76%' },
      })
      gsap.from(soilVisualRef.value, {
        x: -60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: soilRef.value, start: 'top 78%' },
      })
      gsap.from(soilBadgeRef.value, {
        y: 20, autoAlpha: 0, scale: 0.9, duration: 0.6, ease: 'back.out(2)',
        scrollTrigger: { trigger: soilVisualRef.value, start: 'top 60%' },
      })
      if (soilPracticesRef.value) {
        gsap.from(soilPracticesRef.value.children, {
          y: 30, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: soilPracticesRef.value, start: 'top 85%' },
        })
      }
      gsap.from(soilNoteRef.value, {
        y: 20, autoAlpha: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: soilNoteRef.value, start: 'top 90%' },
      })
  
      /* ========= WATER ========= */
      gsap.from(waterEyebrowRef.value, {
        y: 20, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: waterRef.value, start: 'top 82%' },
      })
      gsap.from(waterHeadingRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: waterRef.value, start: 'top 78%' },
      })
      gsap.from(waterLeadRef.value, {
        y: 24, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: waterRef.value, start: 'top 76%' },
      })
      gsap.from(waterVisualRef.value, {
        x: 60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: waterRef.value, start: 'top 78%' },
      })
      gsap.from(waterBadgeRef.value, {
        y: 20, autoAlpha: 0, scale: 0.9, duration: 0.6, ease: 'back.out(2)',
        scrollTrigger: { trigger: waterVisualRef.value, start: 'top 60%' },
      })
      if (waterPracticesRef.value) {
        gsap.from(waterPracticesRef.value.children, {
          y: 30, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: waterPracticesRef.value, start: 'top 85%' },
        })
      }
      gsap.from(waterNoteRef.value, {
        y: 20, autoAlpha: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: waterNoteRef.value, start: 'top 90%' },
      })
  
      /* ========= COMMUNITY ========= */
      gsap.from(communityEyebrowRef.value, {
        y: 20, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: communityRef.value, start: 'top 82%' },
      })
      gsap.from(communityHeadingRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: communityRef.value, start: 'top 78%' },
      })
      gsap.from(communityLeadRef.value, {
        y: 24, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: communityRef.value, start: 'top 76%' },
      })
      gsap.from(communityVisualRef.value, {
        x: -60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: communityRef.value, start: 'top 78%' },
      })
      gsap.from(communityBadgeRef.value, {
        y: 20, autoAlpha: 0, scale: 0.9, duration: 0.6, ease: 'back.out(2)',
        scrollTrigger: { trigger: communityVisualRef.value, start: 'top 60%' },
      })
      if (communityPracticesRef.value) {
        gsap.from(communityPracticesRef.value.children, {
          y: 30, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: communityPracticesRef.value, start: 'top 85%' },
        })
      }
      gsap.from(communityNoteRef.value, {
        y: 20, autoAlpha: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: communityNoteRef.value, start: 'top 90%' },
      })
  
      /* ========= STAT COUNTERS ========= */
      ScrollTrigger.create({
        trigger: soilVisualRef.value,
        start: 'top 70%',
        once: true,
        onEnter: () => runCounters(),
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
      const target   = Number(el.dataset.target || 0)
      const decimals = Number(el.dataset.decimals || 0)
      const suffix   = el.dataset.suffix || ''
      const obj = { val: 0 }
  
      gsap.to(obj, {
        val: target,
        duration: 2.2,
        ease: 'power2.out',
        onUpdate: () => {
          const n = decimals > 0
            ? obj.val.toFixed(decimals)
            : Math.round(obj.val).toLocaleString()
          el.textContent = `${n}${suffix}`
        },
      })
    })
  }
  
  const setFinalCounters = () => {
    const els = sectionRef.value?.querySelectorAll<HTMLElement>('.stat-number')
    if (!els) return
    els.forEach((el) => {
      const target   = Number(el.dataset.target || 0)
      const decimals = Number(el.dataset.decimals || 0)
      const suffix   = el.dataset.suffix || ''
      const n = decimals > 0 ? target.toFixed(decimals) : Math.round(target).toLocaleString()
      el.textContent = `${n}${suffix}`
    })
  }
  </script>
  
  <style scoped>
  .practice-card {
    will-change: transform;
  }
  
  .stat-number {
    display: inline-block;
    font-variant-numeric: tabular-nums;
  }
  </style>