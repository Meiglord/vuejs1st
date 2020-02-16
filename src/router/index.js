import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './../views/HomePage.vue'
import Favorite from './../views/Favorite.vue'
import Details from './../views/Details.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: HomePage,
        },
        {
            path: '/favorite',
            component: Favorite,
        },
        {
            path: '/details/:id',
            component: Details,
        }
    ]
})