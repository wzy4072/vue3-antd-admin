import { FormSchema, FormItem } from '@/types/schema'

// import {getAdminRole, getAdminRoleAccess} from "@/api/system/role";
import {
  getBasicCorpList,
  getCertList,
  checkUserIsExist
} from '@/api/businessBasic'

function validaLoginName(rule, value) {
  return checkUserIsExist({ loginName: value }).then(res => {
    if (res.message) {
      throw new Error(res.message || '网络错误')
    } else {
      return true
    }
  })
}

// 与vue2的里面的data一样，函数返回新对象防止多处共用同一对象,造成数据混乱
export const getFormSchema = (defaultValue?): FormSchema => {
  const formItem: FormItem[] = [
    {
      type: 'select',
      label: '单位',
      field: 'corpId',
      value: '1233b5444ce248e3a06bb3851c5b9876',
      props: {
        placeholder: '请选择'
      },
      rules: [
        {
          required: true,
          message: '不能为空'
        }
      ],
      asyncOptions: async () => {
        const result = await getBasicCorpList({})
        return result.map(item => ({
          label: item.corpName,
          value: item.corpId
        }))
      }
    },
    {
      type: 'input',
      label: '用户姓名',
      field: 'userName',
      value: '红太狼',
      props: {
        placeholder: '请输入用户名'
      },
      rules: [
        { required: true, message: '用户姓名必填!' },
        { max: 10, message: '长度不能超过10个字符!' }
      ]
    },
    {
      type: 'input',
      label: '所在部门',
      field: 'deptName',
      value: '',
      props: {
        placeholder: '请输入用户名'
      },
      rules: [{ max: 10, message: '长度不能超过10个字符!' }]
    },
    {
      type: 'input',
      label: '手机号',
      field: 'telNum',
      value: '',
      props: {
        validateTrigger: 'blur'
      },
      rules: [{ pattern: /^1[3456789]\d{9}$/, message: '手机号码格式不正确!' }]
    },

    {
      type: 'select',
      label: '证件类型',
      field: 'idTypId',
      value: '000e79974c9a4858a4f3eda45049c1e2',
      //   options: [],
      loading: true,
      rules: [
        {
          required: true,
          message: '请选择'
        }
      ],
      asyncOptions: async () => {
        const result = await getCertList()
        return result.map(item => ({
          label: item.certName,
          value: item.certId
        }))
      }
    },
    {
      type: 'radio',
      label: '状态',
      field: 'userSts',
      value: 'N',
      options: [
        { value: 'N', label: '启用' },
        { value: 'S', label: '禁用' }
      ]
    },
    {
      type: 'input',
      label: '账户名',
      field: 'loginName',
      value: 'test3',
      props: {
        // validateTrigger: 'blur'
      },
      rules: [
        { required: true, message: '账户名必填!' },
        { validator: validaLoginName }
      ]
    },
    {
      type: 'radio',
      label: '性别',
      field: 'gender',
      value: '1',
      options: [
        { value: '1', label: '男' },
        { value: '2', label: '女' }
      ]
    },
    {
      type: 'input',
      label: '职务',
      field: 'empPosn',
      value: '',
      props: {},
      rules: [{ max: 10, message: '长度不能超过10个字符!' }]
    },
    {
      type: 'input',
      label: '邮箱',
      field: 'emlAddr',
      value: '',
      props: {},
      rules: [
        {
          pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
          message: '邮箱格式不正确!'
        }
      ]
    },
    {
      type: 'input',
      label: '证件号码',
      field: 'idNum',
      value: '',
      props: {},
      rules: [
        {
          pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
          message: '证件号码格式有误！',
          trigger: 'onBlur'
        }
      ]
    },
    {
      type: 'radio',
      label: '登录方式',
      field: 'loginType',
      value: '0',
      options: [
        { value: '0', label: '用户密码方式' },
        { value: '1', label: '证书认证方式' },
        { value: '2', label: '证书认证方式+用户密码方式' }
      ]
    }
  ]
  return { formItem }
}
