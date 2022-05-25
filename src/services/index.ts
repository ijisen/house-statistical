/**
 * 基础数据 - API
 * */
import { request } from 'umi';
import { UserInfo } from '@/types/basic.d';


export type ResponseCurrentUser = API.Response & {
  data?: UserInfo;
};

/** 获取当前的用户 GET /user/getUserInfo */
export async function httpGetUserInfo(options?: { [key: string]: any }) {
  return request<ResponseCurrentUser>('/user/getUserInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据关键词查询会员列表数据 API （选择使用）*/
export async function requestGetMemberList(
  params: {},
  options?: { [key: string]: any }) {
  return request<Record<string, any>>('/member/beMembers', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
