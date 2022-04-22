import {DataTypes,Op } from 'sequelize'
//引入db配置
import sequelize from '../config/db.js'
import { durpInfosModel } from '../models/durpInfos/index.js'
//引入数据表模型
const durpInfos = durpInfosModel(sequelize, DataTypes) 
//自动创建表
durpInfos.sync({ force: false });

class DurpInfosModelService {

  /**
   * 获取药品
   * @param {*} data 
   * @returns 
   */
  async getDurpInfosInfo(data) {
    console.log('data', data)
    let res = []
    let params = {}
    if (data.type) { // 含有参数
      params = {
        raw: true,
        where: {}
      }
      data?.durgname && (params.where.durgname = data?.durgname)
      data?.warehousename && (params.where.warehousename = data?.warehousename)
      data?.number && (params.where.number = data?.number)
      data?.factory && (params.where.factory = data?.factory)
    } 
    res = await durpInfos.findAll(params)
    console.log('res', res)
    return res
    
  }

  /**
   * 添加数据
   * @param {*} data 
   * @returns 
   */
   async createDurpInfosInfo(data) {
    let res = await durpInfos.create({...data})
    return res.dataValues
  }

  /**
   * 更新数据
   * @param {*} data 
   * @returns 
   */
  async updateDurpInfosInfo(data) {
    
    let res = durpInfos.update({
      ...data
    },{
      where:{
        id:data.id
      }
    })
    return res
  }

  /**
   * 删除数据
   * @param {*} data 
   * @returns 
   */
  async deleteDurpInfosInfo(data) {
    let res = await durpInfos.destroy({
      where:{
        id:data.id
      }
    })
    console.log('res', res)
    return res
  }
}
const durpInfosModelService = new DurpInfosModelService()
export default durpInfosModelService