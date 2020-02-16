<template>
  <div class="global">
    <b-card-group deck>
      <div v-for="film in films" :key="film.imdbID">
        <FilmCard :film="film.imdbID" />
      </div>
    </b-card-group>
  </div>
</template>

<script>
const axios = require("axios").default;
import FilmCard from "../components/FilmCard.vue";

export default {
  name: "HomePage",
  components: {
    FilmCard
  },
  data() {
    return {
      films: null
    };
  },
  mounted() {
    axios
      .get("http://www.omdbapi.com/?s=Potato&apikey=904eed5c") // on récupère l'API
      .then(response => (this.films = response.data.Search)); // on envoie dans l'array les données
  }
};
</script>

<style scoped>
.global {
  width: 100%;
}
</style>
