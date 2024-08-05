import type { ComputedRef, Ref } from 'vue'
import { toRaw, unref } from 'vue'
import type { FormActionType, FormProps, FormSchema } from '../types'
import { isFunction } from '@/utils/is'

declare type EmitType = (event: string, ...args: any[]) => void

export interface UseFormActionContext {
  emit: EmitType
  getProps: ComputedRef<FormProps>
  getSchema: ComputedRef<FormSchema[]>
  formModel: Recordable
  formElRef: Ref<FormActionType>
  defaultFormModel: Recordable
  loadingSub: Ref<boolean>
  handleFormValues: Function
}

export function useFormEvents({
  emit,
  getProps,
  formModel,
  getSchema,
  formElRef,
  defaultFormModel,
  loadingSub,
  handleFormValues,
}: UseFormActionContext) {
  // 验证
  async function validate() {
    return unref(formElRef)?.validate()
  }

  // 提交
  async function handleSubmit(e?: Event): Promise<object | boolean> {
    e && e.preventDefault()
    loadingSub.value = true
    const { submitFunc } = unref(getProps)

    if (submitFunc && isFunction(submitFunc)) {
      try {
        await submitFunc()
      }
      catch (error) {
        console.error(error)
      }
      finally {
        loadingSub.value = false
      }
      return false
    }
    const formEl = unref(formElRef)
    if (!formEl)
      return false
    try {
      await validate()
      const values = getFieldsValue()
      loadingSub.value = false
      emit('submit', values)
      return values
    }
    catch (error: any) {
      emit('submit', false)
      loadingSub.value = false
      console.error(error)
      return false
    }
  }

  // 清空校验
  async function restoreValidation() {
    await unref(formElRef)?.restoreValidation()
  }

  // 重置
  async function resetFields(): Promise<void> {
    const { resetFunc } = unref(getProps)
    resetFunc && isFunction(resetFunc) && (await resetFunc())

    const formEl = unref(formElRef)
    if (!formEl)
      return
    Object.keys(formModel).forEach((key) => {
      formModel[key] = unref(defaultFormModel)[key] || null
    })
    await restoreValidation()
    const fromValues = handleFormValues(toRaw(unref(formModel)))
    emit('reset', fromValues)
  }

  // 获取表单值
  function getFieldsValue(): Recordable {
    const formEl = unref(formElRef)
    if (!formEl)
      return {}
    return handleFormValues(toRaw(unref(formModel)))
  }

  // 设置表单字段值
  async function setFieldsValue(values: Recordable): Promise<void> {
    const fields = unref(getSchema)
      .map(item => item.field)
      .filter(Boolean)

    Object.keys(values).forEach((key) => {
      const value = values[key]
      if (fields.includes(key))
        formModel[key] = value
    })
  }

  // 获取表单配置项schema
  async function getFormSchema(): Promise<FormSchema[]> {
    return unref(getSchema)
  }

  // 设置按扭的loading状态
  function setLoading(value: boolean): void {
    loadingSub.value = value
  }

  return {
    handleSubmit,
    validate,
    resetFields,
    getFieldsValue,
    restoreValidation,
    setFieldsValue,
    getFormSchema,
    setLoading,
  }
}
