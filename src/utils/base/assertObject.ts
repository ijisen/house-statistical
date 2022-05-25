/**
 * 判断数据是否为 object
 * @param[data]
 * */
const assertObject = (data: any) => {
  return (Object.prototype.toString.call(data) === '[object Object]');
};

export default assertObject;
