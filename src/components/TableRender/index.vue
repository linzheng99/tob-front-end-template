<template>
  <div>
    <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  columns: any[]
  data: any
  pagination: any
  ref: any
}


withDefaults(defineProps<Props>(), {})

function test() {
  console.log(321)
}

defineExpose({ test })
</script>

<style scoped></style>
