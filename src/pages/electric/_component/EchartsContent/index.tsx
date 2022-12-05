import React, { FC, useEffect, useState } from 'react';
import { Card } from 'antd';

import {
  IChartData,
  TCheckedList,
  TStatisticType,
} from '@/types/houseType.d';

import ChartBar from '@/pages/house/_chart_component';
import moment from 'moment';

interface PageInit {
  title: string;
  type: TStatisticType;
  checkedList: TCheckedList[];
  chartData: IChartData;
}

const buildChartData = (
  type: TStatisticType,
  checkedList: TCheckedList[],
  data: IChartData,
) => {
  const {
    date,
    xAxisData,
  } = { ...data };
  // type 'count' | 'area' | 'averageArea'
  const selectedLegend: { [propName: string]: any } = {};
  const seriesData: any[] = [];
  checkedList.map((value) => {
    switch (value) {
      case 'centerNew':
        selectedLegend['城区-新房'] = true;
        break;
      case 'centerSecond':
        selectedLegend['城区-二手'] = true;
        break;
      case 'townNew':
        selectedLegend['郊区-新房'] = true;
        break;
      case 'townSecond':
        selectedLegend['郊区-二手'] = true;
        break;
    }
  });

  Object.values(xAxisData).forEach((dataItem) => {
    const unit = {
      count: '套',
      area: '㎡',
      averageArea: '㎡',
    };

    const series: {
      name: string;
      unit: string;
      data: any[]
    } = {
      name: '',
      unit: unit[type],
      data: [],
    };
    dataItem.map((item) => {
      series.name = item.name;
      series.data.push(item[type]);
    });
    seriesData.push(series);
  });

  return {
    xAxisData: date,
    legend: {
      selected: {
        '城区-新房': false,
        '城区-二手': false,
        '郊区-新房': false,
        '郊区-二手': false,
        ...selectedLegend,
      },
    },
    seriesData,
  };
};

const EchartsContent: FC<PageInit> = ({ title, type, checkedList, chartData }) => {
  const [data, setData] = useState<{
    xAxisData: any[];
    legend: { [propName: string]: any };
    seriesData: any[];
  }>({
    xAxisData: [],
    legend: [],
    seriesData: [],
  });
  const [timeStamp, setTimeStamp] = useState(0);
  useEffect(() => {
    setData({
      ...buildChartData(type, checkedList, chartData),
    });
    setTimeStamp(moment().valueOf());
  }, [checkedList]);
  return (
    <Card bodyStyle={{ padding: 0 }}
          className="mbm"
          title={title}>
      {
        timeStamp && (<ChartBar id={type}
                                type={type}
                                chartData={data}
                                timeStamp={timeStamp}
                                style={{ width: '100%', height: '300px' }}>&nbsp;</ChartBar>)
      }
    </Card>
  );
};

export default EchartsContent;
