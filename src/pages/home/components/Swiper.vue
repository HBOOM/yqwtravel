<template>
  <div class="swiper-wrapped">
   <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item of imglist" v-bind:key="item.id">
        <img :src="item.url" class="swiper-img">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imglist: [ {
        id: '001',
        url: 'https://imgs.qunarzz.com/p/tts4/1701/6d/c48662846ee9aa02.jpg_r_390x260x90_85e7c536.jpg'
      }, {
        id: '002',
        url: 'https://imgs.qunarzz.com/p/tts9/1710/ee/7d44297c48ebfe02.jpg_r_390x260x90_c3b80ff8.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-wrapped >>> .swiper-pagination-bullet-active//穿透，这个将不受scoped影响，影响全局，将小点的颜色改变
 background #fff
.swiper-wrapped
 overflow hidden
 width 100%
 height 0
 padding-bottom 70%//解决抖动问题，保持宽高比
 background #808080
  .swiper-img
    width 100%
</style>
