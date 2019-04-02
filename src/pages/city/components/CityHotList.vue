<template>
<div class="list" ref="wrapper">
<div>
    <div class="HotList " ref="wrapper">
        <div class="localtion  border-topbottom" >
            <span>当前城市：</span>
            <div class="currentBtn">北京</div>
        </div>
        <div class="Btn  border-topbottom">
            <div class="title border-topbottom">热门城市</div>
            <div class="Listitem" >
                <div class="currentBtn" v-for="item of hotCity" :key="item.id"><div>{{item.name}}</div></div>
            </div>
        </div>
    </div>
    <div class="CityList" v-for="(item,key) of DetailCity" :key="key">
          <div class="letter border-topbottom">{{key}}</div>
            <div class="itemCity border-bottom" v-for="items of item" :key="items.id">{{items.name}}</div>
    </div>
</div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityHotList',
  props: {
    hotCity: Array,
    DetailCity: Object
  },
  data () {
    return {
      letter: []
    }
  },
  mounted () {
    var self = this
    console.log(self)
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.border-topbottom
      &:before
        border-color:#ccc
      &:after
        border-color :#ccc
.border-bottom
      &:before
        border-color:#ccc
.list
  overflow hidden
  position absolute
  top 5rem
  left 0
  right 0
  bottom 0
.CityList
  color #808080
  font-size 0.8rem
  .itemCity
    text-indent: $textindent
    line-height 2.2rem
  .letter
    background #E0E0E0
    text-indent: $textindent
    line-height 1.6rem
.HotList
  overflow hidden
  .localtion
    height 2.5rem
    display flex
    justify-content flex-start
    align-items center
    padding 0 $textindent
    fontset()
    .currentBtn
      CurrentBtn()
  .Btn
    overflow hidden
    .title
      background #E0E0E0
      text-indent: .6rem
      line-height 2.5rem
     fontset()
    .Listitem
        display flex
        justify-content flex-start
        flex-wrap wrap
        padding 0.5rem 1rem
        font-size 0.8rem
        .currentBtn
            CurrentBtn()
            margin-bottom 0.5rem
            margin-right 0.6rem
            box-shadow 0.01rem 0.01rem #F3F3F3
            margin-top 0.5rem
            fontset()
</style>
