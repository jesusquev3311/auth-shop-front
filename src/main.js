import Vue from "vue";
import VueNoty from "vuejs-noty";
import App from "./App.vue";
import router from "./router";
import store from "./store";

require("@/assets/scss/main.scss");

Vue.use(VueNoty, {
    theme: "sunset",
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
