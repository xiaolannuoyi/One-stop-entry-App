const router = require('koa-router')();

const ImgManager = require('../controllers/img-controller/img-manager')
// let ImgModel = dbHelper.getModel('image');

router.prefix('/upload')
router.post('/uploadFace', ImgManager.uploadFace);//上传头像
router.post('/findImg', ImgManager.findImg);//获取数据库图片
router.post('/uploadIDface', ImgManager.uploadIDface);//上传ID正面
router.post('/uploadIDback', ImgManager.uploadIDback);//上传ID反面


module.exports = router