<script>
import NavTags from './NavTags'
export default {
    name: 'BlogPostList',
    components:{
      NavTags
    },
    props: {
        pages: {
            type: Array,
            default: []
        },
        pageSize: {
            type: Number,
            default: 5
        },
        startPage: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            currentPage: Math.ceil(this.startPage / this.pageSize),
            selectedTags: []
        }
    },
    computed: {
        filteredList() {
            if (this.pages) {

                return this.pages.filter(item => {
                    const isTipsPost = !!item.frontmatter.tips
                    const isReadyToPublish = new Date(item.frontmatter.date) <= new Date()
                    // check if tags contain all of the selected tags
                    const hasTags = !!item.frontmatter.tags && this.selectedTags.every((tag) => item.frontmatter.tags.includes(tag))

                    if (!isTipsPost || !isReadyToPublish || (this.selectedTags.length > 0 && !hasTags)){
                        return false
                    }

                    return true

                }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
            }
        },

        totalPages() {

            return Math.ceil(this.filteredList.length / this.pageSize)
        },
    },

    mounted() {
        console.log(this.$site)
        this.currentPage =  Math.min(Math.max(this.currentPage, 0), this.totalPages - 1)
    },

    methods: {
        isActive(tag) {
          return this.selectedTags.includes(tag)
        },
        nextPage() {
            this.currentPage = this.currentPage >= this.totalPages - 1 ? this.totalPages - 1 : this.currentPage + 1
        },
        previousPage() {
            this.currentPage = this.currentPage < 0 ? 0 : this.currentPage - 1
        },
        addTag(tag) {
            const tagExists = this.selectedTags.some(item => {
                return item === tag
            })

            if (!tagExists){
                this.selectedTags = this.selectedTags.concat(tag)
            }
        },
        removeTag(tag) {
            this.selectedTags.filter(t => t != tag)
        },
        resetTags(){
            this.selectedTags = []
        }
    }
}
</script>

<template>
	<div>
        <!-- <nav-tags :selected-tags="selectedTags" @click="addTag" @reset="resetTags"/> -->
        <div
            v-if="selectedTags.length > 0"
            class="filtered-heading"
        >
            <h2>
                Filtered by {{ selectedTags.join(',') }}
            </h2>
            <button
                type="button"
                @click="resetTags"
                class="btn clear-filter-btn"
            >
                Clear filter
            </button>
        </div>
        <ul class="blog-list">
            <li v-for="(item, index) in filteredList"
                class="blog-list__item">
                <BlogPostPreview
                    v-show="index >= currentPage * pageSize && index < (currentPage + 1) * pageSize"
                    :item="item"
                />
                <ul  class="blog-list__tags">
                    <li v-for="tag in item.frontmatter.tags">
                        <button
                          :class="{'active': isActive(tag)}"
                          class="tag-btn"
                          @click="addTag(tag)">{{ tag }}</button>
                    </li>
                </ul>
            </li>
        </ul>

        <div class="pagination">
            <button v-show="currentPage > 0"
                @click="previousPage"
                class="button--pagination"
                type="button"
            >
                Previous
            </button>
            <button v-show="currentPage < totalPages - 1"
                @click="nextPage"
                class="button--pagination"
                type="button"
            >
                Next
            </button>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.filtered-heading
  display flex
  align-items center
  justify-content center
  h2
    cursor default
    font-size 1.2rem
    color #788294
  button
    border 1px solid rgba(0,0,0,.1)
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
    cursor pointer
    &:hover
      border 1px solid $accentColor
      color $accentColor
.blog-list__tags
    list-style none
    display flex
    align-items center
    justify-content center
    .tag-btn
        padding 3px 8px
        background rgb(255,255,255)
        color rgba(0,0,0,.5)
        border 1px solid rgba(0,0,0,0)
        // border 0
        border-radius 10px
        font-size .7rem
        cursor pointer
        transition all .25s ease
        outline none
        margin 0px 3px
        &.active
          background $accentColor
          color rgb(255,255,255)
        &:hover:not(.active)
          border 1px solid $accentColor
          color $accentColor

</style>


<style lang="stylus" scoped>
.blog-list {
	padding: 0;
	margin: 0;
}

.blog-list__item {
	list-style-type: none;
    border 1px solid $borderColor
    padding 10px
    border-radius 5px
}

.blog-list__tags {
    border-top 1px solid $borderColor
}

.button--pagination {
	background-color: #32c8cf;
	border-radius: 4px;
	color: #fff;
	font-size: 0.8rem;
	padding: 0.5rem 0.75rem;
	text-transform: uppercase;
	font-weight: 700;
	box-shadow: 0 0;
	transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.button--pagination:hover {
    background-color: #fff;
    border: 1px solid #32c8cf;
    border-radius: 4px;
    color: #32c8cf;
}

.clear-filter-btn {
    align-self: center;
    margin-left: 20px;
}

.filtered-heading {
    display: flex;
}

.pagination {
    text-align: center;
}
</style>
