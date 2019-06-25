<template>
    <div>
       <Dheader></Dheader>
       <DetailList :List="List"></DetailList>
    </div>
</template>

<script>
import Dheader from '@/pages/detail/components/Dheader'
import DetailList from '@/pages/detail/components/DetailList'
export default {
  name: 'detail',
  components: {
    Dheader,
    DetailList
  },
  data () {
    return {
      List: [ {
        title:"成人票",
        children:[ {
            title:"成人票---1"
        }, {
             title:"成人票---2"
        }] }, 
        {
          title:"学生票"
        }, {
          title:"儿童票"
        }]
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
