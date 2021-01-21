import { TableColumn } from '@/types/tableColumn'
// import { useFormModal } from '@/hooks/useFormModal'
// import { getFormSchema } from './form-schema'
// const columns = [
//   { type: 'index', title: '序号', width: 65, customRender: (text, record, index) => index + 1 },
//   { dataIndex: 'loginName', title: '用户编号' },
//   { dataIndex: 'userName', title: '姓名' },
//   { dataIndex: 'corpName', title: '单位名称' },
//   { dataIndex: 'userSts', title: '状态', customRender: (text) => userSts_lab[text] },
//   { title: '操作', scopedSlots: { customRender: 'operate' } },
// ]
export const columns: TableColumn[] = [
  {
    dataIndex: 'index',
    title: '序号',
    width: 65,
    customRender: (text, record, index) => index + 1
  },
  { dataIndex: 'loginName', title: '用户编号' },
  { dataIndex: 'userName', title: '姓名' },
  { dataIndex: 'corpName', title: '单位名称' },
  {
    dataIndex: 'userSts',
    title: '状态'
    // { dataIndex: 'userSts', title: '状态', customRender: (text) => userSts_lab[text] },
  }
  // { title: '操作', scopedSlots: { customRender: 'operate' } }
]
