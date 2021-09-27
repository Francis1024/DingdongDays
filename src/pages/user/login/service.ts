import request from '@/utils/request'
import type { loginParams } from './types'
/**
 * 登录
 * @param params
 * @returns
 */
export function login(data: loginParams) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
