import {DataTypes } from 'sequelize'
//引入db配置
import sequelize from '../config/db.js'
import { durpInfosModel } from '../models/durpInfos/index.js'
//引入数据表模型
const durpInfos = durpInfosModel(sequelize, DataTypes) 
console.log('durpInfos', durpInfos)
//自动创建表
durpInfos.sync({ force: false });

class DurpInfosModelService {


  async getDurpInfosInfo() {
    // if (username && password) {
    //   let res = await durpInfos.findOne({
    //     where: {
    //       username,
    //       password,
    //       roleid
    //     }
    //   })
    //   return res
    // } 
    // return false
    
  }

  async getAllUser() {
    return await user.findAll()
  }
}
const durpInfosModelService = new DurpInfosModelService()
export default durpInfosModelService