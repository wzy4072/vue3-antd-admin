<template>
  <div>
    <schema-form ref="dynamicForm" :form-schema="getHeadFormSchema">
      <template #operate-button>
        <a-button @click="searchTable" type="primary">查询</a-button>
      </template>
    </schema-form>

    <dynamic-table
      ref="tableRef"
      :columns="columns"
      :get-list-func="getMenuTreeByGroupId"
      rowKey="userId"
    >
      <template v-slot:title>
        <a-button @click="addItem" type="primary"> 添加 </a-button>
      </template>

      <template v-slot:action="{ record }">
        <a-button type="primary" @click="showItemDetail(record)" size="small"
          >查看</a-button
        >
        <a-button type="primary" @click="editItem(record)" size="small"
          >编辑</a-button
        >
        <a-popconfirm title="Are you sure?" @confirm="updateUserStatus(record)">
          <a href="#">{{ record.userSts === 'N' ? '禁用' : '启用' }}</a>
        </a-popconfirm>
      </template>
    </dynamic-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref, toRefs, toRaw } from 'vue'
import { DynamicTable } from '@/components/dynamic-table'
import { columns } from './columns'
import { getMenuTreeByGroupId, saveUser, updStatus } from '@/api/businessBasic'
import { useFormModal, descDetailModal } from '@/hooks'
import { getFormSchema } from './form-schema'
import { getHeadFormSchema } from './pageHeadFormSchema'
import { Popconfirm } from 'ant-design-vue'
import { SchemaForm } from '@/components/JSON-schema-form'

enum LoginType {
  'type_0' = '用户密码方式',
  'type_1' = '证书认证方式',
  'type_2' = '证书认证方式+用户密码方式'
}

export default defineComponent({
  components: {
    DynamicTable,
    [Popconfirm.name]: Popconfirm,
    SchemaForm
  },
  setup() {
    const tableRef = ref<any>(null)
    const dynamicForm = ref<any>(null)
    // 刷新
    const refreshTable = () => {
      tableRef.value.refreshTableData()
    }
    // 查询
    const searchTable = () => {
      dynamicForm.value
        .validate2()
        .then(() => {
          const values = toRaw(dynamicForm.value.modelRef)
          tableRef.value.refreshTableData(values)
        })
        .catch((err) => {
          console.log('error', err)
        })
    }

    // 添加
    const addItem = () => {
      useFormModal({
        title: '添加账号',
        width: '50%',
        formSchema: getFormSchema(),
        handleOk: async (modelRef, state) => {
          const { code, message } = await saveUser(modelRef)
          if (code !== 0) throw new Error(message)
          tableRef.value.refreshTableData()
        }
      })
    }
    // 编辑
    const editItem = (record) => {
      useFormModal({
        title: '添加账号',
        width: '50%',
        fields: record,
        formSchema: getFormSchema(record),
        handleOk: async (modelRef, state) => {
          const { code, message } = await saveUser(modelRef)
          if (code !== 0) throw new Error(message)
          tableRef.value.refreshTableData()
        }
      })
    }
    /**
     * 查看按钮
     */
    const showItemDetail = (record) => {
      descDetailModal({
        title: '用户详情',
        itemList: [
          { label: '单位名称', value: record.corpName },
          { label: '账户名称', value: record.loginName },
          { label: '用户姓名', value: record.userName },
          { label: '性别', value: record.gender === '1' ? '男' : '女' },
          { label: '手机号', value: record.telNum },
          { label: '邮箱', value: record.emlAddr },
          { label: '所在部门', value: record.deptName },
          { label: '职务', value: record.empPosn },
          { label: '证件类型', value: record.namOfIdvIdDoc },
          { label: '证件号码', value: record.idNum },
          { label: '状态', value: record.userSts === 'N' ? '启用' : '禁用' },
          { label: '登录方式', value: LoginType['type_' + record.loginType] }
        ]
      })
    }
    /**
     * 启用 禁用
     */
    const updateUserStatus = async ({ idNum, userId, userSts }) => {
      await updStatus({ idNum, userId, userSts: userSts === 'N' ? 'S' : 'N' })
      tableRef.value.refreshTableData()
    }
    // ??? 为什么有些地方直接使用 option是可以更新的 treeSelect 必须代理一下才能更新options
    const getHeadFormSchemaData = reactive(getHeadFormSchema()) 
    return {
      tableRef,
      getMenuTreeByGroupId,
      columns,
      refreshTable,
      getHeadFormSchema: getHeadFormSchemaData,
      showItemDetail,
      addItem,
      editItem,
      updateUserStatus,
      dynamicForm,
      searchTable
    }
  }
})
</script>

<style scoped>
</style>
