<script setup lang="ts">
import Header from "@/components/header/index.vue";
</script>

<template>
  <div class="wrap">
    <Header></Header>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.view {
  flex: 1;
}
</style>
