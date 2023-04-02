<template>
  <div class="">
    <template v-for="(item, index) in Data.orderRules">
      <div class="introduction">
        <div class="title">{{ item.title }}</div>
        <div class="inner">{{ item.introduction }}</div>
        <span class="tip" v-if="item.tips">查看说明</span>
      </div>
    </template>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  Data: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style scoped lang="less">
.introduction {
  display: flex;
  margin: 10px 0 20px;
  font-size: 12px;
}
.inner {
  margin-left: 12px;
}
.title {
      width: 64px;
      color: #666;
    }
</style>
