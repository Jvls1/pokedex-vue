<template>
    <div class="container-pokemon">
        <NavbarList/>
        <SearchField @pokemonSearch="handleSearch"/>
        <div class="card" style="display: flex; flex-wrap:wrap;">
            <div v-if="notFound">
                <p>No correspondence</p>
            </div>
            <ContentLoader v-if="loading" width="100%" height="100%" primaryColor="#a9a9a9"></ContentLoader>
            <div class="teste" style="padding: 5px;" v-for="pokemon in pokemons" :key="pokemon.name">
                <PokemonCard v-if="!notFound && !loading"
                    :pokemonName="pokemon.name"
                    :pokemonUrl="pokemon.url">
                </PokemonCard>
            </div>
            <div style="height: 240px;"></div>
            <FooterContainer @previousPage="previousPage" @nextPage="nextPage"/>
        </div>
    </div>
</template>

<script>
import NavbarList from './NavbarList.vue';
import SearchField from './SearchField.vue';
import PokemonCard from './PokemonCard.vue';
import FooterContainer from '../UI/FooterContainer.vue';
import { ContentLoader } from 'vue-content-loader'
export default {
    components: { PokemonCard, NavbarList, SearchField, ContentLoader, FooterContainer },
    data() {
        return {
            pokemons: [],
            pageNumber: 0,
            loading: true,
            lastSearh: '',
            notFound: false
        };
    },
    methods: {
        getListPokemon() {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=21&offset="+this.pageNumber, {
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
        nextPage() {
            this.pageNumber += 21;
            this.getListPokemon();
            if(this.pokemons <= 0) {
                this.previousPage();
            }
        },
        previousPage() {
            if((this.pageNumber - 21) < 0) {
                return;
            }
            this.pageNumber -= 21;
            this.getListPokemon();
        },
        handleSearch(search) {
            search = search.trim();
            if(this.lastSearh === search) {
                return;
            }
            if(search !== '') {
                fetch('https://pokeapi.co/api/v2/pokemon/'+search, {
                    method: "GET"
                }).then(res => {
                    this.notFound = true
                    if(res.status === 200) {
                        this.notFound = false
                    }
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
        this.loading = true;
    }
}
</script>
<style>
    @media(max-width: 380px) {
        .teste {
            width: 50%;
        }
    }
    @media(min-width: 380px) and (max-width: 460px) {
        .teste {
            width: 33.3%;
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
</style>