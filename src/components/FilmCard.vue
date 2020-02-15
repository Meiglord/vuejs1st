<template>
  <div>
    <b-card :title="title" :img-src="img" img-top style="max-width: 20rem;" class="mb-2">
      <b-card-text>Année : {{ year }}</b-card-text>
      <b-button>Voir la fiche du film</b-button>
      <b-button size="sm" variant="outline-secondary" @click="addToFav">Favoris</b-button>
    </b-card>
  </div>
</template>

<script>
// import store from "../store/store.js";
export default {
  name: "FilmCard",
  components: {},
  props: {
    img: String,
    title: String,
    year: String
  },
  // computed: {
  //   addedFavorites: function() {
  //     return store.getters.getFavorite(this.title) != null;
  //   }
  // },
  methods: {
    addToFav: function() {
      if (!this.addToFav)
        this.store.commit("addFavorite", {
          title: this.Title,
          img: this.Poster,
          year: this.Year
        });
      this.addedFavorites = true;
    }
  }
};
</script>

<style scoped>
</style>
