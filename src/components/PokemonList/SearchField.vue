<template>
    <div>
        <input type="text" name="search" id="search" placeholder="Search"
            class="search" v-model="pokemonNameOrId" @keyup.enter.prevent="search"/>
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
            this.$emit('pokemonSearch', this.pokemonNameOrId.trim());
        }
    }
}
</script>
<style scoped>
    .search {
        padding: 5px;
        width: 100%;
        border-radius: 8px;
        margin-bottom: 15px;
    }
</style>