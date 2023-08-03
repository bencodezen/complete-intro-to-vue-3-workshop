<script setup>
import { userList } from "../composables/useUserStore";

defineProps({
  title: {
    type: String,
    default: "Users",
  },
});

async function fecthUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((response) => response.json());

  return response;
}

userList.value = await fecthUsers();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <div>
      <div :class="$style.wrapper">
        <div
          v-for="user in userList"
          :key="`user-${user.id}`"
          :class="$style.card"
        >
          <p>{{ user.name }}</p>
          <p>{{ user.email }}</p>
          <p>{{ user.website }}</p>
          <p>{{ user.phone }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style module>
.wrapper {
  display: grid;
  grid-gap: 10px;
}

.card {
  border: 1px solid gray;
  padding: 10px;
  background-color: #fff;
}
</style>
