<template>
  <component
      :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>

<script
    lang="ts">
import LayoutMain from '@/components/layouts/main/index.vue';

export default {
  name: 'App',
  components: {
    LayoutMain,
  },
};
</script>
