import { singleGameRoutes } from '../modules/modules.singleplay/routes'

export default [
    {
        path: '/main-menu',
        name: 'main-menu',
        component: () => import('../views/views.menu.vue')
    },

    // Single play routes
    ...singleGameRoutes
]