<template>
  <div class="home">
    <ItemsListComponent
      :items="items"
      :loading="loading"
      @selectItem="onSelectItem"
    />
  </div>
</template>


<script lang="ts">
import { defineComponent, computed, onMounted } from "vue"; // <-- add onMounted
import store from "@/store";
import ItemsListComponent from "@/components/items/ItemsList.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";
export default defineComponent({
  name: "Home",
  components: {
    ItemsListComponent,
  },
  setup() {
    const items = computed(() => {
      return store.state.items;
    });
    const loading = computed(() => {
      return store.state.loading;
    });
    onMounted(() => {
      store.dispatch("loadItems");
    });
    const onSelectItem = (item: ItemInterface) => {
      store.dispatch("selectItem", {
        id: item.id,
        selected: !item.selected,
      });
    };

    return {
      items,
      loading,
      onSelectItem,
    };
  },
});
</script>