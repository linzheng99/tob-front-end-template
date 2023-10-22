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
 * @param resetFunc 重置函数
 * @param submitFunc 提交函数
 */
export interface FormProps {
  // 行内表单
  inline: boolean;
  // 表单大小
  size: string;
  schemas?: FormSchema[];
  gridProps?: GridProps;
  giProps?: GridItemProps;
  isFull?: boolean
  loading?: boolean
  // 操作按钮
  showActionButtonGroup?: boolean;
  // 提交按钮
  showSubmitButton?: boolean;
  // 提交按钮配置
  submitButtonOptions?: Partial<ButtonProps>;
  // 提交按扭文字
  submitButtonText?: string;
  // 重置按钮
  showResetButton?: boolean;
  // 重置按钮配置
  resetButtonOptions?: Partial<ButtonProps>;
  // 重置按扭文字
  resetButtonText?: string;
  resetFunc?: () => Promise<void>;
  submitFunc?: () => Promise<void>;
}

export interface FormSchema {
  // 唯一 key
  field: string;
  // 标签名
  label: string;
  // 组件名
  component?: ComponentType;
  // 组件属性
  componentProps?: object;
  // 默认值
  defaultValue?: any;
  // 组件样式 width 是否100%
  isFull?: boolean;
  // 插槽名字
  slot?: string
  // 标签是否隐藏
  showLabel?: boolean
  // grid gi 的配置
  giProps?: GridItemProps
  rules?: object | object[];
}

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
