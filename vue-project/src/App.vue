<script setup>
import BaseCounter from '@/components/base-counter.vue'
import UserCard from '@/components/user-card.vue'
import { ref, watch } from 'vue'
import { useCount } from './composables/countStore'
import { useRouter } from 'vue-router'

const colorPreference = ref('white')

const countStore = useCount()
const router = useRouter()

watch(countStore.globalCount, (val) => {
  console.log(val)
  if (val > 1200) {
    router.push('/pokedex')
  }
})
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/pokedex">Pokedex</router-link>
    </nav>
    <router-view />
    <h2>{{ colorPreference }}</h2>
    <input type="color" v-model="colorPreference" />
    <BaseCounter />
    <UserCard :user="{ name: 'Ced', food: 'Tacos' }" />
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
