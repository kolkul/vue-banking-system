import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("../views/Home"),
    meta: { layout: "Main" },
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/Categories"),
    meta: { layout: "Main" },
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("../views/Detail"),
    meta: { layout: "Main" },
  },
  {
    path: "/planning",
    name: "planning",
    component: () => import("../views/Planning"),
    meta: { layout: "Main" },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile"),
    meta: { layout: "Main" },
  },
  {
    path: "/record",
    name: "record",
    component: () => import("../views/Record"),
    meta: { layout: "Main" },
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../views/History"),
    meta: { layout: "Main" },
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login"),
    meta: { layout: "Empty" },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register"),
    meta: { layout: "Empty" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
