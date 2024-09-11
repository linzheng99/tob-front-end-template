interface CreateDialogType {
  content: {
    type: 'info' | 'success' | 'warning' | 'error'
    title?: string
    content?: string
    positiveText?: string
    negativeText?: string
  }
  onPositiveClick: () => Promise<void> | void
  onNegativeClick?: () => Promise<void> | void
}

export function createDialog({ content: {
  type,
  title = '提示',
  content = '你确定要删除吗？',
  positiveText = '确定',
  negativeText = '取消',
}, onPositiveClick, onNegativeClick }: CreateDialogType) {
  const dialog: any = window.$dialog?.[type]({
    title,
    content,
    positiveText,
    negativeText,
    maskClosable: false,
    onPositiveClick: async () => {
      dialog.loading = true
      try {
        await onPositiveClick()
      }
      catch (error) {
        return false
      }
      finally {
        dialog.loading = false
      }
    },
    onNegativeClick: () => {
      onNegativeClick?.()
    },
    onClose: () => {
      onNegativeClick?.()
    },
  })
}
