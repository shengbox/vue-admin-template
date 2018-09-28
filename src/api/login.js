import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/cloud-auth/user',
    method: 'get',
    params: { access_token: token }
  })
}

export function logout() {
  return request({
    url: '/cloud-auth/oauth/token',
    method: 'delete',
    headers: {
      'Authorization': 'Basic ' + btoa('crm-wx' + ':' + 'tianwu_crm')
    },
    params: { access_token: 'acb1c903-0b16-4341-a9cd-f780c24b964b' }
  })
}

export function oauth(user, pass) {
  return request({
    method: 'post',
    url: '/cloud-auth/oauth/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa('crm-wx' + ':' + 'tianwu_crm')
    },
    transformRequest: [function(data) {
      let ret = ''
      for (const it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    data: {
      grant_type: 'password',
      username: user,
      password: pass
    }
  })
}
