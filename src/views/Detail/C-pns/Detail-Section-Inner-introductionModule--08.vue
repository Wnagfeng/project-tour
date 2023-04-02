<template>
  <div class="">
    <p class="title">{{ Data.title }}</p>
    <p class="introduction">{{ Data.introduction }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  Data: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style scoped lang="less">
.Wrapper {
  height: 250px;
}
.title {
  font-weight: 800;
  font-size: 18px;
}
.introduction {
  color: #666;
}
</style>
