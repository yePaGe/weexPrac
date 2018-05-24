import App from './App.vue';
import router from './router/index';
import store from './store/index';
import http from './http/index';

Vue.mixin(http)

new Vue(Vue.util.extend({
    el: '#app',
    router,
    store
}, App))
