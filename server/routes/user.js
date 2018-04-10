const router = require('koa-router')()
const UserManager = require('../controllers/user-controller/user-manager')

router.prefix('/user')

router.post('/regist', UserManager.regist);
router.get('/login', UserManager.login);
router.get('/findUser', UserManager.findUser);
router.get('/findUserOne/:UserId', UserManager.findUserOne);
router.post('/UserEdit', UserManager.UserEdit);
router.post('/UserDel', UserManager.UserDel);

module.exports = router
