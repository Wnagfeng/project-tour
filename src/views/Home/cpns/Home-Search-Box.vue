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
</template>
<script setup>
import { formatMonthDay, getDiffDays } from "@/utils/FormatData";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useHomeHotSuggests } from "@/Store/Module/Home";

const HotSuggests = useHomeHotSuggests();
HotSuggests.fetchHomeHotSuggestsData();
const { HomeHotSuggests } = storeToRefs(HotSuggests);
// 获取现在时间
const nowData = new Date();
// 开始时间默认为今天 格式化后结果
const startData = ref(formatMonthDay(nowData));
// 结束时间默认为今天+1
const newdata = new Date();
newdata.setDate(nowData.getDate() + 1);
// 结束时间格式化后结果
const endData = ref(formatMonthDay(newdata));
// 时间差值
const diffData = ref(getDiffDays(nowData, newdata));
const show = ref(false);
function onConfirm(value) {
  const selectsStartData = value[0];
  const selectEndData = value[1];
  startData.value = formatMonthDay(selectsStartData);
  endData.value = formatMonthDay(selectEndData);
  show.value = false;
  diffData.value = getDiffDays(selectsStartData, selectEndData);
}
function showcalendar() {
  show.value = true;
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
  margin:  10px 0;
}
.item {
  padding: 4px 7px;
  margin: 4px;
  border-radius: 15px;
}
</style>
