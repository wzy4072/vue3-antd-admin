import { TableColumn } from '@/types/tableColumn'

enum userSts {
  'N' = '正常',
  'S' = '禁用',
  'L' = '锁定'
}

export const columns: TableColumn[] = [
  {
    dataIndex: 'index',
    title: '序号',
    width: 65,
    customRender: ({ text, record, index }) => index + 1
  },
  { dataIndex: 'loginName', title: '用户编号' },
  { dataIndex: 'userName', title: '姓名' },
  { dataIndex: 'corpName', title: '单位名称' },
  {
    dataIndex: 'userSts',
    title: '状态',
    customRender: ({ text }) => userSts[text]
  },
  {
    title: '操作',
    dataIndex: 'action',
    slots: {
      customRender: 'action'
    }
  }
]
