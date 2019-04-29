<template>
    <div class="wrapper">
        <div class="swiper-img" @click="handleClick" >
          <img  class="imgsty" src=" https://imgs.qunarzz.com/sight/p0/1503/b4/b4834f16bc8f8091.water.jpg_256x160_c5987cec.jpg">
          <div class="swiper-word">
            <p class="tit">游戏主题景点</p>
            <p><span class="iconfont iconsty">&#xe632;</span>36</p>
          </div>
        </div>
        <gallary @handleShow="ShowContent" v-show="showwin"></gallary>
    </div>
</template>

<script>
import gallary from '@/common/gallary/gallary'
export default {
  name: 'Ddetail',
  components: {
    gallary
  },
  data () {
    return {
      showwin: false
    }
  },
  methods: {
    handleClick () {
        this.showwin = true
      },
    ShowContent () {
      this.showwin = false
      }
  }
}
</script>

<style lang="stylus" scoped>
.imgcontent
  position:absolute
  top:0
  left:0
  right:0
  bottom:0
  background:black
  z-index:2
.imgsty
  width: 100%
.swiper-img
  position: relative
.swiper-word
  display: flex
  display: -webkit-flex
  position: absolute
  left:0
  right:0
  bottom:0
  padding: 0 1rem
  line-height:2rem
  z-index:1
  color:#fff
  /*background:linear-gradient (top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))*/
  .tit
    flex:1
    font-size:1.3rem
  .iconsty
    font-size:1.2rem
</style>
