<template>
    <section
      ref="sectionRef"
      class="relative py-16 lg:py-20 bg-[rgb(var(--bg-alt))]"
    >
      <div class="container-page">
  
        <!-- Header -->
        <div class="text-center max-w-xl mx-auto mb-12">
          <div
            class="text-[rgb(var(--text-muted))] text-[0.78rem]
                   uppercase tracking-[0.2em] font-semibold mb-3"
          >
            Step 1 of 2
          </div>
          <h2
            class="font-display font-extrabold
                   text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                   tracking-[-0.025em] text-[rgb(var(--text))] mb-3"
          >
            What brings you here today?
          </h2>
          <p class="text-[rgb(var(--text-muted))] text-[0.98rem] leading-relaxed">
            Choose the option that fits best — we'll route you to the right team
            and pre-fill your message.
          </p>
        </div>
  
        <!-- Intent cards -->
        <div
          ref="gridRef"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          <button
            v-for="(intent, i) in intents"
            :key="intent.id"
            :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
            type="button"
            class="intent-card group relative flex flex-col
                   text-left
                   rounded-2xl p-6
                   bg-[rgb(var(--surface))]
                   border-2 transition-all duration-400
                   hover:-translate-y-1.5"
            :class="activeId === intent.id
              ? 'border-leaf-500 shadow-[0_20px_45px_-15px_rgba(46,125,50,0.4)]'
              : 'border-[rgb(var(--border)/0.1)] hover:border-leaf-500/40 hover:shadow-[0_15px_35px_-15px_rgba(46,125,50,0.25)]'"
            @click="select(intent.id)"
          >
            <!-- Selected indicator -->
            <div
              class="absolute top-4 right-4
                     grid place-items-center w-6 h-6 rounded-full
                     transition-all duration-300"
              :class="activeId === intent.id
                ? 'bg-leaf-500 scale-100'
                : 'bg-[rgb(var(--border)/0.15)] scale-90'"
            >
              <svg v-if="activeId === intent.id"
                   width="12" height="12" viewBox="0 0 24 24" fill="none"
                   stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </div>
  
            <!-- Icon -->
            <div
              class="grid place-items-center w-12 h-12 rounded-xl mb-5
                     transition-transform duration-500
                     group-hover:scale-110"
              :class="intent.iconBg"
              v-html="intent.icon"
            />
  
            <!-- Title -->
            <div class="font-display font-bold text-[rgb(var(--text))]
                        text-[1.05rem] leading-tight mb-2">
              {{ intent.title }}
            </div>
  
            <!-- Description -->
            <p class="text-[rgb(var(--text-muted))] text-[0.85rem] leading-relaxed">
              {{ intent.description }}
            </p>
  
            <!-- Response time chip -->
            <div
              class="mt-4 inline-flex items-center gap-1.5 self-start
                     px-2.5 py-1 rounded-full
                     bg-leaf-500/10 text-leaf-600 dark:text-leaf-400
                     text-[0.68rem] font-bold uppercase tracking-wider"
            >
              <span class="w-1 h-1 rounded-full bg-leaf-500" />
              {{ intent.response }}
            </div>
          </button>
        </div>
  
        <!-- scroll cue -->
        <div
          v-if="activeId"
          class="mt-8 flex items-center justify-center gap-3
                 text-[rgb(var(--text-muted))] text-[0.82rem] font-medium"
        >
          <span>Now fill in your details below</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.4"
               stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  /* Icons */
  const icons = {
    cart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
    chart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    handshake: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
    news: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z"/></svg>`,
  }
  
  const intents = [
    {
      id: 'buyer',
      title: 'Buy Produce',
      description: 'Palm oil, cocoa, plantain, rubber — bulk or export quantities.',
      response: 'Reply in 24h',
      icon: icons.cart,
      iconBg: 'bg-leaf-500/12 text-leaf-600 dark:text-leaf-400',
    },
    {
      id: 'investor',
      title: 'Invest',
      description: 'Explore packages from $5K, request the prospectus, or book a call.',
      response: 'Reply in 12h',
      icon: icons.chart,
      iconBg: 'bg-harvest-500/15 text-harvest-700 dark:text-harvest-400',
    },
    {
      id: 'partner',
      title: 'Partner With Us',
      description: 'Outgrower programs, joint ventures, or supply chain partnerships.',
      response: 'Reply in 48h',
      icon: icons.handshake,
      iconBg: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 'press',
      title: 'Press or Media',
      description: 'Interviews, features, and general company information.',
      response: 'Reply in 48h',
      icon: icons.news,
      iconBg: 'bg-blue-500/12 text-blue-600 dark:text-blue-400',
    },
  ]
  
  const activeId = ref<string | null>(null)
  
  /* -------- Shared state via composable -------- */
  const contactForm = useState<{ intent: string | null }>('contact-form', () => ({
    intent: null,
  }))
  
  const select = (id: string) => {
    activeId.value = id
    contactForm.value.intent = id
  
    // Smooth scroll to form
    nextTick(() => {
      document.getElementById('contact-form-section')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }
  
  /* -------- Refs -------- */
  const sectionRef = ref<HTMLElement | null>(null)
  const gridRef    = ref<HTMLElement | null>(null)
  const cardRefs: HTMLElement[] = []
  
  /* -------- GSAP -------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
  
    ctx = gsap.context(() => {
      const cards = cardRefs.filter(Boolean)
      if (cards.length) {
        gsap.from(cards, {
          y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.value, start: 'top 82%' },
        })
      }
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>