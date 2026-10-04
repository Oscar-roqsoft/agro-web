<template>
    <section
      id="contact-form-section"
      ref="sectionRef"
      class="relative py-20 lg:py-28 bg-[rgb(var(--bg))]"
    >
      <div class="container-page">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
  
          <!-- ============ LEFT: FORM ============ -->
          <div class="lg:col-span-7">
            <div class="mb-8">
              <div
                class="text-[rgb(var(--text-muted))] text-[0.78rem]
                       uppercase tracking-[0.2em] font-semibold mb-3"
              >
                Step 2 of 2
              </div>
              <h2
                class="font-display font-extrabold
                       text-[clamp(1.5rem,3vw,2.25rem)] leading-tight
                       tracking-[-0.025em] text-[rgb(var(--text))] mb-3"
              >
                Tell us about your enquiry.
              </h2>
              <p class="text-[rgb(var(--text-muted))] text-[0.98rem] leading-relaxed">
                Fill in what you can — the more detail, the faster we can help.
              </p>
            </div>
  
            <form
              @submit.prevent="submit"
              class="space-y-5
                     p-6 lg:p-8
                     rounded-2xl
                     bg-[rgb(var(--surface))]
                     border border-[rgb(var(--border)/0.08)]"
            >
              <!-- Selected intent (auto) -->
              <div
                v-if="selectedIntent"
                class="flex items-center gap-3
                       px-4 py-3 rounded-xl
                       bg-leaf-500/8 border border-leaf-500/20 mb-2"
              >
                <span
                  class="grid place-items-center w-7 h-7 rounded-lg
                         bg-leaf-500 text-white text-[0.7rem] font-bold"
                >
                  ✓
                </span>
                <div class="flex-1">
                  <div class="text-[0.72rem] uppercase tracking-wider
                              font-bold text-leaf-600 dark:text-leaf-400">
                    Enquiry Type
                  </div>
                  <div class="text-[rgb(var(--text))] font-semibold text-[0.92rem]">
                    {{ selectedIntent.title }}
                  </div>
                </div>
                <button
                  type="button"
                  class="text-[rgb(var(--text-muted))] hover:text-leaf-600
                         text-[0.8rem] font-semibold underline"
                  @click="changeIntent"
                >
                  Change
                </button>
              </div>
  
              <!-- Row: Name + Email -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name" required>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    class="field-input"
                  />
                </Field>
  
                <Field label="Email Address" required>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    class="field-input"
                  />
                </Field>
              </div>
  
              <!-- Row: Phone + Company -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Phone / WhatsApp">
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    class="field-input"
                  />
                </Field>
  
                <Field label="Company / Organization">
                  <input
                    v-model="form.company"
                    type="text"
                    placeholder="Optional"
                    class="field-input"
                  />
                </Field>
              </div>
  
              <!-- Conditional: Buyer -->
              <template v-if="contactForm.intent === 'buyer'">
                <Field label="Crop of Interest" required>
                  <select v-model="form.crop" required class="field-input">
                    <option value="">Select a crop…</option>
                    <option value="palm">Palm Oil / Palm Kernel</option>
                    <option value="cocoa">Cocoa</option>
                    <option value="plantain">Plantain</option>
                    <option value="rubber">Rubber</option>
                    <option value="mixed">Multiple / Mixed</option>
                  </select>
                </Field>
  
                <Field label="Estimated Monthly Volume">
                  <select v-model="form.volume" class="field-input">
                    <option value="">Select range…</option>
                    <option value="under-10">Under 10 tonnes</option>
                    <option value="10-50">10–50 tonnes</option>
                    <option value="50-200">50–200 tonnes</option>
                    <option value="200+">200+ tonnes / container</option>
                  </select>
                </Field>
              </template>
  
              <!-- Conditional: Investor -->
              <template v-if="contactForm.intent === 'investor'">
                <Field label="Investment Range" required>
                  <select v-model="form.investRange" required class="field-input">
                    <option value="">Select range…</option>
                    <option value="5k-25k">$5K – $25K (Seedling)</option>
                    <option value="25k-100k">$25K – $100K (Growth)</option>
                    <option value="100k+">$100K+ (Estate)</option>
                    <option value="250k+">$250K+ (Enterprise)</option>
                  </select>
                </Field>
  
                <Field label="Preferred Contact Method">
                  <div class="flex flex-wrap gap-2.5 pt-1">
                    <label
                      v-for="method in ['Email', 'Phone', 'WhatsApp', 'Video Call']"
                      :key="method"
                      class="cursor-pointer"
                    >
                      <input
                        v-model="form.contactMethod"
                        type="radio"
                        :value="method"
                        class="peer sr-only"
                      />
                      <span
                        class="block px-3.5 py-2 rounded-lg text-[0.85rem] font-medium
                               border transition-all duration-200
                               bg-[rgb(var(--bg))]
                               border-[rgb(var(--border)/0.15)]
                               text-[rgb(var(--text))]
                               peer-checked:bg-leaf-500
                               peer-checked:text-white
                               peer-checked:border-leaf-500"
                      >
                        {{ method }}
                      </span>
                    </label>
                  </div>
                </Field>
              </template>
  
              <!-- Message -->
              <Field label="Message" required>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  :placeholder="messagePlaceholder"
                  class="field-input resize-none"
                />
              </Field>
  
              <!-- Consent -->
              <label class="flex items-start gap-3 cursor-pointer">
                <input
                  v-model="form.consent"
                  type="checkbox"
                  required
                  class="mt-0.5 w-4 h-4 rounded
                         border-[rgb(var(--border)/0.3)]
                         text-leaf-500
                         focus:ring-2 focus:ring-leaf-500/30
                         accent-[rgb(46,125,50)]"
                />
                <span class="text-[0.85rem] text-[rgb(var(--text-muted))] leading-relaxed">
                  I agree to the
                  <NuxtLink to="/legal/privacy" class="text-leaf-600 dark:text-leaf-400 underline decoration-dotted">
                    privacy policy
                  </NuxtLink>
                  and consent to being contacted about my enquiry.
                </span>
              </label>
  
              <!-- Submit -->
              <div class="pt-2">
                <button
                  type="submit"
                  :disabled="submitting || submitted"
                  class="btn w-full !py-4
                         bg-leaf-500 text-white font-semibold
                         hover:bg-leaf-600 hover:-translate-y-0.5
                         shadow-[0_10px_28px_-10px_rgba(46,125,50,0.5)]
                         disabled:opacity-70 disabled:cursor-not-allowed
                         disabled:hover:translate-y-0"
                >
                  <template v-if="submitting">
                    <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25"/>
                      <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    Sending…
                  </template>
                  <template v-else-if="submitted">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    Sent Successfully
                  </template>
                  <template v-else>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </template>
                </button>
  
                <!-- Success message -->
                <div
                  v-if="submitted"
                  class="mt-5 flex items-start gap-3
                         p-4 rounded-xl
                         bg-leaf-500/10 border border-leaf-500/25"
                >
                  <span
                    class="shrink-0 grid place-items-center w-9 h-9 rounded-full
                           bg-leaf-500 text-white"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </span>
                  <div>
                    <div class="font-semibold text-[rgb(var(--text))] text-[0.95rem] mb-1">
                      Thank you — we've received your message.
                    </div>
                    <div class="text-[rgb(var(--text-muted))] text-[0.85rem] leading-relaxed">
                      Our team will reply to <strong>{{ form.email }}</strong>
                      within 24 hours. Check your inbox (and spam folder).
                    </div>
                  </div>
                </div>
  
                <!-- Error -->
                <div
                  v-if="error"
                  class="mt-5 p-4 rounded-xl
                         bg-red-500/10 border border-red-500/25
                         text-red-600 dark:text-red-400 text-[0.88rem]"
                >
                  {{ error }}
                </div>
              </div>
            </form>
          </div>
  
          <!-- ============ RIGHT: SIDEBAR ============ -->
          <aside class="lg:col-span-5">
            <div class="lg:sticky lg:top-28 space-y-5">
  
              <!-- Contact details card -->
              <div
                class="rounded-2xl p-6 lg:p-7
                       bg-[rgb(var(--surface))]
                       border border-[rgb(var(--border)/0.08)]"
              >
                <div
                  class="text-[rgb(var(--text-muted))] text-[0.72rem]
                         uppercase tracking-wider font-bold mb-5"
                >
                  Direct Lines
                </div>
  
                <div class="space-y-5">
                  <a
                    href="tel:+2340000000000"
                    class="flex items-start gap-3.5 group"
                  >
                    <span
                      class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                             bg-leaf-500/10 text-leaf-600 dark:text-leaf-400
                             group-hover:bg-leaf-500 group-hover:text-white
                             transition-all duration-300"
                      v-html="icons.phone"
                    />
                    <div>
                      <div class="text-[0.78rem] uppercase tracking-wider
                                  font-semibold text-[rgb(var(--text-muted))] mb-0.5">
                        Call Us
                      </div>
                      <div class="font-semibold text-[rgb(var(--text))] text-[0.98rem]">
                        +234 000 000 0000
                      </div>
                      <div class="text-[rgb(var(--text-muted))] text-[0.82rem] mt-0.5">
                        Mon–Fri, 8am–6pm WAT
                      </div>
                    </div>
                  </a>
  
                  <a
                    href="mailto:hello@greenfieldagri.com"
                    class="flex items-start gap-3.5 group"
                  >
                    <span
                      class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                             bg-leaf-500/10 text-leaf-600 dark:text-leaf-400
                             group-hover:bg-leaf-500 group-hover:text-white
                             transition-all duration-300"
                      v-html="icons.mail"
                    />
                    <div>
                      <div class="text-[0.78rem] uppercase tracking-wider
                                  font-semibold text-[rgb(var(--text-muted))] mb-0.5">
                        Email Us
                      </div>
                      <div class="font-semibold text-[rgb(var(--text))] text-[0.98rem]">
                        hello@greenfieldagri.com
                      </div>
                      <div class="text-[rgb(var(--text-muted))] text-[0.82rem] mt-0.5">
                        Reply within 24 hours
                      </div>
                    </div>
                  </a>
  
                  <a
                    href="https://wa.me/0000000000"
                    target="_blank"
                    rel="noopener"
                    class="flex items-start gap-3.5 group"
                  >
                    <span
                      class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                             bg-green-500/10 text-green-600 dark:text-green-400
                             group-hover:bg-green-500 group-hover:text-white
                             transition-all duration-300"
                      v-html="icons.whatsapp"
                    />
                    <div>
                      <div class="text-[0.78rem] uppercase tracking-wider
                                  font-semibold text-[rgb(var(--text-muted))] mb-0.5">
                        WhatsApp
                      </div>
                      <div class="font-semibold text-[rgb(var(--text))] text-[0.98rem]">
                        Chat instantly
                      </div>
                      <div class="text-[rgb(var(--text-muted))] text-[0.82rem] mt-0.5">
                        Fastest response — usually under 1h
                      </div>
                    </div>
                  </a>
  
                  <div class="flex items-start gap-3.5">
                    <span
                      class="shrink-0 grid place-items-center w-11 h-11 rounded-xl
                             bg-harvest-500/10 text-harvest-600 dark:text-harvest-400"
                      v-html="icons.pin"
                    />
                    <div>
                      <div class="text-[0.78rem] uppercase tracking-wider
                                  font-semibold text-[rgb(var(--text-muted))] mb-0.5">
                        Head Office
                      </div>
                      <div class="font-semibold text-[rgb(var(--text))] text-[0.98rem] leading-snug">
                        12 Estate Road, Victoria Island
                      </div>
                      <div class="text-[rgb(var(--text-muted))] text-[0.82rem] mt-0.5">
                        Lagos, Nigeria
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Response promise card -->
              <div
                class="rounded-2xl p-6
                       bg-gradient-to-br from-leaf-500/8 to-harvest-500/8
                       border border-leaf-500/20"
              >
                <div class="flex items-center gap-3 mb-4">
                  <span
                    class="grid place-items-center w-10 h-10 rounded-xl
                           bg-leaf-500 text-white"
                    v-html="icons.clock"
                  />
                  <div>
                    <div class="font-display font-bold
                                text-[rgb(var(--text))] text-[1rem] leading-tight">
                      Our response promise
                    </div>
                    <div class="text-[rgb(var(--text-muted))] text-[0.78rem]">
                      Every enquiry, every time
                    </div>
                  </div>
                </div>
  
                <ul class="space-y-2.5 text-[0.88rem]">
                  <li
                    v-for="promise in promises"
                    :key="promise.label"
                    class="flex items-center justify-between gap-3
                           text-[rgb(var(--text))]"
                  >
                    <span>{{ promise.label }}</span>
                    <span
                      class="text-leaf-600 dark:text-leaf-400
                             font-semibold text-[0.82rem] whitespace-nowrap"
                    >
                      {{ promise.time }}
                    </span>
                  </li>
                </ul>
              </div>
  
              <!-- WhatsApp big CTA -->
              <a
                href="https://wa.me/0000000000"
                target="_blank"
                rel="noopener"
                class="block rounded-2xl p-6
                       bg-gradient-to-br from-[#25D366] to-[#128C7E]
                       text-white
                       relative overflow-hidden
                       hover:-translate-y-0.5
                       shadow-[0_15px_35px_-12px_rgba(37,211,102,0.55)]
                       transition-all duration-300"
              >
                <div class="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-white/10" />
                <div class="absolute -right-2 top-16 w-16 h-16 rounded-full bg-white/10" />
  
                <div class="relative z-10 flex items-center gap-4">
                  <span
                    class="shrink-0 grid place-items-center w-12 h-12 rounded-xl
                           bg-white/20 backdrop-blur-md"
                    v-html="icons.whatsappLg"
                  />
                  <div>
                    <div class="font-display font-bold text-[1.05rem] leading-tight mb-0.5">
                      Prefer WhatsApp?
                    </div>
                    <div class="text-white/85 text-[0.85rem] leading-snug">
                      Get a reply in under an hour during business hours.
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  /* -------- Small field wrapper -------- */
  const Field = defineComponent({
    props: { label: { type: String, required: true }, required: { type: Boolean, default: false } },
    setup(props, { slots }) {
      return () => h('div', [
        h('label', { class: 'block mb-2' }, [
          h('span', { class: 'text-[0.82rem] font-semibold text-[rgb(var(--text))]' }, props.label),
          props.required ? h('span', { class: 'text-harvest-500 ml-1' }, '*') : null,
        ]),
        slots.default?.(),
      ])
    },
  })
  
  /* -------- Icons -------- */
  const icons = {
    phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>`,
    mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m2 7 10 7 10-7"/></svg>`,
    whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.83-1.32l-.35-.2-3.6.94.96-3.5-.23-.36a9.5 9.5 0 1 1 8.06 4.44zm8.07-17.55A11.4 11.4 0 0 0 12.04.5 11.5 11.5 0 0 0 2.1 17.85L.5 23.5l5.8-1.52a11.5 11.5 0 0 0 5.74 1.52h.01a11.5 11.5 0 0 0 8.06-19.55z"/></svg>`,
    whatsappLg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.83-1.32l-.35-.2-3.6.94.96-3.5-.23-.36a9.5 9.5 0 1 1 8.06 4.44zm8.07-17.55A11.4 11.4 0 0 0 12.04.5 11.5 11.5 0 0 0 2.1 17.85L.5 23.5l5.8-1.52a11.5 11.5 0 0 0 5.74 1.52h.01a11.5 11.5 0 0 0 8.06-19.55z"/></svg>`,
    pin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  }
  
  /* -------- Intents catalog (must match ContactIntent) -------- */
  const intentsCatalog = {
    buyer: { title: 'Buy Produce' },
    investor: { title: 'Invest' },
    partner: { title: 'Partner With Us' },
    press: { title: 'Press or Media' },
  }
  
  /* -------- Shared state -------- */
  const contactForm = useState<{ intent: string | null }>('contact-form', () => ({
    intent: null,
  }))
  
  const selectedIntent = computed(() => {
    const id = contactForm.value.intent
    return id ? { id, ...intentsCatalog[id as keyof typeof intentsCatalog] } : null
  })
  
  /* -------- Form state -------- */
  const form = reactive({
    name: '',
    email: '',
    phone: '',
    company: '',
    crop: '',
    volume: '',
    investRange: '',
    contactMethod: 'Email',
    message: '',
    consent: false,
  })
  
  const submitting = ref(false)
  const submitted  = ref(false)
  const error      = ref<string | null>(null)
  
  const messagePlaceholder = computed(() => {
    switch (contactForm.value.intent) {
      case 'buyer':
        return 'Tell us the crop, quantity, delivery location, and timeline…'
      case 'investor':
        return 'Tell us about your investment goals and preferred horizon…'
      case 'partner':
        return 'Tell us about your organization and what kind of partnership you have in mind…'
      case 'press':
        return 'Tell us about your publication and your deadline…'
      default:
        return 'How can we help?'
    }
  })
  
  const changeIntent = () => {
    document.getElementById('contact-form-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    // Small delay so the user sees the intent section
    setTimeout(() => {
      window.scrollBy({ top: -100, behavior: 'smooth' })
    }, 400)
  }
  
  /* -------- Promises -------- */
  const promises = [
    { label: 'Buyer enquiries',    time: 'Under 24h' },
    { label: 'Investor enquiries', time: 'Under 12h' },
    { label: 'Partnership',        time: 'Under 48h' },
    { label: 'Press & media',      time: 'Under 48h' },
    { label: 'WhatsApp chat',      time: 'Under 1h'  },
  ]
  
  /* -------- Refs -------- */
  const sectionRef = ref<HTMLElement | null>(null)
  
  /* -------- Submit -------- */
  const submit = async () => {
    submitting.value = true
    error.value = null
  
    try {
      // Replace with your API endpoint
      // await $fetch('/api/contact', {
      //   method: 'POST',
      //   body: {
      //     ...form,
      //     intent: contactForm.value.intent,
      //   },
      // })
  
      // Simulated delay
      await new Promise((r) => setTimeout(r, 1200))
  
      submitted.value = true
      // Optional: reset form
      // Object.assign(form, { name: '', email: '', phone: '', company: '', message: '', consent: false })
    } catch (e: any) {
      error.value =
        e?.data?.message ||
        'Something went wrong. Please try again or reach us via WhatsApp.'
    } finally {
      submitting.value = false
    }
  }
  
  /* -------- Inject scoped styles for form fields -------- */
  onMounted(() => {
    // Dynamically inject the .field-input class via a style tag (scoped to this component)
    const style = document.createElement('style')
    style.textContent = `
      .field-input {
        width: 100%;
        height: 48px;
        padding: 0 16px;
        border-radius: 12px;
        background: rgb(var(--bg));
        border: 1px solid rgb(var(--border) / 0.15);
        color: rgb(var(--text));
        font-size: 0.95rem;
        transition: all 0.2s ease;
      }
      textarea.field-input {
        height: auto;
        padding: 14px 16px;
        line-height: 1.5;
        font-family: inherit;
      }
      .field-input::placeholder {
        color: rgb(var(--text-muted) / 0.7);
      }
      .field-input:focus {
        outline: none;
        border-color: rgb(46 125 50);
        box-shadow: 0 0 0 4px rgb(46 125 50 / 0.15);
      }
      select.field-input {
        appearance: none;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235B6B5F' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>");
        background-repeat: no-repeat;
        background-position: right 14px center;
        padding-right: 40px;
      }
      .dark select.field-input {
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239BAA9E' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>");
      }
    `
    document.head.appendChild(style)
  })
  </script>