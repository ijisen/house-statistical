import { Merge } from '@/types/basic';
import { TFormData } from '@/types/dns';
import React from 'react';
import ex from 'umi/dist';

/**
 *  Whois查询 - 开放查询IP网段设置 - TypeScript
 * */

//  查询参数
export interface SearchDataParams {
  pageSize?: number;
  pageNumber?: number;
}

/** 后台读取的表格列数据格式 */
interface ITableItem {
  id: React.Key;
  // 日期
  date: string;
  // 区域： 1 = 中心城区 | 2 = 郊区新城
  districtType: 1 | 2;
  // 房屋类型 1 = 新房 | 2 = 二手房
  houseType: 1 | 2;
  // 套数
  count: number;
  // 面积
  area: number;
}

// 表格数据
export type TableData = API.TableResponseData & {
  list?: ITableItem[];
};

export declare type TCheckedList =
  | 'centerNew'
  | 'townNew'
  | 'centerSecond'
  | 'townSecond';

export declare type TStatisticType = 'count' | 'area' | 'averageArea';

export interface IChartDataItem extends ITableItem {
  averageArea: number;
}

export interface IChartData {
  date: string[];
  centerNew: IChartDataItem[];
  townNew: IChartDataItem[];
  centerSecond: IChartDataItem[];
  townSecond: IChartDataItem[];
}

// 表单数据时
export type SubmitFormData = Merge<
  TFormData,
  {
    id?: React.Key;
  }
>;
