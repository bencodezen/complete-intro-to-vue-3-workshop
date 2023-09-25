<script setup>
import { reactive } from "vue";
import { onMounted } from "vue";
import { greetingsCounter } from "../composables/greetingsCounterStore";
import UserCard from "../components/UserCard.vue";

defineProps({
  pageSubTitle: {
    type: String,
    default: "Welcome to the User Page!",
  },
});

const state = reactive({ userList: [] });

async function fetchUserData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json());
  return response;
}

onMounted(async () => {
  state.userList = await fetchUserData();
});
</script>

<template>
  <main>
    <h1>User</h1>
    <h3>{{ pageSubTitle }}</h3>
    <h4>People on this page have been greeted {{ greetingsCounter }} times</h4>
    <UserCard :userList="state.userList" />
  </main>
</template>
