<template>
    <div class='btn-list'>
        <div v-for='i in barList' :key='i.id' class='btn-item' @click='changePage(i.name)'>
            <image class='img-item' :src='i.icon' v-if='$route.path != "/" + i.name'/>
            <image class='img-item' :src='i.onIcon' v-if='$route.path == "/" + i.name'/>
            <text class='btn-font' :style='{color: $route.path == "/" + i.name ? "#f5bf79" : " "}'>{{i.name}}</text>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            barList: [
                {
                    id: 0,
                    name: 'home',
                    icon: 'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/home.png',
                    onIcon: 'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/home1.png'
                },
                {
                    id: 1,
                    name: 'tips',
                    icon: 'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/text.png',
                    onIcon: 'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/text1.png'
                },
                {
                    id: 2,
                    name: 'search',
                    icon: 'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/search.png',
                    onIcon: 'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/search1.png'
                },
                {
                    id: 3,
                    name: 'shopcart',
                    icon: 'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/cart.png',
                    onIcon: 'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/cart1.png'
                },
                {
                    id: 4,
                    name: 'mine',
                    icon: 'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/own.png',
                    onIcon: 'https://weex-img.oss-cn-beijing.aliyuncs.com/bottomBanner/own1.png'
                },
            ]
        }
    },
    methods: {
        changePage(name) {
            this.$router.push('/' + name)
        }
    }
}
</script>

<style lang="sass">
@import './bottom.scss';
</style>
