<script setup>
import { ref, onMounted } from "vue";

// Define prop for receiving id
const props = defineProps(["id"]);
const userInfo = ref({});

// Fetch user info when component is mounted
onMounted(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${props.id}`
  );
  userInfo.value = await response.json();
});
</script>

<template>
  <div class="profileWrapper">
    <h2>Welcome to the Profile of</h2>
    <h1>{{ userInfo.name }}</h1>
    <h2>{{ userInfo.username }}</h2>
    <p>{{ userInfo.email }}</p>
    <p>{{ userInfo.phone }}</p>
  </div>
</template>

<style>
.profileWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;
  padding: 10%;
}
</style>
