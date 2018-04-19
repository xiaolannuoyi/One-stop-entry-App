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
//----删除----------
router.post('/step/delWorkInfo', UserMessageManager.delWorkInfo);
router.post('/step/delHomeInfo', UserMessageManager.delHomeInfo);
router.post('/step/delQualifyInfo', UserMessageManager.delQualifyInfo);
router.post('/step/delEdubgInfo', UserMessageManager.delEdubgInfo);

//编辑
router.post('/step/editpreWorkInfo', UserMessageManager.editpreWorkInfo);
router.post('/step/editpreHomeInfo', UserMessageManager.editpreHomeInfo);
router.post('/step/editpreQualifyInfo', UserMessageManager.editpreQualifyInfo);
router.post('/step/editEduBgInfo', UserMessageManager.editEduBgInfo);


module.exports = router
