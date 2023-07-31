<script>
import BaseButton from './base/BaseButton.vue'
export default {
  components: {
    BaseButton
  },
  props: ['modelValue'],
  emits: ['add-movie']
}
</script>

<template>
  <div>
    <h3>Add Movie</h3>
    <div>
      <p>{{ newMovie }}</p>
      <label for="addMovie"></label>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="text"
      />
    </div>
    <BaseButton @:click="$emit('add-movie')" />
  </div>
</template>
