const axios = require('axios')

//文章列表
exports.list = async (ctx, next) => {
  const { src, limit, category, before } = ctx.query
  let result = await axios.get('https://timeline-merger-ms.juejin.im/v1/get_entry_by_rank', {
    params: {
      src: src,
      limit: limit,
      category: category,
      before: before
    }
  })
  
  ctx.body = result.data.d
}

//搜索
exports.search = async (ctx, next) => {
  const { query } = ctx.query
  let result = await axios.get('https://search-merger-ms.juejin.im/v1/search', {
    params: {
      query: query,
      page: 0,
      raw_result: false,
      src: 'web'
    }
  })
  
  ctx.body = result.data.d
}