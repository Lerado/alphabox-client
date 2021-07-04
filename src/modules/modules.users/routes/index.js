export default [
    // Login page
    {
        path: '/login',
        name: 'login',
        meta: {
            transitions: { enter: "fadeInRight" }
        },
        component: () => import('../views/views.login.vue'),
    }
]