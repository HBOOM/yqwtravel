<template>
    <div>
    <swiper  >
    <!-- slides -->
    <swiper-slide>
        <div class="swiper-img">
          <img  class="imgsty"src=" https://imgs.qunarzz.com/sight/p0/1503/b4/b4834f16bc8f8091.water.jpg_256x160_c5987cec.jpg">
          <div class="swiper-word">
            <p>游戏主题景点</p>
            <p><span class="iconfont">&#xe632;</span>36</p>
          </div>
        </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
    </div>
</template>

<script>
export default {
  name: 'Ddetail'
}
</script>

<style lang="stylus" scoped>
.imgsty
  width: 100%
.swiper-img
  position: relative
.swiper-word
  position: fixed
  top:100%
  left:30%
  display: flex
  display: -webkit-flex
  justify-content: space-between
  padding: 0 1rem
</style>
