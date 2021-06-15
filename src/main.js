import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Paginate from 'vuejs-paginate';
import {store} from "./store/store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('Paginate', Paginate);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
