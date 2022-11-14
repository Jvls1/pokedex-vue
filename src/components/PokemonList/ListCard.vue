<template>
    <div style="margin-left: 1rem; margin-right: 1rem;">
        <NavbarList/>
        <div class="card">
            <div>
                <ul class="flex flex-row flex-gap-2 justify-content-between" style="flex-wrap: wrap;">
                    <li v-for="pokemon in pokemons" :key="pokemon">
                        <PokemonCard 
                            :pokemonName="pokemon.name"
                            :pokemonUrl="pokemon.url">
                        </PokemonCard>
                    </li>
                </ul>
            </div>
            <div class="">
                <a @click="previousPage">Voltar</a>
                <a @click="nextPage">Próximo</a>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarList from './NavbarList.vue';
import PokemonCard from './PokemonCard.vue';
export default {
    components: { PokemonCard, NavbarList },
    data() {
        return {
            pokemons: [],
            pageNumber: 0
        };
    },
    methods: {
        getListPokemon() {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset="+this.pageNumber, {
                method: "GET"
            }).then(res => {
                res.json().then(data => ({
                    data: data,
                    status: res.status
                })).then(res => {
                    this.pokemons = res.data.results;
                });
            });
        },
        nextPage() {
            this.pageNumber += 20;
            this.getListPokemon();
        },
        previousPage() {
            if((this.pageNumber - 20) < 0) {
                return;
            }
            this.pageNumber -= 20;
            this.getListPokemon();
        }
    },
    beforeMount() {
        this.getListPokemon();
    }
}
</script>
<style>
    
</style>