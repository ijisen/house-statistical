/**
 * whois查询 - 开放查询IP网段设置
 *
 * */
import React, { FC, useEffect, useState } from 'react';
import {  useIntl } from 'umi';
import { Layout, message as $Message, PageHeader } from 'antd';

/** 自定义函数 */
import assertObject from '@/utils/base/assertObject';

/** 接口 */
import { httpGetHouseVolumeListData } from '@/services/houseVolume';

/** 自定义组件 */
import Index from './_component/ComponentTable';

/** type 类申明 */
import { TableData } from '@/types/whoisIPWhiteList.d';


const PageContent: FC = (props) => {
  const { formatMessage } = useIntl();
  const [tableData, setTableData] = useState<TableData>({});
  const [tableLoading, setTableLoading] = useState(false);

  /** 获取表格列表数据 */
  const getTableData = () => {
    setTableLoading(true);
    httpGetHouseVolumeListData({
      pageNumber: 1,
      pageSize: 500,
    }).then(res => {
      // console.log(res);
      let { success, message, data } = assertObject(res) ? res : {
        success: false,
        message: formatMessage({ id: 'message.http.get.error' }),
        data: {
          list: [],
        },
      };
      if(!success) {
        $Message.error(message);
      }
      setTableLoading(false);
      setTableData({
        ...data,
      });
    }).catch(err => {
      console.log(err);
      setTableLoading(false);
    });
  };


  useEffect(() => {
    getTableData();
  }, []);

  return (
    <Layout>
      <Layout.Content>
        <PageHeader title={formatMessage({ id: 'menu.house.volume' })} />

        {/**  表格按钮  */}
        <Index loading={tableLoading} tableData={tableData} />
      </Layout.Content>
    </Layout>
  );
};

export default PageContent;
