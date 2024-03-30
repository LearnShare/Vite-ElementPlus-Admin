<template>
  <div class="layout-main">
    <el-container>
      <el-header>
        <page-header />
      </el-header>
      <el-container>
        <el-aside
            :width="collapse ? 'auto' : '240px'">
          <nav-menu
              :collapse="collapse" />
          <el-button
              class="collapse-btn"
              :class="collapse ? '' : 'expand'"
              circle
              @click.stop="toggleCollapse"
              :icon="collapse ? IconExpand : IconFold" />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script
    setup
    lang="ts">
import {
  ref,
} from 'vue';
import {
  Expand as IconExpand,
  Fold as IconFold,
} from '@element-plus/icons-vue';

import PageHeader from './page-header/index.vue';
import NavMenu from './nav-menu/index.vue';

// TODO store data
const collapse = ref(false);

function toggleCollapse() {
  collapse.value = !collapse.value;
}
</script>

<style
    scoped
    lang="scss"
    src="./index.scss"></style>
