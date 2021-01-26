import { FormSchema, FormItem } from '@/types/schema'
import { getBasicCorpList } from '@/api/businessBasic'
export const getHeadFormSchema = (defaultValue?): FormSchema => {
  const formItem: FormItem[] = [
    {
      type: 'tree-select',
      label: '单位',
      field: 'corpId',
      value: '',
      props: {
        placeholder: '请选择',
        style: { width: '200px' },
        treeDefaultExpandAll:true,
        allowClear:true,
        replaceFields: {
          children: 'children',
          title: 'corpName',
          key: 'corpId',
          value: 'corpId'
        },
      },
      // options:[],
      asyncOptions: async () => {
        return await getBasicCorpList({})
      }
    }
  ]

  return {
    formItem,
    formItemLayout: {
      layout: 'inline',
      labelCol: { span: 12 },
      wrapperCol: { span: 12 }
    }
  }
}
