import Vue from "vue";

import { createPinia, PiniaVuePlugin } from "pinia";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/main.scss";
import * as bootstrap from "bootstrap";
const pinia = createPinia();
Vue.use(PiniaVuePlugin);

new Vue({
    router,
    render: (h) => h(App),
    pinia,
}).$mount("#app");
