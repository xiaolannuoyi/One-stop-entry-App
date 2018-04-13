const router = require('koa-router')()
const UserMessageManager = require('../controllers/UserMessage-controller/UserMessage-manager')

router.prefix('/UserMessage')

// router.post('/UserOfferState', UserMessageManager.UserOfferState);
router.post('/UserOfferState', UserMessageManager.UserOfferState);


module.exports = router
