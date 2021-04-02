<template>
  <div class="hello">
    <a href="#" @click="logout">log out</a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout() {
      const api = "https://vue-course-api.hexschool.io/logout";
      this.axios
        .post(api)
        .then(res => {
          console.log(res)
          this.$router.push('/login')
        })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
