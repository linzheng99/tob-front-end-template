import { useMessage } from 'naive-ui'

type types = 'success' | 'info' | 'warning' | 'error' | 'loading'

interface MessageProps {
  type: types
  text: string
  keepAliveOnHover?: boolean
  icon?: () => import('vue').VNodeChild
  duration?: number
  closable?: boolean
  onClose?: () => void
  placement?: string
}

export function useCreateMessage() {
  const message = useMessage()

  function createMessage({
    type,
    text,
    keepAliveOnHover = false,
    icon,
    duration = 3000,
    closable = false,
    onClose,
  }: MessageProps) {
    message[type](text, { keepAliveOnHover, icon, duration, closable, onClose } || {})
  }

  return {
    createMessage,
  }
}
