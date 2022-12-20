<template>
	<h3 class="type-tag capitalize" :style="getCssColor()">
		{{ typeName }}
	</h3>
</template>

<script>
export default {
	props: {
		typeName: String
	},
	methods: {
		getCssColor() {
			let typeColors = {
				normal: '#AAA67F',
				fighting: '#C12239',
				flying: '#A891EC',
				poison: '#A43E9E',
				ground: '#DEC16B',
				rock: '#B69E31',
				bug: '#A7B723',
				ghost: '#70559B',
				steel: '#B7B9D0',
				fire: '#F57D31',
				water: '#6493EB',
				grass: '#74CB48',
				electric: '#F9CF30',
				psychic: '#FB5584',
				ice: '#9AD6DF',
				dragon: '#7037FF',
				dark: '#75574C',
				fairy: '#E69EAC'
			};
			return `background-color: ${typeColors[this.typeName]}`;
		}
	}
}
</script>

<style scoped>
.type-tag {
	color: white;
	border-radius: 1.5rem;
	padding: 0.5rem;
}
</style>