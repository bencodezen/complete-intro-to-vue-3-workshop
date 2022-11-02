<script setup>
import BaseCounter from "./components/base-counter.vue";
import UserCard from "./components/user-card.vue";
</script>

<template>
  <BaseCounter />
  <UserCard :user="{ name: 'Ben', food: 'Ramen' }" />
</template>
