/* eslint-disable no-undef */
const { createApp } = Vue;

createApp({
    data() {
        return {
            authenticated: false,
            favorite: false,
        };
    },
    mounted() {
        const el = document.querySelector(".movie-fav-button");
        this.authenticated = el.dataset.authenticated === "true";
        this.favorite = el.dataset.favorite === "true";
    },
    computed: {},
    methods: {
        onAddFavorite() {
            if (!this.authenticated) {
                this.redirectToLogin();
                return;
            }
            this.favorite = true;
        },
        onRemoveFavorite() {
            if (!this.authenticated) {
                this.redirectToLogin();
                return;
            }
            this.favorite = false;
        },
        redirectToLogin() {
            const url = new URL("/login", window.location.origin);
            url.searchParams.append("back", window.location.pathname);
            window.location = url;
        },
    },
    template: `
<div>
    <button v-if="favorite" class="small secondary flex align-items-center" @click="onRemoveFavorite">
        <img class="movie-fav-icon" src="/img/bookmark-x-fill.svg" width=20 height="20">Remove favorite
    </button>
    <button v-else class="small primary flex align-items-center" @click="onAddFavorite">
        <img class="movie-fav-icon" src="/img/bookmark-star-fill.svg" width=20 height="20">Add favorite
    </button>

</div>
`,
}).mount(".movie-fav-button");
