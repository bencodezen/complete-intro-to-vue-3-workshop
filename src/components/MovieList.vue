<script>
import AverageRating from './AverageRating.vue'
import BaseButton from './base/BaseButton.vue'

export default {
  components: {
    AverageRating,
    BaseButton
  },

  props: {
    movieArr: {
      type: Array,
      required: true
    }
  },

  emits: ['add-fav']
}
</script>
<template>
  <div>
    <p v-if="movieArr.length <= 0">No Item in list</p>

    <div v-else>
      <AverageRating :movieArr="movieArr" />
      <ul>
        <li v-for="(movie, index) in movieArr" :key="`movie.title-${index}`">
          {{ movie.rating }} {{ movie.title }}
          <BaseButton @:click="$emit('add-fav', movie.title)">Favorite</BaseButton>
        </li>
      </ul>
    </div>
  </div>
</template>
