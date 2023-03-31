<template>
  <div class="Wrapper" v-if="mainStore.isShowLogin">
    <div class="item">
      <div class="bg">
        <img src="@/assets/img/home/full-screen-loading.gif" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import useMain from "@/Store/Module/Main";
const mainStore = useMain();
</script>
<style scoped lang="less">
.Wrapper {
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg {
  width: 104px;
  height: 104px;
  //                                                位置 / 尺寸
  background: url(@/assets/img/home/loading-bg.png) center / 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg img {
  width: 70px;
  height: 70px;
  margin-bottom: 11px;
}
</style>
