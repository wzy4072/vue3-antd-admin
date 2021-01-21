<template>
  <div>
    ?
    <a-button @click="refreshTable" type="primary">刷新</a-button>
    <dynamic-table
      ref="tableRef"
      :columns="columns"
      :get-list-func="getMenuTreeByGroupId"
      rowKey="id"
    >
      <!-- :row-selection="rowSelection" -->
      <template v-slot:title>
        <a-button
          v-permission="{ action: 'create', effect: 'disabled' }"
          @click="addItem"
          type="primary"
        >添加</a-button>
        <a-button
          @click="deleteItems"
          v-permission="{ action: 'delete' }"
          :disabled="isDisabled"
          type="primary"
        >删除</a-button>
      </template>
    </dynamic-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { DynamicTable } from '@/components/dynamic-table'
import { columns } from './columns'
import { getMenuTreeByGroupId } from '@/api/businessBasic'

export default defineComponent({
  // name: 'custom-yxj',
  components: {
    DynamicTable
  },
  setup() {
    const tableRef = ref<any>(null)
    const refreshTable = () => {
      tableRef.value.refreshTableData()
    }
    return {
      tableRef,
      getMenuTreeByGroupId,
      columns,
      refreshTable
    }
  }
})
</script>

<style scoped>
</style>
