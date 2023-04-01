<template>
  <div class="item-inner">
    <template v-for="(item, index) in Data.houseFacilitys">
      <!-- 这里的数据是根据Data.facilitySort中的index来决定是否展示的所以这里我们使用 -->
      <!-- includes 可以判断一个数组中是否包含某一个元素，并返回true 或者false -->
      <div class="item" v-if="Data.facilitySort.includes(index)">
        <div class="head">
          <img :src="item.icon" alt="" />
          <div class="title">{{ item.groupName }}</div>
        </div>
        <div class="list">
          <!-- 在facilitys中保存着我们需要展示的tip 这里我们就展示前四条 -->
          <template v-for="(iten, index) in item.facilitys.slice(0, 4)">
            <div class="list-inner">
              <i class="icon"></i>
              <span>{{ iten.name }}</span>
            </div>
          </template>
        </div>
      </div>
    </template>
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
.item-inner {
  margin-top: 12px;
  padding: 5px 0;
  border-radius: 12px;
  font-size: 12px;
  background-color: #f7f9fb;
  overflow: hidden;
}
.item {
  display: flex;
  margin: 21px 0;
}
.head {
  text-align: center;
  width: 90px;
}
.head img {
  width: 20px;
  height: 20px;
}
.list .icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url(@/assets/img/detail/icon_check.png) 0 0/ 100% 100%;
  margin-right: 6px;
}
.list {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
}
.list-inner {
  width: 50%;
  margin-bottom: 5px;
}
</style>
