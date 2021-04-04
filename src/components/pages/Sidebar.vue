<template lang="">
  <div>
    <div class="container-fluid">
      <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div class="position-sticky pt-3">
            <ul class="nav flex-column">
              <span>管理員</span>
              <li class="nav-item">
                <router-link to="/admin/products" class="nav-link">產品列表</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/orders" class="nav-link">訂單列表</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/coupons" class="nav-link">優惠券</router-link>
              </li>
              <span>模擬功能</span>
              <li class="nav-item">
                <router-link to="/customer_order" class="nav-link">結帳區</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>