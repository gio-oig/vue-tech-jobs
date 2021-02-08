<template>
	<header>
		<h1 class="logo">Main</h1>
		<nav>
			<nav-link name="jobs" background="#EDE3FF">
				<template #icon>
					<jobs-svg />
				</template>
			</nav-link>
			<nav-link name="companies" background="#D5F7FF">
				<template #icon>
					<companies-svg />
				</template>
			</nav-link>
		</nav>
		<div class="gap"></div>
		<div class="profile-conainer">
			<button @click="toggleProfileDroppdown()">
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
					Unknown
					<dropdown-svg />
				</div>
			</button>
			<dropdown :isActive="profileDropdown">
				<template #default>
					<ul>
						<li><a href="#">profile</a></li>
						<li><a href="#">logout</a></li>
					</ul>
				</template>
			</dropdown>
		</div>
		<div class="lang-container">
			<button class="menu-lang-container" @click="toggleLangDroppdown()">
				<span>EN</span>
				<dropdown-svg />
			</button>
			<dropdown :isActive="langDropdown">
				<template #default>
					<ul>
						<li>English</li>
						<li>ქართული</li>
					</ul>
				</template>
			</dropdown>
		</div>
		<div class="toggle-button">
			<burger-menu-svg />
		</div>
	</header>
</template>

<script>
import Dropdown from './Dropdown.vue';
import NavLink from './NavLink.vue';
import BurgerMenuSvg from './svgs/BurgerMenuSvg.vue';
import CompaniesSvg from './svgs/companiesSvg.vue';
import DropdownSvg from './svgs/DropdownSvg.vue';
import JobsSvg from './svgs/JobsSvg.vue';
import ProfileSvg from './svgs/ProfileSvg.vue';

export default {
	components: {
		JobsSvg,
		CompaniesSvg,
		ProfileSvg,
		DropdownSvg,
		BurgerMenuSvg,
		NavLink,
		Dropdown,
	},
	data() {
		return {
			profileDropdown: false,
			langDropdown: false,
		};
	},
	methods: {
		toggleProfileDroppdown() {
			this.profileDropdown = !this.profileDropdown;
		},
		toggleLangDroppdown() {
			this.langDropdown = !this.langDropdown;
		},
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
}

.logo {
	margin-right: 4rem;
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

/* .toggle-button {
} */
</style>
