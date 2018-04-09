
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
router.get('/findHrOne/:hrId', HrManager.findHrOne);
router.post('/hrEdit', HrManager.hrEdit);
router.post('/hrDel', HrManager.hrDel);


// 1
// user/login/:account/:password

// user/login/ljy/123

// ctx.params.account
// ctx.params.password

// 2
// user/login

// user/login?account=ljy

// ctx.query.account
// router.get('/findHrOne/:id', HrManager.findHrOne);
module.exports = router
// export default router;
