import React, { FC } from 'react';


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

    const { list } = tableData;

    return (
      <h1>11111</h1>
    );
  }
);

export default Index;
