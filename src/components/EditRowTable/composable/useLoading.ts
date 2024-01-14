import { ref, unref, computed } from 'vue';

export function useLoading() {
  const loadingRef = ref(false);

  const getLoading = computed(() => unref(loadingRef));

  function setLoading(loading: boolean) {
    loadingRef.value = loading;
  }

  return { getLoading, setLoading };
}
