<template>
  <n-form v-bind="getProps" ref="formElRef" :model="formModel">
    <n-grid v-bind="getGrid">
      <n-gi v-for="schema in getSchema" v-bind="schema.giProps || getProps.giProps" :key="schema.field">
        <n-form-item :label="schema.label" :path="schema.field" :show-label="schema.showLabel">
          <!-- 判断插槽 -->
          <template v-if="schema.slot">
            <slot
              :name="schema.slot"
              :model="formModel"
              :field="schema.field"
              :value="formModel[schema.field]"
            />
          </template>
          <!-- 动态渲染表单组件 -->
          <component
            v-bind="getComponentProps(schema)"
            :is="schema.component"
            v-else-if="schema.component"
            v-model:value="formModel[schema.field]"
            :class="`${schema.isFull !== false && getProps.isFull ? 'w-full' : ''}`"
          />
        </n-form-item>
      </n-gi>
      <n-gi v-if="getProps.showActionButtonGroup" :span="24">
        <n-space justify="center">
          <n-button
            v-if="getProps.showSubmitButton"
            v-bind="getSubmitBtnOptions"
            :loading="loadingSub"
            @click="handleSubmit"
          >
            {{ getProps.submitButtonText }}
          </n-button>
          <n-button
            v-if="getProps.showResetButton"
            v-bind="getResetBtnOptions"
            @click="resetFields"
          >
            {{ getProps.resetButtonText }}
          </n-button>
        </n-space>
      </n-gi>
    </n-grid>
  </n-form>
</template>

<script lang="ts">
import type { Ref } from 'vue'
import { computed, defineComponent, onMounted, reactive, ref, unref, watch } from 'vue'
import type { GridProps } from 'naive-ui'
import type { FormActionType, FormProps, FormSchema } from './types'
import { useFormValues } from './hooks/useFormValues'
import { basicProps } from './props'
import { useFormEvents } from './hooks/useFormEvents'
import { deepMerge } from '@/utils'
import { createPlaceholderMessage } from '@/utils/helper/createPlaceholder'
import { isArray } from '@/utils/is'

export default defineComponent({
  name: 'BasicFrom',
  components: {},
  props: {
    ...basicProps,
  },
  emits: ['reset', 'submit', 'register'],
  setup(props, { emit }) {
    const formElRef = ref<Nullable<FormActionType>>(null)
    /**
     * @description 默认值的数据源
     */
    const defaultFormModel = ref<Recordable>({})
    const formModel = reactive<Recordable>({})
    const propsRef = ref<Partial<FormProps>>({})
    const schemaRef = ref<Nullable<FormSchema[]>>(null)
    const loadingSub = ref(false)
    const isUpdateDefaultRef = ref(false)

    /**
     * @description 组件上面的 props
     */
    const getProps = computed(
      (): FormProps => {
        const formProps = { ...props, ...unref(propsRef) } as FormProps
        const rulesObj: any = {
          rules: {},
        }
        const schemas: FormSchema[] = formProps.schemas || []

        schemas.forEach((item) => {
          if (item.rules && isArray(item.rules))
            rulesObj.rules[item.field] = item.rules
        })

        return { ...formProps, ...unref(rulesObj) }
      },
    )

    /**
     * @description grid 的配置
     */
    const getGrid = computed(
      (): GridProps => {
        const { gridProps } = unref(getProps)
        return {
          ...gridProps,
        }
      },
    )

    /**
     * @description schema 的数据
     */
    const getSchema = computed((): FormSchema[] => {
      const schemas: FormSchema[] = unref(schemaRef) || (unref(getProps).schemas as any)
      return schemas as FormSchema[]
    })

    /**
     * @description 提交submit btn 的配置
     */
    const getSubmitBtnOptions = computed(() => {
      return Object.assign(
        {
          size: props.size,
          type: 'primary',
        },
        props.submitButtonOptions,
      )
    })

    /**
     * @description 重置reset btn 的配置
     */
    const getResetBtnOptions = computed(() => {
      return Object.assign(
        {
          size: props.size,
          type: 'default',
        },
        props.resetButtonOptions,
      )
    })

    /**
     * @description 处理 form model 的值
     */
    const { handleFormValues, initDefault } = useFormValues({
      defaultFormModel,
      getSchema,
      formModel,
    })

    /**
     * @description 获得form定义的方法
     */
    const {
      handleSubmit,
      validate,
      restoreValidation,
      resetFields,
      getFieldsValue,
      setFieldsValue,
      getFormSchema,
    } = useFormEvents({
      emit,
      getProps,
      formModel,
      getSchema,
      formElRef: formElRef as Ref<FormActionType>,
      defaultFormModel,
      loadingSub,
      handleFormValues,
    })

    async function setProps(formProps: Partial<FormProps>): Promise<void> {
      propsRef.value = deepMerge(unref(propsRef) || {}, formProps)
    }

    /**
     * @description 匹配组件并赋值对应组件的所有配置
     */
    function getComponentProps(schema: FormSchema) {
      const compProps = schema.componentProps ?? {}
      const component = schema.component
      return {
        clearable: true,
        placeholder: createPlaceholderMessage(unref(component)),
        ...compProps,
      }
    }

    /**
     * @description form 表单的二次封装自定义方法
     */
    const formActionType: Partial<FormActionType> = {
      validate,
      restoreValidation,
      setProps,
      resetFields,
      getFieldsValue,
      setFieldsValue,
      getFormSchema,
      submit: handleSubmit,
    }

    watch(
      () => getSchema.value,
      (schema) => {
        if (unref(isUpdateDefaultRef))
          return

        if (schema?.length) {
          initDefault()
          isUpdateDefaultRef.value = true
        }
      },
      {
        deep: true,
      },
    )

    onMounted(() => {
      // 挂载时初始化数据
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
      resetFields,
    }
  },
})
</script>

<style scoped></style>
