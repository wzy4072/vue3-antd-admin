<template>
  <a-tree-select
    v-model:value="modelValue"
    v-on="formItem.eventObject"
    v-bind="{ ...formItem.props, treeData: formItem.options }"
  >
  </a-tree-select>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { Select, TreeSelect } from 'ant-design-vue'
import { FormItem } from '@/types/schema'

export default defineComponent({
  name: 'schema-form-tree-select',
  emits: ['update:value'],
  components: {
    [TreeSelect.name]: TreeSelect
  },
  props: {
    formItem: {
      // 表单项
      type: Object as PropType<FormItem>,
      default: () => ({})
    },
    value: undefined as any // 表单项值
  },
  setup(props, { attrs, emit }) {
    const modelValue = computed({
      get: () => props.value,
      set: (val) => emit('update:value', val)
    })

    return {
      modelValue
    }
  }
})
</script>
