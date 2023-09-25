<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

defineProps({
  userList: {
    type: Array,
  },
});

const navigateToProfile = (user) => {
  router.push({
    name: "UserProfile",
    params: { id: user.id, userInfo: user },
  });
};
</script>

<template>
  <div class="userCard" v-for="(user, index) in userList" :key="user + index">
    <h2>{{ user.username }}</h2>

    <div class="userContent" @click="navigateToProfile(user)">
      <div class="userHeader">
        <div>
          <p>{{ user.name }}</p>
          <p>{{ user.email }}</p>
          <router-link :to="{ name: 'UserProfile', params: { id: user.id } }"
            >Go to {{ user.name }}'s Profile</router-link
          >
          <img
            class="userImage"
            src="../assets/vue-heart.png"
            alt="UserImage"
          />
          <br />
        </div>
      </div>

      <h3>Adress</h3>
      <p>{{ user.address.street }}</p>
      <p>{{ user.address.suite }}</p>
      <p>{{ user.address.city }}</p>
      <p>{{ user.address.zipcode }}</p>
    </div>
  </div>
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
