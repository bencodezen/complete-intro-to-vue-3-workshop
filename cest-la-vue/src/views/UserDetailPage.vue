<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params)
</script>
<template>
  <h1>{{ route.params.name }}</h1>
</template>
