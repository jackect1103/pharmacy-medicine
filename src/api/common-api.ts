import request from "@/utils/request"

export function login (data:any):Promise<any>{
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function register (data:any):Promise<any>{
  return request({
    url: '/register',
    method: 'post',
    data
  })
}
