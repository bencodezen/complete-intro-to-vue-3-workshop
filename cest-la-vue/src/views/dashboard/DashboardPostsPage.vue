<script setup>
import { useRoute } from "vue-router";
import { useUsersPostsStore } from "@/stores/usersPostsStore";

const route = useRoute();
const id = parseInt(route.params.id.replace(/\D/g, ""));

const usersPostsStore = useUsersPostsStore();
await usersPostsStore.fetchUsersPosts();

const userPosts = usersPostsStore.getUserPostsById(id);
</script>

<template>
  <h3>Posts</h3>
  <pre>{{ userPosts }}</pre>
</template>

<style scoped>
h3 {
  margin-bottom: 15px;
}
</style>
