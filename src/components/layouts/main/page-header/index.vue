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
            index="theme">
          <template #title>Theme</template>
          <el-menu-item
              index="theme-auto">
            <el-icon>
              <IconMagicStick />
            </el-icon>
            <template #title>Auto</template>
          </el-menu-item>
          <el-menu-item
              index="theme-light">
            <el-icon>
              <IconSunny />
            </el-icon>
            <template #title>Light</template>
          </el-menu-item>
          <el-menu-item
              index="theme-dark">
            <el-icon>
              <IconMoonNight />
            </el-icon>
            <template #title>Dark</template>
          </el-menu-item>
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
  MagicStick as IconMagicStick,
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
