import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
const routerHash = createWebHashHistory();
const router = createRouter({
  history: routerHash,
  routes,
});

export default router;
