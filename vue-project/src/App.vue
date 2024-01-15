<script setup>
import BaseCounter from "@/components/base-counter.vue";
import UserCard from "@/components/user-card.vue";
import {ref} from "vue";

const colorPreference = ref("white")
</script>

<template>
  <div>
    <h2>{{ colorPreference }}</h2>
    <input type="color" v-model="colorPreference">
    <BaseCounter/>
    <UserCard :user="{name: 'Ced', food: 'Tacos'}"/>
  </div>
</template>

<style>
html {
  background: papayawhip;
}

div {
  background-color: v-bind(colorPreference);
}
button {
  border: 10px solid red;
}
</style>
