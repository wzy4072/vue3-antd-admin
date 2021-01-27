import { TableColumn } from '@/types/tableColumn'
export const columns: TableColumn[] = [
  { dataIndex: 'corpName', title: '单位名称' },
  {
    title: '操作',
    dataIndex: 'action',
    slots: {
      customRender: 'action'
    }
  }
]
