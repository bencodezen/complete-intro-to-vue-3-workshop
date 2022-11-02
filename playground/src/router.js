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
];
