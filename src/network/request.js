import axios from 'axios'
export function request(config) {
  //1.创建axios实例
  const instance1 = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  //2.局部拦截器
  //2.1请求拦截
  instance1.interceptors.request.use(
    aaa => {
      return aaa
    },
    err => {})
  //2.2响应拦截
  instance1.interceptors.response.use(
    res => {
      return res.data
    },
    err => {
      console.log(err);
    }
  )
  //3.发送网络请求
  return instance1(config)
}
