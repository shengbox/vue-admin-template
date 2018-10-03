import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/crm/api/module/contract/listForManager',
    // url: '/crm/api/mobile/product/getAllEnableProduct',
    method: 'post',
    params: {}
  })
}
