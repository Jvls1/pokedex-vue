<template>
    <div class="pokemon-card" >
        <p class="pokemon-id">#{{pokemon.id}}</p>     
        <ContentLoader v-if="loading" width="100%" height="100%"></ContentLoader>       
        <ImageCarousel v-else :linkImage="linkImage" class="pokemon-image"></ImageCarousel>
        <router-link :to="{name: 'pokemon', params:{pokemonId: this.pokemonId}}">
            <p class="pokemon-name capitalize">{{pokemonName}}</p>
        </router-link>
    </div>
</template>
<script>
import ImageCarousel from '../UI/ImageCarousel.vue';
import { ContentLoader } from 'vue-content-loader'
export default {
  components: { ImageCarousel, ContentLoader },
    props: {
        pokemonName: String,
        pokemonUrl: String
    },
    data() {
        return {
            pokemon: {},
            pokemonId: 0,
            linkImage: '',
            typeColor: '',
            loading: true
        }
    },
    methods: {
        getPokemon() {
            fetch(this.pokemonUrl, {
                method: "GET"
            }).then(res => {
                res.json().then(data => ({
                    data: data,
                    status: res.status
                })).then(res => {
                    console.log(this.pokemon)
                    this.pokemon = res.data;
                    let type = res.data.types[0].type.name;
                    this.pokemonId = res.data.id
                    this.typeColor = this.getRgbColor(type);
                    this.linkImage = res.data.sprites.other["official-artwork"].front_default;
                    this.loading = true;
                });
            });
        },
        getRgbColor(type) {
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
                fairy: '#E69EAC',
            }
            return typeColors[type];
        }
    },
    created() {
        this.getPokemon();
    }
}
</script>
<style scoped>
    .pokemon-card {
        position: relative;
        width: 150px;
        padding: 4px;
        border-radius: 10px;
        background-color: v-bind('typeColor');
    }
    .pokemon-id {
        position:absolute; 
        margin: 10px;
        top:0;
        right:0;
        color: v-bind('typeColor');
        font-size: 1.2rem;
        font-weight: 600;
    }
    .pokemon-name {
        color: #fff;
        font-size: 1.5rem;
        text-align: center;
        padding: 10px 0 10px 0;
    }
    .pokemon-image {
        background-color: #fff; 
        border-radius:8px; 
        height:75%;
        width:100%;
        padding-top: 20px
    }
</style>