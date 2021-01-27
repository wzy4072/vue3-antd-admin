<template>
  <div>
    <a-button @click="refreshTable" type="primary">查询</a-button>

    <dynamic-table
      ref="tableRef"
      :columns="columns"
      :get-list-func="corpManageCorpTreeList"
      :defaultExpandAllRows="true"
      rowKey="corpId"
    >
      <!-- 增加下级 编辑 查看 删除 -->

      <template v-slot:action="{ record }">
        <a-button type="primary" @click="addChild(record)" size="small"
          >增加下级</a-button
        >
        <a-divider type="vertical" />

        <a-button type="primary" @click="showItemDetail(record)" size="small"
          >查看</a-button
        >
        <a-divider type="vertical" />
        <!--   <a-button type="primary" @click="editItem(record)" size="small"
          >编辑</a-button
        > -->
        <a-popconfirm title="Are you sure?" @confirm="delItem(record)">
          <a-button type="danger" size="small">删除</a-button>
        </a-popconfirm>
      </template>
    </dynamic-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref, toRefs, toRaw } from 'vue'
import { DynamicTable } from '@/components/dynamic-table'
import { columns } from './columns'
import {
  corpManageCorpTreeList,
  addChildCorp,
  updCorpById,
  getCorpInfoByCorpId,
  delCorp
} from '@/api/businessBasic'
import { getFormSchema } from './editFormSchema'
// import { getHeadFormSchema } from './pageHeadFormSchema'
import { Popconfirm } from 'ant-design-vue'
// import { SchemaForm } from '@/components/JSON-schema-form'
import { useFormModal, descDetailModal } from '@/hooks'
export default defineComponent({
  components: {
    DynamicTable,
    [Popconfirm.name]: Popconfirm
    // SchemaForm
  },
  setup() {
    const tableRef = ref<any>(null)
    const dynamicForm = ref<any>(null)
    // 刷新
    const refreshTable = () => {
      tableRef.value.refreshTableData()
    }
    // 删除
    const delItem = async ({ corpId }) => {
      await delCorp({ corpId })
      tableRef.value.refreshTableData()
    }
    // 查询
    // const searchTable = () => {
    //   dynamicForm.value
    //     .validate2()
    //     .then(() => {
    //       const values = toRaw(dynamicForm.value.modelRef)
    //       tableRef.value.refreshTableData(values)
    //     })
    //     .catch((err) => {
    //       console.log('error', err)
    //     })
    // }

    /**
     * 添加子单位
     */
    const addChild = (v) => {
      useFormModal({
        title: '添加子单位',
        width: '50%',
        fields: { parentId: v.corpId },
        formSchema: getFormSchema(),
        handleOk: async (modelRef, state) => {
          //  parentIds: this.info.parentIds,
          //   corpName,
          //   code,
          //   headPerson,
          //   sort,
          //   status: '1', // 尚不支持编辑启用禁用
          //   province: province_city[0],
          //   city: province_city[1],
          //   address
          const { code, message } = await addChildCorp(modelRef)

          if (code !== 0) throw new Error(message)
          tableRef.value.refreshTableData()
        }
      })
    }

    /**
     * 查看按钮
     */
    const showItemDetail = async ({ corpId }) => {
      const result = await getCorpInfoByCorpId({ corpId })
      const {
        parentName,
        corpName,
        code,
        headPerson,
        status,
        sort,
        provinceName,
        cityName,
        address
      } = result
      descDetailModal({
        title: '单位详情',
        itemList: [
          { label: '上级单位名称', value: parentName, span: 2 },
          { label: '单位名称', value: corpName },
          { label: '单位编码', value: code },
          { label: '单位负责人', value: headPerson },
          { label: '状态', value: status === '1' ? '有效' : '无效' },
          { label: '排序', value: sort },
          { label: '省', value: provinceName },
          { label: '市', value: cityName },
          { label: '详细地址', value: address }
        ]
      })
    }

    return {
      tableRef,
      corpManageCorpTreeList,
      columns,
      refreshTable,
      dynamicForm,
      delItem,
      showItemDetail,
      addChild
    }
  }
})
</script>

<style scoped>
</style>
