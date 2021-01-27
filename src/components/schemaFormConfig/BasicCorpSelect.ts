import { getBasicCorpList } from '@/api/businessBasic'
import { FormItem } from '@/types/schema'
import { defineComponent, PropType, reactive, toRefs, ref, computed } from 'vue'

const baseProps = {
  placeholder: '请选择',
  // style: { width: '200px' },
  treeDefaultExpandAll: true,
  allowClear: true,
  replaceFields: {
    children: 'children',
    title: 'corpName',
    key: 'corpId',
    value: 'corpId'
  }
}

const baseConf: FormItem = {
  type: 'tree-select',
  label: '单位',
  field: 'corpId',
  value: '',
  // validateTrigger: 'blur',
  asyncOptions: async () => {
    return await getBasicCorpList({})
  }
  // props: baseProps,
}
interface ParamsType {
  label?: string;
  field?: string;
  props?: object;
}
const getConfig = (params: ParamsType = {}): FormItem => {
  return Object.assign({}, baseConf, params, {
    props: Object.assign({}, baseProps, params.props || {})
  })
}

export default getConfig
