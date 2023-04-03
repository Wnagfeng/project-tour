<template>
  <div class="Home" ref="homeRef">
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
.Home {
  padding-bottom: 60px;
  height: 100vh;

  overflow-y: auto;
}

/*  */
</style>

<script setup>
import HomeNavBar from "./cpns/Home-nav-bar.vue";
import HomeNavBanner from "./cpns/Home-nav-banner.vue";
import HomeLocation from "./cpns/Home-location.vue";
import HomeSearchBox from "./cpns/Home-Search-Box.vue";
import HomeCategories from "./cpns/Home-Categories.vue";
import HomeList from "./cpns/Home-List.vue";
import { onActivated, ref, watch } from "vue";
import { UserScroll } from "@/hooks/UserScroll";
const homeRef = ref();

let { scrollTop } = UserScroll(homeRef);

// 由于我们对home页面进行了keepalive当我们切换到home页面的时候他会帮我们调用onactive
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value,
  });
});
</script>
