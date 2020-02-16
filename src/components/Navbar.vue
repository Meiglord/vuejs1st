<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-collapse id="nav-collapse" is-nav>
        <b-nav-item>
          <router-link
            class="spacing"
            v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
          >{{ routes.text }}</router-link>
        </b-nav-item>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Chercher</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// const axios = require("axios").default;

export default {
  name: "Navbar",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Home Page",
          page: "/"
        },
        {
          id: 1,
          text: "Favorite",
          page: "/Favorite"
        }
      ]
    };
  },
  methods: {}

  // mounted() {
  //   axios
  //     .get("http://www.omdbapi.com/?i=" + $Search + "&apikey=904eed5c") // on récupère l'API
  //     .then(response => (this.filmDetail = response.data)); // on envoie dans l'array les données
  // }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #f8f8f8;
}
.spacing {
  margin-left: 15px;
}
</style>
