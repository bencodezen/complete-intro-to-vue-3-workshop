<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <main>
    <h1>{{ route.params.name }}</h1>
  </main>
</template>

<style></style>
