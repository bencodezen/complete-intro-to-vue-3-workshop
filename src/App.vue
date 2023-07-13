<script>
export default {
  data() {
    return {
      newMovie: '',
      message: 'Welcome to my Vue Application',
      movieArr: [
        { id: ' 1', title: "It's okay to not be okay", rating: 3 },
        { id: ' 2', title: 'hate to love you', rating: 5 },
        { id: ' 3', title: 'Business Proposal5', rating: 5 },
        { id: ' 4', title: 'Celebrity', rating: 2 },
        { id: ' 5', title: 'Reflection of you', rating: 5 },
        { id: ' 6', title: 'The Glory', rating: 4 }
      ],
      favMovies: []
    }
  },
  computed: {
    averageRating() {
      const ratingsArr = []
      for (const movie of this.movieArr) {
        ratingsArr.push(movie.rating)
      }

      return (ratingsArr.reduce((a, b) => a + b, 0) / ratingsArr.length).toFixed(2)
    },
    averageRatingComment() {
      if (this.averageRating < 3) {
        return 'Total Rating too Low'
      } else {
        return 'Total Rating is high!'
      }
    }
  },
  methods: {
    addToFavorites(title) {
      this.favMovies = [...this.favMovies, title]
    },
    removefromFav(title) {
      this.favMovies = this.favMovies.filter((movie) => movie !== title)
    },
    addNewMovie() {
      this.movieArr = [
        ...this.movieArr,
        {
          id: (this.movieArr.length += 2),
          title: this.newMovie,
          rating: Math.floor(Math.random() * 5) + 1
        }
      ]
      this.newMovie = ''
    }
  },
  watch: {}
}
</script>

<template>
  <p>{{ message }}</p>
  <div>
    <h3>Add Movie</h3>
    <div>
      <p>{{ newMovie }}</p>
      <label for="addMovie"></label>
      <input v-model="newMovie" type="text" />
    </div>
    <button @:click="addNewMovie">Add</button>
  </div>

  <div>
    <p v-if="movieArr.length <= 0">No Item in list</p>

    <ul v-else>
      <div>
        <p>Average Ratings: {{ averageRating }}</p>
        <p>{{ averageRatingComment }}</p>
      </div>

      <li v-for="(movie, index) in movieArr" :key="`movie.title-${index}`">
        {{ movie.rating }} {{ movie.title }}
        <button @:click="addToFavorites(movie.title)">Favorite</button>
      </li>
    </ul>
  </div>

  <div>
    <h3>Favorite Movies</h3>
    <p v-if="favMovies.length <= 0">No Item in list</p>

    <ul v-else>
      <li v-for="(movie, index) in favMovies" :key="`movie-${index}`">
        {{ movie }}
        <button @:click="removefromFav(movie)">Remove</button>
      </li>
    </ul>
  </div>
</template>
