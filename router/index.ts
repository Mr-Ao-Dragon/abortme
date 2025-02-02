const routes = [
    // ...其他路由
    {
        path: '/:pathMatch(.*)*', // 捕获所有未匹配的路由
        name: 'NotFound',
        component: () => import('../src/views/404.vue')
    }
]