<template>
  <div class="Home">
    <HomeNavBar></HomeNavBar>
    <HomeNavBanner></HomeNavBanner>
    <HomeLocation></HomeLocation>
    <HomeSearchBox></HomeSearchBox>
    <HomeCategories></HomeCategories>
    <HomeList></HomeList>
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
.Home{
  padding-bottom: 60px;
}
</style>

<script setup>
import HomeNavBar from "./cpns/Home-nav-bar.vue";
import HomeNavBanner from "./cpns/Home-nav-banner.vue";
import HomeLocation from "./cpns/Home-location.vue";
import HomeSearchBox from "./cpns/Home-Search-Box.vue";
import HomeCategories from "./cpns/Home-Categories.vue";
import HomeList from "./cpns/Home-List.vue";

</script>
