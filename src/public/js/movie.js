/* eslint-disable no-undef */
const { createApp } = Vue;

createApp({
    data() {
        return {
            favorite: false,
        };
    },
    mounted() {
        const el = document.querySelector(".movie-fav-button");
        this.favorite = el.dataset.favorite === "true";
    },
    computed: {},
    methods: {
        onAddFavorite() {
            this.selectFavorite(true);
        },
        onRemoveFavorite() {
            this.selectFavorite(false);
        },
        selectFavorite(selected) {
            const url = new URL(
                "/api/favorites",
                window.location.origin
            ).toString();
            fetch(url, { method: "PUT" }).then((response) => {
                if (response.status === 401) {
                    this.redirectToLogin();
                    return;
                }
                if (response.status === 200) {
                    this.favorite = selected;
                }
            });
        },
        redirectToLogin() {
            const url = new URL("/login", window.location.origin);
            url.searchParams.append("back", window.location.pathname);
            window.location = url;
        },
    },
    template: `
<div>
    <button v-show="favorite" class="small secondary flex align-items-center" @click="onRemoveFavorite">
        <img class="movie-fav-icon" src="/img/bookmark-x-fill.svg" width=20 height="20">Remove favorite
    </button>
    <button v-show="!favorite" class="small primary flex align-items-center" @click="onAddFavorite">
        <img class="movie-fav-icon" src="/img/bookmark-star-fill.svg" width=20 height="20">Add favorite
    </button>

</div>
`,
}).mount(".movie-fav-button");
