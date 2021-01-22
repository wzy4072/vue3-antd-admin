import http from '@/utils/http/axios'
enum Api {
  getMenuTreeByGroupId = '/businessBasic/businessBasic/userManage/getUserList'
}

/**
 * @description: 用户列表
 */
export function getMenuTreeByGroupId(params) {
  return http.request({
    url: Api.getMenuTreeByGroupId,
    method: 'POST',
    params
  },{
    // isTransformRequestResult:false
  })
}
