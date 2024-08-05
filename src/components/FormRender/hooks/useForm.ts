import type { ComputedRef, Ref } from 'vue'
import { nextTick, onUnmounted, ref, unref, watch } from 'vue'
import type { FormActionType, FormProps, FormSchema, UseFormReturnType } from '../types/index'

// eslint-disable-next-line ts/ban-types
export function getDynamicProps<T extends {}, U>(props: T): Partial<U> {
  const ret: Recordable = {}

  Object.keys(props).map(key =>
    ret[key] = unref((props as Recordable)[key]),
  )

  return ret as Partial<U>
}

export type DynamicProps<T> = {
  [P in keyof T]: Ref<T[P]> | T[P] | ComputedRef<T[P]>;
}

type Props = Partial<DynamicProps<FormProps>>

export function useForm(props?: Props): UseFormReturnType {
  const formRef = ref<Nullable<FormActionType>>(null)
  const loadedRef = ref<Nullable<boolean>>(false)

  /**
   * @description 获取form表单上面的方法
   */
  async function getForm() {
    const form = unref(formRef)

    if (!form)
      console.error('No instance form')

    await nextTick()
    return form as FormActionType
  }

  /**
   * @description 给表单注册的方法
   */
  function register(instance: FormActionType) {
    onUnmounted(() => {
      formRef.value = null
      loadedRef.value = null
    })

    if (unref(loadedRef) && instance === unref(formRef))
      return

    formRef.value = instance
    loadedRef.value = true

    watch(
      () => props,
      () => {
        props && instance.setProps(getDynamicProps(props))
      },
      {
        immediate: true,
        deep: true,
      },
    )
  }

  const methods: FormActionType = {
    setProps: async (formProps: Partial<FormProps>) => {
      const form = await getForm()
      await form.setProps(formProps)
    },

    getFieldsValue: <T>() => {
      return unref(formRef)?.getFieldsValue() as T
    },

    setFieldsValue: async (values: Recordable) => {
      const form = await getForm()
      await form.setFieldsValue(values)
    },

    resetFields: async () => {
      const form = await getForm()
      await form.resetFields()
    },

    restoreValidation: async () => {
      const form = await getForm()
      await form.restoreValidation()
    },

    submit: async (): Promise<any> => {
      const form = await getForm()
      return form.submit()
    },

    validate: async (): Promise<Recordable[][]> => {
      const form = await getForm()
      return form.validate()
    },

    getFormSchema: async (): Promise<FormSchema[]> => {
      const form = await getForm()
      return form.getFormSchema()
    },

    setLoading: async (status: boolean): Promise<void> => {
      const form = await getForm()
      form.setLoading(status)
    },
  }

  return [register, methods]
}
