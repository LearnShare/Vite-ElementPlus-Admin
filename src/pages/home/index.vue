<template>
  <div class="page-home">
    <section class="hero">
      <h2>About the Project</h2>
      <el-row
          :gutter="16">
        <el-col
            v-for="(item, index) in projectInfo"
            :key="index"
            :span="6">
          <a
              v-if="item.url"
              :href="item.url"
              target="_blank">
            <info-item
                :title="item.title"
                :value="item.value" />
          </a>
          <info-item
              v-else
              :title="item.title"
              :value="item.value" />
        </el-col>
      </el-row>
    </section>
    <section class="build-with">
      <h2>Build with</h2>
      <div class="list">
        <dependence-item
            v-for="item in dependencies"
            :key="item.name"
            :data="item" />
      </div>
    </section>
    <section class="features">
      <h2>Features</h2>
      <el-row
          :gutter="40">
        <el-col
            :span="4">
          <h4>Preferences</h4>
          <ul class="links">
            <li>
              <router-link
                  to="/theme">Theme</router-link>
            </li>
            <li>Locale</li>
          </ul>
        </el-col>
        <el-col
            :span="4">
          <h4>Layouts</h4>
          <ul class="links">
            <li>Auth</li>
            <li>MainFrame</li>
          </ul>
        </el-col>
        <el-col
            :span="4">
          <h4>Pages</h4>
          <ul class="links">
            <li>
              <router-link
                  to="/signin">Sign in</router-link>
            </li>
            <li>
              <router-link
                  to="/pages/dashboard">Dashboard</router-link>
            </li>
            <li>
              <router-link
                  to="/pages/table">Table</router-link>
            </li>
            <li>
              <router-link
                  to="/pages/grid">Grid</router-link>
            </li>
          </ul>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script
    setup
    lang="ts">
import InfoItem from './info-item/index.vue';
import DependenceItem from './dependence-item/index.vue';

import viteLogo from '@/assets/icons/vite.svg';
import vueLogo from '@/assets/icons/vue.svg';
import elementLogo from '@/assets/icons/element-plus.svg';
import vueuseLogo from '@/assets/icons/vueuse.svg';

const projectInfo = [
  {
    title: 'Repo',
    value: 'Vite-ElementPlus-Admin',
    url: 'https://github.com/LearnShare/Vite-ElementPlus-Admin',
  },
  {
    title: 'Version',
    value: '0.0.0',
    url: '',
  },
  {
    title: 'Author',
    value: 'LearnShare',
    url: 'https://github.com/LearnShare',
  },
  {
    title: 'Donate',
    value: '$1',
    url: '',
  },
];

const dependencies = [
  {
    name: 'Vite',
    version: '5.1.5',
    logo: viteLogo,
    url: 'https://vitejs.dev/',
  },
  {
    name: 'Vue',
    version: '3.4.21',
    logo: vueLogo,
    url: 'https://vuejs.org/',
  },
  {
    name: 'Element Plus',
    version: '2.6.1',
    logo: elementLogo,
    url: 'https://element-plus.org/',
  },
  {
    name: 'VueUse',
    version: '10.9.0',
    logo: vueuseLogo,
    url: 'https://vueuse.org/',
  },
];
</script>

<style
    scoped
    src="./index.scss"
    lang="scss"></style>
