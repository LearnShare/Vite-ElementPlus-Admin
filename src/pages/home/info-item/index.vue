<template>
  <div class="info-item">
    <h4 class="title">{{ title }}</h4>
    <div class="value">{{ value }}</div>
  </div>
</template>

<script
    setup
    lang="ts">
defineProps<{
  title: string;
  value: string;
}>();
</script>

<style
    scoped
    src="./index.scss"
    lang="scss"></style>
