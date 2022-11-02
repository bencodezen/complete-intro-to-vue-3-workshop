<script setup>
// pokedex/:id/:element

import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <h1>Pokemon #{{ route.params.id }}</h1>
</template>

<style></style>
