<script>
export default {
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
    <button @:click="$emit('add-movie')">Add</button>
  </div>
</template>
