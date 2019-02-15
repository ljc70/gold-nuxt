<template>
  <section class="container">
    <DropDown :cateList="cateList" :position="position" />
    <div class="show_top">
      <Scroll :on-reach-edge="handleReachBottom" :height="690" :loading-text="loadText">
        <ListItem v-for="(item, index) in list" :key="index" :item="item" />
      </Scroll>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import DropDown from '~/components/DropDown'
import ListItem from '~/components/ListItem'

export default {
  data () {
    return {
      loadText: '加载中...',
    }
  },
  computed: {
    ...mapState([
      // 映射 this.xxx 为 store.state.xxx
      'list',
      'cateList',
      'position'
    ]),
  },
  async fetch ({ store, params }) {
    const cateList = store.state.cateList.map(x => {
      return x.tag
    })
    const position = cateList.findIndex(value => {
      return value === params.category
    })
    const id = store.state.cateList[position].id
    const param = {
      src: 'web',
      limit: '20',
      category: id
    }
    const res = await store.dispatch('refreshList', param)

    store.commit('pushPosition', position) 
    store.commit('refreshList', res.data.entrylist)
  },
  components: {
    DropDown,
    ListItem
  },
  mounted () {
  },
  methods: {
    async loadMore () {
      const rankIndex = this.list[this.list.length - 1].rankIndex
      const id = this.cateList[this.position].id
      const param = {
        src: 'web',
        limit: '20',
        category: id,
        before: rankIndex
      }
      const res = await this.$store.dispatch('updateList', param)
      this.$store.commit('updateList', res.data.entrylist)
    },
    async refresh () {
      const id = this.cateList[this.position].id
      const param = {
        src: 'web',
        limit: '20',
        category: id
      }
      const res = await this.$store.dispatch('refreshList', param)
      this.$store.commit('refreshList', res.data.entrylist)
    },
    handleReachBottom (dir) {
      if (dir === 1) {
        this.loadText = '刷新中...'
        this.refresh()
      } else {
        this.loadText = '加载中...'
        this.loadMore()
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.show_top
  margin-top 60px
</style>
