export const singleGameRoutes = [
    {
        path: ':lang/single-play/:level/:difficulty',
        name: "single-play",
        component: () => import('../views/views.singleplay.vue')
    }
];