<template>
  <div class="global">
    <b-card-group deck>
      <FilmCard
        v-for="film in films"
        :title="film.Title"
        :img="film.Poster"
        :year="film.Year"
        :key="film.imdbID"
      />
    </b-card-group>
  </div>
</template>

<script>
import FilmCard from "../components/FilmCard.vue";
const axios = require("axios").default;

export default {
  name: "HomePage",
  data() {
    return {
      films: null // De base il n'y aura aucun film
    };
  },
  mounted() {
    axios
      .get("http://www.omdbapi.com/?s=Potato&apikey=904eed5c") // on récupère l'API
      .then(response => (this.films = response.data.Search)); // on envoie dans l'array les données
  },
  components: {
    FilmCard
  },
  methods: {
    addFav: function(event) {
      this.$store.commit("change", event.target.filmFav);
    }
  }
};
</script>

<style scoped>
.global {
  width: 100%;
}
</style>
