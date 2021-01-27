import { FormSchema, FormItem } from '@/types/schema'

import {
  checkCorpIsExist,
  getProvinceList,
  getCityList
} from '@/api/businessBasic'
import getBasicCorpItem from '@/components/schemaFormConfig/BasicCorpSelect'

const validaCorpName = async function(rule, value, reqKey) {
  const { message } = await checkCorpIsExist({ [reqKey]: value })
  if (message) {
    throw new Error(message || '网络错误')
  } else {
    return true
  }
}

export const getFormSchema = (defaultValue?): FormSchema => {
  const formItem: FormItem[] = [
    getBasicCorpItem({
      label: '父级单位',
      field: 'parentId',
      props: { disabled: true }
    }),
    {
      type: 'input',
      label: '单位名称',
      field: 'corpName',
      value: '',
      props: {},
      rules: [
        { required: true, message: '单位名称必填!' },
        {
          validator: (rule, value) => validaCorpName(rule, value, 'corpName')
        }
      ]
    },
    {
      type: 'input',
      label: '排序',
      field: 'sort',
      value: '',
      rules: [{ pattern: /^\d{0,4}$/, message: '请输入数字且长度不超过4位!' }]
    },
    {
      type: 'textarea',
      label: '地址',
      field: 'address',
      value: '',
      rules: [{ max: 60, message: '长度不能超过60个字符!' }]
    },
    {
      type: 'input',
      label: '单位编码',
      field: 'code',
      value: '',
      rules: [
        { required: true, message: '单位编码必填!' },
        { pattern: /^\d{1,10}$/, message: '请输入数字且长度不超过10位!' },
        {
          validator: (rule, value) => validaCorpName(rule, value, 'code')
        }
      ]
    },
    {
      type: 'input',
      label: '单位负责人',
      field: 'headPerson',
      value: '',
      rules: [{ max: 10, message: '长度不能超过10个字符!' }]
    },
    {
      type: 'cascader',
      label: '省市',
      field: 'province_city',
      value: [],
      options: [],
      props: {
        // fieldNames: {
        //   label: 'provinceName',
        //   value: 'provinceId',
        //   children: 'children'
        // },
        loadData: async selectedOptions => {
          const targetOption = selectedOptions[selectedOptions.length - 1]
          const { value: parentId } = targetOption
          debugger
          targetOption.loading = true
          const result = await getCityList({ parentId })
          debugger
          targetOption.loading = false
          targetOption.children = result
        }
      },
      asyncOptions: async () => {
        const result = await getProvinceList()
        return  result.map(item => {
          const { provinceId: value, provinceName: label } = item
          return { value, label,children:[] }
        })
        return await getProvinceList()
      }
    }
    // {}
  ]
  return { formItem }
}
