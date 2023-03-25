<template>
  <div class="Home">
    <HomeNavBar></HomeNavBar>
    <HomeNavBanner></HomeNavBanner>
    <div class="location">
      <div class="city">广州</div>
      <div class="mycity">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #f2f2f2;
}
.location {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.city{
  font-size: 12px;
  margin-left: 20px;
}
</style>

<script setup>
import HomeNavBar from "./cpns/Home-nav-bar.vue";
import HomeNavBanner from "./cpns/Home-nav-banner.vue";
</script>
