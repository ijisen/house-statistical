/**
 * 普通文本格式校验
 * 中文 数字 字母 . _ - @
 * */
export const validateStr = (str: string) => {
  const reg = /^[\w\s\u4E00-\u9FA5.\-@]+$/;
  return reg.test(str);
};
