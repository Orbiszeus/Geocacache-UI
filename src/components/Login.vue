<template>
	<div class="main-wrapper">
		<div class="background">
			<form class="form-wrapper">
				<h3 class="main-header">Geocaching</h3>
				<div class="input-group">
					<input type="text" placeholder="Email" id="username" class="input-field">
				</div>
				<div class="input-group">
					<input type="password" placeholder="Password" id="password" class="input-field">
				</div>
				<button class="login-button">Login</button>
				<button class="login-button" id="google" @click="loginWithGoogle">
					<img class="google-icon" src="/google_2.png" alt="Google Icon">
				</button>
			</form>
		</div>
	</div>
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
	},
	mounted() {
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has("authenticated") && urlParams.get("authenticated") === "true") {
			const userInfo = JSON.parse(urlParams.get("user_info"));
			console.log(userInfo);
			this.$router.push('/game_panel');

		}
	}
}
</script>

<style>
/* General Resets */
*,
*:before,
*:after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	background: url('/Geocaching.svg.png') no-repeat center center fixed;
	background-size: cover;
	overflow: hidden;
	background-color: #b3e2b3;
}

/* Main Wrapper */
.main-wrapper {
	display: flex;
	padding-left: 180px;
	align-items: center;
	height: 100vh;

}

/* Background & Form */
.background {
	width: 440px;
	padding: 89px 30px;
	border-radius: 11%;

	border: 2px solid rgba(255, 255, 255, 0.1);
	box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
	animation: slideInFromLeft 1s ease-out;
}

/* Form Styling */
.form-wrapper h3 {

	font-size: 32px;
	font-weight: 500;
	line-height: 42px;
	text-align: center;
	margin-bottom: 30px;
}

.input-group {
	margin-bottom: 20px;
}

.input-field {
	width: 100%;
	height: 50px;
	padding: 0 10px;
	background-color: rgba(255, 255, 255, 0.07);
	border-radius: 40px;
	font-size: 15px;

}

.input-field::placeholder {
	color: #3a3535;
}

/* Buttons */
.login-button {
	width: 75%;
	padding: 15px 0;
	margin: 40px auto;
	/* Center the button horizontally */
	background-color: #ffffff;
	color: #080710;
	font-size: 18px;
	font-weight: 600;
	border-radius: 20px;
	cursor: pointer;
	transition: background-color 0.4s;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
}

#google {
	width: 15%;
	height: 15%;
	border-radius: 100%;
}

.google-icon {
	width: 20px;
	justify-content: center;
	display: flex;
}

.login-button:hover {
	background-color: #00000041;
}

.google-login .google-icon {
	width: 20px;
	margin-right: 10px;
}

/* Image Styling */
.geocache-image {
	max-width: 100%;
	display: block;
	margin: 0 auto 30px;
}

h3 {
	font-weight: 800;
}
</style>