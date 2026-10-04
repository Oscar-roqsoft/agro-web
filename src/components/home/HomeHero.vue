<template>
    <section
      ref="heroRef"
      class="relative isolate overflow-hidden
             min-h-[100svh] flex flex-col
             bg-[rgb(var(--bg-alt))]"
    >
      <!-- ============ BACKGROUND MEDIA ============ -->
      <div class="absolute inset-0 -z-10">
        <!-- Poster image -->
        <img
          src="/images/heroImg.png"
          alt=""
          aria-hidden="true"
          fetchpriority="high"
          class="absolute inset-0 w-full h-full object-cover"
        />
  
        <!-- Video -->
        <video
          ref="videoRef"
          autoplay muted loop playsinline
          preload="auto"
          poster="/images/heroImg.png"
          class="absolute inset-0 w-full h-full object-cover
                 opacity-0 transition-opacity duration-1000"
          :class="{ '!opacity-100': videoLoaded }"
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
        <div class="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
             style="background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22/></svg>')" />
      </div>
  
      <!-- ============ MAIN CONTENT AREA ============ -->
      <div
        class="container-page relative z-10 flex-1 flex flex-col justify-center
                pt-10  pb-8 lg:pb-10"
      >
        <!-- TOP ROW: Left content + Right harvest (aligned) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end w-full">
  
          <!-- LEFT COLUMN (spans 7/12 on desktop) -->
          <div class="lg:col-span-7 ">
  
            <!-- Eyebrow badge -->
            <div
              ref="badgeRef"
              class="inline-flex items-center gap-2.5 mb-6
                     px-3.5 py-2 rounded-full
                     bg-white/10 backdrop-blur-md
                     border border-white/20
                     text-white/95 text-[0.8rem] font-medium
                     tracking-wide"
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
              Cultivating <span class="text-harvest-400">quality</span>,<br />
              harvesting <span class="text-leaf-300">trust</span> for a
              greener tomorrow.
            </h1>
  
            <!-- Subheadline -->
            <p
              ref="subRef"
              class="text-white/85 text-[clamp(1rem,1.4vw,1.1rem)]
                     leading-relaxed max-w-xl mb-8"
            >
              From sustainable palm estates to diversified farmland, we deliver
              premium produce and long-term investment opportunities across West Africa.
            </p>
  
            <!-- CTAs -->
            <div ref="ctaRef" class="flex flex-wrap items-center gap-3.5 mb-12">
              <NuxtLink to="/plantations" class="btn btn-primary !px-6 !py-3.5 !text-[0.95rem]">
                Explore Our Plantations
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </NuxtLink>
  
              <NuxtLink
                to="/about"
                class="btn !px-6 !py-3.5 !text-[0.95rem]
                       bg-white/10 backdrop-blur-md
                       border border-white/25 text-white
                       hover:bg-white/20 hover:border-white/40"
              >
                <span class="grid place-items-center w-6 h-6 rounded-full bg-white/20">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch Our Story
              </NuxtLink>
            </div>
  
            <!-- Stats row (WITH ICONS) -->
            <div
              ref="statsRef"
              class="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6
                     pt-8 border-t border-white/15"
            >
              <div v-for="s in stats" :key="s.label" class="flex items-start gap-3">
                <!-- Icon -->
                <span
                  class="shrink-0 grid place-items-center w-9 h-9 rounded-lg
                         bg-white/10 backdrop-blur-md border border-white/15
                         text-harvest-400"
                  aria-hidden="true"
                  v-html="s.icon"
                />
                <!-- Value + label -->
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
  
          <!-- RIGHT COLUMN: Harvest Calendar (bottom-aligned) -->
          <div
            ref="harvestRef"
            class="hidden lg:flex lg:col-span-5 flex-col gap-3 items-end self-end pb-2"
          >
            <div class="text-white/55 text-[0.72rem] uppercase tracking-[0.2em] font-semibold pr-1">
              Harvest Calendar
            </div>
            <div
              v-for="(h, i) in harvests"
              :key="h.crop"
              class="group flex items-center gap-3
                     pl-4 pr-5 py-2.5 rounded-full
                     bg-white/10 backdrop-blur-md
                     border border-white/15
                     hover:bg-white/15 transition-colors duration-200"
              :style="{ marginRight: `${i * 16}px` }"
            >
              <span
                class="w-2 h-2 rounded-full shrink-0"
                :class="h.ready ? 'bg-leaf-400' : 'bg-harvest-400'"
              />
              <span class="text-white text-[0.82rem] font-medium">{{ h.crop }}</span>
              <span class="text-white/60 text-[0.78rem]">{{ h.when }}</span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- ============ SLIDING IMAGE MARQUEE (below content) ============ -->
      <div
        class="relative z-10 w-full pb-6 lg:pb-8
               [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <!-- Row 1: right → left -->
        <div ref="marqueeRef" class="flex gap-4 w-max will-change-transform">
          <div
            v-for="(img, i) in marqueeImages"
            :key="`m1-${i}`"
            class="relative shrink-0 w-[220px] sm:w-[260px] h-[140px] sm:h-[160px]
                   rounded-xl overflow-hidden
                   border border-white/15
                   bg-white/5 backdrop-blur-sm
                   group cursor-pointer"
          >
            <img
              :src="img.src"
              :alt="img.alt"
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover
                     transition-transform duration-700
                     group-hover:scale-110"
            />
            <!-- Hover overlay -->
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
        <span class="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { SplitText } from 'gsap/SplitText'
  
  gsap.registerPlugin(SplitText)
  
  /* -------- Refs -------- */
  const heroRef     = ref<HTMLElement | null>(null)
  const videoRef    = ref<HTMLVideoElement | null>(null)
  const badgeRef    = ref<HTMLElement | null>(null)
  const headlineRef = ref<HTMLElement | null>(null)
  const subRef      = ref<HTMLElement | null>(null)
  const ctaRef      = ref<HTMLElement | null>(null)
  const statsRef    = ref<HTMLElement | null>(null)
  const harvestRef  = ref<HTMLElement | null>(null)
  const scrollRef   = ref<HTMLElement | null>(null)
  const marqueeRef  = ref<HTMLElement | null>(null)
  
  const videoLoaded = ref(false)
  
  /* -------- Icons (inline SVG strings, currentColor-aware) -------- */
  const icons = {
    leaf: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    users: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    map:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    award: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  }
  
  /* -------- Data -------- */
  const stats = [
    { label: 'Hectares Cultivated', value: 1200, suffix: '+', icon: icons.leaf },
    { label: 'Partner Farmers',     value: 34,  suffix: '+', icon: icons.users },
    { label: 'Estates Nationwide',  value: 6,    suffix: '',  icon: icons.map },
    { label: 'Years of Experience', value: 8,   suffix: '+', icon: icons.award },
  ]
  
  const harvests = [
    { crop: 'Palm Oil',    when: 'Ready Now', ready: true },
    { crop: 'Plantain',    when: 'Q4 2026',   ready: false },
    { crop: 'Cocoa',       when: 'Q1 2027',   ready: false },
  ]
  
  /* -------- Marquee images (replace src with your real paths) -------- */
  const marqueeImages = [
    { src: '/images/farm1.jpg', alt: 'Palm plantation aerial',       title: 'Palm Estate',    location: 'Cross River' },
    { src: '/images/farm5.jpg', alt: 'Harvesting palm fruit',         title: 'Fresh Harvest',  location: 'Edo State' },
    { src: '/images/farm3.jpg', alt: 'Cocoa pods drying',             title: 'Cocoa Pods',     location: 'Ondo' },
    { src: '/images/farm6.jpg', alt: 'Plantain plantation',           title: 'Plantain Farm',  location: 'Ogun' },
    { src: '/images/farm2.jpg', alt: 'Farmers working in field',      title: 'Partner Farmers', location: 'Akwa Ibom' },
    { src: '/images/farm4.jpg', alt: 'Golden hour over plantation',   title: 'Golden Hour',    location: 'Delta' },
  ]
  
  /* ---------------------------------------------------------------
     VIDEO LOAD
     --------------------------------------------------------------- */
  const onVideoReady = () => { videoLoaded.value = true }
  
  /* ---------------------------------------------------------------
     MARQUEE — infinite right → left
     --------------------------------------------------------------- */
  let marqueeTween: gsap.core.Tween | null = null
  
  const startMarquee = () => {
    if (!marqueeRef.value) return
  
    // Wait a tick so DOM has measured widths
    nextTick(() => {
      const el = marqueeRef.value!
      const halfWidth = el.scrollWidth / 2
  
      // Duplicate content once for seamless loop (if not already)
      if (!el.dataset.cloned) {
        el.innerHTML += el.innerHTML
        el.dataset.cloned = 'true'
      }
  
      marqueeTween = gsap.to(el, {
        x: -halfWidth,
        duration: 40,           // lower = faster
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % halfWidth),
        },
      })
    })
  }
  
  /* Pause on hover (nice UX) */
  const pauseMarquee  = () => marqueeTween?.pause()
  const resumeMarquee = () => marqueeTween?.resume()
  
  /* ---------------------------------------------------------------
     MAIN ENTRANCE
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
  
    /* Marquee always runs (or starts paused if reduced-motion) */
    startMarquee()
    if (prefersReduced && marqueeTween) {
      (marqueeTween as gsap.core.Tween).timeScale(0.35)
    }
  
    if (prefersReduced) {
      gsap.set(
        [badgeRef.value, subRef.value, ctaRef.value, statsRef.value, harvestRef.value, scrollRef.value],
        { autoAlpha: 1, y: 0, x: 0 }
      )
      runCounters()
      return
    }
  
    ctx = gsap.context(() => {
      /* Split headline */
      let split: SplitText | null = null
      if (headlineRef.value) {
        split = new SplitText(headlineRef.value, {
          type: 'lines,words',
          linesClass: 'overflow-hidden',
        })
      }
  
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 })
  
      tl
        .from(badgeRef.value, { y: 20, autoAlpha: 0, duration: 0.6 })
        .from(split?.words ?? [], {
          y: 60, autoAlpha: 0, duration: 0.9, stagger: 0.05, ease: 'power4.out',
        }, '-=0.3')
        .from(subRef.value, { y: 24, autoAlpha: 0, duration: 0.6 }, '-=0.5')
        .from(ctaRef.value?.children ?? [], {
          y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.1,
        }, '-=0.4')
        .from(statsRef.value, { y: 24, autoAlpha: 0, duration: 0.6 }, '-=0.3')
        // Stat icons stagger individually
        .from(statsRef.value?.querySelectorAll('span[aria-hidden]') ?? [], {
          scale: 0.6, autoAlpha: 0, duration: 0.4, stagger: 0.08, ease: 'back.out(2)',
        }, '-=0.4')
        .from(harvestRef.value?.children ?? [], {
          x: 30, autoAlpha: 0, duration: 0.5, stagger: 0.1,
        }, '-=0.6')
        .from(scrollRef.value, { y: 16, autoAlpha: 0, duration: 0.5 }, '-=0.3')
        .add(() => runCounters(), '-=0.5')
  
      /* Scroll indicator pulse */
      if (scrollRef.value) {
        const bar = scrollRef.value.querySelector('span:last-child')
        if (bar) {
          gsap.to(bar, {
            scaleY: 0.4, transformOrigin: 'top center',
            duration: 1.4, repeat: -1, yoyo: true, ease: 'power1.inOut',
          })
        }
      }
  
      /* Idle Ken-Burns on background */
      if (videoRef.value) {
        gsap.to(videoRef.value, {
          scale: 1.08, duration: 20, repeat: -1, yoyo: true, ease: 'sine.inOut',
        })
      }
    }, heroRef.value!)
  })
  
  onBeforeUnmount(() => {
    videoRef.value?.removeEventListener('loadeddata', onVideoReady)
    marqueeTween?.kill()
    ctx?.revert()
  })
  
  /* ---------------------------------------------------------------
     COUNTERS
     --------------------------------------------------------------- */
  const runCounters = () => {
    const els = heroRef.value?.querySelectorAll<HTMLElement>('.stat-number')
    if (!els) return
  
    els.forEach((el) => {
      const target = Number(el.dataset.target || 0)
      const suffix = el.dataset.suffix || ''
      const obj = { val: 0 }
  
      gsap.to(obj, {
        val: target, duration: 2, ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toLocaleString() + suffix
        },
      })
    })
  }
  </script>