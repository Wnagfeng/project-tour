<template>
  <div class="Wrapper">
    <div class="houseName">
      {{ infoData.houseName }}
    </div>
    <div class="houseTags">
      <template v-for="(item, index) in infoData.houseTags" :key="index">
        <span
          v-if="item.tagText"
          class="text"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
          >{{ item.tagText.text }}</span
        >
      </template>
    </div>
    <div class="commentBrief">
      <div class="left">
        <span class="overall">{{ infoData.commentBrief.overall }}</span>
        <span class="scoreTitle">{{ infoData.commentBrief.scoreTitle }}</span>
        <span class="commentBriefitem">{{
          infoData.commentBrief.commentBrief
        }}</span>
      </div>
      <div class="right">
        <span class="totalCount">
          {{ infoData.commentBrief.totalCount }} 条评论 <van-icon name="arrow"
        /></span>
      </div>
    </div>
    <div class="position">
      <span class="address">{{ infoData.nearByPosition.address }}</span>
      <span class="icon">地图·周边<van-icon name="arrow" /></span>
    </div>
  </div>

</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  infoData: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
</script>
<style scoped lang="less">
.Wrapper {
  padding: 0 20px;
  margin-top: 6px;
}
.houseName {
  font-weight: 700;
  font-size: 21px;
  color: #333;
  text-align: justify;
  overflow: hidden;
  margin-bottom: 6px;
  margin-top: 13px;
}
.houseTags {
  margin: 10px 0;
}
.text {
  font-size: 12px;
  margin: 0 2px;
  padding: 1px 3px;
}
.commentBrief {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  background-color: #f5f7fa;
  padding: 13px 8px;
  border-radius: 12px;
}
.left {
  align-items: center;
  display: flex;
}
.scoreTitle {
  margin: 0 5px;
  font-weight: 700;
}
.right {
  color: #ff9645;
  display: flex;
  align-items: center;
}
.overall {
  font-size: 18px;
  font-weight: 700;
}
.commentBriefitem {
  color: #666;
}
.position {
  margin-top: 12px;
  padding: 13px 8px;
  background-color: #f5f7fa;
  display: flex;
  justify-content: space-between;
  border-radius: 13px;
}
.address {
  font-weight: 700;
}
.icon {
  color: #ff9645;
}
</style>
