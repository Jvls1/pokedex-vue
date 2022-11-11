<template>
    <div class="pokemon-card" style="background-color: #ddd;">
        <p>#{{pokemon.id}}</p>
        <ImageCarousel :linkImage="linkImage" class="carousel-image"></ImageCarousel>
        <h2 class="capitalize-first">{{pokemonName}}</h2>
    </div>
</template>
<script>
import ImageCarousel from '../UI/ImageCarousel.vue';
export default {
  components: { ImageCarousel },
    props: {
        pokemonName: String,
        pokemonUrl: String
    },
    data() {
        return {
            pokemon: {},
            linkImage: '',
            typeColor: String
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
                    this.pokemon = res.data;
                    let type = res.data.types[0].type.name;
                    this.typeColor = this.getRgbColor(type);
                    this.linkImage = res.data.sprites.other["official-artwork"].front_default;
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
        width: 200px;
        height: 200px;
        border: 4px solid v-bind('typeColor');
        border-radius: 10px;
    }
</style>