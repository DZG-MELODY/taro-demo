import Taro from '@tarojs/taro';
import { createApp } from 'vue';
import 'default-passive-events';
import 'windi.css';
import './app.css';

// 引入状态管理
import store from '@src/store';
// 引入路由相关控件
import "@src/router";

import { useAuth } from '@src/store';

const App = createApp({
  onLaunch(options) {
    const auth = useAuth();
    auth.login();

    // 程序入口 onLaunch 时调用
  },
  onShow(options) {
    // 程序显示 / 隐藏时调用
  },
});

App.use(store);

export default App;
