<template>
  <div >
    <ul>
      <li v-for="(item, index) in $store.state.list" :key="index">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    async fetch ({ store }) {
      const params = {
        src: 'web',
        limit: '20',
        category: '5562b415e4b00c57d9b94ac8'
      }
      const res = await store.dispatch('updateList', params)
      
      store.commit('updateList', res.data.entrylist)
 
    },
  }
</script>