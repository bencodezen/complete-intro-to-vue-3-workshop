<script setup>
import { computed } from "vue";
import { useUserStore } from "../stores/UserStore";

const userStore = useUserStore();
</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>
    <hr />
    <ul>
      <li v-for="user in userStore.shortUserList">
        {{ user.name }}
      </li>
    </ul>
  </main>
</template>

<style></style>
