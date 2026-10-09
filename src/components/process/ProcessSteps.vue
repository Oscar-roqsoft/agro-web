<template>
    <div
      id="process-steps"
      ref="sectionRef"
      class="relative bg-[rgb(var(--bg-alt))] scroll-mt-24"
    >
      <!-- ============================================================
           SECTION INTRO
           ============================================================ -->
      <div class="py-20 lg:py-24">
        <div class="container-page">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div class="lg:col-span-7">
              <div
                ref="introEyebrowRef"
                class="inline-flex items-center gap-2.5 mb-5
                       px-3.5 py-1.5 rounded-full
                       bg-leaf-500/10 border border-leaf-500/20
                       text-leaf-600 dark:text-leaf-400
                       text-[0.78rem] font-semibold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
                The Five Steps
              </div>
  
              <h2
                ref="introHeadingRef"
                class="font-display font-extrabold
                       text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                       tracking-[-0.025em] text-[rgb(var(--text))]"
              >
                Every stage,<br />
                <span class="text-leaf-500">in full detail.</span>
              </h2>
            </div>
  
            <div ref="introDescRef" class="lg:col-span-5 lg:pb-2">
              <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
                No vague claims, no aspirational language. This is exactly how
                we farm — with timelines, costs, and responsibilities for each
                stage. You can request the full written SOP for any step.
              </p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- ============================================================
           STEP 1 — LAND SELECTION & SOIL ANALYSIS
           Visual LEFT · Content RIGHT
           ============================================================ -->
      <section
        id="step-1"
        ref="step1Ref"
        class="relative py-20 lg:py-24 overflow-hidden scroll-mt-24"
      >
        <div class="container-page relative">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
  
            <!-- LEFT: Visual -->
            <div ref="step1VisualRef" class="lg:col-span-5 relative">
              <div
                class="relative rounded-3xl overflow-hidden aspect-[4/5]
                       bg-gradient-to-br from-leaf-600 via-leaf-700 to-leaf-900
                       shadow-[0_30px_60px_-20px_rgba(46,125,50,0.4)]"
              >
                <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
                <div class="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-white/5" />
  
                <div class="absolute inset-0 p-8 lg:p-9 flex flex-col justify-between">
                  <div>
                    <div
                      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                             bg-white/10 backdrop-blur-md border border-white/20
                             text-harvest-300 text-[0.68rem]
                             font-bold uppercase tracking-wider mb-6"
                    >
                      <span class="w-1 h-1 rounded-full bg-harvest-400" />
                      Duration · 2–4 months
                    </div>
  
                    <div
                      class="font-display font-extrabold text-white
                             text-[clamp(3rem,7vw,5rem)] leading-none
                             tracking-[-0.05em] mb-3"
                    >
                      01
                    </div>
  
                    <div
                      class="font-display font-bold text-white
                             text-[clamp(1.25rem,2vw,1.5rem)] leading-tight
                             tracking-[-0.02em] max-w-[240px]"
                    >
                      Land Selection<br />& Soil Analysis
                    </div>
                  </div>
  
                  <div class="pt-6 border-t border-white/15">
                    <div class="text-white/60 text-[0.68rem]
                                uppercase tracking-wider font-bold mb-2">
                      Core output
                    </div>
                    <div class="text-white text-[0.95rem] font-medium leading-snug">
                      A ranked shortlist of viable plots with 3-year soil data
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- RIGHT: Content -->
            <div class="lg:col-span-7">
              <div
                class="inline-flex items-center gap-2.5 mb-5
                       px-3.5 py-1.5 rounded-full
                       bg-leaf-500/10 border border-leaf-500/20
                       text-leaf-600 dark:text-leaf-400
                       text-[0.78rem] font-semibold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-leaf-500" />
                Stage One
              </div>
  
              <h3
                class="font-display font-extrabold
                       text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1]
                       tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
              >
                We never plant blind.
              </h3>
  
              <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed mb-7 max-w-2xl">
                Before a single seedling goes in the ground, we run a
                comprehensive 90-day evaluation: soil samples sent to independent
                labs, topography surveyed, water access verified, and legal land
                title confirmed. We reject roughly 3 out of 4 plots we
                consider.
              </p>
  
              <!-- Deliverables -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div
                  v-for="item in step1Deliverables"
                  :key="item.label"
                  class="flex items-start gap-3 p-4 rounded-xl
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.08)]"
                >
                  <span
                    class="shrink-0 grid place-items-center w-6 h-6 rounded-full mt-0.5
                           bg-leaf-500 text-white"
                    v-html="checkIcon"
                  />
                  <span class="text-[rgb(var(--text))] text-[0.88rem] leading-snug">
                    {{ item.label }}
                  </span>
                </div>
              </div>
  
              <!-- You / Us split -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6
                          border-t border-[rgb(var(--border)/0.1)]">
                <!-- YOU column -->
                <div class="rounded-xl p-5 bg-leaf-500/6 border border-leaf-500/15">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="grid place-items-center w-5 h-5 rounded-full
                             bg-leaf-500 text-white"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="3.2"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </span>
                    <span class="text-[0.72rem] font-bold uppercase tracking-wider
                                 text-leaf-700 dark:text-leaf-400">
                      You
                    </span>
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="item in step1You"
                      :key="item"
                      class="flex items-start gap-2
                             text-[rgb(var(--text))] text-[0.85rem] leading-snug"
                    >
                      <span class="mt-1.5 w-1 h-1 rounded-full bg-leaf-500 shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
  
                <!-- US column -->
                <div class="rounded-xl p-5 bg-harvest-500/6 border border-harvest-500/15">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="grid place-items-center w-5 h-5 rounded-full
                             bg-harvest-500 text-white"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="3"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2v20M5 12h14"/>
                      </svg>
                    </span>
                    <span class="text-[0.72rem] font-bold uppercase tracking-wider
                                 text-harvest-700 dark:text-harvest-400">
                      Us
                    </span>
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="item in step1Us"
                      :key="item"
                      class="flex items-start gap-2
                             text-[rgb(var(--text))] text-[0.85rem] leading-snug"
                    >
                      <span class="mt-1.5 w-1 h-1 rounded-full bg-harvest-500 shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ============================================================
           STEP 2 — PLANTING & NURSERY
           Content LEFT · Visual RIGHT
           ============================================================ -->
      <section
        id="step-2"
        ref="step2Ref"
        class="relative py-20 lg:py-24 overflow-hidden scroll-mt-24"
      >
        <div class="container-page relative">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
  
            <!-- LEFT: Content -->
            <div class="lg:col-span-7">
              <div
                class="inline-flex items-center gap-2.5 mb-5
                       px-3.5 py-1.5 rounded-full
                       bg-harvest-500/10 border border-harvest-500/20
                       text-harvest-700 dark:text-harvest-400
                       text-[0.78rem] font-semibold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-harvest-500" />
                Stage Two
              </div>
  
              <h3
                class="font-display font-extrabold
                       text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1]
                       tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
              >
                We control the genetics.
              </h3>
  
              <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed mb-7 max-w-2xl">
                Every seedling we plant is raised in our own nursery — never
                bought from third parties. This gives us full control over
                genetic quality, disease resistance, and yield potential. We
                plant only certified varieties, and every tree is tagged with a
                unique batch ID for lifelong traceability.
              </p>
  
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div
                  v-for="item in step2Deliverables"
                  :key="item.label"
                  class="flex items-start gap-3 p-4 rounded-xl
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.08)]"
                >
                  <span
                    class="shrink-0 grid place-items-center w-6 h-6 rounded-full mt-0.5
                           bg-leaf-500 text-white"
                    v-html="checkIcon"
                  />
                  <span class="text-[rgb(var(--text))] text-[0.88rem] leading-snug">
                    {{ item.label }}
                  </span>
                </div>
              </div>
  
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6
                          border-t border-[rgb(var(--border)/0.1)]">
                <div class="rounded-xl p-5 bg-leaf-500/6 border border-leaf-500/15">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="grid place-items-center w-5 h-5 rounded-full
                             bg-leaf-500 text-white"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="3.2"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </span>
                    <span class="text-[0.72rem] font-bold uppercase tracking-wider
                                 text-leaf-700 dark:text-leaf-400">
                      You
                    </span>
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="item in step2You"
                      :key="item"
                      class="flex items-start gap-2
                             text-[rgb(var(--text))] text-[0.85rem] leading-snug"
                    >
                      <span class="mt-1.5 w-1 h-1 rounded-full bg-leaf-500 shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
  
                <div class="rounded-xl p-5 bg-harvest-500/6 border border-harvest-500/15">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="grid place-items-center w-5 h-5 rounded-full
                             bg-harvest-500 text-white"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="3"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2v20M5 12h14"/>
                      </svg>
                    </span>
                    <span class="text-[0.72rem] font-bold uppercase tracking-wider
                                 text-harvest-700 dark:text-harvest-400">
                      Us
                    </span>
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="item in step2Us"
                      :key="item"
                      class="flex items-start gap-2
                             text-[rgb(var(--text))] text-[0.85rem] leading-snug"
                    >
                      <span class="mt-1.5 w-1 h-1 rounded-full bg-harvest-500 shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  
            <!-- RIGHT: Visual -->
            <div ref="step2VisualRef" class="lg:col-span-5 relative">
              <div
                class="relative rounded-3xl overflow-hidden aspect-[4/5]
                       bg-gradient-to-br from-harvest-500 via-harvest-600 to-harvest-700
                       shadow-[0_30px_60px_-20px_rgba(249,168,37,0.4)]"
              >
                <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
                <div class="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-white/5" />
  
                <div class="absolute inset-0 p-8 lg:p-9 flex flex-col justify-between">
                  <div>
                    <div
                      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                             bg-white/15 backdrop-blur-md border border-white/25
                             text-leaf-900 text-[0.68rem]
                             font-bold uppercase tracking-wider mb-6"
                    >
                      <span class="w-1 h-1 rounded-full bg-leaf-900" />
                      Duration · 6–12 months
                    </div>
  
                    <div
                      class="font-display font-extrabold text-leaf-900
                             text-[clamp(3rem,7vw,5rem)] leading-none
                             tracking-[-0.05em] mb-3"
                    >
                      02
                    </div>
  
                    <div
                      class="font-display font-bold text-leaf-900
                             text-[clamp(1.25rem,2vw,1.5rem)] leading-tight
                             tracking-[-0.02em] max-w-[240px]"
                    >
                      Planting<br />& Nursery
                    </div>
                  </div>
  
                  <div class="pt-6 border-t border-leaf-900/20">
                    <div class="text-leaf-900/60 text-[0.68rem]
                                uppercase tracking-wider font-bold mb-2">
                      Core output
                    </div>
                    <div class="text-leaf-900 text-[0.95rem] font-semibold leading-snug">
                      Nursery-raised seedlings tagged with lifelong batch IDs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ============================================================
           STEP 3 — GROWTH & NURTURING
           Visual LEFT · Content RIGHT
           ============================================================ -->
      <section
        id="step-3"
        ref="step3Ref"
        class="relative py-20 lg:py-24 overflow-hidden scroll-mt-24"
      >
        <div class="container-page relative">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
  
            <!-- LEFT: Visual -->
            <div ref="step3VisualRef" class="lg:col-span-5 relative">
              <div
                class="relative rounded-3xl overflow-hidden aspect-[4/5]
                       bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900
                       shadow-[0_30px_60px_-20px_rgba(16,185,129,0.4)]"
              >
                <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
                <div class="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-white/5" />
  
                <div class="absolute inset-0 p-8 lg:p-9 flex flex-col justify-between">
                  <div>
                    <div
                      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                             bg-white/10 backdrop-blur-md border border-white/20
                             text-emerald-200 text-[0.68rem]
                             font-bold uppercase tracking-wider mb-6"
                    >
                      <span class="w-1 h-1 rounded-full bg-emerald-300" />
                      Duration · 3–5 years
                    </div>
  
                    <div
                      class="font-display font-extrabold text-white
                             text-[clamp(3rem,7vw,5rem)] leading-none
                             tracking-[-0.05em] mb-3"
                    >
                      03
                    </div>
  
                    <div
                      class="font-display font-bold text-white
                             text-[clamp(1.25rem,2vw,1.5rem)] leading-tight
                             tracking-[-0.02em] max-w-[240px]"
                    >
                      Growth<br />& Nurturing
                    </div>
                  </div>
  
                  <div class="pt-6 border-t border-white/15">
                    <div class="text-white/60 text-[0.68rem]
                                uppercase tracking-wider font-bold mb-2">
                      Core output
                    </div>
                    <div class="text-white text-[0.95rem] font-medium leading-snug">
                      Yearly audited progress reports per estate
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- RIGHT: Content -->
            <div class="lg:col-span-7">
              <div
                class="inline-flex items-center gap-2.5 mb-5
                       px-3.5 py-1.5 rounded-full
                       bg-emerald-500/10 border border-emerald-500/20
                       text-emerald-700 dark:text-emerald-400
                       text-[0.78rem] font-semibold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Stage Three
              </div>
  
              <h3
                class="font-display font-extrabold
                       text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1]
                       tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
              >
                Where most agribusinesses lose patience.
              </h3>
  
              <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed mb-7 max-w-2xl">
                This is the longest stage — and the one where shortcuts hurt
                most. For 3–5 years, we tend every tree with the same discipline
                as if it were producing today. Monthly field audits, organic
                fertilization, integrated pest management, and continuous
                agroforestry work. No yield today, but everything invested.
              </p>
  
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div
                  v-for="item in step3Deliverables"
                  :key="item.label"
                  class="flex items-start gap-3 p-4 rounded-xl
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.08)]"
                >
                  <span
                    class="shrink-0 grid place-items-center w-6 h-6 rounded-full mt-0.5
                           bg-leaf-500 text-white"
                    v-html="checkIcon"
                  />
                  <span class="text-[rgb(var(--text))] text-[0.88rem] leading-snug">
                    {{ item.label }}
                  </span>
                </div>
              </div>
  
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6
                          border-t border-[rgb(var(--border)/0.1)]">
                <div class="rounded-xl p-5 bg-leaf-500/6 border border-leaf-500/15">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="grid place-items-center w-5 h-5 rounded-full
                             bg-leaf-500 text-white"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="3.2"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </span>
                    <span class="text-[0.72rem] font-bold uppercase tracking-wider
                                 text-leaf-700 dark:text-leaf-400">
                      You
                    </span>
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="item in step3You"
                      :key="item"
                      class="flex items-start gap-2
                             text-[rgb(var(--text))] text-[0.85rem] leading-snug"
                    >
                      <span class="mt-1.5 w-1 h-1 rounded-full bg-leaf-500 shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
  
                <div class="rounded-xl p-5 bg-harvest-500/6 border border-harvest-500/15">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="grid place-items-center w-5 h-5 rounded-full
                             bg-harvest-500 text-white"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="3"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2v20M5 12h14"/>
                      </svg>
                    </span>
                    <span class="text-[0.72rem] font-bold uppercase tracking-wider
                                 text-harvest-700 dark:text-harvest-400">
                      Us
                    </span>
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="item in step3Us"
                      :key="item"
                      class="flex items-start gap-2
                             text-[rgb(var(--text))] text-[0.85rem] leading-snug"
                    >
                      <span class="mt-1.5 w-1 h-1 rounded-full bg-harvest-500 shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ============================================================
           STEP 4 — HARVEST & PROCESSING
           Content LEFT · Visual RIGHT
           ============================================================ -->
      <section
        id="step-4"
        ref="step4Ref"
        class="relative py-20 lg:py-24 overflow-hidden scroll-mt-24"
      >
        <div class="container-page relative">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
  
            <!-- LEFT: Content -->
            <div class="lg:col-span-7">
              <div
                class="inline-flex items-center gap-2.5 mb-5
                       px-3.5 py-1.5 rounded-full
                       bg-amber-500/10 border border-amber-500/20
                       text-amber-700 dark:text-amber-400
                       text-[0.78rem] font-semibold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Stage Four
              </div>
  
              <h3
                class="font-display font-extrabold
                       text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1]
                       tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
              >
                The day the investment matures.
              </h3>
  
              <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed mb-7 max-w-2xl">
                Once trees mature, harvest runs on a disciplined schedule — never
                rushed to hit a market window. Crops are hand-picked at peak
                ripeness, graded on-site against international standards, and
                processed within 24 hours. Every batch is documented and matched
                to its harvest record.
              </p>
  
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div
                  v-for="item in step4Deliverables"
                  :key="item.label"
                  class="flex items-start gap-3 p-4 rounded-xl
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.08)]"
                >
                  <span
                    class="shrink-0 grid place-items-center w-6 h-6 rounded-full mt-0.5
                           bg-leaf-500 text-white"
                    v-html="checkIcon"
                  />
                  <span class="text-[rgb(var(--text))] text-[0.88rem] leading-snug">
                    {{ item.label }}
                  </span>
                </div>
              </div>
  
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6
                          border-t border-[rgb(var(--border)/0.1)]">
                <div class="rounded-xl p-5 bg-leaf-500/6 border border-leaf-500/15">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="grid place-items-center w-5 h-5 rounded-full
                             bg-leaf-500 text-white"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="3.2"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </span>
                    <span class="text-[0.72rem] font-bold uppercase tracking-wider
                                 text-leaf-700 dark:text-leaf-400">
                      You
                    </span>
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="item in step4You"
                      :key="item"
                      class="flex items-start gap-2
                             text-[rgb(var(--text))] text-[0.85rem] leading-snug"
                    >
                      <span class="mt-1.5 w-1 h-1 rounded-full bg-leaf-500 shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
  
                <div class="rounded-xl p-5 bg-harvest-500/6 border border-harvest-500/15">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="grid place-items-center w-5 h-5 rounded-full
                             bg-harvest-500 text-white"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="3"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2v20M5 12h14"/>
                      </svg>
                    </span>
                    <span class="text-[0.72rem] font-bold uppercase tracking-wider
                                 text-harvest-700 dark:text-harvest-400">
                      Us
                    </span>
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="item in step4Us"
                      :key="item"
                      class="flex items-start gap-2
                             text-[rgb(var(--text))] text-[0.85rem] leading-snug"
                    >
                      <span class="mt-1.5 w-1 h-1 rounded-full bg-harvest-500 shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  
            <!-- RIGHT: Visual -->
            <div ref="step4VisualRef" class="lg:col-span-5 relative">
              <div
                class="relative rounded-3xl overflow-hidden aspect-[4/5]
                       bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700
                       shadow-[0_30px_60px_-20px_rgba(245,158,11,0.4)]"
              >
                <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
                <div class="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-white/5" />
  
                <div class="absolute inset-0 p-8 lg:p-9 flex flex-col justify-between">
                  <div>
                    <div
                      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                             bg-white/15 backdrop-blur-md border border-white/25
                             text-amber-900 text-[0.68rem]
                             font-bold uppercase tracking-wider mb-6"
                    >
                      <span class="w-1 h-1 rounded-full bg-amber-900" />
                      Duration · Seasonal
                    </div>
  
                    <div
                      class="font-display font-extrabold text-amber-900
                             text-[clamp(3rem,7vw,5rem)] leading-none
                             tracking-[-0.05em] mb-3"
                    >
                      04
                    </div>
  
                    <div
                      class="font-display font-bold text-amber-900
                             text-[clamp(1.25rem,2vw,1.5rem)] leading-tight
                             tracking-[-0.02em] max-w-[240px]"
                    >
                      Harvest<br />& Processing
                    </div>
                  </div>
  
                  <div class="pt-6 border-t border-amber-900/20">
                    <div class="text-amber-900/60 text-[0.68rem]
                                uppercase tracking-wider font-bold mb-2">
                      Core output
                    </div>
                    <div class="text-amber-900 text-[0.95rem] font-semibold leading-snug">
                      Graded, processed, lab-verified product ready to ship
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ============================================================
           STEP 5 — DELIVERY & TRACEABILITY
           Visual LEFT · Content RIGHT
           ============================================================ -->
      <section
        id="step-5"
        ref="step5Ref"
        class="relative py-20 lg:py-24 overflow-hidden scroll-mt-24"
      >
        <div class="container-page relative">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
  
            <!-- LEFT: Visual -->
            <div ref="step5VisualRef" class="lg:col-span-5 relative">
              <div
                class="relative rounded-3xl overflow-hidden aspect-[4/5]
                       bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900
                       shadow-[0_30px_60px_-20px_rgba(59,130,246,0.4)]"
              >
                <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/5" />
                <div class="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-white/5" />
  
                <div class="absolute inset-0 p-8 lg:p-9 flex flex-col justify-between">
                  <div>
                    <div
                      class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                             bg-white/10 backdrop-blur-md border border-white/20
                             text-blue-200 text-[0.68rem]
                             font-bold uppercase tracking-wider mb-6"
                    >
                      <span class="w-1 h-1 rounded-full bg-blue-300" />
                      Duration · Days from harvest
                    </div>
  
                    <div
                      class="font-display font-extrabold text-white
                             text-[clamp(3rem,7vw,5rem)] leading-none
                             tracking-[-0.05em] mb-3"
                    >
                      05
                    </div>
  
                    <div
                      class="font-display font-bold text-white
                             text-[clamp(1.25rem,2vw,1.5rem)] leading-tight
                             tracking-[-0.02em] max-w-[240px]"
                    >
                      Delivery<br />& Traceability
                    </div>
                  </div>
  
                  <div class="pt-6 border-t border-white/15">
                    <div class="text-white/60 text-[0.68rem]
                                uppercase tracking-wider font-bold mb-2">
                      Core output
                    </div>
                    <div class="text-white text-[0.95rem] font-medium leading-snug">
                      QR-coded shipment with full origin documentation
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- RIGHT: Content -->
            <div class="lg:col-span-7">
              <div
                class="inline-flex items-center gap-2.5 mb-5
                       px-3.5 py-1.5 rounded-full
                       bg-blue-500/10 border border-blue-500/20
                       text-blue-600 dark:text-blue-400
                       text-[0.78rem] font-semibold tracking-wider uppercase"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Stage Five
              </div>
  
              <h3
                class="font-display font-extrabold
                       text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1]
                       tracking-[-0.025em] text-[rgb(var(--text))] mb-5"
              >
                Traceable from soil to shelf.
              </h3>
  
              <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed mb-7 max-w-2xl">
                Every shipment leaves our facility with a QR code that links back
                to its full production record: the estate, the plot, the harvest
                date, the lab report, and the export documents. Nothing is
                anonymized. Your buyers can verify origin without ever calling us.
              </p>
  
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div
                  v-for="item in step5Deliverables"
                  :key="item.label"
                  class="flex items-start gap-3 p-4 rounded-xl
                         bg-[rgb(var(--surface))]
                         border border-[rgb(var(--border)/0.08)]"
                >
                  <span
                    class="shrink-0 grid place-items-center w-6 h-6 rounded-full mt-0.5
                           bg-leaf-500 text-white"
                    v-html="checkIcon"
                  />
                  <span class="text-[rgb(var(--text))] text-[0.88rem] leading-snug">
                    {{ item.label }}
                  </span>
                </div>
              </div>
  
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6
                          border-t border-[rgb(var(--border)/0.1)]">
                <div class="rounded-xl p-5 bg-leaf-500/6 border border-leaf-500/15">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="grid place-items-center w-5 h-5 rounded-full
                             bg-leaf-500 text-white"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="3.2"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </span>
                    <span class="text-[0.72rem] font-bold uppercase tracking-wider
                                 text-leaf-700 dark:text-leaf-400">
                      You
                    </span>
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="item in step5You"
                      :key="item"
                      class="flex items-start gap-2
                             text-[rgb(var(--text))] text-[0.85rem] leading-snug"
                    >
                      <span class="mt-1.5 w-1 h-1 rounded-full bg-leaf-500 shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
  
                <div class="rounded-xl p-5 bg-harvest-500/6 border border-harvest-500/15">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                      class="grid place-items-center w-5 h-5 rounded-full
                             bg-harvest-500 text-white"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="3"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2v20M5 12h14"/>
                      </svg>
                    </span>
                    <span class="text-[0.72rem] font-bold uppercase tracking-wider
                                 text-harvest-700 dark:text-harvest-400">
                      Us
                    </span>
                  </div>
                  <ul class="space-y-2">
                    <li
                      v-for="item in step5Us"
                      :key="item"
                      class="flex items-start gap-2
                             text-[rgb(var(--text))] text-[0.85rem] leading-snug"
                    >
                      <span class="mt-1.5 w-1 h-1 rounded-full bg-harvest-500 shrink-0" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ============================================================
           BOTTOM CTA
           ============================================================ -->
      <div class="py-20 lg:py-24">
        <div class="container-page">
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
                Dive Deeper
              </div>
  
              <h3
                class="font-display font-extrabold text-white
                       text-[clamp(1.35rem,2.5vw,1.85rem)] leading-tight
                       tracking-[-0.02em] mb-4 max-w-xl"
              >
                Want the full written SOP<br class="hidden sm:block" />
                for any of these steps?
              </h3>
  
              <p class="text-white/75 text-[0.98rem] leading-relaxed max-w-lg">
                Serious buyers, partners, and auditors can request the complete
                Standard Operating Procedure for any stage — including field
                forms, lab partner agreements, and QC checklists.
              </p>
            </div>
  
            <div class="lg:col-span-5 relative z-10 flex flex-col sm:flex-row lg:flex-col lg:justify-end gap-3">
              <NuxtLink
                to="/contact?type=partner&topic=sop-request"
                class="btn !px-6 !py-3.5
                       bg-white text-leaf-700 font-semibold
                       hover:bg-white/95 hover:-translate-y-0.5
                       shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
              >
                Request Full SOP
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </NuxtLink>
              <NuxtLink
                to="/impact-report"
                class="btn !px-6 !py-3.5
                       bg-white/10 backdrop-blur-md
                       border border-white/25 text-white font-semibold
                       hover:bg-white/20 hover:border-white/40"
              >
                Read Impact Report
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  const checkIcon = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`
  
  /* ============ STEP 1 — LAND SELECTION ============ */
  const step1Deliverables = [
    { label: 'Independent soil analysis (3-year data)' },
    { label: 'Topography & drainage survey' },
    { label: 'Water access verification' },
    { label: 'Community engagement & land rights' },
  ]
  const step1You = [
    'Review soil reports',
    'Confirm legal title',
    'Approve shortlist',
  ]
  const step1Us = [
    'Commission 4 independent labs',
    'Survey 20+ candidate plots',
    'Engage community leaders',
  ]
  
  /* ============ STEP 2 — PLANTING ============ */
  const step2Deliverables = [
    { label: 'Certified seedlings from own nursery' },
    { label: 'Unique batch ID per tree' },
    { label: 'Spacing & shade compliance' },
    { label: 'Planting density report' },
  ]
  const step2You = [
    'Approve variety selection',
    'Review planting schedule',
  ]
  const step2Us = [
    'Raise seedlings 6 months',
    'Plant & tag every tree',
    'Log batch IDs in registry',
  ]
  
  /* ============ STEP 3 — NURTURING ============ */
  const step3Deliverables = [
    { label: 'Monthly field audit reports' },
    { label: 'Organic fertilization logs' },
    { label: 'Pest & disease monitoring' },
    { label: 'Annual yield projections' },
  ]
  const step3You = [
    'Review quarterly progress',
    'Approve major inputs',
  ]
  const step3Us = [
    'Field audits every 30 days',
    'Organic-only fertilization',
    'Pruning & shade management',
  ]
  
  /* ============ STEP 4 — HARVEST ============ */
  const step4Deliverables = [
    { label: 'Hand-picked at peak ripeness' },
    { label: 'On-site grading against specs' },
    { label: 'Independent lab verification' },
    { label: 'Batch-to-estate documentation' },
  ]
  const step4You = [
    'Confirm order volumes',
    'Approve grading specs',
  ]
  const step4Us = [
    'Harvest at ripeness peak',
    'Grade & pack in 24 hours',
    'Lab-test every batch',
  ]
  
  /* ============ STEP 5 — DELIVERY ============ */
  const step5Deliverables = [
    { label: 'QR-coded batch identification' },
    { label: 'Certificate of Origin included' },
    { label: 'Phytosanitary certification' },
    { label: 'Cold-chain where required' },
  ]
  const step5You = [
    'Confirm destination port',
    'Receive shipment documents',
    'Track container',
  ]
  const step5Us = [
    'Generate QR batch records',
    'Issue full export documentation',
    'Handle customs clearance',
  ]
  
  /* ============ Refs ============ */
  const sectionRef = ref<HTMLElement | null>(null)
  
  const introEyebrowRef = ref<HTMLElement | null>(null)
  const introHeadingRef = ref<HTMLElement | null>(null)
  const introDescRef    = ref<HTMLElement | null>(null)
  
  // Step 1
  const step1Ref        = ref<HTMLElement | null>(null)
  const step1VisualRef  = ref<HTMLElement | null>(null)
  
  // Step 2
  const step2Ref        = ref<HTMLElement | null>(null)
  const step2VisualRef  = ref<HTMLElement | null>(null)
  
  // Step 3
  const step3Ref        = ref<HTMLElement | null>(null)
  const step3VisualRef  = ref<HTMLElement | null>(null)
  
  // Step 4
  const step4Ref        = ref<HTMLElement | null>(null)
  const step4VisualRef  = ref<HTMLElement | null>(null)
  
  // Step 5
  const step5Ref        = ref<HTMLElement | null>(null)
  const step5VisualRef  = ref<HTMLElement | null>(null)
  
  const ctaRef = ref<HTMLElement | null>(null)
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    if (prefersReduced) {
      gsap.set(
        [introEyebrowRef.value, introHeadingRef.value, introDescRef.value,
         step1VisualRef.value, step2VisualRef.value, step3VisualRef.value,
         step4VisualRef.value, step5VisualRef.value, ctaRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0, scale: 1 }
      )
      return
    }
  
    ctx = gsap.context(() => {
      /* ========= INTRO ========= */
      gsap.from(introEyebrowRef.value, {
        y: 20, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: introEyebrowRef.value, start: 'top 88%' },
      })
      gsap.from(introHeadingRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: introHeadingRef.value, start: 'top 85%' },
      })
      gsap.from(introDescRef.value, {
        y: 24, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: introDescRef.value, start: 'top 88%' },
      })
  
      /* ========= STEP 1 — visual LEFT ========= */
      gsap.from(step1VisualRef.value, {
        x: -60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: step1Ref.value, start: 'top 78%' },
      })
      gsap.from(step1Ref.value?.querySelectorAll('.text-\\[rgb\\(var\\(--text\\)\\)\\]') ?? [], {
        y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: step1Ref.value, start: 'top 78%' },
      })
  
      /* ========= STEP 2 — visual RIGHT ========= */
      gsap.from(step2VisualRef.value, {
        x: 60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: step2Ref.value, start: 'top 78%' },
      })
  
      /* ========= STEP 3 — visual LEFT ========= */
      gsap.from(step3VisualRef.value, {
        x: -60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: step3Ref.value, start: 'top 78%' },
      })
  
      /* ========= STEP 4 — visual RIGHT ========= */
      gsap.from(step4VisualRef.value, {
        x: 60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: step4Ref.value, start: 'top 78%' },
      })
  
      /* ========= STEP 5 — visual LEFT ========= */
      gsap.from(step5VisualRef.value, {
        x: -60, autoAlpha: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: step5Ref.value, start: 'top 78%' },
      })
  
      /* ========= CTA ========= */
      gsap.from(ctaRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>
  
  <style scoped>
  /* Optional: make step sub-sections anchor-smooth */
  [id^="step-"] {
    scroll-margin-top: 100px;
  }
  </style>