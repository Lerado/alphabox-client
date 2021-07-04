import { createRouter, createWebHistory } from 'vue-router'
import store from "../store"

// Import modules routes
import usersModuleRoutes from '@/modules/modules.users/routes'
import gamesModuleFullpageRoutes from '@/modules/modules.games/routes'

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
        name: 'welcome',
        meta: {
          transitions: { enter: "fadeIn", leave: "fadeOut" }
      },
        component: () => import('../views/views.welcome.vue')
      }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Global router hooks
router.beforeEach(async (to, from, next) => {
  // If check hasn't been performed before do it
  if (!store.state.users.hasAuthBeenChecked) {
    await store.dispatch("users/resolveToken");
  }

  if ( to.meta.authRequired == true && Object.getOwnPropertyNames(store.state.users.user).length === 0 ) next({ name: 'login' });
  else next();
});

export default router
