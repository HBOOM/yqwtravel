<template>
   <div class="GameHeader">
    <router-link to='/' class="header-left"><span class="iconfont icon-left">&#xe624;</span></router-link>
    景点详情
   </div>
</template>

<script>
export default {
  name: 'GameHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.GameHeader
  width 100%
  height 2.5rem
  background-color $bgcolor
  display flex
  display -webkit-flex
  justify-content:center
  color #fff
  line-height 2.5rem
  flex-direction row
  position:fixed
  left:0
  top:0
  z-index:100
.header-left
  position:absolute
  left:0rem
  padding-left:0.3rem
  z-index:99
  color:white
</style>
