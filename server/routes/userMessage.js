const router = require('koa-router')()
const UserMessageManager = require('../controllers/UserMessage-controller/UserMessage-manager')

router.prefix('/UserMessage')

router.post('/UserOfferState', UserMessageManager.UserOfferState);
router.post('/ChangePassword', UserMessageManager.ChangePassword);
//增
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
router.post('/step/editPreBaseInfo', UserMessageManager.editPreBaseInfo);
router.post('/step/editBankcard', UserMessageManager.editBankcard);
router.post('/step/editpreWorkInfo', UserMessageManager.editpreWorkInfo);
router.post('/step/editpreHomeInfo', UserMessageManager.editpreHomeInfo);
router.post('/step/editpreQualifyInfo', UserMessageManager.editpreQualifyInfo);
router.post('/step/editEduBgInfo', UserMessageManager.editEduBgInfo);
//查
router.post('/step/findPreBaseInfo', UserMessageManager.findPreBaseInfo);
router.post('/step/findbankcard', UserMessageManager.findbankcard);
router.post('/step/findworkInfo', UserMessageManager.findworkInfo);
router.post('/step/findqualifyInfo', UserMessageManager.findqualifyInfo);
router.post('/step/findhomeInfo', UserMessageManager.findhomeInfo);
router.post('/step/findedubgInfo', UserMessageManager.findedubgInfo);



module.exports = router
