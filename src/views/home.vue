<template>
    <div class='main'>
        <slider class='slider' interval='2000' :auto-play='isPlay' @change='imgChange'>
            <div v-for='i in imgList' :key='i.id' class='img-con'>
                <image width='100%' height='100%' :src='i.url'/>
                <text class='img-text'>{{i.des}}</text>
                <button class='img-btn' v-if='!isPlay'>进入App</button>
            </div>
        </slider>
    </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
    data() {
        return {
            imgList: [
                {
                    id: 0,
                    url: 'https://weex-img.oss-cn-beijing.aliyuncs.com/firstPage/start1.jpg',
                    des: '欣赏海边落日，迎着海风，回味人生'
                },
                {
                    id: 1,
                    url: 'https://weex-img.oss-cn-beijing.aliyuncs.com/firstPage/start2.jpg',
                    des: '贝壳迷人，人生亦都浪漫'
                },
                {
                    id: 2,
                    url: 'https://weex-img.oss-cn-beijing.aliyuncs.com/firstPage/start3.jpg',
                    des: '雾都伦敦，浪漫之都'
                },
                {
                    id: 3,
                    url: 'https://weex-img.oss-cn-beijing.aliyuncs.com/firstPage/start4.jpg',
                    des: '握紧眼前的灿烂时光'
                },
                {
                    id: 4,
                    url: 'https://weex-img.oss-cn-beijing.aliyuncs.com/firstPage/start5.jpg',
                    des: '遇见彩虹，美的开始'
                }
            ],
            isPlay: true
        }
    },
    methods: {
        imgChange(e) {
            console.log('aaa', e)
            if(e.index == 0) {
                this.isPlay = false
            }
        }
    },
    created() {

    }
}
</script>

<style lang="scss" scoped>
.slider{
    width: 100%;
    height: 100%;
    .img-con{
        width: 100%;
        height: 100%;
    }
}
</style>
