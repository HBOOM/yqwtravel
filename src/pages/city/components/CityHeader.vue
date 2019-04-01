<template>
     <div class="header">
         <span class="iconfont iconsty">&#xe624;</span>
         <div class="btn">
           <div class="internal">国内城市</div>
           <div class="internal">国外城市</div>
         </div>
     </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  overflow hidden
  display -webkit-flex
  display flex
  background-color $bgcolor
  line-height 2.6rem
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
      margin-top 0.5rem
</style>
