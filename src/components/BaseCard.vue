<template>
    <div class="card">
        <div>
            <nav class="flex flex-row justify-content-between nav-card">
                <div class="flex flex-row flex-gap-2 align-items-center">
                  <a class="text-white" v-on:click="getPokemon">Voltar</a>
                  <h1 class="text-white capitalize title">
                      {{pokemon.name}}
                  </h1>
                </div>
                <h2 class="text-white font-bold">#{{pokemon.id}}</h2>
            </nav>
        </div>
        <div class="flex flex-row justify-content-center">
            <div class="container-img">
              <img :src="linkImage"/>
            </div>
        </div>
        <div class="info-card border" style="margin-top: -60px ;">
          <div class="h-full flex flex-column justify-content-between">
              <div class="flex flex-row border w-full justify-content-center" style="padding-top: 60px;">
                  <ul class="flex flex-row flex-gap-2">
                      <li v-for="type in pokemon.types" :key="type.color">
                          <h3 class="type-tag">
                              {{type.type.name}}
                          </h3>
                      </li>
                  </ul>
              </div>
              <div class="flex flex-column border align-items-center w-full justify-content-evenly">
                  <div class="flex">
                      <h3 class="text-by-type capitalize">About</h3>
                  </div>
                  <div class="flex flex-row justify-content-evenly w-full">
                      <div class="flex flex-column align-items-center">
                          <p>{{pokemon.weight}} kg</p>
                          <p>Weight</p>
                      </div>
                      <div class="flex flex-column align-items-center">
                          <p>{{pokemon.height}} m</p>
                          <p>Height</p>
                      </div>
                      <div class="flex flex-column align-items-center">
                          <div class="flex flex-column ">
                              <li v-for="ability in pokemon.abilities" :key="ability">
                                  <p class="capitalize">
                                      {{ability.ability.name}}
                                  </p>
                              </li>
                          </div>
                          <p>Moves</p>
                      </div>
                  </div>
              </div>
              <div class="border">
                  <p class="capitalize-first">
                    {{description}}
                  </p>
              </div>
              <div class="border card-stats flex flex-column align-items-center">
                  <div class="border">
                      <h3 class="text-by-type capitalize">Base Stats</h3>
                  </div>
                  <div class="border flex flex-column align-items-center w-full" v-for="stat in pokemon.stats" :key="stat">
                      <div class="flex flex-row flex-gap-2 justify-content-between w-full">
                          <div class="flex flex-row flex-gap-2">
                            <p class="capitalize">{{stat.stat.name}}</p>
                            <p>{{stat.base_stat}}</p>
                          </div>
                          <div class="w-full">
                            <div class="container-stats">
                              <div class="stats-bar stats-test"></div>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        pokemon: {},
        linkImage: '',
        description: '',
        type: [],
        typeColor: [{
          color: '',
          css: ''
        }],
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
      }
    },
    methods: {
      getPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon/charmander', {
          method: 'GET'
        }).then(res => {
          res.json().then(data => ({
            data: data,
            status: res.status
          })).then(res => {
            console.log(res.data);
            this.pokemon = res.data;
            this.types = res.data.types;

            for (let index = 0; index < this.types; index++) {
              let type = this.types[index].toLowerCase;
              this.typeColor.color = type;
              
              this.typeColor.push(this.typeColor);
              console.log(this.typeColor);
            }
            this.linkImage = res.data.sprites.front_default;
          })
        })
        
        fetch('https://pokeapi.co/api/v2/pokemon-species/charmander',{
          method:'GET'
        }).then(res => {
          res.json().then(data => ({
            data: data,
            status: res.status
          })).then(res => {
            this.description = res.data.flavor_text_entries[0].flavor_text;
            this.description = this.description.replace(/[\n\f]/g,' ').toLowerCase();
          })
        })
        
      }
      
    },
    computed: {
      dynamicColor(type) {
        return {
          if () {
            if(type === 'normal') {
              this.typeColor.css = this.normal;
            } else if(type === 'fighting') {
              this.typeColor.css = this.fighting;
            } else if(type === 'grass') {
              this.typeColor.css = this.grass;
            } else if(type === 'fire') {
              this.fire;
            }
            return this.typeColor.css;
          }
        }
      }
    },
    beforeMount() {
      this.getPokemon();
    }
  }
</script>
  
<style scoped>
  .container-stats {
    width: 100%;
    background-color: #ddd;
  }
  .stats-bar {
    color: var(--type-color);
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .stats-test {
    width: 10%;
    background-color: var(--type-color);
  }
  .text-by-type {
    color: var(--type-color);
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
    height: 80vh;
  }
  .card-stats{
    width: 100%;
  }
  .type-tag {
    background-color: var(--type-color);
    color: white;
    border-radius: 1.5rem;
    padding: 0.5rem;
  }
</style>