<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <SimpleEditableTable />
  </n-config-provider>
</template>

<script setup lang="ts">
import SimpleEditableTable from './components/SimpleEditableTable.vue'

const themeOverrides = {
  common: {
    borderColor: 'rgba(80, 123, 189, 1)',
    primaryColor: '#3288FFFF',
    inputColor: 'rgba(15, 39, 74, 1)',
    textColor2: 'rgba(152, 193, 254, 1)',
    iconColor: 'rgba(152, 193, 254, 1)',
    popoverColor: 'rgba(15, 39, 74, 1)',
    hoverColor: 'rgba(45, 81, 133, 1)',
    inputColorDisabled: 'rgba(15, 39, 74, 1)',
    placeholderColorDisabled: 'rgba(118, 138, 168, 1)',
  },
  Pagination: {
    buttonIconColor: 'rgba(152, 193, 254, 1)',
    buttonIconColorHover: 'rgba(79, 119, 160, 1)',
    itemTextColorHover: '#FFFFFF',
    jumperTextColor: 'rgba(152, 193, 254, 1)',
    itemTextColorPressed: '#3288FFFF',
    itemTextColorActive: '#FFFFFF',
    jumperFontSizeLarge: '16px',
    buttonIconColorPressed: 'rgba(152, 193, 254, 1)',
    itemTextColor: 'rgba(152, 194, 254, 1)',
    itemTextColorDisabled: 'rgba(152, 194, 254, 1)',
    itemColorDisabled: 'rgba(36, 62, 101, 1)',
  },
  DataTable: {
    actionDividerColor: 'rgb(239, 239, 245)!',
    borderColor: 'rgba(41, 71, 119, 1)!',
    tdTextColor: 'rgba(255, 255, 255, 1)!',
    thTextColor: 'rgba(152, 193, 254, 1)!',
    thColorModal: 'rgba(250, 250, 252, 1)',
    thColor: 'rgba(32, 61, 104, 1)',
    tdColor: 'rgba(13, 34, 66, 1)',
    tdColorHover: 'rgba(45, 81, 133, 1)',
    tdColorStriped: 'rgba(13, 34, 66, 1)',
  },
}
</script>

<style scoped></style>
