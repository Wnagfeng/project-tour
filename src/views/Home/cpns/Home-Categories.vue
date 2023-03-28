<template>
  <div class="Categories">
    <template v-for="item in Categories">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>
<script setup>
import { useHomeHotSuggests } from "@/Store/Module/Home";
const userHomeData = useHomeHotSuggests();
// 发送网络请求获取数据
userHomeData.fetchHomeCategoriesData();
const { Categories } = userHomeData;
</script>
<style scoped lang="less">
.Categories {
  box-sizing: border-box;
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 20px;
  margin-top: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
}
.item {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
}
.Categories .item img {
  width: 32px;
  height: 32px;
}
</style>
