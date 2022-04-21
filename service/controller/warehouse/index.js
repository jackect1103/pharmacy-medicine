import warehouseModelService from '../../service/warehouse.js'
class WarehouseController {


  /**
   * 添加仓库
   * @param {*} ctx 
   */
  async addWarehouseHandle(ctx) {
    const req = ctx.request.body
    ctx.response.status = 416;
    ctx.body = {
      code: -1,
      message: '参数不齐全'
    }
  }

  /**
   * 修改仓库
   * @param {*} ctx 
   */
   async updateWarehouseHandle(ctx) {
    const req = ctx.request.body
    ctx.response.status = 416;
    ctx.body = {
      code: -1,
      message: '参数不齐全'
    }
  }

  /**
   * 删除仓库
   * @param {*} ctx 
   */
   async deleteWarehouseHandle(ctx) {
    const req = ctx.request.body
    ctx.response.status = 416;
    ctx.body = {
      code: -1,
      message: '参数不齐全'
    }
  }
}

const warehouseController = new WarehouseController()
export default warehouseController