import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'border-base': 'border-gray-200 dark:border-gray-800',
    'bg-base': 'bg-white dark:bg-[#020420]',
    'bg-active': 'bg-gray:20',
    'c-base': 'c-#000000 dark:c-#ffffffd1',
    'icon-base': 'c-#000000 dark:c-#ffffffd1',
  },
  transformers: [
    transformerDirectives(),
  ],
})
