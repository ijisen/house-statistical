/**
 * 字符串 大小写转换
 * String to Case
 * */
const stringToLowerOrUpperCase = (str: any, toUpper?: boolean) => {
  if(str && typeof str === 'string') {
    return toUpper ? str.toUpperCase() : str.toLowerCase();
  }
  return str;
};

export default stringToLowerOrUpperCase;
