const AddThoughtModal = {

    data: function() {
        return {
            id: 'model-' + crypto.randomUUID(),
            bsModal: null,
            thoughtDraft: {
                start: '',
                end: '',
                text: '',
            },
        };
    },

    emits: ['submit-thought'],

    props: {},

    methods: {
        open: function() {
            if (this.bsModal) {
                this.bsModal.show();
            }
        },
        close: function() {
            if (this.bsModal) {
                this.bsModal.hide();
            }
        },
        resetForm: function() {
            this.thoughtDraft = {
                start: '',
                end: '',
                text: '',
            };
        },
        submitThought: function() {
            const payload = {
                start: this.thoughtDraft.start.trim(),
                end: this.thoughtDraft.end.trim(),
                text: this.thoughtDraft.text.trim(),
            };

            if (!payload.text) return;

            this.$emit('submit-thought', payload);
            this.resetForm();
            this.close();
        },
    },

    computed: {},

    mounted: function() {
        this.bsModal = bootstrap.Modal.getOrCreateInstance(this.$refs.theModal);
    },

    template: `
      <div class="modal fade" id="addThoughtModal" tabindex="-1" aria-labelledby="addThoughtModalLabel"
           aria-hidden="true" ref="theModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addThoughtModalLabel">Add Thought...</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                      aria-label="Close" @click="resetForm()"></button>
            </div>
            <form id="search-movie-form" @submit.prevent="submitThought()">
              <div class="modal-body">
                <div class="mb-3">
                  <label for="beginning-timestamp" class="form-label">Beginning Timestamp</label>
                  <input type="text" class="form-control" id="beginning-timestamp" placeholder="1:15:20"
                         v-model.trim="thoughtDraft.start">
                </div>
                <div class="mb-3">
                  <label for="ending-timestamp" class="form-label">Ending Timestamp</label>
                  <input type="text" class="form-control" id="ending-timestamp"
                         placeholder="1:17:45" v-model.trim="thoughtDraft.end">
                </div>
                <div class="mb-3">
                  <label for="thought" class="form-label">Thought...</label>
                  <input type="text" class="form-control" id="thought"
                         placeholder="Surely it's one of a kind..." v-model.trim="thoughtDraft.text" required>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="resetForm()">Cancel</button>
                <button type="submit" class="btn btn-primary" id="search-movie-submit">Submit Thought</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `,
};

export default AddThoughtModal;
