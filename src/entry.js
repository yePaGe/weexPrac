import App from './App.vue';
import router from './router/index';
import store from './store/index';
import http from './http/index';
import { Icon, Button } from 'element-ui';

Vue.mixin(http)
Vue.use(Icon)
Vue.use(Button)

new Vue(Vue.util.extend({
    el: '#app',
    router,
    store
}, App))
