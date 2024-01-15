<script setup>
import UserCard from "@/components/UserCard.vue";
import {userList} from "@/composables/useUserStore.js";
// https://jsonplaceholder.typicode.com/users

defineProps({
  title: {
    type: String,
    default: 'Users'
  }
});

defineEmits(["update-user-list"]);

async function fetchUsers() {
  const response = fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json());
  return response;
}

userList.value = await fetchUsers();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <ul>
      <UserCard v-for="user in userList"
                :user="user"
                :key="`user-${user.id}`"/>
    </ul>
  </main>
</template>

<style>
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

</style>
