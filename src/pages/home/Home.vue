<template>
  <div id="home">
      <div id="app">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <IconHome></IconHome>
    <HomeWeekend></HomeWeekend>
    <div>出现抖动，在加载图片过程中</div>
  </div>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header'
import HomeSwiper from '@/pages/home/components/Swiper'
import IconHome from '@/pages/home/components/Icons'
import HomeWeekend from '@/pages/home/components/Weekend'
export default {
  name: 'HOME',
  components: {
    HomeHeader,
    HomeSwiper,
    IconHome,
    HomeWeekend
  }
}
</script>

<style lang="stylus" scoped>

</style>
