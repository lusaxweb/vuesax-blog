<script>
export default {
    name: 'BlogPostPreview',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        formatPublishDate() {
            const dateFormat = new Date(this.item.frontmatter.date)
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }

            return dateFormat.toLocaleDateString('en-US', options)
        }
    }
}
</script>

<template>
	<section class="sectionx">
        <time class="timex">{{ formatPublishDate }} <span class="divider" /> <span class="estimated" v-if="item.readingTime">{{ item.readingTime.text }}</span></time>
        <h3 class="blog-post__title">{{ item.frontmatter.title }}</h3>
        <p class="des" v-if="item.frontmatter.excerpt">{{ item.frontmatter.excerpt }}</p>

        <router-link class="button blog-post__button" :to="item.path">Read More</router-link>
    </section>
</template>

<style lang="stylus" scoped>
  .button
    margin-bottom 1rem
    border 1px solid $borderColor
    border-radius 5px
    color rgba(0,0,0,.5)
    font-size 0.75rem
    padding 6px 12px
    font-weight 700
    transition all .25s ease
    display block
    position relative
    outline none
    text-decoration none !important
    font-style none
    display inline-block
    background rgb(255,255,255)
    &:hover
      // background $accentColor
      border 1px solid $accentColor
      color $accentColor

  .divider
    position relative
    padding-left .3rem
    padding-right .3rem
    &:after
      position relative
      display block
      content '\00B7'
      font-size 20px !important

  .estimated
    font-size .7rem
    display block
  .sectionx
    position relative
    padding-left 15px
    .des
      font-size .9rem
      opacity .7

  .timex
    padding 0px 10px
    position absolute
    top -35px
    font-size .8rem
    right -25px
    border-radius 10px
    background rgb(255,255,255)
    border 1px solid rgba(0,0,0,.1)
    display flex
    align-items center
    justify-content center

  .blog-post__title
    margin-top 0.5rem

  .tag-list
    list-style none
    padding-left 0
    display flex
    margin-bottom 25px

  .tag-list__item
    margin-left 10px

  .tag-list__itemfirst-child
    margin-left: 0

</style>


