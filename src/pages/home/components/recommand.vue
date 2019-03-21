<template>
  <div class="">
     <div class="title">热销推荐</div>
     <ul>
         <li class="item" v-for="item of list" :key="item.id">
             <img class="item-img" :src="item.url">
             <div class="item-info">
                 <p class="item-title">{{item.title}}</p>
                 <p class="item-desc">{{item.desc}}</p>
             </div>
         </li>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  background: #eee
  text-indent: .3rem
  margin-top: .1rem
  font-size 1.2rem
  margin-top 0.6rem
.item
  display flex
  padding .3rem 0
  .item-img
    width 48%
    height 30%
    padding-left .1rem
  .item-info
    -webkit-box-sizing border-box
    -moz-box-sizing border-box
    box-sizing border-box
    padding-left 0.5rem
    flex-grow 1
    .item-title
      font-weight bold
      font-size 0.85rem
      padding-bottom 0.4rem
      text-align center
    .item-desc
      font-size 0.65rem
      line-height 1rem
</style>
