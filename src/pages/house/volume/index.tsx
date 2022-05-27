/**
 * whois查询 - 开放查询IP网段设置
 *
 * */
import React, { FC, useEffect, useState } from 'react';
import { useIntl } from 'umi';
import { Layout, message as $Message, PageHeader, Checkbox } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

/** 自定义函数 */
import assertObject from '@/utils/base/assertObject';

/** 接口 */
import { httpGetHouseVolumeListData } from '@/services/houseVolume';

/** type 类申明 */
import { TableData, ITableItem } from '@/types/houseType.d';
import { EnumDictKey } from '@/types/basic.d';

/** 自定义组件 */
import ComponentTable from './_component/ComponentTable';

interface IChartData {
  centerNew: ITableItem[],
  townNew: ITableItem[],
  centerSecond: ITableItem[],
  townSecond: ITableItem[],
}

const initChartData = {
  centerNew: [],
  townNew: [],
  centerSecond: [],
  townSecond: [],
};

const buildChartData = (data: ITableItem[]) => {
  const chartData: IChartData = { ...initChartData };
  for (let i = 0, len = data.length; i < len; i++) {
    const item = data[i];
    const { districtType, houseType } = item;
    const type = `${districtType}${houseType}`;
    switch (type) {
      case '11':
        // 城区-新房
        chartData.centerNew.push({
          ...item,
        });
        break;
      case '21':
        // 郊区-新房
        chartData.townNew.push({
          ...item,
        });
        break;
      case '12':
        // 城区-二手
        chartData.centerSecond.push({
          ...item,
        });
        break;
      case '22':
        // 郊区-二手
        chartData.townSecond.push({
          ...item,
        });
        break;
    }
  }
  return chartData;
};


const PageContent: FC = (props) => {
  const { formatMessage } = useIntl();
  const [tableData, setTableData] = useState<TableData>({});
  const [chartData, setChartData] = useState<IChartData>({ ...initChartData });
  const [tableLoading, setTableLoading] = useState(true);
  const options = [
    { label: '城区-新房', value: 'centerNew' },
    { label: '郊区-新房', value: 'townNew' },
    { label: '城区-二手', value: 'centerSecond' },
    { label: '郊区-二手', value: 'townSecond' },
  ];
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(['centerNew', 'centerSecond']);

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
      setTableData({
        ...data,
      });
      setChartData(buildChartData(data?.list || []));
      setTableLoading(false);
    }).catch(err => {
      console.log(err);
      setTableLoading(false);
    });
  };
  /** 操作栏按钮点击事件 */
  const handleOptBtnClick = (role: EnumDictKey) => {
    console.log(`handleOptBtnClick Role:  ${role}`);
    switch (role) {
      case EnumDictKey.CREATE:
        // 新增记录
        break;
      case EnumDictKey.IMPORT:
        // 导入数据
        break;
      case EnumDictKey.DOWN:
        // 下载导入模板
        break;
      case EnumDictKey.EXPORT:
        // 导出
        break;
      default:
        console.log(`undefined Role ${role}`);
    }
  };
  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };


  useEffect(() => {
    getTableData();
    /* setTimeout(() => {
       setVisable(true);
     }, 2000)*/
  }, []);
  return (
    <Layout className="zdns-page-layout" style={{ minHeight: '100vh' }}>
      <Layout.Content>
        <PageHeader title={formatMessage({ id: 'menu.house.volume' })} />

        {/**  操作栏按钮  */}
        <div className="page-opt-btn-group">
          <Checkbox.Group options={options} value={checkedList} onChange={onChange} />
        </div>
        {/**  表格按钮  */}
        {
          !tableLoading && (<ComponentTable loading={tableLoading} tableData={tableData} />)
        }
      </Layout.Content>
    </Layout>
  );
};

export default PageContent;
