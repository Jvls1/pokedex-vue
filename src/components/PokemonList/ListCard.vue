<template>
    <div class="card">
        <div>
            <HeaderList></HeaderList>
            <SearchField></SearchField>
        </div>
        <div>
            <ul class="flex flex-column flex-gap-2">
                <li v-for="pokemon in pokemons" :key="pokemon">
                    <PokemonCard 
                        :pokemonName="pokemon.name"
                        :pokemonUrl="pokemon.url">
                    </PokemonCard>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import HeaderList from './HeaderList.vue';
import PokemonCard from './PokemonCard.vue';
import SearchField from './SearchField.vue';
export default {
    data() {
        return {
            pokemons: []
        };
    },
    methods: {
        getListPokemon() {
            fetch("https://pokeapi.co/api/v2/pokemon/", {
                method: "GET"
            }).then(res => {
                res.json().then(data => ({
                    data: data,
                    status: res.status
                })).then(res => {
                    this.pokemons = res.data.results;
                    console.log(this.pokemons);
                });
            });
        }
    },
    beforeMount() {
        this.getListPokemon();
    },
    components: { HeaderList, SearchField, PokemonCard }
}
</script>
<style>
    
</style>