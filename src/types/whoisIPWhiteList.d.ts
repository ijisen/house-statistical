/**
 *  Whois查询 - 开放查询IP网段设置 - TypeScript
 * */

export enum EnumRecordStatusData {
  // 开启
  START = 1,
  // 暂停
  STOP = 2,
}

//  查询参数
export interface SearchDataParams {
  pageSize?: number;
  pageNumber?: number;
}

/** 后台读取的表格列数据格式 */
interface ITableItem {
  id: string;
  // IP网段
  startIp: string;
  // IP网段
  endIp: string;
}

// 表格数据
export type TableData = API.TableResponseData & {
  list?: ITableItem[];
};

// 前端配置的数据格式
export interface ITableItem {
  opting?: boolean;
}

// 表单数据时
export type SubmitFormData = {
  id?: string;
  // 起始IP
  startIp: string;
  // 结束IP
  endIp: string;
}

