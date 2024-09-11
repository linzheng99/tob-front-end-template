<template>
  <slot v-if="showSlot" :permissions="store.permissions" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserAuth } from '@/store/modules/auth'

interface Props {
  permission: string | string[]
}

const props = defineProps<Props>()

const store = useUserAuth()

const showSlot = computed(() => {
  if (!props.permission)
    return true
  if (!store.permissions)
    return false

  if (Array.isArray(props.permission))
    return props.permission.every(p => store.permissions.includes(p))
  else
    return store.permissions.includes(props.permission)
})
</script>

<style scoped>

</style>
