<script>
// https://pokeapi.co/api/v2/pokemon?limit=151
import { computed, ref, reactive } from "vue";

export default {
  async setup() {
    const regionName = ref("Kanto");

    const state = reactive({
      elementType: "lightning",
    });

    console.log(regionName);
    console.log(state);

    const elementTypeAllCaps = computed(() => {
      return state.elementType.toUpperCase();
    });

    const pokedex = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    ).then((response) => response.json());

    const changeRegionName = () => {
      regionName.value = "Hoenn";
    };

    return {
      changeRegionName,
      elementTypeAllCaps,
      pokedex,
      regionName,
    };
  },
};
</script>

<template>
  <h2>{{ regionName }}</h2>
  <h3>{{ elementTypeAllCaps }}</h3>
  <button @click="changeRegionName">Change Region Name</button>
  <pre>{{ pokedex }}</pre>
</template>
