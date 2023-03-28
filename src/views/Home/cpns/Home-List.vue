<template>
  <div class="container">
    <h1>热门精选</h1>
    <div class="content">
      <template v-for="(item, index) in houselist">
        <HomeItemListV3
          v-if="item.discoveryContentType === 3"
          :Data="item.data"
        ></HomeItemListV3>
        <HomeItemListV9
          v-else-if="item.discoveryContentType === 9"
          :Data="item?.data"
        ></HomeItemListV9>
      </template>
    </div>
    <button @click="MoreData">点我获取更多数据</button>
  </div>
</template>
<script setup>
import { useHomeHotSuggests } from "@/Store/Module/Home";
import { storeToRefs } from "pinia";
import HomeItemListV3 from "@/components/Home-Item-List-V3/Home-Item-List-V3.vue";
import HomeItemListV9 from "@/components/Home-Item-List-V9/Home-Item-List-V9.vue";
const HomeData = useHomeHotSuggests();
HomeData.fetchHomeHouseList();
const { houselist } = storeToRefs(HomeData);
console.log(houselist);
</script>
<style scoped lang="less">
.container {
  padding: 0 20px;
}
.content {
  display: flex;
  flex-wrap: wrap;
}
</style>
