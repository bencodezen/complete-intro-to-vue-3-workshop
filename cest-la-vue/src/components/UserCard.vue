<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <li class="user-card">
    <router-link :to="`/users/${user.name}`"> {{ user.name }}: {{ user.website }} </router-link>
  </li>
</template>

<style scoped>
.user-card {
  border: 2px solid #222;
  padding: 10px;
}
</style>
