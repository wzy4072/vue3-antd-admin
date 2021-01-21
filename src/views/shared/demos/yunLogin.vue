<template>
  <a-card>
    <schema-form ref="dynamicForm" :form-schema="formSchema">
      <template #operate-button>
        <a-button @click="submitLogin" type="primary">登录</a-button>
      </template>
    </schema-form>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { Alert, Card } from 'ant-design-vue'
import { AButton } from '@/components/button'
import { SchemaForm } from '@/components/JSON-schema-form'
import { getFormSchema } from './yunLogin/form-schema'

/**
 * @description 扩展ant-design-vue模态框功能
 */
export default defineComponent({
  name: 'custom-yxj',
  components: { [Alert.name]: Alert, [Card.name]: Card, AButton, SchemaForm },

  setup() {
    const dynamicForm = ref<any>(null)
    const submitLogin = () => {
      dynamicForm.value.validate().then(res => {
        debugger
      })
    }
    return {
      submitLogin,
      dynamicForm,
      formSchema: getFormSchema(dynamicForm)
    }
  }
})
</script>

<style scoped>
</style>
