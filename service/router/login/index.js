
import KoaRouter from 'koa-router'
const loginRouter = new KoaRouter() 

import userController from '../../controller/user/index.js'

// 登录
loginRouter.post('/login', userController.loginHandle.bind(userController));
loginRouter.post('/register', userController.registerHandle.bind(userController));







export default loginRouter;