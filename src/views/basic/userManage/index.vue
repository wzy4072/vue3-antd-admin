<template>
  <div>
    <a-button @click="refreshTable" type="primary">刷新</a-button>
    <dynamic-table
      ref="tableRef"
      :columns="columns"
      :get-list-func="getMenuTreeByGroupId"
      rowKey="userId"
    >
      <!-- :row-selection="rowSelection" -->
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
import { getMenuTreeByGroupId } from '@/api/businessBasic'
import DescriptDetailModal from './descript-detail-modal.vue'
export default defineComponent({
  // name: 'custom-yxj',
  components: {
    DynamicTable,
    DescriptDetailModal
  },
  // setup(props, {attrs, slots, emit}) {
  setup() {
    const tableRef = ref<any>(null)
    const visible = ref(false)
    const detailValues = ref()
    const refreshTable = () => {
      tableRef.value.refreshTableData()
    }
    const showItemDetail = (v) => {
      detailValues.value = [{ label: 'xxx', value: 666 }]
      visible.value = true
    }
    return {
      tableRef,
      getMenuTreeByGroupId,
      columns,
      refreshTable,
      visible,
      detailValues,
      showItemDetail
    }
  }
})
</script>

<style scoped>
</style>
