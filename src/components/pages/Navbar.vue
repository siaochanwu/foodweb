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
      
      <div class="cart"><i class="fas fa-cart-plus"></i></div>
      <ul class="navbar-nav px-3">
        
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signOut">
            <i class="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </header>
    
  </div>
</template>
<script>
export default {
  methods: {
    signOut() {
      const api = "https://vue-course-api.hexschool.io/logout";
      this.axios
        .post(api)
        .then((res) => {
          console.log(res);
          this.$router.push('login')
        }).catch((err) => {
          console.log(err)
        });
    }
  },
}
</script>
<style lang="">
  
</style>