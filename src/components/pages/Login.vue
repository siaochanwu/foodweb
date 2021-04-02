<template>
  <div class="Login">
    <form class="form-signin" @submit.prevent="signin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">UserName</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="user.username">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="user.password">
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="signin">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    signin() {
    const api = "https://vue-course-api.hexschool.io/admin/signin";
    this.axios
      .post(api, this.user)
      .then(res => {
        console.log(res);
        if(res.data.success) {
          const token = res.data.token;
          const expired = res.data.expired;
          document.cookie = `hextoken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/admin/products')
        }
      })
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
