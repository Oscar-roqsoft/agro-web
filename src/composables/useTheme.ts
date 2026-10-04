// composables/useTheme.ts
export const useTheme = () => {
    const colorMode = useColorMode()
  
    const isDark = computed(() => colorMode.value === 'dark')
  
    const toggle = () => {
      // Prevent flash of unstyled transitions
      document.documentElement.classList.add('no-transition')
      colorMode.preference = isDark.value ? 'light' : 'dark'
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.documentElement.classList.remove('no-transition')
        })
      })
    }
  
    return { isDark, toggle, colorMode }
  }