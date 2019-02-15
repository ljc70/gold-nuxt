<template>
  <div>
    <div class="header">
       <Input v-model="input">
        <button slot="append">
          <Icon type="ios-search" @click="search" />
        </button>
        <button slot="append">
          <span @click="back">取消</span>
        </button>
      </Input>
    </div>
    <div class="show_top">
      <ListItem v-for="(item, index) in result" :key="index" :item="item" />
    </div>
  </div>
</template>
<script>
import ListItem from '~/components/ListItem'

export default {
  data () {
    return {
      input: '',
      result: []
    }
  },
  components: {
    ListItem
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    async search () {
      if (this.input !== '') {
        let res = await this.$store.dispatch('search', {
          query: this.input
        })
        this.result = res.data
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.header
  position fixed
  width 100%
  height 60px
  font-size 24px
  top 0
  left 0
  background #fff
  z-index 10000
  display flex
  align-items center
  justify-content center
  padding 0 30px
  border-bottom 1px solid #edeeef
  & button
    color #007fff
    margin 0 10px
.show_top
  margin-top 60px
</style>