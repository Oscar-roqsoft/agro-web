<template>
    <!-- ============ HEADER (stays on top) ============ -->
    <header
      ref="headerRef"
      class="fixed top-0 inset-x-0 z-[60] h-[76px] will-change-transform"
      :class="scrolled
        ? 'bg-[rgb(var(--nav-bg)/0.88)] backdrop-blur-md backdrop-saturate-150 shadow-soft border-b border-[rgb(var(--border)/0.08)]'
        : 'bg-[rgb(var(--nav-bg))] border-b border-transparent'"
    >
      <div class="container-page h-full flex items-center justify-between gap-6">
        <AppLogo />
  
        <nav class="hidden lg:flex items-center gap-1 flex-1 justify-center" aria-label="Main">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="nav-link"
            :class="{ active: isActive(link.to) }"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
  
        <div class="flex items-center gap-2.5 shrink-0">
          <ThemeToggle />
  
          <NuxtLink to="/contact" class="btn btn-primary hidden lg:inline-flex">
            Get a Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </NuxtLink>
  
          <button
            ref="burgerRef"
            type="button"
            class="lg:hidden relative w-[42px] h-[42px] rounded-lg
                   border border-[rgb(var(--border)/0.1)] overflow-hidden
                   active:scale-95 transition-transform duration-150 z-[70]"
            :aria-expanded="mobileOpen"
            aria-label="Toggle menu"
            @click="toggleMenu"
          >
            <span
              v-for="i in 3"
              :key="i"
              :ref="(el) => { if (el) burgerLines[i - 1] = el as HTMLElement }"
              class="absolute left-1/2 -translate-x-1/2 w-5 h-[2px] rounded bg-[rgb(var(--text))]"
              :style="{ top: ['14px', '20px', '26px'][i - 1] }"
            />
          </button>
        </div>
      </div>
    </header>
  
    <!-- ============ MOBILE OVERLAY (below navbar) ============ -->
    <div
      ref="overlayRef"
      class="fixed top-[76px] inset-x-0 bottom-0 bg-black/50 backdrop-blur-sm z-[45] lg:hidden invisible opacity-0"
      @click="closeMenu"
    />
  
    <!-- ============ MOBILE DRAWER (below navbar, under header z) ============ -->
    <aside
      ref="drawerRef"
      class="fixed top-[76px] right-0 h-[calc(100dvh-76px)] w-[min(340px,88vw)] z-[50] lg:hidden
             bg-[rgb(var(--bg))] border-l border-[rgb(var(--border)/0.1)]
             py-6 px-6 flex flex-col gap-1.5 overflow-y-auto
             will-change-transform invisible"
      aria-label="Mobile navigation"
    >
      <!-- Top accent -->
      <span
        class="absolute top-0 left-0 right-0 h-[3px]
               bg-gradient-to-r from-leaf-500 via-harvest-500 to-leaf-500"
        aria-hidden="true"
      />
  
      <NuxtLink
        v-for="(link, i) in links"
        :key="link.to"
        :ref="(el) => { if (el) linkRefs[i] = el as HTMLElement }"
        :to="link.to"
        class="nav-link text-[1.05rem] py-3.5"
        :class="{ active: isActive(link.to) }"
        @click="closeMenu"
      >
        {{ link.label }}
      </NuxtLink>
  
      <div
        ref="ctaRef"
        class="mt-5 pt-5 border-t border-[rgb(var(--border)/0.1)] flex flex-col gap-3"
      >
        <NuxtLink to="/contact" class="btn btn-primary justify-center py-3.5" @click="closeMenu">
          Get a Quote
        </NuxtLink>
        <a
          href="https://wa.me/0000000000"
          target="_blank"
          rel="noopener"
          class="btn justify-center py-3.5 border border-[rgb(var(--border)/0.15)] text-[rgb(var(--text))]"
        >
          WhatsApp Us
        </a>
      </div>
    </aside>
  </template>
  
