import { createRouter, createWebHistory } from 'vue-router'

// Import modules routes
import usersModuleRoutes from '@/modules/modules.users/routes'

const routes = [
  {
    // Full page layout routes
    path: '',
    component: () => import('@/layouts/layouts.fullpage.vue'),
    children: [
      // Users modules routes
      ...usersModuleRoutes,

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
