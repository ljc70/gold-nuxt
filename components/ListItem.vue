<template>
  <div dis-hover class="item_box">
    <ul class="item_list">
      <li class="item post" v-if="item.type === 'post'">专栏</li>
      <li class="item">{{ item.user.username }}</li>
      <li class="item"><Time :time="item.createdAt" /></li>
      <li class="item">
        <span class="tag" v-if="index1 <= 2" v-for="(value, index1) in item.tags">
          {{value.title}}
        </span>
      </li>
    </ul>
    <p class="title ellipsis">{{ item.title }}</p>
    <ul class="action_list">
      <li class="like">
        <Icon type="ios-heart" />
        <span class="num">{{ item.collectionCount }}</span>
      </li>
      <li class="comment">
        <Icon type="ios-chatboxes" />
        <span class="num">{{ item.commentsCount }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:{
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="stylus" scoped>
colorLight()
  color #b2bac2
.item_box
  padding 16px 30px
.item_box:not(:last-child)
  border-bottom 1px solid rgba(178,186,194,.5)
.item_list
  display flex
  colorLight()    
  & .item:not(:last-child):after
    content "·"
    margin 0 .4em
    colorLight()
.tag:not(:last-child):after
  content "/"
  margin 0
  colorLight()
.hot
  font-weight 500
  color red
.post
  font-weight 500
  color #b71ed7
.title
  color #2e3135
  font-size 26px
  font-weight 600
  line-height 1.2
  padding 15px 0 30px
.action_list
  display flex
  colorLight()
  font-size 14px
  & li
    display flex
    align-items center
    justify-content center
    width 112px
    height 36px
    border 1px solid #edeeef
    & .num
      padding-left 10px
</style>