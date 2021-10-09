import request from '@/utils/request'
import type { createDayParams } from './types'
/**
 * 创建日子
 * @param params
 * @returns
 */
export function createDay(data: createDayParams) {
  return request({
    url: '/day/create',
    method: 'post',
    data
  })
}
