export const usePlantationsFilter = () => {
    const activeCrop = useState<string>('plantations-crop', () => 'All')
    const activeState = useState<string>('plantations-state', () => 'All')
    const searchQuery = useState<string>('plantations-search', () => '')
  
    const reset = () => {
      activeCrop.value = 'All'
      activeState.value = 'All'
      searchQuery.value = ''
    }
  
    return { activeCrop, activeState, searchQuery, reset }
  }