<script>
import AverageRating from './AverageRating.vue'

export default {
  components: {
    AverageRating
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
          <button @:click="$emit('add-fav', movie.title)">Favorite</button>
        </li>
      </ul>
    </div>
  </div>
</template>
