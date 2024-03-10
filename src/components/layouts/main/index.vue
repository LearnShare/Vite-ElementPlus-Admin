<template>
  <div class="layout-main">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="240px">
          <nav-menu />
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
import NavMenu from './nav-menu/index.vue';
</script>

<style
    scoped
    lang="scss"
    src="./index.scss"></style>
