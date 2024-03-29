<template>
  <div>page-home, theme: {{ theme }}</div>
</template>

<script setup>
import {
  useTheme,
} from '@/hooks';

const {
  theme,
} = useTheme();
</script>
