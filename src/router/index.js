import { createRouter, createWebHistory } from 'vue-router'

// Import modules routes
import usersModuleRoutes from '@/modules/modules.users/routes'
import { gamesModuleFullpageRoutes } from '@/modules/modules.games/routes'

const routes = [
  {
    // Full page layout routes
    path: '',
    component: () => import('@/layouts/layouts.fullpage.vue'),
    children: [
      // Users modules routes
      ...usersModuleRoutes,

      // Games module fullpage routes
      ...gamesModuleFullpageRoutes,

      // Welcome page
      {
        path: '',
        component: () => import('../views/views.welcome.vue')
      }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
