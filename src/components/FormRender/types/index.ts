import { ButtonProps, GridItemProps, GridProps } from "naive-ui"
import { ComponentType } from "./component"

/**
 * @description FormItem 配置项
 * @param label - 标签文本
 * @param path - 对象路径
 * @param placeholder - 占位符
 * @param value - key
 * @param itemType - 类型
 * @param selectConfig - select类型config
 */
export interface FormItemType {
  label: string
  path?: string
  placeholder?: string
  disabled?: TwoAryFunc | null
  value: string
  itemType: string,
  selectConfig?: selectConfig
  checkboxList?: Options<string>[]
  cascaderConfig?: cascaderConfig
}

type TwoAryFunc = (a: any, b: any) => boolean

export type Options<T extends any> = {
  [key: string]: T;
}

export interface selectConfig {
  toggleFilter?: boolean
  options: Options<string>[]
  labelField?: string
  valueField?: string
  childrenField?: string
}

export interface cascaderConfig {
  options: Options<string>[]
  labelField?: string
  valueField?: string
  childrenField?: string
}

/**
 * @description form主题config
 * @param size - formItem尺码
 * @param labelPlacement - label放置位置
 * @param labelWidth - label的宽度
 * @param inline - 表单的整体结构 纵向/横向
 */
export interface FormConfig {
  size?: 'small' | 'medium' | 'large'
  labelPlacement?: 'left' | 'top'
  labelWidth?: number | string | 'auto'
  inline?: boolean
  labelAlign?: 'left' | 'right'
}

/**
 * @description formItem主题config
 * @param xGap - 横向元素相距
 * @param yGap - 纵向元素相距
 * @param cols - 一行多少个
 */
export interface FormItemConfig {
  xGap?: string
  yGap?: string
  cols?: number
  requireMarkPlacement?: 'left' | 'right' | 'right-hanging'
}


/**
 * @description 表单配置
 * @param inline 行内表单
 * @param size 大小
 * @param schemas 渲染组件配置
 * @param gridProps grid 配置
 * @param giProps gi 配置
 * @param isFull 组件 width 是否100%
 * @param showActionButtonGroup 是否展示操作按钮
 * @param showSubmitButton 是否展示提交按钮
 * @param submitButtonOptions 提交按钮配置
 * @param submitButtonText 提交按钮文字
 * @param showResetButton 是否展示重置按钮
 * @param resetButtonOptions 重置按钮配置
 * @param resetButtonText 重置按钮文字
 * @param resetButtonOptions 重置按钮配置
 * @param resetFunc 重置函数
 * @param submitFunc 提交函数
 */
export interface FormProps {
  inline: boolean;
  size: string;
  schemas?: FormSchema[];
  gridProps?: GridProps;
  giProps?: GridItemProps;
  isFull?: boolean
  showActionButtonGroup?: boolean;
  showSubmitButton?: boolean;
  submitButtonOptions?: Partial<ButtonProps>;
  submitButtonText?: string;
  showResetButton?: boolean;
  resetButtonOptions?: Partial<ButtonProps>;
  resetButtonText?: string;
  resetFunc?: () => Promise<void>;
  submitFunc?: () => Promise<void>;
}

/**
 * @description 表单内组件配置
 * @param field 唯一key
 * @param label 标签
 * @param component 组件名
 * @param componentProps 组件属性
 * @param defaultValue 默认值
 * @param isFull 组件样式 width 是否100%
 * @param slot 插槽名字
 * @param showLabel 标签是否隐藏
 * @param gridProps grid gi 的配置
 * @param rules 表单校验
 */
export interface FormSchema {
  field: string;
  label: string;
  component?: ComponentType;
  componentProps?: object;
  defaultValue?: any;
  isFull?: boolean;
  slot?: string
  showLabel?: boolean
  giProps?: GridItemProps
  rules?: object | object[];
}

/**
 * @description 表单的方法
 * @param submit 提交
 * @param validate 校验
 * @param clearValidate 清空校验
 * @param setProps
 * @param resetFields 重置form表单数据
 */
export interface FormActionType {
  submit: () => Promise<any>;
  validate: (nameList?: any[]) => Promise<any>;
  clearValidate: (name?: string | string[]) => Promise<void>;
  setProps: (formProps: Partial<FormProps>) => Promise<void>;
  // setSchema: (schemaProps: Partial<FormSchema[]>) => Promise<void>;
  // setFieldsValue: (values: Recordable) => void;
  // getFieldsValue: () => Recordable;
  resetFields: () => Promise<void>;
  // setLoading: (status: boolean) => void;
}

export type RegisterFn = (formInstance: FormActionType) => void;

export type UseFormReturnType = [RegisterFn, FormActionType];
