<template>
	<div class="dropbox">
		<button type="button" @click="toggleDropdown()">
			<div class="label-container">
				<span>{{ title }}</span>
				<div class="value-laceholder">
					{{ current }}
				</div>
			</div>
			<dropdown-svg />
		</button>
		<div class="dropdown-placeholder">
			<div class="dropdown-container" :class="{ active: isActive }">
				<ul class="">
					<li><div @click="filterEvent('')">All</div></li>
					<li v-for="(option, index) in options" :key="index">
						<div @click="filterEvent(option)">
							{{ upperCaseFirstChar(option) }}
						</div>
					</li>
					<!-- example -->
					<!-- <li><div @click="filterEvent('junior')">Junior</div></li>
					<li><div @click="filterEvent('teamLead')">Team Lead</div></li> -->
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import DropdownSvg from '../svgs/DropdownSvg.vue';
export default {
	name: 'FilterDropdown',
	components: { DropdownSvg },
	props: {
		title: String,
		current: String,
		options: Array,
	},
	emits: ['filter'],
	data() {
		return {
			isActive: false,
		};
	},
	methods: {
		toggleDropdown() {
			this.isActive = !this.isActive;
		},
		filterEvent(name) {
			this.toggleDropdown();
			this.$emit('filter', name);
		},
		upperCaseFirstChar(option) {
			let formatedOption = '';
			// check if string is camaleCase
			if (/(?=[A-Z])/.test(option)) {
				// if camalCase split and join with sapce
				formatedOption = option.split(/(?=[A-Z])/).join(' ');
			}

			if (formatedOption) {
				return this.upper(formatedOption);
			} else {
				return this.upper(option);
			}
		},
		upper(str) {
			return str.slice(0, 1).toUpperCase() + str.slice(1);
		},
	},
};
</script>

<style scoped>
.dropbox {
	position: relative;
}

.dropbox button {
	width: 225px;
	height: 100%;
	padding: 1rem 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	border: none;
	border-radius: 1rem;

	text-align: left;
	cursor: pointer;
	color: #171725;
	background-color: #fff;
	outline: none;
}

.dropbox button span {
	font-size: 1.7rem;
	font-weight: lighter;
}

.dropbox button span ~ div {
	font-size: 2rem;
	font-weight: bold;
}

.dropbox:hover button {
	background-color: rgb(248, 248, 248);
}

.dropdown-placeholder {
	position: relative;
}

.dropdown-container {
	position: absolute;
	display: none;
	left: 0px;
	right: 0px;
	top: 8px;
	z-index: 10;
}

.dropdown-container.active {
	display: block;
}
.dropdown-container ul {
	width: 100%;
	padding: 5px;

	border-radius: 12px;

	list-style: none;
	background-color: #fff;
	box-shadow: 0px 5px 40px 10px rgb(240 243 251 / 70%);
}

.dropdown-container ul li {
	font-size: 18px;
	border-radius: 5px;
}

.dropdown-container ul li:hover {
	background-color: rgb(248, 248, 248);
	cursor: pointer;
}

.dropdown-container ul li div {
	padding: 8px;
}

@media (max-width: 1000px) {
	.dropbox button {
		width: 150px;
	}
	.dropbox button span {
		font-size: 1.3rem;
	}
	.dropbox button span ~ div {
		font-size: 1.1rem;
	}
	.dropdown-container ul li {
		font-size: 12px;
	}
}

@media (max-width: 500px) {
	.dropbox {
		width: 100%;
		margin: 5px 0;
	}

	.dropbox button {
		width: 100%;
		border: 2px solid #7b7ce6;
		/* box-shadow: 0px 5px 40px 10px rgb(240 243 251 / 70%); */
	}
	.dropbox button:first-child {
		/* margin-right: 20px; */
	}
}
</style>
