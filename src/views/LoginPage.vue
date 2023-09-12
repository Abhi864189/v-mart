<script setup>
import loginImage from '../utils/pictures/loginImage.png'
</script>
<template>
  <div class="login_container">
    <div class="login_image">
      <img :src="loginImage" alt="loginImage" />
    </div>
    <div class="login_form_container">
      <div class="login_form">
        <div class="login_title">
          <h2>Sign In</h2>
          <p>Phone Number Verification</p>
        </div>
        <div class="form">
          <v-text-field
            label="Phone Number"
            variant="outlined"
            base-color="rgba(217, 217, 217, 1)"
            placeholder="Exp:78********"
            counter="10"
            type="number"
            color="rgb(88, 157, 77)"
          >
            <template v-slot:prepend-inner>
              <v-icon color="rgb(88, 157, 77)" icon="mdi-cellphone" />
            </template>
          </v-text-field>
          <button>Continue</button>
        </div>
        <p>By continuing, you agree to Aonemart Privacy Notice.</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.login_container {
  display: flex;
}
.login_image img {
  height: 100vh;
  width: 50vw;
}
.login_form_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
}
.login_form_container .login_form {
  padding: 8vw;
}
.login_title {
  padding: 2rem;
  text-align: center;
}
.login_title h2 {
  font-size: 2.5rem;
}
.login_title p {
  margin-top: 0.2rem;
  font-size: 1.1rem;
}
.form {
  display: flex;
  flex-direction: column;
}
.form .form_input {
  background-color: rgb(160, 160, 160);
}
</style>
