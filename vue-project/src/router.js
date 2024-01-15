import PokedexPage from "@/views/PokedexPage.vue";
import HomePage from "@/views/HomePage.vue";
export const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/pokedex',
        component: PokedexPage
    }
]