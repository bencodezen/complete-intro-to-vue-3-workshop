<script>
import { useCount } from "../composables/countStore";

export default {
  setup() {
    const countStore = useCount();

    return {
      countStore,
    };
  },
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
  <h2>New Counter</h2>
  <p>Global Count: {{ countStore.globalCount }}</p>
  <p>Local Count: {{ countStore.localCount }}</p>
  <button @click="countStore.globalCount += 10">Global</button>
  <button @click="countStore.incrementLocalCount">Local</button>
  <hr />
  <p>Favorite Food: {{ user.food }}</p>
  <button @click="tellParentChangeName">Change Name</button>
</template>
