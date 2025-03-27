<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    variant: {
      type: String,
      validator(value) {
        return ["users", "home", ""].includes(value);
      },
      default: "",
    },
  },
};
</script>

<template>
  <li :class="['user-card', variant]">{{ user.name }}: {{ user.email }}</li>
</template>

<style>
.user-card.users {
  border: 2px solid var(--main-color-light);
  padding: 10px;
  margin-bottom: 3px;
  list-style-type: none;
}

.user-card.home {
  border: none;
  margin: 0;
  padding: 3px 10px 3px 0;
  list-style-type: none;
}
</style>
