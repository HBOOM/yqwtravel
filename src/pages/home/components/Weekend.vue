<template>
  <div class="">
     <div class="title">周末去哪儿</div>
     <ul>
      <router-link to="detail">
         <li class="item" v-for="item of list" :key="item.id">
             <div class="item-img-wrap">
             <img class="item-img" :src="item.url">
             </div>
             <div class="item-info">
                 <p class="item-title">{{item.title}}</p>
                 <p class="item-desc">{{item.desc}}</p>
             </div>
         </li>
      </router-link>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
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
.item-img-wrap
  overflow hidden
  padding-bottom 1.6%
  margin-top 0.2rem
  .item-img
    width 100%
.item-title
  font-size 0.85rem
  font-weight bold
  padding-bottom .2rem
  text-indent: .3rem
.item-desc
  font-size 0.65rem
  text-indent: .3rem
</style>
