import React, { FC, useEffect } from 'react';
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
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
]);

class Properties<T, U> {}

interface PageInit {
  id: string;
  type: TStatisticType;
  chartData: {
    xAxisData: any[];
    legend: any[];
    seriesData: any[];
  };
  timeStamp: number;
  style?: Properties<string | number, string & {}>;
}

const unit = {
  count: '套',
  area: '㎡',
  averageArea: '㎡',
};

const Index: FC<PageInit> = ({ id, type, chartData, timeStamp, style }) => {
  useEffect(() => {
    // 接下来的使用就跟之前一样，初始化图表，设置配置项
    const myChart = echarts.init(document.getElementById(id) as HTMLElement);
    console.log(chartData);
    myChart.setOption({
      grid: {
        top: 50,
        right: '5%',
        bottom: 30,
        left: '7%',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999',
          },
        },
      },
      toolbox: {
        top: 10,
        right: 10,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        top: 10,
        // data: chartData.legend,
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
      series: chartData.legend.map((item, index) => {
        return {
          name: item,
          type: 'bar',
          smooth: true,
          tooltip: {
            valueFormatter: function (value: any) {
              return value + ` ${unit[type]}`;
            },
          },
          data: chartData.seriesData[index],
        };
      }),
    });
  }, [timeStamp]);
  return (
    <div id={id} style={style}>
      &nbsp;
    </div>
  );
};

export default Index;
