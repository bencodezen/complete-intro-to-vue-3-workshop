import { createApp } from "vue";
import App from "@/App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "@/router";
import { createPinia } from "pinia";

const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
