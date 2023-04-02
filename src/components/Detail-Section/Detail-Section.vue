<template>
  <div class="Wrapper1">
    <div class="title" v-if="title.length">
      <h2 class="text" >{{ title }}</h2>
    </div>
    <div class="counter">
      <slot>
        <h1>默认内容</h1>
      </slot>
    </div>
    <div class="footer-title" v-if="moretext.length">
      <span class="text">{{ moretext }}</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    default: "",
  },
  moretext: {
    type: String,
    default: "",
  },
});
</script>
<style scoped lang="less">
.Wrapper1 {
  padding: 0 20px;
  border-top: 5px solid #f2f3f4;
  margin-top: 30px;
}
.title {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}
.footer-title {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 44px;
  line-height: 44px;
  color: #ff9857;
  font-size: 14px;
  font-weight: 600;
}
</style>
