<template>
    <div class="container-pokemon">
        <NavbarList/>
        <SearchField @pokemonSearch="handleSearch"/>
        <div class="card">
            <div>
                <ul class="flex flex-row flex-gap-2 justify-content-between flex-wrap">
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
import SearchField from './SearchField.vue';
import PokemonCard from './PokemonCard.vue';
export default {
    components: { PokemonCard, NavbarList, SearchField },
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
                    this.pokemons = [];
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
        },
        handleSearch(search) {
            if(search == '') {
                this.getListPokemon();
            } else {
                fetch('https://pokeapi.co/api/v2/pokemon/'+search, {
                    method: "GET"
                }).then(res => {
                    res.json().then(data => ({
                        data: data,
                        status: res.status
                    })).then(res => {
                        this.pokemons = [];
                        let pokemon = {
                            name: res.data.name,
                            url: 'https://pokeapi.co/api/v2/pokemon/'+search
                        }
                        this.pokemons.push(pokemon);
                    });
                });
            }
        }
    },
    beforeMount() {
        this.getListPokemon();
    }
}
</script>
<style>
    .container-pokemon {
        margin-left: 1rem;
        margin-right: 1rem;
        background-color: #F7F7F7;
        border-radius: 6px;
    }
</style>