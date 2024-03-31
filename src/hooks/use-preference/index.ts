import {
  useStorage,
} from '@vueuse/core';

export function usePreference() {
  const preference = useStorage('vepa_preference', {
    theme: 'auto',
  });

  return {
    preference,
  };
}
