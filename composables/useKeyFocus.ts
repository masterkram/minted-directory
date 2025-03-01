export default function () {
  const searchInput = ref();

  const keyListener = function (e: KeyboardEvent) {
    if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      searchInput.value.focus();
    }
  };

  onMounted(() => {
    document.body.addEventListener('keydown', keyListener);
  });

  onBeforeUnmount(() => {
    document.body.removeEventListener('keydown', keyListener);
  });

  return searchInput;
}
