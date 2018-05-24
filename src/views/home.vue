<template>
    <div>
        <div class='maint'>
            <text>123445556</text>
            <text>{{name1}}</text>
            <input @change='iptchange' @input='iptinput'/>
            <button @click='toSec'>tiao</button>
            <text>{{name2}}</text>
            <text>{{name3}}</text>
        </div>
    </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
    data() {
        return {
            name1: 'aaa',
            name2: '',
            name3: ''
        }
    },
    // computed: {
    //     ...mapState(["name"])
    // },
    methods: {
        iptchange(e) {
            console.log(e.value)
            this.name2 = e.value
            this.$store.dispatch('iptchange', e)
        },
        iptinput(e) {
            console.log(e.value)
            this.name3 = e.value
        },
        toSec() {
            this.$router.push('/sec')
        }
    },
    created() {
        console.log('bbb', this)
        console.log('aaa',this.$router)
    }
}
</script>

<style>
.maint{
    width: 1000px;
    height: 500px;
    margin-top: 20px;
}
</style>
