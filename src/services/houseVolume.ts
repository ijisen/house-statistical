/**
 * 开放查询IP网段设置 - API
 * */
import { request } from 'umi';

/** 获取IP白名单数据 */
export async function httpGetHouseVolumeListData(
  params: {},
  options?: { [key: string]: any },
) {
  return request<API.TableResponse>('/house/volume/list', {
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
