<template lang="">
  <div>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Eat Well
        <i class="fas fa-cookie-bite"></i>
      </a>
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
            <div>數量:{{ item.qty}}{{ item.product.unit}}</div>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="removeItem(item.id)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
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
      const url = "https://vue-course-api.hexschool.io/api/wendywu007/cart";
      this.$http.get(url).then((response) => {
        console.log(response.data.data.carts);
        vm.cartData = response.data.data.carts;
      });
    },
    removeItem(id) {
      const vm = this;
      const url = `https://vue-course-api.hexschool.io/api/wendywu007/cart/${id}`;
      this.$http.delete(url).then(res => {
        console.log(res.data);
        vm.getCart();
      })
    },
    seecart() {
      this.active = !this.active;
    }
  },
  created(){
    this.getCart()
  }
}
</script>
<style lang="">
  
</style>