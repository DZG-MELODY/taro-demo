export default defineAppConfig({
  pages: [
    'pages/index/index', 'pages/user/user', 'pages/chat/chat'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FFA500',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  "permission": {
    "scope.userFuzzyLocation": {
      "desc": "小程序将使用您的位置信息用于优化接口调用"
    }
  },
  tabBar: {
    backgroundColor: '#FFA500',
    borderStyle: 'white',
    color: '#000',
    selectedColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '会话',
        iconPath: 'assets/icons/chat.png',
        selectedIconPath: 'assets/icons/chat-select.png'
      },
      {
        pagePath: 'pages/user/user',
        text: '用户',
        iconPath: 'assets/icons/user.png',
        selectedIconPath: 'assets/icons/user-select.png'
      }
    ]
  }
});
