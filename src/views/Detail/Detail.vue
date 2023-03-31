<template>
  <div class="Wrapper">
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 当detailData有数据的时候在渲染main -->
    <div class="main" v-if="mainPart">
      <DetaileBanner
        :swipe-data="mainPart?.topModule?.housePicture?.housePics"
      ></DetaileBanner>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";
import { getDetailDate } from "@/service/index";
import DetaileBanner from "./C-pns/Detail-Banner.vue";
const route = useRoute();
const router = useRouter();
const houseId = route.params.id;
const detailData = ref({});
const mainPart = computed(() => {
  return detailData.value.mainPart;
});

getDetailDate(houseId).then((res) => {
  detailData.value = res.data;
});
function onClickLeft() {
  router.back();
}
</script>
<style scoped lang="less">
.main{
  width: 100%;
}
</style>
