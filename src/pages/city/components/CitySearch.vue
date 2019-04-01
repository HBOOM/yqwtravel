<template>
     <div class="search">
        <input class="inputsty" type="text" placeholder="请输入搜索的内容"/>
     </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.search
  margin 0 auto
  border-top 0.01rem solid white
  background $bgcolor
  height 2.4rem
  line-height 2.4rem
  display flex
  justify-content center
  align-items center
  padding 0 0.3rem
  .inputsty
    height 2rem
    line-height 2rem
    border-radius 0.2rem
    flex-grow 1
    padding 0 0.3rem
</style>
