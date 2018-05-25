import Router from 'vue-router';

import Cover from '../views/pages/cover/cover.vue';
import Home from '../views/pages/home/home.vue';
import Tips from '../views/pages/tips/tips.vue';
import Search from '../views/pages/search/search.vue';
import Shopcart from '../views/pages/shopcart/shopcart.vue';
import Mine from '../views/pages/mine/mine.vue';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/cover'
        },
        {
            path: '/cover',
            name: '首页图',
            component: Cover
        },
        {
            path: '/home',
            name: '首页',
            component: Home
        },
        {
            path: '/tips',
            name: '论坛',
            component: Tips
        },
        {
            path: '/search',
            name: '搜索',
            component: Search
        },
        {
            path: '/shopcart',
            name: '购物车',
            component: Shopcart
        },
        {
            path: '/mine',
            name: '我的',
            component: Mine
        }
    ]
})

export default router;