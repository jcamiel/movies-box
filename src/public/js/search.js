/* eslint-disable no-undef */
const { createApp } = Vue;

createApp({
    data() {
        return {
            search: "",
            movies: [],
            hasSearched: false,
        };
    },
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        this.search = urlParams.get("q") || "";
        if (this.search !== "") {
            this.fetchMovie(this.search);
        }
    },
    computed: {
        resultsTitle() {
            if (this.movies.length >= 2) {
                return `${this.movies.length} results`;
            } else if (this.movies.length === 1) {
                return `1 result`;
            } else if (this.hasSearched) {
                return "No result";
            } else {
                return "";
            }
        },
    },
    methods: {
        onInput() {
            // Set the query param to the input value
            const url = new URL(window.location.href);
            url.searchParams.set("q", this.search);
            window.history.replaceState(null, null, url);

            this.fetchMovie(this.search);
        },
        fetchMovie(search) {
            if (this.search.length <= 2) {
                this.movies = [];
                return;
            }
            this.hasSearched = true;
            const url = new URL("/api/search", window.location.origin);
            url.searchParams.append("q", search);
            fetch(url.toString())
                .then((response) => response.json())
                .then((data) => (this.movies = data));
        },
    },
    template: `
<div>
        <form class="search-form row" @submit.prevent>
            <input 
                placeholder="Dark Crystal, Harrison Ford, 1986..."
                class="col search-input" 
                type="text" 
                @input="onInput" 
                v-model="search"
            />
        </form>
        
        <h3 v-if="resultsTitle.length">{{resultsTitle}}</h3>
        
        <ul>
            <li v-for="movie in movies">
                <div class="result-movie">
                    <div>{{movie.name}} {{movie.releaseDate}}</div>
                    <div>Directors: {{movie.director}}</div>
                    <div>Actors: {{movie.actors}}</div>
                </div>
            </li>
        </ul>
</div>
`,
}).mount("#search");
