<template>
  <div class="">
    <div class="top">
      <img :src="Data.topScroll" alt="" />
    </div>
    <div class="user">
      <div class="left">
        <img :src="Data.hotelLogo" alt="" />
        <div class="tips">
          <div class="name">{{ Data.hotelName }}</div>
          <template v-for="(item, index) in Data.hotelTags">
            <span class="tig">{{ item.tagText.text }}</span>
            <span class="icon" v-if="index != Data.hotelTags.length - 1"
              >|</span
            >
          </template>
        </div>
      </div>
      <div class="right">
        <button>联系房东</button>
      </div>
    </div>
    <div class="infos">
      <div class="hotelSummary">
        <template v-for="(item, index) in Data.hotelSummary">
          <div class="info-inner">
            <div class="title">{{ item.title }}</div>
            <div class="introduction">{{ item.introduction }}</div>
            <div class="tip">{{ item.tip }}</div>
          </div>
        </template>
      </div>
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
  width: 100%;
  height: 30px;
}
.top img {
  width: 100%;
}
.user {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  display: flex;
  align-items: center;
}
.left img {
  width: 54px;
  height: 54px;
  border-radius: 50%;
}
.left .tips .name {    
  font-weight: 700;
  font-size: 17px;
}
.tig {
  font-size: 8px;
  color: rgb(155, 155, 155);
}
.icon {
  color: rgb(155, 155, 155);
  margin: 0 5px;
}
.right button {
  background-color: #ff9854;
  border: none;
  border-radius: 7px;
  width: 70px;
  height: 30px;
  line-height: 30px;
  color: #fff;
}
.hotelSummary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 10px 10px;
}
.title {
  color: #999;
}
.introduction {
  font-size: 18px;
  font-weight: 700;
  color: #333;
}
.tip {
  color: #999;
}
</style>
