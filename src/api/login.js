import request from '@/utils/request'
import axios from 'axios'

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
    url: '/user/logout',
    method: 'post'
  })
}

export function oauth(user, pass) {
  return axios({
    method: 'post',
    url: 'https://api.joyowo.com/cloud-auth/oauth/token',
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
