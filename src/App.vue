<template>
  <div id="app">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <div>出现抖动，在加载图片过程中</div>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header'
import HomeSwiper from '@/pages/home/components/Swiper'
export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
