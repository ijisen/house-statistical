import React from 'react';
import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;
/**
 * 基础数据 - TypeScript
 * */

// 枚举变量数据
export enum EnumDictKey {
  // 清空
  CLEAR = 'clear',
  // 新增
  CREATE = 'create',
  // 删除
  DELETE = 'del',
  // 域名
  DOMAIN = 'domain',
  // 下载
  DOWN = 'down',
  // 编辑
  EDIT = 'edit',
  // 导出
  EXPORT = 'export',
  // 导入
  IMPORT = 'import',
  // redirect 变量名
  REDIRECT = 'redirect',
  // 重新开始
  RESTART = 'reStart',
  // 查询
  SEARCH = 'search',
  // 刷新
  REFRESH = 'refresh',
  // 保存
  SAVE = 'save',
  // 开始
  START = 'start',
  // 暂停
  STOP = 'stop',
  // 展示|隐藏控制
  DISPLAY = 'display',
  // 默认
  DEFAULT = 'default',
}

// 用户类型枚举
export enum EnumUserType {
  admin = '1',
  user = '0',
  childUser = '2',
}

// 用户类型枚举
export enum EnumLanguageType {
  en = 'en-US',
  zh = 'zh-CN',
}

// 结算类型
export type SettlementType = 'online' | 'offline';

// 数据字典映射
export type DictDataItem = {
  dataKey: string | number;
  dataValue: string | number;
  desc?: string;
  descEn?: string;
};

// 用户数据
export type UserInfo = {
  userId?: React.Key;
  userName: string;
  settlementType: SettlementType;
  cellphone: string;
  userType: string;
  isAdmin?: boolean;
};

export interface InitialModelState {
  settings?: Partial<LayoutSettings>;
  currentUser?: UserInfo | undefined;
  fetchUserInfo?: () => Promise<UserInfo | undefined>;
}
