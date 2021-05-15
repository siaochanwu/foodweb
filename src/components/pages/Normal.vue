<template>
    <div class="Dashboard">
        <navbar />
        <Menu />
        <router-view></router-view>
    </div>
</template>
<script>
import Navbar from "./Navbar";
import Menu from "./Menu";

export default {
components: {
    Navbar,
    Menu
}
}
</script>
<style lang="">

</style>