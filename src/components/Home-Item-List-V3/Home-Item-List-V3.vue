<template>
  <div class="Wrapper">
    <div class="item-inner">
      <div class="cover">
        <img :src="Data.image?.url" alt="" />
      </div>

      <div class="info">
        <div class="location">
          <img class="font" src="@/assets/img/home/location.png" alt="" />
          <span>{{ Data.location }}</span>
        </div>
        <div class="houseName">
          {{ Data.houseName }}
        </div>
        <div class="summary">{{ Data.summaryText }}</div>
        <div class="price">
          <div class="new">${{ Data.finalPrice }}</div>
          <div class="old">${{ Data.productPrice }}</div>
          <div class="tip" v-if="Data.priceTipBadge">
            {{ Data.priceTipBadge.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  Data: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

</script>
<style scoped lang="less">
.Wrapper {
  width: 50%;
}
.item-inner {
  margin: 5px;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
}
.location {
  display: flex;
  align-items: center;
}
.location .font {
  width: 12px;
  height: 12px;
}
.cover img {
  width: 100%;
}
.summary {
  margin: 5px 0;
  color: #666;
}
.price {
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  align-items: flex-start;
}
.old {
  margin: 0 3px;
  color: #999;
  font-size: 12px;
  text-decoration: line-through;
}
.tip {
  background-image: linear-gradient(270deg, #f66, #ff9f9f);
  color: #fff;
  padding: 0 6px;
  border-radius: 8px;
}

.new {
  color: #ff9854;
}
.houseName {
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
