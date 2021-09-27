import request from '@/utils/request'
import type { registerParams } from './types'
/**
 * 登录
 * @param params
 * @returns
 */
export function register(data: registerParams) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}
