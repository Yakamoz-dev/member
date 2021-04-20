import intl from 'react-intl-universal';
// 自定义
import customZhCn from './lang/zh-CN';
import customEnUs from './lang/en-US';
// common locale data
// require('intl/locale-data/jsonp/en.js');
// require('intl/locale-data/jsonp/zh.js');
import cookie from 'react-cookies'

// 合并
const locales = {
  zh: customZhCn,
  en: customEnUs,
};

let lang = cookie.load('lang') || 'en'

// 初始化
const loadLocales = () => {
  intl.init({
    urlLocaleKey: lang,
    cookieLocaleKey: lang,
    currentLocale: lang, // TODO: determine locale here
    locales,
  });
};

loadLocales();
window.intl = intl;