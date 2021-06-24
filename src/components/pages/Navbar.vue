<template lang="">
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Eat Well
      <i class="fas fa-cookie-bite"></i>
    </a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="navbar-nav px-3">
      <li class="nav-item d-flex justify-content-center align-items-center">
        <router-link to="/admin/login" class="nav-link mx-3 text-white">Login</router-link>
        <a class="nav-link" href="#" @click.prevent="signOut">
          <i class="fas fa-sign-out-alt"></i>
        </a>
      </li>
    </ul>
  </header>
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
  }
}
</script>
