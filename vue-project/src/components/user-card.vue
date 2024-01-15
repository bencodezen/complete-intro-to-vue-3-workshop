<script>
import {useCount} from "../composables/countStore.js"
export default {
  setup() {
    const countStore = useCount();

    return {
      countStore
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
  <button :class="$style.button" @click="countStore.globalCount += 10">
    Global
  </button>
  <button :class="$style.button" @click="countStore.incrementLocalCount">
    Local
  </button>
  <hr />
  <p>Favorite Food: {{ user.food }}</p>
  <button :class="$style.button" @click="tellParentChangeName">
    Change Name
  </button>
</template>

<style module>
.button {
  border: 10px solid green;
}
</style>