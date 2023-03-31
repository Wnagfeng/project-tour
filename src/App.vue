<script setup>
import { RouterLink, useRoute } from "vue-router";
import Tabbar from "@/components/Tabbar/Tabbar.vue";
import Login from "./components/Login/Login.vue";
const router = useRoute();
</script>

<template>

    <RouterView></RouterView>


  <Tabbar v-show="!router.meta.IsShowTabBar"></Tabbar>
  <Login></Login>
  <!-- <Tabbar></Tabbar> -->
</template>

<style scoped></style>
