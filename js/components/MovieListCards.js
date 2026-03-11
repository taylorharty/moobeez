const MovieListCards = {

    data: function(){
        return {
            id: 'model-' + crypto.randomUUID(),
        }
    },

    props: {
        movies: {
            type: Array,
            default: () => [],
        },
    },

    methods: {

    },

    computed: {

    },

    template: `
      <!-- Movie List Cards -->
      <div class="row g-3">

        <div class="col-12 col-md-3" id="addMovie">
          <div class="card h-100 my-2">
            <a href="#" data-bs-toggle="modal" data-bs-target="#searchMovieModal">
              <img src="../../images/AddMovieTo.jpg" class="card-img-top" alt="Add Movie Button">
              <div class="card-body">
                <p class="card-text">Add Movie</p>
              </div>
            </a>
          </div>
        </div>

        <div class="col-12 col-md-3" v-for="movie in movies" :key="movie.id">
          <div class="card h-100 my-2" v-if="movie.watched">
            <a :href="'movie.html?id=' + movie.id">
              <img :src="movie.poster" class="card-img-top" :alt="movie.name + ' Poster'">
              <div class="card-body">
                <p class="card-text">{{ movie.name }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    `,
};

export default MovieListCards;
