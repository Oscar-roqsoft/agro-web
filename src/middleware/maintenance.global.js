
export default defineNuxtRouteMiddleware((to) => {
    const maintenanceMode = true
  
    if (maintenanceMode && to.path !== '/maintenance') {
      return navigateTo('/maintenance')
    }
  })
  