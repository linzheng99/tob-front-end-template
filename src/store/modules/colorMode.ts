import { defineStore } from "pinia";
import { useColorMode } from '@vueuse/core'

export const useColorModeStore = defineStore('app-color-mode', () => {
  const colorMode = useColorMode()

  function toggleMode() {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
  }

  return {
    themeColorMode: colorMode,
    toggleMode
  }
})
