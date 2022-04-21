import durpInfosModelService from '../../service/durpInfos.js'
class DurpInfosController {


  /**
   * 查询药品
   * @param {*} ctx 
   */
   async findDrugHandle(ctx) {
    const query = await durpInfosModelService.getDurpInfosInfo();
    const req = ctx.request.body
    ctx.response.status = 416; 
    ctx.body = {
      code: -1,
      message: '参数不齐全'
    }
  }

  /**
   * 添加药品
   * @param {*} ctx 
   */
  async addDrugHandle(ctx) {
    const req = ctx.request.body
    ctx.response.status = 416;
    ctx.body = {
      code: -1,
      message: '参数不齐全'
    }
  }

  /**
   * 修改药品
   * @param {*} ctx 
   */
   async updateDrugHandle(ctx) {
    const req = ctx.request.body
    ctx.response.status = 416;
    ctx.body = {
      code: -1,
      message: '参数不齐全'
    }
  }

  /**
   * 删除药品
   * @param {*} ctx 
   */
   async deleteDrugHandle(ctx) {
    const req = ctx.request.body
    ctx.response.status = 416;
    ctx.body = {
      code: -1,
      message: '参数不齐全'
    }
  }
}

const durpInfosController = new DurpInfosController()
export default durpInfosController