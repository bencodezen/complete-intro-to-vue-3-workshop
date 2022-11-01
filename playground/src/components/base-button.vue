<script>
export default {
  props: {
    left: Boolean,
    default: false,
  },
};
</script>

<template>
  <button>
    <slot v-if="left">Icon Left - Cancel</slot>
    <slot v-else>Submit</slot>
  </button>
</template>

<style></style>
