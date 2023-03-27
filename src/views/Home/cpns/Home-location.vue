<template>
  <div class="location">
    <div class="city" @click="changeCity">{{ cityStore.currentCity.cityName }}</div>
    <div class="mycity">
      <span class="text" @click="getPosition">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import usecityData from "@/Store/Module/City";
const cityStore = usecityData();
const router = useRouter();
function getPosition() {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("获取位置成功:", res);
    },
    (err) => {
      console.log("获取位置失败:", err);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
}
function changeCity() {
  router.push("/city");
}
</script>
<style scoped lang="less">
.location {
  display: flex;
  align-items: center;

  height: 50px;
}
.mycity {
  width: 74px;
  align-items: center;
  height: 44px;
  display: flex;
  margin-right: 20px;
}
.mycity img {
  width: 18px;
  height: 18px;
}
.text {
  font-size: 12px;
  line-height: 50px;
}
.city {
  flex: 1;
  font-size: 14px;
  margin-left: 20px;
}
</style>
