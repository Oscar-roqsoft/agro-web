<template>
    <section
      id="calendar"
      ref="sectionRef"
      class="relative py-24 lg:py-32 bg-[rgb(var(--bg-alt))] overflow-hidden scroll-mt-24"
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
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 lg:mb-16 items-end">
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
              Full Calendar
            </div>
  
            <h2
              ref="headingRef"
              class="font-display font-extrabold
                     text-[clamp(1.75rem,4vw,3rem)] leading-[1.1]
                     tracking-[-0.025em] text-[rgb(var(--text))]"
            >
              Every crop, every month,<br />
              <span class="text-leaf-500">at a glance.</span>
            </h2>
          </div>
  
          <div ref="descRef" class="lg:col-span-5 lg:pb-2">
            <p class="text-[rgb(var(--text-muted))] text-[1.02rem] leading-relaxed mb-5">
              Peak months are the ideal time to place orders — that's when supply
              is highest and pricing is most competitive. Growing months mean
              we're still farming; off-season means no availability for that crop.
            </p>
  
            <!-- Legend -->
            <div class="flex flex-wrap items-center gap-x-5 gap-y-2.5
                        text-[0.82rem] font-medium">
              <div
                v-for="item in legendItems"
                :key="item.label"
                class="flex items-center gap-2"
              >
                <span
                  class="w-3.5 h-3.5 rounded"
                  :class="item.color"
                />
                <span class="text-[rgb(var(--text))]">{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ CALENDAR GRID ============ -->
        <div
          ref="gridWrapRef"
          class="rounded-2xl overflow-hidden
                 bg-[rgb(var(--surface))]
                 border border-[rgb(var(--border)/0.08)]"
        >
          <!-- Horizontal scroll container (mobile) -->
          <div class="overflow-x-auto
                      [-ms-overflow-style:none] [scrollbar-width:none]
                      [&::-webkit-scrollbar]:hidden">
  
            <div class="min-w-[820px] lg:min-w-0">
  
              <!-- ========== MONTH HEADER ROW ========== -->
              <div class="grid grid-cols-[140px_repeat(12,1fr)] border-b border-[rgb(var(--border)/0.1)]">
                <!-- Crop column label -->
                <div class="p-4 lg:p-5
                            bg-[rgb(var(--bg-alt))]
                            text-[0.72rem] uppercase tracking-wider
                            font-bold text-[rgb(var(--text-muted))]">
                  Crop
                </div>
  
                <!-- 12 month labels -->
                <div
                  v-for="(month, i) in months"
                  :key="month"
                  class="p-3 lg:p-4 text-center
                         transition-colors duration-300"
                  :class="i === currentMonthIndex
                    ? 'bg-leaf-500/10'
                    : 'bg-[rgb(var(--bg-alt))]'"
                >
                  <div
                    class="text-[0.72rem] lg:text-[0.78rem] font-bold uppercase tracking-wider
                           transition-colors duration-300"
                    :class="i === currentMonthIndex
                      ? 'text-leaf-600 dark:text-leaf-400'
                      : 'text-[rgb(var(--text-muted))]'"
                  >
                    {{ month }}
                  </div>
                  <div
                    v-if="i === currentMonthIndex"
                    class="mt-1 inline-flex items-center gap-1
                           px-1.5 py-0.5 rounded-full
                           bg-leaf-500 text-white
                           text-[0.58rem] font-extrabold tracking-wider uppercase"
                  >
                    Now
                  </div>
                </div>
              </div>
  
              <!-- ========== CROP ROWS ========== -->
              <div>
                <div
                  v-for="(crop, cropIndex) in harvestMatrix"
                  :key="crop.name"
                  class="crop-row grid grid-cols-[140px_repeat(12,1fr)]
                         transition-colors duration-200"
                  :class="cropIndex < harvestMatrix.length - 1
                    ? 'border-b border-[rgb(var(--border)/0.06)]'
                    : ''"
                >
                  <!-- Crop label (sticky on mobile) -->
                  <div
                    class="p-4 lg:p-5
                           bg-[rgb(var(--surface))]
                           sticky left-0 z-10
                           border-r border-[rgb(var(--border)/0.08)]"
                  >
                    <div class="flex items-center gap-2.5">
                      <span
                        class="grid place-items-center w-8 h-8 rounded-lg shrink-0
                               bg-leaf-500/10 text-leaf-600 dark:text-leaf-400"
                        v-html="crop.icon"
                      />
                      <div class="min-w-0">
                        <div class="font-semibold text-[rgb(var(--text))]
                                    text-[0.88rem] leading-tight truncate">
                          {{ crop.name }}
                        </div>
                        <div class="text-[rgb(var(--text-muted))] text-[0.7rem]
                                    leading-tight truncate">
                          {{ crop.estate }}
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <!-- 12 month cells -->
                  <div
                    v-for="(month, mIndex) in months"
                    :key="month"
                    class="cell-wrapper relative p-1.5 lg:p-2
                           transition-colors duration-200
                           hover:bg-[rgb(var(--bg)/0.5)]"
                    :class="mIndex === currentMonthIndex
                      ? 'bg-leaf-500/5'
                      : ''"
                  >
                    <div
                      class="harvest-cell w-full h-11 lg:h-12 rounded-md
                             flex items-center justify-center
                             transition-all duration-300 cursor-default
                             hover:scale-105"
                      :class="[
                        cellColor(crop.months[mIndex]),
                        mIndex === currentMonthIndex
                          ? 'ring-1 ring-leaf-500/40'
                          : '',
                      ]"
                      @mouseenter="showTooltip($event, crop, mIndex)"
                      @mouseleave="hideTooltip"
                    >
                      <span
                        v-if="crop.months[mIndex] === 'peak'"
                        class="text-[0.68rem] font-extrabold uppercase tracking-wider
                               text-white"
                      >
                        Peak
                      </span>
                      <span
                        v-else-if="crop.months[mIndex] === 'growing'"
                        class="w-2 h-2 rounded-full bg-leaf-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- ========== FOOTER / MOBILE HINT ========== -->
          <div class="px-4 lg:px-6 py-4
                      bg-[rgb(var(--bg-alt))]
                      border-t border-[rgb(var(--border)/0.08)]
                      flex items-center justify-between gap-4">
            <div class="flex items-center gap-2
                        text-[0.78rem] text-[rgb(var(--text-muted))]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
              <span class="hidden sm:inline">
                Hover over any cell to see the estate and expected volume.
              </span>
              <span class="sm:hidden">
                Swipe horizontally to see all months.
              </span>
            </div>
  
            <button
              type="button"
              class="hidden sm:inline-flex items-center gap-1.5
                     text-leaf-600 dark:text-leaf-400
                     font-semibold text-[0.82rem]
                     hover:gap-2.5 transition-all duration-200"
              @click="downloadCalendar"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2.2"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <path d="M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download PDF
            </button>
          </div>
        </div>
  
        <!-- ============ BOTTOM HIGHLIGHTS ============ -->
        <div
          ref="highlightsRef"
          class="mt-12 lg:mt-16
                 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          <div
            v-for="highlight in highlights"
            :key="highlight.label"
            class="flex items-start gap-4 p-5 rounded-2xl
                   bg-[rgb(var(--surface))]
                   border border-[rgb(var(--border)/0.08)]
                   transition-all duration-500
                   hover:border-leaf-500/25
                   hover:-translate-y-0.5"
          >
            <span
              class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                     bg-harvest-500/10 text-harvest-600 dark:text-harvest-400"
              v-html="highlight.icon"
            />
            <div>
              <div class="font-semibold text-[rgb(var(--text))]
                          text-[0.92rem] leading-tight mb-1">
                {{ highlight.label }}
              </div>
              <div class="text-[rgb(var(--text-muted))] text-[0.84rem]
                          leading-snug">
                {{ highlight.description }}
              </div>
            </div>
          </div>
        </div>
  
      </div>
  
      <!-- ============ FLOATING TOOLTIP ============ -->
      <Teleport to="body">
        <div
          v-if="tooltip.visible"
          class="fixed z-[100] pointer-events-none
                 rounded-xl p-3.5 min-w-[200px]
                 bg-[rgb(var(--text))] text-[rgb(var(--bg))]
                 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)]
                 transition-opacity duration-150"
          :style="{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
          }"
        >
          <div class="text-[0.68rem] uppercase tracking-wider
                      font-bold opacity-60 mb-2">
            {{ tooltip.month }}
          </div>
          <div class="font-display font-bold text-[0.95rem]
                      leading-tight mb-2">
            {{ tooltip.crop }}
          </div>
          <div class="space-y-1.5 text-[0.78rem]">
            <div class="flex items-center justify-between gap-3">
              <span class="opacity-70">Estate</span>
              <span class="font-medium">{{ tooltip.estate }}</span>
            </div>
            <div class="flex items-center justify-between gap-3">
              <span class="opacity-70">Status</span>
              <span
                class="font-semibold capitalize"
                :class="tooltip.status === 'peak'
                  ? 'text-harvest-400'
                  : 'text-leaf-400'"
              >
                {{ tooltip.status }}
              </span>
            </div>
            <div
              v-if="tooltip.volume"
              class="flex items-center justify-between gap-3"
            >
              <span class="opacity-70">Est. volume</span>
              <span class="font-medium">{{ tooltip.volume }}</span>
            </div>
          </div>
        </div>
      </Teleport>
    </section>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  /* -------- Icons -------- */
  const icons = {
    palm: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M12 12C12 7 8 3 3 3c0 5 4 9 9 9z"/><path d="M12 12c0-5 4-9 9-9 0 5-4 9-9 9z"/></svg>`,
    cocoa: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="5" ry="10"/><path d="M12 2v20M7 8h10M7 12h10M7 16h10"/></svg>`,
    plantain: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10c4-6 12-6 16 0M6 14c4-5 12-5 16 0M8 18c4-4 12-4 16 0"/></svg>`,
    rubber: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6M12 22v-6M8 8h8M8 16h8"/><circle cx="12" cy="12" r="4"/></svg>`,
    cassava: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M8 6l4 4 4-4M8 14l4 4 4-4"/></svg>`,
    vegetables: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    maize: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c4 4 4 16 0 20M12 2c-4 4-4 16 0 20M8 6c3 1 5 3 5 6M16 6c-3 1-5 3-5 6"/></svg>`,
  }
  
  const highlightIcons = {
    trend: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    bell: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  }
  
  /* -------- Months -------- */
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
  const currentMonthIndex = computed(() => new Date().getMonth())
  
  /* -------- Legend items -------- */
  const legendItems = [
    { label: 'Peak harvest',  color: 'bg-leaf-500' },
    { label: 'Growing',       color: 'bg-leaf-500/30' },
    { label: 'Off-season',    color: 'bg-[rgb(var(--border)/0.2)]' },
  ]
  
  /* -------- Harvest matrix -------- */
  interface CropRow {
    name: string
    estate: string
    icon: string
    months: ('peak' | 'growing' | 'off')[]
    volumes: Record<number, string>
  }
  
  const harvestMatrix: CropRow[] = [
    {
      name: 'Palm Oil',
      estate: 'Okitipupa Estate',
      icon: icons.palm,
      months: ['peak','peak','peak','peak','peak','peak','peak','peak','peak','peak','peak','peak'],
      volumes: { 0: '320t', 3: '340t', 6: '310t', 9: '350t' },
    },
    {
      name: 'Palm Kernel',
      estate: 'Okitipupa Estate',
      icon: icons.palm,
      months: ['peak','peak','peak','peak','peak','peak','peak','peak','peak','peak','peak','peak'],
      volumes: { 0: '48t', 3: '52t', 6: '46t', 9: '54t' },
    },
    {
      name: 'Cocoa Beans',
      estate: 'Ikom Farm',
      icon: icons.cocoa,
      months: ['off','off','off','off','off','off','growing','growing','peak','peak','peak','growing'],
      volumes: { 9: '180t', 10: '210t', 11: '140t' },
    },
    {
      name: 'Plantain',
      estate: 'Abeokuta Belt',
      icon: icons.plantain,
      months: ['growing','growing','growing','growing','peak','peak','peak','peak','growing','growing','growing','growing'],
      volumes: { 4: '280t', 5: '320t', 6: '290t', 7: '260t' },
    },
    {
      name: 'Rubber',
      estate: 'Uyo Estate',
      icon: icons.rubber,
      months: ['off','off','growing','growing','growing','growing','growing','growing','growing','growing','off','off'],
      volumes: { 6: '—', 7: '—', 8: '—' },
    },
    {
      name: 'Cassava',
      estate: 'Badagry Fields',
      icon: icons.cassava,
      months: ['peak','peak','growing','growing','growing','growing','growing','growing','growing','growing','peak','peak'],
      volumes: { 0: '120t', 11: '140t' },
    },
    {
      name: 'Vegetables',
      estate: 'Epe Mixed Farm',
      icon: icons.vegetables,
      months: ['peak','peak','peak','peak','growing','off','off','off','growing','peak','peak','peak'],
      volumes: { 0: '65t', 3: '70t', 9: '72t' },
    },
    {
      name: 'Maize',
      estate: 'Epe Mixed Farm',
      icon: icons.maize,
      months: ['off','off','off','growing','growing','growing','peak','peak','peak','growing','off','off'],
      volumes: { 6: '95t', 7: '110t', 8: '88t' },
    },
  ]
  
  /* -------- Cell color helper -------- */
  const cellColor = (status: string) => {
    switch (status) {
      case 'peak':
        return 'bg-leaf-500 shadow-[inset_0_-2px_0_rgba(0,0,0,0.1)]'
      case 'growing':
        return 'bg-leaf-500/25'
      default:
        return 'bg-[rgb(var(--border)/0.08)]'
    }
  }
  
  /* -------- Highlights -------- */
  const highlights = [
    {
      label: 'Palm harvests year-round',
      description: 'Our Okitipupa estate produces continuously — no seasonal gap in supply.',
      icon: highlightIcons.trend,
    },
    {
      label: 'Cocoa peaks in Q4',
      description: 'October–December is the ideal window for cocoa bean sourcing.',
      icon: highlightIcons.globe,
    },
    {
      label: 'Set volume alerts',
      description: 'Get notified 60 days before any crop enters peak harvest.',
      icon: highlightIcons.bell,
    },
  ]
  
  /* -------- Tooltip state -------- */
  const tooltip = reactive({
    visible: false,
    x: 0,
    y: 0,
    month: '',
    crop: '',
    estate: '',
    status: '',
    volume: '',
  })
  
  const showTooltip = (event: MouseEvent, crop: CropRow, monthIndex: number) => {
    const target = event.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const status = crop.months[monthIndex]
  
    tooltip.visible = true
    tooltip.x = rect.left + rect.width / 2 - 100
    tooltip.y = rect.top - 150
    tooltip.month = months[monthIndex]
    tooltip.crop = crop.name
    tooltip.estate = crop.estate
    tooltip.status = status
    tooltip.volume = crop.volumes[monthIndex] || ''
  
    if (tooltip.x < 12) tooltip.x = 12
    if (tooltip.x + 200 > window.innerWidth - 12) {
      tooltip.x = window.innerWidth - 212
    }
  }
  
  const hideTooltip = () => {
    tooltip.visible = false
  }
  
  /* -------- Download calendar -------- */
  const downloadCalendar = () => {
    window.open('/pdfs/harvest-calendar.pdf', '_blank')
  }
  
  /* -------- Refs -------- */
  const sectionRef      = ref<HTMLElement | null>(null)
  const eyebrowRef      = ref<HTMLElement | null>(null)
  const headingRef      = ref<HTMLElement | null>(null)
  const descRef         = ref<HTMLElement | null>(null)
  const gridWrapRef     = ref<HTMLElement | null>(null)
  const highlightsRef   = ref<HTMLElement | null>(null)
  
  /* ✅ NO ref arrays — using querySelectorAll in GSAP */
  
  /* ---------------------------------------------------------------
     GSAP
     --------------------------------------------------------------- */
  let ctx: gsap.Context | null = null
  
  onMounted(async () => {
    await nextTick()
  
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
    /* Query rows and cells once */
    const rows  = sectionRef.value?.querySelectorAll<HTMLElement>('.crop-row') ?? []
    const cells = sectionRef.value?.querySelectorAll<HTMLElement>('.harvest-cell') ?? []
  
    if (prefersReduced) {
      gsap.set(
        [eyebrowRef.value, headingRef.value, descRef.value,
         gridWrapRef.value, highlightsRef.value].filter(Boolean),
        { autoAlpha: 1, y: 0, x: 0 }
      )
      gsap.set(cells, { autoAlpha: 1, scale: 1 })
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
  
      /* --- Grid wrapper entrance --- */
      gsap.from(gridWrapRef.value, {
        y: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: gridWrapRef.value, start: 'top 82%' },
      })
  
      /* --- Crop rows cascade --- */
      if (rows.length) {
        gsap.from(rows, {
          x: -20, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: gridWrapRef.value, start: 'top 78%' },
        })
      }
  
      /* --- Cells pop in --- */
      if (cells.length) {
        gsap.from(cells, {
          scale: 0.5, autoAlpha: 0, duration: 0.4, stagger: 0.006, ease: 'back.out(2)',
          scrollTrigger: { trigger: gridWrapRef.value, start: 'top 78%' },
        })
      }
  
      /* --- Highlights --- */
      if (highlightsRef.value) {
        gsap.from(highlightsRef.value.children, {
          y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: highlightsRef.value, start: 'top 88%' },
        })
      }
    }, sectionRef.value!)
  })
  
  onBeforeUnmount(() => ctx?.revert())
  </script>
  
  <style scoped>
  .crop-row:hover {
    background: rgb(var(--bg) / 0.5);
  }
  
  .harvest-cell {
    will-change: transform;
  }
  </style>