import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router/index";
import { setupStore } from "./store";

function bootstrap() {
  const app = createApp(App);
  // 配置 store
  setupStore(app);
  app.use(Antd);
  app.use(router);
  app.mount("#app");
}
bootstrap();
// createApp(App).use(Antd).use(router).use(createPinia()).mount("#app");
