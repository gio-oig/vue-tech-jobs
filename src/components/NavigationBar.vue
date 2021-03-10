<template>
	<header>
		<router-link to="/" class="logo">DevJob</router-link>
		<mob-menu
			:isActive="mobMenuDropdown"
			@logout="logoutUser()"
			@close="toggleMobDropDown()"
		/>
		<nav>
			<nav-link :to="{ name: 'jobs' }" name="Jobs" background="#EDE3FF">
				<template #icon>
					<jobs-svg />
				</template>
			</nav-link>
			<nav-link
				:to="{ name: 'companies' }"
				name="Companies"
				background="#D5F7FF"
			>
				<template #icon>
					<companies-svg fill="rgb(49, 170, 225)" />
				</template>
			</nav-link>
		</nav>
		<div class="gap"></div>
		<div v-if="user" class="profile-conainer">
			<button @click="toggleProfileDropdown()">
				<div class="menu-profile-container">
					<div class="menu-icon-container" style="background-color:#EFF3FF">
						<div class="menu-icon-wrapper">
							<div>
								<profile-svg />
							</div>
						</div>
					</div>
				</div>
				<div class="username">
					{{ user.name }}
					<dropdown-svg />
				</div>
			</button>
			<dropdown :isActive="profileDropdown">
				<template #default>
					<ul>
						<li><a href="#">profile</a></li>
						<li><a href="#" @click="logout()">logout</a></li>
					</ul>
				</template>
			</dropdown>
		</div>
		<div v-if="!user" class="auth">
			<custom-button path="/login" txt="login" :invert="false" />
			<custom-button path="/register" txt="register" :invert="true" />
		</div>
		<div class="lang-container">
			<button class="menu-lang-container" @click="toggleLangDropdown()">
				<span>EN</span>
				<dropdown-svg />
			</button>
			<dropdown :isActive="langDropdown">
				<template #default>
					<ul>
						<li @click="changeLanguage('en')">English</li>
						<li @click="changeLanguage('ge')">ქართული</li>
					</ul>
				</template>
			</dropdown>
		</div>
		<div class="toggle-button" @click="toggleMobDropDown()">
			<burger-menu-svg />
		</div>
	</header>
	<bottom-menu v-if="user" />
</template>

<script>
import BottomMenu from './BottomMenu.vue';
import Dropdown from './Dropdown.vue';
import MobMenu from './MobMenu.vue';
import NavLink from './NavLink.vue';
import BurgerMenuSvg from './svgs/BurgerMenuSvg.vue';
import CompaniesSvg from './svgs/companiesSvg.vue';
import DropdownSvg from './svgs/DropdownSvg.vue';
import JobsSvg from './svgs/JobsSvg.vue';
import ProfileSvg from './svgs/ProfileSvg.vue';
import { mapState, mapActions } from 'vuex';
import CustomButton from './shared/CustomButton';
// import { useI18n } from 'vue-i18n';
// import user from '../api/user';
export default {
	components: {
		JobsSvg,
		CompaniesSvg,
		ProfileSvg,
		DropdownSvg,
		BurgerMenuSvg,
		NavLink,
		Dropdown,
		BottomMenu,
		MobMenu,
		CustomButton,
	},
	// setup() {
	// 	const { t, locale } = useI18n();
	// 	return { t, locale };
	// },
	data() {
		return {
			mobMenuDropdown: false,
			profileDropdown: false,
			langDropdown: false,
		};
	},
	methods: {
		toggleProfileDropdown() {
			this.profileDropdown = !this.profileDropdown;
		},
		toggleLangDropdown() {
			this.langDropdown = !this.langDropdown;
		},
		toggleMobDropDown() {
			this.mobMenuDropdown = !this.mobMenuDropdown;
		},
		logout() {
			this.logoutUser();
		},
		changeLanguage(lang) {
			this.$i18n.locale = lang;
		},
		...mapActions(['logoutUser']),
	},
	computed: {
		...mapState(['user']),
	},
};
</script>

<style>
.gap {
	flex: 1;
}

header {
	display: flex;
	align-items: center;
	padding: 2rem;
	top: 0;
	z-index: 2;
	position: sticky;
	box-shadow: 5px 5px 60px 10px rgb(240 243 251 / 70%);
	background: #fff;
}

.logo {
	margin-right: 4rem;
	font-size: 2.5rem;
	font-weight: 500;
	text-decoration: none;
}

nav {
	display: flex;
}

.nav-link {
	display: flex;
	margin-right: 3rem;
	align-items: center;
	text-decoration: none;
	color: #171725;
	font-size: 14px;
}

.menu-icon-container {
	margin-right: 1rem;
	width: 5rem;
	height: 5rem;
	display: flex;
	align-items: center;
	border-radius: 18px;
	justify-content: center;
	background-color: #f2f2fc;
}

.menu-icon-wrapper {
	width: 36px;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	background: #fff;
}

.menu-icon-wrapper > div {
	position: relative;
	display: flex;
}

.profile-conainer {
	position: relative;
	margin-right: 2rem;
}

.profile-conainer button {
	display: flex;
	background: none;
	border: none;
	align-items: center;
	outline: none;
}

.menu-lang-container {
	background: none;
	border: none;
	outline: none;
}

.lang-container li {
	padding: 1rem;
	cursor: pointer;
}

@media (max-width: 1000px) {
	.profile-conainer,
	.lang-container,
	nav,
	.auth {
		display: none;
	}
}
</style>
