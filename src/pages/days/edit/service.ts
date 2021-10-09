import request from '@/utils/request'
import type { DayParams, getDayDetailsParams } from './types'
/**
 * 创建日子
 * @param params
 * @returns
 */
export function createDay(data: DayParams) {
  return request({
    url: '/day/create',
    method: 'post',
    data
  })
}

/**
 * 编辑日子
 * @param params
 * @returns
 */
export function editDay(data: DayParams) {
  return request({
    url: '/day/edit',
    method: 'put',
    data
  })
}

/**
 * 获取日子详情
 * @param params
 * @returns
 */
export function getDayDetails(params: getDayDetailsParams) {
  return request({
    url: '/day/details',
    method: 'get',
    params
  })
}
