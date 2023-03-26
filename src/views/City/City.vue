<template>
  <van-search
    v-model="searchValue"
    placeholder="城市/区域/位置"
    shape="round"
    show-action
    @cancel="BackHome"
  />
  <van-tabs v-model:active="tabActive" swipeable color="#ff9854">
    <template v-for="(value, key, index) in AllCityData" :key="key">
      <!-- 观察数据发现服务器给我们返回的数据是两断内容我们需要根据key去匹配数据 在这里我们给他一个:name绑定一个key过去 在 tabActive中我们绑定的数据就不是
      index了是我们绑定的:name的值也就是我们的key 这样就行可以获得到我们需要的key了
      -->
      <van-tab :title="value.title" :name="key">国内·港澳台</van-tab>
    </template>
  </van-tabs>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import useCityStore from "@/Store/Module/City";
import { storeToRefs } from "pinia";
const cityStore = useCityStore();
cityStore.fetchGetAllCityData();
const { AllCityData } = storeToRefs(cityStore);
// 更据active的key来获取 对应的数据
// 我们这里需要使用一下computed来获取数据
// 根据key从allCities获取数据, 默认直接获取的数据不是响应式的, 所以必须包裹computed
const currentGrop = computed(() => AllCityData.value[tabActive.value]);
console.log(currentGrop);

const searchValue = ref("");
const router = useRouter();
const tabActive = ref();

function BackHome() {
  router.back();
}
</script>
<style scoped></style>
