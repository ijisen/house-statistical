/**
 * @names：普通文本过滤连续的空格
 * @params[str] string
 * @return string
 * */
const filterMultiStringSpace = (str: any) => {
  if (typeof str === 'string') {
    return str.replace(/\s+/g, ' ').trim();
  }
  return '';
};

export default filterMultiStringSpace;
