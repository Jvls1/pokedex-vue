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
                      <li v-for="type in pokemon.types" :key="type">
                          <h3 class="type-tag capitalize">
                              {{type.type.name}}
                          </h3>
                      </li>
                  </ul>
              </div>
              <div class="flex flex-column border align-items-center w-full justify-content-evenly">
                  <div class="flex">
                      <h3 class="text-by-type">About</h3>
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
                          <div>
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
              <div style="margin: 2rem;" class="border">
                  <p class="capitalize">{{description}}</p>
              </div>
              <div class="border card-stats flex flex-column align-items-center">
                  <div class="border">
                      <h3 class="text-by-type">Base Stats</h3>
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
        description: ''
      }
    },
    methods: {
      getPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur', {
          method: 'GET'
        }).then(res => {
          res.json().then(data => ({
            data: data,
            status: res.status
          })).then(res => {
            console.log(res.data);
            this.pokemon = res.data;
            this.linkImage = res.data.sprites.front_default;
          })
        })
        
        fetch('https://pokeapi.co/api/v2/pokemon-species/bulbasaur',{
          method:'GET'
        }).then(res => {
          res.json().then(data => ({
            data: data,
            status: res.status
          })).then(res => {
            console.log(res.data);
            this.description = res.data.flavor_text_entries[0].flavor_text
            console.log(this.description);
          })
        })
        
      }
      
    },
    computed: {
      pokemonImg() {
        return {
          'background-image': 'url('+this.linkImage+')'
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
    border-radius: 2rem;
    padding: 0.5rem;
  }
</style>