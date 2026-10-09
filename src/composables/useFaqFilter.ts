export const useFaqFilter = () => {
    const searchQuery = useState<string>('faq-search', () => '')
    const activeCategory = useState<string>('faq-category', () => 'all')
  
    const reset = () => {
      searchQuery.value = ''
      activeCategory.value = 'all'
    }
  
    return { searchQuery, activeCategory, reset }
  }