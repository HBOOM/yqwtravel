<template>
  <div id="app">
    <HomeHeader></HomeHeader>
    <HomeSwiper :list="SwiperList"></HomeSwiper>
    <IconHome :list="iconList"></IconHome>
    <HomeWeekend :list="WeekendList"></HomeWeekend>
    <HomeRecommand :list="recommandList"></HomeRecommand>
    <div>出现抖动，在加载图片过程中11111111</div>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header'
import HomeSwiper from '@/pages/home/components/Swiper'
import IconHome from '@/pages/home/components/Icons'
import HomeWeekend from '@/pages/home/components/Weekend'
import HomeRecommand from '@/pages/home/components/recommand'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'HOME',
  components: {
    HomeHeader,
    HomeSwiper,
    IconHome,
    HomeWeekend,
    HomeRecommand
  },
  mounted () {
    this.lastcity = this.city
    this.getHomeInfo() // 挂载数据
  },
  computed: {
    ...mapState(['city'])
  },
  activated () {
    var self = this
    console.log('activated')
    console.log(self.city)
    console.log(self.lastcity)
    console.log(localStorage.city)
    if (self.lastcity !== self.city) {
      self.getHomeInfo()
      self.lastcity = self.city
    }
  },
  data () {
    return {
      lastcity: '',
      SwiperList: [],
      iconList: [],
      WeekendList: [],
      recommandList: []
    }
  },
  methods: {
    getHomeInfo () { // 实现数据获取 url /static/mock,通过转发机制，在config proxytable代理
      axios.get('/api/index.json?city=' + this.city).then(this.getInfoSucc)
    },
    getInfoSucc (res) { // 父组件向子组件传值，通过v-bind:list传值
      var self = res.data
      if (self.rest) {
        // this.city = self.data.city
        this.SwiperList = self.data.SwiperList
        this.iconList = self.data.iconList
        this.WeekendList = self.data.WeekendList
        this.recommandList = self.data.recommandList
      }
      console.log(res)
    }
  }
}
</script>

<style>

</style>
