<template>
  <a-modal
    :visible="visible"
    :title="title"
    width="50%"
    @cancel="closeModal"
    @ok="closeModal"
  >
    <a-descriptions
      :bordered="descProps.bordered || true"
      :column="descProps.column || 2"
      :layout="descProps.layout || 'horizontal'"
    >
      <a-descriptions-item
        v-for="(item, index) in itemList"
        :key="'key' + index"
        :label="item.label"
        :span="item.span || 1"
      >{{ item.value }}
      </a-descriptions-item>
    </a-descriptions>

    <template #footer>
      <a-button @click="closeModal">关闭</a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, PropType,ref, SetupContext } from 'vue'
import { Descriptions,Button ,Modal} from 'ant-design-vue'
export interface DescItem {
  span?: number;
  label: string;
  value: string | number;
}
export interface DescProps {
  bordered?: boolean;
  column?: number;
  layout?: 'horizontal' | 'vertical';
}

export default defineComponent({
  components: {
    [Descriptions.name]: Descriptions,
    [Descriptions.Item.name]: Descriptions.Item,
    [Button.name]:Button,
     [Modal.name]: Modal,
  },
  // emits: ['update:visible'],
  props: {
    title: {
      type: String as PropType<string>,
      default: '详情'
    },
    // visible: {
    //   // 弹出显隐
    //   type: Boolean as PropType<boolean>,
    //   default: false
    // },
    itemList: {
      type: Object as PropType<DescItem[]>
    },
    descProps: {
      type: Object as PropType<DescProps>,
      default: () => ({
        bordered: true,
        column: 2,
        layout: 'horizontal'
      })
    }
  },
  setup(props, ctx: SetupContext) {
    const visible = ref(true)
    visible.value = true
    const closeModal = () => {
      visible.value = false
      // ctx.emit('update:visible', false)
    }
    return {
      closeModal,
      visible
    }
  }
})
</script>

<style>
</style>