<template>
     <div class="CityLetter">
      <ul class="letter" >
        <div v-for="(item ,index) of letter" :key="index">
        <li>{{item}}</li>
        </div>
      </ul>
     </div>
</template>

<script>
export default {
  name: 'CityLetterList',
  props: {
    letter: Array
  },
  mounted () {
    console.log(this.letter)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.letter
  display flex
  position absolute
  flex-direction column
  top 8rem
  right 0
  margin-right 0.3rem
  li
    padding-top 0.5rem
    color $bgcolor
</style>
