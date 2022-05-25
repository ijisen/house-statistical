/**
 * 域名解析 - API
 * */
import { request } from 'umi';
import { SearchDataParams } from '@/types/dns.d';
import qs from 'qs';

/** 获取当前域名的解析记录 */
export async function httpGetDNSListData(
  params: SearchDataParams,
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/resolution/rr/list', {
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取主机线路数据 */
export async function httpGetDictLineTypeData(options?: {
  [key: string]: any;
}) {
  return request<API.TableResponse>('/resolution/view/list', {
    ...(options || {}),
  });
}

/** 新增记录 */
export async function httpPostCreateRR(
  data: any,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/resolution/rr/add', {
    method: 'POST',
    data,
    ...(options || {}),
  });
}

/** 批量新增记录 */
export async function httpPostBatchCreateRR(
  data: any,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/resolution/rr/batchAdd', {
    method: 'POST',
    data,
    ...(options || {}),
  });
}

/**
 *  修改记录
 *  --> 修改RR
 *  --> 暂停RR
 *  --> 启动RR
 *  --> 批量暂停RR
 *  --> 批量启动RR
 *  */
export async function httpPutUpdateRR(
  data?: any,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/resolution/rr/update', {
    method: 'PUT',
    data,
    ...(options || {}),
  });
}

/** 删除记录 */

export async function httpDeleteRR(
  data: { id: string }[],
  options?: { [key: string]: any }) {
  return request<Record<string, any>>('/resolution/rr/delete', {
    method: 'DELETE',
    data,
    ...(options || {}),
  });
}

// 下载导入模板
export function httpDownloadTemp() {
  return '/resolution/rr/template/down';
}

// 导入数据
export function httpImportRR() {
  return '/resolution/rr/import';
}

/** 导出数据 */
export function httpExportRR(data: any) {
  const url = '/resolution/rr/export';
  console.log(`${url}?${qs.stringify(data)}`);
  return `${url}?${qs.stringify(data)}`;
}
