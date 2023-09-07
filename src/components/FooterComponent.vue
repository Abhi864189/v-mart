<script setup></script>
<template>
  <footer class="footer-container">
    <div class="footer_banner_container">
      <p><v-icon icon="mdi-sprout" size="2.5vw" /> Every Fresh Products</p>
      <p><v-icon icon="mdi-sale" size="2.5vw" /> Daily Mega Discounts</p>
      <p><v-icon icon="mdi-currency-inr" size="2.5vw" />Best Price On The Market</p>
    </div>
    <div class="footer_nav_container">
      <div class="company_name">
        <p>V-Mart,Kolkata</p>
      </div>
      <div>
        <h2>UseFul Links</h2>
        <router-link to="/">About us</router-link>
        <router-link to="/">contact us</router-link>
        <router-link to="/">Best Seller</router-link>
        <router-link to="/">New Product</router-link>
      </div>
      <div class="">
        <h2>Legal</h2>
        <router-link to="/">Privacy Policy</router-link>
        <router-link to="/">Cookie Policy</router-link>
      </div>
      <div>
        <h2>Contact Us</h2>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer_banner_container {
  padding: 1.5rem;
  display: flex;
  justify-content: space-around;
  background-color: #e3e8e8;
}
.footer_banner_container p {
  font-size: 1vw;
  font-weight: 600;
}
.footer_banner_container i {
  margin-right: 0.2rem;
}
.footer_nav_container {
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: space-evenly;
  background-color: #f4f4f4;
}
.footer_nav_container div {
  display: flex;
  flex-direction: column;
}
.footer_nav_container h2 {
  color: #383955;
  font-size: 1.1vw;
  font-weight: 600;
  margin-bottom: 0.2rem;
}
.footer_nav_container a {
  color: #383955;
  font-size: 0.9vw;
  font-weight: 400;
  margin-top: 0.6rem;
}
.company_name {
  color: #383955;
  font-size: 1.6vw;
  font-weight: 600;
  margin-bottom: 1rem;
}
</style>
