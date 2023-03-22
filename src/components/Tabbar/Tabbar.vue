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
    <template v-for="item in tabbarData">
      <div class="tab-bar-item">
        <img :src="loadImgUrl(item.imageUrl)" alt="" />
        <span>{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>
<script setup>
import tabbarData from "@/assets/Data/tabbar";
import { loadImgUrl } from "@/utils/getimgUrl";
</script>
<style scoped lang="less">
.tab-bar-Wrapper {
  position: fixed;
  flex: 1;
  height: 50px;
  /*
给固定定位和绝对定位的盒子设置left:0;right:0可以实现横向撑满
给固定定位和绝对定位的盒子设置top:0;bottom:0可以实现纵向撑满
给固定定位和绝对定位的盒子设置tleft:0;right:0；op:0;bottom:0可以实现充满整个屏幕
*/
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #f3f3f3;
  display: flex;
  .tab-bar-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 12px;
    img {
      width: 36px;
    }
  }
}
</style>
