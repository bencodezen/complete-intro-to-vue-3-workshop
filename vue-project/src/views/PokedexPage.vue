<!--<script setup>-->
<!--import BaseButton from "../components/base-button.vue";-->
<!--import { computed, ref, reactive } from "vue";-->

<!--const emits = defineEmits(["change-region"]);-->

<!--const props = defineProps({-->
<!--  region: {-->
<!--    type: String,-->
<!--  },-->
<!--});-->

<!--const regionName = ref("Kanto");-->

<!--const state = reactive({-->
<!--  elementType: "lightning",-->
<!--});-->

<!--const elementTypeAllCaps = computed(() => {-->
<!--  return state.elementType.toUpperCase() + props.region;-->
<!--});-->

<!--const pokedex = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then(-->
<!--    (response) => response.json()-->
<!--);-->

<!--const changeRegionName = () => {-->
<!--  regionName.value = "Hoenn";-->
<!--  emits("change-region");-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <h1>Pokedex</h1>-->
<!--&lt;!&ndash;  <h2>{{ regionName }}</h2>&ndash;&gt;-->
<!--  <BaseButton />-->
<!--  <h3>{{ elementTypeAllCaps }}</h3>-->
<!--  <button @click="changeRegionName">Change Region Name</button>-->
<!--  <pre>{{ PokedexPage }}</pre>-->
<!--</template>-->

<script>

</script>

<template>
<h1>Pokedex</h1>
</template>