<template>
  <a-modal
    :visible="visible"
    :title="title"
    @cancel="closeModal"
    @ok="closeModal"
  >
    <a-descriptions
      :bordered="descProps.bordered || true"
      :column="descProps.column || 2"
      :layout="descProps.layout || 'horizontal'"
    >
      <a-descriptions-item
        v-for="(item, index) in detailValues"
        :key="'key' + index"
        :label="item.label"
        :span="item.span || 1"
      >
        {{ item.value }}
      </a-descriptions-item>
    </a-descriptions>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext } from 'vue'

interface DescItem {
  span?: number;
  label: string;
  value: string | number;
}

export default {
  emits: ['update:visible'],
  props: {
    title: {
      type: String as PropType<string>,
      default: '标题'
    },
    visible: {
      // 弹出显隐
      type: Boolean as PropType<boolean>,
      default: false
    },
    detailValues: {
      type: Object as PropType<DescItem[]>
    }
  },
  setup(props, ctx: SetupContext) {
    const closeModal = () => {
      ctx.emit('update:visible', false)
    }
    return {
      closeModal
    }
  }
}
</script>

<style>
</style>