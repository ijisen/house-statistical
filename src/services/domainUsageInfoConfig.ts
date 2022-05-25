/**
 * 域名使用信息配置功能 - API
 * */
import { request } from 'umi';

/** 获取列表数据 */
export async function httpGetDomainCustomListData(
  params: {},
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/domain/custom/item/list', {
    params: {
      ...params,
    },
    ...(options || {}),
  });
}


/** 新增数据 */
export async function httpPostDomainCustomItem(
  data: any,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/domain/custom/item/list', {
    method: 'POST',
    data,
    ...(options || {}),
  });
}

/** 删除数据 */
export async function httpDeleteDomainCustomItem(
  id: string,
  options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/domain/custom/item/delete/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** 显隐控制 */
export async function httpPatchDomainCustomItemDisplay(
  data: any,
  options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/domain/custom/item/display`, {
    method: 'PATCH',
    data,
    ...(options || {}),
  });
}

