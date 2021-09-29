import request from '@/utils/request'
import type { getDayListParams } from './types'

/**
 *
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
