import http from '@/utils/http/axios'
import {UpdStatusParamsType} from '@/types/reqParamsType'
enum Api {
  getMenuTreeByGroupId = '/businessBasic/businessBasic/userManage/getUserList',
  getBasicCorpList = '/businessBasic/businessBasic/basicAuth/getBasicCorpList',
  getCertList = '/businessBasic/businessBasic/userManage/getCertList',
  checkUserIsExist = '/businessBasic/businessBasic/userManage/checkUserIsExist',
  saveUser = '/businessBasic/businessBasic/userManage/saveUser',
  updStatus = '/businessBasic/businessBasic/userManage/updStatus',
  corpManageCorpTreeList = '/businessBasic/businessBasic/corpManage/corpTreeList',
  addChildCorp = '/businessBasic/businessBasic/corpManage/addChildCorp',
  updCorpById = '/businessBasic/businessBasic/corpManage/updCorpById',
  getCorpInfoByCorpId = '/businessBasic/businessBasic/corpManage/getCorpInfoByCorpId',
  checkCorpIsExist = '/businessBasic/businessBasic/corpManage/checkCorpIsExist',
  getProvinceList = '/businessBasic/businessBasic/basicAuth/getProvinceList',
  getCityList = '/businessBasic/businessBasic/basicAuth/getCityList',
  delCorp = '/businessBasic/businessBasic/corpManage/delCorp'
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
      isTransformRequestResult: false,
      isShowMessage: true,
      isShowSuccessMessage: true,
      isShowErrorMessage: true
    }
  )
}
/**
 * @description: 更新用户状态
 */

export function updStatus(params: UpdStatusParamsType) {
  return http.request(
    {
      url: Api.updStatus,
      method: 'POST',
      params
    },
    {
      isShowMessage: true,
      isShowSuccessMessage: true,
      isShowErrorMessage: true,
      errorMessageText: '修改失败'
    }
  )
}
/**
 * @description: 单位列表
 */

export function corpManageCorpTreeList(params: {}) {
  return http.request(
    {
      url: Api.corpManageCorpTreeList,
      method: 'POST',
      params
    },
    {
      // isTransformRequestResult: false,
      isShowMessage: true,
      isShowErrorMessage: true
    }
  )
}
/**
 * @description: 新增子单位
 */
export function addChildCorp(params: {}) {
  return http.request(
    {
      url: Api.addChildCorp,
      method: 'POST',
      params
    },
    {
      // isTransformRequestResult: false,
      isShowMessage: true,
      isShowSuccessMessage: true,
      isShowErrorMessage: true
    }
  )
}

/**
 * @description: 编辑更新单位
 */
export function updCorpById(params: {}) {
  return http.request(
    {
      url: Api.updCorpById,
      method: 'POST',
      params
    },
    {
      // isTransformRequestResult: false,
      isShowMessage: true,
      isShowSuccessMessage: true,
      isShowErrorMessage: true
    }
  )
}
/**
 * @description: 单位信息
 */
export function getCorpInfoByCorpId(params: { corpId: string }) {
  return http.request(
    {
      url: Api.getCorpInfoByCorpId,
      method: 'POST',
      params
    },
    {
      // isTransformRequestResult: false,
      isShowMessage: true,
      isShowErrorMessage: true
    }
  )
}
/**
 * @description: 删除单位
 */
export function delCorp(params: { corpId: string }) {
  return http.request(
    {
      url: Api.delCorp,
      method: 'POST',
      params
    },
    {
      // isTransformRequestResult: false,
      isShowMessage: true,
      isShowSuccessMessage: true,
      isShowErrorMessage: true
    }
  )
}
/**
 * @description: 检测单位名是否重复
 */
export function checkCorpIsExist(params) {
  return http.request(
    {
      url: Api.checkCorpIsExist,
      method: 'POST',
      params
    },
    {
      isTransformRequestResult: false,
      isShowMessage: true,
      isShowErrorMessage: true
    }
  )
}

export function getProvinceList() {
  return http.request(
    {
      url: Api.getProvinceList,
      method: 'POST',
    },
    {
      // isTransformRequestResult: false,
      isShowMessage: true,
      isShowErrorMessage: true
    }
  )
}
export function getCityList(params) {
  return http.request(
    {
      url: Api.getCityList,
      method: 'POST',
      params
    },
    {
      isTransformRequestResult: false,
      isShowMessage: true,
      isShowErrorMessage: true
    }
  )
}
