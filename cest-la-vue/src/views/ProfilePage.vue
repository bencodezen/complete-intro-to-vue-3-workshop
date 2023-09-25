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
    <div class="tabs">
      <br />
      <router-link to="/user/:id/likes">My likes</router-link>
      <br />
      <router-link to="/user/:id/posts">My Posts</router-link>
    </div>
    <div class="innerRoute">
      <router-view />
    </div>
    <br />
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

.tabs {
  display: flex;
  width: 50%;
  justify-content: space-between;
  padding: 20px;
}

.innerRoute {
  border: 5px solid brown;
  padding: 50px;
  border-radius: 25px;
}
</style>
