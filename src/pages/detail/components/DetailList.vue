<template>
    <div class="Detail_List">
      <div  class="itemsty" v-for="(item,index) of List" :key="index">
          {{item.title}}
          <div  class="item-children"v-if="item.children">
              <detailList :List="item.children"></detailList>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'detailList',
  props: { List: Array}
}
</script>

<style lang="stylus" scoped>
.Detail_List
  width:100%
  padding-left:.5rem
  padding-bottom:4rem
.itemsty
  margin:0.5rem 0.5rem
.item-children
  width:100%
  height:3rem
  padding-left:1rem
</style>
