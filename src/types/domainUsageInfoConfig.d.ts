/**
 * 域名使用信息配置功能 - TypeScript
 * */

/**
 * 字段类型
 * */
import React from 'react';

export enum EnumFieldType {
  // 单行文本框
  TEXT = 'text',
  // 文本域
  TEXTAREA = 'textarea',
  // select 选择框
  SELECT = 'select',
  // 日期类型
  DATE = 'date',
}

/**
 * select array Data
 * */
export interface ISelectItems {
  label: string;
  value: React.Key;
  isDefaultValue?: boolean;
  editable?: boolean;
  hasErr?: boolean;
}


//  查询参数
export interface SearchDataParams {
  pageSize?: number;
  pageNumber?: number;
}

/** 后台读取的表格列数据格式 */
interface ITableItem {
  id: string;
  // 字段名称
  fieldName: string;
  // 字段类型
  fieldType: string;
  // fieldType === select
  items?: ISelectItems[];
  // 默认值
  defaultValue?: string;
  // 是否显示
  showStatus: boolean;
  // 是否可删除
  isDelete: boolean;
}

// 表格数据
export type TableData = API.TableResponseData & {
  list?: ITableItem[];
};

// 前端配置的数据格式
export interface ITableItem {
  opting?: boolean;
}

// 提交数据时
export type  SubmitFormData = {
  id?: string;
  userId: React.Key;
  // 字段名称
  fieldName?: string;
  // 字段类型
  fieldType?: string;
  // fieldType === select
  items?: ISelectItems[];
  // 默认值
  defaultValue?: React.Key;
}
