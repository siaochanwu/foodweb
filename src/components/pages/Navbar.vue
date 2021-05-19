<template lang="">
  <div class="nav">
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <router-link to="/menu" class="navbar-brand col-md-3 col-lg-2 me-0 px-3">Eat Well
      <i class="fas fa-cookie-bite"></i>
      </router-link>
      <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <marquee direction="right">歡慶本店一周年!全館免運!</marquee>
      <input class="form-control form-control-dark w-40" type="text" placeholder="Search" aria-label="Search">
      <div class="login">
        <router-link to="/admin/login" class="nav-link">Login</router-link>
      </div>
      <div class="cart" @click="getCart" ><i class="fas fa-cart-plus" @click="active = !active"></i></div>
      <ul class="navbar-nav px-3">
        
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signOut">
            <i class="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </header>
    <div class="cartdetail" :class="{ hidecart: !active}">
      <div class="title">
        <span>您的購物袋裡有{{ cartData.length }}件商品</span>
        <i class="fas fa-times"></i>
        </div>
        <div class="detail" v-for="item in cartData" :key="item.id">
          <div>
            <img :src="item.product.imageUrl">
          </div>
          <div>
            <div>{{ item.product.title}}</div>
            <div>{{ item.product.price | money}}</div>
            <div>數量:
              <select name="" id="" v-model="item.qty" @click="addtoCart(item.id, item.qty)">
                <option :value="num" v-for="num in 5" :key="num">
                  {{ num }}
                </option>
              </select>
              {{ item.product.unit}}
            </div>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-0"
              @click="removeItem(item.id)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
        <div class="btn">
          <button type="button" class="btn btn-outline-success" @click="seecart">
          繼續購物
        </button>
        <button type="button" class="btn btn-success" v-show="hasData" @click="seecart">
          <router-link to="/customer_order" class="topay">結帳</router-link>
        </button>
        </div>
        
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      cart: {},
      active: false,
      cartData: {}
    }
  },
  methods: {
    signOut() {
      const api = "https://vue-course-api.hexschool.io/logout";
      this.axios
        .post(api)
        .then((res) => {
          console.log(res);
          this.$store.dispatch('LOGOUT', false);
          this.$router.push('login')
        }).catch((err) => {
          console.log(err)
        });
    },
    getCart() {
      const vm = this;
      const api = "https://vue-course-api.hexschool.io/api/wendywu007/cart";
      this.$http.get(api).then((response) => {
        console.log(response.data.data.carts);
        vm.cartData = response.data.data.carts;
      });
    },
    addtoCart(id, qty = 1) {
      console.log(id,qty)
      const vm = this;
      const api = "https://vue-course-api.hexschool.io/api/wendywu007/cart";
      // vm.status.loadingItem = id;
      const cart = {
          product_id: id,
          qty
      };
      console.log(cart);
      this.$http.post(api, cart).then((response) => {
          console.log("123",response);
          // vm.status.loadingItem = "";
          vm.getCart();
          console.log(this.cartData)
      });
    },
    removeItem(id) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/wendywu007/cart/${id}`;
      this.$http.delete(api).then(res => {
        console.log(res.data);
        vm.getCart();
      })
    },
    seecart() {
      this.active = !this.active;
    }
  },
  created(){
    this.getCart();
  },
  computed:{
    hasData(){
      return this.cartData.length > 0 ? true : false
    }
  }
}
</script>
<style lang="">
  
</style>