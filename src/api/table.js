import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/crm/api/module/contract/listForManager',
    method: 'post',
    params
  })
}
