import axios from 'axios'

export const state = () => ({
  list: [],
  position: 0,
  cateList: [
    {id: '5562b415e4b00c57d9b94ac8', name: '前端', tag: 'frontend'},
    {id: '5562b410e4b00c57d9b94a92', name: 'Android', tag: 'android'},
    {id: '5562b419e4b00c57d9b94ae2', name: '后端', tag: 'backend'},
    {id: '57be7c18128fe1005fa902de', name: '人工智能', tag: 'ai'},
    {id: '5562b405e4b00c57d9b94a41', name: 'IOS', tag: 'ios'},
    {id: '5562b422e4b00c57d9b94b53', name: '工具资源', tag: 'freebie'},
    {id: '5562b428e4b00c57d9b94b9d', name: '阅读', tag: 'article'},
    {id: '5b34a478e1382338991dd3c1', name: '运维', tag: 'devops'}
  ]
})

export const actions = {
  async updateList ({ commit }, params) {
    return await axios.get('http://localhost:3000/list', {
      params: params
    })
  },
  async refreshList ({ commit }, params) {
    return await axios.get('http://localhost:3000/list', {
      params: params
    })
  },
  async search( { commit }, params ) {
    return await axios.get('http://localhost:3000/searchResult', {
      params: params
    })
  }
}

export const mutations = {
  pushPosition (state, data) {
    state.position = data
  },
  updateList (state, data) {
    state.list.push(...data)
  },
  refreshList (state, data) {
    state.list = data
  }
}


