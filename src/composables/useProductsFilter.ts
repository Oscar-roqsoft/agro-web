export const useProductsFilter = () => {
    const activeCrop  = useState<string>('products-filter', () => 'All Products')
    const activeSort  = useState<string>('products-sort', () => 'featured')
    const searchQuery = useState<string>('products-search', () => '')
  
    const reset = () => {
      activeCrop.value  = 'All Products'
      activeSort.value  = 'featured'
      searchQuery.value = ''
    }
  
    return { activeCrop, activeSort, searchQuery, reset }
}