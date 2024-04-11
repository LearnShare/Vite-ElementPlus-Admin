<template>
  <el-menu
      router
      :default-active="$route.path"
      :collapse="collapse"
      :collapse-transition="false">
    <template
        v-for="item in routes"
        :key="item.path">
      <el-menu-item
          v-if="!item.children"
          :index="item.path">
        <el-icon
            v-if="item.meta.icon">
          <component
              :is="item.meta.icon" />
        </el-icon>
        <template #title>{{ item.meta.title }}</template>
      </el-menu-item>
      <el-sub-menu
          v-else
          :index="item.path">
        <template #title>
          <el-icon
              v-if="item.meta.icon">
            <component
                :is="item.meta.icon" />
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item
            v-for="childItem in item.children"
            :key="childItem.path"
            :index="`${item.path}/${childItem.path}`">
          <el-icon
              v-if="childItem.meta.icon">
            <component
                :is="childItem.meta.icon" />
          </el-icon>
          <template #title>{{ childItem.meta.title }}</template>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script
    setup
    lang="ts">
import routes from '@/router/routes';

defineProps<{
  collapse?: boolean,
}>();
</script>
