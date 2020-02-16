<template>
  <div>
    <b-card
      :title="filmData.Title"
      :img-src="filmData.Poster"
      img-top
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>Année : {{ filmData.Year }}</b-card-text>
      <b-button :href="`#/details/${filmID}`">Voir la fiche du film</b-button>
      <b-button size="sm" variant="outline-secondary" @click="addToFav(item)">Favoris</b-button>
    </b-card>
  </div>
</template>

<script>
const axios = require("axios").default;

// import store from "../store/store.js";
export default {
  name: "FilmCard",
  props: {
    filmID: String
  },
  state: {
    filmFavs: ""
  },
  data() {
    return {
      filmData: {}
    };
  },
  methods: {
    addToFav: function(item) {
      this.$store.commit("addFavorite", item);
    }
  },
  mounted() {
    axios
      .get("http://www.omdbapi.com/?i=" + this.filmID + "&apikey=904eed5c") // on récupère l'API
      .then(response => (this.filmData = response.data)); // on envoie dans l'array les données
  }
};
</script>

<style scoped></style>
