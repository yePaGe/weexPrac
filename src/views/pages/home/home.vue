<template>
    <div class='con-height'>
        <Top></Top>
        <div class='home-con'>
            <slider class='top-slider' interval='2000' :auto-play='true'>
                <image style='height: 100%; width: 100%;' v-for='i in imgList' :key='i.id' :src='i.url'/>
            </slider>
            <div class='mid-btn'>
                <text class='item-text' v-for='i in typeList' :key='i.id'>{{i.name}}</text>
            </div>
            <div>
                <scroller>
                    <div v-for='i in itemList' :key='i.id'>
                        <text>{{i.item}}</text>
                    </div>
                </scroller>
            </div>
        </div>
        <Bottom></Bottom>
    </div>
</template>

<script>
import Top from '../../components/top/top1.vue';
import Bottom from '../../components/bottom/bottom.vue';

export default {
    data() {
        return {
            imgList: [
                {
                    id: 0,
                    url: 'http://pics.sc.chinaz.com/files/pic/pic9/201805/wpic932.jpg'
                },
                {
                    id: 1,
                    url: 'http://pics.sc.chinaz.com/files/pic/pic9/201805/wpic1096.jpg'
                },
                {
                    id: 2,
                    url: 'http://pics.sc.chinaz.com/files/pic/pic9/201805/bpic6820.jpg'
                },
                {
                    id: 3,
                    url: 'http://pics.sc.chinaz.com/files/pic/pic9/201803/zzpic10700.jpg'
                },
                {
                    id: 4,
                    url: 'http://pics.sc.chinaz.com/files/pic/pic9/201802/zzpic10413.jpg'
                }
            ],
            typeList: [
                {
                    id: 0,
                    name: '蛋糕'
                },
                {
                    id: 1,
                    name: '布丁'
                },
                {
                    id: 2,
                    name: '甜品'
                },
                {
                    id: 3,
                    name: '曲奇'
                }
            ],
            itemList: [
                {
                    id: 0,
                    name: ''
                }
            ]
        }
    },
    components: {
        Top,
        Bottom        
    },
    methods: {
    },
    created() {

    }
}
</script>

<style lang='sass'>
@import './home.scss';
</style>