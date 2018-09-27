import request from '@/utils/request'
import axios from 'axios'

// export function login(username, password) {
//   return request({
//     url: '/user/login',
//     method: 'post',
//     data: {
//       username,
//       password
//     }
//   })
// }

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
  var oauth_token = 'https://api.joyowo.com/cloud-auth/oauth/token'
  var basicAuth = 'Basic ' + btoa('crm-wx' + ':' + 'tianwu_crm')
  axios({
    method: 'post',
    url: oauth_token,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': basicAuth
    },
    data: {
      grant_type: 'password',
      username: user,
      password: pass
    },
    transformRequest: [
      data => {
        return data ? Object.entries(data)
        .map(item => `${encodeURIComponent(item[0])}=${encodeURIComponent(item[1])}`)
        .join('&') : ''
      }
    ]
  }).then(function (response) {
    return response.data
  }).catch(function (error) {
    return Promise.reject(error)
  })
}
