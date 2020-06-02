
// ref: https://umijs.org/config/
import path from 'path'
export default {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' }
  //     ]
  //   }
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'cryptoindus-front-end',
      dll: true,
      locale: {
        default: 'zh-CN',
        antd: false,
        title: false,
        baseNavigator: true,
        baseSeparator: '-',
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
  alias: {
    '@': path.join(__dirname, 'src/'),
    '@theme': path.join(__dirname, 'src/const/theme.less'),
  }
}
