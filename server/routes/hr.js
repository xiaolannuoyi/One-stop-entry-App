
const router = require('koa-router')()
// import Router from 'koa-router';
// const router = new Router();
const HrManager = require('../controllers/hr-controller/hr-manager')
// import HrManager from '../controllers/hr-controller/hr-manager'
router.prefix('/hr')
router.get('/', function (ctx, next) {
    ctx.body = 'hrhrhrhr'
  })
router.post('/regist', HrManager.regist);
router.get('/login', HrManager.login);
router.get('/findHr', HrManager.findHr);
module.exports = router
// export default router;
