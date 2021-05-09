import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from "./router";
import Vuex from 'vuex';
import 'bootstrap';
import Loading from "vue-loading-overlay";
import 'vue-loading-overlay/dist/vue-loading.css';
import currency from "./assets/filters/currency";
import money from "./assets/filters/money";
import { ValidationObserver, ValidationProvider, extend, localize} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import store from "./store";


Vue.use(Vuex);
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.filter('currency', currency);
Vue.filter('money', money);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);


Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('zh_TW', TW);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  if (to.meta.requiresAuth) {
    const api = "https://vue-course-api.hexschool.io/api/user/check";
    axios
      .post(api)
      .then(res => {
        console.log(res)
        if(res.data.success) {
          next();
        } else {
          next({
            path: '/login'
          })
        }
      })
  } else {
    next();
  }
})