<template>
   <div class="header">
     <div class="header-left"><span class="iconfont icon-left">&#xe624;</span></div>
     <div class="header-input">酒店/景点/地点</div>
     <router-link to="/city">
       <div class="header-right">
         {{this.city}}
         <span class="iconfont icon-right">&#xe615;</span>
        </div>
     </router-link>
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
@import '~styles/variables.styl'
.header
// 缩进不正确会造成样式不起作用，同时css解析错误
  width 100%
  height 2.5rem
  background-color $bgcolor
  display flex
  display -webkit-flex
  color #fff
  line-height 2.5rem
  flex-direction row
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
     padding 0 0.4rem
     box-sizing  border-box
     text-align center
     color white
.icon-left
 font-size 1.2rem
 margin-right 0.1rem
.icon-right
  font-size 0.5rem
  padding 0.5rem 0.2rem
</style>
