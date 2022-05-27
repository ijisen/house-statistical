import React, { FC } from 'react';
import { FormattedMessage } from 'umi';
import { Button, Table } from 'antd';


import { EnumDictKey } from '@/types/basic.d';
import { ITableItem, TableData } from '@/types/houseType.d';
import moment from 'moment';
import { numberArithmetic } from '@/utils/numberArithmetic';


/**
 *  区域
 *  1 = 中心城区
 *  2 = 郊区新城
 * */
export enum EnumDistrictType {
  center = 1,
  town = 2
}

/**
 * 房屋类型
 * 1 = 新房
 * 2 = 二手房
 * */
export enum EnumHouseType {
  new = 1,
  second = 2
}

interface PageInit {
  loading?: boolean;
  tableData: TableData;
  onBtnClick?: (type: EnumDictKey, record: ITableItem) => void;
}


const ComponentTable: FC<PageInit> = (
  ({
     loading=false,
     tableData,
     onBtnClick= (type: EnumDictKey, record: ITableItem) => console.log(type),
   }) => {

    const columns = [
      {
        title: '日期',
        dataIndex: 'date',
        render: (text: string) => {
          return moment(text).format('YYYY-MM-DD');
        },
      },
      {
        title: '区域',
        dataIndex: 'districtType',
        width: 80,
        render: (text: number) => {
          if(EnumDistrictType.town === text) {
            return (<span>郊区</span>);
          }
          return (<span className="color-primary">城区</span>);
        },
      },
      {
        title: '房屋类型',
        dataIndex: 'houseType',
        width: 80,
        render: (text: number) => {
          if(EnumHouseType.second === text) {
            return (<span className="color-error">二手</span>);
          }
          return (<span>新房</span>);
        },
      },
      {
        title: '套数(套)',
        dataIndex: 'count',
        width: 80,
      },
      {
        title: '面积(㎡)',
        dataIndex: 'area',
        width: 100,
      },
      {
        title: '小计(㎡)',
        width: 140,
        dataIndex: 'area',
        onCell: (_: number, index: number) => {
          if(index % 2 === 0) {
            return {
              rowSpan: 2,
            };
          }
          if(index % 2) {
            return {
              rowSpan: 0,
            };
          }
        },
        render: (text: number, record: ITableItem, index: number) => {
          if(index % 2 === 0) {
            const { list = [] } = tableData || {};
            const nextItem = list[index + 1] || {area: 0, count: 0};
            const origin_num = (text + nextItem.area);
            const arithmetic_num = numberArithmetic(text, nextItem.area);
            const hasErr = (arithmetic_num - origin_num);
            return (
              <div>
                <div className="pbs">总套数： {record.count + nextItem.count}</div>
                <div className={hasErr ? 'color-error' : ''}>
                  <p className="mbn" title={`${origin_num}`}>总面积： {arithmetic_num}</p>
                </div>
              </div>
            );
          }
        },
      },
      {
        title: <FormattedMessage id="keywords.opt" />,
        dataIndex: 'opt',
        width: 80,
        className: 'opt-style',
        align: 'center',
        render: (text: any, record: ITableItem) => {
          return (
            <>
              <Button style={{ fontSize: 12 }} size="small" type="text"
                      onClick={() => onBtnClick(EnumDictKey.DELETE, record)}>
                <FormattedMessage id="keywords.delete" />
              </Button>
            </>
          );
        },
      },
    ];

    const { list } = tableData;

    return (
      <Table
        loading={loading}
        bordered
        style={{ width: 740 }}
        rowKey="id"
        size="small"
        pagination={false}
        // @ts-ignore
        columns={columns}
        rowClassName={(record: any, index: number) => {
          if(Math.floor(index / 4) % 2) {
            return 'odd';
          }
          return 'even';
        }}
        dataSource={list}
      />
    );
  }
);

export default ComponentTable;
