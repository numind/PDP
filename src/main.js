import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import VueResource from 'vue-resource';

Vue.use(VueResource)
Vue.http.options.root = 'https://projectm-228d1.firebaseio.com/moneysplit.json'

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

