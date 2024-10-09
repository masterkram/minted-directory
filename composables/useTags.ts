import { computed } from "vue";
import type Tag from "~~/types/Tag";
import { useState } from "#app";
import { useAppConfig } from "#imports";

export function useTags() {
  const selectedTags = useState<string[]>("tags", () => []);
  const tags = useAppConfig().directory.tags as Tag[] | undefined;

  const availableTags = computed((): Tag[] => {
    if (!tags) {
      return [];
    }
    return tags.filter(
      (e) => e && !selectedTags.value.includes((e as Tag).name)
    );
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
