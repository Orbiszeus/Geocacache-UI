<template>
  <body>
    <div class="main-wrapper">
      <div class="background">
        <img class="geocache_image" src="/Geocaching.svg.png" alt="geocache">

        <form class="form-wrapper">
          <h3 class="main-header">Login</h3>
          <label for="username"></label>
          <input type="text" placeholder="Email" id="username">
          <label for="password"></label>
          <input type="password" placeholder="Password" id="password">
          <div>
            <button class="login-button">Continue</button>
          </div>
          <div>

            <button class="login-button" id="google" @click="loginWithGoogle">
              <img class="google-icon" src="/google_2.png" alt="Google Icon">
              Continue with Google
            </button>
          </div>



        </form>
      </div>
    </div>
  </body>
</template>
   
<script>
import axios from 'axios';

export default {
  methods: {
    loginWithGoogle() {
      axios.get('http://127.0.0.1:8000/login')
        .then(response => {
          console.log('URL:', response.data.url);
          // handle your response here
          // you might want to redirect the user to the received URL for Google authentication
          window.location.href = response.data.url;

        })

        .catch(error => {
          console.error(error);
          // handle your error here
        });
    }
  }
}
</script>

<style>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-wrapper {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffffd0;
}

body {
  background-color: #080710;
}

.background {
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}



form {
  height: 500px;
  width: 400px;
  background-color: rgba(76, 75, 75, 0.413);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(16px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}

form * {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

.main-header {
  color: rgb(52, 51, 51);
  font-family: ulp-font, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif;
}

form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}

input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}

.google-icon {
  width: 20px;
  /* adjust as needed */
  margin-right: 10px;
  /* adjust as needed */
}

::placeholder {
  color: #e5e5e5;
}

.login-button {

  margin-top: 40px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition-duration: 0.4s;
  justify-content: center;
  display: flex;
  text-align: center;
  align-items: center;
}

.login-button:hover {
  background-color: #00000041;
}

.social {
  margin-top: 30px;
  display: flex;
  margin-left: 20%;
  cursor: pointer;
}

.social div {
  background: red;
  text-align: center;
  justify-content: center;


  border-radius: 5px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
}

.social div:hover {
  background-color: rgba(255, 255, 255, 0.47);
}

.social .fb {
  margin-left: 25px;
}

.social i {
  margin-right: 4px;
}

.go button {
  display: block;
  padding: 0 var(--spacing-1) 0 var(--spacing-6-5);
  background: var(--widget-background-color);
  font-size: 18px;
  cursor: pointer;
  color: #080710;
  font-weight: 500;
  font-family: inherit;
  z-index: 1000;
}

.google-icon {
  width: 29px;
  align-items: center;
  text-align: justify;
}

.google-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--spacing-1) 0 var(--spacing-6-5);
  background: var(--widget-background-color);
  font-size: 18px;
  cursor: pointer;
  color: #080710;
  font-weight: 500;
  font-family: inherit;
  z-index: 1000;
}

.geocache_image {
  max-width: 650px;
  width: 700px;
  margin-left: 160px;

  align-items: center;
  text-align: justify;

}
</style>