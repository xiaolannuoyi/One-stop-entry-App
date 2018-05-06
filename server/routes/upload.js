const router = require('koa-router')();

const ImgManager = require('../controllers/img-controller/img-manager')
// let ImgModel = dbHelper.getModel('image');

router.prefix('/upload')
router.post('/uploadFace', ImgManager.uploadFace);//上传头像
router.post('/findImg', ImgManager.findImg);//获取数据库图片
router.post('/uploadIDface', ImgManager.uploadIDface);//上传ID正面
router.post('/uploadIDback', ImgManager.uploadIDback);//上传ID反面

router.post('/uploadBankCard', ImgManager.uploadBankCard);//上传银行卡

router.post('/uploadDiploma', ImgManager.uploadDiploma);//上传毕业证
router.post('/uploaddegree', ImgManager.uploaddegree);//上传学生证
router.post('/uploadStudentID', ImgManager.uploadStudentID);//上传学位证
router.post('/uploadoneph', ImgManager.uploadoneph);//上传一寸照
router.post('/uploadQuit', ImgManager.uploadQuit);//上传离职证明
router.post('/uploadResidenceHomepage', ImgManager.uploadResidenceHomepage);//户口主页
router.post('/uploadResidenceOwnpage', ImgManager.uploadResidenceOwnpage);//户口个人



module.exports = router