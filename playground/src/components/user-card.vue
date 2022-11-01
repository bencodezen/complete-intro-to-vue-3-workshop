<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  emits: ["change-name"],
  methods: {
    tellParentChangeName() {
      this.$emit("change-name");
    },
  },
};
</script>

<template>
  <h1>User: {{ user.name }}</h1>
  <p>Favorite Food: {{ user.food }}</p>
  <button @click="tellParentChangeName">Change Name</button>
</template>
