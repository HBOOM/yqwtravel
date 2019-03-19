<template>
  <div class="">
     <div class="title">周末去哪儿</div>
     <ul>
         <li class="item" v-for="item of imglist" :key="item.id">
             <div class="item-img-wrap">
             <img class="item-img" :src="item.url">
             </div>
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
  name: 'HomeWeekend',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imglist: [ {
        id: '001',
        url: 'https://imgs.qunarzz.com/sight/p0/1503/b4/b4834f16bc8f8091.water.jpg_256x160_c5987cec.jpg',
        title: '周六畅玩',
        desc: '浪漫首站，浪漫的主题乐园'
      }, {
        id: '002',
        url: 'https://imgs.qunarzz.com/sight/p0/1503/b4/b4834f16bc8f8091.water.jpg_256x160_c5987cec.jpg',
        title: '周六畅玩',
        desc: '浪漫首站，浪漫的主题乐园'
      }]
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
