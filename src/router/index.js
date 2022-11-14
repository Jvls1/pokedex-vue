import { createRouter, createWebHistory } from 'vue-router'
import PokedexListView from '../views/PokedexListView.vue'

const routes = [
  {
    path: '/',
    name: 'pokedexList',
    component: PokedexListView
  },
  {
    path: '/:pokemonId',
    name: 'pokemon',
    props:true,
    component: () => import('../views/SinglePokemonView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
