<script>
import Pokedex from "@/components/pokedex.vue";
// https://pokeapi.co/api/v2/pokemon?limit=151
export default {
  components: {
    Pokedex,
  }
}
</script>

<template>
  <h1>New App</h1>
  <Suspense>
    <Pokedex/>
    <template v-slot:fallback> Loading Pokedex data...</template>
  </Suspense>
</template>

<style>

</style>
