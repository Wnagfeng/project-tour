<template>
  <div class="Wrapper">
    <div class="search-inner">
      <div class="conunt">
        <div class="item">
          <div class="select start">
            <div class="name">住</div>
            <div class="data">{{ startData }}</div>
          </div>
          <div class="select end">
            <div class="name">离</div>
            <div class="data">{{ EndData }}</div>
          </div>
        </div>
        <div class="countent">
          <input id="text" type="text" name="" value="关键字/位置/民宿" />
        </div>
      </div>
      <div class="search-icon">
        <i class="icon"></i>
      </div>
    </div>
  </div>
</template>
<script setup>
import userMain from "@/Store/Module/Main";
import { formatMonthDay } from "@/utils/FormatData";
const dataAll = userMain();
const { nowData, newdata } = dataAll;
const startData = formatMonthDay(nowData, "MM.DD");
const EndData = formatMonthDay(newdata, "MM.DD");
</script>
<style scoped lang="less">
input {
  list-style: none;
}
.conunt {
  display: flex;
}
.Wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #fff;
  padding: 16px 16px 10px;
  color: #999;
  height: 45px;
}
.search-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 11px;
  font-size: 14px;
  background: #f2f4f6;
  border-radius: 5px;
}
.select {
  display: flex;
}
.select .data {
  color: black;
  margin-left: 7px;
}
.item {
  position: relative;
  border-right: 1px solid #fff;
  font-size: 10px;
  padding-right: 10px;
}
.end .data::after {
  content: "";
  width: 0px;
  height: 0px;
  border: 4px solid #666;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
  border-radius: 3px;
  position: absolute; //当我们开启定位以后他不会继父元素的宽高
  // 伪元素是行内元素 无法设置宽高，如果需要设置我们需要display 或者开启定位 刚好这里需要调整位置直接开启定位就行
  transform: rotate(45deg);
  bottom: -1px;
  right: -1px;
}
.countent {
  display: flex;
  justify-content: center;
  align-items: center;
}
#text {
  display: block;
  background: #f2f4f6;
  border: none;
}
.search-icon {
  width: 24px;
  height: 24px;
  display: inline-block;
  background-image: url("@/assets/img/home/home-sprite.png");
  background-position: -29px -151px;
    background-size: 207px 192px;
}
</style>
