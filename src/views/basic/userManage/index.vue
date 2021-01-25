<template>
  <div>
    <dynamic-table
      ref="tableRef"
      :columns="columns"
      :get-list-func="getMenuTreeByGroupId"
      rowKey="userId"
    >
      <template v-slot:title>
        <a-button @click="refreshTable" type="primary">刷新</a-button>

        <a-button @click="addItem" type="primary"> 添加 </a-button>
        <!-- <a-button @click="deleteItems" v-permission="{ action: 'delete' }" :disabled="isDisabled" type="primary">
        删除
      </a-button> -->
      </template>

      <template v-slot:action="{ record }">
        <a-button type="primary" @click="showItemDetail(record)" size="small"
          >查看</a-button
        >
        <!-- <a-button
          @click="deleteItems"
          v-permission="{ action: 'delete' }"
          :disabled="isDisabled"
          type="primary"
        >删除</a-button>-->
        <!-- 
           <a-button type="link" size="small" @click="detail(record)">查看</a-button>
              <a-button type="link" size="small" @click="$refs.CorpAndMenuTreeModal.edit(record)"
                >分配特殊权限</a-button
              >
              <a-button type="link" size="small" @click="$refs.RoleListModal.edit(record)">分配角色</a-button>
              <template v-if="record.isAdmin === '0'">
                <a-popconfirm
                  :title="record.userSts === 'N' ? '是否禁用该用户' : '是否启用该用户？'"
                  @confirm="updUserStatus(record)"
                >
                  <a-button type="link" size="small">{{ record.userSts === 'N' ? '禁用' : '启用' }}</a-button>
                </a-popconfirm>
                <a-button type="link" size="small" @click="edit(record)">编辑</a-button>

                <a-popconfirm title="是否重置密码？" @confirm="resetPwd(record)">
                  <a-button type="link" size="small">重置密码</a-button>
                </a-popconfirm>
                <a-popconfirm title="确定删除？" @confirm="delUserById(record)">
                  <a-button type="link" size="small">删除</a-button>
                </a-popconfirm>
        </template>-->
      </template>
    </dynamic-table>
    <descript-detail-modal
      v-model:visible.sync="visible"
      :detailValues="detailValues"
      :title="'嘻嘻嘻'"
    ></descript-detail-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref, toRefs } from 'vue'
import { DynamicTable } from '@/components/dynamic-table'
import { columns } from './columns'
import { getMenuTreeByGroupId, saveUser } from '@/api/businessBasic'
import DescriptDetailModal from './descript-detail-modal.vue'
import { useFormModal } from '@/hooks/useFormModal'
import { getFormSchema } from './form-schema'

enum LoginType {
  'type_0' = '用户密码方式',
  'type_1' = '证书认证方式',
  'type_2' = '证书认证方式+用户密码方式'
}

export default defineComponent({
  components: {
    DynamicTable,
    DescriptDetailModal
  },
  setup() {
    const tableRef = ref<any>(null)
    const visible = ref(false)
    const detailValues = ref()
    const refreshTable = () => {
      tableRef.value.refreshTableData()
    }

    // 添加
    const addItem = () => {
      useFormModal({
        title: '添加账号',
        width: '50%',
        formSchema: getFormSchema(),
        handleOk: async (modelRef, state) => {
          const valuse = modelRef
          debugger
          await saveUser(valuse)
          tableRef.value.refreshTableData()
          return false
        }
      })
    }
    /**
     * 查看按钮
     */
    const showItemDetail = (record) => {
      detailValues.value = [
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
      visible.value = true
    }
    return {
      tableRef,
      getMenuTreeByGroupId,
      columns,
      refreshTable,
      visible,
      detailValues,
      showItemDetail,
      addItem
    }
  }
})
</script>

<style scoped>
</style>
