<template>
  <a-cascader
    v-model:value="modelValue"
    v-on="formItem.eventObject"
    v-bind="formItem.props"
    :options="formItem.options"
  >
  </a-cascader>
</template>
<script lang="ts">
import { defineComponent, watch, PropType, computed, ref } from 'vue'

import { Cascader } from 'ant-design-vue'
import { FormItem } from '@/types/schema'
export default defineComponent({
  name: 'schema-form-cascader',
  emits: ['update:value'],
  components: {
    [Cascader.name]: Cascader
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
    // const localOptions = ref(props.formItem.options)
    // watch(
    //   () => props.formItem.options,
    //   (newVal) => {
    //     localOptions.value = props.formItem.options
    //   }
    // )
    return {
      modelValue,
      // localOptions
    }
  }
})
</script>
