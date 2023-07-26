<script>
import AddMovie from './components/AddMovie.vue'
import MovieList from './components/MovieList.vue'
import FavoriteMovieList from './components/FavoriteMovieList.vue'

export default {
  components: {
    AddMovie,
    MovieList,
    FavoriteMovieList
  },

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

  methods: {
    addToFavorites(payload) {
      this.favMovies = [...this.favMovies, payload]
    },
    removefromFav(payload) {
      this.favMovies = this.favMovies.filter((movie) => movie !== payload)
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
  <AddMovie :modelValue="newMovie" @add-movie="addNewMovie" />
  <MovieList :movieArr="movieArr" @add-fav="addToFavorites" />
  <FavoriteMovieList :favMovies="favMovies" @remove-fav="removefromFav" />
</template>
