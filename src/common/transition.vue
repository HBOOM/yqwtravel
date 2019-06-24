<template>
    <transition>
        <slot></slot>
    </transition>
</template>
<script>
export default {
  name: 'transition'
}
</script>
<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
