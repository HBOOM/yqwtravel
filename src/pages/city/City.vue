<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityHotList></CityHotList>
  </div>
</template>

<script>
import CityHeader from '@/pages/city/components/CityHeader'
import CitySearch from '@/pages/city/components/CitySearch'
import CityHotList from '@/pages/city/components/CityHotList'
export default {
  name: 'HomeCity',
  components: {
    CityHeader,
    CitySearch,
    CityHotList
  }
}
</script>

<style lang="stylus" scoped>

</style>
