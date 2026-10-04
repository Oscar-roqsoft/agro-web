<template>
    <section
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg-alt))] overflow-hidden"
    >
      <!-- Ambient blobs -->
      <div class="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full
                  bg-leaf-500/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div class="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full
                  bg-harvest-500/5 blur-3xl pointer-events-none" aria-hidden="true" />
  
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
              Trusted by Buyers & Investors
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              The people and partners<br />
              <span class="text-leaf-500">who grow with us.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
              From local cooperatives to global commodity buyers — here's what
              partners say about working with our estates.
            </p>
          </div>
        </div>
  
        <!-- ============ QUOTE CARDS GRID ============ -->
        <div
          ref="quotesRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          <article
            v-for="(t, i) in testimonials"
            :key="t.name"
            :ref="(el) => { if (el) quoteRefs[i] = el as HTMLElement }"
            class="quote-card group relative flex flex-col
                   rounded-2xl p-6 lg:p-7
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]
                   transition-all duration-500
                   hover:-translate-y-1.5
                   hover:border-leaf-500/25
                   hover:shadow-[0_25px_50px_-20px_rgba(46,125,50,0.25)]"
          >
            <!-- Decorative quote mark -->
            <div
              class="absolute top-5 right-6
                     font-display font-extrabold leading-none
                     text-[4rem] lg:text-[5rem]
                     text-leaf-500/10 dark:text-leaf-500/15
                     select-none pointer-events-none"
              aria-hidden="true"
            >
              &rdquo;
            </div>
  
            <!-- Rating stars -->
            <div class="flex items-center gap-1 mb-5" aria-label="5 out of 5 stars">
              <svg
                v-for="n in 5"
                :key="n"
                width="16" height="16" viewBox="0 0 24 24"
                fill="currentColor"
                class="text-harvest-500"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
  
            <!-- Quote text -->
            <blockquote
              class="flex-1 text-[rgb(var(--text))] text-[1rem] leading-relaxed mb-6
                     relative z-10"
            >
              {{ t.quote }}
            </blockquote>
  
            <!-- Divider -->
            <div class="pt-5 border-t border-[rgb(var(--border)/0.08)]">
              <div class="flex items-center gap-3.5">
                <!-- Avatar -->
                <div
                  class="shrink-0 w-12 h-12 rounded-full overflow-hidden
                         ring-2 ring-leaf-500/20 ring-offset-2
                         ring-offset-[rgb(var(--surface))]"
                >
                  <img
                    :src="t.avatar"
                    :alt="t.name"
                    loading="lazy"
                    class="w-full h-full object-cover"
                  />
                </div>
  
                <!-- Name + role -->
                <div class="min-w-0 flex-1">
                  <div class="font-semibold text-[0.95rem] text-[rgb(var(--text))] leading-tight">
                    {{ t.name }}
                  </div>
                  <div class="text-[0.82rem] text-[rgb(var(--text-muted))] leading-tight mt-0.5 truncate">
                    {{ t.role }}
                  </div>
                </div>
  
                <!-- Company mark (small) -->
                <div
                  v-if="t.companyMark"
                  class="shrink-0 grid place-items-center w-9 h-9 rounded-lg
                         bg-[rgb(var(--bg-alt))]
                         border border-[rgb(var(--border)/0.08)]
                         text-[rgb(var(--text-muted))]"
                  v-html="t.companyMark"
                />
              </div>
            </div>
  
            <!-- Bottom accent on hover -->
            <div
              class="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0
                     bg-gradient-to-r from-leaf-500 to-harvest-500
                     group-hover:scale-x-100 transition-transform duration-500
                     rounded-b-2xl"
            />
          </article>
        </div>
  
        <!-- ============ PARTNER LOGOS MARQUEE ============ -->
        <div ref="partnersWrapRef" class="mt-20 lg:mt-24">
  
          <div class="text-center mb-8">
            <div class="text-[rgb(var(--text-muted))] text-[0.78rem] uppercase tracking-[0.2em] font-semibold mb-2">
              Trusted By Leading Companies
            </div>
            <div class="text-[rgb(var(--text))] font-display font-bold text-[1.05rem]">
              Global partners, local roots.
            </div>
          </div>
  
          <!-- Marquee -->
          <div
            class="relative w-full
                   [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            @mouseenter="pauseMarquee"
            @mouseleave="resumeMarquee"
          >
            <div
              ref="marqueeRef"
              class="flex items-center gap-12 lg:gap-16 w-max will-change-transform"
            >
              <!-- Partner logos -->
              <div
                v-for="(p, i) in partners"
                :key="`p-${i}`"
                class="partner-logo shrink-0 flex items-center gap-3
                       text-[rgb(var(--text-muted))]
                       hover:text-[rgb(var(--text))]
                       transition-colors duration-300"
              >
                <span class="w-9 h-9 grid place-items-center" v-html="p.icon" />
                <span
                  class="font-display font-extrabold text-[1.15rem] lg:text-[1.3rem]
                         tracking-[-0.02em] whitespace-nowrap"
                >
                  {{ p.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ BOTTOM CTA ============ -->
        <div
          ref="ctaRef"
          class="mt-16 lg:mt-20 text-center"
        >
          <NuxtLink
            to="/case-studies"
            class="group inline-flex items-center gap-2
                   text-leaf-600 dark:text-leaf-400
                   font-semibold text-[0.98rem]
                   hover:gap-3 transition-all duration-200"
          >
            See all case studies & stories
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </NuxtLink>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  /* -------- Icons for partner logos -------- */
  const icons = {
    leaf: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    globe: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    cube: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>`,
    factory: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1M12 18h1M7 18h1"/></svg>`,
    ship: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21h20M5 21V10l7-5 7 5v11M12 10v11M9 13h6"/></svg>`,
    bank: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>`,
    shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>`,
  }
  
  /* -------- Refs -------- */
  const sectionRef       = ref<HTMLElement | null>(null)
  const eyebrowRef       = ref<HTMLElement | null>(null)
  const headingRef       = ref<HTMLElement | null>(null)
  const descRef          = ref<HTMLElement | null>(null)
  const quotesRef        = ref<HTMLElement | null>(null)
  const partnersWrapRef  = ref<HTMLElement | null>(null)
  const marqueeRef       = ref<HTMLElement | null>(null)
  const ctaRef           = ref<HTMLElement | null>(null)
  const quoteRefs: HTMLElement[] = []
  
  /* -------- Testimonials data -------- */
  interface Testimonial {
    quote: string
    name: string
    role: string
    avatar: string
    companyMark?: string
  }
  
  const testimonials: Testimonial[] = [
    {
      quote:
        'After 3 years of working with GreenField, our cocoa supply has become the most reliable on our roster. Traceability is impeccable — every bag has a story.',
      name: 'Amara Okonkwo',
      role: 'Head of Procurement, Westcocoa Ltd.',
      avatar: '/images/avatar-1.jpg',
      companyMark: icons.cube,
    },
    {
      quote:
        'I invested in a Growth package two years ago. The quarterly reports are thorough, honest, and actually show progress. It feels like a real partnership, not a bet.',
      name: 'David Adeyemi',
      role: 'Private Investor, Lagos',
      avatar: '/images/avatar-2.jpg',
      companyMark: icons.shield,
    },
    {
      quote:
        'What impressed me most was their discipline during the long growth years. No shortcuts, no hype — just steady, audited progress. That\'s rare in this industry.',
      name: 'Fatima Bello',
      role: 'Director, Sahel Impact Fund',
      avatar: '/images/avatar-3.jpg',
      companyMark: icons.bank,
    },
  ]
  
  /* -------- Partners data -------- */
  const partners = [
    { name: 'Westcocoa',      icon: icons.cube },
    { name: 'Sahel Foods',    icon: icons.leaf },
    { name: 'AgriBank',       icon: icons.bank },
    { name: 'PortLine',       icon: icons.ship },
    { name: 'Olam Group',     icon: icons.globe },
    { name: 'Trust Audit',    icon: icons.shield },
    { name: 'GreenPack Ind.', icon: icons.factory },
  ]
  
  /* ---------------------------------------------------------------
     MARQUEE
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
        duration: 45,           // slow, subtle
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % halfWidth),
        },
      })
    })
  }
  
  const pauseMarquee  = () => marqueeTween?.pause()
  const resumeMarquee = () => marqueeTween?.resume()
  
  /* ---------------------------------------------------------------
     GSAP — reveals
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    /* Marquee always runs (slower for reduced motion) */
    startMarquee()
    if (prefersReduced && marqueeTween) {
      marqueeTween.timeScale(0.4)
    }
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         ...quoteRefs, partnersWrapRef.value, ctaRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, scale: 1 }
      )
      return
    }
  
    ctx = gsap.context(() => {
      /* --- Header --- */
      gsap.from(eyebrowRef.value, {
        y: 24, autoAlpha: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: eyebrowRef.value, start: 'top 88%' },
      })
      gsap.from(headingRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.value, start: 'top 85%' },
      })
      gsap.from(descRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: descRef.value, start: 'top 88%' },
      })
  
      /* --- Quote cards --- */
      const quotes = quoteRefs.filter(Boolean)
      if (quotes.length) {
        gsap.from(quotes, {
          y: 50, autoAlpha: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: quotesRef.value, start: 'top 80%' },
        })
  
        /* Soft scale-in for avatars */
        quotes.forEach((card) => {
          const avatar = card.querySelector('.rounded-full')
          if (avatar) {
            gsap.from(avatar, {
              scale: 0.6, autoAlpha: 0, duration: 0.5, ease: 'back.out(2)',
              scrollTrigger: { trigger: card, start: 'top 75%' },
            })
          }
        })
      }
  
      /* --- Partners wrap --- */
      gsap.from(partnersWrapRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: partnersWrapRef.value, start: 'top 88%' },
      })
  
      /* --- Bottom CTA --- */
      gsap.from(ctaRef.value, {
        y: 20, autoAlpha: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ctaRef.value, start: 'top 92%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => {
    marqueeTween?.kill()
    ctx?.revert()
  })
  </script>
  
  <style scoped>
  .quote-card {
    min-height: 100%;
  }
  </style>