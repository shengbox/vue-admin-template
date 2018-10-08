import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/crm/api/module/contract/listForManager',
    // url: '/crm/api/mobile/product/getAllEnableProduct',
    method: 'post',
    params: {}
  })
}

export function getTree(params) {
  return request({
    url: '/permission/v1/organization/queryAllList',
    method: 'post',
    params: {}
  })
}
