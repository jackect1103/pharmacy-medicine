import {DataTypes ,Op} from 'sequelize'
//引入db配置
import sequelize from '../config/db.js'
import { warehouseModel } from '../models/warehouse/index.js'
//引入数据表模型
const warehouse = warehouseModel(sequelize, DataTypes)

//自动创建表
warehouse.sync({ force: false });

class WarehouseModelService {


  async getWarehouseInfo() {
    return await warehouse.findAll()
  }

  /**
   * 添加数据
   * @param {*} data 
   * @returns 
   */
   async createWarehouseInfo(data) {
     console.log('data', data)
    let res = await warehouse.create({...data})
    return res.dataValues
  }

  /**
   * 更新数据
   * @param {*} data 
   * @returns 
   */
   async updateWarehouseInfo(data) {
    
    let res = warehouse.update({
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
   async deleteWarehouseInfo(data) {
    let res = await warehouse.destroy({
      where:{
        id:data.id
      }
    })
    console.log('res', res)
    return res
  }

}
const warehouseModelService = new WarehouseModelService()
export default warehouseModelService