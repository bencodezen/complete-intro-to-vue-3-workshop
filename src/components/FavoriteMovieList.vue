<script>
export default {
  props: {
    favMovies: {
      type: Array,
      required: true
    }
  },
  emits: ['remove-fav']
}
</script>
<template>
  <div>
    <h3>Favorite Movies</h3>
    <p v-if="favMovies.length <= 0">No Item in list</p>

    <ul v-else>
      <li v-for="(movie, index) in favMovies" :key="`movie-${index}`">
        {{ movie }}
        <button @:click="$emit('remove-fav', movie)">Remove</button>
      </li>
    </ul>
  </div>
</template>
