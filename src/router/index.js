import Vue from 'vue'
import VueRouter from 'vue-router'
//官方
import Home from '../components/HelloWorld.vue'
import Login from "@/components/pages/Login"
import Admin from "@/components/pages/dashboard"
import Products from "@/components/pages/Products"


//自訂

Vue.use(VueRouter)//啟用

//定義路徑
const routes = [
  {
    path: "*", //防止隨便改網址
    redirect: "login",
  },
  {
    path: '/',
    name: 'Home',
    component: Home,//對應元件
    meta: { requiresAuth: true }//路油源信息

  },
  {
    path: '/login',
    name: "Login",
    component: Login,
  },
  {
    path: '/admin',
    name: "Dashboard",
    component: Admin,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'products',//不用加斜線
        name: "Product",
        component: Products,
        meta: { requiresAuth: true },
      }
    ]
  },
  
];

const router = new VueRouter({
  routes
})

export default router //輸出
