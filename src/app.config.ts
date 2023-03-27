export default defineAppConfig({
  pages: [
    'pages/index/index', 'pages/user/user', 'pages/chat/chat'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    backgroundColor: '#fff',
    borderStyle: 'black',
    color: '#111',
    selectedColor: '#225500',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '会话',
      },
      {
        pagePath: 'pages/user/user',
        text: '用户'
      }
    ]
  }
})
