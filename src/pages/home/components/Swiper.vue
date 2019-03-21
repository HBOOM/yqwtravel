<template>
  <div class="swiper-wrapped">
   <swiper :options="swiperOption" v-if="showSwiper" >
    <!-- slides -->
    <swiper-slide v-for="item of list" v-bind:key="item.id">
        <img :src="item.url" class="swiper-img">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array // 获取的是外部的空数组，ajax数据获取完成之后，在重新渲染，swiper应该由完整数组创建--问题：默认显示最后一个页面
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: { // 计算属性
    showSwiper () {
      return this.list.length // 逻辑尽量不要出现在上端
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
