interface IHouseDataSQL {
  date: string | number;
  // 区域 中心城区 = 1 | 郊区新城 = 2
  districtType: 1 | 2;
  // 房屋类型 新房 = 1 | 二手房 = 2
  houseType: 1 | 2;
  // 套数(套)
  count: number;
  // 面积(平方米)
  area: number;
}


/**
 * 区域[districtType] 中心城区 = 1 | 郊区新城 = 2
 * 房屋类型[houseType] 新房 = 1 | 二手房 = 2
 * */
const houseData: IHouseDataSQL[] = [
  /** ========= 2020年3月  ===========*/
  { date: '2022/3/1', districtType: 1, houseType: 1, count: 373, area: 49950.75 },
  { date: '2022/3/1', districtType: 2, houseType: 1, count: 123, area: 13396.53 },
  { date: '2022/3/1', districtType: 1, houseType: 2, count: 379, area: 34623.30 },
  { date: '2022/3/1', districtType: 2, houseType: 2, count: 65, area: 6373.36 },

  { date: '2022/3/2', districtType: 1, houseType: 1, count: 651, area: 86681.90 },
  { date: '2022/3/2', districtType: 2, houseType: 1, count: 97, area: 10455.12 },
  { date: '2022/3/2', districtType: 1, houseType: 2, count: 389, area: 35727.22 },
  { date: '2022/3/2', districtType: 2, houseType: 2, count: 100, area: 9485.33 },

  { date: '2022/3/3', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/3', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/3', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/3', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/4', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/4', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/4', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/4', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/5', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/5', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/5', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/5', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/6', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/6', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/6', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/6', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/7', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/7', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/7', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/7', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/8', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/8', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/8', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/8', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/9', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/9', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/9', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/9', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/10', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/10', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/10', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/10', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/11', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/11', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/11', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/11', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/12', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/12', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/12', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/12', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/13', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/13', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/13', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/13', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/14', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/14', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/14', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/14', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/15', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/15', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/15', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/15', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/16', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/16', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/16', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/16', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/17', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/17', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/17', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/17', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/18', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/18', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/18', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/18', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/19', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/19', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/19', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/19', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/20', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/20', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/20', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/20', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/21', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/21', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/21', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/21', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/22', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/22', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/22', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/22', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/23', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/23', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/23', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/23', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/24', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/24', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/24', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/24', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/25', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/25', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/25', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/25', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/26', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/26', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/26', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/26', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/27', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/27', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/27', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/27', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/28', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/28', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/28', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/28', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/29', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/29', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/29', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/29', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/30', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/30', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/30', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/30', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/3/31', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/3/31', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/3/31', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/3/13', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  /** ========= 2020年5月  ===========*/
  { date: '2022/05/25', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/05/25', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/05/25', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/05/25', districtType: 2, houseType: 2, count: 93, area: 8688.78 },
];

export default houseData;
