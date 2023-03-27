<template>
  <scroll-view class="w-full h-screen bg-white p-0 m-0">
    <view
      class="w-full h-15 flex items-center bg-orange-400 text-gray-100 border-b-white border-solid border-0 border-b-2px"
      :key="chat.id" v-for="chat in chats" @click="onClickChat(chat)">
      <message></message> <text>{{ chat.name }}</text>
    </view>
  </scroll-view>
</template>

<script>
import { reactive } from 'vue';
import Taro from '@tarojs/taro';
import { Message } from '@nutui/icons-vue-taro';
export default {
  name: 'HomePage',
  components: {
    Message
  },
  setup() {
    const chats = reactive([
      { id: 1, name: '机器人1' },
      { id: 2, name: '机器人2' },
      { id: 3, name: '机器人3' }
    ]);

    const onClickChat = (chat) => {
      console.log(chat.name);
      Taro.navigateTo({
        url: `/pages/chat/chat?id=${chat.id}`
      });
    };

    return {
      chats,
      onClickChat
    };
  }
};
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: grey;
  min-height: 100vh;
}

.card {
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: ghostwhite;
  border-bottom: 1px solid gray;
}
</style>
