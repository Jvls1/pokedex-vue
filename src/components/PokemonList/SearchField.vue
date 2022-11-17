<template>
    <div>
        <input type="text" name="search" id="search" placeholder="Search"
            class="w-full" v-model="pokemonNameOrId" :onchange="search"/>
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
            this.$emit('pokemonSearch', this.pokemonNameOrId);
        }
    },
}
</script>
<style scoped>
    
</style>