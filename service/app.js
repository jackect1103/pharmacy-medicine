
import Koa from 'koa'
import path from 'path';
import KoaStatic from 'koa-static'
import koaBody  from 'koa-body'

// 接口
import loginRouter from './router/login/index.js'
import shopListRouter from './router/shopList/index.js'

const __dirname = path.resolve();
// 处理POST请求参数
const app = new Koa()
const PORT = 10086 ;

app.use(KoaStatic(
  path.join( __dirname,  "/public")
))

app.use(koaBody({
  multipart:true, // 支持文件上传
  // encoding:'gzip',
  formidable:{
    uploadDir:path.join(__dirname,'public/upload/'), // 设置文件上传目录
    keepExtensions: true,    // 保持文件的后缀
    maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
    onFileBegin:(name,file) => { // 文件上传前的设置
      // console.log(`name: ${name}`);
      // console.log(file);
    },
  }
}));



app.use(shopListRouter.routes()).use(shopListRouter.allowedMethods())// 允许http请求的所有方法
app.use(loginRouter.routes()).use(loginRouter.allowedMethods())// 允许http请求的所有方法


app.listen(PORT,() => {
  console.log(`启动成功，${ "http://127.0.0.1"}:${PORT}`);
});