<template>
   <div class="icons">
    <swiper :options="swiperOption">
    <swiper-slide  v-for="(page,index) of pages" :key="index">
       <div class="iconList" v-for="item of page" v-bind:key="item.id">
           <div class="icon-img">
               <img  class= "imgsty" :src="item.url">
           </div>
           <p class="txt">{{item.txt}}</p>
       </div>
       </swiper-slide>
       </swiper>
   </div>
</template>

<script>
export default {
  name: 'IconHome',
  props: {
    list: Array
  },
  computed: {
    pages () {
      const pages = [ ]
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  data () {
    return {
      swiperOption: {
        autoplay: false // 取消自动循环切换
      },
      NOTE: '之前发现图标一直只显示一个的问题是，每一个iconlist都被slide包围，沾满一行'
    }
  }
}
</script>

<style lang="stylus" scoped>
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.iconList
    height 0
    float left
    width 25%
    padding-bottom 25%
    position relative
    overflow hidden
    .icon-img
     position absolute
     top 0
     left 0
     right 0
     -webkit-box-sizing border-box
     box-sizing border-box
     padding .2rem
     .imgsty
      width 100%
      margin 0 auto
      display block
      border-radius  80%
    .txt
     position absolute
     top 80%
     left 0
     right 0
     height .44rem
     line-height .44rem
     text-align center
     color #808080
     font-size .5rem
</style>
