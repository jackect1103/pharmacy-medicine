import Mock from 'mockjs'
const Random = Mock.Random
class ShopListController{
  constructor(){
    this.dataList = []
    for (let i = 0; i < 100; i++) {
      let name = Random.cname()
      this.dataList.push({
        id: i,
        name,
        Date: Random.date('yyyy-MM-dd') ,
        price: Random.integer(10,1000),
        Address: Random.city(true),
        image:Random.image('160×160', Mock.Random.color(), '#fda100', name).replace(
          '×',
          'x'
        )
      })
    }
  }

  getList(ctx,next){
    const info = ctx.request.body;
    let dataList = this.dataList
    const [index, size, total] = [info.pageIndex - 1, info.pageSize, dataList.length]
    const len= total / size
    const totalPages = len - parseInt(len) >= 0 ? parseInt(len) + 1 : len
    const newDataList = dataList.slice(index * size, (index + 1) * size)
    ctx.body = {
      'code':0,
      'data':{
        'total': dataList.length,
        'data': newDataList,
        'totalPages': totalPages
      },
      "message": "OK!",
      "msg": "OK!",
      "subCode": null,
      "subMsg": null
    }
  }
  
  addItem(ctx) {
    const body = ctx.request.body
    if (Object.keys(body).length > 0) {
      body.id = this.dataList.length 
      this.dataList.unshift(body)
      ctx.body = {
        'code':0,
        'data':body,
        "message": "添加商品成功!",
        "msg": "OK!",
        "subCode": null,
        "subMsg": null
      }
    }

  }

  update(ctx,next) {
    const info = ctx.query;
    let curItem = {};
    let result = {}
    
    if (Object.keys(info).length != 0) {
      this.dataList = this.dataList.map(item => {
        if ( item.id == info.id ){
          for (const key of Object.keys(info)) {
            item[key] = info[key]
          }
          curItem = item
        }
        return item
      })
      result = {
        'code':0,
        'data':curItem,
        "message": "修改成功!",
        "msg": "OK!",
        "subCode": null,
        "subMsg": null
      }
    } else {
      result = {
        'code':0,
        "message": `修改失败，商品id=${info?.id}!`,
        "msg": "OK!",
        "subCode": null,
        "subMsg": null
      }
    }
    ctx.body = result
  }

  delete (ctx,next){
    const info = ctx.request.body;
    let body = {}
    if (Object.keys(info).length !== 0) {
      this.dataList.splice(info.id, 1);
      body = {
        'code':0,
        "message": "删除成功!",
        "msg": "OK!",
        "subCode": null,
        "subMsg": null
      }
    } else {
      body = {
        'code':0,
        "message": "删除失败!",
        "msg": "OK!",
        "subCode": null,
        "subMsg": null
      }
    }
    ctx.body = body
  }

  upload (ctx,next){
    const { name, path: filePath, size, type } = ctx.request.files.file
    ctx.body = {
      name, // 文件名称
      filePath, // 临时路径
      size, // 文件大小
      type // 文件类型
    }
  }
}


const shopListController = new ShopListController()
export default shopListController