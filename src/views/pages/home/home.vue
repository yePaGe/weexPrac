<template>
    <div class='con-height'>
        <Top></Top>
        <div class='home-con'>
            <slider class='top-slider' interval='2000' :auto-play='true'>
                <image style='height: 100%; width: 100%;' v-for='i in imgList' :key='i.id' :src='i.url'/>
            </slider>
            <div class='mid-btn'>
                <text :class='currentId == i.id ? "cur" : ""' v-for='i in typeList' :key='i.id' @click='chooseCurrent(i.id)'>{{i.name}}</text>
            </div>
            <scroller style='width: 100%; margin-bottom: 50px'>
                <div class='item-list'>
                    <div v-for='i in itemList' :key='i.id' class='item'>
                        <image style='height: 80%; width: 100%;' :src='i.url'/>
                        <text style='color: #d35f00; margin-top: 5px; text-align: center; font-size: 12px'>{{i.name}}</text>
                    </div>
                </div>
            </scroller>
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
                    name: '蛋 糕'
                },
                {
                    id: 1,
                    name: '布 丁'
                },
                {
                    id: 2,
                    name: '甜 品'
                },
                {
                    id: 3,
                    name: '饼 干'
                }
            ],
            currentId: 0,
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
        getList(num) {
            let id = '';
            switch(num) {
                case 0:
                    id = '5b10bd28ce40311c9499b461';
                    break;
                case 1:
                    id = '5b10c221ce40311c9499b462';
                    break;
                case 2:
                    id = '5b10e87d3bb93523688d2f66';
                    break;
                case 3:
                    id = '5b10eabc3bb93523688d2f67';
                    break;
            }
            this.Get('/server/imgs/itemList', {
                params: {
                    id: id
                }
            }, res => {
                if(!res.data.code) {
                    this.itemList = JSON.parse(res.data).list
                }
            })
        },
        chooseCurrent(id) {
            this.currentId = id
            this.getList(id)
        }
    },
    created() {
        this.getList(0)
    }
}
</script>

<style lang='sass'>
@import './home.scss';
</style>