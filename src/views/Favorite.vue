<template>
  <div>
    <div>
      <b-card :title="title" :img-src="img" img-top style="max-width: 20rem;" class="mb-2">
        <b-card-text>Année : {{ year }}</b-card-text>
        <b-button :href="`#/details/${film.imdbID}`">Voir la fiche du film</b-button>//
        <!-- <b-button size="sm" variant="outline-secondary" @click="addToFav">Favoris</b-button> -->
      </b-card>
    </div>
  </div>
</template>

<script>
// import FilmCard from "../components/FilmCard.vue";
import store from "../store/store.js";

export default {
  name: "Favorite",
  mounted() {
    this.generateCards();
  },
  components: {
    // FilmCard
  },
  methods: {
    generateCards: function() {
      this.cards = [...store.getters.getFavorites];
    }
  },
  data: function() {
    return {
      films: []
    };
  }
};
</script>
