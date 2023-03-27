<template>
  <van-search
    v-model="searchValue"
    placeholder="城市/区域/位置"
    shape="round"
    show-action
    @cancel="BackHome"
  />
  <van-tabs v-model:active="tabActive" swipeable color="#ff9854">
    <template v-for="(value, key, index) in cityAllData">
      <van-tab :title="value.title" :name="key"></van-tab>
    </template>
  </van-tabs>
  <div class="content">
    <CityList :groupData="CurrentTabe"></CityList>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import usecityData from "@/Store/Module/City";
import CityList from "./C-pns/CityList.vue";
const cityData = usecityData();
// 在这里发送网络请求
// 从data中获取发送网络请求的函数
cityData.fetchCityData();
const { cityAllData } = storeToRefs(cityData);

const searchValue = ref("");
const router = useRouter();
const tabActive = ref();
// 根据点击的tab来获取对应的数据进行展示
const CurrentTabe = computed(() => cityAllData.value[tabActive.value]);

function BackHome() {
  router.back();
}
</script>
<style scoped>
.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>
