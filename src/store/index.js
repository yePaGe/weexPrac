import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: 'hi foolish~~~'
    },
    mutations: {
        showchange(state, val) {
            console.log(val)
            state.name = val
        }
    },
    actions: {
        iptchange({commit}, value) {
            console.log('ipt', value)
            commit('showchange', value)
        }
    }
})

export default store;