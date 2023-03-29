<template>
  <view class="h-screen bg-white">
    <scroll-view class="h-[90vh] bg-gray-300">
      <template v-for="(content, index) in contents" :key="index">
        <view v-if="content.type === 'role'" class="content-role">
          <view>
            <message></message>
          </view>
          <text class="content">{{ content.content }}</text>
        </view>
        <view v-else class="content-self">
          <text class="content">{{ content.content }}</text>
          <view class="w-10 h-10">
            <open-data type="userAvatarUrl"></open-data>
          </view>
        </view>
      </template>
    </scroll-view>
    <view class="fixed w-full h-[10vh] flex items-center px-1">
      <input class="flex-1 bg-gray-200" placeholder="" confirm-type="send" v-model="sendMsg" @confirm="onSendClick">
      <nut-button class="w-3 bg-green-100" @click="onSendClick">send</nut-button>
    </view>
  </view>
</template>

<script>
import { reactive, ref } from 'vue';
import { People, Message } from '@nutui/icons-vue-taro';
import { getCurrentInstance, setNavigationBarTitle } from '@tarojs/taro';

const app = getCurrentInstance();

export default {
  name: 'ChatPage',
  components: {
    Message
  },
  setup() {
    const title = "会话";
    const { id } = app?.router?.params;
    const roleName = `机器人${id || ''}`;
    setNavigationBarTitle({ title: roleName });
    const contents = reactive([
      { type: 'role', content: `您好，我是${roleName}` },
      { type: 'role', content: '我们开始聊天吧' }
    ]);
    const sendMsg = ref('');

    const onSendClick = () => {
      contents.push({
        type: 'self',
        content: sendMsg.value
      });
      sendMsg.value = '';
    };

    return {
      title,
      contents,
      sendMsg,
      onSendClick
    };
  }
};
</script>
<style lang="scss">
.chat-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.chat-content {
  flex: 1 1 auto;
  background-color: gainsboro;
}

.content-role,
.content-self {
  display: flex;
  justify-content: flex-end;
  margin-left: 20px;
  margin-top: 10px;

  .content {
    flex: 1, 1, auto;
    max-width: 80%;
    height: fit-content;
    overflow-wrap: break-word;
    background: white;
  }
}

.content-role {
  justify-content: flex-start;
}

.chat-input {
  flex: 0 0 10vh;
  display: flex;
  align-items: center;
}

.chat-words {
  height: 34px;
  padding-top: 2px;
}
</style>