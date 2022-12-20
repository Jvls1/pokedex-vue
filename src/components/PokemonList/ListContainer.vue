<template>
	<div class="container-pokemon">
		<div class="flex flex-row justify-content-between">
			<NavbarContainer @showTypeList="showTypeList" />
			<div v-if="renderTypeList" class="type-list">
				<div v-for="typeP in pokemonTypes" :key="typeP.name">
					<p @click.prevent="getPokemonByType(typeP.name)" class="capitalize">
						{{ typeP.name }}
					</p>
				</div>
			</div>
		</div>
		<SearchField @pokemonSearch="handleSearch" />
		<div class="card" style="display: flex; flex-wrap:wrap;">
			<div v-if="pokemons.length === 0">
				<p>No correspondence</p>
			</div>
			<ContentLoader v-if="loading" width="100%" height="100%" primaryColor="#a9a9a9"></ContentLoader>
			<div class="responsive-size" style="padding: 5px;" v-for="pokemon in pokemons" :key="pokemon.name">
				<PokemonCard v-if="!loading" :pokemonName="pokemon.name" :pokemonUrl="pokemon.url">
				</PokemonCard>
			</div>
			<div style="height: 70px; width: 100%;"></div>
			<FooterContainer @previousPage="previousPage" @nextPage="nextPage" />
		</div>
	</div>
</template>

<script>
import NavbarContainer from './NavbarContainer.vue';
import SearchField from './SearchField.vue';
import PokemonCard from './PokemonCard.vue';
import FooterContainer from '../UI/FooterContainer.vue';
import { ContentLoader } from 'vue-content-loader'
export default {
	components: { PokemonCard, NavbarContainer, SearchField, ContentLoader, FooterContainer },
	data() {
		return {
			pokemons: Array,
			pokemonsName: [],
			offSet: 0,
			loading: true,
			lastSearh: '',
			notFound: false,
			pokemonTypes: [],
			selected: '',
			rowsPerPage: 20,
			pageIndex: 0,
			renderTypeList: false
		};
	},
	methods: {
		getListPokemon() {
			fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=" + this.offSet, {
				method: "GET"
			}).then(res => {
				res.json().then(data => ({
					data: data,
					status: res.status
				})).then(res => {
					this.loading = false;
					this.pokemons = [];
					this.pokemons = res.data.results;
				});
			});
		},
		getPokemonTypes() {
			fetch("https://pokeapi.co/api/v2/type/", {
				method: "GET"
			}).then(res => {
				res.json().then(data => ({
					data: data,
					status: res.status
				})).then(res => {
					this.loading = false;
					this.pokemonTypes = res.data.results;
				});
			});
		},
		getPokemonByType(type) {
			this.selected = type;
			this.renderTypeList = false;
			fetch("https://pokeapi.co/api/v2/type/" + type, {
				method: "GET"
			}).then(res => {
				res.json().then(data => ({
					data: data,
					status: res.status
				})).then(res => {
					let pokemons = res.data.pokemon;
					this.pokemons = [];
					this.pokemonsName = [];
					pokemons.forEach(pokemon => {
						this.pokemonsName.push(pokemon.pokemon.name);
					});
					console.log('getPokemonByType');
					this.getPokemonByName();
				});
			});
		},
		getPokemonByName() {
			console.log(this.pageIndex);
			for (let i = this.pageIndex * this.rowsPerPage; i < this.pageIndex * this.rowsPerPage + this.rowsPerPage; i++) {
				if (this.pokemonsName[i] === undefined) {
					return;
				}
				fetch('https://pokeapi.co/api/v2/pokemon/' + this.pokemonsName[i], {
					method: "GET"
				}).then(res => {
					res.json().then(data => ({
						data: data,
						status: res.status
					})).then(res => {
						let pokemon = {
							name: res.data.name,
							url: 'https://pokeapi.co/api/v2/pokemon/' + this.pokemonsName[i]
						}
						this.pokemons.push(pokemon);
					});
				});
			}
		},
		nextPage() {
			console.log(this.selected);
			if (this.selected != '') {
				this.pageIndex += 1;
				this.pokemons = [];
				console.log('nextPage');
				this.getPokemonByName();
				setTimeout(() => {
					if (this.pokemons <= 0) {
						this.previousPage();
					}
				}, 1000);
				return;
			}
			this.offSet += 20;
			this.getListPokemon();
			if (this.pokemons <= 0) {
				this.previousPage();
			}
		},
		previousPage() {
			if (this.selected != '') {
				if ((this.pageIndex - 1) < 0) {
					return;
				}
				this.pageIndex -= 1;
				this.pokemons = [];
				console.log('previousPage');
				this.getPokemonByName();
				return;
			}
			if ((this.offSet - 20) < 0) {
				return;
			}
			this.offSet -= 20;
			this.getListPokemon();
		},
		handleSearch(search) {
			if (this.lastSearh === search) {
				return;
			}
			if (search !== '') {
				fetch('https://pokeapi.co/api/v2/pokemon/' + search, {
					method: "GET"
				}).then(res => {
					this.notFound = true
					if (res.status === 200) {
						this.notFound = false
					}
					res.json().then(data => ({
						data: data,
						status: res.status
					})).then(res => {
						this.pokemons = [];
						let pokemon = {
							name: res.data.name,
							url: 'https://pokeapi.co/api/v2/pokemon/' + search
						}
						this.pokemons.push(pokemon);
					});
				});
			} else {
				this.getListPokemon();
			}
		},
		showTypeList() {
			this.renderTypeList = !this.renderTypeList;
		}
	},
	beforeMount() {
		this.getListPokemon();
		this.getPokemonTypes();
		this.loading = true;
	}
}
</script>
<style>
@media(max-width: 380px) {
	.responsive-size {
		width: 100%;
	}
}

@media(min-width: 380px) and (max-width: 460px) {
	.responsive-size {
		width: 50%;
	}
}

@media(min-width: 460px) and (max-width: 580px) {
	.responsive-size {
		width: 50%;
	}
}

@media(min-width: 580px) {
	.responsive-size {
		width: 25%;
	}
}

.container-pokemon {
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	margin-top: 0.5rem;
	padding: 0.5rem;
	margin-bottom: 60px;
	background-color: #F7F7F7;
	border-radius: 6px;
}

.type-list {
	position: absolute;
	top: 4rem;
	z-index: 1;
	background-color: white;
	padding: 15px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
}
</style>