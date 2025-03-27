<script setup>
import { defineProps, defineEmits } from "vue";
import UserCard from "@/components/UserCard.vue";
import { useUsersStore } from "@/stores/usersStore";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  title: {
    type: String,
    default: "Usersss",
  },
});

// eslint-disable-next-line no-unused-vars
const emits = defineEmits(["update-user-list"]);

const usersStore = useUsersStore();
usersStore.fetchUsersStore();
</script>
<template>
  <main>
    <h1>{{ title }}</h1>
    <ul>
      <UserCard
        v-for="user in usersStore.usersList"
        :user="user"
        variant="users"
        :key="`user-${user.id}`"
      />
    </ul>
  </main>
</template>

<style scoped>
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

button {
  background-color: #3eb985;
  cursor: pointer;
}
</style>
