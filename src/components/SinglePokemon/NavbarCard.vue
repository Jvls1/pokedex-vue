<template>
    <nav class="flex flex-row justify-content-between nav-card">
        <div class="flex flex-row flex-gap-2 align-items-center">
            <router-link to="/" class="text-white">Voltar</router-link>
            <TitleContainer class="title text-white">
                {{pokemonName}}
            </TitleContainer>
        </div>
        <h2 class="text-white font-bold">#{{pokemonId}}</h2>
    </nav>
</template>

<script>
import TitleContainer from '../UI/TitleContainer.vue';

export default {
    props: {
        pokemonName: String,
        pokemonId: Number
    },
    components: { TitleContainer }
}
</script>

<style scoped>
</style>