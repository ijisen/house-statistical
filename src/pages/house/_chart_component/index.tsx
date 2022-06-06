import React, { FC, useEffect, useRef, useState } from 'react';
import { Card } from 'antd';

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  DatasetComponent,
  DataZoomComponent,
  TransformComponent,
  LegendComponent,
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
import { TStatisticType } from '@/types/houseType';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  DatasetComponent,
  DataZoomComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
]);

class Properties<T, U> {
}

interface IChartData {
  xAxisData: any[];
  legend: { [propName: string]: any };
  seriesData: any[];
}

interface PageInit {
  id: string;
  type: TStatisticType;
  chartData: IChartData;
  timeStamp: number;
  style?: Properties<string | number, string & {}>;
}

const buildData = (chartData: IChartData) => {
  const { seriesData } = chartData;
  const color = [
    '#3ba272', '#5470c6',
    '#ee6666', '#91cc75',
    '#73c0de', '#fac858',
    '#fc8452', '#9a60b4',
    '#ea7ccc'];
  const data = seriesData.map((item, index) => {
    return {
      name: item.name,
      type: 'line',
      smooth: true,
      color: color[index],
      tooltip: {
        valueFormatter: function(value: any) {
          return value + ` ${item.unit}`;
        },
      },
      data: item.data,
    };
  });
  console.log(data);
  return data;
};

const Index: FC<PageInit> = ({
                               id, type,
                               chartData,
                               timeStamp,
                               style,
                             }) => {
  useEffect(() => {
    // 接下来的使用就跟之前一样，初始化图表，设置配置项
    const myChart = (echarts.init(document.getElementById(id) as HTMLElement));
    myChart.setOption({
      grid: {
        top: 50,
        right: '5%',
        bottom: 30,
        left: '7%',
      },
      dataZoom: [
        {
          type: 'inside',
        },
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // type: 'cross',
          type: 'shadow',
          crossStyle: {
            color: '#999',
          },
          shadowStyle: {
            color: 'rgba(150,150,150,0.3)',
          },
        },
      },
      toolbox: {
        top: 10,
        right: 10,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          // restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        top: 10,
        ...chartData.legend,
      },
      xAxis: [
        {
          type: 'category',
          data: chartData.xAxisData,
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: buildData(chartData),
    });
    // console.log(myChart.getOption());
  }, [timeStamp]);

  return (
    <div id={id} style={style}>
      &nbsp;
    </div>
  );
};

export default Index;
