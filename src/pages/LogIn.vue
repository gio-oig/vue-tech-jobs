<template>
	<div class="mob-margin">
		<h1>Register</h1>
		<form>
			<div>
				<div class="form-group">
					<label for="">Email</label>
					<custom-input type="email" v-model:value="email" />
				</div>
				<div class="form-group">
					<label for="">Password</label>
					<custom-input type="password" v-model:value="password" />
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
export default {
	components: { CustomInput, CustomButton },
	name: 'LogIn',
	data() {
		return {
			email: '',
			password: '',
		};
	},
};
</script>

<style>
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
