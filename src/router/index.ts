import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/index.vue";

const routes = [
  { path: "/", component: Home },
];

export const router = createRouter({
  history: createWebHistory('/lowcode-design/'),
  routes,
});
