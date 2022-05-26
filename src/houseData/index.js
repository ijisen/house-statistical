
/**
 * 区域[districtType] 中心城区 = 1 | 郊区新城 = 2
 * 房屋类型[houseType] 新房 = 1 | 二手房 = 2
 * */
const index = [
  /** ========= 2020年3月  ===========*/
  { date: '2022/3/1', districtType: 1, houseType: 1, count: 373, area: 49950.75 },
  { date: '2022/3/1', districtType: 2, houseType: 1, count: 123, area: 13396.53 },
  { date: '2022/3/1', districtType: 1, houseType: 2, count: 379, area: 34623.30 },
  { date: '2022/3/1', districtType: 2, houseType: 2, count: 65, area: 6373.36 },

  { date: '2022/3/2', districtType: 1, houseType: 1, count: 651, area: 86681.90 },
  { date: '2022/3/2', districtType: 2, houseType: 1, count: 97, area: 10455.12 },
  { date: '2022/3/2', districtType: 1, houseType: 2, count: 389, area: 35727.22 },
  { date: '2022/3/2', districtType: 2, houseType: 2, count: 100, area: 9485.33 },

  { date: '2022/3/3', districtType: 1, houseType: 1, count: 607, area: 82810.18 },
  { date: '2022/3/3', districtType: 2, houseType: 1, count: 121, area: 11600.25 },
  { date: '2022/3/3', districtType: 1, houseType: 2, count: 436, area: 39530.86 },
  { date: '2022/3/3', districtType: 2, houseType: 2, count: 92, area: 9690.60 },

  { date: '2022/3/7', districtType: 1, houseType: 1, count: 535, area: 73408.56 },
  { date: '2022/3/7', districtType: 2, houseType: 1, count: 128, area: 14418.45 },
  { date: '2022/3/7', districtType: 1, houseType: 2, count: 525, area: 47374.77 },
  { date: '2022/3/7', districtType: 2, houseType: 2, count: 102, area: 10305.66 },

  { date: '2022/3/9', districtType: 1, houseType: 1, count: 521, area: 67468.16 },
  { date: '2022/3/9', districtType: 2, houseType: 1, count: 140, area: 16103.69 },
  { date: '2022/3/9', districtType: 1, houseType: 2, count: 431, area: 38549.74 },
  { date: '2022/3/9', districtType: 2, houseType: 2, count: 101, area: 10251.40 },

  { date: '2022/3/10', districtType: 1, houseType: 1, count: 469, area: 58496.42 },
  { date: '2022/3/10', districtType: 2, houseType: 1, count: 137, area: 15029.81 },
  { date: '2022/3/10', districtType: 1, houseType: 2, count: 502, area: 45697.46 },
  { date: '2022/3/10', districtType: 2, houseType: 2, count: 95, area: 10011.51 },

  { date: '2022/3/11', districtType: 1, houseType: 1, count: 648, area: 81504.83 },
  { date: '2022/3/11', districtType: 2, houseType: 1, count: 175, area: 19606.49 },
  { date: '2022/3/11', districtType: 1, houseType: 2, count: 514, area: 46165.80 },
  { date: '2022/3/11', districtType: 2, houseType: 2, count: 101, area: 10342.16 },

  { date: '2022/3/14', districtType: 1, houseType: 1, count: 425, area: 56098.84 },
  { date: '2022/3/14', districtType: 2, houseType: 1, count: 122, area: 12658.58 },
  { date: '2022/3/14', districtType: 1, houseType: 2, count: 543, area: 47516.78 },
  { date: '2022/3/14', districtType: 2, houseType: 2, count: 114, area: 10743.29 },

  { date: '2022/3/15', districtType: 1, houseType: 1, count: 302, area: 40516.16 },
  { date: '2022/3/15', districtType: 2, houseType: 1, count: 125, area: 14015.82 },
  { date: '2022/3/15', districtType: 1, houseType: 2, count: 517, area: 48534.39 },
  { date: '2022/3/15', districtType: 2, houseType: 2, count: 91, area: 9761.92 },

  { date: '2022/3/16', districtType: 1, houseType: 1, count: 300, area: 38547.94 },
  { date: '2022/3/16', districtType: 2, houseType: 1, count: 120, area: 13201.88 },
  { date: '2022/3/16', districtType: 1, houseType: 2, count: 491, area: 43861.00 },
  { date: '2022/3/16', districtType: 2, houseType: 2, count: 86, area: 8288.29 },

  { date: '2022/3/17', districtType: 1, houseType: 1, count: 392, area: 50705.04 },
  { date: '2022/3/17', districtType: 2, houseType: 1, count: 181, area: 19284.56 },
  { date: '2022/3/17', districtType: 1, houseType: 2, count: 518, area: 46226.75 },
  { date: '2022/3/17', districtType: 2, houseType: 2, count: 91, area: 8964.57 },

  { date: '2022/3/18', districtType: 1, houseType: 1, count: 328, area: 43144.07 },
  { date: '2022/3/18', districtType: 2, houseType: 1, count: 104, area: 11261.39 },
  { date: '2022/3/18', districtType: 1, houseType: 2, count: 498, area: 45288.40 },
  { date: '2022/3/18', districtType: 2, houseType: 2, count: 99, area: 10031.44 },

  { date: '2022/3/21', districtType: 1, houseType: 1, count: 423, area: 59004.15 },
  { date: '2022/3/21', districtType: 2, houseType: 1, count: 141, area: 15215.73 },
  { date: '2022/3/21', districtType: 1, houseType: 2, count: 643, area: 56409.39 },
  { date: '2022/3/21', districtType: 2, houseType: 2, count: 107, area: 9441.77 },

  { date: '2022/3/22', districtType: 1, houseType: 1, count: 466, area: 58524.74 },
  { date: '2022/3/22', districtType: 2, houseType: 1, count: 96, area: 10803.55 },
  { date: '2022/3/22', districtType: 1, houseType: 2, count: 460, area: 41036.02 },
  { date: '2022/3/22', districtType: 2, houseType: 2, count: 82, area: 8048.94 },

  { date: '2022/3/23', districtType: 1, houseType: 1, count: 391, area: 51822.75 },
  { date: '2022/3/23', districtType: 2, houseType: 1, count: 105, area: 11552.01 },
  { date: '2022/3/23', districtType: 1, houseType: 2, count: 497, area: 45092.68 },
  { date: '2022/3/23', districtType: 2, houseType: 2, count: 107, area: 10600.05 },

  { date: '2022/3/25', districtType: 1, houseType: 1, count: 436, area: 57688.70 },
  { date: '2022/3/25', districtType: 2, houseType: 1, count: 140, area: 16135.07 },
  { date: '2022/3/25', districtType: 1, houseType: 2, count: 504, area: 44887.99 },
  { date: '2022/3/25', districtType: 2, houseType: 2, count: 116, area: 11462.24 },

  { date: '2022/3/29', districtType: 1, houseType: 1, count: 327, area: 41756.72 },
  { date: '2022/3/29', districtType: 2, houseType: 1, count: 134, area: 15554.29 },
  { date: '2022/3/29', districtType: 1, houseType: 2, count: 494, area: 44405.15 },
  { date: '2022/3/29', districtType: 2, houseType: 2, count: 106, area: 10571.14 },

  { date: '2022/3/30', districtType: 1, houseType: 1, count: 399, area: 52105.12 },
  { date: '2022/3/30', districtType: 2, houseType: 1, count: 151, area: 16558.65 },
  { date: '2022/3/30', districtType: 1, houseType: 2, count: 521, area: 46012.55 },
  { date: '2022/3/30', districtType: 2, houseType: 2, count: 121, area: 12132.46 },

  { date: '2022/3/31', districtType: 1, houseType: 1, count: 403, area: 49393.84 },
  { date: '2022/3/31', districtType: 2, houseType: 1, count: 118, area: 13161.37 },
  { date: '2022/3/31', districtType: 1, houseType: 2, count: 519, area: 47060.66 },
  { date: '2022/3/13', districtType: 2, houseType: 2, count: 76, area: 7351.71 },

  /** ========= 2020年5月  ===========*/
  { date: '2022/05/25', districtType: 1, houseType: 1, count: 494, area: 62866.67 },
  { date: '2022/05/25', districtType: 2, houseType: 1, count: 110, area: 12297.47 },
  { date: '2022/05/25', districtType: 1, houseType: 2, count: 324, area: 30622.21 },
  { date: '2022/05/25', districtType: 2, houseType: 2, count: 93, area: 8688.78 },

  { date: '2022/05/26', districtType: 1, houseType: 1, count: 452, area: 59520.41 },
  { date: '2022/05/25', districtType: 2, houseType: 1, count: 107, area: 12041.64 },
  { date: '2022/05/25', districtType: 1, houseType: 2, count: 445, area: 42582.54 },
  { date: '2022/05/25', districtType: 2, houseType: 2, count: 79, area: 7748.54 },
];

export default index;
