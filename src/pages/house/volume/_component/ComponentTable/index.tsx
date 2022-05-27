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

import { ITableItem, TableData } from '@/types/whoisIPWhiteList';


interface PageInit {
  loading: boolean;
  tableData: TableData;
}


const Index: FC<PageInit> = (
  ({
     loading,
     tableData,
   }) => {

    useEffect(() => {
      // 接下来的使用就跟之前一样，初始化图表，设置配置项
      const myChart = echarts.init(document.getElementById('main') as HTMLElement);
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
          data: ['城区', '郊区'],
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '城区',
            type: 'bar',
            smooth: true,
            tooltip: {
              valueFormatter: function(value: any) {
                return value + ' 套';
              },
            },
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          },
          {
            name: '郊区',
            type: 'bar',
            smooth: true,
            tooltip: {
              valueFormatter: function(value: any) {
                return value + ' 套';
              },
            },
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          },

        ],
      });
    }, []);
    return (
      <Card bodyStyle={{ padding: 0 }}>
        <div id="main" style={{ width: '100%', height: '300px' }}>&nbsp;</div>
      </Card>
    );
  }
);

export default Index;
