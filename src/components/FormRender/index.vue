<template>
  <n-form v-bind="getProps" :model="formModel" ref="formElRef">
    <n-grid v-bind="getGrid">
      <n-gi v-bind="schema.giProps" v-for="schema in getSchema" :key="schema.field">
        <n-form-item :label="schema.label" :path="schema.field" :show-label="schema.showLabel">
          <!--判断插槽-->
          <template v-if="schema.slot">
            <slot
              :name="schema.slot"
              :model="formModel"
              :field="schema.field"
              :value="formModel[schema.field]"
            ></slot>
          </template>
          <!--动态渲染表单组件-->
          <component
            v-else
            v-bind="getComponentProps(schema)"
            :is="schema.component"
            v-model:value="formModel[schema.field]"
            :class="`${schema.isFull != false && getProps.isFull ? 'w-full' : ''}`"
          />
        </n-form-item>
      </n-gi>
      <n-gi v-if="getProps.showActionButtonGroup" :span="24">
        <n-space justify="center">
          <n-button
            v-if="getProps.showSubmitButton"
            v-bind="getSubmitBtnOptions"
            @click="handleSubmit"
            :loading="loadingSub"
            >{{ getProps.submitButtonText }}</n-button
          >
          <n-button
            v-if="getProps.showResetButton"
            v-bind="getResetBtnOptions"
            @click="resetFields"
            >{{ getProps.resetButtonText }}</n-button
          >
        </n-space>
      </n-gi>
    </n-grid>
  </n-form>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, unref, onMounted, Ref, watch } from 'vue'
import { FormProps, FormSchema } from './types'
import { useFormValues } from './hooks/useFormValues'
import { FormActionType } from './types/index'
import { deepMerge } from '@/utils'
import { createPlaceholderMessage } from './helper'
import { basicProps } from './props'
import { GridProps } from 'naive-ui'
import { useFormEvents } from './hooks/useFormEvents'
import { isArray } from '@/utils/is'

export default defineComponent({
  name: 'basicFrom',
  components: {},
  props: {
    ...basicProps
  },
  emits: ['reset', 'submit', 'register'],
  setup(props, { emit }) {
    const formElRef = ref<Nullable<FormActionType>>(null)
    const defaultFormModel = ref<Recordable>({})
    const formModel = reactive<Recordable>({})
    const propsRef = ref<Partial<FormProps>>({})
    const schemaRef = ref<Nullable<FormSchema[]>>(null)
    const loadingSub = ref(false)
    const isUpdateDefaultRef = ref(false)

    const getProps = computed(
      (): FormProps => {
        const formProps = { ...props, ...unref(propsRef) } as FormProps
        const rulesObj: any = {
          rules: {}
        }
        const schemas: any = formProps.schemas || []

        schemas.forEach((item) => {
          if (item.rules && isArray(item.rules)) {
            rulesObj.rules[item.field] = item.rules
          }
        })

        return { ...formProps, ...unref(rulesObj) }
      }
    )

    const getGrid = computed(
      (): GridProps => {
        const { gridProps } = unref(getProps)
        return {
          ...gridProps
        }
      }
    )

    const getSchema = computed((): FormSchema[] => {
      const schemas: FormSchema[] = unref(schemaRef) || (unref(getProps).schemas as any)
      return schemas as FormSchema[]
    })

    const getSubmitBtnOptions = computed(() => {
      return Object.assign(
        {
          size: props.size,
          type: 'primary'
        },
        props.submitButtonOptions
      )
    })

    const getResetBtnOptions = computed(() => {
      return Object.assign(
        {
          size: props.size,
          type: 'default'
        },
        props.resetButtonOptions
      )
    })

    const { handleFormValues, initDefault } = useFormValues({
      defaultFormModel,
      getSchema,
      formModel
    })

    const { handleSubmit, validate, clearValidate, resetFields } = useFormEvents({
      emit,
      getProps,
      formModel,
      getSchema,
      formElRef: formElRef as Ref<FormActionType>,
      defaultFormModel,
      loadingSub,
      handleFormValues
    })

    async function setProps(formProps: Partial<FormProps>): Promise<void> {
      propsRef.value = deepMerge(unref(propsRef) || {}, formProps)
    }

    function getComponentProps(schema) {
      const compProps = schema.componentProps ?? {}
      const component = schema.component
      return {
        clearable: true,
        placeholder: createPlaceholderMessage(unref(component)),
        ...compProps
      }
    }

    // form 表单emit自定义方法
    const formActionType: Partial<FormActionType> = {
      validate,
      clearValidate,
      setProps,
      resetFields,
      submit: handleSubmit
    }

    watch(
      () => getSchema.value,
      (schema) => {
        if (unref(isUpdateDefaultRef)) {
          return
        }
        if (schema?.length) {
          initDefault()
          isUpdateDefaultRef.value = true
        }
      }
    )

    onMounted(() => {
      initDefault()
      // 挂载时触发 register 注册
      emit('register', formActionType)
    })

    return {
      formElRef,
      formModel,
      getSchema,
      getComponentProps,
      getGrid,
      getProps,
      loadingSub,
      handleSubmit,
      getSubmitBtnOptions,
      getResetBtnOptions,
      resetFields
    }
  }
})
</script>

<style scoped></style>
