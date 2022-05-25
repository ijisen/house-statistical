/**
 * whois查询 - 开放查询IP网段设置
 *
 * */
import { Request, Response } from 'express';

const tableListData = () => {
  let arr = [];
  for (let i = 1; i < 11; i++) {
    arr.push({
      id: i,
      startIp: `192.168.1.1${i}`,
      endIp: `192.168.1.2${i}`,
    });
  }
  return arr;
};
export default {
  // 列表数据获取
  'GET /mock/house/volume/list': async (req: Request, res: Response) => {
    res.send({
      success: true,
      code: 1000,
      message: '请求成功',
      timestamp: 1648517225939,
      data: {
        pageNumber: 1,
        pageSize: 500,
        list: tableListData()
      },
    });
  },
};
