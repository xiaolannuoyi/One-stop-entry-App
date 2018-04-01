
const router = require('koa-router')()
// import Router from 'koa-router';
// const router = new Router();
const HrManager = require('../controllers/hr-controller/hr-manager')
// import HrManager from '../controllers/hr-controller/hr-manager'
router.prefix('/hr')

router.post('/regist', HrManager.regist);

module.exports = router
// export default router;
