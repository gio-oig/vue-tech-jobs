<template>
	<button
		type="button"
		class="filter-button"
		@click="handdleClick($event.target)"
	>
		{{ txt }}
	</button>
</template>

<script>
export default {
	props: {
		txt: String,
		id: String,
	},
	emits: ['handleCLick'],
	data() {
		return {};
	},
	methods: {
		handdleClick(e) {
			this.$emit('handleCLick', this.id);
			const btns = document.querySelectorAll('.filter-button');
			btns.forEach((btn) => {
				btn.classList.remove('active');
			});
			e.classList.add('active');
		},
	},
};
</script>

<style>
.filter-button {
	padding: 1rem 1.5rem;
	margin-right: 2rem;

	font-size: 2rem;
	font-weight: 500;
	line-height: 1.3;

	border: none;
	border-radius: 1.5rem;

	color: #171725;
	background-color: #f1f1f5;
	cursor: pointer;
	outline: none;
	transition: all 0.3s ease 0s;
}

.filter-button:hover {
	background: #e2e2e9;
}

.filter-button.active {
	color: #fff;
	background: #7b7ce6;
	outline: none;
}
@media (max-width: 1000px) {
	.filter-button {
		font-size: 12px;
	}
}
</style>
