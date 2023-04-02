<template>
  <div class="">
    <div class="top">
      <div class="left">
        <div class="score">
          <span class="overall">{{ Data.overall }}</span>
          <div class="line"></div>
        </div>
        <div class="text">
          <div class="scoreTitle">{{ Data.scoreTitle }}</div>
          <div class="totalCount">{{ Data.totalCount }}条评论</div>
          <van-rate
            v-model="Data.overall"
            readonly
            allow-half
            color="#ff9854"
            :size="12"
          />
        </div>
      </div>
      <div class="right">
        <template v-for="(item, index) in Data.subScores">
          <div class="tip">{{ item }}</div>
        </template>
      </div>
    </div>
    <div class="commentTagVo">
      <template v-for="(item, index) in Data.commentTagVo">
        <span
          class="tips"
          :style="{ background: item.backgroundColor, color: item.color }"
          >{{ item.text }}</span
        >
      </template>
    </div>
    <div class="use">
      <div class="user">
        <div class="cover">
          <img :src="Data.comment.userAvatars" alt="" />
        </div>
        <div class="info">
          <div class="name">{{ Data.comment.userName }}</div>
          <div class="data">{{ Data.comment.checkInDate }}</div>
        </div>
      </div>
      <div class="commentDetail">{{ Data.comment.commentDetail }}</div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  Data: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style scoped lang="less">
.top {
  display: flex;
}
.line {
  width: 72px;
  height: 5px;
  background-color: #ff9854;
}
.left {
  display: flex;
}
.text {
  margin-top: 5px;
  margin-left: 10px;
}
.totalCount {
  margin: 5px 0px;
}

.overall {
  font-size: 48px;
  font-weight: 700;
}
.right {
  flex: 1;
  justify-content: flex-end;
  display: flex;
  flex-wrap: wrap;
}
.commentTagVo {
  display: flex;
  flex-wrap: wrap;
}
.tips {
  padding: 3px 5px;
  margin-right: 8px;
  margin-top: 5px;
  border-radius: 8px;
  font-size: 12px;
}
.user {
  display: flex;
}
.cover img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.info {
  margin-left: 8px;
}
.use {
  margin-top: 10px;
  background-color: #fafbf7;
  border-radius: 12px;
}
.commentDetail {
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>
