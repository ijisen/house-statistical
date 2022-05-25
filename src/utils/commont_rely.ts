import { useIntl, getLocale } from 'umi';
import { EnumLanguageType } from '@/types/basic.d';
import { isEmptyArray } from '@/utils/index';


export const isProdEnv = process.env.NODE_ENV === 'production';

/**
 * 页面错误消息
 * */
export const pageMsgTips: {
  type?: string;
  message?: string;
} = {
  type: undefined,
  message: undefined,
};

/**
 * 设置标题
 * */
export const setLanguage = (keys: string) => {
  const intl = useIntl();
  return intl.formatMessage({
    id: keys,
    defaultMessage: '-',
  });
};

/**
 * @names：普通文本空格过滤
 * @params[str] string
 * @return string
 * */
export const isLocaleEn = () => {
  const locale = getLocale();
  return locale === EnumLanguageType.en;
};

/**
 * ANTD 表格行样式渲染
 * @param record
 * @param index
 * @return string
 */
export const antdTableRowClassName = (record: any, index: number) => {
  if (index % 2) {
    return 'odd';
  }
  // return 'even'
  return '';
};


/** table 表格数据状态更新 */
export const utilUpdateTableItemInfo = (record: any, data?: any[]) => {
  let _data = data;
  if (data && !isEmptyArray(data)) {
    _data = [...data];
    let index = _data?.findIndex(item => item.id === record.id);
    if ((index && index > -1) || index === 0) {
      _data?.splice(index, 1, {
        ..._data[index],
        ...record,
      });
      return _data;
    }
  }
  return _data;

};
