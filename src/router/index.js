import Router from 'vue-router';

import Home from '../views/home.vue';
import Sec from '../views/sec.vue';

Vue.use(Router);

const router = new Router({
    mode: 'abstract',
    routes: [
        {
            path: '/',
            redirect: '/sec'
        },
        {
            path: '/home',
            name: '登录',
            component: Home
        }
    ]
})

export default router;