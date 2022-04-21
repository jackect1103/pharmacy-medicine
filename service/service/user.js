import {DataTypes } from 'sequelize'
//引入db配置
import sequelize from '../config/db.js'
import { userModel } from '../models/user/index.js'
//引入数据表模型
const user = userModel(sequelize, DataTypes)

//自动创建表
user.sync({ force: false });

class UserModelService {
  async userRegist(data) {
    return await user.create({
      userid: data.userid,
      username: data.userName,
      password: data.password,
    })
  }

  async getUserInfo(username,password,roleid) {
    if (username && password) {
      let res = await user.findOne({
        where: {
          username,
          password,
          roleid
        }
      })
      return res
    } 
    return false
    
  }

  async getAllUser() {
    return await user.findAll()
  }
}
const userModelService = new UserModelService()
export default userModelService