interface YunMenuItem {
  id: string;
  url: string;
  icon?: string;
  [key: string]: any;
}

function formMatMenus(list) {
  const newList: YunMenuItem[] = []
  list.map(item => {
    const { icon, menuId, menuName: name, parentId, url, list: cList } = item
    const nItem = {
      icon,
      id: menuId,
      keepAlive: 1,
      name,
      parentId: parentId === '0' ? -1 : parentId,
      sort: 1,
      url
    }
    newList.push(nItem)
    if (cList.length) {
      newList.push(...formMatMenus(cList))
    }
  })
  return newList
}
const yunMenus = [
  {
    menuId: '40f88a68f6de436b9ffc3befa6f421e1',
    menuCode: 'sys',
    menuName: '设置黑白名单-新增',
    parentId: '12aa32abf61c4797a2cd29fcc289c0ad',
    icon: '',
    url: '/businessBasic/steupBlackWhiteList',
    list: [],
    keepAlive: '',
    component: '/businessBasic/steupBlackWhiteList',
    redirect: '',
    hidden: '1',
    vueName: 'steupBlackWhiteList',
    mainId: '40cd0a780c8b4eb0a3939175c2081981'
  },
  {
    menuId: '12aa32abf61c4797a2cd29fcc289c0ad',
    menuCode: 'sys',
    menuName: '基础管理',
    parentId: '0',
    icon: 'icon-gonggao',
    url: '/businessBasic',
    list: [
      {
        menuId: '09fae514abc3496bbc9ec77689428320',
        menuCode: 'sys',
        menuName: '单位管理',
        parentId: '12aa32abf61c4797a2cd29fcc289c0ad',
        icon: '',
        url: '/businessBasic/unitManage',
        list: [],
        keepAlive: '',
        component: '/businessBasic/unitManage',
        redirect: '',
        hidden: '0',
        vueName: 'unitManage',
        mainId: '0'
      },
      {
        menuId: '1af7afe82fbf4eee865fefdec1c1505e',
        menuCode: 'sys',
        menuName: '用户管理',
        parentId: '12aa32abf61c4797a2cd29fcc289c0ad',
        icon: '',
        url: '/businessBasic/userManage',
        list: [],
        keepAlive: '',
        component: '/businessBasic/userManage',
        redirect: '',
        hidden: '0',
        vueName: 'userManage',
        mainId: '0'
      },
      {
        menuId: '5ef1409b6c2742fab79be65eb67a4b41',
        menuCode: 'sys',
        menuName: '角色管理',
        parentId: '12aa32abf61c4797a2cd29fcc289c0ad',
        icon: '',
        url: '/businessBasic/roleManage',
        list: [],
        keepAlive: '',
        component: '/businessBasic/roleManage',
        redirect: '',
        hidden: '0',
        vueName: 'roleManage',
        mainId: '0'
      },
      {
        menuId: '9cd19bbcf56342eea467fb5a47790ca1',
        menuCode: 'sys',
        menuName: '账户权限管理',
        parentId: '12aa32abf61c4797a2cd29fcc289c0ad',
        icon: '',
        url: '/businessBasic/accountGrantManage',
        list: [],
        keepAlive: '',
        component: '/businessBasic/accountGrantManage',
        redirect: '',
        hidden: '0',
        vueName: 'accountGrantManage',
        mainId: '0'
      },
      {
        menuId: '81b588b4f37d40cfafcc5ece518bcf01',
        menuCode: 'sys',
        menuName: '参数管理',
        parentId: '12aa32abf61c4797a2cd29fcc289c0ad',
        icon: '',
        url: '/businessBasic/parameterManage',
        list: [],
        keepAlive: '',
        component: '/businessBasic/parameterManage',
        redirect: '',
        hidden: '0',
        vueName: 'parameterManage',
        mainId: '0'
      },
      {
        menuId: 'd2207a5741f64606900987c796acb9a1',
        menuCode: 'sys',
        menuName: '账户限额维护',
        parentId: '12aa32abf61c4797a2cd29fcc289c0ad',
        icon: '',
        url: '/businessBasic/accountQuotaMaintenance',
        list: [],
        keepAlive: '',
        component: '/businessBasic/accountQuotaMaintenance',
        redirect: '',
        hidden: '0',
        vueName: 'accountQuotaMaintenance',
        mainId: '0'
      },
      {
        menuId: '40cd0a780c8b4eb0a3939175c2081981',
        menuCode: 'sys',
        menuName: '黑白名单管理',
        parentId: '12aa32abf61c4797a2cd29fcc289c0ad',
        icon: '',
        url: '/businessBasic/blackAndWhite',
        list: [],
        keepAlive: '',
        component: '/businessBasic/blackAndWhite',
        redirect: '',
        hidden: '0',
        vueName: 'blackAndWhite',
        mainId: '0'
      },
      {
        menuId: '75ea0dbbf2264980ba7ff9cdb13d3eb6',
        menuCode: 'sys',
        menuName: '用户日志',
        parentId: '12aa32abf61c4797a2cd29fcc289c0ad',
        icon: '',
        url: '/businessBasic/userLog/userLogQuery',
        list: [],
        keepAlive: '',
        component: '/businessBasic/userLog',
        redirect: '',
        hidden: '0',
        vueName: 'userLog',
        mainId: '0'
      },
      {
        menuId: '1a76e672be31411a9ff7d35874d2de4c',
        menuCode: 'sys',
        menuName: '流程管理',
        parentId: '12aa32abf61c4797a2cd29fcc289c0ad',
        icon: '',
        url: '/businessBasic/workflow',
        list: [
          {
            menuId: 'ad54b1acb6e14a41a75e14b88549f0b7',
            menuCode: 'sys',
            menuName: '流程配置',
            parentId: '1a76e672be31411a9ff7d35874d2de4c',
            icon: '',
            url: '/businessBasic/workflow/processConfigurationMain',
            list: [],
            keepAlive: '',
            component: '/businessBasic/workflow/processConfigurationMain',
            redirect: '',
            hidden: '0',
            vueName: 'processConfigurationMain',
            mainId: '0'
          }
        ],
        keepAlive: '',
        component: '',
        redirect: '',
        hidden: '0',
        vueName: 'workflow',
        mainId: '0'
      }
    ],
    keepAlive: '',
    component: '',
    redirect: '',
    hidden: '0',
    vueName: 'sysBasic',
    mainId: '0'
  }
]
export const formatYunMenus = formMatMenus(yunMenus)
