<script>
import Pokedex from "./components/pokedex.vue";

export default {
  components: {
    Pokedex,
  },
};
</script>

<template>
  <h1>New App</h1>
  <Suspense>
    <Pokedex />

    <template v-slot:fallback> Loading Pokedex data... </template>
  </Suspense>
</template>

<style></style>
