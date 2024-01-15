import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

import App from "./App.vue";

const app = createApp(App);
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: HomePage,
        },
        {
            path: "/login",
            component: () => import("@/views/LoginPage.vue"),
        },
        {
            path: "/users",
            component: () => import("@/views/UsersPage.vue"),
        }
    ],
});

app.use(router);
app.mount("#app");