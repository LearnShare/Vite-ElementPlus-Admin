<template>
  <el-menu
      router
      :default-active="$route.path"
      :collapse="collapse"
      :collapse-transition="false">
    <template
        v-for="item in menus"
        :key="item.path">
      <el-menu-item
          v-if="!item.children"
          :index="item.path">
        <el-icon
            v-if="item.icon">
          <component
              :is="item.icon" />
        </el-icon>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
      <el-sub-menu
          v-else
          :index="item.path">
        <template #title>
          <el-icon
              v-if="item.icon">
            <component
                :is="item.icon" />
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
            v-for="childItem in item.children"
            :key="childItem.path"
            :index="`${item.path}/${childItem.path}`">
          <el-icon
              v-if="childItem.icon">
            <component
                :is="childItem.icon" />
          </el-icon>
          <template #title>{{ childItem.title }}</template>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script
    setup
    lang="ts">
import {
  computed,
} from 'vue';

import routes from '@/router/routes';

defineProps<{
  collapse?: boolean,
}>();

// filter menus by meta.menu
const menus = computed(() => {
  const list = [];

  for (const item of routes) {
    if (item.meta.menu) {
      const menu = {
        path: item.path,
        icon: item.meta.menu.icon,
        title: item.meta.title,
      };

      if (item.children) {
        const childList = [];

        for (const childItem of item.children) {
          childList.push({
            path: childItem.path,
            icon: childItem.meta.menu.icon,
            title: childItem.meta.title,
          });
        }

        menu.children = childList;
      }

      list.push(menu);
    }
  }

  return list;
});
</script>