<script setup lang="ts">
  import gsap from 'gsap'
  
  interface NavItem { label: string; to: string }
  
  const links: NavItem[] = [
    { label: 'Home',        to: '/' },
    { label: 'About',       to: '/about' },
    { label: 'Plantations', to: '/plantations' },
    // { label: 'Products',    to: '/products' },
    // { label: 'Invest',      to: '/invest' },
    { label: 'Contact',     to: '/contact' },
  ]
  
  const route = useRoute()
  const scrolled = ref(false)
  const mobileOpen = ref(false)
  
  /* Template refs */
  const headerRef  = ref<HTMLElement | null>(null)
  const overlayRef = ref<HTMLElement | null>(null)
  const drawerRef  = ref<HTMLElement | null>(null)
  const ctaRef     = ref<HTMLElement | null>(null)
  const burgerRef  = ref<HTMLElement | null>(null)
  const burgerLines: HTMLElement[] = []
  const linkRefs: HTMLElement[] = []
  
  /* Active open/close timelines (so we can kill if user re-clicks) */
  let openTl: gsap.core.Timeline | null = null
  let closeTl: gsap.core.Timeline | null = null
  let isAnimating = false
  
  const isActive = (to: string) =>
    to === '/' ? route.path === '/' : route.path.startsWith(to)
  
  /* ------------------------------------------------------------------
     STATE HELPERS
     ------------------------------------------------------------------ */
  const setClosedState = () => {
    if (drawerRef.value)  gsap.set(drawerRef.value,  { xPercent: 100, autoAlpha: 0 })
    if (overlayRef.value) gsap.set(overlayRef.value, { autoAlpha: 0 })
    const items = [...linkRefs, ctaRef.value].filter(Boolean) as HTMLElement[]
    if (items.length) gsap.set(items, { x: 40, autoAlpha: 0 })
  }
  
  const killAll = () => {
    openTl?.kill()
    closeTl?.kill()
    openTl = null
    closeTl = null
  }
  
  /* ------------------------------------------------------------------
     OPEN — dedicated timeline
     ------------------------------------------------------------------ */
  const openMenu = () => {
    mobileOpen.value = true
    document.body.style.overflow = 'hidden'
  
    killAll()
    setClosedState()
    animateBurger(true)
  
    openTl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => { isAnimating = false },
    })
  
    openTl
      .to(overlayRef.value, {
        autoAlpha: 1, duration: 0.3, ease: 'power2.out',
      })
      .to(drawerRef.value, {
        xPercent: 0, autoAlpha: 1, duration: 0.5, ease: 'expo.out',
      }, '<0.05')
      .to([...linkRefs], {
        x: 0, autoAlpha: 1, duration: 0.4, stagger: 0.05, ease: 'power3.out',
      }, '-=0.3')
      .to(ctaRef.value, {
        x: 0, autoAlpha: 1, duration: 0.35,
      }, '-=0.2')
  
    isAnimating = true
  }
  
  /* ------------------------------------------------------------------
     CLOSE — dedicated timeline, never reversed
     ------------------------------------------------------------------ */
  const closeMenu = () => {
    mobileOpen.value = false
    document.body.style.overflow = ''
  
    killAll()
    animateBurger(false)
  
    closeTl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        isAnimating = false
        setClosedState() // fully reset for next open
      },
    })
  
    closeTl
      // Links fade out fast (reverse stagger = from bottom up)
      .to([...linkRefs, ctaRef.value].filter(Boolean), {
        x: 24, autoAlpha: 0, duration: 0.2, stagger: 0.03, ease: 'power2.in',
      })
      // Drawer slides out — smooth, no lag
      .to(drawerRef.value, {
        xPercent: 100, autoAlpha: 1, duration: 0.4, ease: 'power3.inOut',
      }, '-=0.05')
      // Overlay fades out in parallel with drawer end
      .to(overlayRef.value, {
        autoAlpha: 0, duration: 0.35, ease: 'power2.in',
      }, '<0.05')
  
    isAnimating = true
  }
  
  const toggleMenu = () => {
    // No isAnimating guard — kill + restart is faster & feels responsive
    if (mobileOpen.value) closeMenu()
    else openMenu()
  }
  
  /* ------------------------------------------------------------------
     HAMBURGER → X
     ------------------------------------------------------------------ */
  const animateBurger = (open: boolean) => {
    const [l1, l2, l3] = burgerLines
    if (!l1) return
    const ease = 'power2.inOut'
  
    if (open) {
      gsap.to(l1, { top: 20, rotate: 45,  duration: 0.35, ease })
      gsap.to(l2, { autoAlpha: 0, scaleX: 0, duration: 0.2, ease })
      gsap.to(l3, { top: 20, rotate: -45, duration: 0.35, ease })
    } else {
      gsap.to(l1, { top: 14, rotate: 0, duration: 0.35, ease })
      gsap.to(l2, { autoAlpha: 1, scaleX: 1, duration: 0.25, ease, delay: 0.1 })
      gsap.to(l3, { top: 26, rotate: 0, duration: 0.35, ease })
    }
  }
  
  /* ------------------------------------------------------------------
     LIFECYCLE
     ------------------------------------------------------------------ */
  const onScroll = () => (scrolled.value = window.scrollY > 12)
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && mobileOpen.value) closeMenu()
  }
  
  onMounted(async () => {
    await nextTick()
    setClosedState()
  
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('keydown', onKey)
    onScroll()
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('keydown', onKey)
    killAll()
    document.body.style.overflow = ''
  })
  
  watch(() => route.path, () => {
    if (mobileOpen.value) closeMenu()
  })

</script>