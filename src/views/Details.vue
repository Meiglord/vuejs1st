<template>
  <div>
    <div>
      {{ filmDetail }}
      <p>{{ filmDetail.Title }}</p>
      <b-card :title="filmDetail.Title" :img-src="filmDetail.Poster" img-top style="max-width: 20rem;" class="mb-2">
        <b-card-text>Année : {{ filmDetail.Year }}</b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;

export default {
  name: "Details",
  components: {},
  mounted() {
    axios
      .get("http://www.omdbapi.com/?i=" + this.$route.params.id + "&apikey=904eed5c") // on récupère l'API
      .then(response => (this.filmDetail = response.data)); // on envoie dans l'array les données
  },
  methods: {},
  data() {
    return {
      filmDetail: null
    };
  }
};
</script>
