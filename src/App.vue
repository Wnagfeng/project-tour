<script setup>
import { RouterLink, useRoute } from "vue-router";
import Tabbar from "@/components/Tabbar/Tabbar.vue";
const router = useRoute();
</script>

<template>
  <RouterView></RouterView>
  <Tabbar v-show="!router.meta.IsShowTabBar"></Tabbar>
  <!-- <Tabbar></Tabbar> -->
</template>

<style scoped></style>
