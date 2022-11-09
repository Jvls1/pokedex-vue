<template>
    <div class="flex flex-row justify-content-evenly w-full">
        <div class="flex flex-column align-items-center">
            <p>{{pokemon.weight}} kg</p>
            <p>Weight</p>
        </div>
        <div class="flex flex-column align-items-center">
            <p>{{pokemon.height}} m</p>
            <p>Height</p>
        </div>
        <div class="flex flex-column align-items-center">
            <div class="flex flex-column ">
                <li v-for="ability in pokemon.abilities" :key="ability">
                    <p class="capitalize">
                        {{ability.ability.name}}
                    </p>
                </li>
            </div>
            <p>Moves</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        weight: String,
        height: String,
        abilities: Array
    }
}
</script>

<style scoped>
</style>