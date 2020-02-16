<template>
  <div>
    <b-card>
      <b-media no-body>
        <b-media-aside vertical-align="center">
          <img :src="filmDetail.Poster" />
        </b-media-aside>
        <b-media-body class="ml-3">
          <h5 class="mt-0">{{filmDetail.Title}}</h5>
          <p>
            <b>Année :</b>
            {{filmDetail.Released}}
            <br />
            <b>Durée :</b>
            {{filmDetail.Runtime}}
            <br />
            <b>Type :</b>
            {{filmDetail.Type}}
            <br />
            <b>Genre:</b>
            {{filmDetail.Genre}}
            <br />
            <b>Scénario</b>
            : {{filmDetail.Plot}}
          </p>
          <b-media></b-media>
        </b-media-body>
      </b-media>
    </b-card>
  </div>
</template>
<script>
const axios = require("axios").default;

export default {
  name: "Details",
  components: {},
  mounted() {
    axios
      .get(
        "http://www.omdbapi.com/?i=" +
          this.$route.params.id +
          "&apikey=904eed5c"
      )
      .then(response => (this.filmDetail = response.data));
  },
  methods: {},
  data() {
    return {
      filmDetail: null
    };
  }
};
</script>
