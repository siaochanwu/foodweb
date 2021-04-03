<template lang="">
  <div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: []
    }
  },
  methods: {
    getProducts() {
      const api = `https://vue-course-api.hexschool.io/api/wendywu007/admin/products/all`;
      this.axios
        .get(api)
        .then((res) => {
          console.log(res)
        })
    }
  },
  created() {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)haxToken\s*=\s*([^;]*).*$)|^.*$/,"$1");
    this.$http.defaults.headers.common["Authorization"] = myCookie;
    this.getProducts();
  }
}
</script>
<style lang="">
  
</style>