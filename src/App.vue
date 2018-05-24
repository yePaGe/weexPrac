<template>
  <div id='app'>
    <router-view></router-view>
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .r-box{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
    }
  .main{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: 0;
  }
</style>

<script>
  export default {
    name: 'app',
    data: {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World',
      clientHeight: '700px'
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
      getData() {
        this.Get('/server/islogin', res => {
          console.log('get', res)
        })
      }
    },
    created() {
      this.clientHeight = body.clientHeight
      this.getData()
    }
  }
</script>