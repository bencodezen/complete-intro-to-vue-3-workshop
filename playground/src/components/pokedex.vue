<script setup>
import BaseButton from "./base-button.vue";
import {
  computed,
  defineProps,
  defineEmits,
  ref,
  reactive,
  onBeforeUnmount,
} from "vue";

const emits = defineEmits(["change-region"]);

const props = defineProps({
  region: {
    type: String,
  },
});

const regionName = ref("Kanto");

const state = reactive({
  elementType: "lightning",
});

const elementTypeAllCaps = computed(() => {
  return state.elementType.toUpperCase() + props.region;
});

const pokedex = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then(
  (response) => response.json()
);

const changeRegionName = () => {
  regionName.value = "Hoenn";
  emits("change-region");
};

onBeforeUnmount(() => {
  console.log("Do this thing!");
});
</script>

<template>
  <h2>{{ regionName }}</h2>
  <BaseButton />
  <h3>{{ elementTypeAllCaps }}</h3>
  <button @click="changeRegionName">Change Region Name</button>
  <pre>{{ pokedex }}</pre>
</template>
