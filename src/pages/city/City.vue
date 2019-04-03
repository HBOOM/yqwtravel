<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityHotList :hotCity="hotCity" :DetailCity="DetailCity" :currentCity=" currentCity"></CityHotList>
    <CityLetterList :letter="letter"></CityLetterList>
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
      currentCity: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      var self = res.data
      console.log(self)
      if (self.ret) {
        this.hotCity = self.data.hotCities
        this.DetailCity = self.data.cities
        for (let i in this.DetailCity) {
          this.letter.push(i)
        }
        console.log(this.letter)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
