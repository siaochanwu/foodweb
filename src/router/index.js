import Vue from 'vue'
import VueRouter from 'vue-router'
//官方
// import Home from '../components/HelloWorld.vue'
import Login from "@/components/pages/Login"
import Admin from "@/components/pages/dashboard"
import Products from "@/components/pages/Products"
import Coupons from "@/components/pages/Coupons"
import Orders from "@/components/pages/Orders"
import CustomerOrder from "@/components/pages/CustomerOrder"
import CustomerCheckout from "@/components/pages/CustomerCheckout"
import Menu from "@/components/pages/Menu"
import Normal from "@/components/pages/Normal";

//自訂

Vue.use(VueRouter)//啟用

//定義路徑
const routes = [
  {
    path: "*", //防止隨便改網址
    redirect: "login",
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,//對應元件
  //   meta: { requiresAuth: true }//路油源信息
  // },
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
        name: "Products",
        component: Products,
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',//不用加斜線
        name: "Orders",
        component: Orders,
        meta: { requiresAuth: true },
      },
      {
        path: 'coupons',//不用加斜線
        name: "Coupons",
        component: Coupons,
        meta: { requiresAuth: true },
      }
    ]
  },
  {
    path: '/',
    name: "Normal",
    component: Normal,
    children: [
      {
        path: 'menu',
        name: "Menu",
        component: Menu,
      },
      {
        path: 'customer_order',//不用加斜線
        name: "CustomerOrder",
        component: CustomerOrder,
      },
      {
        path: 'customer_checkout/:orderId',//不用加斜線
        name: "CustomerCheckout",
        component: CustomerCheckout,
      },
    ]
  },
  
];

const router = new VueRouter({
  routes
})

export default router //輸出
