<template>
  <div>
    <b-card-group deck>
      <div v-for="film in filmFavs" :key="film.imdbID">
        <FilmCard :film="film"></FilmCard>
      </div>
    </b-card-group>
  </div>
</template>

<script>
import FilmCard from "../components/FilmCard.vue";

export default {
  name: "Favorite",
  components: {
    FilmCard
  },
  data: function() {
    return {
      filmFavs: this.$store.getters.filmFavs
    };
  }
};
</script>
