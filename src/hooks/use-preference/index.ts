import {
  ref,
} from 'vue';

export function usePreference() {
  // TODO store data
  const preference = ref({
    theme: 'auto',
  });

  /* function setPreference(
    key: string,
    value: string | number | boolean,
  ) {
    preference.value = {
      ...preference.value,
      [key]: value,
    };
  } */

  return {
    preference,
    // setPreference,
  };
}
