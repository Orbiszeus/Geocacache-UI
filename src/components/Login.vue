<template>
<body>
     <div class="main-wrapper">
  <div class="background">
   <img class="geocache_image" src="/Geocaching.svg.png" alt="geocache">
  
  <form>
    <h3>Geocaching Login</h3>
    <label for="username"></label>
    <input type="text" placeholder="email" id="username">
    <label for="password"></label>
    <input type="password" placeholder="password" id="password">
     <div class="login-button">
          <button>Log In</button>
     </div>
    
    <div class="social">
      <div class="go">
          <img class="google-icon" src="/google_2.png" alt="Description of image">
          <button class="fab fa-google"></button> Continue with Google</div>
      
    </div>
  </form>
</div>
</div>
</body>
   </template>
   
   <script>
   
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
  background-color: #5e7fcb;
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
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
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

::placeholder {
  color: #e5e5e5;
}

.login-button button {
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition-duration: 0.4s;
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
    margin-left: 40px;
    font-size: 18px;
    cursor: pointer;
    font-family: inherit;
}
.google-icon {
  max-width: 27px;
  width: 100%; 
  align-items: center;
  text-align: justify;
}
.geocache_image {
     max-width: 650px;
     width: 700px;
     margin-left: 160px;
     
     align-items: center;
     text-align: justify;
     
}
</style>