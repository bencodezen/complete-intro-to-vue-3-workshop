import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createPinia } from "pinia";
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
      path: "/user",
      component: () => import("@/views/UserPage.vue"),
    },
    {
      path: "/user/:name",
      component: () => import("@/views/UserDetailPage.vue"),
    },
  ],
});
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
