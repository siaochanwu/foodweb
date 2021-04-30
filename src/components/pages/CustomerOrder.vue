<template>
  <div>
    <!-- <loading :active.sync="isLoading"></loading> -->
    
    
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


