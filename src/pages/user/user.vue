<template>
  <view>
    {{ title }}
  </view>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const title = ref("用户")

    return {
      title
    }
  }
}

</script>