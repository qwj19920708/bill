<script lang="ts" setup>
import { ref, computed } from "vue";
import { routes } from "@/router";

const activeIndex = ref("1");

const menus = computed(() => {
  return routes.map((item) => {
    return {
      index: item.path,
      title: item.meta!.title,
      children: (item.children || []).map((it) => {
        return {
          index: `${item.path}/${it.path}`,
          title: it.meta!.title,
        };
      }),
    };
  });
});

const handleSelect = (val) => {
  activeIndex.value = val;
};
</script>

<template>
  <div class="menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
    >
      <template v-for="item in menus" :key="item.index">
        <el-sub-menu
          v-if="item.children && item.children.length"
          :index="item.index"
        >
          <template #title>{{ item.title }}</template>
          <el-menu-item
            v-for="subItem in item.children"
            :index="subItem.index"
            :key="subItem.index"
          >
            {{ subItem.title }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.index">{{ item.title }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.menu :deep(.el-menu--horizontal) {
  border: 0;
}
</style>
