<template>
  <div id="app">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <IconHome></IconHome>
    <div>出现抖动，在加载图片过程中</div>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header'
import HomeSwiper from '@/pages/home/components/Swiper'
import IconHome from '@/pages/home/components/Icons'
export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeSwiper,
    IconHome
  }
}
</script>

<style>

</style>
