<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <button
      v-if="sidebarItems.length"
      :class="{'btn-hidden': !open}"
      @click="open = !open" class="open-side">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"></path></svg>
    </button>

    <div

      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      :open="open"
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>

    <Carbon />

    <Blog
      v-if="$page.frontmatter.blog || $page.frontmatter.tips"
      :sidebar-items="sidebarItems"
    />

    <div
      class="custom-layout"
      v-else-if="$page.frontmatter.layout"
    >
      <component :is="$page.frontmatter.layout"/>
    </div>

    <Home v-else-if="$page.frontmatter.home"/>

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>

    <SWUpdatePopup :updateEvent="swUpdateEvent"/>

    <Footerx />


  </div>
</template>

<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import Blog from './layout/Blog.vue'
import Home from './layout/Home.vue'
import Page from './layout/Page.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footerx from './components/Footerx.vue'
import Carbon from './components/Carbon.vue'
import SWUpdatePopup from './components/SWUpdatePopup.vue'
import { resolveSidebarItems } from './util'

export default {
  components: {
    Blog,
    Home,
    Page,
    Sidebar,
    Navbar,
    SWUpdatePopup,
    Footerx,
    Carbon
  },

  data () {
    return {
      isSidebarOpen: false,
      swUpdateEvent: null,
      open: false
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false ||
        themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.layout &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
    window.addEventListener('scroll', this.onScroll)

    // configure progress bar
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
      this.isSidebarOpen = false
    })

    this.$on('sw-updated', this.onSWUpdated)
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    },

    onSWUpdated (e) {
      this.swUpdateEvent = e
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="./styles/theme.styl" lang="stylus"></style>
<style lang="stylus">
.open-side
  position fixed
  top 0px
  left 0px
  z-index 3000
  width 35px
  height 35px
  cursor pointer
  outline none
  background rgb(255,255,255)
  border 1px solid $borderColor
  top 50%
  left 15rem
  border-left 0px
  border-radius 0px 4px 4px 0px
  transition all .25s ease
  &.btn-hidden
    left 0px !important

@media (max-width: $MQNarrow)
  .open-side
    left 12.299999999999999rem

@media (max-width: $MQMobile)
  .open-side
    display none
    left 12.299999999999999rem

</style>
