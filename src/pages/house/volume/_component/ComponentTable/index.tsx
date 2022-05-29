import React, { FC, useEffect, useState } from 'react';
import { Card } from 'antd';

import {
  IChartData,
  ITableItem,
  TCheckedList,
  TStatisticType,
} from '@/types/houseType.d';

import ChartBar from '@/pages/house/_chart_component';
import moment from 'moment';

interface PageInit {
  type: TStatisticType;
  checkedList: TCheckedList[];
  chartData: IChartData;
}

const buildChartData = (
  data: IChartData,
  type: TStatisticType,
  checkedList: TCheckedList[],
) => {
  const newData = { ...data };
  // type 'count' | 'area' | 'averageArea'
  const legend: any[] = [];
  const seriesData: any[] = [];
  checkedList.map((item) => {
    switch (item) {
      case 'centerNew':
        legend.push('城区-新房');
        break;
      case 'centerSecond':
        legend.push('城区-二手');
        break;
      case 'townNew':
        legend.push('郊区-新房');
        break;
      case 'townSecond':
        legend.push('郊区-二手');
        break;
    }
    seriesData.push(newData[item].map((item) => item[type]));
  });
  return {
    xAxisData: data.date,
    legend,
    seriesData,
  };
};

const Index: FC<PageInit> = ({ type, checkedList, chartData }) => {
  const [data, setData] = useState<{
    xAxisData: any[];
    legend: any[];
    seriesData: any[];
  }>({
    xAxisData: [],
    legend: [],
    seriesData: [],
  });
  const [timeStamp, setTimeStamp] = useState(0);
  useEffect(() => {
    console.log(checkedList);
    console.log(111111111111);
    console.log(buildChartData(chartData, type, checkedList));
    setData({
      ...buildChartData(chartData, type, checkedList),
    });
    setTimeStamp(moment().valueOf());
  }, [checkedList]);
  return (
    <Card bodyStyle={{ padding: 0 }}>
      <ChartBar
        id={type}
        type={type}
        chartData={data}
        timeStamp={timeStamp}
        style={{ width: '100%', height: '300px' }}
      >
        &nbsp;
      </ChartBar>
    </Card>
  );
};

export default Index;
