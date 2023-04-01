<template>
  <div class="Wrapper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="item in swipeData">
        <van-swipe-item class="item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <!-- 这里的key指向的是我们的swipeGroup中的key 因为我们对swipeGroup进行了分组分类所以他里面只有类型key例如2,4,9那么我们通过swipeData[active]?.enumPictureCategory
                获取到当前正在展示的enumPictureCategory把他和我们的分类号的数据{swipeGroup}中的key进行比较如果是一样的就加上active
             -->
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <span
              class="item"
              :class="{ active: swipeData[active]?.enumPictureCategory == key }"
              >{{ getName(value[0].title)[1] }}
              <span v-if="swipeData[active]?.enumPictureCategory == key"
                >{{ getCategoryIndex(swipeData[active]) }}/{{
                  value.length
                }}</span
              >
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => [],
  },
});
// 声明一个分类数据类型为对象
const swipeGroup = {};
// 方案二 ：两次循环
for (const item of props.swipeData) {
  swipeGroup[item.enumPictureCategory] = [];
}
for (const item of props.swipeData) {
  swipeGroup[item.enumPictureCategory].push(item);
}
// 用正则表达式去去掉符号
const nameReg = /【(.*?)】/i;
function getName(name) {
  //   return name.replace("：", "").replace("】", "").replace("【", "");
  return nameReg.exec(name);
}
// 获取当前正在展示的index
function getCategoryIndex(item) {
  const array = swipeGroup[item.enumPictureCategory]; //根据传递过来的item 的enumPictureCategory来获取他所在的一组中的全部数据
  return array.findIndex((index) => index === item); //比较在group中的每个item和当前展示的item的位置相等就返回该位置
}
</script>
<style scoped lang="less">
.Wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.my-swipe {
  width: 100%;
}
.item {
  width: 100%;
}

.van-swipe-item {
  padding: 0 !important;
}

.Wrapper .item img {
  width: 100%;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.3);
  color: rgb(0, 0, 0);
}
.item {
  padding: 0 3px;
}
.active {
  background-color: #fff;
  border-radius: 10px;
}
</style>
