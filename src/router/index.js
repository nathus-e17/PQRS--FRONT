import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/Inicio"),
  },
  {
    path: "/agregar",
    name: "agregar",
    component: () => import("../components/Agregar"),
  },
  {
    path: "/view",
    name: "view",
    component: () => import("../components/Peticiones"),
  },
  {
    path: "/editar/:id",
    name: "editar",
    component: () => import("../components/Editar"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../components/About"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
