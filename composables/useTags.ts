import { ref, computed } from "vue";
import { useState } from "#app";
import { useAppConfig } from "#imports";

export function useTags() {
  const selectedTags = useState<string[]>("tags", () => []);
  const tags = useAppConfig().directory.tags;

  const availableTags = computed(() => {
    return tags.filter((e) => !selectedTags.value.includes(e.name));
  });

  function removeTag(myTag: string) {
    const index = selectedTags.value.indexOf(myTag);
    if (index > -1) {
      selectedTags.value.splice(index, 1);
    }
  }

  function addTagWithEvent(event: Event) {
    const select = event.target as HTMLSelectElement;
    const selectedValue = select.value;

    console.log(event);

    addTagByName(selectedValue);
    select.value = "";
  }

  function addTagByName(name: string) {
    if (selectedTags.value && !selectedTags.value.includes(name)) {
      selectedTags.value.push(name);
    }
  }

  function toggleTagByName(name: string) {
    const index = selectedTags.value.indexOf(name);
    if (index != -1) {
      return selectedTags.value.splice(index, 1);
    }

    selectedTags.value.push(name);
  }

  return {
    selectedTags,
    availableTags,
    addTagWithEvent,
    toggleTagByName,
    removeTag,
  };
}
