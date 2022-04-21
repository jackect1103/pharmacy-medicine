import {DataTypes } from 'sequelize'
//引入db配置
import sequelize from '../config/db.js'
import { warehouseModel } from '../models/warehouse/index.js'
//引入数据表模型
const warehouse = warehouseModel(sequelize, DataTypes)

//自动创建表
warehouse.sync({ force: false });

class WarehouseModelService {


  async getWarehouseInfo(username,password,roleid) {
    if (username && password) {
      let res = await warehouse.findOne({
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

}
const warehouseModelService = new WarehouseModelService()
export default warehouseModelService