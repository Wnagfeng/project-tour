<template>
  <!-- 入住时间展示--start -->
  <div class="data" @click="showcalendar">
    <div class="star">
      <div class="star-data">
        <div class="tip">入住</div>
        <div class="time">{{ startData }}</div>
      </div>
      <div class="stay">停留{{ diffData }}晚</div>
    </div>
    <div class="end">
      <div class="tip">离开</div>
      <div class="time">{{ endData }}</div>
    </div>
  </div>
  <van-calendar
    :round="false"
    color="#ff9854"
    v-model:show="show"
    type="range"
    @confirm="onConfirm"
    :show-confirm="false"
  />
  <!-- 入住时间展示--end -->
  <!-- 价格名宿---start -->
  <div class="section">
    <div class="price">价格不限</div>
    <div class="people">人数不限</div>
  </div>
  <div class="section">关键字/位置/民宿名</div>
  <!-- 价格名宿---end -->
  <!-- 热门城市展示 ---start -->
  <div class="HotSuggests">
    <template v-for="item in HomeHotSuggests">
      <div
        class="item"
        :style="{
          color: item.tagText.color,
          background: item.tagText.background.color,
        }"
      >
        {{ item.tagText.text }}
      </div>
    </template>
  </div>
  <!-- 热门城市展示 ---end -->
  <!-- 开始搜索 -->
  <div class="search">
    <button class="item" @click="SearchClick">开始搜索</button>
  </div>
</template>
<script setup>
import { formatMonthDay, getDiffDays } from "@/utils/FormatData";
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useHomeHotSuggests } from "@/Store/Module/Home";
import { useRouter } from "vue-router";
import usecityData from "@/Store/Module/City";
import userMain from "@/Store/Module/Main";

const router = useRouter();
const cityStore = usecityData();
const { currentCity } = cityStore;

const dataAll = userMain();
const { nowData, newdata } = storeToRefs(dataAll);

const HotSuggests = useHomeHotSuggests();
HotSuggests.fetchHomeHotSuggestsData();
const { HomeHotSuggests } = storeToRefs(HotSuggests);

const startData = computed(() => formatMonthDay(nowData.value));
const endData = computed(() => formatMonthDay(newdata.value));

// 时间差值
const diffData = ref(getDiffDays(nowData.value, newdata.value));
const show = ref(false);
function onConfirm(value) {
  const selectsStartData = value[0];
  const selectEndData = value[1];
  dataAll.nowData = selectsStartData;
  dataAll.newdata = selectEndData;
  show.value = false;
  diffData.value = getDiffDays(selectsStartData, selectEndData);
}
function showcalendar() {
  show.value = true;
}
function SearchClick() {
  // 跳转页面需要携带数据过去

  // 如果需要携带数据我们需要以对象的形式传递数据过去
  router.push({
    path: "/search",
    query: {
      startData: startData.value,
      endData: endData.value,
      currentCity: currentCity,
    },
  });
}
</script>
<style scoped lang="less">
.data {
  border-top: 1px solid #faf8f9;
  border-bottom: 1px solid #faf8f9;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.tip {
  color: #999;
}
.star {
  display: flex;
  flex: 1;
  align-items: center;
}
.star-data {
  display: flex;
  flex-direction: column;
}
.stay {
  flex: 1;
  text-align: center;
  line-height: 50px;
  color: #999;
}
.end {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.section {
  color: #999;
  padding: 0 20px;
  display: flex;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #faf8f9;
}
.price {
  flex: 1;
}
.people {
  border-left: 1px solid #faf8f9;
  padding-left: 20px;
}
.HotSuggests {
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
}
.item {
  padding: 4px 7px;
  margin: 4px;
  border-radius: 15px;
}
.search {
  padding: 0 20px;
}
.search .item {
  width: 100%;
  height: 50px;
  max-height: 50px;
  font-weight: 500;
  font-size: 18px;
  line-height: 38px;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
  border: none;
}
</style>
