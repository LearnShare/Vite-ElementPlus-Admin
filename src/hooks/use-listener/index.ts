import {
  onMounted,
  onUnmounted,
} from 'vue';

export function useListener(
  target: EventTarget,
  event: string,
  callback: () => void,
) {
  onMounted(() => {
    target.addEventListener(event, callback);
  });

  onUnmounted(() => {
    target.removeEventListener(event, callback);
  });
}
