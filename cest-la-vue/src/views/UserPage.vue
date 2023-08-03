<script setup>
// import { userList } from "@/composables/useUserStore";
import { useUserStore } from "@/stores/UserStore";

defineProps({
  title: {
    type: String,
    default: "Users",
  },
});

const userStore = useUserStore();

userStore.fecthUsers();
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <div>
      <div :class="$style.wrapper">
        <div
          v-for="user in userStore.users"
          :key="`user-${user.id}`"
          :class="$style.card"
        >
          <router-link :to="`/users/${user.name}`">
            <p>{{ user.name }}</p>
            <p>{{ user.email }}</p>
            <p>{{ user.website }}</p>
            <p>{{ user.phone }}</p>
          </router-link>
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
