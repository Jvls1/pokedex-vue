<template>
  <div class="card type-color container">
    <div>
      <NavbarCard 
        :pokemonName="pokemon.name"
        :pokemonId="pokemon.id">
      </NavbarCard>
    </div>
    <div class="flex flex-row justify-content-center">
      <ImageCarousel :linkImage="linkImage"></ImageCarousel>
    </div>
    <div class="info-card" style="margin-top: -60px ;">
      <div class="h-full flex flex-column justify-content-between">
        <div class="flex flex-row w-full justify-content-center" style="padding-top: 60px;">
          <ul class="flex flex-row flex-gap-2">
            <li v-for="typeP in pokemon.types" :key="typeP.type.name">
              <TypeBadge 
                :typeName="typeP.type.name">
              </TypeBadge>
            </li>
          </ul>
        </div>
        <div class="flex flex-column align-items-center w-full justify-content-evenly">
          <div class="flex">
            <h3 class="text-by-type capitalize font-bold type-color-text">About</h3>
          </div>
          <AboutCard
            :weight="pokemon.weight"
            :height="pokemon.height"
            :abilities="pokemon.abilities">
          </AboutCard>
        </div>
        <div class="flex flex-column align-items-center w-full">
            <p class="capitalize-first">{{description}}</p>
        </div>
        <div class="flex flex-column align-items-center w-full">
          <h3 class="text-by-type capitalize font-bold type-color-text">Base Stats</h3>
        </div>
        <div class="card-stats flex flex-column" v-for="stat in pokemon.stats" :key="stat">
          <BaseStats
            :baseStatsName="stat.stat.name" 
            :baseStatsNumber="stat.base_stat"
            :typeColorCss="typeColorCss">
          </BaseStats>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseStats from './BaseStats.vue'
import NavbarCard from './NavbarCard.vue'
import TypeBadge from './TypeBadge.vue'
import AboutCard from './AboutCard.vue'
import ImageCarousel from '../UI/ImageCarousel.vue'
export default {
  components: { BaseStats, NavbarCard, ImageCarousel, TypeBadge, AboutCard },
  data() {
    return {
      pokemon: {},
      linkImage: '',
      description: '',
      typeColorCss: ''
    }
  },
  methods: {
    getPokemon() {
      fetch('https://pokeapi.co/api/v2/pokemon/'+this.$route.params.pokemonId, {
          method: "GET"
      }).then(res => {
        res.json().then(data => ({
          data: data,
          status: res.status
        })).then(res => {
          this.pokemon = res.data;
          let type = res.data.types[0].type.name;
          this.typeColorCss = this.getRgbColor(type);
          this.linkImage = res.data.sprites.other["official-artwork"].front_default;
        });
      });
       fetch('https://pokeapi.co/api/v2/pokemon-species/'+this.$route.params.pokemonId,{
          method:'GET'
        }).then(res => {
          res.json().then(data => ({
            data: data,
            status: res.status
          })).then(res => {
            this.description = res.data.flavor_text_entries[0].flavor_text;
            for (let i = 0; i < res.data.flavor_text_entries.length; i++) {
              this.description = res.data.flavor_text_entries[0].flavor_text;
              if(res.data.flavor_text_entries[i].language.name === 'en') {
                 this.description = res.data.flavor_text_entries[i].flavor_text;
              }
            }
            this.description = this.description.replace(/[\n\f]/g,' ').toLowerCase();
          })
        })
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
  beforeMount() {
    this.getPokemon();
    this.getRgbColor();
  }
}
</script>
  
<style>
  .text-by-type {
    color: v-bind('typeColorCss');
  }
  .nav-card {
    padding: 0.5rem;
    align-items: center;
  }
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
  }
  .info-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin: 0.5rem;
    border-radius: 10px;
    height: 70vh;
    margin: 10px;
  }
  .card-stats{
    width: 100%;
  }
  .type-color {
    background-color: v-bind('typeColorCss');
  }
  .type-color-text {
    color: v-bind('typeColorCss');
  } 
</style>