<template>
  <section
    ref="heroRef"
    class="relative isolate overflow-hidden
           min-h-[100svh] flex flex-col
           bg-[rgb(var(--bg-alt))]"
  >
    <!-- ============ BACKGROUND MEDIA ============ -->
    <div ref="bgWrapRef" class="absolute inset-0 -z-10">
      <!-- Poster image -->
      <img
        ref="posterRef"
        src="/images/heroImg.png"
        alt=""
        aria-hidden="true"
        fetchpriority="high"
        class="absolute inset-0 w-full h-full object-cover will-change-transform"
      />

      <!-- Video -->
      <video
        ref="videoRef"
        autoplay muted loop playsinline
        preload="auto"
        poster="/images/heroImg.png"
        class="absolute inset-0 w-full h-full object-cover
               opacity-0 will-change-transform"
        :class="{ '!opacity-100': videoLoaded }"
        style="transition: opacity 1000ms ease;"
      >
        <source src="" type="video/webm" />
        <source src="" type="video/mp4" />
      </video>

      <!-- Overlays — light mode -->
      <div class="absolute inset-0 dark:hidden
                  bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
      <div class="absolute inset-0 dark:hidden
                  bg-[radial-gradient(ellipse_at_left,rgba(0,0,0,0.45),transparent_65%)]" />

      <!-- Overlays — dark mode -->
      <div class="absolute inset-0 hidden dark:block
                  bg-gradient-to-b from-black/75 via-black/60 to-black/90" />
      <div class="absolute inset-0 hidden dark:block
                  bg-[radial-gradient(ellipse_at_left,rgba(46,125,50,0.30),transparent_60%)]" />

      <!-- Grain -->
      <div
        ref="grainRef"
        class="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style="background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22/></svg>')"
      />
    </div>

    <!-- ============ AMBIENT GLOW ORBS ============ -->
    <div
      ref="orb1Ref"
      class="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full
             bg-harvest-500/15 blur-[100px] pointer-events-none z-0"
      aria-hidden="true"
    />
    <div
      ref="orb2Ref"
      class="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full
             bg-leaf-500/20 blur-[110px] pointer-events-none z-0"
      aria-hidden="true"
    />

    <!-- ============ MAIN CONTENT AREA ============ -->
    <div
      class="container-page relative z-10 flex-1 flex flex-col justify-center
              pt-10 pb-8 lg:pb-10"
    >
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end w-full">

        <!-- LEFT COLUMN -->
        <div class="lg:col-span-7">

          <!-- ============ PROJECT 2030 ADVERT — MOBILE STRIP (below lg) ============ -->
          <div
            ref="advertRefMobile"
            class="project-2030 project-2030--strip lg:hidden mb-6
                   relative w-full rounded-2xl p-[1.5px] overflow-hidden
                   will-change-transform"
          >
            <div class="project-2030-ring absolute inset-[-50%] -z-10" aria-hidden="true" />

            <div
              class="relative rounded-2xl
                     bg-[rgba(10,20,12,0.82)] backdrop-blur-xl
                     border border-white/15
                     px-4 py-3.5 overflow-hidden
                     shadow-[0_16px_48px_-16px_rgba(0,0,0,0.7)]"
            >
              <div class="absolute -top-12 -right-12 w-32 h-32 rounded-full
                          bg-harvest-500/25 blur-3xl pointer-events-none" aria-hidden="true" />
              <div class="absolute -bottom-12 -left-12 w-32 h-32 rounded-full
                          bg-leaf-500/25 blur-3xl pointer-events-none" aria-hidden="true" />

              <div class="relative flex items-center gap-3">
                <!-- Year -->
                <div class="shrink-0 flex flex-col leading-none">
                  <span class="text-[0.55rem] font-bold uppercase tracking-[0.18em] text-harvest-300 mb-1">
                    Project <br>2030
                  </span>
                  <span
                    ref="yearRefMobile"
                    class="font-display font-black leading-none tracking-[-0.05em]
                           text-[1.9rem]
                           bg-gradient-to-br from-harvest-300 via-harvest-400 to-leaf-400
                           bg-clip-text text-transparent"
                    aria-label="2030"
                  >
                    <span class="year-digit inline-block">2</span><span class="year-digit inline-block">0</span><span class="year-digit inline-block">3</span><span class="year-digit inline-block">0</span>
                  </span>
                </div>

                <!-- Divider -->
                <div class="w-px h-9 bg-white/15 shrink-0" aria-hidden="true" />

                <!-- Copy -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-1.5 mb-1">
                    <span class="relative flex h-1.5 w-1.5">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-harvest-400 opacity-80" />
                      <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-harvest-400" />
                    </span>
                    <span class="text-harvest-300 text-[0.58rem] font-bold uppercase tracking-[0.16em]">
                      Flagship Initiative
                    </span>
                  </div>
                  <p class="text-white/85 text-[0.72rem] leading-snug">
                    Seven estates. Four states. Peak yield by 2030.
                  </p>
                </div>

                <!-- Arrow -->
                <NuxtLink
                  to="/project-2030"
                  class="shrink-0 grid place-items-center w-8 h-8 rounded-full
                         bg-white text-[rgb(15,30,18)]
                         hover:bg-harvest-300 transition-colors duration-300"
                  aria-label="Explore Project 2030"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.6"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </NuxtLink>
              </div>

              <!-- Progress bar -->
              <div class="relative mt-3">
                <div class="flex items-center justify-between text-[0.55rem] uppercase tracking-widest
                            text-white/55 font-semibold mb-1">
                  <span>Progress to goal</span>
                  <span class="text-harvest-300" ref="progressLabelRefMobile">0%</span>
                </div>
                <div class="h-1 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    ref="progressBarRefMobile"
                    class="h-full rounded-full
                           bg-gradient-to-r from-harvest-400 to-leaf-400
                           shadow-[0_0_10px_rgba(249,168,37,0.6)]"
                    style="width: 0%"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Eyebrow badge -->
          <div
            ref="badgeRef"
            class="inline-flex items-center gap-2.5 mb-6
                   px-3.5 py-2 rounded-full
                   bg-white/10 backdrop-blur-md
                   border border-white/20
                   text-white/95 text-[0.8rem] font-medium
                   tracking-wide
                   will-change-transform"
          >
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-harvest-400 opacity-75" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-harvest-500" />
            </span>
            <span>Now accepting 2026 harvest pre-orders</span>
          </div>

          <!-- Headline -->
          <h1
            ref="headlineRef"
            class="font-display font-extrabold text-white
                  text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.05]
                  tracking-[-0.03em] mb-6"
          >
            <span class="text-harvest-400">Chrismek Technology</span>
            cultivates quality,<br />
            harvests <span class="text-leaf-300">trust</span> for a
            greener tomorrow.
          </h1>

          <!-- Subheadline -->
          <p
            ref="subRef"
            class="text-white/85 text-[clamp(1rem,1.4vw,1.1rem)]
                   leading-relaxed max-w-xl mb-8
                   will-change-transform"
          >
            From sustainable palm estates to diversified farmland, we deliver
            premium produce and long-term investment opportunities across West Africa.
          </p>

          <!-- CTAs -->
          <div ref="ctaRef" class="flex flex-wrap items-center gap-3.5 mb-12">
            <NuxtLink
              to="/plantations"
              class="btn btn-primary !px-6 !py-3.5 !text-[0.95rem]
                     group/cta will-change-transform"
            >
              Explore Our Plantations
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.4"
                   stroke-linecap="round" stroke-linejoin="round"
                   class="transition-transform duration-300 group-hover/cta:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </NuxtLink>
          </div>

          <!-- Stats row -->
          <div
            ref="statsRef"
            class="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6
                   pt-8 border-t border-white/15"
          >
            <div v-for="s in stats" :key="s.label" class="stat-card flex items-start gap-3 will-change-transform">
              <span
                class="stat-icon shrink-0 grid place-items-center w-9 h-9 rounded-lg
                       bg-white/10 backdrop-blur-md border border-white/15
                       text-harvest-400
                       transition-all duration-300 will-change-transform"
                aria-hidden="true"
                v-html="s.icon"
              />
              <div class="min-w-0">
                <div class="font-display font-extrabold text-white
                            text-[clamp(1.35rem,2.2vw,1.85rem)] leading-none mb-1.5">
                  <span class="stat-number" :data-target="s.value" :data-suffix="s.suffix">0</span>
                </div>
                <div class="text-white/65 text-[0.72rem] uppercase tracking-wider font-semibold leading-tight">
                  {{ s.label }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Project 2030 Advert + Harvest Calendar (desktop only) -->
        <div
          ref="harvestRef"
          class="hidden lg:flex lg:col-span-5 flex-col gap-4 items-end self-end pb-2"
        >

          <!-- ============ PROJECT 2030 ADVERT CARD — DESKTOP ============ -->
          <div
            ref="advertRef"
            class="project-2030 relative w-full max-w-[380px] rounded-2xl
                   p-[1.5px] overflow-hidden
                   will-change-transform"
          >
            <div class="project-2030-ring absolute inset-[-50%] -z-10" aria-hidden="true" />

            <div
              class="relative rounded-2xl
                     bg-[rgba(10,20,12,0.82)] backdrop-blur-xl
                     border border-white/15
                     px-5 py-5 overflow-hidden
                     shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]"
            >
              <div class="absolute -top-16 -right-16 w-40 h-40 rounded-full
                          bg-harvest-500/25 blur-3xl pointer-events-none" aria-hidden="true" />
              <div class="absolute -bottom-16 -left-16 w-40 h-40 rounded-full
                          bg-leaf-500/25 blur-3xl pointer-events-none" aria-hidden="true" />

              <!-- Header row -->
              <div class="relative flex items-center justify-between mb-3">
                <div class="inline-flex items-center gap-2
                            px-2.5 py-1 rounded-full
                            bg-harvest-500/15 border border-harvest-400/40">
                  <span class="relative flex h-1.5 w-1.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-harvest-400 opacity-80" />
                    <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-harvest-400" />
                  </span>
                  <span class="text-harvest-300 text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                    Flagship Initiative
                  </span>
                </div>

                <span class="text-white/40 text-[0.7rem] uppercase tracking-widest font-semibold">
                  Est. 2025
                </span>
              </div>

              <!-- Big 2030 numeral -->
              <div class="relative flex items-end gap-3 mb-3">
                <div
                  ref="yearRef"
                  class="font-display font-black leading-none tracking-[-0.05em]
                         text-[clamp(2.4rem,4.4vw,3.4rem)]
                         bg-gradient-to-br from-harvest-300 via-harvest-400 to-leaf-400
                         bg-clip-text text-transparent
                         drop-shadow-[0_2px_20px_rgba(249,168,37,0.35)]"
                  aria-label="Project 2030"
                >
                  <span class="year-digit inline-block">2</span><span class="year-digit inline-block">0</span><span class="year-digit inline-block">3</span><span class="year-digit inline-block">0</span>
                </div>
                <div class="pb-2">
                  <div class="text-white text-[0.82rem] font-bold uppercase tracking-[0.14em]">
                    Project 2030
                  </div>
                  <div class="text-white/55 text-[0.68rem] tracking-wide">
                    Full network maturity
                  </div>
                </div>
              </div>

              <!-- One-line pitch -->
              <p class="relative text-white/80 text-[0.82rem] leading-snug mb-4">
                Seven estates, four states, one integrated agribusiness — at peak yield by 2030.
              </p>

              <!-- Mini progress bar -->
              <div class="relative mb-4">
                <div class="flex items-center justify-between text-[0.65rem] uppercase tracking-widest
                            text-white/55 font-semibold mb-1.5">
                  <span>Progress to goal</span>
                  <span class="text-harvest-300" ref="progressLabelRef">0%</span>
                </div>
                <div class="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    ref="progressBarRef"
                    class="h-full rounded-full
                           bg-gradient-to-r from-harvest-400 to-leaf-400
                           shadow-[0_0_12px_rgba(249,168,37,0.6)]"
                    style="width: 0%"
                  />
                </div>
              </div>

              <!-- CTA -->
              <NuxtLink
                to="/project-2030"
                class="relative inline-flex items-center gap-2
                       px-4 py-2 rounded-full
                       bg-white text-[rgb(15,30,18)]
                       text-[0.78rem] font-bold
                       hover:bg-harvest-300
                       transition-all duration-300
                       group/cta2030
                       shadow-[0_4px_20px_-4px_rgba(249,168,37,0.5)]"
              >
                Explore the roadmap
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.6"
                     stroke-linecap="round" stroke-linejoin="round"
                     class="transition-transform duration-300 group-hover/cta2030:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Harvest label + items -->
          <div
            ref="harvestLabelRef"
            class="text-white/55 text-[0.72rem] uppercase tracking-[0.2em] font-semibold pr-1"
          >
            Harvest Calendar
          </div>
          <div
            v-for="(h, i) in harvests"
            :key="h.crop"
            :ref="(el) => { if (el) harvestItemRefs[i] = el as HTMLElement }"
            class="harvest-item group flex items-center gap-3
                   pl-4 pr-5 py-2.5 rounded-full
                   bg-white/10 backdrop-blur-md
                   border border-white/15
                   hover:bg-white/15
                   will-change-transform cursor-pointer"
            :style="{ marginRight: `${i * 16}px` }"
          >
            <span
              class="w-2 h-2 rounded-full shrink-0
                     transition-transform duration-300 group-hover:scale-150"
              :class="h.ready ? 'bg-leaf-400 ready-dot' : 'bg-harvest-400'"
            />
            <span class="text-white text-[0.82rem] font-medium">{{ h.crop }}</span>
            <span class="text-white/60 text-[0.78rem]">{{ h.when }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ============ SLIDING IMAGE MARQUEE ============ -->
    <div
      class="relative z-10 w-full pb-6 lg:pb-8
             [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div ref="marqueeRef" class="flex gap-4 w-max will-change-transform">
        <div
          v-for="(img, i) in marqueeImages"
          :key="`m1-${i}`"
          class="marquee-card relative shrink-0 w-[220px] sm:w-[260px] h-[140px] sm:h-[160px]
                 rounded-xl overflow-hidden
                 border border-white/15
                 bg-white/5 backdrop-blur-sm
                 group cursor-pointer
                 will-change-transform"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover
                   transition-transform duration-700
                   group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300" />
          <div class="absolute bottom-3 left-4 right-4
                      translate-y-3 opacity-0
                      group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-300">
            <div class="text-white font-semibold text-[0.85rem] leading-tight">{{ img.title }}</div>
            <div class="text-white/70 text-[0.72rem]">{{ img.location }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============ SCROLL INDICATOR ============ -->
    <div
      ref="scrollRef"
      class="absolute top-1/2 -translate-y-1/2 right-6 z-10
             hidden xl:flex flex-col items-center gap-3
             text-white/60 text-[0.7rem] uppercase tracking-[0.25em]
             [writing-mode:vertical-rl]"
    >
      <span>Scroll</span>
      <span class="scroll-bar w-px h-12 bg-gradient-to-b from-white/60 to-transparent origin-top" />
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

/* -------- Refs -------- */
const heroRef                = ref<HTMLElement | null>(null)
const bgWrapRef              = ref<HTMLElement | null>(null)
const posterRef              = ref<HTMLImageElement | null>(null)
const videoRef               = ref<HTMLVideoElement | null>(null)
const grainRef               = ref<HTMLElement | null>(null)
const orb1Ref                = ref<HTMLElement | null>(null)
const orb2Ref                = ref<HTMLElement | null>(null)
const badgeRef               = ref<HTMLElement | null>(null)
const headlineRef            = ref<HTMLElement | null>(null)
const subRef                 = ref<HTMLElement | null>(null)
const ctaRef                 = ref<HTMLElement | null>(null)
const statsRef               = ref<HTMLElement | null>(null)
const harvestRef             = ref<HTMLElement | null>(null)
const harvestLabelRef        = ref<HTMLElement | null>(null)
const scrollRef              = ref<HTMLElement | null>(null)
const marqueeRef             = ref<HTMLElement | null>(null)

/* Advert — desktop */
const advertRef              = ref<HTMLElement | null>(null)
const yearRef                = ref<HTMLElement | null>(null)
const progressBarRef         = ref<HTMLElement | null>(null)
const progressLabelRef       = ref<HTMLElement | null>(null)

/* Advert — mobile strip */
const advertRefMobile        = ref<HTMLElement | null>(null)
const yearRefMobile          = ref<HTMLElement | null>(null)
const progressBarRefMobile   = ref<HTMLElement | null>(null)
const progressLabelRefMobile = ref<HTMLElement | null>(null)

/* Harvest items (plain array — non-reactive, single-use) */
const harvestItemRefs: HTMLElement[] = []

const videoLoaded = ref(false)

/* -------- Icons -------- */
const icons = {
  leaf: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  users: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  map:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  award: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
}

/* -------- Data -------- */
const stats = [
  { label: 'Hectares Cultivated', value: 1200, suffix: '+', icon: icons.leaf },
  { label: 'Partner Farmers',     value: 34,   suffix: '+', icon: icons.users },
  { label: 'Estates Nationwide',  value: 6,    suffix: '',  icon: icons.map },
  { label: 'Years of Experience', value: 8,    suffix: '+', icon: icons.award },
]

const harvests = [
  { crop: 'Palm Oil',    when: 'Ready Now', ready: true },
  { crop: 'Plantain',    when: 'Q4 2026',   ready: false },
  { crop: 'Cocoa',       when: 'Q1 2027',   ready: false },
]

const marqueeImages = [
  { src: '/images/farm1.jpg', alt: 'Palm plantation aerial',      title: 'Palm Estate',     location: 'Cross River' },
  { src: '/images/farm5.jpg', alt: 'Harvesting palm fruit',       title: 'Fresh Harvest',   location: 'Edo State' },
  { src: '/images/farm3.jpg', alt: 'Cocoa pods drying',           title: 'Cocoa Pods',      location: 'Ondo' },
  { src: '/images/farm6.jpg', alt: 'Plantain plantation',         title: 'Plantain Farm',   location: 'Ogun' },
  { src: '/images/farm2.jpg', alt: 'Farmers working in field',    title: 'Partner Farmers', location: 'Akwa Ibom' },
  { src: '/images/farm4.jpg', alt: 'Golden hour over plantation', title: 'Golden Hour',     location: 'Delta' },
]

/* ---------------------------------------------------------------
   VIDEO LOAD
   --------------------------------------------------------------- */
const onVideoReady = () => { videoLoaded.value = true }

/* ---------------------------------------------------------------
   MOUSE PARALLAX (desktop only)
   --------------------------------------------------------------- */
let mouseMoveHandler: ((e: MouseEvent) => void) | null = null
const quickBg   = { x: 0, y: 0 }
const quickOrb1 = { x: 0, y: 0 }
const quickOrb2 = { x: 0, y: 0 }

const setupParallax = () => {
  const section = heroRef.value
  if (!section) return

  const strengthX   = 20
  const strengthY   = 14
  const orbStrength = 40

  mouseMoveHandler = (e: MouseEvent) => {
    const rect = section.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width  - 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5

    gsap.to(quickBg, {
      x: nx * strengthX,
      y: ny * strengthY,
      duration: 0.9,
      ease: 'power3.out',
      overwrite: 'auto',
      onUpdate: () => {
        if (videoRef.value)  gsap.set(videoRef.value,  { x: quickBg.x, y: quickBg.y })
        if (posterRef.value) gsap.set(posterRef.value, { x: quickBg.x, y: quickBg.y })
        if (bgWrapRef.value) gsap.set(bgWrapRef.value, { x: -quickBg.x * 0.4, y: -quickBg.y * 0.4 })
      },
    })

    gsap.to(quickOrb1, {
      x: -nx * orbStrength,
      y: -ny * orbStrength,
      duration: 1.2,
      ease: 'power2.out',
      overwrite: 'auto',
      onUpdate: () => {
        if (orb1Ref.value) gsap.set(orb1Ref.value, { x: quickOrb1.x, y: quickOrb1.y })
      },
    })

    gsap.to(quickOrb2, {
      x: nx * orbStrength * 0.7,
      y: ny * orbStrength * 0.7,
      duration: 1.4,
      ease: 'power2.out',
      overwrite: 'auto',
      onUpdate: () => {
        if (orb2Ref.value) gsap.set(orb2Ref.value, { x: quickOrb2.x, y: quickOrb2.y })
      },
    })
  }

  section.addEventListener('mousemove', mouseMoveHandler)
}

/* ---------------------------------------------------------------
   MARQUEE — infinite right → left
   --------------------------------------------------------------- */
let marqueeTween: gsap.core.Tween | null = null

const startMarquee = () => {
  if (!marqueeRef.value) return

  nextTick(() => {
    const el = marqueeRef.value!
    const halfWidth = el.scrollWidth / 2

    if (!el.dataset.cloned) {
      el.innerHTML += el.innerHTML
      el.dataset.cloned = 'true'
    }

    marqueeTween = gsap.to(el, {
      x: -halfWidth,
      duration: 40,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % halfWidth),
      },
    })
  })
}

/* ---------------------------------------------------------------
   MAIN ENTRANCE + CONTINUOUS ANIMATIONS
   --------------------------------------------------------------- */
let ctx: gsap.Context | null = null

onMounted(async () => {
  await nextTick()

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  /* Video events */
  const video = videoRef.value
  if (video) {
    if (video.readyState >= 3) videoLoaded.value = true
    else video.addEventListener('loadeddata', onVideoReady, { once: true })
  }

  /* Marquee runs (slower if reduced motion) */
  startMarquee()
  if (prefersReduced && marqueeTween) {
    (marqueeTween as gsap.core.Tween).timeScale(0.35)
  }

  /* Parallax only on desktop + reduced-motion off */
  if (!prefersReduced && window.matchMedia('(min-width: 1024px)').matches) {
    setupParallax()
  }

  if (prefersReduced) {
    gsap.set(
      [badgeRef.value, subRef.value, ctaRef.value, statsRef.value,
       harvestRef.value, scrollRef.value, advertRef.value, advertRefMobile.value].filter(Boolean),
      { autoAlpha: 1, y: 0, x: 0, scale: 1 }
    )
    runCounters()
    return
  }

  ctx = gsap.context(() => {
    /* ============ BACKGROUND CINEMATIC ENTRANCE ============ */
    const bgTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    bgTl
      .from([posterRef.value, videoRef.value].filter(Boolean), {
        scale: 1.15,
        duration: 2.2,
        ease: 'power2.out',
      })
      .from(grainRef.value, { autoAlpha: 0, duration: 1.8 }, 0.3)
      .from(orb1Ref.value, {
        autoAlpha: 0, scale: 0.7,
        duration: 1.6, ease: 'power2.out',
      }, 0.4)
      .from(orb2Ref.value, {
        autoAlpha: 0, scale: 0.7,
        duration: 1.8, ease: 'power2.out',
      }, 0.5)

    /* ============ HEADLINE SPLIT ============ */
    let split: SplitText | null = null
    if (headlineRef.value) {
      split = new SplitText(headlineRef.value, {
        type: 'lines,words',
        linesClass: 'overflow-hidden',
      })
    }

    /* ============ MAIN CONTENT TIMELINE ============ */
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 })

    /* Advert entrance — mobile strip first (if visible) */
    tl.from(advertRefMobile.value, {
      y: 30,
      autoAlpha: 0,
      scale: 0.94,
      duration: 0.8,
      ease: 'back.out(1.5)',
    })

    .from(yearRefMobile.value?.querySelectorAll('.year-digit') ?? [], {
      y: 20,
      autoAlpha: 0,
      rotateX: -90,
      transformOrigin: '50% 100% -20px',
      duration: 0.6,
      stagger: 0.07,
      ease: 'back.out(2.2)',
    }, '-=0.5')

    tl
      /* Badge — pop from below with slight scale */
      .from(badgeRef.value, {
        y: 30, autoAlpha: 0, scale: 0.94,
        duration: 0.7, ease: 'back.out(1.4)',
      }, '-=0.3')

      /* Headline — cinematic word cascade with 3D tilt */
      .from(split?.words ?? [], {
        y: 80,
        autoAlpha: 0,
        rotateX: -55,
        transformOrigin: '50% 100% -20px',
        duration: 1.1,
        stagger: 0.055,
        ease: 'power4.out',
      }, '-=0.35')

      /* Sub — soft reveal */
      .from(subRef.value, {
        y: 30, autoAlpha: 0,
        duration: 0.8, ease: 'power2.out',
      }, '-=0.7')

      /* CTA buttons — springy staggered rise */
      .from(ctaRef.value?.children ?? [], {
        y: 24, autoAlpha: 0, scale: 0.94,
        duration: 0.6,
        stagger: 0.12,
        ease: 'back.out(1.6)',
      }, '-=0.5')

      /* Stats container */
      .from(statsRef.value, {
        y: 30, autoAlpha: 0,
        duration: 0.7,
      }, '-=0.35')

      /* Stat cards — cascade */
      .from(statsRef.value?.querySelectorAll('.stat-card') ?? [], {
        y: 20, autoAlpha: 0,
        duration: 0.5,
        stagger: 0.08,
      }, '-=0.5')

      /* Stat icons — playful pop with rotation */
      .from(statsRef.value?.querySelectorAll('.stat-icon') ?? [], {
        scale: 0.4, autoAlpha: 0, rotate: -20,
        duration: 0.55,
        stagger: 0.08,
        ease: 'back.out(2.4)',
      }, '-=0.55')

      /* ============ PROJECT 2030 ADVERT — desktop entrance ============ */
      .from(advertRef.value, {
        y: 40,
        autoAlpha: 0,
        scale: 0.92,
        rotateX: -8,
        transformOrigin: '50% 100%',
        duration: 0.9,
        ease: 'back.out(1.5)',
      }, '-=0.55')

      .from(yearRef.value?.querySelectorAll('.year-digit') ?? [], {
        y: 30,
        autoAlpha: 0,
        rotateX: -90,
        transformOrigin: '50% 100% -20px',
        duration: 0.7,
        stagger: 0.09,
        ease: 'back.out(2.2)',
      }, '-=0.55')

      /* Harvest label */
      .from(harvestLabelRef.value, {
        x: 20, autoAlpha: 0,
        duration: 0.5,
      }, '-=0.4')

      /* Harvest pills */
      .from(harvestItemRefs.filter(Boolean), {
        x: 40, autoAlpha: 0, scale: 0.9,
        duration: 0.6,
        stagger: 0.12,
        ease: 'back.out(1.4)',
      }, '-=0.4')

      /* Scroll indicator */
      .from(scrollRef.value, {
        y: 16, autoAlpha: 0,
        duration: 0.5,
      }, '-=0.3')

      /* Counters */
      .add(() => runCounters(), '-=0.6')

    /* ============ CONTINUOUS ANIMATIONS ============ */

    /* Video Ken-Burns idle */
    if (videoRef.value) {
      gsap.to(videoRef.value, {
        scale: 1.08,
        duration: 20,
        repeat: -1, yoyo: true,
        ease: 'sine.inOut',
        delay: 2.5,
      })
    }

    /* Poster Ken-Burns if video not loaded */
    if (posterRef.value && !videoLoaded.value) {
      gsap.to(posterRef.value, {
        scale: 1.06,
        duration: 22,
        repeat: -1, yoyo: true,
        ease: 'sine.inOut',
        delay: 2.5,
      })
    }

    /* Scroll bar pulse */
    if (scrollRef.value) {
      const bar = scrollRef.value.querySelector('.scroll-bar')
      if (bar) {
        gsap.to(bar, {
          scaleY: 0.3,
          transformOrigin: 'top center',
          duration: 1.6,
          repeat: -1, yoyo: true,
          ease: 'power1.inOut',
        })
      }
    }

    /* Orb ambient breathing */
    if (orb1Ref.value) {
      gsap.to(orb1Ref.value, {
        scale: 1.15,
        duration: 8,
        repeat: -1, yoyo: true,
        ease: 'sine.inOut',
        delay: 2,
      })
    }
    if (orb2Ref.value) {
      gsap.to(orb2Ref.value, {
        scale: 1.12,
        duration: 10,
        repeat: -1, yoyo: true,
        ease: 'sine.inOut',
        delay: 2.5,
      })
    }

    /* Badge subtle pulsing ring */
    if (badgeRef.value) {
      gsap.to(badgeRef.value, {
        boxShadow: '0 0 0 6px rgba(255,255,255,0.06)',
        duration: 2,
        repeat: -1, yoyo: true,
        ease: 'sine.inOut',
        delay: 2,
      })
    }

    /* "Ready Now" green dot glow */
    const readyDot = harvestRef.value?.querySelector('.ready-dot')
    if (readyDot) {
      gsap.to(readyDot, {
        boxShadow: '0 0 12px 3px rgba(74, 222, 128, 0.6)',
        duration: 1.5,
        repeat: -1, yoyo: true,
        ease: 'sine.inOut',
      })
    }

    /* ============ PROJECT 2030 ADVERT — continuous (both layouts) ============ */
    const rings = [
      advertRef.value?.querySelector('.project-2030-ring'),
      advertRefMobile.value?.querySelector('.project-2030-ring'),
    ].filter(Boolean) as HTMLElement[]

    rings.forEach((ring) => {
      gsap.to(ring, {
        rotate: 360,
        duration: 8,
        repeat: -1,
        ease: 'none',
      })
    })

    const adverts = [advertRef.value, advertRefMobile.value].filter(Boolean) as HTMLElement[]
    adverts.forEach((card) => {
      gsap.to(card, {
        filter: 'drop-shadow(0 0 24px rgba(249,168,37,0.35))',
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.2,
      })
    })

    /* Progress bars — both layouts */
    const targetPct = 42   // ← adjust to real progress

    const animateProgress = (
      barEl: HTMLElement | null,
      labelEl: HTMLElement | null,
    ) => {
      if (!barEl && !labelEl) return
      const prog = { v: 0 }

      gsap.to(prog, {
        v: targetPct,
        duration: 2,
        ease: 'power2.out',
        delay: 1.4,
        onUpdate: () => {
          if (barEl)   barEl.style.width = `${prog.v}%`
          if (labelEl) labelEl.textContent = `${Math.round(prog.v)}%`
        },
      })
    }

    animateProgress(progressBarRef.value,       progressLabelRef.value)
    animateProgress(progressBarRefMobile.value, progressLabelRefMobile.value)

  }, heroRef.value!)
})

