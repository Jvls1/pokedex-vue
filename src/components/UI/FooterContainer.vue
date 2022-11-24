<template>
    <div class="buttons-div">
        <button class="btn" @click="previousPage">Previous</button>
        <button @click="nextPage">Next</button>
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
    .buttons-div {
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }
    .buttons-div button {
        width: 100px;
        padding: auto;
        background-color: green;
        border: none;
        border-radius: 6px;
        padding: 10px;
        color: white;
        cursor: pointer;
    }
</style>