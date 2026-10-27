
export default defineNuxtRouteMiddleware((to) => {
    const maintenanceMode = false
  
    if (maintenanceMode && to.path !== '/maintenance') {
      return navigateTo('/maintenance')
    }
  })
  