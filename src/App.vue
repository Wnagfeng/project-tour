<script setup>
import { RouterLink, useRoute } from "vue-router";
import Tabbar from "@/components/Tabbar/Tabbar.vue";
import Login from "./components/Login/Login.vue";
const router = useRoute();
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="Home">
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <Tabbar v-show="!router.meta.IsShowTabBar"></Tabbar>
  <Login></Login>
  <!-- <Tabbar></Tabbar> -->
</template>

<style scoped></style>
