<script setup>
import loginImage from '../utils/pictures/loginImage.png'
import { useRouter } from 'vue-router'
import { reactive } from 'vue';

const router = useRouter();
const loginCred=reactive({phone:''})
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
            v-model="loginCred.phone"
          >
            <template v-slot:prepend-inner>
              <v-icon color="rgb(88, 157, 77)" icon="mdi-cellphone" />
            </template>
          </v-text-field>
          <button>Continue</button>
        </div>
        <p class="privacy_text">
          By continuing, you agree to v-mart <router-link to="/"> Privacy Notice</router-link>.
        </p>
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
  text-align: center;
}
.login_form_container .login_form a {
  color: #007bff;
}
.login_title {
  padding: 2rem 10rem;
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
  margin: 2rem 0;
}
.form .form_input {
  background-color: rgb(160, 160, 160);
}
.form button {
  background-color: rgb(88, 157, 77);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 1.2rem;
  margin-top: 1.5rem;
  font-size: 1.2rem;
}
@media (max-width: 992px) {
  .login_container {
    flex-direction: column;
  }
  .login_image img {
    height: auto;
    width: 100vw;
  }
  .login_form_container {
    width: 100%;
  }
  .login_form_container .login_form {
    padding: 2vw 0;
  }
  .login_title {
    padding: 2rem 0;
  }
  .form {
    margin: 2rem 1rem;
  }
  .privacy_text {
    margin: 0 1rem;
  }
}
</style>
