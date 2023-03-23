<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <div class="setting_button">
        <SvgIcon icon="material-symbols:settings-rounded" />
      </div>
    </template>
    主题配置
  </n-tooltip>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.setting_button {
  height: 100%;
  color: #ffffff;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  &:hover {
    background-color: #333333;
    cursor: pointer;
  }
}
</style>
