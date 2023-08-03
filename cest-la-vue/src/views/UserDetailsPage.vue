<script setup>
// import { userList } from "@/composables/useUserStore";
import { useRoute } from "vue-router";

const router = useRoute();

console.log(router);

defineProps({
  title: {
    type: String,
    default: "User Name",
  },
});

// async function fecthUser(id) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${id}`
//   ).then((response) => response.json());

//   return response;
// }

// userList.value = await fecthUsers();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <p>This is {{ router.params.name }}</p>
  </main>
</template>

<style module></style>
