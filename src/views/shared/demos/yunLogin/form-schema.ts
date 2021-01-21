import { FormSchema } from '@/types/schema'

export const getFormSchema = (dynamicForm): FormSchema => ({
  formItemLayout: {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 }
  },
  formItem: [
    {
      type: 'input',
      label: '用户名',
      field: 'loginName',
      value: '',
      props: {
        'has-feedback': true,
        placeholder: '请输入账号'
      },
      rules: [
        {
          required: true,
          message: '不能为空'
        }
      ]
    },
    {
      type: 'input',
      label: '密码',
      field: 'password',
      value: '',
      props: {
        'has-feedback': true,
        placeholder: '请输入密码'
      },
      rules: [
        {
          required: true,
          message: '不能为空'
        }
      ]
    }
  ]
})
