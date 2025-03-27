<script setup>
import { useRoute } from "vue-router";
import { useUsersPhotosStore } from "@/stores/usersPhotosStore";

const route = useRoute();
const id = parseInt(route.params.id.replace(/\D/g, ""));

const usersPhotosStore = useUsersPhotosStore();
await usersPhotosStore.fetchUsersPhotos();

const userPhotos = usersPhotosStore.getUserPhotosById(id)
</script>

<template>
  <h3>Photos</h3>
  <pre>{{ userPhotos }}</pre>
</template>

<style scoped>
h3 {
  margin-bottom: 15px;
}
</style>
