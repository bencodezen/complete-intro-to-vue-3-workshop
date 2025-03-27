<script setup>
import UserCard from "@/components/UserCard.vue";
import { useUsersStore } from "@/stores/usersStore";

const usersStore = useUsersStore();
</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>

    <ul>
      <UserCard
        v-for="user in usersStore.usersList"
        :user="user"
        variant="home"
        :key="`user-${user.id}`"
      />
    </ul>
  </main>
</template>

<style scoped>
ul {
  padding-top: 15px;
}

main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}
</style>
