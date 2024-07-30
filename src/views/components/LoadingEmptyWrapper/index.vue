<template>
  <div id="app_content">
    <LoadingEmptyWrapper :loading="loading" :empty="empty" :empty-title="emptyTitle">
      <span class="c-red"> 这里是 LoadingEmptyWrapper 组件 </span>
    </LoadingEmptyWrapper>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import LoadingEmptyWrapper from '@/components/LoadingEmptyWrapper/index.vue'

const data = ref([])
const emptyTitle = ref('暂无数据哦~')
const loading = ref(true)
const empty = computed(() => data.value.length <= 0)

function setLoading() {
  setTimeout(() => {
    loading.value = false
  }, 1000)
}

onMounted(() => {
  setLoading()
})
</script>

<style scoped></style>
