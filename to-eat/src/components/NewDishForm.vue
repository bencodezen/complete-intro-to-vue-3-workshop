<script>
import { defineComponent, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export default defineComponent({
  emits: ['add-new-dish', 'cancel-new-dish'],
  data: () => ({
    newDish: {
      id: uuidv4(),
      name: '',
      status: 'Want to Try',
      diet: '',
    },
  }),
})
</script>

<template>
  <form @submit.prevent>
    <div class="field">
      <div class="field">
        <label for="name" class="label">Name</label>
        <div class="control">
          <input
            v-model="newDish.name"
            type="text"
            class="input is-large"
            placeholder="Mystery Flavored Shrimp"
            required
            ref="elNameInput"
          />
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button @click="$emit('add-new-dish', newDish)" class="button is-success">Create</button>
          <button @click="$emit('cancel-new-dish')" class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>
