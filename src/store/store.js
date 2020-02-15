import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        filmFav: [],
    },
    mutations: {
        addFavorite(state, favorite) {
            state.filmFav.push(favorite)
        }
    },
    getters: {
        getFavorites: (state) => {
            return state.filmFav
        }

    }
})