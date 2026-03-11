const SideNav = {

    data: function(){
        return {}
    },

    props: {
        currentPage: {
            type: String,
            required: true,
        },
    },

    methods: {
        isActive(file) {
            return this.currentPage === file;
        },
    },

    computed: {

    },

    template: `
      <div class="col-12 col-md-3 pb-3" id="sidebar">
        <div class="container">
          <ul class="nav flex-column mt-3">
            <li class="nav-item">
              <a class="nav-link"
                 :class="{ active: isActive('index.html') }"
                 :href="isActive('index.html') ? '#' : './index.html'">
                <i class="fa-solid fa-clapperboard"></i> My Movies </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                 :class="{ active: isActive('towatch.html') }"
                 :href="isActive('towatch.html') ? '#' : './towatch.html'">
                <i class="fa-solid fa-ticket"></i> To Watch </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                 :class="{ active: isActive('achievements.html') }"
                 :href="isActive('achievements.html') ? '#' : './achievements.html'">
                <i class="fa-solid fa-trophy"></i> Badges </a>
            </li>
          </ul>
        </div>
      </div>
    `,
};

export default SideNav;
