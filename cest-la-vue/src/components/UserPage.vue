<script>
import { reactive } from "vue";

export default {
  setup: async () => {
    const state = reactive({
      users: [],
    });

    async function fecthUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());

      return response;
    }

    state.users = await fecthUsers();

    return {
      state,
    };
  },
  data: () => ({}),
  methods: {},
  created() {},
};
</script>

<template>
  <main>
    <h1>Users</h1>
    <div>
      <div class="wrapper">
        <div v-for="user in state.users" :key="`user-${user.id}`" class="card">
          <p>{{ user.name }}</p>
          <p>{{ user.email }}</p>
          <p>{{ user.website }}</p>
          <p>{{ user.phone }}</p>
        </div>
      </div>
    </div>
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

.wrapper {
  display: grid;
  grid-gap: 10px;
}

.card {
  border: 1px solid gray;
  padding: 10px;
}
</style>
