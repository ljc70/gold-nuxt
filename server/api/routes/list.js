const router = require('koa-router')()
const user_controller = require('../controllers/list.js')

router.get('/list', user_controller.list)
router.get('/searchResult', user_controller.search)

module.exports = router