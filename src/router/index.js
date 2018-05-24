import Router from 'vue-router';

import Home from '../views/home.vue';
import Sec from '../views/sec.vue';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: '登录',
            component: Home
        },
        {
            path: '/sec',
            name: '此页',
            component: Sec
        }
    ]
})

export default router;