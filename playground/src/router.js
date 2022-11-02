import HomePage from "./views/HomePage.vue";
import PokedexPage from "./views/PokedexPage.vue";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/pokedex",
    component: PokedexPage,
  },
  {
    path: "/pokedex/:id",
    component: () => import("@/views/PokemonPage.vue"),
  },
  {
    path: "/pokedex/:id/:element",
    component: () => import("@/views/PokemonPage.vue"),
  },
];