onBeforeUnmount(() => {
  videoRef.value?.removeEventListener('loadeddata', onVideoReady)
  marqueeTween?.kill()
  ctx?.revert()
  if (mouseMoveHandler && heroRef.value) {
    heroRef.value.removeEventListener('mousemove', mouseMoveHandler)
  }
})

/* ---------------------------------------------------------------
   COUNTERS — with completion pop
   --------------------------------------------------------------- */
const runCounters = () => {
  const els = heroRef.value?.querySelectorAll<HTMLElement>('.stat-number')
  if (!els) return

  els.forEach((el) => {
    const target = Number(el.dataset.target || 0)
    const suffix = el.dataset.suffix || ''
    const obj = { val: 0 }

    gsap.to(obj, {
      val: target,
      duration: 2.2,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = Math.round(obj.val).toLocaleString() + suffix
      },
      onComplete: () => {
        gsap.fromTo(el,
          { scale: 1 },
          { scale: 1.08, duration: 0.2, yoyo: true, repeat: 1, ease: 'power2.out' }
        )
      },
    })
  })
}
</script>

<style scoped>
/* Stat card hover micro-interaction */
.stat-card {
  transition: transform 0.3s ease;
}
.stat-card:hover .stat-icon {
  transform: scale(1.15) rotate(-6deg);
  background-color: rgba(249, 168, 37, 0.15);
  border-color: rgba(249, 168, 37, 0.4);
}

