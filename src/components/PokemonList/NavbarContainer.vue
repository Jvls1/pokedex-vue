<template>
	<div style="margin-top:1rem; margin-bottom:1rem;">
		<div class="nav-container">
			<h1 @click="listAll" class="title">Pokédex</h1>
			<font-awesome-icon @click="showTypeList" icon="fa-filter" style="cursor:pointer;" />
		</div>
	</div>
</template>

<script>

export default {
	methods: {
		listAll() {
			this.$emit('listAll');
		},
		showTypeList() {
			this.$emit('showTypeList');
		}
	}
}
</script>
<style scoped>
.title {
	cursor: pointer;
}

div {
	width: 100%;
}

.nav-container {
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;
}
</style>