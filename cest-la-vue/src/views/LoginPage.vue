<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const emailInput = ref("");

const login = () => {
  if (emailInput.value.includes("@") && emailInput.value.length > 3) {
    router.push("/users");
  } else {
    console.log(emailInput.value);
  }
};
</script>

<template>
  <main>
    <h1>Login</h1>
    <label for="email">Email</label>
    <input type="email" v-model="emailInput" />
    <button @click="login">Continue with email</button>
  </main>
</template>
