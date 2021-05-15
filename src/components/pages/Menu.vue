<template lang="">
    <div>
        <div class="menu">
            <ul>
            <li class="menu">
                <a @click="category = 'main'">主餐</a>
            </li>
            <li class="menu">
                <a @click="category = 'light'">輕食</a>
            </li>
            <li class="menu">
                <a @click="category = 'sweet'">甜點</a>
            </li>
            <li class="menu">
                <a @click="category = 'drink'">飲品</a>
            </li>
            <li class="menu">
                <a @click="category = 'alcohol'">酒精</a>
            </li>
            </ul>
        </div>
        <div class="mainimg">
            <img src="../../assets/pexels-1.jpg" alt="">
        </div>
        <div class="row mt-4 m-4">
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
        }
    },
    methods: {
        getProducts() {
            const vm = this;
            const url = "https://vue-course-api.hexschool.io/api/wendywu007/products/all";
            this.$store.dispatch('LOADING', true);
            this.$http.get(url).then((response) => {
                vm.products = response.data.products;
                console.log(response);
                this.$store.dispatch('LOADING', false);
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
            this.$store.dispatch('LOADING', true);
            const url = "https://vue-course-api.hexschool.io/api/wendywu007/cart";
            this.$http.get(url).then((response) => {
                console.log(response);
                vm.cart = response.data.data;
                this.$store.dispatch('LOADING', false);
            });
            },
            removeItem(id) {
            const vm = this;
            const url = `https://vue-course-api.hexschool.io/api/wendywu007/cart/${id}`;
            this.$store.dispatch('LOADING', true);

            this.$http.delete(url).then((response) => {
                console.log(response);
                vm.getCart();
                this.$store.dispatch('LOADING', false);

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