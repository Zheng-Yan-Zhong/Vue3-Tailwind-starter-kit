import { createApp } from "vue";
import { createPinia } from "pinia";
import "./tailwind.css";
// import "./assets/main.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
