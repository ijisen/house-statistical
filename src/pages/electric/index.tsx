/**
 * 家电
 *
 * */
import React, { FC, useEffect, useState } from 'react';
import { useIntl } from 'umi';
import { Checkbox, Layout, message as $Message, PageHeader } from 'antd';

/** 自定义函数 */
import assertObject from '@/utils/base/assertObject';

/** 接口 */
import electricData from './electricData';

/** type 类申明 */
import { IChartData, IChartDataItem, ITableItem, TableData, TCheckedList } from '@/types/houseType.d';
/** 自定义组件 */
import { numberDivide } from '@/utils/numberArithmetic';

const initXAxisData: {
  centerNew: IChartDataItem[];
  townNew: IChartDataItem[];
  centerSecond: IChartDataItem[];
  townSecond: IChartDataItem[];
} = {
  centerNew: [],
  townNew: [],
  centerSecond: [],
  townSecond: [],
};

const buildChartData = (data: ITableItem[]) => {
  const date = [];
  const xAxisData = { ...initXAxisData };
  for (let i = 0, len = data.length; i < len; i++) {
    const item = data[i];
    const { districtType, houseType, area, count } = item;
    const type = `${districtType}${houseType}`;
    const averageArea = Math.round(numberDivide(area, count) * 100) / 100;
    date.push(item.date);

  }
  return {
    date: [...new Set(date)],
    xAxisData: {
      ...xAxisData,
    },
  };
};
const initChartData = {
  date: [],
  xAxisData: { ...initXAxisData },
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
    console.log(electricData)
    // setChartData(buildChartData(data?.list || []));
    setTableLoading(false);
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
            {/*   <EchartsContent
              title="套数"
              type="count"
              checkedList={checkedList}
              chartData={chartData}
            />*/}
          </>
        )}
      </Layout.Content>
    </Layout>
  );
};

export default PageContent;
