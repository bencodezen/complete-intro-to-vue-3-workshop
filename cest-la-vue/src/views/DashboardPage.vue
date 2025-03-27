<script setup>
import { RouterView, useRoute, useRouter } from "vue-router";
import { useUsersStore } from "@/stores/usersStore";

const route = useRoute();
const router = useRouter();

const id = parseInt(route.params.id.replace(/\D/g, ""));
const usersStore = useUsersStore();
const user = usersStore.getUserById(id);

const onPostsClicked = () => {
  router.push(`/dashboard/:${id}/posts`);
};
const onPhotosClicked = () => {
  router.push(`/dashboard/:${id}/photos`);
};
</script>

<template>
  <main>
    <h1>Dashboard Page</h1>
  </main>
  <ul>
    <li>Id: {{ user.id }}</li>
    <li>Name: {{ user.name }}</li>
    <li>Uusername: {{ user.username }}</li>
    <li>Email: {{ user.email }}</li>
    <li>Phone: {{ user.phone }}</li>
    <li>Website: {{ user.website }}</li>
  </ul>

  <button @click="onPostsClicked">Posts</button>
  <button @click="onPhotosClicked">Photos</button>
  <router-view />
</template>

<style scoped>
ul {
  margin-top: 15px;
  margin-bottom: 15px;
  list-style-type: none;
}
button {
  margin-bottom: 15px;
  margin-right: 15px;
}
</style>
