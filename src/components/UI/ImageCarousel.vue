<template>
	<div class="container-img">
		<img :src="linkImage" />
	</div>
</template>

<script>
export default {
	props: {
		linkImage: String
	}
}
</script>

<style scoped>
.container-img {
	display: flex;
	width: 200px;
	height: 200px;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}

.container-img img {
	flex-shrink: 0;
	min-width: 100%;
	min-height: 100%;
	width: 100%;
	height: 100%;
	object-fit: contain;
}
</style>