<template>
  <div class="page-header">
    <a
        href="/"
        class="logo">
      <img
          :src="IconElementPlus"
          alt="Element-Plus" />
      <span>Vite ElementPlus Admin</span>
    </a>
    <nav>
      <el-input
          class="search-input"
          placeholder="Search something"
          size="large"
          :suffix-icon="IconSearch" />
      <el-menu
          mode="horizontal"
          :ellipsis="false">
        <el-menu-item
            index="guide">Guide</el-menu-item>
        <el-sub-menu
            index="docs">
          <template #title>Docs</template>
          <el-menu-item
              index="docs-router">Router</el-menu-item>
          <el-menu-item
              index="docs-layout">Layout</el-menu-item>
          <el-menu-item
              index="docs-template">Template</el-menu-item>
        </el-sub-menu>
      </el-menu>
      <el-switch
          v-model="darkMode"
          :active-action-icon="IconMoonNight"
          :inactive-action-icon="IconSunny" />
      <a
          href="https://github.com/LearnShare/Vite-ElementPlus-Admin"
          class="github"
          target="_blank">
        <img
            :src="IconGithub" />
      </a>
    </nav>
  </div>
</template>

<script
    setup
    lang="ts">
import {
  ref,
} from 'vue';
import {
  Search as IconSearch,
  Sunny as IconSunny,
  MoonNight as IconMoonNight,
} from '@element-plus/icons-vue';

import IconElementPlus from '@/assets/icons/element-plus.svg';
import IconGithub from '@/assets/icons/github.svg';

const darkMode = ref(false);
</script>

<style
    scoped
    lang="scss"
    src="./index.scss"></style>
