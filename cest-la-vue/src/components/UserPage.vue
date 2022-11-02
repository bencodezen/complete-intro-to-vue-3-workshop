<script>
export default {
  data: () => ({
    userList: [],
  }),
  methods: {
    async fetchUsers() {
      this.userList = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
    },
  },
  created() {
    this.fetchUsers();
    console.log("hello");
  },
};
</script>

<template>
  <main>
    <h1>Users</h1>
    <ul>
      <li v-for="user in userList" :key="`user-${user.id}`">
        {{ user.name }}: {{ user.website }}
      </li>
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
