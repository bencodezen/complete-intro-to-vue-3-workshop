import HomePage from "@/views/HomePage.vue";

const usersTitle = "Alabalaportocala";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: () => import("@/views/LoginPage.vue") },
  {
    path: "/users",
    component: () => import("@/views/UsersPage.vue"),
    props: { title: usersTitle },
  },
  {
    path: "/dashboard/:id",
    component: () => import("@/views/DashboardPage.vue"),
    children: [
      {
        path: "posts",
        component: () => import("@/views/dashboard/DashboardPostsPage.vue"),
      },
      {
        path: "photos",
        component: () => import("@/views/dashboard/DashboardPhotosPage.vue"),
      },
    ],
  },
];
