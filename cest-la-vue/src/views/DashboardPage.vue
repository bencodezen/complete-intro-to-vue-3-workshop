<script setup>
import { greetingsCounter } from "../composables/greetingsCounterStore";
</script>

<template>
  <h1>Congratulations!</h1>
  <p>You have greeted people {{ greetingsCounter }} times!</p>
  <img src="https://i.gifer.com/fxt5.gif" alt="Party Time" />
  <h2>Time to celebrate!</h2>
</template>

<style></style>
