<template>
  <ul class="ul-tags">
    <li
      :class="{'active': selectedTags.length == 0}"
      @click="$emit('reset')" class="tagx">
      All
    </li>
    <li
      :class="{'active': isActive('Announcements')}"
      @click="emit('Announcements')" class="tagx">
      Announcements
    </li>
    <li
      :class="{'active': isActive('Tutorials')}"
      @click="emit('Tutorials')" class="tagx not-found">
      Tutorials
    </li>
  </ul>
</template>
<script>
export default {
  props:['selectedTags'],
  methods: {
    emit(name) {

      this.$emit('reset')
      this.$emit('click', name)

    },
    isActive(tag) {
      return this.selectedTags.includes(tag)
    }
  }
}
</script>
<style lang="stylus" scoped>
.ul-tags
  width 100%
  display flex
  align-items center
  justify-content center
  li
    padding 1px 10px
    margin 0px 5px
    list-style none
    font-size .75rem
    border-radius 15px
    cursor pointer
    transition all .2s ease
    user-select none
    &:hover
      color $accentColor
    &.active
      background $accentColor
      color rgb(255,255,255)
    &.not-found
      text-decoration line-through
      opacity .3
      pointer-events none
      // color $accentColor !important

</style>
