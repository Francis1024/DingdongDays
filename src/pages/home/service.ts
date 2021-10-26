import request from '@/utils/request'
import type { getDayListParams } from './types'

/**
 * 获取日子列表
 * @param params
 * @returns
 */
export function getDayList(params?: getDayListParams) {
  return request({
    url: '/day/list',
    method: 'get',
    params
  })
}

/**
 * 获取日子列表
 * @param params
 * @returns
 */
export function deteleDay(params?: { id: string }) {
  return request({
    url: '/day/detele',
    method: 'delete',
    params
  })
}
