<template>
  <div class="Home">
    <HomeNavBar></HomeNavBar>
    <HomeNavBanner></HomeNavBanner>
    <HomeLocation></HomeLocation>
    <HomeSearchBox></HomeSearchBox>
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
</style>

<script setup>
import HomeNavBar from "./cpns/Home-nav-bar.vue";
import HomeNavBanner from "./cpns/Home-nav-banner.vue";
import HomeLocation from "./cpns/Home-location.vue";
import HomeSearchBox from "./cpns/Home-Search-Box.vue";
</script>
