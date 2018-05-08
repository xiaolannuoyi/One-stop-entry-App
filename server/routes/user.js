const router = require('koa-router')()
const UserManager = require('../controllers/User-controller/User-manager')

router.prefix('/user')

router.post('/regist', UserManager.regist);
router.get('/login', UserManager.login);
router.get('/findUser', UserManager.findUser);
router.get('/findUserOne/:UserId', UserManager.findUserOne);
router.post('/UserEdit', UserManager.UserEdit);
router.post('/UserDel', UserManager.UserDel);
router.post('/UserResetPassword', UserManager.UserResetPassword);
//提交审核
router.post('/confirmCherk', UserManager.confirmCherk);
//查找offState=3
router.get('/findcheck', UserManager.findcheck);
router.get('/findusercheckMsg/:UserId', UserManager.findusercheckMsg);
module.exports = router
