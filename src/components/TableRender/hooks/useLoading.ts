import { computed, ref, unref } from "vue";

export const useLoading = () => {
  const loadingRef = ref(false)

  const getLoading = computed(() => unref(loadingRef))

  function setLoading(loading: boolean) {
    loadingRef.value = loading
  }

  return { getLoading, setLoading }
};
