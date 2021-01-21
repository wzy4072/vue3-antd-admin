import {RouterView} from 'vue-router'
import {markRaw} from "vue";
import {RouterTransition} from "@/components/transition";

export const constantRouterComponents = {
    '/system': markRaw(RouterTransition), // 系统管理
    '/system/access': () => import(/* webpackChunkName: "system-access" */ '@/views/auth/system/access/index.vue'), // 资源管理
    '/system/account': () => import(/* webpackChunkName: "system-account" */ '@/views/auth/system/account/index.vue'), // 账号管理
    '/system/dict': () => import(/* webpackChunkName: "system-dict" */ '@/views/auth/system/dict/index.vue'), // 字典管理
    '/system/role': () => import(/* webpackChunkName: "system-role" */ '@/views/auth/system/role/index.vue'), // 角色管理

 '/businessBasic/steupBlackWhiteList': () => import(/* webpackChunkName: "steupBlackWhiteList" */ '@/views/basic/steupBlackWhiteList.vue'),
 '/businessBasic/unitManage': () => import(/* webpackChunkName: "unitManage" */ '@/views/basic/unitManage.vue'),
 '/businessBasic/userManage': () => import(/* webpackChunkName: "userManage" */ '@/views/basic/userManage.vue'),
 '/businessBasic/roleManage': () => import(/* webpackChunkName: "roleManage" */ '@/views/basic/roleManage.vue'),
 '/businessBasic/accountGrantManage': () => import(/* webpackChunkName: "accountGrantManage" */ '@/views/basic/accountGrantManage.vue'),
 '/businessBasic/parameterManage': () => import(/* webpackChunkName: "parameterManage" */ '@/views/basic/parameterManage.vue'),
 '/businessBasic/accountQuotaMaintenance': () => import(/* webpackChunkName: "accountQuotaMaintenance" */ '@/views/basic/accountQuotaMaintenance.vue'),
 '/businessBasic/blackAndWhite': () => import(/* webpackChunkName: "blackAndWhite" */ '@/views/basic/blackAndWhite.vue'),
 '/businessBasic/userLog/userLogQuery': () => import(/* webpackChunkName: "userLog/userLogQuery" */ '@/views/basic/userLog/userLogQuery.vue'),
 '/businessBasic/workflow': () => import(/* webpackChunkName: "workflow" */ '@/views/basic/workflow/workflow.vue'),
 '/businessBasic/workflow/processConfigurationMain': () => import(/* webpackChunkName: "workflow/processConfigurationMain" */ '@/views/basic/workflow/processConfigurationMain.vue'),
}
