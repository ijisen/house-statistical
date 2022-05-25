/**
 * 域名解析 - TypeScript
 * */

import { Merge } from '@/types/basic';

export enum EnumDNSKeywords {
  // 默认线路标识符
  OTHERS = 'others',
}

export enum EnumRecordStatusData {
  // 开启解析
  START = 1,
  // 暂停解析
  STOP = 2,
  // 宕机切换监控状态
  DowntimeSwitchMonitor = 16,
  // 宕机切换宕机状态
  DowntimeSwitchDowntime = 32,
  // 宕机切换加入的备份IP
  DowntimeToBackupIP = 64,
}

//  查询参数
export interface SearchDataParams {
  // 必填；待查询解析记录的zone的id，如baidu.com.
  zone?: string;
  // 主机记录 如 www.baidu.com.
  name?: string;
  // 解析类型 AAAA =》 aaa
  type?: string;
  // 解析记录值
  rdata?: string;
  // 智能线路的id?
  view?: string;
  // 解析记录状态(1=开启解析，2=暂停解析，16=宕机切换监控状态，32=宕机切换宕
  // 机状态，64=宕机切换加入的备份IP)
  flags?: number;
  pageSize?: number;
  pageNumber?: number;
}

/** 后台读取的表格列数据格式 */
interface ITableItem {
  id: string;
  // 为要添加解析记录的zone的id,如baidu.com.
  // 'zdns.cn.'
  zone: string;
  // 解析记录全名，含zone的name,如www.baidu.com.
  // 'zdns.cn.' | 'm.zdns.cn.' | '*.zdns.cn.'
  name: string;
  // 解析记录类型: A, AW, AAAA...
  type: string;
  // 记录值，详见
  // mx => 50 m.zdns.cn.
  rdata: string;
  // 智能线路的id，others为默认线路
  view: string;
  viewName?: string | null;
  // 一般为3600，60~86400
  ttl: number | null;
  // 解析记录状态
  flags: number;
  // 备注
  note: string,
  rrLists?: string | null;
}

// 表格数据
export type TableData = API.TableResponseData & {
  list?: ITableItem[];
};

// 前端配置的数据格式
export interface ITableItem {
  isSOA?: boolean;
  noAuthDelAndEdit?: boolean;
  opting?: boolean;
}

// 表格数据Item
export type  TFormData = Merge<Omit<ITableItem, 'viewName' | 'rrLists' | 'isSOA' | 'noAuthDelAndEdit' | 'opting'>, {
  id?: string;
  // 1 - 50
  mxPriority?: number;
  flags?: number;
  note?: string;
}>

// 提交数据时
export type  SubmitFormData = Merge<TFormData, {
  id: string;
}>

