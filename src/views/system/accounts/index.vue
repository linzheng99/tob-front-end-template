<template>
  <div id="app_content">
    {{ aNumber }}
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'
import { getUserListApi } from '@/api/user/index'

const aNumber: Ref<number> = ref(0)

async function getUserList() {
  const { items, totalItems } = await getUserListApi()

  aNumber.value = totalItems
  return items
}

onMounted(async () => {
  await getUserList()
})
</script>

<style lang="scss" scoped></style>
