export default {
  chainWebpack(memo) {
    memo.plugins.delete('copy');
  },
  logo: 'https://ae01.alicdn.com/kf/H13a5893e37234fde800a21a41fa0c23d3.jpg',
  mode: 'site',
  title: 'banana-ui 一个好用的UI组件库',
  side: false,
  favicon: 'https://ae01.alicdn.com/kf/H13a5893e37234fde800a21a41fa0c23d3.jpg',
};
