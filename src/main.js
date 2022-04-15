import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App).mount("#app");

// const app = createApp(App);
// app.use(VueGoogleMaps, {
//     load: {
//         key: import.meta.env.VITE_API_KEY,
//     },
// }).mount("#app");