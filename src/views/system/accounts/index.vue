<template>
  <div id="app_content" class="flex flex-col">
    账号
    <div>
      <n-input v-model:value="accountsValue" />
    </div>
    <div>
      <LoadingEmptyWrapper :loading="false" :empty="!accountsValue">
        <div>321</div>
      </LoadingEmptyWrapper>
    </div>
    <div>
      <SvgIcon @click="test()" icon="ep-plus"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoadingEmptyWrapper from '@/components/LoadingEmptyWrapper/index.vue';
import SvgIcon from '@/components/SvgIcon/index.vue';

const accountsValue = ref('')
const test = () => {
  debugger
  console.log(1);
}
</script>

<style lang="scss" scoped>
</style>
