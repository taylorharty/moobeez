import {createApp} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import SideNav from "./components/SideNav.js";
import AddThoughtModal from "./components/AddThoughtModal.js";
import AddWatchedMovieModal from "./components/AddWatchedMovieModal.js";
import MovieListCards from "./components/MovieListCards.js";
import MovieListGrid from "./components/MovieListGrid.js";

const app = createApp({
    components: {SideNav, AddThoughtModal, AddWatchedMovieModal, MovieListCards, MovieListGrid},
    // data: all the data for the app
    data: function() {
        return {
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
            newAchievement: {
                name: '',
                description: '',
                image: 'images/filmreel.png',
                earned: false,
            },
            newComment: { start: '', end: '', text: '' },
            watchedDraft: {
                id: null,
                name: "",
                year: null,
                director: "",
                description: "",
                mainThought: ""
            },
            editDraft: {
                id: null,
                name: "",
                director: "",
                poster: "",
                year: null,
                genresText: "",
                description: "",
                mainThought: "",
            },
            deleteTargetId: null,
            selectedAchievement: null,
            movieList: [
                {
                    id: 'Paris',
                    watched: true,
                    name: 'Paris is Burning',
                    director: 'Jennie Livingston',
                    poster: "images/Paris.jpg",
                    year: 1990,
                    genres: ['Documentary'],
                    description: "An American documentary film directed by " +
                        "Jennie Livingston. Filmed in the mid-to-late 1980s, " +
                        "it chronicles the ball culture of New York City and the " +
                        "African-American, Latino, gay and transgender communities " +
                        "involved in it.",
                    mainThought: 'An American documentary film directed by Jennie Livingston. ' +
                        'Filmed in the mid-to-late 1980s, it chronicles the ball culture ' +
                        'of New York City and the African-American, Latino, gay and transgender ' +
                        'communities involved in it.',
                    comments: [
                        { start: "00:08:40", end: "00:10:15", text: "Sets up the vocabulary clearly." },
                        { start: "01:02:14", end: "01:05:30", text: "This segment carries the emotional core." },
                    ]
                },
                {
                    id: 'Dinner',
                    watched: true,
                    name: 'Dinner in America',
                    director: 'Adam Rehmeier',
                    poster: "images/Dinner.jpg",
                    year: 2020,
                    genres: ['Comedy', 'Drama', 'Romance'],
                    description: "An on-the-lam punk rocker and a young woman obsessed " +
                        "with his band unexpectedly fall in love and go on an epic " +
                        "journey together through America's decaying Midwestern suburbs.",
                    mainThought: "Chaotic, funny, and unexpectedly heartfelt.",
                    comments: [
                        { start: "00:12:05", end: "00:13:22", text: "The tone snaps into place here." },
                        { start: "00:47:10", end: "00:49:00", text: "Great use of awkward silence." },
                    ]
                },
                {
                    id: 'Blue',
                    watched: true,
                    name: 'Blue is the Warmest Colour',
                    director: 'Abdellatif Kechiche',
                    poster: "images/Blue.jpg",
                    year: 2013,
                    genres: ['Drama', 'Romance'],
                    description: "Adèle's life is changed when she meets Emma, " +
                        "a young woman with blue hair, who will allow her to " +
                        "discover desire and to assert herself as a woman and " +
                        "as an adult. In front of others, Adèle grows, seeks " +
                        "herself, loses herself, and ultimately finds herself " +
                        "through love and loss.",
                    mainThought: "Intimate and raw, but emotionally heavy.",
                    comments: [
                        { start: "00:21:03", end: "00:22:40", text: "The framing says more than the dialogue." },
                        { start: "01:38:55", end: "01:41:10", text: "Notice the shift in pacing and color." },
                    ]
                },
                {
                    id: 'TVGlow',
                    watched: true,
                    name: 'I Saw the TV Glow',
                    director: 'Jane Schoenbrun',
                    poster: "images/TVGlow.jpg",
                    year: 2024,
                    genres: ['Horror', 'Thriller'],
                    description: "A teenager just trying to make it through life in " +
                        "the suburbs is introduced by a classmate to a mysterious " +
                        "late-night TV show.",
                    mainThought: "If you do not transition, you might as well be dead already.",
                    comments: [
                        { start: "00:05:12", end: "00:07:01", text: "The sound design establishes dread early." },
                        { start: "01:15:44", end: "01:18:09", text: "This scene recontextualizes the earlier hints." },
                    ]
                },
                {
                    id: 'Superbloom',
                    watched: true,
                    name: 'Superbloom',
                    director: 'Alexandra Swarens',
                    poster: "images/Superbloom.jpg",
                    year: 2025,
                    genres: ['Drama'],
                    description: "Two women-one returning home to face her past, " +
                        "the other searching for direction-embark on a road " +
                        "trip that becomes a journey of healing, connection, " +
                        "and self-discovery.",
                    mainThought: "A road trip driving through the beauty of feminine longing and love.",
                    comments: [
                        { start: "00:33:20", end: "00:35:05", text: "Small gesture, big character reveal." },
                        { start: "01:22:11", end: "01:24:30", text: "Earned catharsis; restrained but effective." },
                    ]
                },
                {
                    id: 'TBlockers',
                    watched: false,
                    name: 'T Blockers',
                    director: 'Alice Maio Mackay',
                    poster: "",
                    year: 2023,
                    genres: ['Horror'],
                    description: "",
                    mainThought: "",
                    comments: [],
                },
                {
                    id: 'Elephant',
                    watched: false,
                    name: 'The Elephant Man',
                    director: 'David Lynch',
                    poster: "",
                    year: 1980,
                    genres: ['Biography', 'Drama'],
                    description: "",
                    mainThought: "",
                    comments: [],
                },
                {
                    id: 'Femme',
                    watched: false,
                    name: 'Femme',
                    director: 'Sam H. Freeman',
                    poster: "",
                    year: 2023,
                    genres: ['Drama', 'Thriller'],
                    description: "",
                    mainThought: "",
                    comments: [],
                },
            ],
            achievementList: [
                {
                    name: 'Marathon Woman',
                    description: 'Watch 4 movies in one day',
                    image: 'images/filmreel.png',
                    earned: true,
                },
                {
                    name: 'Freak',
                    description: 'Watch some John Waters, ya freak.',
                    image: 'images/filmreel.png',
                    earned: true,
                },
                {
                    name: 'Showstopper',
                    description: 'Pause a single movie 10 times.',
                    image: 'images/filmreel.png',
                    earned: true,
                },
                {
                    name: 'Pass the Popcorn',
                    description: 'Watch a movie you found out about through the grape vine.',
                    image: 'images/filmreel.png',
                    earned: false,
                },
            ],
        };
    },

    // methods: usually "events" triggered by v-on:
    methods: {
        getMovieFromUrl() {
            const params = new URLSearchParams(window.location.search);
            const movieId = params.get('id');
            return this.movieList.find(movie => movie.id === movieId) || null;
        },
        parseGenres(genresText) {
            if (!genresText) return [];
            return genresText
                .split(',')
                .map(genre => genre.trim())
                .filter(Boolean);
        },
        openEditMovieModal() {
            if (!this.currentMovie) return;

            this.editDraft = {
                id: this.currentMovie.id,
                name: this.currentMovie.name,
                director: this.currentMovie.director,
                poster: this.currentMovie.poster,
                year: this.currentMovie.year,
                genresText: Array.isArray(this.currentMovie.genres)
                    ? this.currentMovie.genres.join(', ')
                    : (this.currentMovie.genres || ''),
                description: this.currentMovie.description || '',
                mainThought: this.currentMovie.mainThought || '',
            };

            const el = document.getElementById('editMovieModal');
            if (!el) return;
            const modal = bootstrap.Modal.getOrCreateInstance(el);
            modal.show();
        },
        saveCurrentMovieEdits() {
            const movie = this.movieList.find(m => m.id === this.editDraft.id);
            if (!movie) return;

            movie.name = this.editDraft.name.trim();
            movie.director = this.editDraft.director.trim();
            movie.poster = this.editDraft.poster.trim();
            movie.year = Number(this.editDraft.year) || movie.year;
            movie.genres = this.parseGenres(this.editDraft.genresText);
            movie.description = this.editDraft.description.trim();
            movie.mainThought = this.editDraft.mainThought.trim();

            const modal = bootstrap.Modal.getInstance(document.getElementById('editMovieModal'));
            if (modal) modal.hide();
        },
        openDeleteMovieModal() {
            if (!this.currentMovie) return;
            this.deleteTargetId = this.currentMovie.id;

            const el = document.getElementById('deleteMovieModal');
            if (!el) return;
            const modal = bootstrap.Modal.getOrCreateInstance(el);
            modal.show();
        },
        confirmDeleteCurrentMovie() {
            if (!this.deleteTargetId) return;

            this.removeMovie(this.deleteTargetId);
            this.deleteTargetId = null;

            const modal = bootstrap.Modal.getInstance(document.getElementById('deleteMovieModal'));
            if (modal) modal.hide();

            window.location.assign('index.html');
        },
        addThoughtToCurrentMovie(comment) {
            if (!this.currentMovie || !comment || !comment.text) return;

            if (!Array.isArray(this.currentMovie.comments)) {
                this.currentMovie.comments = [];
            }

            this.currentMovie.comments.push({
                start: comment.start || '',
                end: comment.end || '',
                text: comment.text,
            });
        },
        addWatchedMovie() {
            this.newMovie.id = Math.ceil(Math.random()*1000000).toString();
            //add item to list
            this.movieList.push({...this.newMovie});

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
        },
        addMovieToList() {
            this.newMovie.watched = false;
            //add item to list
            this.movieList.push({...this.newMovie});

            //clear the form
            this.newMovie = {
                id: Math.ceil(Math.random()*1000000).toString(),
                watched: false,
                name: '',
                director: '',
                poster: 'images/Placeholder.jpg',
                year: 2000,
                genres: [],
                description: '',
                mainThought: '',
                comments: [],
            }
        },
        removeMovie(movieId) {
            const index = this.movieList.findIndex(movie => movie.id === movieId);
            if (index !== -1) {
                this.movieList.splice(index, 1);
            }
        },
        addAchievement() {
            //add item to list
            this.achievementList.push({...this.newAchievement});

            //clear the form
            this.newAchievement = {
                name: '',
                description: '',
                image: 'images/filmreel.png',
                earned: false,
            }
            const modal = bootstrap.Modal.getInstance(document.getElementById('makeBadgeModal'));
            if (modal) modal.hide();
        },
        deleteAchievement(achievementName) {
            const index = this.achievementList.findIndex(a => a.name === achievementName);
            if (index !== -1) {
                this.achievementList.splice(index, 1);
            }
        },
        earnAchievement(achievementName) {
            const achievement = this.achievementList.find(a => a.name === achievementName);
            if (achievement) {
                achievement.earned = true;
            }
        },
        markAsWatched(movieId) {
            const movie = this.movieList.find(m => m.id === movieId);
            if (!movie) return;

            this.watchedDraft = {
                id: movie.id,
                name: movie.name,
                year: movie.year,
                director: movie.director,
                description: movie.description || "",
                mainThought: movie.mainThought || ""
            };

            const el = document.getElementById("watchedMovieModal");
            const modal = bootstrap.Modal.getOrCreateInstance(el);
            modal.show();
        },
        saveWatchedDetails() {
            const movie = this.movieList.find(m => m.id === this.watchedDraft.id);
            if (!movie) return;

            movie.description = this.watchedDraft.description;
            movie.mainThought = this.watchedDraft.mainThought;
            movie.watched = true;

            const modal = bootstrap.Modal.getInstance(document.getElementById("watchedMovieModal"));
            if (modal) modal.hide();

            this.watchedDraft = { id: null, name: "", year: null, director: "", description: "", mainThought: "" };
        },

    },

    // computed: values that are updated and cached if dependencies change
    computed: {
        currentMovie() {
            return this.getMovieFromUrl();
        },
        watchedMovies() {
            return this.movieList.filter(m => m.watched);
        },
        unwatchedMovies() {
            return this.movieList.filter(m => !m.watched);
        },
        earnedAchievements() {
            return this.achievementList.filter(m => m.earned);
        },
        unearnedAchievements() {
            return this.achievementList.filter(m => !m.earned);
        },
    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {
        // get from local storage
        if (localStorage.getItem('movieList')) {
            this.movieList = JSON.parse(localStorage.getItem('movieList'));
        }
        if (localStorage.getItem('achievementList')) {
            this.achievementList = JSON.parse(localStorage.getItem('achievementList'));
        }
        // else use the data predefined in data()

    },

    // watch:   calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        movieList: {
            handler: function (val) {
                //store in local storage
                localStorage.setItem('movieList', JSON.stringify(val));
            },
            deep: true,
        },
        achievementList: {
            handler: function (val) {
                //store in local storage
                localStorage.setItem('achievementList', JSON.stringify(val));
            },
            deep: true,
        }

    },
});

export default app;
