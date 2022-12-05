/**
 * =========  2022年 03月数据  ===========
 * 区域[districtType] 中心城区 = 1 | 郊区新城 = 2
 * 房屋类型[houseType] 新房 = 1 | 二手房 = 2
 * */
export enum enumElectricType {
  // 电视
  tv,
  // 冰箱
  refrigerator,
  // 洗衣机
  washer,
  // 空调
  air,
  // 燃气灶 or 油烟机
  gas,
  // 小家电
  small,
}

export default [
  { name: '海信', type: enumElectricType.tv, picPrice: 403, price: 49393 },
  { name: '海尔', type: enumElectricType.refrigerator, picPrice: 403, price: 49393 },
];
