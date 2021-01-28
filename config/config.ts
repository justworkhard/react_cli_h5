import { IConfig } from 'umi-types';
import pageRoutes from './router.config';

const config: IConfig = {
  // ssr:{
  //   disableExternal: true
  // },
  treeShaking: true,
  routes: pageRoutes,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      ignoreMomentLocale: true,
      dynamicImport: {
        // loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
        // loading: '() => <></>'
      },
      title: '本地生活',
      dll: true,
      hd: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  history: 'browser', // 默认是 browser
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  // proxy: {
  //   '/api': {
  //     target: 'https://gateway.hualta.com',
  //     changeOrigin: true,
  //     pathRewrite: { '^/api': '' },
  //   },
  //   '/allin': {
  //     target: 'https://syb.allinpay.com',
  //     changeOrigin: true,
  //     pathRewrite: { '^/allin': '' },
  //   }
  // },
  disableRedirectHoist: true,
  outputPath: './dist',
  hash: true,
  publicPath: "/",
  // manifest: {
  //   basePath: '/mall',
  // },
  extraBabelPlugins: [
    ['import', { libraryName: 'antd-mobile', style: true }]  //按需加载antd-mobile样式文件
  ],
};

export default config;
