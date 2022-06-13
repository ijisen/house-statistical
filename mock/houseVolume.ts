/**
 * whois查询 - 开放查询IP网段设置
 *
 * */
import { Request, Response } from 'express';

import houseData from '../src/houseData';

const tableListData = () => {

  return houseData.map((item, index) => ({ id: index, ...item }));
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
        list: tableListData(),
      },
    });
  },
};
