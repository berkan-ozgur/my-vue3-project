<template>
 <div class="home">
    <ItemListComponentVue :items="items"/>
 </div>
</template>


<script lang="ts">
import ItemListComponentVue from "@/components/items/ItemList.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Home',
    components:{
        ItemListComponentVue
    },
     setup() {
   const items: ItemInterface[] = [{
	   id: 1,
	   name: 'Item 1',
       selected: false
	 }, {
	   id: 2,
	   name: 'Item 2',
       selected: false
	 }, {
	   id: 3,
	   name: 'Item 3',
       selected: false
	 }]
	 return {
	   items
    }}
})
</script>