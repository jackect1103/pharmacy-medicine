import userModelService from '../../service/user.js'
console.log('userModelService', userModelService.getUserInfo)
class UserController {


  /**
   * 注册账号
   * @param {*} ctx 
   */
  async registerHandle(ctx) {
    const req = ctx.request.body
    if (req.userName && req.password) {
      try {
        const query = await userModelService.getUserInfo(req?.userName,req?.password);
        if (query) {
          ctx.response.status = 200;
          ctx.body = {
            code: -1,
            message: '用户已存在'
          }
        } else {
          const allUser = await userModelService.getAllUser()
          const param = {
            userid:allUser.length + 1,
            password: req.password,
            userName: req.userName
          }
          await userModelService.userRegist(param);
          ctx.response.status = 200;
          ctx.body = {
            code: 0,
            message: '用户注册成功',
            userInfo: param
          }
        }
      } catch (error) {
        console.log('error', error)
        ctx.response.status = 416;
        ctx.body = {
          code: -1,
          message: '参数不齐全'
        }
      }
    }


  } 

  /**
   * 登录账号
   * @param {*} ctx 
   */
  async loginHandle(ctx) {
    const token = ctx.headers.authorization;
    console.log('token',  token)
    const req = ctx.request.body
    const query = await userModelService.getUserInfo(req?.userName,req?.password,req?.roleid);
    ctx.response.status = 200;
    if (query) {
      ctx.body = {
        code: 0,
        data: {
          message:'登录成功',
          token:'ccnibiufmisojffnasidhjmfjd'
        }
      }
    } else {
      ctx.body = {
        code: -1,
        data: {
          message:'登录失败',
        }
      }
    }
  }
}

const userController = new UserController()
export default userController