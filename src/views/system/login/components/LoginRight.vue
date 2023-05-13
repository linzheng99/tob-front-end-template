<template>
  <div class="login_right">
    <div class="login_warpper">
      <div class="login_header">
        <div class="__login_header_img">
          <SvgIcon local-icon="logo" :color="themeStore.themeColor" font-size="50" />
        </div>
        <div>{{ name }}</div>
        <div>{{ title }}</div>
        <div>{{ desc }}</div>
      </div>
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
        <n-button tertiary @click="handleValidateClick"> 登录 </n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FormInst } from 'naive-ui'
import { useUserStore } from '@/store/modules/user'
import { useAppInfo } from '@/hooks/app/system'
import { useThemeStoreWithOut } from '@/store/modules/theme'

const { name, title, desc } = useAppInfo()
const userStore = useUserStore()
const themeStore = useThemeStoreWithOut()

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
      await userStore.login(userForm.value.user)
    } else {
      console.log(errors)
    }
  })
}
</script>

<style lang="scss" scoped>
.login_right {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login_warpper {
  height: 400px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: #18181c;
  border: 1px solid #fff;
  border-radius: 24px;
  padding: 20px;
}
.login_header {
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: flex-end;
  font-size: 18px;
  font-family: fantasy;
  width: 100%;
}
.__login_header_img {
  border: 1px solid #fff;
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}
.login_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
