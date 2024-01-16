<script setup>
// go to /pokedex/1
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params.id)
</script>

<template>
  <h1>Pokedex #{{ route.params.id }}</h1>
  <router-link to="/pokedex/20">Go to Pokemon #20</router-link>
</template>
