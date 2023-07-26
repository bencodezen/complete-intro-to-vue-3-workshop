<script>
export default {
  props: {
    movieArr: {
      type: Array,
      required: true
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
  }
}
</script>

<template>
  <div>
    <p>Average Ratings: {{ averageRating }}</p>
    <p>{{ averageRatingComment }}</p>
  </div>
</template>
