<template>
    <nav class="navbar">
        <router-link to="/" class="text-white">Voltar</router-link>
        <TitleContainer class="title text-white">
            {{pokemonName}}
        </TitleContainer>
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
    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .navbar > div {
        display: flex;
        flex-direction: row;
        gap: 2;
        align-items: center;
    }
</style>