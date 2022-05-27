/**
 * whois查询 - 开放查询IP网段设置
 *
 * */
import React, { FC, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { Button, Layout, message as $Message, PageHeader } from 'antd';

/** 自定义函数 */
import assertObject from '@/utils/base/assertObject';

/** 接口 */
import { httpGetHouseVolumeListData } from '@/services/houseVolume';

/** 自定义组件 */
import ComponentTable from './_component/ComponentTable';
import AddFormComponent from './_component/AddFormComponent';

/** type 类申明 */
import { EnumDictKey } from '@/types/basic.d';
import { ITableItem, TableData } from '@/types/houseType.d';


const PageContent: FC = (props) => {
  const { formatMessage } = useIntl();
  const [tableData, setTableData] = useState<TableData>({});
  const [loading, setLoading] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);

  /** 获取表格列表数据 */
  const getTableData = () => {
    setLoading(true);
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
      setLoading(false);
      setTableData({
        ...data,
      });
    }).catch(err => {
      console.log(err);
      setLoading(false);
    });
  };


  /** 操作栏按钮点击事件 */
  const handleOptBtnClick = (role: EnumDictKey, data?: ITableItem[]) => {
    console.log(`handleOptBtnClick Role:  ${role}`);
    switch (role) {
      case EnumDictKey.CREATE:
        // 新增记录
        setCreateModalVisible(true);
        break;
      default:
        console.log(`undefined Role ${role}`);
    }
  };

  /** 表格按钮点击事件*/
  const handleTableClick = (role: EnumDictKey, record: ITableItem) => {
    switch (role) {
      case EnumDictKey.DELETE:
        console.log('EnumDictKey.DELETE');
        break;
      default:
        console.log(`undefined Role ${role}`);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);
  return (
    <Layout className="zdns-page-layout" style={{ minHeight: '100vh' }}>
      <Layout.Content>
        <PageHeader title={formatMessage({ id: 'menu.house.table' })} />
        {/**  操作栏按钮  */}
        <div className="pbl">
          <Button className="mrs" onClick={() => handleOptBtnClick(EnumDictKey.CREATE)}>
            <FormattedMessage id="keywords.add" />
          </Button>
        </div>

        {/**  表格按钮  */}
        <ComponentTable
          loading={loading}
          tableData={tableData}
          onBtnClick={handleTableClick}
        />

        {/** 新增白名单 */}
        <AddFormComponent visible={createModalVisible}
                          changeModalVisible={setCreateModalVisible} />

      </Layout.Content>
    </Layout>
  );
};

export default PageContent;
