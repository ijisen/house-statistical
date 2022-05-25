import isFQDN from './isFQDN';

import { IsFQDNConfig } from './typings.d';

// is domain·

interface IsDomainConfig {
  str: string;
  lang?: string;
  config?: Partial<IsFQDNConfig>;
}


/**
 * 域名格式校验
 *
 * m.zdns.cn. => true
 *
 * */
const isDomain = ({ str, lang, config = {} }: IsDomainConfig = { str: '' }) => {
  console.log(str);
  return isFQDN(str, lang, {
    // 是否包含TLD
    require_tld: true,
    // 是否允许包含下划线
    allow_underscores: true,
    // 是否允许 . 号结尾
    allow_trailing_dot: true,
    // 是否允许纯数字TLD
    allow_numeric_tld: false,
    // 是否允许配符 *
    allow_wildcard: false,
    ...config,
  });
};

export default isDomain;
