<template>
    <nav class="flex flex-row justify-content-between nav-card">
        <div class="flex flex-row flex-gap-2 align-items-center">
            <router-link to="/" class="text-white">Voltar</router-link>
            <h1 class="text-white capitalize title">
                {{pokemonName}}
            </h1>
        </div>
        <h2 class="text-white font-bold">#{{pokemonId}}</h2>
    </nav>
</template>

<script>
export default {
    props: {
        pokemonName: String,
        pokemonId: Number
    }
}
</script>

<style scoped>
</style>