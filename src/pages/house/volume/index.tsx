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
import {
  TableData,
  ITableItem,
  IChartData,
  TCheckedList,
} from '@/types/houseType.d';
import { EnumDictKey } from '@/types/basic.d';

/** 自定义组件 */
import ComponentTable from './_component/ComponentTable';
import { numberDivide } from '@/utils/numberArithmetic';

const initChartData = {
  date: [],
  centerNew: [],
  townNew: [],
  centerSecond: [],
  townSecond: [],
};

const buildChartData = (data: ITableItem[]) => {
  const chartData: IChartData = { ...initChartData };
  const date = [];
  for (let i = 0, len = data.length; i < len; i++) {
    const item = data[i];
    const { districtType, houseType, area, count } = item;
    const type = `${districtType}${houseType}`;
    const averageArea = Math.round(numberDivide(area, count) * 100) / 100;
    date.push(item.date);
    switch (type) {
      case '11':
        // 城区-新房
        chartData.centerNew.push({
          ...item,
          averageArea,
        });
        break;
      case '21':
        // 郊区-新房
        chartData.townNew.push({
          ...item,
          averageArea,
        });
        break;
      case '12':
        // 城区-二手
        chartData.centerSecond.push({
          ...item,
          averageArea,
        });
        break;
      case '22':
        // 郊区-二手
        chartData.townSecond.push({
          ...item,
          averageArea,
        });
        break;
    }
  }
  chartData.date = [...new Set(date)];
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
  const [checkedList, setCheckedList] = useState<TCheckedList[]>([
    'centerNew',
    'centerSecond',
  ]);

  /** 获取表格列表数据 */
  const getTableData = () => {
    setTableLoading(true);
    httpGetHouseVolumeListData({
      pageNumber: 1,
      pageSize: 500,
    })
      .then((res) => {
        // console.log(res);
        let { success, message, data } = assertObject(res)
          ? res
          : {
              success: false,
              message: formatMessage({ id: 'message.http.get.error' }),
              data: {
                list: [],
              },
            };
        if (!success) {
          $Message.error(message);
        }
        setTableData({
          ...data,
        });
        setChartData(buildChartData(data?.list || []));
        setTableLoading(false);
      })
      .catch((err) => {
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
  const onChange = (list: TCheckedList[]) => {
    setCheckedList(list);
  };

  useEffect(() => {
    getTableData();
  }, []);
  return (
    <Layout className="zdns-page-layout" style={{ minHeight: '100vh' }}>
      <Layout.Content>
        <PageHeader title={formatMessage({ id: 'menu.house.volume' })} />

        {/**  操作栏按钮  */}
        <div className="page-opt-btn-group">
          <Checkbox.Group
            options={options}
            value={checkedList}
            onChange={(value: any[]) => onChange(value)}
          />
        </div>
        {/**  表格按钮  */}
        {!tableLoading && (
          <>
            {/* 成交量 */}
            <ComponentTable
              type="count"
              checkedList={checkedList}
              chartData={chartData}
            />
            {/* 总面积 */}
            <ComponentTable
              type="area"
              checkedList={checkedList}
              chartData={chartData}
            />
            {/* 平均面积 */}
            <ComponentTable
              type="averageArea"
              checkedList={checkedList}
              chartData={chartData}
            />
          </>
        )}
      </Layout.Content>
    </Layout>
  );
};

export default PageContent;
