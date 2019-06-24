<template>
<div>
     <div class="search">
        <input class="inputsty" type="text" placeholder="请输入搜索的内容" v-model="keyword"/>
     </div>
     <div class="search-content"  ref="wrapper" v-show="keyword">
       <ul>
         <li class="itemCity border-bottom" @click="handhot(item.name)" v-for="item of list" :key="item.id">{{item.name}}</li>
         <li class="itemCity border-bottom" v-show="hasdata">没有符合条件的数据！</li>
      </ul>
     </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    DetailCity: Object
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null // 节流函数标识·
    }
  },
  methods: {
    handhot (name) {
      // this.$store.dispatch('changeCity', name)
      this.$store.commit('changeCity', name)
      this.$router.push('/')
    }
  },

  computed: {
    hasdata () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (this.keyword) {
        this.list = []
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.DetailCity) {
          this.DetailCity[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > 0) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.border-bottom
      &:before
        border-color:#ccc
.search
  margin 0 auto
  background $bgcolor
  height 2.4rem
  line-height 2.4rem
  display flex
  justify-content center
  align-items center
  padding 0 0.3rem
  font-size 0.8rem
  .inputsty
    height 2rem
    line-height 2rem
    border-radius 0.2rem
    flex-grow 1
    padding 0 0.3rem
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 5.2rem
  right 0
  left 0
  bottom 0
  background #eee
  .itemCity
    text-indent: $textindent
    line-height 2.2rem
    background #fff
</style>
