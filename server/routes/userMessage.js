const router = require('koa-router')()
const UserMessageManager = require('../controllers/UserMessage-controller/UserMessage-manager')

router.prefix('/UserMessage')

router.post('/UserOfferState', UserMessageManager.UserOfferState);
router.post('/ChangePassword', UserMessageManager.ChangePassword);
router.post('/step/submitPreBaseInfo', UserMessageManager.submitPreBaseInfo);
router.post('/step/submitBankcard', UserMessageManager.submitBankcard);
router.post('/step/submitpreWorkInfo', UserMessageManager.submitpreWorkInfo);
router.post('/step/submitpreHomeInfo', UserMessageManager.submitpreHomeInfo);
router.post('/step/submitEduBgInfo', UserMessageManager.submitEduBgInfo);
router.post('/step/submitQualifyInfo', UserMessageManager.submitQualifyInfo);



module.exports = router
