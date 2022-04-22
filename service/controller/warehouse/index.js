import warehouseModelService from '../../service/warehouse.js'
class WarehouseController {


  /**
   * 查询药品
   * @param {*} ctx 
   */
   async findWarehouseHandle(ctx) {
    const req = ctx.request.body
    const query = await warehouseModelService.getWarehouseInfo();
    if (query) {
      ctx.body = {
        code: 0,
        data: {
          message:'查询成功',
          data:[...query],
        }
      }
    }else {
      ctx.body = {
        code: -1,
        data: {
          message:'查询失败',
        }
      }
    }
  }

  /**
   * 添加仓库
   * @param {*} ctx 
   */
  async addWarehouseHandle(ctx) {
    const req = ctx.request.body
    const query = await warehouseModelService.createWarehouseInfo(req)
    if (query) {
      ctx.body = {
        code: 0,
        data: {
          message:'添加成功'
        }
      }
    }else {
      ctx.body = {
        code: -1,
        data: {
          message:'添加失败',
        }
      }
    }
  }

  /**
   * 修改仓库
   * @param {*} ctx 
   */
   async updateWarehouseHandle(ctx) {
    const req = ctx.request.body
    const query = await warehouseModelService.updateWarehouseInfo(req)
    console.log('query', query)
    if (query[0] > 0) {
      ctx.body = {
        code: 0,
        data: {
          message:'修改成功'
        }
      }
    }else {
      ctx.body = {
        code: -1,
        data: {
          message:'修改失败',
        }
      }
    }
  }

  /**
   * 删除仓库
   * @param {*} ctx 
   */
   async deleteWarehouseHandle(ctx) {
    const req = ctx.request.body
    const query = await warehouseModelService.deleteWarehouseInfo(req)
    if (query > 0) {
      ctx.body = {
        code: 0,
        data: {
          message:'删除成功'
        }
      }
    }else {
      ctx.body = {
        code: -1,
        data: {
          message:'删除失败',
        }
      }
    }
  }
}

const warehouseController = new WarehouseController()
export default warehouseController