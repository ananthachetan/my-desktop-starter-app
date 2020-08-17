import Vue from "vue";
import vuetify from "@/plugins/vuetify";

import App from "@/App";
import router from "@/router";

// Global components
import "@/globals.js";

// Global CSS
import "@/assets/css/main.css";

// Fonts
import "roboto-fontface/css/roboto/roboto-fontface.css";

Vue.config.productionTip = false;

new Vue({
	router,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
