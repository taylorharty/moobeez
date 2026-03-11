const AddWatchedMovieModal = {

    data: function(){
        return {
            id: 'model-' + crypto.randomUUID(),
            bsModal: null,
            newMovie: {
                id: Math.ceil(Math.random()*1000000).toString(),
                watched: true,
                name: '',
                director: '',
                poster: 'images/Placeholder.jpg',
                year: 2000,
                genres: [],
                description: '',
                mainThought: '',
                comments: [],
            },
        }
    },

    props: {

    },

    emits: ['add-watched-movie'],

    methods: {
        open() {
            this.bsModal.show();
        },
        close() {
            this.bsModal.hide();
        },
        addWatchedMovie() {
            this.$emit('add-watched-movie', {
                ...this.newMovie,
                name: (this.newMovie.name || '').trim(),
                director: (this.newMovie.director || '').trim(),
                description: (this.newMovie.description || '').trim(),
                mainThought: (this.newMovie.mainThought || '').trim(),
            });

            //clear the form
            this.newMovie = {
                id: Math.ceil(Math.random()*1000000).toString(),
                watched: true,
                name: '',
                director: '',
                poster: 'images/Placeholder.jpg',
                year: 2000,
                genres: [],
                description: '',
                mainThought: '',
                comments: [],
            }

            this.close();
        },
    },

    computed: {

    },

    mounted() {
        this.bsModal = bootstrap.Modal.getOrCreateInstance(this.$refs.theModal);
    },

    template: `
      <div class="modal fade" id="searchMovieModal" tabindex="-1" aria-labelledby="searchMovieModalLabel"
           aria-hidden="true" ref="theModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="searchMovieModalLabel">Add Movie</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="search-movie-form" @submit.prevent="addWatchedMovie()">
              <div class="modal-body">
                <div class="mb-3">
                  <label for="movie-title" class="form-label">Title</label>
                  <input type="text" class="form-control" id="movie-title" placeholder="Enter movie title"
                         v-model="newMovie.name">
                </div>
                <div class="mb-3">
                  <label for="movie-year" class="form-label">Year</label>
                  <input type="number" class="form-control" id="movie-year" placeholder="Enter release year"
                         v-model="newMovie.year">
                </div>
                <div class="mb-3">
                  <label for="movie-director" class="form-label">Director</label>
                  <input type="text" class="form-control" id="movie-director"
                         placeholder="Enter director name" v-model="newMovie.director">
                </div>
                <div class="mb-3">
                  <label for="movie-director" class="form-label">Genres</label>
                  <input type="text" class="form-control" id="movie-director"
                         placeholder="E.g., Action, Comedy, Horror..." v-model="newMovie.genres">
                </div>
                <div class="mb-3">
                  <label for="movie-director" class="form-label">Description</label>
                  <textarea type="text" class="form-control" id="movie-director" rows="3"
                            placeholder="Enter description..." v-model="newMovie.description"></textarea>
                </div>
                <div class="mb-3">
                  <label for="movie-director" class="form-label">Final Thought</label>
                  <textarea type="text" class="form-control" id="movie-director" rows="3"
                            placeholder="Enter final thoughts..." v-model="newMovie.mainThought"></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary" id="search-movie-submit">Add Movie</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    `,
};

export default AddWatchedMovieModal;
