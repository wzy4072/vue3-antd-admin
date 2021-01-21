import http from '@/utils/http/axios'
import { LoginParams } from './model/yunModel'
const baseUrl = '/businessBasic'
enum Api {
  login = '/businessBasic/businessBasic/userLogin/login',
  logout = '/businessBasic/userLogin/loginOut',
  getMenu = '/businessBasic/menumanage/widget_menu'
}

/**
 * @description: 用户登录
 */
export function login(params: LoginParams) {
  return http.request(
    {
      url: Api.login,
      method: 'POST',
      params
    },
    {
      isTransformRequestResult: false
    }
  )
}

/**
 * @description: 用户登出
 */
export function logout(params) {
  return http.request({
    url: Api.logout,
    method: 'POST',
    params
  })
}
