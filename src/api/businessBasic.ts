import http from '@/utils/http/axios'
enum Api {
  getMenuTreeByGroupId = '/businessBasic/businessBasic/userManage/getUserList',
  getBasicCorpList = '/businessBasic/businessBasic/basicAuth/getBasicCorpList',
  getCertList = '/businessBasic/businessBasic/userManage/getCertList',
  checkUserIsExist = '/businessBasic/businessBasic/userManage/checkUserIsExist',
  saveUser = '/businessBasic/businessBasic/userManage/saveUser'
}

/**
 * @description: 用户列表
 */
export function getMenuTreeByGroupId(params) {
  return http.request(
    {
      url: Api.getMenuTreeByGroupId,
      method: 'POST',
      params
    },
    {
      // isTransformRequestResult:false
    }
  )
}
/**
 * @description: 单位树
 */
export function getBasicCorpList(params) {
  return http.request({
    url: Api.getBasicCorpList,
    method: 'POST',
    params
  })
}
/**
 * @description: 证件类型
 */
export function getCertList() {
  return http.request({
    url: Api.getCertList,
    method: 'POST'
  })
}

/**
 * @description: 用户名重复
 */

export function checkUserIsExist(params: { loginName: string }) {
  return http.request(
    {
      url: Api.checkUserIsExist,
      method: 'POST',
      params
    },
    {
      isTransformRequestResult: false
    }
  )
}
/**
 * @description: 保存用户
 */

export function saveUser(params: { loginName: string }) {
  return http.request(
    {
      url: Api.saveUser,
      method: 'POST',
      params
    },
    {
      isTransformRequestResult: false
    }
  )
}