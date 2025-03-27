<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUsersStore } from "@/stores/usersStore";

defineProps({
  title: {
    type: String,
    default: "Login",
  },
});

const router = useRouter();
const colorPicked = ref("#31475E");
const email = ref("");
const emailWarning = ref(false);

const login = () => {
  const usersStore = useUsersStore();
  const user = usersStore.getUserByEmail(email.value);
  if (user && user.id) {
    router.push(`/dashboard/:${user.id}`);
    emailWarning.value = false;
  } else {
    emailWarning.value = true;
  }
};
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <label for="email">Email</label>
    <input type="email" v-model="email" />
    <input :class="$style.loginInputColor" type="color" v-model="colorPicked" />
    <button @click="login">Continue with email</button>
    <h3 class="email-warning-display" v-show="emailWarning">Incorrect email</h3>
  </main>
</template>

<style module>
.loginInputColor {
  width: 100%;
  margin-bottom: 20px;
  height: 32.5px;
  background-color: #fff;
}
</style>

<style scoped>
.email-warning-display {
  color: coral;
  display: block;
  margin: 10px auto;
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

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 20px;
}

button {
  background-color: v-bind(colorPicked);
  cursor: pointer;
}
</style>
