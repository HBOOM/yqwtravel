<template>
   <div class="header">
     <div class="header-left"><span class="iconfont icon-left">&#xe624;</span></div>
     <div class="header-input">酒店/景点/地点</div>
     <div class="header-right">{{this.city}}&nbsp;<span class="iconfont icon-right">&#xe615;</span></div>
   </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
.header
// 缩进不正确会造成样式不起作用，同时css解析错误
  width 100%
  height 2.5rem
  background-color #3bb0d0
  display flex
  display -webkit-flex
  color #fff
  line-height 2.5rem
//   justify-content space-between
  .header-left
     width:15%
     text-align center
  .header-input
     flex 1
     -webkit-flex 1
     background #fff
     color #808080
     margin 0.2rem 0
  .header-right
     width:15%
     text-align center
.icon-left
 font-size 1.2rem
 margin-right 0.1rem
.icon-right
  font-size 0.5rem
  padding 0.5rem 0
</style>
