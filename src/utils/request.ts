import axios from 'axios'
import  { ElMessage } from "element-plus";
/**
 * vite使用process必须采用这种方式
 * import.meta.env
 */

const process = import.meta.env
const baseURL: string = (!process.DEV && process.VITE_OPEN_PROXY === 'true')
  ? process.VITE_APP_API_BASEURL + ''
  : '/api'
console.log('baseURL', baseURL)
const install = axios.create({
  baseURL: baseURL,
  timeout: 20000
})


/**
 * 请求拦截器
 */
install.interceptors.request.use(config => {
  //将token写入请求头
  if (window.localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`;
  }
  return config
}, error => {
  console.log('error', error)
})

/**
 * 响应拦截器
 */
install.interceptors.response.use(response => {
  if (response.data.code === -1) {
    ElMessage({
      message: response.data.data.message,
      type:'warning',
      duration:1000
    });
  } else if (response.status === 200) {
    return Promise.resolve(response.data)
  } 
  return response
}, error => {
  console.log('error', error)
})



function request(params: any) {
  return new Promise((resolve, reject) => {
    install.request(params)
      .then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
  })
}


export default request