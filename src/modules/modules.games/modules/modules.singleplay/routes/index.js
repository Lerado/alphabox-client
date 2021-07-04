export const singleGameRoutes = [
    {
        path: ':lang/single-play/:level/:difficulty',
        name: "single-play",
        meta: {
            // transitions: { enter: "bounceInDown" }
        },
        component: () => import('../views/views.singleplay.vue')
    }
];