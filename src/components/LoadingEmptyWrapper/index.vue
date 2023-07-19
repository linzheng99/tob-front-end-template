<template>
  <div class="relative min-h-200px">
    <slot></slot>
    <div v-show="showPlaceholder" class="absolute left-0 top-0 wh-full" :class="placeholderClass">
      <div v-show="loading" :class="absolute_center">
        <n-spin :show="true" size="medium" />
      </div>
      <div v-show="isEmpty" :class="absolute_center">
        <div class="relative w-full">
          <p class="absolute left-0 bottom-0 text-16px text-[#666] w-full text-center">{{ emptyTitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  loading: boolean
  empty: boolean
  emptyTitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  empty: false,
  emptyTitle: '暂无数据'
})

const placeholderClass =
  'bg-white dark:bg-dark transition-background-color duration-300 ease-in-out'
const absolute_center = 'absolute left-0 top-0 flex justify-center items-center wh-full'

const isEmpty = computed(() => !props.loading && props.empty)
const showPlaceholder = computed(() => props.loading || isEmpty.value)
</script>

<style lang="scss" scoped>
</style>
