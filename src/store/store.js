import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        filmFavs: ['tt1289403', 'tt1289403']
    },
    mutations: {
        addFavorite(state, filmFav) {
            let isFav = state.filmFavs.find(elem => elem === filmFav)
            if (isFav) {
                state.filmFavs.splice(filmFav);
                console.log(state.favorites + 'Déjà Favoris');
            } else {
                state.filmFavs.push(filmFav);
                console.log(state.favorites + "Non favoris encore");
            }
        },
    },
    getters: {
        filmFavs: state => state.filmFavs
    }


})