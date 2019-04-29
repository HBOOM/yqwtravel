<template>
    <div class="content" @click="handleBack">
        <div class="imgarea">
            <swiper :options="swiperOption" >
              <swiper-slide  >
                <img class="imgitem" src=" https://imgs.qunarzz.com/sight/p0/1503/b4/b4834f16bc8f8091.water.jpg_256x160_c5987cec.jpg">
              </swiper-slide>
              <swiper-slide  >
                <img class="imgitem" src="http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg">
              </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
  name: 'gallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents:true,
        observer:true
      }
    }
  },
  methods: {
    handleBack () {
      this.$emit('handleShow',false)
      }
  }
}
</script>

<style lang="stylus" scoped>
.content >>> .swiper-pagination-fraction
 color:red
.content
  position:absolute
  top:0
  left:0
  right:0
  bottom:0
  display:flex
  justify-content:center
  align-items:center
  overflow:hidden
  background:black
  z-index:3
  .imgarea
    background:#fff
    width:100%
    text-align:center
    .imgitem
      width:100%
</style>
