import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import App from "@/App.vue";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
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
      path: "/user/:id",
      name: "UserProfile",
      component: () => import("@/views/ProfilePage.vue"),
      props: true, // Will allow you to pass `id` as prop
    },
    {
      path: "/dashboard",
      component: () => import("@/views/DashboardPage.vue"),
    },
  ],
});

app.use(router);
app.mount("#app");
