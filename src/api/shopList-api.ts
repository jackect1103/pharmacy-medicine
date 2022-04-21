import request from "@/utils/request"

export function getTableList (data:any):Promise<any>{
  return request({
    url: '/shopList/getList',
    method: 'post',
    data
  })
}

export function addProductItem(data: any): Promise<any> {
  return request({
    url: '/shopList/addProduct',
    method: 'post',
    data
  })
}

export function deleteTableList(data: any): Promise<any> {
  return request({
    url: '/shopList/delete',
    method: 'post',
    data
  })
}

export function updateTableList(data: any): Promise<any> {
  return request({
    url: '/shopList/update',
    method: 'post',
    data
  })
}