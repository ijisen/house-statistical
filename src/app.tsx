import React from 'react';
import { RequestConfig } from 'umi';
import { BasicLayoutProps } from '@ant-design/pro-layout';


const { NODE_ENV } = process.env;

/**
 * request 数据请求配置
 * */
export const request: RequestConfig = {
  timeout: 60000,
  // prefix: NODE_ENV === 'development' ? '/api' : '',
  prefix: NODE_ENV === 'development' ? '/mock' : '',
  // 跳过 umi-request 错误处理中间件
  skipErrorHandler: true,
};

/**
 * 项目初次加载时，配置信息
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */

export async function getInitialState(): Promise<any> {
  console.log('----getInitialState----');

  document.getElementById('app-page-loading')?.remove();

  return {
    settings: {},
  };
}

/**
 * ProLayout 布局配置信息
 * ProLayout 支持的api https://procomponents.ant.design/components/layout
 * */
export const layout = ({
                         initialState,
                       }: {
  initialState: any;
}): BasicLayoutProps => {
  console.log('---- ProLayout ----');
  // 获取语言
  // console.log(locale);
  return {
    // 是否删除掉所有的自带界面
    // pure: true,
    siderWidth: 180,
    loading: false,
    layout: 'mix',
    navTheme: 'light',
    headerTheme: 'light',
    fixedHeader: true,
    fixSiderbar: true,
    disableContentMargin: true,
    // 控制菜单的收起和展开
    // collapsed: false,
    // 自定义 collapsed button 的方法
    // collapsedButtonRender: false,
    // 禁止自动切换到移动页面 false
    disableMobile: true,
    // 不展示顶栏
    headerRender: false,
    // 不展示页脚
    footerRender: false,
    // 不展示菜单
    // menuRender: false,
    // 不展示菜单顶栏
    menuHeaderRender: false,
    /* menuItemRender: (item, dom) => {
       console.log(item);
       console.log(dom);
       return dom
     },*/
    onPageChange: () => {

      console.log('------ onPageChange ------ ');
    },
    ...initialState?.settings,
  };
};
