<script setup>
import { RouterLink } from "vue-router";
import Tabbar from "@/components/Tabbar/Tabbar.vue";
</script>

<template>
  <h1>this is my frist Project</h1>
  <RouterView></RouterView>
  <RouterLink to="/home">home</RouterLink>
  <RouterLink to="/message">message</RouterLink>
  <RouterLink to="/favor">favor</RouterLink>
  <RouterLink to="/order">order</RouterLink>
  <Tabbar></Tabbar>
</template>

<style scoped></style>
