import durpInfosModelService from '../../service/durpInfos.js'
class DurpInfosController {
 

  /**
   * 查询药品
   * @param {*} ctx 
   */
   async findDrugHandle(ctx) {
    const req = ctx.request.body
    const query = await durpInfosModelService.getDurpInfosInfo({
      type:Object.keys(req).length != 0 ,
      ...req
    });
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
   * 添加药品
   * @param {*} ctx 
   */
  async addDrugHandle(ctx) {
    const req = ctx.request.body
    const query = await durpInfosModelService.createDurpInfosInfo(req)
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
   * 修改药品
   * @param {*} ctx 
   */
  async updateDrugHandle(ctx) {
    const req = ctx.request.body
    const query = await durpInfosModelService.updateDurpInfosInfo(req)
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
   * 删除药品
   * @param {*} ctx 
   */
   async deleteDrugHandle(ctx) {
    const req = ctx.request.body
    const query = await durpInfosModelService.deleteDurpInfosInfo(req)
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

const durpInfosController = new DurpInfosController()
export default durpInfosController