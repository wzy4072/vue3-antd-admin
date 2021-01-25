<template>
  <a-card>
    <schema-form ref="dynamicForm" :form-schema="formSchema">
      <template #operate-button>
        <a-button @click="submitLogin" type="primary">登录</a-button>
      </template>
    </schema-form>
    <hr/>
    <demo1 v-bind="{...childProps}"></demo1>
  </a-card>
</template>

<script lang="ts">
import { defineComponent,  ref,} from 'vue'
import { Alert, Card } from 'ant-design-vue'
import { AButton } from '@/components/button'
import { SchemaForm } from '@/components/JSON-schema-form'
import { getFormSchema } from './yunLogin/form-schema'
import { login } from '@/api/system/yunUser'
import { sha256 } from 'js-sha256'
import { createStorage } from '@/utils/Storage'
import demo1 from './demo1.vue'
const Storage = createStorage()

/**
 * @description 扩展ant-design-vue模态框功能
 */
export default defineComponent({
  name: 'custom-yxj',
  components: { [Alert.name]: Alert, [Card.name]: Card, AButton, SchemaForm ,demo1},

  setup() {
    const dynamicForm = ref<any>(null)
    const submitLogin = () => {
      dynamicForm.value.validate().then(async values => {
        values.password = sha256(values.password)
        const result = await login(values)
        // message.info(result.message)
        Storage.set(
          'YUN_ACCESS_TOKEN',
          result.access_token,
          7 * 24 * 60 * 60 * 1000
        )
        console.log('YUN_ACCESS_TOKEN', Storage.get('YUN_ACCESS_TOKEN'))
      })
    }
    const childProps = {
      a:'sss',
      b:'dddd',
      c:'443456777'
    }
    return {
      childProps,
      submitLogin,
      dynamicForm,
      formSchema: getFormSchema(dynamicForm)
    }
  }
})
</script>

<style scoped>
</style>
