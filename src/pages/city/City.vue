<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch :DetailCity="DetailCity"></CitySearch>
    <CityHotList :indexletter="indexletter" :hotCity="hotCity" :DetailCity="DetailCity" :currentCity=" currentCity"></CityHotList>
    <CityLetterList :DetailCity="DetailCity" @change="handletter"></CityLetterList>
  </div>
</template>

<script>
import CityHeader from '@/pages/city/components/CityHeader'
import CitySearch from '@/pages/city/components/CitySearch'
import CityHotList from '@/pages/city/components/CityHotList'
import CityLetterList from '@/pages/city/components/CityLetterList'
import axios from 'axios'
export default {
  name: 'HomeCity',
  components: {
    CityHeader,
    CitySearch,
    CityHotList,
    CityLetterList
  },
  mounted () {
    this.currentCity = this.$route.query.city
    console.log(this.currentCity)
    this.getCityInfo()
  },
  data () {
    return {
      hotCity: [],
      DetailCity: {},
      letter: [],
      currentCity: '',
      indexletter: ''
    }
  },
  methods: {
    handletter (e) {
      console.log(e)
      this.indexletter = e
    },
    getCityInfo () {
      axios.get('/api/city.json').then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      var self = res.data
      console.log(self)
      if (self.ret) {
        this.hotCity = self.data.hotCities
        this.DetailCity = self.data.cities
        console.log(this.letter)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
