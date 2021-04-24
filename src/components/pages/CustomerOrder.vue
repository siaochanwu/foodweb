<template>
  <div>
    <!-- <loading :active.sync="isLoading"></loading> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="menu collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="menu">
            <a class="nav-link" @click="category = 'main'">主餐</a>
          </li>
          <li class="menu">
            <a class="nav-link" @click="category = 'light'">輕食</a>
          </li>
          <li class="menu">
            <a class="nav-link" @click="category = 'sweet'">甜點</a>
          </li>
          <li class="menu">
            <a class="nav-link" @click="category = 'drink'">飲品</a>
          </li>
          <li class="menu">
            <a class="nav-link" @click="category = 'alcohol'">酒精</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="row mt-4">
      <div class="col-md-4 mb-4" v-for="item in filterData" :key="item.id">
        <div class="card border-0 shadow-sm">
          <div
            style="height: 150px; background-size: cover; background-position: center"
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          ></div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{
              item.category
            }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <p class="card-text">{{ item.content }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!item.price">
                {{ item.origin_price }} 元
              </div>
              <del class="h6" v-if="item.price"
                >原價 {{ item.origin_price }} 元</del
              >
              <div class="h5" v-if="item.price">
                現在只要 {{ item.price }} 元
              </div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm"
              @click="getProduct(item.id)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="status.loadingItem === item.id"
              ></i>
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ml-auto"
              @click="addtoCart(item.id)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="status.loadingItem === item.id"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ product.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="" />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">
                {{ product.description }}
              </footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">
                {{ product.origin_price }} 元
              </div>
              <del class="h6" v-if="product.price"
                >原價 {{ product.origin_price }} 元</del
              >
              <div class="h4" v-if="product.price">
                現在只要 {{ product.price }} 元
              </div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(product.id, product.num)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="product.id === status.loadingItem"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="my-5 row justify-content-center" v-show="cart.total > 0">
      <div class="my-5 row justify-content-center">
        <table class="table">
          <thead>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeItem(item.id)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">
                  已套用優惠券
                </div>
              </td>
              <td class="align-middle">
                {{ item.qty }}/{{ item.product.unit }}
              </td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
              <td class="text-right">{{ cart.total }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-right text-success">折扣價</td>
              <td class="text-right text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input
            type="text"
            class="form-control"
            v-model="coupon_code"
            placeholder="請輸入優惠碼"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="addCouponCode"
            >
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>

    <ValidationObserver ref="form" class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="createOrder">
        <ValidationProvider class="form-group" rules="required|email" v-slot="{errors, classes}">
          <label for="useremail">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="useremail"
            :class="classes"
            v-model="form.user.email"
            placeholder="請輸入 Email"
          />
          <span class="text-danger" >
            {{errors[0]}}
          </span>
        </ValidationProvider>
        <br>
        <ValidationProvider class="form-group" rules="required" v-slot="{errors}">
          <label for="username">收件人姓名</label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="username"
            v-model="form.user.name"
            placeholder="輸入姓名"
          />
          <span class="text-danger">{{errors[0]}}</span>
        </ValidationProvider>
        <br>
        <ValidationProvider class="form-group" rules="numeric|min:7" v-slot="{errors}">
          <label for="usertel">收件人電話</label>
          <input
            type="tel"
            class="form-control"
            id="usertel"
            v-model="form.user.tel"
            placeholder="請輸入電話"
          />
          <span class="text-danger">{{errors[0]}}</span>
        </ValidationProvider>
        <br>
        <ValidationProvider class="form-group" rules="required" v-slot="{errors}">
          <label for="useraddress">收件人地址</label>
          <input
            type="address"
            class="form-control"
            name="address"
            id="useraddress"
            v-model="form.user.address"
            placeholder="請輸入地址"
          />
          <span class="text-danger"> {{errors[0]}} </span>
        </ValidationProvider>
        <br>
        <div class="form-group">
          <label for="useraddress">留言</label>
          <textarea
            name=""
            id=""
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      products: [],
      product: {}, //存放modal資料
      status: {
        loadingItem: "", //存放產品id
      },
      isLoading: false,
      cart: {},
      coupon_code: "",
      form:{
        user:{
          name:'',
          email:'',
          tel:'',
          address:'',
        },
        message:'',
      },
      category: ""
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const url = "https://vue-course-api.hexschool.io/api/wendywu007/products/all";
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.products = response.data.products;
        console.log(response);
        vm.isLoading = false;
      });
    },
    getProduct(id) {
      const vm = this;
      const url = `https://vue-course-api.hexschool.io/api/wendywu007/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        $("#productModal").modal("show");
        console.log(response);
        vm.status.loadingItem = "";
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const url = "https://vue-course-api.hexschool.io/api/wendywu007/cart";
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        console.log(response);
        vm.status.loadingItem = "";
        vm.getCart();
        $("#productModal").modal("hide");
      });
    },
    getCart() {
      const vm = this;
      vm.isLoading = true;
      const url = "https://vue-course-api.hexschool.io/api/wendywu007/cart";
      this.$http.get(url).then((response) => {
        console.log(response);
        vm.cart = response.data.data;
        vm.isLoading = false;
      });
    },
    removeItem(id) {
      const vm = this;
      const url = `https://vue-course-api.hexschool.io/api/wendywu007/cart/${id}`;
      vm.isLoading = true;

      this.$http.delete(url).then((response) => {
        console.log(response);
        vm.getCart();
        vm.isLoading = false;

      });
    },
    addCouponCode() {
      const vm = this;
      const url = `https://vue-course-api.hexschool.io/api/wendywu007/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        console.log(response);
        vm.getCart();
        vm.isLoading = false;
      });
    },
    createOrder(){
      const vm = this;
      const url =  `https://vue-course-api.hexschool.io/api/wendywu007/order`;
      const order = vm.form;
      // vm.isLoading = true;
      vm.$refs.form.validate().then((success) => {
        if (success) {
          vm.$http.post(url, { data: order }).then((response) => {
            console.log('訂單已建立', response);
            if (response.data.success) {
              vm.$router.push(`/customer_checkout/${response.data.orderId}`)
            }
            vm.isLoading = false;
          });
        } else {
          console.log('欄位不完整');
        }
      });
    }
  },
  computed: {
    filterData: function () {
      if (this.category == 'main') {
        var main = [];
        this.products.forEach(function(item){
          if(item.category == '主餐') {
            main.push(item);
          }})
          return main;
        } else if (this.category == 'light'){
          var light = [];
        this.products.forEach(function(item){
          if(item.category == '輕食') {
            light.push(item);
          }})
          return light;
        } else if (this.category == 'sweet'){
          var sweet = [];
        this.products.forEach(function(item){
          if(item.category == '甜點') {
            sweet.push(item);
          }})
          return sweet;
        } else if (this.category == 'drink'){
          var drink = [];
        this.products.forEach(function(item){
          if(item.category == '飲品') {
            drink.push(item);
          }})
          return drink;
        } else if (this.category == 'alcohol'){
          var alcohol = [];
        this.products.forEach(function(item){
          if(item.category == '酒精') {
            alcohol.push(item);
          }})
          return alcohol;
        }
         else {
          return this.products;
        }
      }
  },
  created() {
    this.getProducts();
    this.getCart();
  }
}
</script>


