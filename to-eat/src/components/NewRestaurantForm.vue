<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  emits: ['add-new-restaurant', 'cancel-new-restaurant'],
  data: () => ({
    newRestaurant: {
      id: uuidv4(),
      name: '',
      address: '',
      website: '',
      status: 'Want to Try',
    },
  }),
}
</script>

<template>
  <form @submit.prevent>
    <div class="field">
      <div class="field">
        <label for="name" class="label">Name</label>
        <div class="control">
          <input
            :value="newRestaurant.name"
            @keyup.space="updateName"
            type="text"
            class="input is-large"
            placeholder="Beignet and the Jets"
            required
            ref="elNameInput"
          />
        </div>
      </div>
      <div class="field">
        <label for="website" class="label">Website</label>
        <div class="control">
          <input v-model="newRestaurant.website" type="text" class="input" placeholder="www.beignetandthejets.com" />
        </div>
      </div>
      <div class="field mb-5">
        <label for="status" class="label">Status</label>
        <div class="select">
          <select v-model="newRestaurant.status" id="status">
            <option v-for="status in restaurantStatusList" :value="status" :key="`option-${status}`">
              {{ status }}
            </option>
          </select>
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button @click="$emit('add-new-restaurant', newRestaurant)" class="button is-success">Create</button>
          <button @click="$emit('cancel-new-restaurant')" class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>