/* Harvest pill hover - lift + glow */
.harvest-item:hover {
  transform: translateX(-6px);
  box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.4);
}

/* Marquee card hover - deeper lift */
.marquee-card:hover {
  border-color: rgba(255, 255, 255, 0.35);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.5);
}

/* ============ PROJECT 2030 ADVERT ============ */

/* Rotating conic-gradient border */
.project-2030-ring {
  background: conic-gradient(
    from 0deg,
    rgba(249, 168, 37, 0.0)   0deg,
    rgba(249, 168, 37, 0.95) 90deg,
    rgba(132, 204, 22, 0.95) 180deg,
    rgba(249, 168, 37, 0.0)  270deg,
    rgba(249, 168, 37, 0.0)  360deg
  );
  border-radius: 1rem;
  will-change: transform;
  filter: blur(10px);
  opacity: 0.7;
  pointer-events: none;
}

.project-2030:hover .project-2030-ring {
  opacity: 1;
  filter: blur(14px);
}

/* Card body lift on hover */
.project-2030 > div:last-child {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.4s ease;
}

.project-2030:hover > div:last-child {
  transform: translateY(-3px);
  box-shadow: 0 28px 80px -20px rgba(0, 0, 0, 0.85),
              0 0 40px -10px rgba(249, 168, 37, 0.35);
}

/* Mobile strip: lighter blur to keep mobile fast */
@media (max-width: 1023px) {
  .project-2030--strip .project-2030-ring {
    filter: blur(8px);
    opacity: 0.55;
  }
}
</style>