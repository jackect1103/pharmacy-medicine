import request from "@/utils/request"

export function findWarehouseHandle (data){
  return request({
    url: '/warehouse/findWarehouseHandle',
    method: 'get',
    data
  })
}

export function addWarehouseHandle (data){
  return request({
    url: '/warehouse/addWarehouseHandle',
    method: 'post',
    data
  })
}

export function updateWarehouseHandle (data){
  return request({
    url: '/warehouse/updateWarehouseHandle',
    method: 'post',
    data
  })
}

export function deleteWarehouseHandle (data){
    return request({
      url: '/warehouse/deleteWarehouseHandle',
      method: 'post',
      data
    })
  }
