import { isArray, isFunction, isObject, isNullOrUnDef } from '@/utils/is';
import { unref } from 'vue';
import type { Ref, ComputedRef } from 'vue';
import { set } from 'lodash-es';
import { FormSchema } from '../types';

interface UseFormValuesContext {
  defaultFormModel: Ref<any>;
  getSchema: ComputedRef<FormSchema[]>;
  formModel: Recordable;
}
export function useFormValues({ defaultFormModel, getSchema, formModel }: UseFormValuesContext) {
  // 加工 form values
  function handleFormValues(values: Recordable) {
    if (!isObject(values)) {
      return {};
    }
    const res: Recordable = {};
    for (const item of Object.entries(values)) {
      const [, value] = item;
      const [key] = item;
      if (
        !key ||
        (isArray(value) && value.length === 0) ||
        isFunction(value) ||
        isNullOrUnDef(value)
      ) {
        continue;
      }

      set(res, key, value);
    }
    return res;
  }

  //初始化默认值
  function initDefault() {
    const schemas = unref(getSchema);
    const obj: Recordable = {};
    schemas.forEach((item) => {
      const { defaultValue } = item;
      if (!isNullOrUnDef(defaultValue)) {
        obj[item.field] = defaultValue;
        formModel[item.field] = defaultValue;
      }
    });
    defaultFormModel.value = obj;
  }

  return { handleFormValues, initDefault };
}
