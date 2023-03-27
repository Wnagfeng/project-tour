<template>
  <div class="city-group">
    <van-index-bar :index-list="cityListGroupKey">
      <van-index-anchor index="热门" />
      <div class="city-list">
        <template v-for="(item, index) in groupData.hotCities" :key="index">
          <div class="city" @click="cityClick(item)">{{ item.cityName }}</div>
        </template>
      </div>
      <template v-for="(item, index) in groupData.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(iten, indey) in item.cities" :key="indey">
          <van-cell :title="iten.cityName" @click="cityClick(iten)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>
<script setup>
import { defineProps, computed } from "vue";
import usecityData from "@/Store/Module/City";
import { useRouter } from "vue-router";
const router = useRouter();
const citystore = usecityData();

const props = defineProps({
  groupData: {
    typeof: Object,
    default: () => ({}),
  },
});
// 使用ui组件库默认生成的话有些城市没有对上 我们这里使用计算属性名来获取所有的group新
const cityListGroupKey = computed(() => {
  const list = props.groupData?.cities?.map((item) => {
    return item.group;
  });
  list?.unshift("#");
  return list;
});
function cityClick(city) {
  // 这里的数据我们后期可能会发送给服务器我们最好用pinia保存一下
  citystore.currentCity = city;
  router.back();
}
</script>
<style scoped lang="less">
.city-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 25px 10px 10px;
  justify-content: space-around;
  padding-right: 25px;
}
.city {
  background-color: #fff4ec;
  width: 70px;
  height: 28px;
  border-radius: 14px;
  font-size: 12px;
  color: black;
  text-align: center;
  line-height: 28px;
  margin: 6px 0;
}
</style>
