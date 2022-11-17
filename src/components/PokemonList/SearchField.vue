<template>
    <div>
        <input type="text" name="search" id="search" placeholder="Search"
            class="w-full" v-model="pokemonNameOrId" onsubmit(search())/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pokemonNameOrId: ''
        }
    },
    methods: {
        search() {
            fetch('https://pokeapi.co/api/v2/pokemon/'+this.pokemonNameOrId, {
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
        }
    },
}
</script>
<style scoped>
    
</style>