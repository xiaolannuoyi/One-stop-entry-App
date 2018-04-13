const router = require('koa-router')()
const UserMessageManager = require('../controllers/UserMessage-controller/UserMessage-manager')

router.prefix('/UserMessage')

router.post('/UserOfferState', UserMessageManager.UserOfferState);
router.post('/ChangePassword', UserMessageManager.ChangePassword);

module.exports = router
