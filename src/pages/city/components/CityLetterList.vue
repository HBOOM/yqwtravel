<template>
     <div class="CityLetter">
      <ul class="letter" >
        <div v-for="item of letter" :key="item" :ref="item">
        <li @click="getletter"
            @touchstart="handtouchstart"
            @touchmove="handtouchmove"
            @touchend="handtouchend">{{item}}</li>
        </div>
      </ul>
     </div>
</template>

<script>
export default {
  name: 'CityLetterList',
  props: {
    DetailCity: Object
  },
  mounted () {
    console.log(this.letter)
  },
  data () {
    return {
      touchstatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letter () {
      const letter = []
      for (let i in this.DetailCity) {
        letter.push(i)
      }
      return letter
    }
  },
  methods: {
    getletter (e) {
      console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    handtouchstart () {
      this.touchstatus = true
    },
    handtouchmove (e) {
      if (this.touchstatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 116
          const index = Math.floor((touchY - this.startY) / 24)
          if (index >= 0 && index < this.letter.length) {
            this.$emit('change', this.letter[index])
          }
        }, 16)
      }
    },
    handtouchend () {
      this.touchstatus = false
    }
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
