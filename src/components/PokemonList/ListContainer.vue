<template>
    <div class="container-pokemon">
        <NavbarContainer @listAll="getListPokemon"/>
        <SearchField @pokemonSearch="handleSearch"/>
        <div class="card" style="display: flex; flex-wrap:wrap;">
            <div v-if="notFound">
                <p>No correspondence</p>
            </div>
            <ContentLoader v-if="loading" width="100%" height="100%" primaryColor="#a9a9a9"></ContentLoader>
            <div class="responsive-size" style="padding: 5px;" v-for="pokemon in pokemons" :key="pokemon.name">
                <PokemonCard v-if="!notFound && !loading"
                    :pokemonName="pokemon.name"
                    :pokemonUrl="pokemon.url">
                </PokemonCard>
            </div>
            <div style="height: 70px; width: 100%;"></div>
            <FooterContainer @previousPage="previousPage" @nextPage="nextPage"/>
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
            pokemons: [],
            pageNumber: 0,
            loading: true,
            lastSearh: '',
            notFound: false
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
                    this.loading = false;
                    this.pokemons = [];
                    this.pokemons = res.data.results;
                });
            });
        },
        nextPage() {
            this.pageNumber += 20;
            this.getListPokemon();
            if(this.pokemons <= 0) {
                this.previousPage();
            }
        },
        previousPage() {
            if((this.pageNumber - 20) < 0) {
                return;
            }
            this.pageNumber -= 20;
            this.getListPokemon();
        },
        handleSearch(search) {
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
            } else {
                this.getListPokemon();
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
    @media(max-width: 380px)  {
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
</style>