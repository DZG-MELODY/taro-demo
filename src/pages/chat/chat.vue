<template>
  <view class="chat-container">
    <view class="chat-content">
      <scroll-view>
        <template v-for="(content, index) in contents" :key="index">
          <view v-if="content.type === 'role'" class="content-role">
            <view>
              <message></message>
            </view>
            <text class="content">{{ content.content }}</text>
          </view>
          <view v-else class="content-self">
            <text class="content">{{ content.content }}</text>
            <view>
              <people></people>
            </view>
          </view>
        </template>
      </scroll-view>
    </view>
    <view class="chat-input">
      <nut-textarea class="chat-words" placeholder="请输入聊天内容" text-align="center" v-model="sendMsg"></nut-textarea>
      <nut-button @click="onSendClick">send</nut-button>
    </view>
  </view>
</template>

<script>
import { reactive, ref } from 'vue';
import { People, Message } from '@nutui/icons-vue-taro';

export default {
  components: {
    People,
    Message
  },
  setup() {
    const title = "会话";
    const contents = reactive([
      { type: 'role', content: '我们开始聊天吧' }
    ]);
    const sendMsg = ref('');

    const onSendClick = () => {
      contents.push({
        type: 'self',
        content: sendMsg.value
      });
      sendMsg.value = '';
    }

    return {
      title,
      contents,
      sendMsg,
      onSendClick
    }
  }
}
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