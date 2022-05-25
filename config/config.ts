import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  title: 'site.title',
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    // name: 'Ant Design',
    locale: true,
    layout: 'side',
  },
  locale: {
    // default zh-CN
    // default: 'en-US',
    // antd 插件国际化
    antd: true,
    // 在项目中配置的 title 及路由中的 title 可直接使用国际化 key，自动被转成对应语言的文案，
    // 路由title page.title
    title: true,
    // 开启浏览器语言检测。
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false,
  },
  fastRefresh: {},
});
