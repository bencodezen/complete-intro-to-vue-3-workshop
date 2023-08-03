<script setup>
import { userList } from "../composables/useUserStore";
import { computed } from "vue";

const shortUserList = computed(() => {
  return userList.value.slice(0, 5);
});
</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>
    <hr />

    <h2>Users</h2>
    <div v-for="user in shortUserList" :key="`user-${user.id}`">
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.website }}</p>
      <p>{{ user.phone }}</p>
      <hr />
    </div>
  </main>
</template>
