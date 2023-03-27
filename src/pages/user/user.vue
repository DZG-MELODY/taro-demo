<template>
  <view class="h-screen bg-gray-300">
    <view class="h-25 bg-white flex justify-between items-center">
      <view class="w-20 h-20 rounded">
        <open-data type="userAvatarUrl"></open-data>
      </view>
      <view class="text-orange-400 text-sm">
        <open-data type="userNickName"></open-data>
      </view>
      <text>
        是否登录:{{ isLogin ? 'Yes' : 'No' }}
      </text>
    </view>
    <nut-cell title='地址'>
      <text>{{ address.join(',') }}</text>
    </nut-cell>
  </view>
</template>

<script>
import { getSetting, authorize, getFuzzyLocation } from '@tarojs/taro';
import { ref, onMounted } from 'vue';
import { useAuth } from '@src/store';

export default {
  name: 'UserPage',
  setup() {
    const title = ref("用户");
    const address = ref([0, 0]);
    const auth = useAuth();

    onMounted(async () => {
      // const res = await getSetting({ scope: 'scope.userFuzzyLocation' });
      // if (!res.authSetting['scope.userFuzzyLocation']) {
      //   try {
      //     await authorize({ scope: 'scope.userFuzzyLocation' });
      //   } catch (error) {
      //     console.error(error.errMsg);
      //     return;
      //   }
      // }
      // const fuzzyLocation = await getFuzzyLocation();
      // console.log(JSON.stringify(fuzzyLocation));
      // address.value = [fuzzyLocation.longitude, fuzzyLocation.latitude];
    });

    return {
      title,
      address,
      isLogin: auth.isLogin
    };
  },
};

</script>