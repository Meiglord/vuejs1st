import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        filmFavs: []
    },
    mutations: {
        addFavorite(state, filmFav) {
            let isFav = state.filmFavs.find(elem => elem === filmFav)
            if (isFav) {
                state.filmFavs.splice(filmFav, 1);
            } else {
                state.filmFavs.push(filmFav);
            }
        },
    },
    getters: {
        filmFavs: state => state.filmFavs
    }
})