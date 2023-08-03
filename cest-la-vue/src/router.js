import HomePage from "@/views/HomePage.vue";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: () => import("@/views/LoginPage.vue") },
  { path: "/users", component: () => import("@/views/UserPage.vue") },
  {
    path: "/users/:name",
    component: () => import("@/views/UserDetailsPage.vue"),
  },
];
