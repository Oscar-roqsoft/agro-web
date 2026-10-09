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
                     bg-harvest-500/10 border border-harvest-500/20
                     text-harvest-700 dark:text-harvest-400
                     text-[0.78rem] font-semibold tracking-wider uppercase"
            >
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-harvest-400 opacity-75" />
                <span class="relative inline-flex rounded-full h-2 w-2 bg-harvest-500" />
              </span>
              Reserve Now
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              The next three windows<br />
              <span class="text-leaf-500">to buy in.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed">
              Pre-orders lock in volume and price before the harvest begins.
              Deposit is refundable up to 30 days before the reserve-by date.
              Limited allocations.
            </p>
          </div>
        </div>
  
        <!-- ============ HARVEST CARDS ============ -->
        <div
          ref="gridRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          <article
            v-for="harvest in upcomingHarvests"
            :key="harvest.slug"
            class="harvest-card group relative flex flex-col
                   rounded-2xl overflow-hidden
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.1)]
                   transition-all duration-500
                   hover:-translate-y-1.5
                   hover:border-leaf-500/30
                   hover:shadow-[0_25px_60px_-20px_rgba(46,125,50,0.3)]"
          >
            <!-- Featured badge -->
            <div
              v-if="harvest.featured"
              class="absolute top-5 right-5 z-20
                     inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                     bg-harvest-500 text-white
                     text-[0.68rem] font-extrabold tracking-wider uppercase
                     shadow-lg"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="3"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Featured
            </div>
  
            <!-- ============ HEADER STRIP ============ -->
            <div class="relative p-6 lg:p-7 pb-5
                        bg-gradient-to-br from-leaf-700 via-leaf-800 to-leaf-900
                        text-white">
              <div class="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white/5" />
              <div class="absolute -right-2 top-20 w-16 h-16 rounded-full bg-white/5" />
  
              <div class="relative z-10">
                <!-- Crop + estate -->
                <div class="flex items-center gap-2.5 mb-4">
                  <span
                    class="grid place-items-center w-9 h-9 rounded-lg
                           bg-white/10 backdrop-blur-md border border-white/15
                           text-harvest-400"
                    v-html="harvest.icon"
                  />
                  <div>
                    <div class="text-[0.7rem] uppercase tracking-wider
                                font-bold text-harvest-300">
                      {{ harvest.crop }}
                    </div>
                    <div class="text-[0.82rem] font-medium text-white/75">
                      {{ harvest.estate }}
                    </div>
                  </div>
                </div>
  
                <!-- Harvest month -->
                <div class="mb-5">
                  <div class="text-white/60 text-[0.7rem]
                              uppercase tracking-wider font-bold mb-1">
                    Expected harvest
                  </div>
                  <div class="font-display font-extrabold text-white
                              text-[clamp(1.65rem,3vw,2.25rem)] leading-none
                              tracking-[-0.03em]">
                    {{ harvest.harvestMonth }}
                  </div>
                </div>
  
                <!-- Countdown -->
                <div
                  class="rounded-xl p-3.5
                         bg-white/10 backdrop-blur-md border border-white/15"
                >
                  <div class="text-white/60 text-[0.68rem]
                              uppercase tracking-wider font-bold mb-2.5">
                    Time remaining
                  </div>
                  <div class="grid grid-cols-4 gap-2">
                    <div
                      v-for="unit in countdownUnits(harvest.harvestDate)"
                      :key="unit.label"
                      class="text-center"
                    >
                      <div class="font-display font-extrabold text-white
                                  text-[clamp(1rem,2.2vw,1.4rem)] leading-none
                                  tabular-nums">
                        {{ String(unit.value).padStart(2, '0') }}
                      </div>
                      <div class="text-white/50 text-[0.6rem]
                                  uppercase tracking-wider font-bold mt-1">
                        {{ unit.label }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- ============ BODY ============ -->
            <div class="p-6 lg:p-7 flex flex-col flex-1">
  
              <!-- Volume available -->
              <div class="mb-5">
                <div class="flex items-end justify-between gap-3 mb-3">
                  <div>
                    <div class="text-[rgb(var(--text-muted))] text-[0.68rem]
                                uppercase tracking-wider font-bold mb-1">
                      Volume available
                    </div>
                    <div class="flex items-baseline gap-1.5">
                      <span class="font-display font-extrabold
                                   text-leaf-500 text-[1.5rem] leading-none">
                        {{ harvest.available }}
                      </span>
                      <span class="text-[rgb(var(--text-muted))] text-[0.82rem]
                                   font-medium">
                        of {{ harvest.total }}
                      </span>
                    </div>
                  </div>
                  <span
                    class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                           text-[0.68rem] font-bold uppercase tracking-wider"
                    :class="allocationClass(harvest.reservedPercent)"
                  >
                    <span
                      class="w-1.5 h-1.5 rounded-full"
                      :class="allocationDotClass(harvest.reservedPercent)"
                    />
                    {{ harvest.reservedPercent }}% reserved
                  </span>
                </div>
  
                <div class="h-1.5 rounded-full bg-[rgb(var(--border)/0.15)] overflow-hidden">
                  <div
                    class="allocation-bar h-full rounded-full origin-left
                           transition-transform duration-1000"
                    :class="allocationBarClass(harvest.reservedPercent)"
                    :style="{ width: `${harvest.reservedPercent}%` }"
                  />
                </div>
              </div>
  
              <!-- Reserve-by deadline -->
              <div
                class="flex items-start gap-3 p-3.5 rounded-xl mb-5
                       bg-harvest-500/8 border border-harvest-500/20"
              >
                <span
                  class="shrink-0 grid place-items-center w-8 h-8 rounded-lg
                         bg-harvest-500/15 text-harvest-600 dark:text-harvest-400"
                  v-html="clockIcon"
                />
                <div>
                  <div class="text-[rgb(var(--text-muted))] text-[0.68rem]
                              uppercase tracking-wider font-bold mb-0.5">
                    Reserve before
                  </div>
                  <div class="font-display font-bold text-[rgb(var(--text))]
                              text-[0.95rem] leading-tight">
                    {{ harvest.reserveBy }}
                  </div>
                  <div class="text-[rgb(var(--text-muted))] text-[0.78rem] mt-0.5">
                    {{ daysUntil(harvest.reserveByDate) }} days left
                  </div>
                </div>
              </div>
  
              <!-- Key details -->
              <dl class="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                <div>
                  <dt class="text-[rgb(var(--text-muted))] text-[0.68rem]
                             uppercase tracking-wider font-bold mb-1">
                    Deposit
                  </dt>
                  <dd class="font-semibold text-[rgb(var(--text))]
                             text-[0.92rem]">
                    {{ harvest.deposit }}
                  </dd>
                </div>
                <div>
                  <dt class="text-[rgb(var(--text-muted))] text-[0.68rem]
                             uppercase tracking-wider font-bold mb-1">
                    Price from
                  </dt>
                  <dd class="font-semibold text-leaf-600 dark:text-leaf-400
                             text-[0.92rem]">
                    {{ harvest.priceFrom }}
                  </dd>
                </div>
              </dl>
  
              <!-- Spacer -->
              <div class="flex-1" />
  
              <!-- CTAs -->
              <div class="space-y-2.5">
                <NuxtLink
                  :to="`/contact?type=buyer&product=${harvest.productSlug}&action=reserve&harvest=${harvest.slug}`"
                  class="btn w-full justify-center !py-3.5 !text-[0.9rem]
                         bg-leaf-500 text-white font-semibold
                         hover:bg-leaf-600 hover:-translate-y-0.5
                         shadow-[0_8px_20px_-8px_rgba(46,125,50,0.5)]"
                >
                  Reserve This Harvest
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.4"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </NuxtLink>
  
                <NuxtLink
                  :to="`/contact?type=buyer&product=${harvest.productSlug}&action=question&harvest=${harvest.slug}`"
                  class="btn w-full justify-center !py-3 !text-[0.85rem]
                         bg-[rgb(var(--bg-alt))]
                         border border-[rgb(var(--border)/0.12)]
                         text-[rgb(var(--text))] font-semibold
                         hover:border-leaf-500 hover:text-leaf-600
                         dark:hover:text-leaf-400"
                >
                  Ask a Question
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
  
        <!-- ============ BOTTOM STRIP ============ -->
        <div
          ref="bottomStripRef"
          class="mt-12 lg:mt-16 rounded-2xl p-6 lg:p-7
                 bg-[rgb(var(--surface))]
                 border border-[rgb(var(--border)/0.08)]
                 flex flex-col md:flex-row md:items-center justify-between gap-5"
        >
          <div class="flex items-start gap-4">
            <span
              class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                     bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
              v-html="bellIcon"
            />
            <div>
              <div class="font-display font-bold text-[rgb(var(--text))]
                          text-[1.05rem] leading-tight mb-1">
                Not ready to commit?
              </div>
              <p class="text-[rgb(var(--text-muted))] text-[0.9rem] leading-relaxed max-w-lg">
                Get notified 30 days before each harvest window opens — no
                obligation, no spam. Just early access to the best pricing.
              </p>
            </div>
          </div>
  
          <NuxtLink
            to="/contact?type=buyer&action=notify"
            class="btn !px-6 !py-3.5 shrink-0
                   bg-leaf-500 text-white font-semibold
                   hover:bg-leaf-600 hover:-translate-y-0.5
                   shadow-[0_8px_20px_-8px_rgba(46,125,50,0.5)]"
          >
            Get Harvest Alerts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.4"
                 stroke-linecap="round" stroke-linejoin="round">
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
  
  /* -------- Icons -------- */
  const icons = {
    palm: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M12 12C12 7 8 3 3 3c0 5 4 9 9 9z"/><path d="M12 12c0-5 4-9 9-9 0 5-4 9-9 9z"/></svg>`,
    cocoa: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="5" ry="10"/><path d="M12 2v20M7 8h10M7 12h10M7 16h10"/></svg>`,
    plantain: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10c4-6 12-6 16 0M6 14c4-5 12-5 16 0M8 18c4-4 12-4 16 0"/></svg>`,
  }
  
  const clockIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`
  
  const bellIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`
  
  /* -------- Upcoming harvests data -------- */
  interface Harvest {
    slug: string
    crop: string
    estate: string
    productSlug: string
    icon: string
    harvestMonth: string
    harvestDate: string
    available: string
    total: string
    reservedPercent: number
    reserveBy: string
    reserveByDate: string
    deposit: string
    priceFrom: string
    featured?: boolean
  }
  
  const daysFromNow = (days: number) => {
    const d = new Date()
    d.setDate(d.getDate() + days)
    return d.toISOString()
  }
  
  const formatDate = (iso: string) => {
    const d = new Date(iso)
    return d.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }
  
  const upcomingHarvests: Harvest[] = [
    {
      slug: 'cocoa-2026-q4',
      crop: 'Cocoa Beans',
      estate: 'Ikom Farm',
      productSlug: 'fermented-cocoa-beans',
      icon: icons.cocoa,
      harvestMonth: 'October 2026',
      harvestDate: daysFromNow(84),
      available: '180t',
      total: '320t',
      reservedPercent: 44,
      reserveBy: formatDate(daysFromNow(60)),
      reserveByDate: daysFromNow(60),
      deposit: '30%',
      priceFrom: '$3,200/t',
      featured: true,
    },
    {
      slug: 'plantain-2026-q4',
      crop: 'Fresh Plantain',
      estate: 'Abeokuta Belt',
      productSlug: 'fresh-plantain',
      icon: icons.plantain,
      harvestMonth: 'December 2026',
      harvestDate: daysFromNow(140),
      available: '240t',
      total: '420t',
      reservedPercent: 28,
      reserveBy: formatDate(daysFromNow(120)),
      reserveByDate: daysFromNow(120),
      deposit: '25%',
      priceFrom: '$340/t',
    },
    {
      slug: 'palm-2027-q1',
      crop: 'Palm Oil',
      estate: 'Okitipupa Estate',
      productSlug: 'crude-palm-oil',
      icon: icons.palm,
      harvestMonth: 'January 2027',
      harvestDate: daysFromNow(200),
      available: '520t',
      total: '820t',
      reservedPercent: 12,
      reserveBy: formatDate(daysFromNow(170)),
      reserveByDate: daysFromNow(170),
      deposit: '30%',
      priceFrom: '$1,050/t',
    },
  ]
  
  /* -------- Refs -------- */
  const sectionRef     = ref<HTMLElement | null>(null)
  const eyebrowRef     = ref<HTMLElement | null>(null)
  const headingRef     = ref<HTMLElement | null>(null)
  const descRef        = ref<HTMLElement | null>(null)
  const gridRef        = ref<HTMLElement | null>(null)
  const bottomStripRef = ref<HTMLElement | null>(null)
  
  /* ✅ NO ref arrays — using querySelectorAll in GSAP */
  
  /* ---------------------------------------------------------------
     COUNTDOWN — updates every minute
     --------------------------------------------------------------- */
  const now = ref(Date.now())
  let intervalId: ReturnType<typeof setInterval> | null = null
  
  onMounted(() => {
    intervalId = setInterval(() => {
      now.value = Date.now()
    }, 60000)
  })
  
  onBeforeUnmount(() => {
    if (intervalId) clearInterval(intervalId)
  })
  
  const countdownUnits = (iso: string) => {
    const target = new Date(iso).getTime()
    const diff = Math.max(0, target - now.value)
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)
  
    return [
      { label: 'Days', value: days },
      { label: 'Hrs',  value: hours },
      { label: 'Min',  value: minutes },
      { label: 'Sec',  value: seconds },
    ]
  }
  
  const daysUntil = (iso: string) => {
    const target = new Date(iso).getTime()
    const diff = Math.max(0, target - Date.now())
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }
  
  /* -------- Allocation helpers -------- */
  const allocationClass = (percent: number) =>
    percent >= 70
      ? 'bg-harvest-500/15 text-harvest-700 dark:text-harvest-400'
      : 'bg-leaf-500/15 text-leaf-700 dark:text-leaf-400'
  
  const allocationDotClass = (percent: number) =>
    percent >= 70 ? 'bg-harvest-500' : 'bg-leaf-500'
  
  const allocationBarClass = (percent: number) =>
    percent >= 70
      ? 'bg-gradient-to-r from-harvest-500 to-harvest-400'
      : 'bg-gradient-to-r from-leaf-500 to-leaf-400'
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    /* Query cards and bars once */
    const cards = sectionRef.value?.querySelectorAll<HTMLElement>('.harvest-card') ?? []
    const bars  = sectionRef.value?.querySelectorAll<HTMLElement>('.allocation-bar') ?? []
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         ...Array.from(cards), bottomStripRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0 }
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
  
      /* --- Cards stagger --- */
      if (cards.length) {
        gsap.from(cards, {
          y: 60, autoAlpha: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.value, start: 'top 80%' },
        })
      }
  
      /* --- Progress bars fill --- */
      if (bars.length) {
        bars.forEach((bar, i) => {
          gsap.from(bar, {
            width: 0, duration: 1.4, ease: 'power2.out', delay: i * 0.15,
            scrollTrigger: { trigger: bar, start: 'top 92%' },
          })
        })
      }
  
      /* --- Bottom strip --- */
      gsap.from(bottomStripRef.value, {
        y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: bottomStripRef.value, start: 'top 88%' },
      })
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>
  
  <style scoped>
  .harvest-card {
    will-change: transform;
  }
  </style>