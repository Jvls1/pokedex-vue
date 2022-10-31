<template>
    <div class="card">
        <div>
            <nav class="flex flex-row justify-content-between nav-card">
                <a class="text-white" v-on:click="getPokemon">Voltar</a>
                <h1 class="text-white">
                    {{pokemon.name}}
                </h1>
                <h2 class="text-white">#{{pokemon.id}}</h2>
            </nav>
        </div>
        <div class="flex flex-row justify-content-center">
            <img :src="linkImage" alt="" 
                    class="container-img">
        </div>
        <div class="info-card border" style="margin-top: -60px ;">
            <div class="flex flex-row border" style="padding-top: 60px;">
                <ul class="flex flex-row flex-gap-2">
                    <li v-for="type in pokemon.types" :key="type">
                        <h3 class="type-tag">
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
                                <p>
                                    {{ability.ability.name}}
                                </p>
                            </li>
                        </div>
                        <p>moves</p>
                    </div>
                </div>
            </div>
            <div style="margin: 2rem;" class="border">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, laboriosam blanditiis laborum nesciunt, placeat sint minus dolore ut, sed modi vero? Possimus pariatur deleniti praesentium aut dolorem illo at numquam.</p>
            </div>
            <div class="border card-stats flex flex-column align-items-center">
                <div class="border">
                    <h3 class="text-by-type">Base Stats</h3>
                </div>
                <div class="border flex flex-column align-items-center w-full" v-for="stat in pokemon.stats" :key="stat">
                    <div class="flex flex-row flex-gap-2">
                        <p>{{stat.stat.name}}</p>
                        <p>{{stat.base_stat}}</p>
                        <div class="container-stats">
                             <div class="stats-bar stats-test"></div>
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
        linkImage: ''
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
            console.log(res.data)
            this.pokemon = res.data;
            this.linkImage = res.data.sprites.front_default;
          })
        })
      }
      
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
    width: 90%;
    background-color: var(--type-color);
  }
  .text-by-type {
    color: var(--type-color);
  }
  .nav-card {
    padding: 0.5rem;
    align-items: center;
  }
  .text-white {
    color: white;
  }
  .border {
      border: 1px solid red;
  }
  .flex {
    display: flex;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-column {
    flex-direction: column;
  }
  .flex-gap-2 {
    gap:2rem;
  }
  .container-img {
    width: 200px;
    height: 200px;
  }
  .card {
    background-color: var(--type-color);
  }
  .info-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin: 0.5rem;
    border-radius: 6px;
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
  .justify-content-between {
    justify-content: space-between;
  }
  .justify-content-evenly {
    justify-content: space-evenly;
  }
  .justify-content-center {
    justify-content: center;
  }
  .align-items-center {
    align-items: center;
  }
  .w-full {
    width: 100%;
  }
</style>