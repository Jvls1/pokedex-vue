<template>
    <div>
        <select v-bind="selected">
            <option v-for="typeP in pokemonTypes" :value="typeP.name" :key="typeP.name">
                {{typeṔ.name}}
            </option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selected: '',
            pokemonT: []
        }
    },
    props: {
        pokemonTypes: Array
    },
    methods: {
        setValue() {
            console.log(this.pokemonTypes)
            this.pokemonT = this.pokemonTypes;
        }
    },
    created() {
        this.setValue();
    }
}
</script>
<style scoped>
    
</style>