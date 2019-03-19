<template>
  <div class="">
     <div class="title">热销推荐</div>
     <ul>
         <li class="item" v-for="item of imglist" :key="item.id">
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
        desc: '浪漫首站，浪漫的主题乐园123456789000'
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
