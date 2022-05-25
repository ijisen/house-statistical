/**
 * @names：普通文本过滤所有的空格
 * @params[str] string
 * @return string
 * */
const filterStringSpace = (str: any) => {
  if (typeof str === 'string') {
    return str.replace(/\s+/g, '');
  }
  return '';
};

export default filterStringSpace;
