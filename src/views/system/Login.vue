<template>
  <div class="login_warpper">
    <div class="login_form">
      <n-form
        ref="formRef"
        :label-width="80"
        label-placement="left"
        :model="userForm"
        :rules="rules"
        :size="size"
      >
        <n-form-item label="用户名" path="user.username">
          <n-input v-model:value="userForm.user.username" placeholder="输入用户名" />
        </n-form-item>
        <n-form-item label="密码" path="user.password">
          <n-input v-model:value="userForm.user.password" placeholder="输入密码" />
        </n-form-item>
      </n-form>
      <n-button type="primary" @click="handleValidateClick"> 登录 </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FormInst } from 'naive-ui'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()

const formRef = ref<FormInst | null>(null)
const size = 'small'
const userForm = ref({
  user: {
    username: '',
    password: '',
  },
})
const rules = {
  user: {
    username: {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    },
    password: {
      required: true,
      message: '请输入密码',
      trigger: ['blur'],
    },
  },
}

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      await userStore.login(userForm)
    } else {
      console.log(errors)
    }
  })
}
</script>

<style scoped>
.login_warpper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
