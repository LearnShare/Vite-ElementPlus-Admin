<template>
  <a
      class="dependence-item"
      :href="data.url"
      target="_blank">
    <div class="logo">
      <img
          :src="data.logo"
          :alt="data.name">
    </div>
    <div class="info">
      <h4 class="name">{{ data.name }}</h4>
      <div class="version">{{ data.version }}</div>
    </div>
  </a>
</template>

<script
    setup
    lang="ts">
defineProps<{
  data: object;
}>();
</script>

<style
    scoped
    src="./index.scss"
    lang="scss"></style>
