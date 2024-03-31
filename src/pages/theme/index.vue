<template>
  <div>
    <p>browser theme: {{ theme }}</p>
    <p>preference theme:</p>
    <el-radio-group
        v-model="preference.theme"
        @change="updateTheme">
      <el-radio-button
          v-for="option in themeOptions"
          :key="option.value"
          :label="option.label"
          :value="option.value" />
    </el-radio-group>
  </div>
</template>

<script setup>
import {
  onMounted,
} from 'vue';

import {
  useTheme,
  usePreference,
} from '@/hooks';

const themeOptions = [
  {
    label: 'Auto',
    value: 'auto',
  },
  {
    label: 'Light',
    value: 'light',
  },
  {
    label: 'Dark',
    value: 'dark',
  },
];

const {
  theme,
} = useTheme();

const {
  preference,
} = usePreference();

function updateTheme(value) {
  const root = document.querySelector('html');

  root.className = value === 'auto'
    ? theme.value
    : value;
}

// FEATURE set theme when App mounted
onMounted(() => {
  updateTheme(preference.value.theme);
});
</script>
