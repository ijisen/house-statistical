/**
 * 数据处理
 *
 * @param num
 */
const formatNumber = (num: any) => {
  try {
    return num.toString().split('.')[1].length;
  } catch (e) {
    return 0;
  }
};

/**
 * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
 *
 * @param num1 加数1
 * @param num2 加数2
 */
export function numberArithmetic(num1: any, num2: any) {
  const baseNum1 = formatNumber(num1);
  const baseNum2 = formatNumber(num2);
  const baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
  return (numberMultiply(num1, baseNum) + numberMultiply(num2, baseNum)) / baseNum;
}

/**
 * 减法运算，避免数据相减小数点后产生多位数和计算精度损失。
 *
 * @param num1 被减数
 * @param num2 减数
 */
export function numberSubtract(num1: any, num2: any) {
  const baseNum1 = formatNumber(num1);
  const baseNum2 = formatNumber(num2);
  const baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
  // 精度
  const precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
  return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
}

/**
 * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
 *
 * @param num1 被乘数
 * @param num2 乘数
 */
export function numberMultiply(num1: any, num2: any) {
  const baseNum1 = formatNumber(num1);
  const baseNum2 = formatNumber(num2);
  // 精度
  const precision = (baseNum1 >= baseNum2) ? baseNum1 : baseNum2;
  const baseNum3 = Number(num1.toString().replace('.', ''));
  const baseNum4 = Number(num2.toString().replace('.', ''));
  return baseNum3 * baseNum4 / Math.pow(10, precision);
}

/**
 * 除法运算，避免数据相除小数点后产生多位数和计算精度损失。
 *
 * @param num1 被除数
 * @param num2 除数
 */
export function numberDivide(num1: any, num2: any) {
  const baseNum1 = formatNumber(num1);
  const baseNum2 = formatNumber(num2);
  const baseNum3 = Number(num1.toString().replace('.', ''));
  const baseNum4 = Number(num2.toString().replace('.', ''));
  return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
}
