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
    url: '/user/info',
    method: 'get',
    params: { token }
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
      'Authorization': 'Basic ' + btoa('crm-wx' + ':' + 'tianwu_crm')
    },
    data: {
      grant_type: 'password',
      username: user,
      password: pass
    }
  })
}
