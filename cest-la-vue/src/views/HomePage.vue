<script setup>
// import { userList } from "@/composables/useUserStore";
import { useUserStore } from "@/stores/UserStore";

const userStore = useUserStore();
</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>

    <div v-if="userStore.shortUserList.length > 0">
      <hr />

      <h2>Users</h2>
      <div v-for="user in userStore.shortUserList" :key="`user-${user.id}`">
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.website }}</p>
        <p>{{ user.phone }}</p>
        <hr />
      </div>
    </div>
  </main>
</template>
