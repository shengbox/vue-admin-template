import request from '@/utils/request'
import { getToken } from '@/utils/auth'

export function getList(params) {
  return request({
    url: '/crm/api/module/contract/listForManager',
    // url: '/crm/api/mobile/product/getAllEnableProduct',
    method: 'post',
    params: { access_token: getToken() }
  })
}
