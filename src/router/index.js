import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";
import Receta from "../Receta.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/receta/:id",
      name: "Receta",
      component: Receta,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
    next();
});

export default router;
