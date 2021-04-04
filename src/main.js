import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from "./router";
import 'bootstrap';
import Loading from "vue-loading-overlay";
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);

new Vue({
  router,
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