import request from "@/utils/request"

export function findDrugHandle (data){
    return request({
      url: '/durpInfos/findDrugHandle',
      method: 'post',
      data
    })
}
  
export function addDrugHandle (data){
  return request({
    url: '/durpInfos/addDrugHandle',
    method: 'post',
    data
  })
}

export function updateDrugHandle (data){
  return request({
    url: '/durpInfos/updateDrugHandle',
    method: 'post',
    data
  })
}

export function deleteDrugHandle (data){
    return request({
      url: '/durpInfos/deleteDrugHandle',
      method: 'post',
      data
    })
  }
