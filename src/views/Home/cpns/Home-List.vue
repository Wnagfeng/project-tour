<template>
  <div class="container">
    <HomeSearchBar v-if="isShowSearchbar"></HomeSearchBar>
    <h1>热门精选</h1>
    <div class="content">
      <template v-for="(item, index) in houselist">
        <!-- 我们在这里可以直接写事件函数 因为他本质上是直接绑定到组件根元素上面 -->
        <HomeItemListV3
          v-if="item.discoveryContentType === 3"
          :Data="item.data"
          @click="itemClick(item.data)"
        ></HomeItemListV3>
        <HomeItemListV9
          v-else-if="item.discoveryContentType === 9"
          :Data="item?.data"
          @click="itemClick(item.data)"
        ></HomeItemListV9>
      </template>
    </div>
  </div>
</template>
<script setup>
import { watch, ref, computed } from "vue";
import { useHomeHotSuggests } from "@/Store/Module/Home";
import { storeToRefs } from "pinia";
import HomeItemListV3 from "@/components/Home-Item-List-V3/Home-Item-List-V3.vue";
import HomeItemListV9 from "@/components/Home-Item-List-V9/Home-Item-List-V9.vue";
import HomeSearchBar from "./Home-Search-Bar.vue";
import { UserScroll } from "@/hooks/UserScroll";
import { useRouter } from "vue-router";

const router = useRouter();
const HomeData = useHomeHotSuggests();
HomeData.fetchHomeHouseList();
const { houselist } = storeToRefs(HomeData);
const { isReachBottom, scrollTop } = UserScroll();
// 使用watch进行监听 监听数据的变化
watch(isReachBottom, (newValue, old) => {
  console.log(newValue, old);

  // 如果变成true就在这里发网络请求
  if (newValue) {
    // 我们在store中发送请求的时候使用的async所以这里默认返回promise，我们在数据完全回来以后在把他变成false
    HomeData.fetchHomeHouseList().then(() => {
      console.log("数据回来了");
      isReachBottom.value = false;
    });
  }
});

// const isShowSearchbar = ref(false);
// watch(scrollTop, (newValue) => {
//   isShowSearchbar.value = newValue > 100;
// });
const isShowSearchbar = computed(() => {
  return scrollTop.value >= 700;
});
function itemClick(item) {
  router.push("/detail/" + item.houseId);
  console.log(item.houseId);
}
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
