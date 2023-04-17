<script lang="ts" setup>
import Menu from "./Menu.vue";
</script>

<template>
  <div class="headerWrap">
    <!-- <h1>账单处理系统</h1> -->
    <h1>######</h1>
    <Menu class="menu"></Menu>
  </div>
</template>

<style scoped lang="scss">
.headerWrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  h1 {
    font-size: 20px;
  }
  .menu {
    flex: 1;
  }
}
</style>
