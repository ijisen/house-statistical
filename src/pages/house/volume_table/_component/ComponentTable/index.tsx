import React, { FC } from 'react';
import { FormattedMessage } from 'umi';
import { Button, Table } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


import { EnumDictKey } from '@/types/basic.d';
import { ITableItem, TableData } from '@/types/whoisIPWhiteList.d';

interface PageInit {
  loading: boolean;
  tableData: TableData;
  onBtnClick: (type: EnumDictKey, record: ITableItem) => void;
}


const ComponentTable: FC<PageInit> = (
  ({
     loading,
     tableData,
     onBtnClick,
   }) => {

    const columns = [
      {
        // title: 'IP 网段',
        title: <FormattedMessage id="whois.whiteList.table.ip" />,
        dataIndex: 'ip',
        ellipsis: true,
        render: (text: string) => {
          return text;
        },
      },

      {
        title: <FormattedMessage id="keywords.opt" />,
        dataIndex: 'opt',
        width: 80,
        className: "opt-style",
        align: 'center',
        render: (text: any, record: ITableItem) => {
          const { opting } = record;
          if(opting) {
            return (<p className="text-ct mbn color-primary font-size-small">
              <LoadingOutlined className="mrs" />
              <FormattedMessage id="keywords.submitting" />...
            </p>);
          }
          return (
            <>
              <Button size="small" type="text"
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
        style={{ width: 600 }}
        rowKey="id"
        size="small"
        pagination={false}
        // @ts-ignore
        columns={columns}
        dataSource={list}
      />
    );
  }
);

export default ComponentTable;
