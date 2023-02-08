import { createRouter, createWebHistory } from 'vue-router';
// import Login from '@/views/Login.vue';
// import Main from '@/views/Main.vue';

const routes = [
    //path별 view 등록
    {
        path: '/',
        name: "Login",
        // component: Login
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/main',
        name: "Main",
        // component: Main
        component: () => import('@/views/Main.vue'),
    }
]

let router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;