<template>
  <div class="header">
    <Dropdown trigger="click">
      <span>
          {{ cateList[position].name }}
          <Icon type="ios-arrow-down"></Icon>
      </span>
      <DropdownMenu slot="list">
          <DropdownItem v-for="(item, index) in cateList" :key="index">
            <nuxt-link :to="{name: 'category', params:{category: item.tag}}">{{ item.name }}</nuxt-link>
          </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <span class="search"><nuxt-link to="/search"><Icon type="ios-search" /></nuxt-link></span>
  </div>
</template>
<script>
export default {
  props:{
    position: {
      type: Number
    },
    cateList: {
      type: Array
    }
  }
}
</script>
<style lang="stylus" scoped>
.header
  width 100%
  height 60px
  font-size 30px
  color #007fff
  display flex
  background #fff
  align-items center
  justify-content space-between
  padding 0 30px
  position fixed
  top 0
  left 0
  z-index 1000
.search
  font-size 35px
</style>