<template>
     <div class="header">
         <span class="iconfont iconsty" v-on:click="ReturnBack">&#xe624;</span>
         <div class="btn">
           <div class="internal">国内城市</div>
           <div class="internal">国外城市</div>
         </div>
     </div>
</template>

<script>
export default {
  name: 'CityHeader',
  methods: {
    ReturnBack () {
      window.history.go(-1)// 返回上一层
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  overflow hidden
  display -webkit-flex
  display flex
  background-color $bgcolor
  line-height 2.8rem
  color white
  text-align center
  .iconsty
    padding 0 .8rem
    font-size 1.2rem
  .btn
    display flex
    flex-grow 1
    flex-direction row
    justify-content center
    font-size 0.8rem
    .internal
      width 30%
      height 1.65rem
      line-height 1.65rem
      margin-right 0.2rem
      margin-top 0.4rem
      border 0.08rem solid white
      box-shadow 0.01rem 0.01rem 0.01rem #888888
      border-radius 0.05rem
</style>
