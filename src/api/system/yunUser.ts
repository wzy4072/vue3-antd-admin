import http from '@/utils/http/axios'
import { LoginParams } from './model/yunModel'
const baseUrl = '/businessBasic'
enum Api {
  login = '/businessBasic/businessBasic/userLogin/login',
  logout = '/businessBasic/userLogin/loginOut',
  leftMenuTreeBean = '/businessBasic/businessBasic/menuManage/leftMenuTreeBean',
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
      isParseToJson: true,
      isShowMessage: true,
      successMessageText: 'YUN登录成功'
    }
  )
}
/**
 * @description: 用户菜单
 */
export function leftMenuTreeBean() {
  return http.request(
    {
      url: Api.leftMenuTreeBean,
      method: 'POST'
    },
    {}
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
