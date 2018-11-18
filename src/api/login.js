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
    url: '/oauth/user',
    method: 'get',
    params: {}
  })
}

export function logout(token) {
  return request({
    url: '/uc/user/token',
    method: 'delete',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [function(data) {
      let ret = ''
      for (const it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    data: { token }
  })
}

export function oauth(user, pass) {
  return request({
    method: 'post',
    url: '/oauth/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa('little-app' + ':' + 'secret')
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
