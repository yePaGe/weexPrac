<template>
    <div>
        <div class='main1'>
            <text>sec</text>
            <text>{{name1}}</text>
            <input @change='iptchange' @input='iptinput'/>
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
            name2: '4444',
            name3: '222'
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
        }
    },
    created() {

    }
}
</script>

<style>
.main1{
    width: 1000px;
    height: 500px;
    margin-top: 20px;
}
</style>