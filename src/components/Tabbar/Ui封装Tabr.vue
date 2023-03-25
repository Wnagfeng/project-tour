<template>
  <div class="tab-bar-Wrapper">
    <!-- <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_home.png" alt="" />
      <span>首页</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_favor.png" alt="" />
      <span>收藏</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_order.png" alt="" />
      <span>订单</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_message.png" alt="" />
      <span>消息</span>
    </div> -->
    <van-tabbar v-model="currentIndex">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item>
          <span>{{ item.text }}</span>
          <!-- 在他的底层实际上是预留了插槽方便我们进行自定义 留的是具名插槽 -->
          <template #icon>
            <img
              v-if="index !== currentIndex"
              :src="loadImgUrl(item.imageUrl)"
              alt=""
            />
            <img v-else :src="loadImgUrl(item.imgActiveUrl)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>
<script setup>
import tabbarData from "@/assets/Data/tabbar";
import { loadImgUrl } from "@/utils/getimgUrl";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const currentIndex = ref(0);
const changeCurrentindex = (index, item) => {
  currentIndex.value = index;
  router.push(item.path);
};
</script>
<style scoped lang="less">
:deep(.van-tabbar-item__icon img) {
  // display: inline-block;
  // font-size: 40px;
  height: 30px;
  color: #ff9857;
}
</style>
