<template>
  <div class="Dashboard">
    <navbar />
    <sidebar />
    <main class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-20">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default {
  components: {
    Sidebar,
    Navbar
  }
}
</script>
<style lang="">
  
</style>