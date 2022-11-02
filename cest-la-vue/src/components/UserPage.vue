<script>
import UserCard from "./UserCard.vue";
import { reactive } from "vue";

export default {
  components: {
    UserCard,
  },
  async setup() {
    const state = reactive({
      userList: [],
    });

    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());

      return response;
    }

    state.userList = await fetchUsers();

    return {
      state,
      fetchUsers,
    };
  },
};
</script>

<template>
  <main>
    <h1>Users</h1>
    <ul>
      <UserCard
        v-for="user in state.userList"
        :user="user"
        :key="`user-${user.id}`"
      />
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

label {
  margin-bottom: 5px;
}

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>
