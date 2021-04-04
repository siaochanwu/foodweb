<template>
  <div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="80">購買時間</th>
          <th width="150">Email</th>
          <th>購買商品</th>
          <th width="120">應付金額</th>
          <th width="100">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order" :key="item.id">
          <td>{{ item.create_at }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <ul>
              <li v-for="product in item.products" :key="product">
                {{ product.product.title }}-{{ product.qty}}
              </li>
            </ul>
          </td>
          <td class="text-left">{{ item.total | currency }}</td>
          <td>{{ item.is_paid}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>


export default {
  data() {
    return {
      pagination: {},
      order: {}
    }
  },
  methods: {
    getOrders(page) {
      const api = `https://vue-course-api.hexschool.io/api/wendywu007/orders?page=${page}`;
      this.axios
        .get(api)
        .then(res => {
          console.log(res);
          this.order = res.data.orders;
          this.pagination = res.data.pagination;
        })
    }
  },
  created() {
    this.getOrders();
  }
}
</script>