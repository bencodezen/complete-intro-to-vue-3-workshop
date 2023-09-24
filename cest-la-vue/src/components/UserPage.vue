<script>
import { reactive } from "vue";
export default {
  async setup() {
    const state = reactive({ userList: [] });

    async function fetchUserData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
      return response;
    }

    state.userList = await fetchUserData();

    return { state, fetchUserData };
  },
  created() {
    console.log(this.state.userList);
  },
};
</script>

<template>
  <main>
    <h1>User</h1>
    <div
      class="userCard"
      v-for="(user, index) in state.userList"
      :key="user + index"
    >
      <h2>{{ user.username }}</h2>
      <div class="userContent">
        <div class="userHeader">
          <div>
            <p>{{ user.name }}</p>
            <p>{{ user.email }}</p>
          </div>
          <img
            class="userImage"
            src="../assets/vue-heart.png"
            alt="UserImage"
          />
          <br />
        </div>
        <h3>Adress</h3>
        <p>{{ user.address.street }}</p>
        <p>{{ user.address.suite }}</p>
        <p>{{ user.address.city }}</p>
        <p>{{ user.address.zipcode }}</p>
      </div>
    </div>
  </main>
</template>

<style>
.userCard {
  padding: 10%;
  width: 100%;
  margin: 5%;
  background-color: rgb(99, 211, 137);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.userHeader {
  display: flex;
  justify-content: space-around;
}

.userImage {
  width: 50px;
  align-self: flex-end;
}
</style>
