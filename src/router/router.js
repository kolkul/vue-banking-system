import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login"),
    meta: { layout: "Empty" },
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/Categories"),
    meta: { layout: "Main" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
