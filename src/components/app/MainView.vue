<template>
	<div class="main-container">
		<v-progress-linear :active="showProgress" indeterminate color="orange"> </v-progress-linear>
		<v-main>
			<v-container class="fill-height center-align-element" fluid>
				<span class="text--h1">{{ description }}</span>
			</v-container>
		</v-main>
		<v-footer app class="flex-wrap justify-center transparent">
			<span class="text-subtitle-2 text--secondary">
				© {{ new Date().getFullYear() }} Anantha Chetan, All Rights Reserved
			</span>
		</v-footer>
	</div>
</template>

<script>
export default {
	name: "MainView",
	data() {
		return {
			showProgress: false,
			description: "My starter app",
		};
	},
};
</script>
<style scoped>
.main-container {
	width: 100%;
	height: 100%;
	overflow: auto;
	display: flex;
	flex-flow: column nowrap;
}
</style>
