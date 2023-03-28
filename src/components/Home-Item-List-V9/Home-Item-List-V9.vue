<template>
  <div class="Wrapper">
    <div class="item-inner">
      <div class="cover">
        <img :src="Data.image.url" alt="" />
      </div>
      <div class="info">
        <div class="summaryText">{{ Data.summaryText }}</div>
        <div class="houseName">{{ Data.houseName }}</div>
        <div class="new">
          <van-rate
            :model-value="itemStore"
            color="#fff"
            :size="15"
            readonly
            allow-half
          />
          <div class="price">￥{{ Data.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  Data: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
// 调用number转换为数字类型
const itemStore = computed(() => {
  return Number(props.Data.commentScore);
});
</script>
<style scoped lang="less">
.Wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
 
}
.item-inner {
  overflow: hidden;
  background: #fff;
  border-radius: 10px;
  margin: 5px;
}
.info {
  position: absolute;
  padding: 8px 10px;
  color: #fff;
  bottom: 0;
}
.cover img {
  width: 100%;
}
.new {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.houseName {
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
