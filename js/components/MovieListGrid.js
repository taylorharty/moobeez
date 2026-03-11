const MovieListGrid = {

    data: function () {
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

    emits: ['remove-movie', 'mark-watched'],

    methods: {
        removeMovie(movieId) {
            this.$emit('remove-movie', movieId);
        },
        markMovieAsWatched(movieId) {
            this.$emit('mark-watched', movieId);
        },
    },

    computed: {},

    template: `
      <div class="table-responsive">
        <table class="table table-dark table-hover align-middle mb-0">
          <thead>
          <tr>
            <th scope="col">Movie Title</th>
            <th scope="col">Movie Year</th>
            <th scope="col">Movie Director</th>
            <th scope="col">Movie Genre</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="movie in movies" :key="movie.id">
            <td>
              <button type="button" class="btn btn-link link-danger p-0 me-2 align-baseline"
                      @click="removeMovie(movie.id)" :aria-label="'Remove ' + movie.name">
                <i class="fa-solid fa-x"></i>
              </button>{{ movie.name }}
            </td>
            <td>{{ movie.year }}</td>
            <td>{{ movie.director }}</td>
            <td>{{ Array.isArray(movie.genres) ? movie.genres.join('/') : movie.genres }}</td>
            <td>
              <button class="btn btn-primary" @click="markMovieAsWatched(movie.id)">
                Mark as Watched
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="5" class="text-center" v-if="movies.length === 0">
              No movies in your watch list. Add some movies to get started!
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button class="btn btn-primary" id="add-movie-btn" data-bs-toggle="modal"
                      data-bs-target="#searchMovieModal">
                <i class="fa-solid fa-plus"></i> Add Movie
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    `,
};

export default MovieListGrid;
