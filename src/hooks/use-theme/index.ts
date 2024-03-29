import {
  ref,
} from 'vue';

import {
  useListener,
} from '../use-listener';

export function useTheme() {
  const themeDetector = window.matchMedia('(prefers-color-scheme: dark)');

  const theme = ref(
    themeDetector.matches
      ? 'dark'
      : 'light',
  );

  useListener(themeDetector, 'change', ({
    matches,
  }: MediaQueryList) => {
    theme.value = matches
      ? 'dark'
      : 'light';
  });

  return {
    theme,
  };
}
