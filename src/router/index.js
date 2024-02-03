import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";
import Product from "../Product.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/producto/:id",
      name: "product",
      component: Product,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
    next();
});

export default router;
