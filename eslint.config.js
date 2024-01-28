import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['dist', '**/dist/**', 'node_modules', '**/node_modules/**', 'public', '**/public/**'],
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': ['error', {
        order: [['script', 'template'], 'style'],
      }],
    },
  },
)
