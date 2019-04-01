<template>
     <div class="HotList">
        <div class="localtion">
            <span>当前城市：</span>
            <div class="currentBtn">北京</div>
        </div>
        <div class="Btn">
            <div class="title">热门城市</div>
            <div class="Listitem">
                <div class="currentBtn">北京</div>
                <div class="currentBtn">北京</div>
                <div class="currentBtn">北京</div>
                <div class="currentBtn">北京</div>
                <div class="currentBtn">北京</div>
                <div class="currentBtn">北京</div>
                <div class="currentBtn">北京</div>
            </div>
        </div>
     </div>
</template>

<script>
export default {
  name: 'CityHotList'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.HotList
  overflow hidden
  .localtion
    height 2.5rem
    display flex
    just-content center
    align-items center
    padding 0 0.6rem
    color #808080
    .currentBtn
      width 25%
      text-align center
      border 0.01rem solid #808080
      height 1.65rem
      line-height 1.65rem
      border-radius 0.005rem
      box-shadow 0.01rem 0.01rem $bgcolor
  .Btn
    overflow hidden
    .title
      background #888
      text-indent: .6rem
      line-height 2.5rem
    .Listitem
        display flex
        just-content space-around
        align-items center
        flex-wrap wrap
        padding 0 0.6rem
        .currentBtn
            width 25%
            text-align center
            border 0.01rem solid #808080
            height 1.65rem
            line-height 1.65rem
            border-radius 0.005rem
            box-shadow 0.01rem 0.01rem $bgcolor
            margin-right 0.3rem
            margin-top 0.3rem
            
</style>
