/**
 * whois查询 - 开放查询IP网段设置
 *
 * */
import React, { FC, useEffect, useState } from 'react';
import { FormattedMessage, history, useIntl } from 'umi';
import { Button, Layout, message as $Message, Modal, PageHeader } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import classNames from 'classnames';

/** 自定义函数 */
import assertObject from '@/utils/base/assertObject';

/** 接口 */
import { httpGetHouseVolumeListData } from '@/services/houseVolume';

/** 自定义组件 */
import ComponentTable from './_component/ComponentTable';
import AddFormComponent from './_component/AddFormComponent';

/** type 类申明 */
import { EnumDictKey } from '@/types/basic.d';
import { ITableItem, TableData } from '@/types/whoisIPWhiteList.d';

/** 自定义样式 */
import style from './style.less';
import { utilUpdateTableItemInfo } from '@/utils/commont_rely';


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
        console.log('EnumDictKey.DELETE')
        break;
      default:
        console.log(`undefined Role ${role}`);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);
  return (
    <Layout className={classNames('zdns-page-layout', style.IPWhiteList)} style={{ minWidth: 400 }}>
      <Layout.Content>
        <PageHeader
          onBack={() => history.goBack()}
          title={formatMessage({ id: 'menu.whois.whiteList' })}
        />
        {/**  操作栏按钮  */}
        <div className="page-opt-btn-group">
          <Button className="mrs" onClick={() => handleOptBtnClick(EnumDictKey.CREATE)}>
            <FormattedMessage id="whois.whiteList.create" />
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
