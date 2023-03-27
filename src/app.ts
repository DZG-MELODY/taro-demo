import { createApp } from 'vue';
import 'default-passive-events';
import './app.css';

// 引入状态管理
import store from '@src/store';
// 引入路由相关控件
import "@src/router";

const App = createApp({
  onLaunch(options) {
    // 程序入口 onLaunch 时调用
  },
  onShow(options) {
    // 程序显示 / 隐藏时调用
  },
});

App.use(store);

export default App;
