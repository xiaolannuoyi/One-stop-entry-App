const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const koaBody = require('koa-body');
const logger = require('koa-logger')

const index = require('./routes/index')
const user = require('./routes/user')
const hr = require('./routes/hr')
const userMessage = require('./routes/userMessage')
const upload = require('./routes/upload')
//引入mongoose
const mongoose = require('mongoose');
//引入koa2-cors，解决前后端跨域问题
var cors = require('koa2-cors');
app.use(cors());
//数据结构表存入数据库
require('./lib/dbHelper')
//连接数据库
mongoose.connect(
  `mongodb://localhost:27017/hr`
);
mongoose.connection.on('open', function () {
  console.log('数据库连接成功!');
});


// error handler
onerror(app)

// middlewares
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024 // 设置上传文件大小最大限制，默认2M
  }
}));
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(hr.routes(), hr.allowedMethods())
app.use(userMessage.routes(), userMessage.allowedMethods())
app.use(upload.routes(), upload.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
