<template>
	<div class="mob-margin">
		<h1>Log In</h1>
		<form @submit.prevent="login()">
			<div>
				<div class="form-group">
					<label for="">Email</label>
					<custom-input type="email" v-model:value="form.email" />
					<span v-if="errors.email">
						{{ errors.email[0] }}
					</span>
				</div>
				<div class="form-group">
					<label for="">Password</label>
					<custom-input type="password" v-model:value="form.password" />
					<span v-if="errors.password">
						{{ errors.password[0] }}
					</span>
				</div>
				<div class="button-section">
					<router-link to="/register">Not Registered?</router-link>
					<custom-button :noLink="true" txt="LogIn" :invert="true" />
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import CustomButton from '../components/shared/CustomButton.vue';
import CustomInput from '../components/shared/CustomInput.vue';
// import user from '../api/user.js';
import { mapActions } from 'vuex';
export default {
	components: { CustomInput, CustomButton },
	name: 'LogIn',
	data() {
		return {
			form: { email: '', password: '' },
			errors: [],
		};
	},
	methods: {
		...mapActions(['loginUser']),
		login() {
			this.loginUser(this.form)
				.then((res) => {
					console.log(res);
					this.$router.push({ name: 'home' });
				})
				.catch((err) => {
					if (err.response.status === 422) {
						this.errors = { ...err.response.data.errors };
					}
				});
		},
	},
};
</script>

<style scoped>
.mob-margin {
	margin: 30px 10px 0 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.mob-margin h1 {
	margin-bottom: 4rem;
}

form {
	width: 500px;
	max-width: 100%;
}

label {
	display: block;
	margin-bottom: 2rem;
	font-weight: 600;
	font-size: 1.5rem;
	color: #171725;
}

.form-group {
	margin-bottom: 1.2rem;
	width: 100%;
}

.button-section {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.button-section a {
	font-size: 15px;
	opacity: 0.8;
	color: #696974;
	text-decoration: none;
}
</style>
