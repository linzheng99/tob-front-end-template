<template>
  <div>
    <n-form
      ref="formRef"
      :label-width="80"
      label-placement="left"
      :model="formValue"
      :rules="rules"
      :size="size"
    >
      <n-form-item label="用户名" path="user.username">
        <n-input v-model:value="formValue.user.username" placeholder="输入用户名" />
      </n-form-item>
      <n-form-item label="密码" path="user.password">
        <n-input v-model:value="formValue.user.password" placeholder="输入密码" />
      </n-form-item>
      <n-form-item>
        <n-button attr-type="button" @click="handleValidateClick"> 验证 </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FormInst, useMessage } from 'naive-ui'
const formRef = ref<FormInst | null>(null)
const message = useMessage()
const size = 'small'
const formValue = ref({
  user: {
    username: '',
    password: ''
  }
})
const rules = {
  user: {
    username: {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    password: {
      required: true,
      message: '请输入密码',
      trigger: ['blur']
    }
  }
}
const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Valid')
    } else {
      console.log(errors)
      message.error('Invalid')
    }
  })
}
</script>

<style scoped></style>
