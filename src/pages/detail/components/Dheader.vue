<template>
    <div class="wrapper">
      <router-link to='/' class="header-left"><span class="iconfont icon-left">&#xe624;</span></router-link>
        <div class="swiper-img" @click="handleClick" >
          <img  class="imgsty" src=" https://imgs.qunarzz.com/sight/p0/1503/b4/b4834f16bc8f8091.water.jpg_256x160_c5987cec.jpg">
          <div class="swiper-word">
            <p class="tit">游戏主题景点</p>
            <p><span class="iconfont iconsty">&#xe632;</span>36</p>
          </div>
        </div>
        <gallary @handleShow="ShowContent" v-show="showwin"></gallary>
         <GameHeader class="_gameHeader" v-show="!ShowAbs" :style="StyTrans">
        </GameHeader>
    </div>
</template>

<script>
import GameHeader from '@/pages/detail/components/GameHeader'
import gallary from '@/common/gallary/gallary'
import CommonTransition from '@/common/transition'
export default {
  name: 'Ddetail',
  components: {
    gallary,
    CommonTransition,
    GameHeader
  },
  data () {
    return {
      showwin: false,
      ShowAbs: true,
      StyTrans: {
        opactiy: 0
      }
    }
  },
  methods: {
    ScrollTopMethod () {
      const top = document.documentElement.scrollTop
      if (top > 30) {
        this.ShowAbs = false
        var opacity = (top / 130) > 1 ? 1 : (top / 130)
        this.StyTrans = {
          opacity: opacity
        }
      } else {
        this.ShowAbs = true
      }
    },
    handleClick () {
      this.showwin = true
    },
    ShowContent () {
      this.showwin = false
    }
  },
  activated () {
    // 全局事件绑定，会对其他组件产生影响，使用keepalive--activated--deactivated
    window.addEventListener('scroll', this.ScrollTopMethod)
  },
  deactivated () {
    window.removeEventListener('scroll', this.ScrollTopMethod)
  }
}
</script>

<style lang="stylus" scoped>
.FillDock
  width:100%
  padding-bottom:50rem
.header-left
  position:absolute
  left:0rem
  top:0.4rem
  padding:0.3rem
  z-index:99
  color:white
  background:rgba(0,0,0,.5)
  border-radius:50%
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
