<template>
    <div class="buttons-div">
        <button @click="previousPage">Previous</button>
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
        background-color: #fff;
        box-shadow: 0px -5px 5px rgb(0 0 0 / 20%);
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0px;
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
        margin: 10px;
    }
</style>