<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <table class="table mt-4">
      <thead class="bg-warning">
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
              <li v-for="product in item.products" :key="product.id">
                {{ product.product.title }}-{{ product.qty}}
              </li>
            </ul>
          </td>
          <td class="text-left">{{ item.total | currency }}</td>
          <td>{{ item.is_paid}}</td>
        </tr>
      </tbody>
    </table>
    <pagination :has_pre="pagination.has_pre" :has_next="pagination.has_next"
    :total_pages="pagination.total_pages" :current_page="pagination.current_page" @getData="getData" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import pagination from "@/components/pages/Pagination.vue";

export default {
  components:{
    pagination
  },
  data() {
    return {
      pagination: {},
      order: {}
    }
  },
  methods: {
    getData(page =1) {
      this.$store.dispatch('LOADING', true);
      const api = `https://vue-course-api.hexschool.io/api/wendywu007/orders?page=${page}`;
      this.axios
        .get(api)
        .then(res => {
          this.$store.dispatch('LOADING', false);
          console.log(res);
          this.order = res.data.orders;
          const date = new Date(this.order.create_at).getTime();  
          console.log(date);
          this.pagination = res.data.pagination;
        })
    }
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapState(['isLoading'])
  }
}
</script>