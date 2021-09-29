import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Toast } from 'antd-mobile'

const service = axios.create({
  baseURL: process.env.APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // 错误抛到业务代码
    error.data = {}
    error.data.msg = '服务器异常，请联系管理员！'
    return Promise.resolve(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response?.data
    if (response.data.code !== 0) {
      Toast.show({
        content: res?.msg ?? '数据请求错误',
        icon: 'fail'
      })
      if (res?.code === 401) {
        localStorage.clear()
        location.replace('/user/login')
      }
      return Promise.reject(new Error(res?.msg ?? '错误'))
    } else {
      return res
    }
  },
  (error) => {
    // 错误抛到业务代码
    error.data = {}
    error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
    return Promise.resolve(error)
  }
)

export default service
