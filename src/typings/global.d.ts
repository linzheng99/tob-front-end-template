declare type Recordable<T = any> = Record<string, T>

interface Window {
  $loadingBar?: import('naive-ui').LoadingBarProviderInst
  $dialog?: import('naive-ui').DialogProviderInst
  $message?: import('naive-ui').MessageProviderInst
  $notification?: import('naive-ui').NotificationProviderInst
}

declare type TimeoutHandle = ReturnType<typeof setTimeout>
declare type Nullable<T> = T | null
declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
