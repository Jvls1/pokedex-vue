<template>
    <div>
        <a @click="previousPage">Voltar</a>
        <a @click="nextPage">Próximo</a>
    </div>
</template>
<script>
export default {
    methods: {
        previousPage() {
            this.$emit('previousPage', this.pokemonNameOrId);
        },
        nextPage() {
            this.$emit('nextPage', this.pokemonNameOrId);
        }
    }
}
</script>
<style scoped>
    
</style>