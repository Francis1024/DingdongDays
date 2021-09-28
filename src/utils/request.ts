import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Toast } from 'antd-mobile'

const service = axios.create({
  baseURL: process.env.APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
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
    const msg = response?.data?.msg ?? '数据请求错误'
    if (response?.data?.code === 401) {
      localStorage.clear()
    }
    if (response.data.code !== 0) {
      Toast.show({
        content: msg,
        icon: 'fail'
      })
      return Promise.reject(new Error(msg || 'Error'))
    } else {
      return response.data
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
