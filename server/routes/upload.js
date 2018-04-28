const router = require('koa-router')();

const ImgManager = require('../controllers/img-controller/img-manager')
// let ImgModel = dbHelper.getModel('image');

router.prefix('/upload')
router.post('/uploadFace', ImgManager.uploadFace);

module.exports = router